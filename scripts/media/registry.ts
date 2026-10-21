/**
 * Shared helpers for the media tools (fetch-commons, generate-image): paths, the registry writer
 * (keeps comments and key order in src/data/media.yaml) and small CLI utilities.
 */
import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';
import YAML from 'yaml';
import { ROOT } from '../lib/load.ts';
import { mediaEntrySchema, type MediaEntry } from '../../src/schemas/media.ts';

export { ROOT };

/**
 * The owner's main checkout. When this tree is a git worktree, its .git is a FILE
 * ("gitdir: <main>/.git/worktrees/<name>") and the worktree's commondir points back to <main>/.git.
 * Owner-level files that must not fork per worktree live in the main checkout: the .env with the
 * API key (read in place, never copied) and the media-usage.jsonl cost log. Outside a worktree this
 * is ROOT.
 */
export function mainCheckoutRoot(): string {
  try {
    const dotGit = path.join(ROOT, '.git');
    if (!fs.statSync(dotGit).isFile()) return ROOT;
    const gitdir = fs.readFileSync(dotGit, 'utf8').match(/^gitdir:\s*(.+)$/m)?.[1]?.trim();
    if (!gitdir) return ROOT;
    const abs = path.resolve(ROOT, gitdir);
    const commondirFile = path.join(abs, 'commondir');
    const common = fs.existsSync(commondirFile) ? path.resolve(abs, fs.readFileSync(commondirFile, 'utf8').trim()) : path.resolve(abs, '../..');
    const main = path.dirname(common);
    return fs.existsSync(main) ? main : ROOT;
  } catch {
    return ROOT;
  }
}
export const MAIN_ROOT = mainCheckoutRoot();
export const MEDIA_DIR = path.join(ROOT, 'src/assets/media');
export const REGISTRY = path.join(ROOT, 'src/data/media.yaml');
export const MEDIA_TEXT = path.join(ROOT, 'src/i18n/en/media.json');

/** Identifies the tool to Wikimedia (their API etiquette asks for a descriptive User-Agent). */
export const USER_AGENT = 'PeptidesExplained-media-tool/1.0 (https://peptides-explained.pages.dev; independent non-commercial health reference)';

const HEADER = `# Image registry: one entry per image in src/assets/media/. See docs/MEDIA-GUIDE.md.
# Alt text and captions live in src/i18n/<locale>/media.json (keyed by the same id).
# Written by scripts/media/fetch-commons.ts and scripts/media/generate-image.ts; edit by hand freely.
`;

export type HttpResult = { status: number; statusText: string; type: string; body: Buffer; json<T = unknown>(): T };

/**
 * Minimal HTTPS client without a connection pool (agent: false), so every socket is closed when its
 * response ends. fetch() keeps sockets alive, and on Windows a process that ends while they close
 * can trip a libuv assertion. Follows up to 5 redirects. Headers are never logged. The body may be a
 * string (JSON) or a Buffer (multipart/form-data for image uploads).
 */
export function httpRequest(
  url: string,
  { method = 'GET', headers = {}, body, timeoutMs = 120_000 }: { method?: string; headers?: Record<string, string>; body?: string | Buffer; timeoutMs?: number } = {},
  redirects = 5,
): Promise<HttpResult> {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    if (u.protocol !== 'https:') return reject(new CliError(`refusing non-HTTPS URL ${u.origin}`));
    const req = https.request(
      u,
      { method, agent: false, headers: { 'User-Agent': USER_AGENT, ...headers, ...(body ? { 'Content-Length': String(Buffer.byteLength(body)) } : {}) } },
      (res) => {
        const status = res.statusCode ?? 0;
        if (status >= 300 && status < 400 && res.headers.location && redirects > 0) {
          res.resume();
          resolve(httpRequest(new URL(res.headers.location, u).href, { method, headers, body, timeoutMs }, redirects - 1));
          return;
        }
        const chunks: Buffer[] = [];
        res.on('data', (c: Buffer) => chunks.push(c));
        res.on('end', () => {
          const buf = Buffer.concat(chunks);
          resolve({ status, statusText: res.statusMessage ?? '', type: String(res.headers['content-type'] ?? ''), body: buf, json: <T,>() => JSON.parse(buf.toString('utf8')) as T });
        });
        res.on('error', reject);
      },
    );
    req.setTimeout(timeoutMs, () => req.destroy(new CliError(`request to ${u.hostname} timed out after ${timeoutMs / 1000} s`)));
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

export function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export function assertId(id: string): void {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) fail(`media id must be kebab-case: "${id}"`);
}

