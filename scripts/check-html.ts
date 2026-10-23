/**
 * Structural QA of the rendered site (runs after build, before deploy):
 *  - exactly one <h1>, no skipped heading levels, required landmarks, lang + dir on <html>
 *  - unique ids; every aria-labelledby/aria-describedby/href="#…" target exists
 *  - every internal link resolves to a built file (no 404s inside the site)
 *  - images have alt; links and buttons have an accessible name
 *  - no physical-direction inline styles in rendered HTML (RTL backstop for stylelint)
 *  - first-load JavaScript per page ≤ 40 KB gzipped (performance budget)
 *
 *   npx tsx scripts/check-html.ts [dist]
 */
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { parse, type HTMLElement } from 'node-html-parser';
import { walk, rel } from './lib/load.ts';

const args = process.argv.slice(2);
const dist = path.resolve(args.find((a) => !a.startsWith('--')) ?? 'dist');
const JS_BUDGET = 40 * 1024;
const errors: string[] = [];
const warnings: string[] = [];
const PHYSICAL = /(?:^|;|\s)(?:margin|padding|border)-(?:left|right)\s*:|(?:^|;|\s)(?:left|right)\s*:|text-align\s*:\s*(?:left|right)|float\s*:\s*(?:left|right)/i;

const files = walk(dist, ['.html']);
if (!files.length) {
  console.error(`check-html: no HTML in ${dist}`);
  process.exit(1);
}
const exists = (urlPath: string) => {
  const p = decodeURIComponent(urlPath.split('#')[0].split('?')[0]);
  const fsPath = path.join(dist, p);
  return fs.existsSync(fsPath) && (fs.statSync(fsPath).isFile() || fs.existsSync(path.join(fsPath, 'index.html')));
};
const gzCache = new Map<string, number>();
const gz = (p: string) => {
  if (!gzCache.has(p)) gzCache.set(p, zlib.gzipSync(fs.readFileSync(p)).length);
  return gzCache.get(p)!;
};
let maxJs = { page: '', bytes: 0 };

for (const file of files) {
  const where = rel(file);
  const html = fs.readFileSync(file, 'utf8');
  const root = parse(html);
  const isRedirect = /^\s*<!doctype html>\s*<title>Redirecting/i.test(html);
  if (isRedirect) continue;
  const htmlEl = root.querySelector('html');
  if (!htmlEl?.getAttribute('lang')) errors.push(`${where}: <html> has no lang`);
  if (!htmlEl?.getAttribute('dir')) errors.push(`${where}: <html> has no dir`);

  // headings
  const hs = root.querySelectorAll('h1, h2, h3, h4, h5, h6').filter((h) => !h.closest('[hidden]') && !h.closest('template'));
  const h1s = hs.filter((h) => h.tagName === 'H1');
  if (h1s.length !== 1) errors.push(`${where}: ${h1s.length} <h1> elements (need exactly 1)`);
  let prev = 0;
  for (const h of hs) {
    const lvl = Number(h.tagName[1]);
    if (prev && lvl > prev + 1) errors.push(`${where}: heading level skipped (h${prev} → h${lvl}: "${h.textContent.trim().slice(0, 50)}")`);
    prev = lvl;
  }
  // landmarks
  if (!root.querySelector('main')) errors.push(`${where}: no <main>`);
  // The root language chooser (<dist>/index.html) is a bare <main> by design. Compared relative to the
  // dist folder, so it also matches on Windows and for a dist with another name.
  const isRootChooser = path.relative(dist, file) === 'index.html';
  if (!isRootChooser && !root.querySelector('header')) warnings.push(`${where}: no <header> landmark`);
  // ids and references
  const ids = new Map<string, number>();
  for (const el of root.querySelectorAll('[id]')) ids.set(el.id, (ids.get(el.id) ?? 0) + 1);
  for (const [id, n] of ids) if (n > 1) errors.push(`${where}: duplicate id "${id}" (${n}×)`);
  for (const el of root.querySelectorAll('[aria-labelledby], [aria-describedby], [aria-controls]')) {
    for (const attr of ['aria-labelledby', 'aria-describedby', 'aria-controls']) {
      for (const ref of (el.getAttribute(attr) ?? '').split(/\s+/).filter(Boolean)) if (!ids.has(ref)) errors.push(`${where}: ${attr}="${ref}" points nowhere`);
    }
  }
  // links
  for (const a of root.querySelectorAll('a[href]')) {
    const href = a.getAttribute('href')!;
    const name = (a.textContent + ' ' + (a.getAttribute('aria-label') ?? '') + ' ' + a.querySelectorAll('[aria-label]').map((x) => x.getAttribute('aria-label')).join(' ')).trim();
    if (!name) errors.push(`${where}: link without accessible name -> ${href}`);
    if (href.startsWith('#')) {
      if (href.length > 1 && !ids.has(decodeURIComponent(href.slice(1)))) errors.push(`${where}: in-page link ${href} has no target`);
    } else if (href.startsWith('/') && !href.startsWith('//')) {
      if (!exists(href)) errors.push(`${where}: broken internal link ${href}`);
    }
  }
  for (const b of root.querySelectorAll('button')) {
    if (!(b.textContent.trim() || b.getAttribute('aria-label'))) errors.push(`${where}: button without accessible name`);
  }
  for (const img of root.querySelectorAll('img')) if (img.getAttribute('alt') === undefined) errors.push(`${where}: <img> without alt`);
  // inline physical styles
  for (const el of root.querySelectorAll('[style]')) {
    if (PHYSICAL.test(el.getAttribute('style')!)) errors.push(`${where}: physical-direction inline style "${el.getAttribute('style')}"`);
  }
  // JS budget: module scripts and their static imports
  let js = 0;
  const seen = new Set<string>();
  const addJs = (src: string) => {
    const p = src.split('?')[0];
    const fsPath = path.join(dist, p);
    if (seen.has(fsPath) || !fs.existsSync(fsPath)) return;
    seen.add(fsPath);
    js += gz(fsPath);
    const code = fs.readFileSync(fsPath, 'utf8');
    for (const m of code.matchAll(/(?:^|[;}\s])import\s*(?:[^'"()]*?from\s*)?["']([^"']+)["']/g)) {
      if (m[1].startsWith('.')) addJs(path.posix.join(path.posix.dirname(p), m[1]));
      else if (m[1].startsWith('/')) addJs(m[1]);
    }
  };
  for (const s of root.querySelectorAll('script')) {
    const src = s.getAttribute('src');
    if (src && src.startsWith('/')) addJs(src);
    else if (!src && s.getAttribute('type') !== 'application/ld+json') js += zlib.gzipSync(s.textContent).length;
  }
  if (js > maxJs.bytes) maxJs = { page: where, bytes: js };
  if (js > JS_BUDGET) errors.push(`${where}: first-load JS ${(js / 1024).toFixed(1)} KB gz exceeds ${JS_BUDGET / 1024} KB budget`);
}

for (const w of warnings.slice(0, 20)) console.log(`warn  ${w}`);
for (const e of errors.slice(0, 200)) console.error(`error ${e}`);
console.log(`\ncheck-html: ${files.length} pages · max first-load JS ${(maxJs.bytes / 1024).toFixed(1)} KB gz (${maxJs.page}) · ${errors.length} error(s), ${warnings.length} warning(s)`);
if (errors.length) process.exit(1);
