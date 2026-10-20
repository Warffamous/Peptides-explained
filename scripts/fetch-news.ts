/**
 * Collects headlines from the vetted feeds in src/data/feeds.yaml into src/data/news.json.
 * Runs daily in CI (.github/workflows/news.yml); the site rebuilds from the committed snapshot,
 * so a failing feed never breaks the build — previous items are kept for up to 180 days.
 *
 * Safety rails, in order:
 *   1. only feeds listed in feeds.yaml (each with a written reason)
 *   2. only items whose link host is on config/link-allowlist.json
 *   3. no item with a commerce token in its title or link
 *   4. topic filter (keywords) for general regulator feeds
 *   5. study-type hint (animal / cell / human trial / review / preprint) — heuristic, disclosed on the page
 *
 *   npx tsx scripts/fetch-news.ts [--dry]
 */
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { XMLParser } from 'fast-xml-parser';
import { feedsFileSchema, newsFileSchema } from '../src/schemas/index.ts';
import { ROOT, loadAllowlist, hostAllowed, loadCommerceTokens, commerceRegex } from './lib/load.ts';

type Item = { id: string; feed: string; title: string; url: string; published: string; summary: string; lang: string; study_hint: string };
const DRY = process.argv.includes('--dry');
const UA = 'PeptidesExplained-newsfeed/1.0 (non-commercial public-health reference)';
const OUT = path.join(ROOT, 'src/data/news.json');
const KEEP_DAYS = 180;
const MAX_ITEMS = 150;

const cfg = feedsFileSchema.parse(YAML.parse(fs.readFileSync(path.join(ROOT, 'src/data/feeds.yaml'), 'utf8')));
const allow = loadAllowlist();
const tokenRe = commerceRegex(loadCommerceTokens().tokens);
const xml = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@', textNodeName: '#text', processEntities: true, htmlEntities: true });

const ENTITY: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
function clean(html: unknown): string {
  const s = typeof html === 'string' ? html : html && typeof html === 'object' && '#text' in html ? String((html as Record<string, unknown>)['#text']) : '';
  return s
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (_, e: string) => (e[0] === '#' ? String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)) : ENTITY[e.toLowerCase()] ?? ' '))
    .replace(/\s+/g, ' ')
    .trim();
}
function truncate(s: string, n = 280): string {
  if (s.length <= n) return s;
  const cut = s.slice(0, n);
  return `${cut.slice(0, cut.lastIndexOf(' ') > n * 0.6 ? cut.lastIndexOf(' ') : n).replace(/[,;:.\s]+$/, '')}…`;
}
function hint(text: string, category: string): string {
  if (category === 'preprint') return 'preprint';
  if (category === 'regulator' || category === 'anti-doping') return 'regulatory';
  const t = text.toLowerCase();
  if (/\b(meta-analys[ie]s|systematic review|narrative review|scoping review|review)\b/.test(t)) return 'review';
  if (/\b(randomi[sz]ed|placebo|phase (?:1|2|3|i{1,3}|iv)\b|clinical trial|participants|patients with)\b/.test(t)) return 'human-trial';
  if (/\b(mice|mouse|murine|rats?|rodents?|zebrafish|porcine|piglets?|rabbits?|canine|dogs?|in vivo)\b/.test(t)) return 'animal';
  if (/\b(in vitro|cell lines?|cultured|organoids?|fibroblasts|hek293)\b/.test(t)) return 'in-vitro';
  return 'unknown';
}
const kwRe = (words: string[]) => new RegExp(`(?<![\\p{L}\\p{N}])(?:${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})(?![\\p{L}\\p{N}])`, 'iu');
const globalKw = kwRe(cfg.keywords);

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
let lastNcbi = 0;
async function get(url: string, attempt = 0): Promise<string> {
  // NCBI allows 3 requests/second without an API key; space them out and retry once on 429.
  if (url.includes('ncbi.nlm.nih.gov')) {
    const wait = lastNcbi + 1100 - Date.now();
    if (wait > 0) await sleep(wait);
    lastNcbi = Date.now();
  }
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 25_000);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'application/rss+xml, application/atom+xml, application/xml, application/json, text/xml;q=0.9, */*;q=0.5' }, signal: ctrl.signal });
    if (res.status === 429 && attempt < 2) {
      await sleep(3000 * (attempt + 1));
      return get(url, attempt + 1);
    }
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    if (!text.trim()) throw new Error(`empty response (HTTP ${res.status})`);
    return text;
  } finally {
    clearTimeout(timer);
  }
}
const arr = <T,>(x: T | T[] | undefined): T[] => (x === undefined ? [] : Array.isArray(x) ? x : [x]);

async function fromRss(f: (typeof cfg.feeds)[number]): Promise<Omit<Item, 'id' | 'study_hint'>[]> {
  const raw = await get(f.url);
  // Some CMSs prepend debug comments before the XML declaration.
  const start = raw.search(/<\?xml|<rss|<feed/);
  const doc = xml.parse(start > 0 ? raw.slice(start) : raw);
  if (doc.rss) {
    return arr(doc.rss.channel?.item).map((it: Record<string, unknown>) => ({
      feed: f.id, title: clean(it.title), url: clean(it.link) || clean((it.guid as Record<string, unknown>)?.['#text'] ?? it.guid),
      published: new Date(clean(it.pubDate) || clean(it['dc:date']) || Date.now()).toISOString(), summary: truncate(clean(it.description)), lang: f.lang,
    }));
  }
  if (doc.feed) {
    return arr(doc.feed.entry).map((it: Record<string, unknown>) => {
      const links = arr(it.link as Record<string, string> | Record<string, string>[]);
      const href = (links.find((l) => !l['@rel'] || l['@rel'] === 'alternate') ?? links[0])?.['@href'] ?? '';
      return { feed: f.id, title: clean(it.title), url: href, published: new Date(clean(it.updated) || clean(it.published) || Date.now()).toISOString(), summary: truncate(clean(it.summary ?? it.content)), lang: f.lang };
    });
  }
  throw new Error('not RSS or Atom');
}

