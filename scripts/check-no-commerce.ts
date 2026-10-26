/**
 * THE LOAD-BEARING WALL. Fails the build if the site links anywhere commercial.
 *
 * The site is published from the Netherlands, so Dutch law governs what it may say (Geneesmiddelenwet
 * art. 84–85): public advertising for unauthorised medicines is prohibited and "advertising" is read
 * broadly: a promotional purpose turns information into advertising, and a commercial link supplies
 * that purpose. The readers' countries (US, UK, Canada, Australia) have similar rules on advertising
 * medicines. So this check is structural:
 *
 *  1. Every outbound URL — in content, data, UI strings and the rendered HTML — must be on
 *     config/link-allowlist.json (regulators, law, PubMed/DOI, universities, anti-doping, patient orgs).
 *  2. No link (href, text, aria-label, title) and no call to action (buttons, submit inputs) may
 *     contain a commerce token (config/commerce-tokens.json, all six locales).
 *  3. No heading (h1–h6), section question, fold title, figure title, diagram caption or label, and
 *     no aria-label, may contain one either (CONTENT-GUIDE §1a, §10); there, "in order to", "the order
 *     of the amino acids" and "deal with" are not commerce (stripNonCommerce in scripts/lib/load.ts);
 *     an order as a legal instrument ("Trading Fund Order 2003") is not commerce anywhere, link text
 *     included (stripLegalOrders).
 *  4. No affiliate parameters, redirectors or URL shorteners.
 *
 *   npx tsx scripts/check-no-commerce.ts [distDir ...]   (defaults to dist/)
 */
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'node-html-parser';
import { ROOT, rel, walk, loadAllowlist, hostAllowed, loadCommerceTokens, commerceRegex, stripNonCommerce, stripLegalOrders } from './lib/load.ts';

