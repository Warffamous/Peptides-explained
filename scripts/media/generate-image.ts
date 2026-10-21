/**
 * Generate text-free artwork with the OpenAI Images API, self-host it and register it.
 *
 *   npm run media:generate -- --check                       # key valid? which model would be used?
 *   npm run media:generate -- glp1-body-map infographic-art "Front view of a human head and torso …"
 *   npm run media:generate -- <id> illustration "<prompt>" [--size 1024x1536] [--quality high] [--model gpt-image-1] [--force]
 *   npm run media:generate -- <id> <kind> "<prompt>" --dry-run   # print model and full prompt; no image, no cost
 *   npm run media:generate -- --usage                       # images generated so far and estimated cost
 *
 * Edit / variant mode (POST /v1/images/edits, the registered image is sent as the input):
 *
 *   npm run media:generate -- <new-id> <kind> --from <source-id> --dark            # dark-scheme version, same composition
 *   npm run media:generate -- <new-id> <kind> --from <source-id> --dark "<extra instruction>"
 *   npm run media:generate -- <new-id> <kind> --from <source-id> "<edit instruction>"
 *
 * --dark keeps the drawing identical (composition, positions, shapes, framing) and changes only the
 * colours: a very dark warm near-black ground and line work and tones adjusted to read on it. The
 * size and the model default to the source image's, so the two versions share their proportions
 * (the markers of a plate and the overlays of an explainer are placed in % of the art).
 *
 * Kinds: illustration | infographic-art (never "photo": AI output must not pass as a real scene).
 *
 * Safeguards (docs/MEDIA-GUIDE.md §3):
 *  - The key is read from .env with process.loadEnvFile and sent only to api.openai.com. It is
 *    never printed, logged or written anywhere; API error messages are scrubbed before printing.
 *    In a git worktree without its own .env, the main checkout's .env is read in place (never copied).
 *  - A fixed STYLE PREAMBLE (versioned: PREAMBLE_VERSION) is prepended to every prompt: calm
 *    clinical style, light neutral palette, and absolutely no text, numbers, labels, logos,
 *    needles in skin, labelled vials, products, before/after or identifiable people. All labels are
 *    added later by the site as real, translatable text (<Infographic>, explainer overlays). Dark
 *    variants use the same preamble with the palette sentence for a dark ground (`v1-dark`).
 *  - The entry is written with ai.review: pending. Someone must open the image, check it for
 *    stray text-like marks and scientific or anatomical errors, write ai.review_note, and only then
 *    set review: ok. The validator warns about pending artwork so it cannot ship unnoticed.
 *  - Every billed call is appended to the owner's single cost log (usage-log.ts; in a worktree,
 *    the main checkout's media-usage.jsonl).
 *  - Model: unless --model is given, the newest "gpt-image*" model the key can use, found with
 *    GET /v1/models (sorted by its `created` date); an edit uses its source image's model.
 */
import fs from 'node:fs';
import path from 'node:path';
import { MAIN_ROOT, MEDIA_DIR, ROOT, assertId, fail, httpRequest, parseFlags, readRegistryDoc, reminder, registryHas, run, targetFile, today, writeEntry } from './registry.ts';
import { LOG, logGeneration, printTotals } from './usage-log.ts';

