/**
 * Make the link-preview image ("share card") that messengers and social sites show for a page.
 *
 *   npm run media:share-card              # every locale that is built (config/locales.json)
 *   npm run media:share-card -- en nl     # only these
 *
 * Writes public/og/<locale>.png (1200 × 630). BaseHead points og:image and twitter:image at it,
 * falling back to the English card. Without our own og:image, the host (Lovable) inserts a
 * screenshot of its app instead.
 *
 * The card is HTML in the site's own design (Outfit, the dark "Mechanism" tokens, the three-bead
 * logo from public/favicon.svg) with the words from src/i18n/<locale>/common.json, so it stays in
 * step with the site. Everything that matters sits in the middle 630 × 630, because WhatsApp and
 * others often crop the preview to a square. Rendered with headless Chrome or Edge (set CHROME_PATH
 * to use another browser binary).
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { ROOT, loadLocales } from '../lib/load.ts';

const W = 1200;
const H = 630;

function fail(msg: string): never {
  console.error(`share-card: ${msg}`);
  process.exit(1);
}

function browser(): string {
  const candidates = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean) as string[];
  const found = candidates.find((p) => fs.existsSync(p));
  if (!found) fail('no Chrome, Chromium or Edge found; set CHROME_PATH');
  return found;
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** A faint chain of residue beads along a gentle wave, like the sequence figures on compound pages. */
function chain(x0: number, y0: number, n: number, dx: number, amp: number, phase: number, cyanEvery: number): string {
  let beads = '';
  let line = '';
  for (let i = 0; i < n; i++) {
    const x = x0 + i * dx;
    const y = y0 + Math.sin(i * 0.55 + phase) * amp;
    line += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)} `;
    const cyan = cyanEvery > 0 && i % cyanEvery === 2;
    beads += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="13" class="${cyan ? 'bead bead--cyan' : 'bead'}"/>`;
  }
  return `<path d="${line}" class="chain"/>${beads}`;
}

function cardHtml(locale: string): string {
  const file = path.join(ROOT, 'src/i18n', locale, 'common.json');
  if (!fs.existsSync(file)) fail(`missing ${path.relative(ROOT, file)}`);
  const common = JSON.parse(fs.readFileSync(file, 'utf8'));
  const brand: string = common.brand;
  const tagline: string = common.tagline;
  const independence: string = (common.footer?.independence ?? '').split(' · ').slice(0, 3).join(' · ');
  if (!brand || !tagline || !independence) fail(`${locale}: common.json needs brand, tagline and footer.independence`);
  const [first, ...rest] = brand.split(' ');
  const font = (f: string) => pathToFileURL(path.join(ROOT, 'public/fonts', f)).href;
  const host = new URL(JSON.parse(fs.readFileSync(path.join(ROOT, 'config/site.json'), 'utf8')).siteUrl).host;
  return `<!doctype html>
<html lang="${locale}"><head><meta charset="utf-8">
<style>
@font-face { font-family: 'Outfit'; src: url('${font('outfit-latin-wght-normal.woff2')}') format('woff2'); font-weight: 100 900; }
@font-face { font-family: 'Outfit'; src: url('${font('outfit-latin-ext-wght-normal.woff2')}') format('woff2'); font-weight: 100 900; unicode-range: U+0100-024F, U+1E00-1EFF; }
@font-face { font-family: 'JetBrains Mono'; src: url('${font('jetbrains-mono-latin-wght-normal.woff2')}') format('woff2'); font-weight: 100 900; }
html, body { margin: 0; }
body { width: ${W}px; height: ${H}px; overflow: hidden; background: #0f151e; color: #e6edf3; font-family: 'Outfit', sans-serif; position: relative; }
.deco { position: absolute; inset: 0; }
.chain { fill: none; stroke: #2a3646; stroke-width: 3; }
.bead { fill: #1b2532; stroke: #2f3d50; stroke-width: 2; }
.bead--cyan { fill: rgb(94 196 210 / 0.28); stroke: rgb(94 196 210 / 0.55); }
.frame { position: absolute; inset: 22px; border: 1px solid #243042; border-radius: 18px; }
.centre { position: absolute; inset-block: 0; inset-inline-start: ${(W - 640) / 2}px; inline-size: 640px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
.logo { inline-size: 112px; block-size: 112px; margin-block-end: 26px; }
h1 { margin: 0; font-weight: 600; font-size: 96px; line-height: 0.98; letter-spacing: -0.02em; }
p.tag { margin: 30px 0 0; max-inline-size: 560px; text-wrap: balance; font-size: 27px; line-height: 1.35; color: #b4c0cf; font-weight: 400; }
p.ind { margin: 30px 0 0; font-family: 'JetBrains Mono', monospace; font-size: 18px; letter-spacing: 0.02em; color: #5ec4d2; }
p.host { position: absolute; inset-block-end: 44px; inset-inline-end: 56px; margin: 0; font-size: 20px; color: #8795a8; }
</style></head>
<body>
<svg class="deco" viewBox="0 0 ${W} ${H}" aria-hidden="true">
  ${chain(-10, 120, 7, 46, 26, 0.3, 4)}
  ${chain(-10, 500, 7, 46, 26, 2.1, 5)}
  ${chain(928, 150, 7, 46, 26, 1.2, 5)}
  ${chain(928, 470, 7, 46, 26, 3.0, 4)}
</svg>
<div class="frame"></div>
<div class="centre">
  <svg class="logo" viewBox="0 0 32 32" aria-hidden="true"><path d="M8 20 L16 12 L24 20" fill="none" stroke="#e6edf3" stroke-width="2"/><circle cx="8" cy="20" r="4" fill="#e6edf3"/><circle cx="16" cy="12" r="4" fill="#8fb0e6"/><circle cx="24" cy="20" r="4" fill="#e6edf3"/></svg>
  <h1>${esc(first)}${rest.length ? `<br>${esc(rest.join(' '))}` : ''}</h1>
  <p class="tag">${esc(tagline)}</p>
  <p class="ind">${esc(independence)}</p>
</div>
<p class="host">${esc(host)}</p>
</body></html>`;
}

const wanted = process.argv.slice(2);
const locales = wanted.length ? wanted : loadLocales().locales.filter((l) => l.status !== 'planned').map((l) => l.code);
const outDir = path.join(ROOT, 'public/og');
fs.mkdirSync(outDir, { recursive: true });
const exe = browser();
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'share-card-'));
for (const locale of locales) {
  const html = path.join(tmp, `${locale}.html`);
  fs.writeFileSync(html, cardHtml(locale));
  const out = path.join(outDir, `${locale}.png`);
  execFileSync(exe, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    `--user-data-dir=${path.join(tmp, 'profile')}`, '--allow-file-access-from-files',
    `--window-size=${W},${H}`, '--virtual-time-budget=3000', `--screenshot=${out}`, pathToFileURL(html).href,
  ], { stdio: 'ignore' });
  if (!fs.existsSync(out)) fail(`${locale}: the browser wrote no image`);
  console.log(`share-card: ${path.relative(ROOT, out)} (${fs.statSync(out).size} bytes)`);
}
fs.rmSync(tmp, { recursive: true, force: true });
