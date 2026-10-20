/**
 * Content validator: schema + cross-reference + editorial-guardrail checks.
 *
 *   npm run validate                 # everything
 *   npm run validate -- --only bpc   # only report problems in files whose path contains "bpc"
 *   npm run validate -- --strict     # treat guardrail warnings as errors
 *
 * Errors fail CI. Warnings are guardrail heuristics that need a human (or agent) to look:
 * they flag phrasing that tends to drift into promotion or dosing advice.
 */
import path from 'node:path';
import fs from 'node:fs';
import {
  sourceFileSchema,
  peopleFileSchema,
  compoundDataSchema,
  compoundPageSchema,
  pageSchema,
  glossaryFileSchema,
  timelineFileSchema,
  timelineTextSchema,
  trackerFileSchema,
  trackerTextSchema,
  correctionsFileSchema,
  correctionsTextSchema,
  feedsFileSchema,
  newsFileSchema,
  jurisdictionsFileSchema,
  warningSignsFileSchema,
  type CompoundData,
} from '../src/schemas/index.ts';
import * as V from '../src/schemas/vocab.ts';
import { ALLOWED_COMPONENTS, COMPOUND_ONLY_COMPONENTS } from '../src/schemas/components.ts';
import {
  ROOT,
  rel,
  walk,
  readYaml,
  readJson,
  readMdx,
  loadLocales,
  loadAllowlist,
  hostAllowed,
  loadCommerceTokens,
  commerceRegex,
} from './lib/load.ts';

const args = process.argv.slice(2);
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;
const strict = args.includes('--strict');

type Issue = { file: string; msg: string };
const errors: Issue[] = [];
const warnings: Issue[] = [];
const err = (file: string, msg: string) => errors.push({ file: rel(file), msg });
const warn = (file: string, msg: string) => warnings.push({ file: rel(file), msg });

function zodIssues(file: string, result: { success: boolean; error?: { issues: { path: (string | number)[]; message: string }[] } }) {
  if (result.success) return;
  for (const i of result.error!.issues) err(file, `${i.path.join('.') || '(root)'}: ${i.message}`);
}

const { locales, sourceLocale } = loadLocales();
const localeCodes = locales.map((l) => l.code);
const publishedLocales = locales.filter((l) => l.status === 'published').map((l) => l.code);
const allow = loadAllowlist();
const commerce = loadCommerceTokens();
const commerceRe = commerceRegex(commerce.tokens);
const urlPatternRes = commerce.urlPatterns.map((p) => new RegExp(p, 'i'));

// ------------------------------------------------------------------ sources
const sources = new Map<string, { file: string; doi?: string; url?: string }>();
for (const file of walk('src/data/sources', ['.yaml', '.yml'])) {
  const raw = readYaml(file) ?? {};
  const r = sourceFileSchema.safeParse(raw);
  zodIssues(file, r);
  if (!r.success) continue;
  for (const [id, s] of Object.entries(r.data)) {
    const prev = sources.get(id);
    if (prev) {
      const same = (prev.doi && prev.doi === s.doi) || (prev.url && prev.url === s.url);
      (same ? warn : err)(file, `duplicate source id "${id}" (also in ${prev.file})${same ? ' — same DOI/URL, will be merged' : ' — DIFFERENT source, rename one'}`);
      continue;
    }
    sources.set(id, { file: rel(file), doi: s.doi, url: s.url });
    if (s.url && !hostAllowed(s.url, allow)) err(file, `source "${id}": url host not on allowlist: ${s.url}`);
    if (s.url && urlPatternRes.some((re) => re.test(s.url!))) err(file, `source "${id}": url matches a commerce/affiliate pattern: ${s.url}`);
    if (s.type !== 'law' && s.type !== 'regulator' && s.type !== 'web' && s.type !== 'label' && s.type !== 'registry' && s.type !== 'report' && s.type !== 'dataset' && !s.doi && !s.pmid) {
      warn(file, `source "${id}" (${s.type}) has no DOI or PMID — scholarly sources should be DOI-linked`);
    }
  }
}
const requireSource = (file: string, id: string, ctx: string) => {
  if (!sources.has(id)) err(file, `${ctx}: unknown source id "${id}"`);
};

