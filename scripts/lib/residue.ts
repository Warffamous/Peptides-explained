/**
 * Locale residue: words that belong to another locale's readers (config/locale-residue.json;
 * docs/CONTENT-GUIDE.md §1b). English refocus (owner, 23 October 2026): the English site is for the
 * US, the UK, Canada and Australia, with notes for Ireland and New Zealand, so Dutch, Belgian, German
 * and EU reader framing leaves it (saved for the Dutch site, research/for-nl-site/).
 *
 * Two scans, one pattern list:
 *  - sources (scanLocaleSources): the locale's MDX (body and frontmatter text), its i18n JSON (UI
 *    strings, glossary, media captions, timeline/tracker/corrections text of the items it shows) and
 *    the data text it shows (contact cards of its own jurisdictions, schedule notes of its rows, its
 *    products' names and holders, the feeds it lists). Run by scripts/validate-content.ts and
 *    scripts/check-locale-residue.ts.
 *  - built HTML (scanDist): a backstop for words that reach a page another way (components, data).
 *    Markers do not survive the build, so only error-level hits count there; reference lists (cited
 *    titles) are reported as warnings.
 *
 * Levels: error (never on this locale; only allowFiles exempts), frame (reader framing such as "in the
 * EU"; the marker exempts it, e.g. EMA evidence), warn (EU, EMA, EPAR, CHMP, Europe: a name that may
 * stay as evidence; the marker silences it). The marker is {/* residue-ok: why *\/} in MDX or
 * "# residue-ok: why" in YAML, on the line before the text or at the end of the same line.
 */
import fs from 'node:fs';
import path from 'node:path';
import YAML, { type YAMLMap, type Scalar } from 'yaml';
import { parse, type HTMLElement } from 'node-html-parser';
import { ROOT, walk, readJson, readYaml } from './load.ts';
import { cardCodes, isVisible, visibleCodes, type LocaleScope } from '../../src/lib/jurisdictions.ts';
import { JURISDICTIONS, type Jurisdiction } from '../../src/schemas/vocab.ts';

/**
 * The one switch. While false (the English content rewrite is in progress), every residue hit is a
 * WARNING in the validator and in `npm run check:residue`. Set it to true after the rewrite: error
 * and frame hits then fail `npm run validate` (so the build) and `npm run check`; warn hits stay
 * warnings.
 */
export const STRICT_RESIDUE = false;

export type ResidueLevel = 'error' | 'frame' | 'warn';
const RANK: Record<ResidueLevel, number> = { error: 3, frame: 2, warn: 1 };
export type ResiduePattern = { id: string; level: ResidueLevel; re: RegExp; why: string };
type Allow = { patterns: string[] | '*'; reason: string };
export type ResidueConfig = {
  marker: string;
  patterns: ResiduePattern[];
  /** page path (under src/content/pages/<locale>/, no .mdx) → allowed pattern ids */
  allowFiles: (Allow & { page: string })[];
  /** file (repo-relative, forward slashes; ending in "/" = every file in that folder) + key regex → allowed pattern ids (JSON and data strings) */
  allowStrings: (Allow & { file: string; key: RegExp })[];
  /** proper names that contain a pattern but are not reader framing ("Europe PMC", a holder's legal name), skipped everywhere, also in built pages */
  allowPhrases: { re: RegExp; reason: string }[];
};
export type ResidueHit = {
  /** repo-relative path, forward slashes (dist mode: the HTML file) */
  file: string;
  line?: number;
  /** key path or zone, when there is no useful line */
  where?: string;
  level: ResidueLevel;
  id: string;
  why: string;
  match: string;
  context: string;
  /** dist mode: the cited source (type and reference text) when an error-level term is in its entry */
  cited?: string;
};

const CONFIG_FILE = path.join(ROOT, 'config/locale-residue.json');
const posixRel = (p: string) => path.relative(ROOT, p).split(path.sep).join('/');

