/**
 * Visual QA: screenshots of built pages per design system, viewport, colour scheme and direction.
 *   node scripts/screenshot.mjs --dist dist --out screenshots --themes a,b,c --widths 360,1280 \
 *     --paths /en/compounds/semaglutide/,/en/ [--dark] [--rtl] [--full]
 * Serves the dist folder itself; uses the pre-installed Chromium.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const arg = (k, d) => (process.argv.includes(`--${k}`) ? process.argv[process.argv.indexOf(`--${k}`) + 1] : d);
const flag = (k) => process.argv.includes(`--${k}`);
const dist = path.resolve(arg('dist', 'dist'));
const out = path.resolve(arg('out', 'screenshots'));
const themes = arg('themes', 'a,b,c').split(',');
const widths = arg('widths', '360,1280').split(',').map(Number);
const paths = arg('paths', '/en/').split(',');
const full = flag('full');
const els = arg('el', '') ? arg('el', '').split('|') : [];
fs.mkdirSync(out, { recursive: true });

const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.json': 'application/json', '.xml': 'application/xml' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let f = path.join(dist, p);
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
  if (!fs.existsSync(f)) { res.writeHead(404); return res.end('404'); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] ?? 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});
await new Promise((r) => server.listen(4321, r));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
for (const theme of themes) {
  for (const w of widths) {
    const ctx = await browser.newContext({ viewport: { width: w, height: w < 600 ? 780 : 900 }, deviceScaleFactor: 1, colorScheme: flag('dark') ? 'dark' : 'light', reducedMotion: flag('reduced') ? 'reduce' : 'no-preference' });
    const page = await ctx.newPage();
    for (const p of paths) {
      const q = new URLSearchParams({ theme, ...(flag('rtl') ? { pseudo: 'rtl' } : {}) });
      await page.goto(`http://localhost:4321${p}?${q}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(150);
      const name = `${theme}-${w}${flag('dark') ? '-dark' : ''}${flag('rtl') ? '-rtl' : ''}-${p.replace(/\//g, '_').replace(/^_|_$/g, '') || 'root'}.png`;
      if (els.length) {
        for (const [i, sel] of els.entries()) {
          const loc = page.locator(sel).first();
          if (await loc.count()) { await loc.scrollIntoViewIfNeeded(); await page.waitForTimeout(400); await loc.screenshot({ path: path.join(out, name.replace('.png', `-el${i}.png`)) }); }
          else console.log(`  (no element ${sel})`);
        }
      } else await page.screenshot({ path: path.join(out, name), fullPage: full });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      console.log(`${name}${overflow > 0 ? `  ⚠ horizontal overflow ${overflow}px` : ''}`);
    }
    await ctx.close();
  }
}
await browser.close();
server.close();