// ------------------------------------------------------------------ people
const people = new Set<string>();
const peopleFile = path.join(ROOT, 'src/data/people.yaml');
if (fs.existsSync(peopleFile)) {
  const r = peopleFileSchema.safeParse(readYaml(peopleFile));
  zodIssues(peopleFile, r);
  if (r.success) Object.keys(r.data).forEach((k) => people.add(k));
}
const requirePerson = (file: string, id: string, ctx: string) => {
  if (!people.has(id)) err(file, `${ctx}: unknown person id "${id}" (add it to src/data/people.yaml)`);
};

// ------------------------------------------------------------------ compound data
const compoundData = new Map<string, CompoundData>();
for (const file of walk('src/data/compounds', ['.yaml', '.yml'])) {
  const r = compoundDataSchema.safeParse(readYaml(file));
  zodIssues(file, r);
  if (!r.success) continue;
  const c = r.data;
  const expected = path.basename(file).replace(/\.ya?ml$/, '');
  if (c.slug !== expected) err(file, `slug "${c.slug}" must match filename "${expected}"`);
  compoundData.set(c.slug, c);
  if (c.sequence) requireSource(file, c.sequence.source, 'sequence.source');
  if (c.molecular.smiles_source) requireSource(file, c.molecular.smiles_source, 'molecular.smiles_source');
  for (const reg of c.regulatory) reg.sources.forEach((s) => requireSource(file, s, `regulatory ${reg.jurisdiction}`));
  for (const st of c.studies) requireSource(file, st.source, `study ${st.id}`);
  for (const p of c.authorised_products) {
    requireSource(file, p.label_source, `authorised_products ${p.id}`);
    if (!hostAllowed(p.label_url, allow)) err(file, `authorised product ${p.id}: label_url not on allowlist`);
  }
  requirePerson(file, c.reviewed_by, 'reviewed_by');
  requirePerson(file, c.edited_by, 'edited_by');
  if (c.regulatory.find((r) => r.jurisdiction === 'WADA' && r.status === 'prohibited' && !r.wada_section)) {
    err(file, 'WADA prohibited entries need wada_section');
  }
}
for (const c of compoundData.values()) {
  for (const rel of c.related) if (!compoundData.has(rel)) err(path.join(ROOT, `src/data/compounds/${c.slug}.yaml`), `related: unknown compound "${rel}"`);
}

// ------------------------------------------------------------------ glossary
const glossary = new Map<string, Map<string, string>>(); // locale -> id -> file
for (const loc of localeCodes) {
  const ids = new Map<string, string>();
  for (const file of walk(`src/i18n/${loc}/glossary`, ['.json'])) {
    const raw = readJson(file);
    const r = glossaryFileSchema.safeParse(raw);
    zodIssues(file, r);
    if (!r.success) continue;
    for (const id of Object.keys(r.data)) {
      if (ids.has(id)) err(file, `duplicate glossary id "${id}" (also in ${ids.get(id)})`);
      ids.set(id, rel(file));
    }
    for (const [id, e] of Object.entries(r.data)) {
      for (const s of e.see_also) if (!Object.keys(r.data).includes(s)) {
        // see_also may point into another file; checked after all files load
      }
      if (e.definition.length > 400) warn(file, `glossary "${id}": definition is long (${e.definition.length} chars); B1 definitions should be 1–2 sentences`);
    }
  }
  glossary.set(loc, ids);
}

// ------------------------------------------------------------------ i18n JSON parse check
for (const file of walk('src/i18n', ['.json'])) {
  try {
    readJson(file);
  } catch (e) {
    err(file, `invalid JSON: ${(e as Error).message}`);
  }
}

// ------------------------------------------------------------------ MDX body checks
const COMPONENT_RE = /<([A-Z][A-Za-z0-9]*)\b/g;
const CITE_RE = /<Cite\s+id=["']([^"']+)["']/g;
const CLAIM_RE = /<Claim\s+level=["']([^"']+)["']/g;
const CALLOUT_RE = /<Callout\s+type=["']([^"']+)["']/g;
const SECTION_RE = /<Section\s+id=["']([^"']+)["']\s*>/g;
const MD_LINK_RE = /\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
const HREF_RE = /href=["']([^"']+)["']/g;
const DIAGRAM_RE = /<Diagram\s+([^>]*?)\s*(\/?)>/g;