/** config/locale-residue.json, per locale code (locales without an entry are not checked). */
export function loadResidueConfig(): Map<string, ResidueConfig> {
  const out = new Map<string, ResidueConfig>();
  if (!fs.existsSync(CONFIG_FILE)) return out;
  type Raw = {
    marker?: string;
    patterns: { id: string; level: ResidueLevel; re: string; flags?: string; why: string }[];
    allowFiles?: { page: string; patterns: string[] | '*'; reason: string }[];
    allowStrings?: { file: string; key: string; patterns: string[] | '*'; reason: string }[];
    allowPhrases?: { re: string; flags?: string; reason: string }[];
  };
  const raw = readJson(CONFIG_FILE) as { locales: Record<string, Raw> };
  for (const [code, c] of Object.entries(raw.locales ?? {})) {
    const ids = new Set<string>();
    const patterns = c.patterns.map((p) => {
      if (!['error', 'frame', 'warn'].includes(p.level)) throw new Error(`${posixRel(CONFIG_FILE)}: ${code} pattern "${p.id}": level must be error, frame or warn`);
      if (ids.has(p.id)) throw new Error(`${posixRel(CONFIG_FILE)}: ${code}: two patterns with id "${p.id}"`);
      ids.add(p.id);
      const flags = (p.flags ?? 'iu').replace(/g/g, '') + 'g';
      return { id: p.id, level: p.level, re: new RegExp(p.re, flags), why: p.why };
    });
    const known = (list: string[] | '*', where: string) => {
      if (list !== '*') for (const id of list) if (!ids.has(id)) throw new Error(`${posixRel(CONFIG_FILE)}: ${code} ${where}: unknown pattern id "${id}"`);
    };
    (c.allowFiles ?? []).forEach((a) => known(a.patterns, `allowFiles ${a.page}`));
    (c.allowStrings ?? []).forEach((a) => known(a.patterns, `allowStrings ${a.file}`));
    out.set(code, {
      marker: c.marker ?? 'residue-ok',
      patterns,
      allowFiles: c.allowFiles ?? [],
      allowStrings: (c.allowStrings ?? []).map((a) => ({ ...a, key: new RegExp(a.key) })),
      allowPhrases: (c.allowPhrases ?? []).map((a) => {
        if (!a.reason) throw new Error(`${posixRel(CONFIG_FILE)}: ${code} allowPhrases "${a.re}": give a reason`);
        return { re: new RegExp(a.re, (a.flags ?? 'u').replace(/g/g, '') + 'g'), reason: a.reason };
      }),
    });
  }
  return out;
}

type Match = { start: number; end: number; p: ResiduePattern };
/**
 * Every pattern match in one text. Where two overlap, the stronger (then the longer) one is kept,
 * so "approved in the EU" is one frame hit, not also an "EU" warning.
 */
export function findResidue(text: string, cfg: ResidueConfig): Match[] {
  // allowed proper names ("Europe PMC", "Eli Lilly Nederland B.V."): no match that touches one counts,
  // so "indexed in Europe PMC" is not the frame "in Europe" either
  const names: [number, number][] = [];
  for (const a of cfg.allowPhrases) {
    a.re.lastIndex = 0;
    for (const m of text.matchAll(a.re)) names.push([m.index!, m.index! + m[0].length]);
  }
  const all: Match[] = [];
  for (const p of cfg.patterns) {
    p.re.lastIndex = 0;
    for (const m of text.matchAll(p.re)) {
      const start = m.index!;
      const end = start + m[0].length;
      if (!names.some(([s, e]) => start < e && s < end)) all.push({ start, end, p });
    }
  }
  all.sort((a, b) => RANK[b.p.level] - RANK[a.p.level] || b.end - b.start - (a.end - a.start) || a.start - b.start);
  const kept: Match[] = [];
  for (const m of all) if (!kept.some((k) => m.start < k.end && k.start < m.end)) kept.push(m);
  return kept.sort((a, b) => a.start - b.start);
}

const snippet = (line: string, start: number, end: number) => {
  const from = Math.max(0, start - 50);
  const to = Math.min(line.length, end + 50);
  return `${from > 0 ? '…' : ''}${line.slice(from, to).replace(/\s+/g, ' ').trim()}${to < line.length ? '…' : ''}`;
};

/** Replace a span with spaces (newlines kept), so offsets and line numbers stay where they were. */
const blank = (s: string) => s.replace(/[^\n]/g, ' ');