const site = JSON.parse(fs.readFileSync(path.join(ROOT, 'config/site.json'), 'utf8'));
const OWN_HOSTS = new Set([new URL(site.siteUrl).hostname]);
// Not links: XML namespaces and the schema.org vocabulary identifier inside JSON-LD.
const NON_LINK_URLS = [/^https?:\/\/schema\.org\b/, /^http:\/\/www\.w3\.org\//, /^http:\/\/www\.sitemaps\.org\//];

const allow = loadAllowlist();
const { tokens, urlPatterns } = loadCommerceTokens();
const tokenRe = commerceRegex(tokens);
const patternRes = urlPatterns.map((p) => new RegExp(p, 'i'));
const problems: string[] = [];
const fail = (where: string, msg: string) => problems.push(`${where}: ${msg}`);

function checkUrl(where: string, url: string) {
  if (NON_LINK_URLS.some((re) => re.test(url))) return;
  let u: URL;
  try { u = new URL(url); } catch { return fail(where, `unparseable URL ${url}`); }
  if (u.protocol === 'mailto:' || u.protocol === 'tel:') return;
  if (OWN_HOSTS.has(u.hostname)) return;
  if (!hostAllowed(url, allow)) fail(where, `outbound link to non-allowlisted host "${u.hostname}" (${url})`);
  if (patternRes.some((re) => re.test(url))) fail(where, `affiliate/redirect/shortener pattern in ${url}`);
  if (tokenRe.test(decodeURIComponent(u.pathname + u.search))) fail(where, `commerce token in URL ${url}`);
}

// ---- 1. source files
const SOURCE_DIRS = ['src/content', 'src/data', 'src/i18n', 'config', 'src/components', 'src/layouts', 'src/pages'];
const URL_RE = /https?:\/\/[^\s"'<>)\]}`]+/g;
let scannedSources = 0;
for (const dir of SOURCE_DIRS) {
  for (const file of walk(dir, ['.mdx', '.md', '.yaml', '.yml', '.json', '.astro', '.ts'])) {
    if (file.endsWith('link-allowlist.json') || file.endsWith('commerce-tokens.json')) continue;
    scannedSources++;
    const text = fs.readFileSync(file, 'utf8');
    for (const m of text.matchAll(URL_RE)) checkUrl(rel(file), m[0].replace(/[.,;:]+$/, ''));
  }
}

// ---- 2. rendered HTML
const dists = process.argv.slice(2).length ? process.argv.slice(2) : ['dist'];
let pages = 0;
let links = 0;
for (const dist of dists) {
  const files = walk(dist, ['.html', '.xml']);
  if (!files.length) {
    console.error(`check-no-commerce: no rendered files in ${dist} — build first`);
    process.exit(1);
  }
  for (const file of files) {
    const where = rel(file);
    const html = fs.readFileSync(file, 'utf8');
    if (file.endsWith('.xml')) {
      for (const m of html.matchAll(URL_RE)) checkUrl(where, m[0]);
      continue;
    }
    pages++;
    const root = parse(html, { comment: false });
    for (const a of root.querySelectorAll('a[href], area[href]')) {
      links++;
      const href = a.getAttribute('href')!;
      const label = [a.textContent, a.getAttribute('aria-label') ?? '', a.getAttribute('title') ?? ''].join(' ').replace(/\s+/g, ' ').trim();
      if (/^https?:/i.test(href)) checkUrl(where, href);
      else if (tokenRe.test(decodeURIComponent(href))) fail(where, `commerce token in internal link ${href}`);
      // a cited statutory instrument ("… Trading Fund Order 2003", "Treasury order") is not an offer
      if (tokenRe.test(stripLegalOrders(label))) fail(where, `commerce token in link text "${label.slice(0, 80)}" -> ${href}`);
    }
    for (const el of root.querySelectorAll('button, [role="button"], input[type="submit"], input[type="button"]')) {
      const label = [el.textContent, el.getAttribute('value') ?? '', el.getAttribute('aria-label') ?? ''].join(' ');
      if (tokenRe.test(label)) fail(where, `commerce token in call to action "${label.trim().slice(0, 80)}"`);
    }
    // Headings and accessible labels: what a reader scans, or hears first, never reads as an offer
    // (CONTENT-GUIDE §1a, §10). "in order to", "the order of the amino acids" and "deal with" are not
    // commerce (stripNonCommerce); links above are checked with only the legal-order exception.
    // h1-h6, then the components' own headings: the section question (<Lead>), the fold title
    // (<InDetail>), figure titles (Compare, IconArray, TimeStrip) and diagram captions, key-number titles and labels,
    // callout titles; table heads (a Compare row label or column head is a label: below 38 rem each row becomes a
    // card under it), figure captions and fold summaries (CONTENT-GUIDE §1).
    const HEADINGS = 'h1, h2, h3, h4, h5, h6, .lead__q, .in-detail__title, .fig__title, .key-number__title, .key-number__label, .callout__title, .diagram__caption, th, figcaption, summary';
    for (const h of root.querySelectorAll(HEADINGS)) {
      const text = h.textContent.replace(/\s+/g, ' ').trim();
      const m = tokenRe.exec(stripNonCommerce(text));
      if (m) fail(where, `commerce token "${m[0]}" in heading <${h.tagName.toLowerCase()}${h.classNames ? ` class="${h.classNames}"` : ''}> "${text.slice(0, 80)}"`);
    }
    for (const el of root.querySelectorAll('[aria-label]')) {
      if (el.tagName === 'A' || el.tagName === 'AREA') continue; // checked with the links
      const label = el.getAttribute('aria-label') ?? '';
      const m = tokenRe.exec(stripNonCommerce(label));
      if (m) fail(where, `commerce token "${m[0]}" in aria-label "${label.slice(0, 80)}" (<${el.tagName.toLowerCase()}>)`);
    }
    for (const el of root.querySelectorAll('form[action], iframe[src], img[src], script[src], link[href], source[src], video[src], audio[src]')) {
      const u = el.getAttribute('action') ?? el.getAttribute('src') ?? el.getAttribute('href')!;
      if (/^https?:/i.test(u)) checkUrl(where, u);
    }
    for (const el of root.querySelectorAll('meta[content]')) {
      const c = el.getAttribute('content')!;
      if (/^https?:/i.test(c)) checkUrl(where, c);
    }
  }
}

if (problems.length) {
  console.error(`\n✗ commerce check FAILED — ${problems.length} problem(s):\n`);
  for (const p of problems) console.error(`  - ${p}`);
  console.error('\nThis site links to no seller. See docs/CONTENT-GUIDE.md §1 and config/link-allowlist.json.\n');
  process.exit(1);
}
console.log(`✓ commerce check passed — ${scannedSources} source files, ${pages} pages, ${links} links; zero commercial outbound links.`);