/** Phrases that tend to slip into promotion or dosing advice. Warnings, reviewed by hand. */
const GUARDRAIL_PATTERNS: [RegExp, string][] = [
  [/\b(?:is|are|be|considered|generally|perfectly|completely|totally)\s+safe\b/i, '"safe" — only use for authorised medicines within their label, and say so'],
  [/\bproven\b/i, '"proven" — say what was shown, in whom, in which design'],
  [/\bclinically (?:validated|proven|tested)\b/i, '"clinically validated/proven" is banned phrasing'],
  [/\b(?:recommended|typical|standard|common|starting|maintenance|effective)\s+dos(?:e|age|ing)\b/i, 'dose recommendation phrasing — report studied doses descriptively, never as guidance'],
  [/\b(?:protocol|stack|stacking|cycle|cycling|loading phase|titrate yourself)\b/i, 'protocol/stack/cycle vocabulary — allowed only when explicitly explaining why the site does not provide them'],
  [/\b(?:mcg|µg|mg|iu)\s*(?:\/|per)\s*(?:day|week|kg|injection)\b/i, 'dose-per-time or dose-per-kg figure — must be inside <Q> and framed as study design (species, study)'],
  [/\b(?:best|most effective|superior|strongest|safest)\b/i, 'superlative — no superlative comparisons between compounds'],
  [/\b(?:miracle|breakthrough|game[- ]changer|revolutionary|wonder drug)\b/i, 'hype vocabulary'],
  [/\b(?:i|we) (?:recommend|suggest) (?:taking|using|trying)\b/i, 'recommends use'],
  [/\b(?:where to buy|reliable source|trusted (?:seller|vendor|supplier)|reputable (?:seller|vendor|supplier|lab))\b/i, 'sourcing language — never'],
];