/**
 * MDX body text that a reader never sees: comments (the marker itself), imports, code, URLs, link
 * targets and the attributes that hold ids, codes and settings rather than words.
 */
const NON_TEXT_ATTRS = ['id', 'source', 'sources', 'extraSources', 'extraAfter', 'href', 'src', 'code', 'which', 'type', 'level', 'is', 'icon', 'only', 'compound', 'section', 'checked', 'min', 'max', 'step'];
const NON_TEXT_ATTR_RE = new RegExp(`\\b(?:${NON_TEXT_ATTRS.join('|')})=(?:"[^"]*"|'[^']*'|\\{[^{}]*\\})`, 'g');
function maskMdx(body: string, marker: string): { text: string; markerLines: Set<number> } {
  const markerLines = new Set<number>();
  const lineOf = (i: number) => body.slice(0, i).split('\n').length;
  let t = body;
  const mask = (re: RegExp, onMatch?: (m: RegExpMatchArray) => void) => {
    t = t.replace(re, (...args) => {
      const m = args[0] as string;
      const at = args[args.length - 2] as number;
      onMatch?.(Object.assign([m], { index: at }) as RegExpMatchArray);
      return blank(m);
    });
  };
  const noteMarker = (m: RegExpMatchArray) => {
    if (!m[0].includes(marker)) return;
    const first = lineOf(m.index!);
    const last = first + (m[0].match(/\n/g)?.length ?? 0);
    for (let l = first; l <= last; l++) markerLines.add(l);
  };
  mask(/^(```|~~~)[\s\S]*?^\1/gm);
  mask(/\{\/\*[\s\S]*?\*\/\}/g, noteMarker);
  mask(/<!--[\s\S]*?-->/g, noteMarker);
  mask(/^(?:import|export)\s.*$/gm);
  mask(/`[^`\n]*`/g);
  mask(/\]\([^)\n]*\)/g);
  mask(/https?:\/\/[^\s)>"'\]]+/g);
  mask(NON_TEXT_ATTR_RE);
  return { text: t, markerLines };
}

/** Frontmatter and data keys that hold ids, codes, dates or settings, never words for the reader. */
const SKIP_KEYS = new Set([
  'sources', 'source', 'label_source', 'slug', 'icon', 'id', 'related', 'further_reading', 'reviewed_by', 'edited_by', 'signed_by',
  'section', 'template', 'reading_level', 'jurisdiction', 'method', 'from', 'review', 'reviewed_on', 'tone', 'kind', 'level',
  'last_reviewed', 'published', 'updated', 'order', 'noindex', 'url', 'label_url', 'code', 'emergency', 'route', 'authorised',
  'marketed_until', 'as_of', 'since', 'authorised_since',
]);

type YamlString = { value: string; keys: (string | number)[]; line: number; maps: YAMLMap[] };
/** Every string scalar value of a YAML text, with its key path, its line (1-based, + lineBase) and the maps around it. */
function yamlStrings(text: string, lineBase = 0): YamlString[] {
  const doc = YAML.parseDocument(text);
  const starts = [0];
  for (let i = 0; i < text.length; i++) if (text[i] === '\n') starts.push(i + 1);
  const lineAt = (off: number) => {
    let lo = 0;
    let hi = starts.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (starts[mid] <= off) lo = mid;
      else hi = mid - 1;
    }
    return lo + 1 + lineBase;
  };
  const out: YamlString[] = [];
  YAML.visit(doc, {
    Scalar(key, node, ancestors) {
      if (key === 'key' || typeof node.value !== 'string') return;
      const keys: (string | number)[] = [];
      const maps: YAMLMap[] = [];
      ancestors.forEach((a, i) => {
        const next = ancestors[i + 1] ?? node;
        if (YAML.isPair(a)) keys.push(String((a.key as Scalar)?.value ?? ''));
        else if (YAML.isSeq(a)) keys.push(a.items.indexOf(next as never));
        else if (YAML.isMap(a)) maps.push(a);
      });
      out.push({ value: node.value, keys, line: lineAt(node.range?.[0] ?? 0), maps });
    },
  });
  return out;
}