/** Thrown by fail(); run() prints it and sets a non-zero exit code. */
export class CliError extends Error {}

export function fail(msg: string): never {
  throw new CliError(msg);
}

/**
 * Runs a tool's main function. Never calls process.exit(): on Windows, exiting while fetch's
 * keep-alive sockets are still closing trips a libuv assertion, so the process ends naturally.
 */
export function run(main: () => Promise<void>): void {
  main().catch((e: unknown) => {
    console.error(`\x1b[31merror\x1b[0m ${e instanceof CliError ? e.message : ((e as Error)?.stack ?? String(e))}`);
    process.exitCode = 1;
  });
}

export function parseFlags(argv: string[]): { positional: string[]; flags: Record<string, string | true> } {
  const positional: string[] = [];
  const flags: Record<string, string | true> = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const [k, v] = a.slice(2).split('=', 2);
      if (v !== undefined) flags[k] = v;
      else if (argv[i + 1] && !argv[i + 1].startsWith('--')) flags[k] = argv[++i];
      else flags[k] = true;
    } else positional.push(a);
  }
  return { positional, flags };
}

export function readRegistryDoc(): YAML.Document {
  const text = fs.existsSync(REGISTRY) ? fs.readFileSync(REGISTRY, 'utf8') : HEADER;
  const doc = YAML.parseDocument(text);
  if (!doc.contents) doc.contents = doc.createNode({}) as never;
  return doc;
}

export function registryHas(id: string): boolean {
  return readRegistryDoc().has(id);
}

/** Validates the entry with the shared schema, then writes it (replacing an existing entry only with force). */
export function writeEntry(id: string, entry: Record<string, unknown>, { force = false } = {}): MediaEntry {
  const r = mediaEntrySchema.safeParse(entry);
  if (!r.success) fail(`registry entry for "${id}" is invalid:\n` + r.error.issues.map((i) => `  ${i.path.join('.')}: ${i.message}`).join('\n'));
  const doc = readRegistryDoc();
  if (doc.has(id) && !force) fail(`"${id}" is already registered in src/data/media.yaml (use --force to replace)`);
  // Drop undefined values so the YAML stays clean.
  const clean = JSON.parse(JSON.stringify(entry));
  doc.set(id, doc.createNode(clean));
  let out = doc.toString({ lineWidth: 0, flowCollectionPadding: false });
  if (!out.startsWith('#')) out = HEADER + out;
  fs.writeFileSync(REGISTRY, out.replace(/\r\n/g, '\n'), 'utf8');
  return r.data;
}

export function ensureMediaDir(): void {
  fs.mkdirSync(MEDIA_DIR, { recursive: true });
}

/** Where the media file for an id would land, refusing to overwrite unless forced. */
export function targetFile(id: string, ext: string, force: boolean): string {
  ensureMediaDir();
  const name = `${id}.${ext}`;
  const p = path.join(MEDIA_DIR, name);
  const clash = fs.readdirSync(MEDIA_DIR).find((f) => f.replace(/\.[^.]+$/, '') === id);
  if (clash && !force) fail(`src/assets/media/${clash} already exists (use --force to replace)`);
  if (clash && clash !== name) fs.rmSync(path.join(MEDIA_DIR, clash));
  return p;
}

export function reminder(id: string): void {
  let hasText = false;
  try {
    hasText = id in JSON.parse(fs.readFileSync(MEDIA_TEXT, 'utf8'));
  } catch {
    /* no media.json yet */
  }
  if (!hasText) {
    console.log(`\nNext: add alt text (and an optional caption) to src/i18n/en/media.json:\n  "${id}": { "alt": "What the image shows that matters for understanding", "caption": "…" }`);
    console.log('The validator fails until the alt text exists. Alt-text rules: docs/MEDIA-GUIDE.md §5.');
  }
}