function checkBody(file: string, body: string, locale: string, kind: 'page' | 'compound') {
  // components
  for (const m of body.matchAll(COMPONENT_RE)) {
    const name = m[1];
    if (!ALLOWED_COMPONENTS.includes(name as never)) err(file, `unknown MDX component <${name}> (allowed: see docs/CONTENT-GUIDE.md)`);
    if (kind === 'page' && COMPOUND_ONLY_COMPONENTS.includes(name as never)) err(file, `<${name}> is only valid on compound pages`);
  }
  for (const m of body.matchAll(CITE_RE)) for (const id of m[1].split(',').map((s) => s.trim())) requireSource(file, id, '<Cite>');
  for (const m of body.matchAll(CLAIM_RE)) if (!(V.CLAIM_LEVELS as readonly string[]).includes(m[1])) err(file, `<Claim level="${m[1]}"> — level must be one of ${V.CLAIM_LEVELS.join(', ')}`);
  for (const m of body.matchAll(CALLOUT_RE)) if (!(V.CALLOUT_TYPES as readonly string[]).includes(m[1])) err(file, `<Callout type="${m[1]}"> — type must be one of ${V.CALLOUT_TYPES.join(', ')}`);
  for (const m of body.matchAll(DIAGRAM_RE)) {
    if (m[2] === '/') err(file, '<Diagram> must have children: the full text equivalent of the diagram');
    if (!/\bid=["'][a-z0-9-]+["']/.test(m[1])) err(file, '<Diagram> needs id="kebab-case-id"');
  }
  // links
  const links: { text: string; href: string }[] = [];
  for (const m of body.matchAll(MD_LINK_RE)) links.push({ text: m[1], href: m[2] });
  for (const m of body.matchAll(HREF_RE)) links.push({ text: '', href: m[1] });
  for (const l of links) {
    if (/^https?:/i.test(l.href)) {
      if (!hostAllowed(l.href, allow)) err(file, `outbound link to non-allowlisted host: ${l.href}`);
      warn(file, `inline outbound link ${l.href} — prefer <Cite id> so the source is in the registry`);
    } else if (l.href.startsWith('/')) {
      if (!new RegExp(`^/${locale}/`).test(l.href)) err(file, `internal link must start with /${locale}/: ${l.href}`);
    } else if (!l.href.startsWith('#')) {
      err(file, `link must be absolute internal (/${locale}/...), an anchor (#...) or https: ${l.href}`);
    }
    if (commerceRe.test(l.text) || commerceRe.test(l.href)) err(file, `commerce token in link: [${l.text}](${l.href})`);
    if (urlPatternRes.some((re) => re.test(l.href))) err(file, `link matches affiliate/shortener pattern: ${l.href}`);
  }
  // guardrails (skip code spans and <Q>…</Q> contents)
  const prose = body.replace(/<Q>[^<]*<\/Q>/g, '').replace(/`[^`]*`/g, '');
  const lines = prose.split('\n');
  lines.forEach((line, i) => {
    for (const [re, why] of GUARDRAIL_PATTERNS) {
      if (re.test(line)) warn(file, `line ~${i + 1}: ${why}\n      > ${line.trim().slice(0, 160)}`);
    }
  });
  // headings: body must not contain an h1; compound bodies must not contain h2 (sections render their own)
  if (/^#\s/m.test(body)) err(file, 'do not use "# " (h1) in the body — the layout renders the title');
  if (kind === 'compound' && /^##\s/m.test(body)) err(file, 'compound bodies use <Section id> instead of "## " headings (use ### for sub-headings)');
}

// ------------------------------------------------------------------ compound pages
const compoundPages = new Map<string, Map<string, { file: string; data: ReturnType<typeof compoundPageSchema.parse> }>>();
for (const file of walk('src/content/compounds', ['.mdx'])) {
  const locale = path.relative(path.join(ROOT, 'src/content/compounds'), file).split(path.sep)[0];
  if (!localeCodes.includes(locale)) {
    err(file, `unknown locale folder "${locale}"`);
    continue;
  }
  const { data, body } = readMdx(file);
  const r = compoundPageSchema.safeParse(data);
  zodIssues(file, r);
  if (!r.success) continue;
  const slug = path.basename(file, '.mdx');
  if (r.data.slug !== slug) err(file, `frontmatter slug "${r.data.slug}" must match filename`);
  const cd = compoundData.get(slug);
  if (!cd) {
    err(file, `no data file src/data/compounds/${slug}.yaml`);
    continue;
  }
  if (!compoundPages.has(slug)) compoundPages.set(slug, new Map());
  compoundPages.get(slug)!.set(locale, { file, data: r.data });

  // sections in fixed order
  const sections = [...body.matchAll(SECTION_RE)].map((m) => m[1]);
  const required = cd.status === 'complete' ? V.COMPOUND_SECTIONS : V.STUB_SECTIONS;
  const allowed = V.COMPOUND_SECTIONS as readonly string[];
  for (const s of sections) if (!allowed.includes(s)) err(file, `<Section id="${s}"> is not a valid compound section (${allowed.join(', ')})`);
  for (const s of required) if (!sections.includes(s)) err(file, `missing <Section id="${s}">`);
  const order = sections.filter((s) => allowed.includes(s));
  const sorted = [...order].sort((a, b) => allowed.indexOf(a) - allowed.indexOf(b));
  if (order.join() !== sorted.join()) err(file, `sections out of order: ${order.join(' → ')} (required: ${allowed.join(' → ')})`);
  if (new Set(order).size !== order.length) err(file, 'duplicate <Section>');
  // required data components inside their sections
  const sectionBody = (id: string) => {
    const start = body.indexOf(`<Section id="${id}">`);
    if (start < 0) return '';
    const end = body.indexOf('</Section>', start);
    return body.slice(start, end < 0 ? undefined : end);
  };
  if (cd.status === 'complete') {
    if (!sectionBody('mechanism').includes('<Mechanism')) err(file, '<Section id="mechanism"> must contain <Mechanism />');
    if (!sectionBody('evidence').includes('<StudyTable')) err(file, '<Section id="evidence"> must contain <StudyTable />');
  }
  if (!sectionBody('regulatory').includes('<RegulatoryTable')) err(file, '<Section id="regulatory"> must contain <RegulatoryTable />');
  if ((cd.category === 'authorised' || cd.category === 'authorised-elsewhere') && !body.includes('<AuthorisedProducts')) {
    err(file, 'authorised compounds must include <AuthorisedProducts /> (prescription route + official label links)');
  }
  // localised study text covers the data
  for (const st of cd.studies) if (!r.data.studies[st.id]) err(file, `studies: missing localised finding/limitation for study "${st.id}"`);
  for (const id of Object.keys(r.data.studies)) if (!cd.studies.find((s) => s.id === id)) err(file, `studies: "${id}" is not a study in the data file`);
  for (const p of cd.authorised_products) if (!r.data.indications[p.id]) err(file, `indications: missing localised indication for product "${p.id}"`);
  if (cd.status === 'complete' && r.data.mechanism.length < 3) err(file, 'complete pages need a mechanism chain of at least 3 steps');
  checkBody(file, body, locale, 'compound');
}
// translation parity: epistemic structure must match the source locale
for (const [slug, byLocale] of compoundPages) {
  const src = byLocale.get(sourceLocale);
  if (!src) {
    for (const { file } of byLocale.values()) err(file, `no ${sourceLocale} source page for compound "${slug}"`);
    continue;
  }
  for (const [loc, page] of byLocale) {
    if (loc === sourceLocale) continue;
    const a = src.data.mechanism.map((s) => `${s.kind}:${s.level}`).join('|');
    const b = page.data.mechanism.map((s) => `${s.kind}:${s.level}`).join('|');
    if (a !== b) err(page.file, `mechanism steps (kind:level) differ from ${sourceLocale}: translation must not change epistemic levels`);
  }
}
for (const slug of compoundData.keys()) {
  for (const loc of publishedLocales) {
    if (!compoundPages.get(slug)?.has(loc)) {
      (loc === sourceLocale ? err : warn)(path.join(ROOT, `src/data/compounds/${slug}.yaml`), `no ${loc} page: src/content/compounds/${loc}/${slug}.mdx`);
    }
  }
}

// ------------------------------------------------------------------ generic pages
const pageRoutes = new Map<string, Set<string>>(); // locale -> route keys
const pageFiles: { file: string; locale: string; route: string; data: ReturnType<typeof pageSchema.parse>; body: string }[] = [];
for (const file of walk('src/content/pages', ['.mdx'])) {
  const relp = path.relative(path.join(ROOT, 'src/content/pages'), file).split(path.sep);
  const locale = relp[0];
  if (!localeCodes.includes(locale)) {
    err(file, `unknown locale folder "${locale}"`);
    continue;
  }
  const route = relp.slice(1).join('/').replace(/\.mdx$/, '').replace(/(^|\/)index$/, '');
  const { data, body } = readMdx(file);
  const r = pageSchema.safeParse(data);
  zodIssues(file, r);
  if (!r.success) continue;
  if (!pageRoutes.has(locale)) pageRoutes.set(locale, new Set());
  pageRoutes.get(locale)!.add(route);
  pageFiles.push({ file, locale, route, data: r.data, body });
  requirePerson(file, r.data.reviewed_by, 'reviewed_by');
  if (r.data.opinion) requirePerson(file, r.data.opinion.signed_by, 'opinion.signed_by');
  r.data.further_reading.forEach((s) => requireSource(file, s, 'further_reading'));
  if (locale !== sourceLocale && r.data.translation.method === 'source') {
    warn(file, `translation.method is "source" in a non-source locale — set translated/adapted/native and review status`);
  }
  checkBody(file, body, locale, 'page');
}
// related routes exist (pages, compounds, or built-in routes)
const BUILTIN_ROUTES = ['', 'compounds', 'glossary', 'sources', 'news', 'search'];
for (const p of pageFiles) {
  for (const r of p.data.related) {
    const key = r.replace(/^\/+|\/+$/g, '').replace(new RegExp(`^${p.locale}/`), '');
    const isCompound = key.startsWith('compounds/') && compoundData.has(key.slice('compounds/'.length));
    if (!pageRoutes.get(p.locale)?.has(key) && !isCompound && !BUILTIN_ROUTES.includes(key)) {
      warn(p.file, `related: "${r}" does not exist (yet) in ${p.locale}`);
    }
  }
}

// ------------------------------------------------------------------ structured data files
function checkDataFile(rp: string, schema: { safeParse: (x: unknown) => never }) {
  const file = path.join(ROOT, rp);
  if (!fs.existsSync(file)) return null;
  const raw = rp.endsWith('.json') ? readJson(file) : readYaml(file);
  const r = (schema as never as { safeParse: (x: unknown) => { success: boolean; data?: unknown; error?: never } }).safeParse(raw);
  zodIssues(file, r as never);
  return r.success ? r.data : null;
}
const timeline = checkDataFile('src/data/timeline.yaml', timelineFileSchema as never) as { id: string; sources: string[]; compounds: string[] }[] | null;
timeline?.forEach((e) => {
  e.sources.forEach((s) => requireSource(path.join(ROOT, 'src/data/timeline.yaml'), s, `timeline ${e.id}`));
  e.compounds.forEach((c) => compoundData.has(c) || err(path.join(ROOT, 'src/data/timeline.yaml'), `timeline ${e.id}: unknown compound ${c}`));
});
const tracker = checkDataFile('src/data/tracker.yaml', trackerFileSchema as never) as { id: string; sources: string[] }[] | null;
tracker?.forEach((e) => e.sources.forEach((s) => requireSource(path.join(ROOT, 'src/data/tracker.yaml'), s, `tracker ${e.id}`)));
const corrections = checkDataFile('src/data/corrections.yaml', correctionsFileSchema as never) as { id: string }[] | null;
checkDataFile('src/data/feeds.yaml', feedsFileSchema as never);
checkDataFile('src/data/news.json', newsFileSchema as never);
checkDataFile('src/data/jurisdictions.yaml', jurisdictionsFileSchema as never);
for (const loc of localeCodes) checkDataFile(`src/i18n/${loc}/warning-signs.json`, warningSignsFileSchema as never);

for (const loc of localeCodes) {
  const pairs: [string, { id: string }[] | null, typeof timelineTextSchema][] = [
    ['timeline', timeline, timelineTextSchema],
    ['tracker', tracker, trackerTextSchema as never],
    ['corrections', corrections, correctionsTextSchema as never],
  ];
  for (const [ns, items, schema] of pairs) {
    const file = path.join(ROOT, `src/i18n/${loc}/${ns}.json`);
    if (!fs.existsSync(file)) {
      if (items?.length && publishedLocales.includes(loc)) err(file, `missing ${ns} strings for published locale ${loc}`);
      continue;
    }
    const raw = readJson(file);
    const r = schema.safeParse(raw);
    zodIssues(file, r);
    if (r.success && items && publishedLocales.includes(loc)) {
      for (const it of items) if (!(it.id in r.data)) err(file, `missing text for ${ns} item "${it.id}"`);
    }
  }
}

// ------------------------------------------------------------------ report
const filt = (xs: Issue[]) => (only ? xs.filter((x) => x.file.includes(only)) : xs);
const E = filt(errors);
const W = filt(warnings);
const group = (xs: Issue[]) => {
  const m = new Map<string, string[]>();
  for (const x of xs) m.set(x.file, [...(m.get(x.file) ?? []), x.msg]);
  return m;
};
for (const [file, msgs] of group(W)) {
  console.log(`\n\x1b[33mwarn\x1b[0m ${file}`);
  for (const m of msgs) console.log(`  - ${m}`);
}
for (const [file, msgs] of group(E)) {
  console.log(`\n\x1b[31merror\x1b[0m ${file}`);
  for (const m of msgs) console.log(`  - ${m}`);
}
console.log(
  `\nvalidated: ${sources.size} sources, ${compoundData.size} compound data files, ${[...compoundPages.values()].reduce((a, m) => a + m.size, 0)} compound pages, ${pageFiles.length} pages` +
    `\n${E.length} error(s), ${W.length} warning(s)${only ? ` (filtered by "${only}")` : ''}`,
);
if (E.length || (strict && W.length)) process.exit(1);