const shownCodes = (scope: LocaleScope) => new Set<string>([...cardCodes(scope, 'all'), 'WADA']);
const OTHER_CODES = (scope: LocaleScope) => (JURISDICTIONS as readonly string[]).filter((j) => !shownCodes(scope).has(j));

export type ResidueLocale = LocaleScope & { code: string };

/**
 * One MDX file (frontmatter text and body). `page` is its path under src/content/pages/<locale>/
 * without the extension (for allowFiles), or null for a compound page. Exported for tests.
 */
export function scanMdx(file: string, source: string, locale: ResidueLocale, cfg: ResidueConfig, page: string | null = null): ResidueHit[] {
  const hits: ResidueHit[] = [];
  const fileAllow = page ? cfg.allowFiles.filter((a) => a.page === page) : [];
  const raw = source.replace(/\r\n/g, '\n');
  const lines = raw.split('\n');
  // The marker (an MDX comment, or a YAML comment in the frontmatter) on this line or the line before.
  const markerLines = new Set<number>();
  const marked = (line: number) =>
    markerLines.has(line) || markerLines.has(line - 1) || (lines[line - 1] ?? '').includes(cfg.marker) || (lines[line - 2] ?? '').includes(cfg.marker);
  const keep = (m: Match, line: number) => !allowedIn(fileAllow, m.p.id) && !(m.p.level !== 'error' && marked(line));
  const hit = (line: number, where: string | undefined, text: string, m: Match) =>
    hits.push({ file, line, where, level: m.p.level, id: m.p.id, why: m.p.why, match: text.slice(m.start, m.end), context: snippet(text, m.start, m.end) });
  // frontmatter: string values only, without ids, codes and dates
  let bodyStart = 0;
  let bodyLine = 1;
  const fm = /^---\n([\s\S]*?)\n---(?:\n|$)/.exec(raw);
  if (fm) {
    bodyStart = fm[0].length;
    bodyLine = fm[0].split('\n').length;
    for (const s of yamlStrings(fm[1], 1)) {
      if (s.keys.some((k) => typeof k === 'string' && SKIP_KEYS.has(k))) continue;
      // regulatory_notes of rows this locale does not show are never rendered (the validator reports them)
      const ri = s.keys.indexOf('regulatory_notes');
      if (ri >= 0 && !visibleCodes(locale).includes(String(s.keys[ri + 1]) as Jurisdiction)) continue;
      for (const m of findResidue(s.value, cfg)) if (keep(m, s.line)) hit(s.line, s.keys.join('.'), s.value, m);
    }
  }
  // body, with comments, code, URLs, link targets and id/code attributes masked
  const masked = maskMdx(raw.slice(bodyStart), cfg.marker);
  for (const x of masked.markerLines) markerLines.add(x + bodyLine - 1);
  masked.text.split('\n').forEach((l, i) => {
    const line = bodyLine + i;
    for (const m of findResidue(l, cfg)) if (keep(m, line)) hit(line, undefined, lines[line - 1] ?? l, m);
  });
  return hits;
}

const allowedIn = (allow: Allow[], id: string) => allow.some((a) => a.patterns === '*' || a.patterns.includes(id));

/**
 * Scan a locale's own sources. Returns every hit not exempted by a marker, allowFiles or allowStrings.
 */
