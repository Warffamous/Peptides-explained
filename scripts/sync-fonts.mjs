/**
 * Copies the self-hosted font files the design systems use from node_modules into
 * public/fonts/ (git-ignored). Self-hosting: no third-party font CDN, no IP leakage, no consent.
 * Only Latin, Latin Extended (Polish, Turkish) and Arabic subsets are copied.
 */
import fs from 'node:fs';
import path from 'node:path';

const out = path.resolve('public/fonts');
fs.mkdirSync(out, { recursive: true });
const files = [
  ['@fontsource-variable/inter', ['inter-latin-wght-normal.woff2', 'inter-latin-ext-wght-normal.woff2', 'inter-latin-wght-italic.woff2', 'inter-latin-ext-wght-italic.woff2']],
  ['@fontsource-variable/jetbrains-mono', ['jetbrains-mono-latin-wght-normal.woff2', 'jetbrains-mono-latin-ext-wght-normal.woff2']],
  ['@fontsource-variable/outfit', ['outfit-latin-wght-normal.woff2', 'outfit-latin-ext-wght-normal.woff2']],
  ['@fontsource-variable/source-sans-3', ['source-sans-3-latin-wght-normal.woff2', 'source-sans-3-latin-ext-wght-normal.woff2', 'source-sans-3-latin-wght-italic.woff2', 'source-sans-3-latin-ext-wght-italic.woff2']],
  ['@fontsource-variable/noto-sans-arabic', ['noto-sans-arabic-arabic-wght-normal.woff2']],
];
let n = 0;
for (const [pkg, names] of files) {
  for (const name of names) {
    const src = path.resolve('node_modules', pkg, 'files', name);
    if (!fs.existsSync(src)) throw new Error(`missing font ${src}`);
    fs.copyFileSync(src, path.join(out, name));
    n++;
  }
}
console.log(`sync-fonts: ${n} files -> public/fonts`);
