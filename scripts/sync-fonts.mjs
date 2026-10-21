/**
 * Copies the self-hosted font files the site uses (Outfit, JetBrains Mono for numbers and dates,
 * Noto Sans Arabic) from node_modules into public/fonts/ (git-ignored). Self-hosting: no
 * third-party font CDN, no IP leakage, no consent. Only Latin, Latin Extended (Polish, Turkish)
 * and Arabic subsets are copied. Any other file in public/fonts/ (left over from an earlier set of
 * typefaces) is removed, so the build never ships a font nothing uses.
 */
import fs from 'node:fs';
import path from 'node:path';

const out = path.resolve('public/fonts');
fs.mkdirSync(out, { recursive: true });
const files = [
  ['@fontsource-variable/outfit', ['outfit-latin-wght-normal.woff2', 'outfit-latin-ext-wght-normal.woff2']],
  ['@fontsource-variable/jetbrains-mono', ['jetbrains-mono-latin-wght-normal.woff2', 'jetbrains-mono-latin-ext-wght-normal.woff2']],
  ['@fontsource-variable/noto-sans-arabic', ['noto-sans-arabic-arabic-wght-normal.woff2']],
];
const wanted = new Set(files.flatMap(([, names]) => names));
let removed = 0;
for (const name of fs.readdirSync(out)) {
  if (!wanted.has(name)) {
    fs.rmSync(path.join(out, name), { force: true });
    removed++;
  }
}
let n = 0;
for (const [pkg, names] of files) {
  for (const name of names) {
    const src = path.resolve('node_modules', pkg, 'files', name);
    if (!fs.existsSync(src)) throw new Error(`missing font ${src}`);
    fs.copyFileSync(src, path.join(out, name));
    n++;
  }
}
console.log(`sync-fonts: ${n} files -> public/fonts${removed ? ` (${removed} unused removed)` : ''}`);