export function scanLocaleSources(locale: ResidueLocale, cfg: ResidueConfig): ResidueHit[] {
  const hits: ResidueHit[] = [];
  const code = locale.code;
  const stringAllow = (file: string, key: string) =>
    cfg.allowStrings.filter((a) => (file === a.file || file.endsWith(`/${a.file}`) || (a.file.endsWith('/') && file.startsWith(a.file))) && a.key.test(key));
  const push = (file: string, line: number | undefined, where: string | undefined, text: string, m: Match) =>
    hits.push({ file, line, where, level: m.p.level, id: m.p.id, why: m.p.why, match: text.slice(m.start, m.end), context: snippet(text, m.start, m.end) });

  // ---- MDX: pages and compounds
  const pagesDir = path.join(ROOT, `src/content/pages/${code}`);
  const mdxFiles = [...walk(`src/content/pages/${code}`, ['.mdx', '.md']), ...walk(`src/content/compounds/${code}`, ['.mdx', '.md'])];
  for (const abs of mdxFiles) {
    const page = abs.startsWith(pagesDir) ? path.relative(pagesDir, abs).split(path.sep).join('/').replace(/.mdx?$/, '') : null;
    hits.push(...scanMdx(posixRel(abs), fs.readFileSync(abs, 'utf8'), locale, cfg, page));
  }

  // ---- i18n JSON (UI strings, glossary, captions, item texts)
  const scope = locale;
  const other = new Set(OTHER_CODES(scope));
  const timeline = (readYamlSafe('src/data/timeline.yaml') as { id: string; jurisdictions?: Jurisdiction[] }[] | null) ?? [];
  const tracker = (readYamlSafe('src/data/tracker.yaml') as { id: string; jurisdiction: Jurisdiction }[] | null) ?? [];
  const corrections = (readYamlSafe('src/data/corrections.yaml') as { id: string; locales: string[] }[] | null) ?? [];
  const hiddenItems: Record<string, Set<string>> = {
    timeline: new Set(timeline.filter((e) => !isVisible(e.jurisdictions ?? [], scope)).map((e) => e.id)),
    tracker: new Set(tracker.filter((e) => !isVisible(e.jurisdiction, scope)).map((e) => e.id)),
    corrections: new Set(corrections.filter((c) => !c.locales.includes(code) && !c.locales.includes('*')).map((c) => c.id)),
    media: otherLocaleOnlyMedia(code),
  };
  for (const abs of walk(`src/i18n/${code}`, ['.json'])) {
    const file = posixRel(abs);
    const ns = path.basename(abs, '.json');
    let data: unknown;
    try {
      data = readJson(abs);
    } catch {
      continue; // the validator reports invalid JSON
    }
    const strings: [string[], string][] = [];
    const walkJson = (node: unknown, at: string[]) => {
      if (typeof node === 'string') strings.push([at, node]);
      else if (Array.isArray(node)) node.forEach((x, i) => walkJson(x, [...at, String(i)]));
      else if (node && typeof node === 'object') for (const [k, v] of Object.entries(node)) walkJson(v, [...at, k]);
    };
    walkJson(data, []);
    for (const [at, s] of strings) {
      if (at.some((k) => k.startsWith('$'))) continue; // comments
      if (at.some((k) => other.has(k))) continue; // keyed by a jurisdiction this locale never shows (vocab names)
      if (hiddenItems[ns]?.has(at[0])) continue; // an item this locale does not show
      const key = at.join('.');
      const allow = stringAllow(file, key);
      for (const m of findResidue(s, cfg)) if (!allowedIn(allow, m.p.id)) push(file, undefined, key, s, m);
    }
  }

  // ---- data text this locale shows
  const scanData = (rp: string, accept: (s: YamlString) => boolean) => {
    const abs = path.join(ROOT, rp);
    if (!fs.existsSync(abs)) return;
    const raw = fs.readFileSync(abs, 'utf8').replace(/\r\n/g, '\n');
    const lines = raw.split('\n');
    for (const s of yamlStrings(raw)) {
      if (s.keys.some((k) => typeof k === 'string' && SKIP_KEYS.has(k)) || !accept(s)) continue;
      const key = s.keys.join('.');
      const allow = stringAllow(rp, key);
      const marked = (lines[s.line - 1] ?? '').includes(cfg.marker) || (lines[s.line - 2] ?? '').includes(cfg.marker);
      for (const m of findResidue(s.value, cfg)) {
        if (allowedIn(allow, m.p.id) || (m.p.level !== 'error' && marked)) continue;
        push(rp, s.line, key, s.value, m);
      }
    }
  };
  const cards = new Set<string>(cardCodes(scope, 'all'));
  const full = new Set<string>(scope.jurisdictions.full);
  const rows = new Set<string>(visibleCodes(scope));
  // contact cards of the locale's own jurisdictions
  scanData('src/data/jurisdictions.yaml', (s) => cards.has(String(s.maps[0]?.get('code'))));
  // schedule notes of the rows it shows; names and holders of the products it shows
  for (const abs of walk('src/data/compounds', ['.yaml', '.yml'])) {
    scanData(posixRel(abs), (s) => {
      if (s.keys[0] === 'regulatory') return s.keys[2] === 'schedule' && rows.has(String(s.maps[1]?.get('jurisdiction')));
      if (s.keys[0] === 'authorised_products') return (s.keys[2] === 'name' || s.keys[2] === 'holder') && full.has(String(s.maps[1]?.get('jurisdiction')));
      return false;
    });
  }
  // the feeds the news page lists
  scanData('src/data/feeds.yaml', (s) => {
    if (s.keys[0] !== 'feeds' || !(s.keys[2] === 'name' || s.keys[2] === 'why')) return false;
    const j = s.maps[1]?.get('jurisdiction') as Jurisdiction | undefined;
    return isVisible(j, scope);
  });
  return hits;
}