const API = 'https://api.openai.com/v1';
export const PREAMBLE_VERSION = 'v1';
const PREAMBLE = {
  style: 'Clinical, calm editorial medical illustration in the manner of a modern anatomy atlas plate.',
  light: 'Neutral, light, low-saturation palette with soft natural colours on a plain very light background, so it reads well on paper white and when shown on near-black.',
  dark: 'Dark-ground edition: a plain, very dark warm near-black background (charcoal with a faint brown warmth) filling the whole canvas, with soft natural colours and light warm-grey line work adjusted to read calmly on it; no glow, no neon, no vignette.',
  noText: 'Absolutely no text of any kind: no letters, words, numbers, labels, captions, legends, arrows with writing, logos, watermarks, signatures, brand names, user-interface elements or marks that look like writing.',
  noProducts: 'No syringes or needles piercing skin, no vials, bottles or packaging with labels, no pills or products presented as merchandise, no before/after comparison, no identifiable real person.',
  anatomy: 'Anatomically plausible and correct: true proportions, organ shapes and positions. Calm and factual, never dramatic or glamorised.',
};
/** v1: the light preamble every generation gets (text unchanged since 20 October 2026). */
export const STYLE_PREAMBLE = [PREAMBLE.style, PREAMBLE.light, PREAMBLE.noText, PREAMBLE.noProducts, PREAMBLE.anatomy].join(' ');
/** v1-dark: the same rules with the palette sentence for a dark ground (dark-scheme variants). */
export const STYLE_PREAMBLE_DARK = [PREAMBLE.style, PREAMBLE.dark, PREAMBLE.noText, PREAMBLE.noProducts, PREAMBLE.anatomy].join(' ');
/** The standard instruction for --dark: the same drawing, only the colours change. */
export const DARK_EDIT = [
  'Recreate the supplied illustration as its dark-background edition.',
  'Keep everything else identical: the same composition, framing, scale and crop; every structure in exactly the same position, size, shape and outline; the same anatomy; nothing added, nothing removed, nothing moved.',
  'Change only the colours: the plain background becomes a very dark, warm near-black (charcoal with a faint brown warmth) that fills the whole canvas edge to edge, with no vignette, frame, border or gradient;',
  'outlines and translucent tones that were dark on light become soft light warm-grey line work so they read on the dark ground; the organs keep their natural hues, a little richer so they stand out calmly on the dark ground, without glowing.',
  'Still absolutely no text, letters, numbers, labels or marks that look like writing.',
].join(' ');
const KIND_ADDENDUM: Record<string, string> = {
  'infographic-art': 'Numbered markers and labels will be added on top by the website, so keep the structures that will be marked clearly separated, with generous empty space around each, and leave plain background margins.',
  illustration: '',
};

/** Never let anything key-like reach the terminal. */
const scrub = (s: string) => s.replace(/sk-[A-Za-z0-9_\-*.]{4,}/g, 'sk-…').replace(/Bearer\s+\S+/gi, 'Bearer …');

/**
 * Reads OPENAI_API_KEY from this tree's .env or, in a git worktree that has none, from the main
 * checkout's .env (read in place; the key is never copied, printed or logged).
 */
function loadKey(): string {
  const candidates = [...new Set([path.join(ROOT, '.env'), path.join(MAIN_ROOT, '.env')])];
  const env = candidates.find((f) => fs.existsSync(f));
  if (!env) fail('no .env file in the project root or the main checkout (add OPENAI_API_KEY=… there; .env is git-ignored)');
  process.loadEnvFile(env);
  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) fail(`${env === candidates[0] ? '.env' : "the main checkout's .env"} has no OPENAI_API_KEY`);
  return key;
}

