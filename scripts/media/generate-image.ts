/**
 * Generate text-free artwork with the OpenAI Images API, self-host it and register it.
 *
 *   npm run media:generate -- --check                       # key valid? which model would be used?
 *   npm run media:generate -- glp1-body-map infographic-art "Front view of a human head and torso …"
 *   npm run media:generate -- <id> illustration "<prompt>" [--size 1024x1536] [--quality high] [--model gpt-image-1] [--force]
 *   npm run media:generate -- <id> <kind> "<prompt>" --dry-run   # print model and full prompt; no image, no cost
 *   npm run media:generate -- --usage                       # images generated so far and estimated cost
 *
 * Kinds: illustration | infographic-art (never "photo": AI output must not pass as a real scene).
 *
 * Safeguards (docs/MEDIA-GUIDE.md §3):
 *  - The key is read from .env with process.loadEnvFile and sent only to api.openai.com. It is
 *    never printed, logged or written anywhere; API error messages are scrubbed before printing.
 *  - A fixed STYLE PREAMBLE (versioned: PREAMBLE_VERSION) is prepended to every prompt: calm
 *    clinical style, light neutral palette, and absolutely no text, numbers, labels, logos,
 *    needles in skin, labelled vials, products, before/after or identifiable people. All labels are
 *    added later by the site as real, translatable text (<Infographic>).
 *  - The entry is written with ai.review: pending. Someone must open the image, check it for
 *    stray text-like marks and scientific or anatomical errors, write ai.review_note, and only then
 *    set review: ok. The validator warns about pending artwork so it cannot ship unnoticed.
 *  - Model: unless --model is given, the newest "gpt-image*" model the key can use, found with
 *    GET /v1/models (sorted by its `created` date).
 */
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, assertId, fail, httpRequest, parseFlags, reminder, registryHas, run, targetFile, today, writeEntry } from './registry.ts';
import { logGeneration, printTotals } from './usage-log.ts';

const API = 'https://api.openai.com/v1';
export const PREAMBLE_VERSION = 'v1';
export const STYLE_PREAMBLE = [
  'Clinical, calm editorial medical illustration in the manner of a modern anatomy atlas plate.',
  'Neutral, light, low-saturation palette with soft natural colours on a plain very light background, so it reads well on paper white and when shown on near-black.',
  'Absolutely no text of any kind: no letters, words, numbers, labels, captions, legends, arrows with writing, logos, watermarks, signatures, brand names, user-interface elements or marks that look like writing.',
  'No syringes or needles piercing skin, no vials, bottles or packaging with labels, no pills or products presented as merchandise, no before/after comparison, no identifiable real person.',
  'Anatomically plausible and correct: true proportions, organ shapes and positions. Calm and factual, never dramatic or glamorised.',
].join(' ');
const KIND_ADDENDUM: Record<string, string> = {
  'infographic-art': 'Numbered markers and labels will be added on top by the website, so keep the structures that will be marked clearly separated, with generous empty space around each, and leave plain background margins.',
  illustration: '',
};

/** Never let anything key-like reach the terminal. */
const scrub = (s: string) => s.replace(/sk-[A-Za-z0-9_\-*.]{4,}/g, 'sk-…').replace(/Bearer\s+\S+/gi, 'Bearer …');

function loadKey(): string {
  const env = path.join(ROOT, '.env');
  if (!fs.existsSync(env)) fail('no .env file in the project root (add OPENAI_API_KEY=… there; .env is git-ignored)');
  process.loadEnvFile(env);
  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) fail('.env has no OPENAI_API_KEY');
  return key;
}

async function api(key: string, method: 'GET' | 'POST', route: string, body?: unknown, timeoutMs = 60_000) {
  const res = await httpRequest(`${API}${route}`, {
    method,
    headers: { Authorization: `Bearer ${key}`, ...(body ? { 'Content-Type': 'application/json' } : {}), Accept: 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
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

async function main(): Promise<void> {
  const { positional, flags } = parseFlags(process.argv.slice(2));
  if (flags.usage) return printTotals();
  const key = loadKey();

  if (flags.check) {
    const { id, all } = await pickModel(key);
    console.log(`key: valid\nmodel: ${id}${all.length > 1 ? `  (also available: ${all.slice(1).join(', ')})` : ''}`);
    return;
  }

  const [id, kind, prompt] = positional;
  if (!id || !kind || !prompt) fail('usage: generate-image.ts <media-id> <illustration|infographic-art> "<prompt>" [--size 1024x1536] [--quality high] [--model …] [--force]');
  assertId(id);
  if (!(kind in KIND_ADDENDUM)) fail(`kind must be illustration or infographic-art (AI output is never a "photo")`);
  const force = flags.force === true;
  if (registryHas(id) && !force) fail(`"${id}" is already registered (use --force to replace)`);
  if (/\b(?:text|label|caption|title|word|letter|number|logo)s?\b.*\b(?:saying|reading|that says|with the words?)\b/i.test(prompt)) {
    fail('the prompt asks for text in the image; labels are added by the site as real text (<Infographic>)');
  }

  const model = (flags.model as string) ?? (await pickModel(key)).id;
  const size = (flags.size as string) ?? (kind === 'infographic-art' ? '1024x1536' : '1536x1024');
  const quality = (flags.quality as string) ?? 'high';
  const fullPrompt = [STYLE_PREAMBLE, KIND_ADDENDUM[kind], `Subject: ${prompt}`].filter(Boolean).join('\n\n');
  if (flags['dry-run']) {
    console.log(`Dry run — would generate "${id}" with ${model} (${size}, quality ${quality}). Full prompt:

${fullPrompt}`);
    return;
  }
  console.log(`Generating "${id}" with ${model} (${size}, quality ${quality}, style preamble ${PREAMBLE_VERSION}) …`);

  const r = await api(key, 'POST', '/images/generations', { model, prompt: fullPrompt, size, quality, n: 1, output_format: 'png', background: 'opaque' }, 300_000);
  if (r.status !== 200) fail(`the Images API answered ${r.status}: ${scrub(r.json.error?.message ?? '(no message)')}`);
  // Log the spend before anything else can fail: the call has been billed once it returns 200.
  const est = logGeneration({ id, model, size, quality, usage: r.json.usage as never });
  console.log(`Estimated cost of this image: ${est === null ? 'unknown (model not in the price table)' : '$' + est.toFixed(3)} — logged in media-usage.jsonl`);
  const b64 = (r.json.data as { b64_json?: string }[] | undefined)?.[0]?.b64_json;
  if (!b64) fail('the Images API returned no image data');

  const sharp = (await import('sharp')).default;
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
      focal: '50% 50%',
      sources: [],
      ai: { model, prompt, preamble: PREAMBLE_VERSION, generated: today(), review: 'pending', review_note: '' },
    },
    { force },
  );
  const meta = await sharp(png).metadata();
  console.log(`Saved src/assets/media/${path.basename(dest)} (${meta.width}×${meta.height}, ${(png.length / 1e6).toFixed(2)} MB) and registered "${id}" with ai.review: pending.`);
  console.log('Now OPEN THE IMAGE and check: any text-like marks? anatomical or scientific errors? Write what you saw in ai.review_note.');
  console.log('Only a person who has checked it sets ai.review: ok (and ai.reviewed_by).');
  reminder(id);
}

run(main);