function readJsonSafe(rp: string): unknown {
  const abs = path.join(ROOT, rp);
  if (!fs.existsSync(abs)) return null;
  try {
    return readJson(abs);
  } catch {
    return null;
  }
}

function readYamlSafe(rp: string): unknown {
  const abs = path.join(ROOT, rp);
  if (!fs.existsSync(abs)) return null;
  try {
    return readYaml(abs);
  } catch {
    return null;
  }
}

/**
 * Media ids this locale never shows: used as a page hero only through another locale's own value
 * (heroes.yaml { nl: id }), and not placed with <Photo id> in this locale's MDX. Their alt text and
 * captions in this locale's media.json exist as fallback text for that other locale.
 */
function otherLocaleOnlyMedia(code: string): Set<string> {
  const heroes = (readYamlSafe('src/data/heroes.yaml') as Record<string, string | Record<string, string>> | null) ?? {};
  const mine = new Set<string>();
  const others = new Set<string>();
  for (const v of Object.values(heroes)) {
    if (typeof v === 'string') mine.add(v);
    else if (v) {
      const id = v[code] ?? v.default;
      if (id) mine.add(id);
      for (const [k, x] of Object.entries(v)) if (k !== code && k !== 'default') others.add(x);
    }
  }
  for (const abs of [...walk(`src/content/pages/${code}`, ['.mdx']), ...walk(`src/content/compounds/${code}`, ['.mdx'])]) {
    for (const m of fs.readFileSync(abs, 'utf8').matchAll(/<Photo\s+id=["']([^"']+)["']/g)) mine.add(m[1]);
  }
  return new Set([...others].filter((id) => !mine.has(id)));
}

/**
 * Scan the built pages of one locale (dist/<code>/**.html). The language menu is skipped; cited
 * titles in reference lists and citation labels are reported as warnings (a European source may be
 * cited as evidence); everything else counts at its own level, except that markers do not survive
 * the build, so frame hits are warnings here (the source scan judges them). A reference-list entry
 * with an error-level term (a Dutch, Belgian or German name) carries `cited`, so the check can list
 * those sources once each: a source cited only through data (a component's source list) is invisible
 * to the source scan.
 */