/** multipart/form-data body for the edits endpoint: plain fields plus one PNG file. */
function multipart(fields: Record<string, string>, file: { name: string; field: string; data: Buffer; type: string }): { body: Buffer; type: string } {
  const boundary = `----pe-media-${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
  const parts: Buffer[] = [];
  for (const [k, v] of Object.entries(fields)) parts.push(Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="${k}"\r\n\r\n${v}\r\n`, 'utf8'));
  parts.push(
    Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="${file.field}"; filename="${file.name}"\r\nContent-Type: ${file.type}\r\n\r\n`, 'utf8'),
    file.data,
    Buffer.from(`\r\n--${boundary}--\r\n`, 'utf8'),
  );
  return { body: Buffer.concat(parts), type: `multipart/form-data; boundary=${boundary}` };
}

async function api(key: string, method: 'GET' | 'POST', route: string, body?: unknown, timeoutMs = 60_000, form?: { body: Buffer; type: string }) {
  const res = await httpRequest(`${API}${route}`, {
    method,
    headers: { Authorization: `Bearer ${key}`, ...(form ? { 'Content-Type': form.type } : body ? { 'Content-Type': 'application/json' } : {}), Accept: 'application/json' },
    body: form ? form.body : body ? JSON.stringify(body) : undefined,
    timeoutMs,
  });
  let json: { error?: { message?: string; code?: string } } & Record<string, unknown> = {};
  try {
    json = res.json();
  } catch {
    /* non-JSON error page */
  }
  return { status: res.status, json };
}

/** The newest gpt-image model this key can use (by the model's `created` timestamp). */
async function pickModel(key: string): Promise<{ id: string; all: string[] }> {
  const r = await api(key, 'GET', '/models');
  if (r.status === 401) fail('the API key is invalid (401)');
  if (r.status !== 200) fail(`GET /v1/models answered ${r.status}: ${scrub(r.json.error?.message ?? '')}`);
  // Newest first; among equally new ids prefer a dated snapshot (…-YYYY-MM-DD) over a moving alias,
  // so the registry records a model id that will keep meaning the same thing.
  const dated = (id: string) => (/-\d{4}-\d{2}-\d{2}$/.test(id) ? 1 : 0);
  const models = ((r.json.data as { id: string; created: number }[]) ?? [])
    .filter((m) => /^gpt-image/.test(m.id))
    .sort((a, b) => b.created - a.created || dated(b.id) - dated(a.id) || b.id.localeCompare(a.id));
  if (!models.length) fail('this key has no gpt-image model available');
  return { id: models[0].id, all: models.map((m) => m.id) };
}

type Registered = { file: string; kind: string; focal?: string; ai?: { model?: string } };

async function main(): Promise<void> {
  const { positional, flags } = parseFlags(process.argv.slice(2));
  if (flags.usage) return printTotals();
  const key = loadKey();

  if (flags.check) {
    const { id, all } = await pickModel(key);
    const borrowed = MAIN_ROOT !== ROOT && !fs.existsSync(path.join(ROOT, '.env'));
    console.log(`key: valid${borrowed ? " (read from the main checkout's .env)" : ''}\nmodel: ${id}${all.length > 1 ? `  (also available: ${all.slice(1).join(', ')})` : ''}\ncost log: ${LOG}`);
    return;
  }

  const from = typeof flags.from === 'string' ? flags.from : undefined;
  const dark = flags.dark === true;
  const [id, kind, userPrompt = ''] = positional;
  if (!id || !kind || (!userPrompt && !(from && dark))) {
    fail(
      'usage: generate-image.ts <media-id> <illustration|infographic-art> "<prompt>" [--size 1024x1536] [--quality high] [--model …] [--force]\n' +
        '       generate-image.ts <media-id> <kind> --from <source-id> --dark ["<extra instruction>"]   (edit: same drawing, dark ground)',
    );
  }
  if (dark && !from) fail('--dark makes a variant of an existing image: add --from <source-id>');
  assertId(id);
  if (!(kind in KIND_ADDENDUM)) fail(`kind must be illustration or infographic-art (AI output is never a "photo")`);
  const force = flags.force === true;
  if (registryHas(id) && !force) fail(`"${id}" is already registered (use --force to replace)`);
  if (/\b(?:text|label|caption|title|word|letter|number|logo)s?\b.*\b(?:saying|reading|that says|with the words?)\b/i.test(userPrompt)) {
    fail('the prompt asks for text in the image; labels are added by the site as real text (<Infographic>)');
  }

  // Edit mode: the source must be a registered image; its size and model are kept unless overridden.
  const sharp = (await import('sharp')).default;
  let source: { id: string; entry: Registered; png: Buffer; size: string } | undefined;
  if (from) {
    assertId(from);
    const entry = (readRegistryDoc().toJS() as Record<string, Registered>)[from];
    if (!entry) fail(`--from "${from}" is not registered in src/data/media.yaml`);
    const file = path.join(MEDIA_DIR, entry.file);
    if (!fs.existsSync(file)) fail(`--from "${from}": src/assets/media/${entry.file} does not exist`);
    const png = await sharp(file).png().toBuffer();
    const meta = await sharp(png).metadata();
    source = { id: from, entry, png, size: `${meta.width}x${meta.height}` };
  }

  const model = (flags.model as string) ?? source?.entry.ai?.model ?? (await pickModel(key)).id;
  const size = (flags.size as string) ?? source?.size ?? (kind === 'infographic-art' ? '1024x1536' : '1536x1024');
  const quality = (flags.quality as string) ?? 'high';
  const preamble = dark ? STYLE_PREAMBLE_DARK : STYLE_PREAMBLE;
  const preambleVersion = dark ? `${PREAMBLE_VERSION}-dark` : PREAMBLE_VERSION;
  // What the registry records as the writer's prompt (the preamble is named by its version).
  const prompt = source ? [dark ? DARK_EDIT : '', userPrompt].filter(Boolean).join(' ') : userPrompt;
  const fullPrompt = [preamble, KIND_ADDENDUM[kind], source ? `Edit: ${prompt}` : `Subject: ${prompt}`].filter(Boolean).join('\n\n');
  const what = source ? `edit of "${source.id}" (src/assets/media/${source.entry.file}, ${source.size})` : 'new image';
  const route = source ? 'POST /v1/images/edits' : 'POST /v1/images/generations';
  if (flags['dry-run']) {
    console.log(`Dry run — would make "${id}" (${what}) with ${model} (${size}, quality ${quality}, preamble ${preambleVersion}) via ${route}. Cost log: ${LOG}. Full prompt:\n\n${fullPrompt}`);
    return;
  }
  console.log(`${source ? 'Editing' : 'Generating'} "${id}" (${what}) with ${model} (${size}, quality ${quality}, style preamble ${preambleVersion}) …`);

  let r: Awaited<ReturnType<typeof api>>;
  if (source) {
    const src = source;
    const fields: Record<string, string> = { model, prompt: fullPrompt, size, quality, n: '1', output_format: 'png', background: 'opaque', input_fidelity: 'high' };
    const send = () => api(key, 'POST', '/images/edits', undefined, 300_000, multipart(fields, { field: 'image', name: src.entry.file.replace(/\.[^.]+$/, '.png'), data: src.png, type: 'image/png' }));
    r = await send();
    // Not every model takes input_fidelity; a refused parameter is a 400 and is not billed.
    if (r.status === 400 && /input_fidelity/i.test(r.json.error?.message ?? '')) {
      delete fields.input_fidelity;
      console.log('(this model does not take input_fidelity; retrying without it)');
      r = await send();
    }
  } else {
    r = await api(key, 'POST', '/images/generations', { model, prompt: fullPrompt, size, quality, n: 1, output_format: 'png', background: 'opaque' }, 300_000);
  }
  if (r.status !== 200) fail(`the Images API answered ${r.status}: ${scrub(r.json.error?.message ?? '(no message)')}`);
  // Log the spend before anything else can fail: the call has been billed once it returns 200.
  const est = logGeneration({ id, model, size, quality, mode: source ? 'edit' : 'generate', from: source?.id, usage: r.json.usage as never });
  console.log(`Estimated cost of this image: ${est === null ? 'unknown (model not in the price table)' : '$' + est.toFixed(3)} — logged in ${LOG}`);
  const b64 = (r.json.data as { b64_json?: string }[] | undefined)?.[0]?.b64_json;
  if (!b64) fail('the Images API returned no image data');

  const png = await sharp(Buffer.from(b64, 'base64')).png({ compressionLevel: 9, effort: 8 }).toBuffer();
  const dest = targetFile(id, 'png', force);
  fs.writeFileSync(dest, png);
  writeEntry(
    id,
    {
      file: path.basename(dest),
      kind,
      origin: 'ai-generated',
      license: 'CC-BY-4.0',
      license_url: 'https://creativecommons.org/licenses/by/4.0/',
      author: `AI-generated with ${model} for Peptides Explained`,
      focal: source?.entry.focal ?? '50% 50%',
      sources: [],
      ai: { model, prompt, preamble: preambleVersion, generated: today(), review: 'pending', review_note: '', ...(source ? { edited_from: source.id } : {}) },
    },
    { force },
  );
  const meta = await sharp(png).metadata();
  console.log(`Saved src/assets/media/${path.basename(dest)} (${meta.width}×${meta.height}, ${(png.length / 1e6).toFixed(2)} MB) and registered "${id}" with ai.review: pending.`);
  if (source && `${meta.width}x${meta.height}` !== source.size) console.log(`Note: the result is ${meta.width}×${meta.height} but "${source.id}" is ${source.size}; a dark variant must keep the proportions.`);
  console.log('Now OPEN THE IMAGE and check: any text-like marks? anatomical or scientific errors? Write what you saw in ai.review_note.');
  console.log('Only a person who has checked it sets ai.review: ok (and ai.reviewed_by).');
  reminder(id);
}

run(main);