async function fromPubmed(f: (typeof cfg.feeds)[number]): Promise<Omit<Item, 'id' | 'study_hint'>[]> {
  const base = f.url.replace(/\/?$/, '/');
  const term = encodeURIComponent(f.query ?? '');
  const search = JSON.parse(await get(`${base}esearch.fcgi?db=pubmed&term=${term}&retmax=${f.max_items}&sort=pub_date&datetype=edat&reldate=120&retmode=json&tool=peptides-explained`));
  const ids: string[] = search.esearchresult?.idlist ?? [];
  if (!ids.length) return [];
  const sum = JSON.parse(await get(`${base}esummary.fcgi?db=pubmed&id=${ids.join(',')}&retmode=json&tool=peptides-explained`));
  return ids.map((id) => {
    const r = sum.result?.[id];
    if (!r) return null;
    const authors = (r.authors ?? []).slice(0, 3).map((a: { name: string }) => a.name).join(', ') + ((r.authors ?? []).length > 3 ? ', et al.' : '');
    const types = (r.pubtype ?? []).join(', ');
    // The date the record entered PubMed — issue dates can lie in the future.
    const entrez = (r.history ?? []).find((h: { pubstatus: string; date: string }) => h.pubstatus === 'entrez')?.date;
    const when = new Date(Math.min(Date.now(), +new Date((entrez ?? r.epubdate ?? r.pubdate ?? '').replace(/\//g, '-')) || Date.now()));
    return {
      feed: f.id, title: clean(r.title).replace(/\.$/, ''), url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
      published: when.toISOString(),
      summary: truncate(`${authors}. ${r.fulljournalname ?? r.source ?? ''}${types ? ` · ${types}` : ''}`), lang: 'en',
    };
  }).filter(Boolean) as Omit<Item, 'id' | 'study_hint'>[];
}

async function fromEuropePmc(f: (typeof cfg.feeds)[number]): Promise<Omit<Item, 'id' | 'study_hint'>[]> {
  const q = encodeURIComponent(f.query ?? '');
  const data = JSON.parse(await get(`${f.url}?query=${q}&format=json&pageSize=${f.max_items}&sort=P_PDATE_D%20desc&resultType=core`));
  return (data.resultList?.result ?? []).map((r: Record<string, string>) => ({
    feed: f.id, title: clean(r.title).replace(/\.$/, ''), url: `https://europepmc.org/article/${r.source}/${r.id}`,
    published: new Date(r.firstPublicationDate || Date.now()).toISOString(), summary: truncate(clean(r.abstractText ?? '')), lang: 'en',
  }));
}

const previous: Item[] = (fs.existsSync(OUT) ? (JSON.parse(fs.readFileSync(OUT, 'utf8')).items ?? []) : []).filter((it: Item) => +new Date(it.published) <= Date.now());
const fresh: Item[] = [];
const report: string[] = [];
for (const f of cfg.feeds) {
  try {
    const raw = f.kind === 'pubmed' ? await fromPubmed(f) : f.kind === 'europepmc' ? await fromEuropePmc(f) : await fromRss(f);
    const extra = f.require_any.filter((w) => w !== 'use-keywords');
    const topic = f.require_any.length === 0 ? null : extra.length ? new RegExp(`${globalKw.source}|${kwRe(extra).source}`, 'iu') : globalKw;
    let kept = 0;
    let dropped = 0;
    for (const it of raw) {
      const text = `${it.title} ${it.summary}`;
      const ok = it.title && it.url && /^https:\/\//.test(it.url) && hostAllowed(it.url, allow) && !tokenRe.test(it.title) && !tokenRe.test(it.url) && (!topic || topic.test(text));
      if (!ok) { dropped++; continue; }
      if (kept >= f.max_items) break;
      kept++;
      fresh.push({ ...it, id: `${f.id}:${it.url}`, study_hint: hint(text, f.category) });
    }
    report.push(`  ✓ ${f.id}: ${kept} kept, ${dropped} filtered out of ${raw.length}`);
  } catch (e) {
    report.push(`  ✗ ${f.id}: ${(e as Error).message} (keeping previous items)`);
  }
}

const cutoff = Date.now() - KEEP_DAYS * 864e5;
const seen = new Set<string>();
const norm = (s: string) => s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const merged = [...fresh, ...previous]
  .filter((it) => +new Date(it.published) >= cutoff && cfg.feeds.some((f) => f.id === it.feed))
  .filter((it) => {
    const k = norm(it.title);
    if (seen.has(it.url) || seen.has(k)) return false;
    seen.add(it.url);
    seen.add(k);
    return true;
  })
  .sort((a, b) => +new Date(b.published) - +new Date(a.published))
  .slice(0, MAX_ITEMS);

const out = { generated: new Date().toISOString().slice(0, 10), items: merged };
newsFileSchema.parse(out);
console.log(`fetch-news: ${fresh.length} fresh, ${merged.length} total\n${report.join('\n')}`);
if (!DRY) fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n');