export function scanDist(dist: string, locale: ResidueLocale, cfg: ResidueConfig): ResidueHit[] {
  const hits: ResidueHit[] = [];
  const base = path.join(dist, locale.code);
  const allowFor = (route: string) =>
    cfg.allowFiles.filter((a) => a.page.replace(/(^|\/)index$/, '') === route);
  // the figure card's "Source" / "Sources" key in this locale (src/i18n/<code>/figures.json)
  const figures = (readJsonSafe(`src/i18n/${locale.code}/figures.json`) ?? readJsonSafe('src/i18n/en/figures.json') ?? {}) as Record<string, unknown>;
  const sourceKeys = new Set([figures.source, figures.sources].filter((x): x is string => typeof x === 'string'));
  for (const abs of walk(base, ['.html'])) {
    const html = fs.readFileSync(abs, 'utf8');
    if (/^\s*<!doctype html>\s*<title>Redirecting/i.test(html)) continue;
    const route = path.relative(base, abs).split(path.sep).join('/').replace(/(^|\/)index\.html$/, '').replace(/\.html$/, '');
    const allow = allowFor(route);
    const file = posixRel(abs);
    const root = parse(html, { comment: false });
    // Not text for this locale's readers: code, the language menus (header and footer: links with
    // hreflang name each language in its own words, e.g. "Nederlands").
    for (const el of root.querySelectorAll('script, style, template, link, .lang-switch, a[hreflang]')) el.remove();
    const record = (text: string, zone: string, reference: boolean, cited?: string) => {
      for (const m of findResidue(text, cfg)) {
        if (allow.some((a) => a.patterns === '*' || a.patterns.includes(m.p.id))) continue;
        const level: ResidueLevel = reference || m.p.level === 'frame' ? 'warn' : m.p.level;
        hits.push({
          file,
          where: zone,
          level,
          id: m.p.id,
          why: m.p.why,
          match: text.slice(m.start, m.end),
          context: snippet(text, m.start, m.end),
          ...(cited && m.p.level === 'error' ? { cited } : {}),
        });
      }
    };
    const title = root.querySelector('title')?.textContent ?? '';
    record(title, '<title>', false);
    for (const meta of root.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[property="og:title"]')) {
      record(meta.getAttribute('content') ?? '', `meta ${meta.getAttribute('name') ?? meta.getAttribute('property')}`, false);
    }
    const body = root.querySelector('body') ?? root;
    // Cited titles and names, and third-party headlines: warnings. Reference lists and the sources page,
    // the "Based on" lists of explainers, plates, image credits and timeline events, a figure card's
    // "Source" line (a journal such as "Acta Orthopaedica Belgica" may be cited as evidence), and the
    // headlines and summaries of the news list (the feeds' own words).
    const found = [
      ...body.querySelectorAll('.source-list__item, .ref, [id^="source-"], .xp-sources, .plate__sources, .media-credits__sources, .timeline__sources, .news__title, .news__summary'),
      ...body.querySelectorAll('.fig__field').filter((f) => sourceKeys.has((f.querySelector('.fig__key')?.textContent ?? '').trim())),
    ];
    // each item once: a .ref inside a .source-list__item is the same entry
    const set = new Set<HTMLElement>(found);
    const inside = (el: HTMLElement) => {
      for (let p = el.parentNode; p; p = p.parentNode) if (set.has(p)) return true;
      return false;
    };
    const refs = found.filter((r) => !inside(r));
    for (const r of refs) {
      const text = r.textContent.replace(/\s+/g, ' ').trim();
      // a cited source (one entry of a reference list or of the sources page): remembered with its
      // type, so the check can list the Dutch, Belgian and German sources this locale still cites
      const ref = r.classList.contains('ref') ? r : r.querySelector('.ref');
      const cited = ref ? `[${ref.getAttribute('data-type') ?? 'source'}] ${ref.textContent.replace(/\s+/g, ' ').replace(/\(opens an external site\)/g, '').replace(/\s*— accessed [^.]*$/, '').trim()}` : undefined;
      record(text, 'reference list', true, cited);
    }
    for (const a of body.querySelectorAll('.cite__link[aria-label]')) {
      record(a.getAttribute('aria-label') ?? '', 'citation label', true);
      a.removeAttribute('aria-label');
    }
    for (const r of refs) r.remove();
    for (const el of body.querySelectorAll('[aria-label], [alt], [title]')) {
      for (const name of ['aria-label', 'alt', 'title']) {
        const v = el.getAttribute(name);
        if (v) record(v, `[${name}]`, false);
      }
    }
    record(textOf(body), 'page text', false);
  }
  return hits;
}

/** Visible text with block boundaries kept as line breaks, so a context snippet stays readable. */
function textOf(el: HTMLElement): string {
  return el.structuredText.replace(/[ \t]+/g, ' ');
}

/** Short label for a hit, e.g. `line 34 [error netherlands] "Netherlands" — Dutch reader framing`. */
export function describeHit(h: ResidueHit): string {
  const at = h.line ? `line ${h.line}${h.where ? ` (${h.where})` : ''}` : (h.where ?? '');
  return `${at} [${h.level} ${h.id}] "${h.match}" — ${h.why}\n        > ${h.context}`;
}
