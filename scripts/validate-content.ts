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
import { ALLOWED_COMPONENTS, COMPOUND_ONLY_COMPONENTS, SOURCED_FIGURES } from '../src/schemas/components.ts';
import { wordCount, fleschReadingEase } from '../src/lib/readability.ts';
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
import { validateMedia } from './lib/validate-media.ts';
import { checkExplainers } from './lib/explainers.ts';

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

// ------------------------------------------------------------------ plain language (beginner layer)
/**
 * Summary items, glance.main_risk and figure captions are what a reader with low health literacy
 * reads first. Word counts apply in every locale; Flesch Reading Ease (src/lib/readability.ts)
 * only to English text. See docs/CONTENT-GUIDE.md §4.
 */
const PLAIN = { warnWords: 18, maxWords: 30, minFlesch: 60, maxSummaryItems: 5 };
const englishLocales = new Set(locales.filter((l) => l.bcp47.toLowerCase().startsWith('en')).map((l) => l.code));
/**
 * Time-boxed waivers (config/readability-waivers.json) for files another workstream had in flight
 * when the word limits were introduced: over-length items there are reported as labelled warnings
 * until the date, then fail again. They cover nothing but these word limits.
 */
type Waiver = { file: string; until: string; reason: string; used?: boolean };
const waiverFile = path.join(ROOT, 'config/readability-waivers.json');
const waivers: Waiver[] = fs.existsSync(waiverFile) ? ((readJson(waiverFile) as { waivers?: Waiver[] }).waivers ?? []) : [];
const today = new Date().toISOString().slice(0, 10);
const posix = (f: string) => rel(f).split(path.sep).join('/');
const clip = (s: string) => (s.length > 100 ? `${s.slice(0, 97)}…` : s);
function checkPlain(file: string, where: string, text: string, locale: string, names: string[] = []) {
  const n = wordCount(text);
  if (n > PLAIN.maxWords) {
    const msg = `${where}: ${n} words (max ${PLAIN.maxWords}) — split it or cut it`;
    const waiver = waivers.find((w) => w.file === posix(file) && today <= w.until);
    if (waiver) {
      waiver.used = true;
      warn(file, `${msg} [waived until ${waiver.until}, an error after that: ${waiver.reason}]\n      > ${clip(text)}`);
    } else err(file, `${msg}\n      > ${clip(text)}`);
  } else if (n > PLAIN.warnWords) {
    warn(file, `${where}: ${n} words (aim for ${PLAIN.warnWords} or fewer)\n      > ${clip(text)}`);
  }
  if (englishLocales.has(locale)) {
    const f = fleschReadingEase(text, { names });
    if (f < PLAIN.minFlesch) warn(file, `${where}: reading ease ${Math.round(f)} (aim for ${PLAIN.minFlesch}+: shorter sentences, everyday words)\n      > ${clip(text)}`);
  }
}
function checkSummary(file: string, items: string[], locale: string, names: string[] = []) {
  if (items.length > PLAIN.maxSummaryItems) warn(file, `summary: ${items.length} items (aim for ${PLAIN.maxSummaryItems} or fewer: only the essentials)`);
  items.forEach((s, i) => checkPlain(file, `summary item ${i + 1}`, s, locale, names));
}

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
const CAPTION_RE = /<([A-Z][A-Za-z0-9]*)\b[^>]*?\bcaption=(["'])([\s\S]*?)\2/g;
// "Less text, more visuals" components (CONTENT-GUIDE §9). Literal string attributes only; an
// opening tag may also carry {…} expression props (rows={[…]}), which may contain ">".
const attr = (tag: string, name: string) => new RegExp(`\\b${name}=(["'])([\\s\\S]*?)\\1`).exec(tag)?.[2];
const openTags = (body: string, name: string) =>
  [...body.matchAll(new RegExp(`<${name}\\b((?:[^>"'{]|"[^"]*"|'[^']*'|\\{(?:[^{}]|\\{(?:[^{}]|\\{[^{}]*\\})*\\})*\\})*)>`, 'g'))].map((m) => m[1]);
const FIGURE_TITLE_COMPONENTS = ['Compare', 'KeyNumber', 'IconArray', 'TimeStrip'];

/**
 * The "less text, more visuals" components: required props, plain-language takeaways, sources that
 * exist, and the one rule that keeps safety visible: stop-now content is never folded away.
 */
function checkVisuals(file: string, body: string, locale: string) {
  for (const tag of openTags(body, 'Lead')) if (!attr(tag, 'question')) err(file, '<Lead> needs question="…" (the reader\'s question this section answers)');
  for (const m of body.matchAll(/<Lead\b[^>]*>([\s\S]*?)<\/Lead>/g)) {
    const answer = m[1].replace(/<[^>]+>/g, ' ').trim();
    if (!answer) err(file, '<Lead> needs a one-sentence answer between its tags');
    else checkPlain(file, '<Lead> answer', answer, locale);
  }
  for (const tag of openTags(body, 'InDetail')) if (!attr(tag, 'title')) err(file, '<InDetail> needs title="…" (what the fold holds, in plain words)');
  for (const m of body.matchAll(/<InDetail\b[\s\S]*?<\/InDetail>/g)) {
    if (/<Callout\s+type=["']stop["']/.test(m[0]) || /<WarningSigns\b/.test(m[0])) {
      err(file, 'stop-now content (<Callout type="stop">, <WarningSigns />) must never sit inside an <InDetail> fold');
    }
    if (/<InDetail\b/.test(m[0].slice(1))) err(file, '<InDetail> folds cannot be nested');
  }
  for (const name of FIGURE_TITLE_COMPONENTS) {
    for (const tag of openTags(body, name)) {
      const title = attr(tag, 'title');
      if (!title) err(file, `<${name}> needs title="…": one sentence that states the finding`);
      else checkPlain(file, `<${name}> title`, title, locale);
    }
  }
  for (const tag of openTags(body, 'KeyNumber')) {
    for (const req of ['value', 'label']) if (!attr(tag, req)) err(file, `<KeyNumber> needs ${req}="…"`);
    const label = attr(tag, 'label');
    if (label) checkPlain(file, '<KeyNumber> label', label, locale);
    // A number without its population is a generalisation (CONTENT-GUIDE §1: species, n and design).
    if (!attr(tag, 'who') && !attr(tag, 'counted')) warn(file, '<KeyNumber> without who="…" (the study and who took part) or counted="…" (what was counted, for numbers that are not about people)');
    const level = attr(tag, 'level');
    if (level && !(V.CLAIM_LEVELS as readonly string[]).includes(level)) err(file, `<KeyNumber level="${level}"> — level must be one of ${V.CLAIM_LEVELS.join(', ')}`);
  }
  for (const name of SOURCED_FIGURES) {
    for (const tag of openTags(body, name)) {
      const src = attr(tag, 'source');
      if (!src) err(file, `<${name}> needs source="id" (numbered with the page's citations)`);
      else for (const id of src.split(',').map((x) => x.trim())) requireSource(file, id, `<${name} source>`);
    }
  }
  for (const m of body.matchAll(/<Verdict\s+is=["']([^"']+)["']/g)) {
    if (!(V.VERDICTS as readonly string[]).includes(m[1])) err(file, `<Verdict is="${m[1]}"> — must be one of ${V.VERDICTS.join(', ')}`);
  }
  for (const m of body.matchAll(/<Compare\b[\s\S]*?<\/Compare>/g)) {
    if (!/\n\|.*\|\s*\n\|\s*:?-{3,}/.test(m[0])) err(file, '<Compare> must wrap a markdown table');
    if (!/<Verdict\b/.test(m[0])) err(file, '<Compare> answer cells start with <Verdict is="yes|no|unknown" /> (a word plus a glyph)');
  }
}

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
    if (kind === 'compound' && name === 'SequenceView') err(file, '<SequenceView> is already rendered by the compound layout (next to the evidence grade); remove it from the body');
  }
  for (const m of body.matchAll(CITE_RE)) for (const id of m[1].split(',').map((s) => s.trim())) requireSource(file, id, '<Cite>');
  for (const m of body.matchAll(CLAIM_RE)) if (!(V.CLAIM_LEVELS as readonly string[]).includes(m[1])) err(file, `<Claim level="${m[1]}"> — level must be one of ${V.CLAIM_LEVELS.join(', ')}`);
  for (const m of body.matchAll(CALLOUT_RE)) if (!(V.CALLOUT_TYPES as readonly string[]).includes(m[1])) err(file, `<Callout type="${m[1]}"> — type must be one of ${V.CALLOUT_TYPES.join(', ')}`);
  for (const m of body.matchAll(DIAGRAM_RE)) {
    if (m[2] === '/') err(file, '<Diagram> must have children: the full text equivalent of the diagram');
    if (!/\bid=["'][a-z0-9-]+["']/.test(m[1])) err(file, '<Diagram> needs id="kebab-case-id"');
  }
  // figure captions (diagrams, explainers, infographics, photos): the beginner reads them first
  for (const m of body.matchAll(CAPTION_RE)) checkPlain(file, `<${m[1]}> caption`, m[3], locale);
  checkVisuals(file, body, locale);
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

  // beginner layer: plain summary and the "Biggest risk" tile
  const names = [cd.names.common, cd.names.inn, ...cd.names.other, ...cd.names.brands].filter((n): n is string => !!n);
  checkSummary(file, r.data.summary, locale, names);
  if (r.data.lede) checkPlain(file, 'lede', r.data.lede, locale, names);
  // "Stop and get help" strip and fact sheet: sourced and plain; the strip links to the full stop-now list.
  r.data.glance.stop_signs?.forEach((sg, i) => {
    checkPlain(file, `glance.stop_signs[${i + 1}]`, sg.text, locale, names);
    sg.sources.forEach((id) => requireSource(file, id, `glance.stop_signs[${i + 1}]`));
  });
  r.data.glance.facts.forEach((f, i) => f.sources.forEach((id) => requireSource(file, id, `glance.facts[${i + 1}]`)));
  if (r.data.glance.stop_signs && !/<Callout\s+type=["']stop["'][^>]*\bid=["']stop-now["']/.test(body)) {
    err(file, 'glance.stop_signs links to the full stop-now list: give the stop callout id="stop-now" (<Callout type="stop" id="stop-now" …>)');
  }
  if (r.data.glance.main_risk) checkPlain(file, 'glance.main_risk', r.data.glance.main_risk, locale, names);
  else if (cd.status === 'complete' && cd.tier === 1) {
    warn(file, 'glance.main_risk is missing: the "biggest risk" tile falls back to a link to the warning signs. Add at most 12 plain words condensed from this page\'s own risk section.');
  }

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
  checkSummary(file, r.data.summary, locale);
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

// ------------------------------------------------------------------ plain language: built-in pages
// Glossary, sources, news and search take their one-item summary from pages.json
// (keep in sync with src/pages/[locale]/{glossary,sources,news,search}.astro).
const BUILTIN_SUMMARIES = ['glossary.intro', 'sources.intro', 'news.intro', 'search.privacy'];
for (const loc of localeCodes) {
  const file = path.join(ROOT, `src/i18n/${loc}/pages.json`);
  if (!fs.existsSync(file)) continue;
  const raw = readJson(file) as Record<string, Record<string, unknown> | undefined>;
  for (const key of BUILTIN_SUMMARIES) {
    const [ns, k] = key.split('.');
    const v = raw[ns]?.[k];
    if (typeof v === 'string') checkPlain(file, `pages.${key} (the summary of /${loc}/${ns}/)`, v, loc);
  }
}
// Captions kept outside MDX: explainer step captions and image / infographic captions
// (src/i18n/<locale>/{explainers,media,infographics}.json). Any "caption" string or "steps" list counts.
function collectCaptions(node: unknown, at: string, out: [string, string][]) {
  if (!node || typeof node !== 'object') return;
  for (const [key, v] of Object.entries(node as Record<string, unknown>)) {
    const where = at ? `${at}.${key}` : key;
    if (key === 'caption' && typeof v === 'string') out.push([where, v]);
    else if (key === 'steps' && Array.isArray(v)) v.forEach((s, i) => typeof s === 'string' && out.push([`${where}[${i + 1}]`, s]));
    else collectCaptions(v, where, out);
  }
}
for (const loc of localeCodes) {
  for (const ns of ['explainers', 'media', 'infographics']) {
    for (const file of [path.join(ROOT, `src/i18n/${loc}/${ns}.json`), ...walk(`src/i18n/${loc}/${ns}`, ['.json'])]) {
      if (!fs.existsSync(file)) continue;
      let data: unknown;
      try { data = readJson(file); } catch { continue; } // reported by the JSON parse check
      const caps: [string, string][] = [];
      collectCaptions(data, '', caps);
      for (const [where, text] of caps) checkPlain(file, `caption ${where}`, text, loc);
    }
  }
}
for (const w of waivers) {
  if (today > w.until) warn(waiverFile, `waiver for ${w.file} expired on ${w.until}: remove the entry`);
  else if (!w.used) warn(waiverFile, `waiver for ${w.file} is no longer needed (nothing there is over ${PLAIN.maxWords} words): remove the entry`);
}

// ------------------------------------------------------------------ emergency number (CONTENT-GUIDE §1)
/**
 * The English site is read in many countries, so it never prints 112 as a phone number (owner's
 * decision, 20 October 2026): it says "call your local emergency number" (common.emergency.* in
 * components). Dutch pages say 112. A "112" that is a phone number is one with a calling word near
 * it (call, phone, dial, emergency, ambulance …), or any 112 in a safety string (a stop callout, a
 * stop sign, the warning signs, the emergency and notice strings). Other numbers are left alone:
 * "week 112", "volume 112", "JCI112855" and "1,112" do not match.
 */
const NUMBER_112 = /(?<![\w.,/-])112(?![\w]|[.,]\d)/g;
// A count, a measurement or a point in a study is never a phone number, even next to a calling word
// ("112 participants were called back", "above 112 mg/dL? Call your doctor", "at week 112 … call").
const NOT_A_PHONE = /^[\s-]*(?:%|(?:mg|mmol|µg|mcg|kg|g|ml|l|dl|percent|participants?|people|persons?|adults?|children|patients?|subjects?|volunteers?|cases?|weeks?|days?|months?|years?|hours?|minutes?)\b)/i;
const NOT_A_PHONE_BEFORE = /\b(?:week|day|month|year|volume|vol\.|issue|page|pp?\.|ref\.|table|figure|fig\.|study|trial|step)\s*$/i;
const CALL_WORDS = /\b(?:call(?:s|ed|ing)?|phone|telephone|ring|dial(?:l?ing)?|bel(?:len|t)?|emergenc(?:y|ies)|ambulances?|paramedics?|noodnummer|alarmnummer|hotline)\b/i;
const SAFETY_KEYS = /(?:^|\.)(?:emergency|stop|stop_signs|warning|warnings|warningAction|warning-signs|notice|call)(?:\.|$)/i;
const EMERGENCY_MSG = 'prints 112 as a phone number: the English site says "call your local emergency number" (components: common.emergency.*); only Dutch pages say 112';
const seen112 = new Set<string>();
function find112(file: string, text: string, safety = false, where = '') {
  for (const m of text.matchAll(NUMBER_112)) {
    const i = m.index ?? 0;
    if (NOT_A_PHONE.test(text.slice(i + 3, i + 20)) || NOT_A_PHONE_BEFORE.test(text.slice(Math.max(0, i - 12), i))) continue;
    // whole words only: a window cut through "below" must not leave "bel"
    const from = Math.max(0, i - 60);
    const to = Math.min(text.length, i + 43);
    let near = text.slice(from, to).replace(/\s+/g, ' ');
    if (from > 0 && /\S/.test(text[from - 1])) near = near.replace(/^\S*/, '');
    if (to < text.length && /\S/.test(text[to])) near = near.replace(/\S*$/, '');
    near = near.trim();
    if (!(safety || CALL_WORDS.test(near)) || seen112.has(file + near)) continue;
    seen112.add(file + near);
    const line = text.slice(0, i).split('\n').length;
    err(file, `${where || `line ~${line}:`} ${EMERGENCY_MSG}\n      > ${clip(near)}`);
  }
}
function walkStrings(node: unknown, at: string, out: [string, string][]) {
  if (typeof node === 'string') out.push([at, node]);
  else if (Array.isArray(node)) node.forEach((x, i) => walkStrings(x, `${at}.${i}`, out));
  else if (node && typeof node === 'object') for (const [k, v] of Object.entries(node)) walkStrings(v, at ? `${at}.${k}` : k, out);
}
for (const loc of englishLocales) {
  for (const file of [...walk(`src/content/compounds/${loc}`, ['.mdx', '.md']), ...walk(`src/content/pages/${loc}`, ['.mdx', '.md'])]) {
    const raw = fs.readFileSync(file, 'utf8');
    find112(file, raw);
    // Stop-now content: any 112 at all.
    for (const m of raw.matchAll(/<Callout\s+type=["']stop["'][\s\S]*?<\/Callout>/g)) find112(file, m[0], true, 'stop callout:');
    const glance = readMdx(file).data.glance as { stop_signs?: { text?: string }[] } | undefined;
    (glance?.stop_signs ?? []).forEach((s, i) => find112(file, s.text ?? '', true, `glance.stop_signs[${i + 1}]:`));
  }
  for (const file of walk(`src/i18n/${loc}`, ['.json'])) {
    let data: unknown;
    try {
      data = readJson(file);
    } catch {
      continue; // reported by the JSON parse check
    }
    const strings: [string, string][] = [];
    walkStrings(data, '', strings);
    const ns = path.basename(file, '.json');
    for (const [at, s] of strings) find112(file, s, SAFETY_KEYS.test(`${ns}.${at}`), `${at}:`);
  }
}

// ------------------------------------------------------------------ media (images, heroes, infographics; docs/MEDIA-GUIDE.md)
const mediaStats = validateMedia({
  err,
  warn,
  zodIssues,
  hasSource: (id) => sources.has(id),
  allow,
  localeCodes,
  sourceLocale,
  routeExists: (key) =>
    BUILTIN_ROUTES.includes(key) || [...pageRoutes.values()].some((s) => s.has(key)) || (key.startsWith('compounds/') && compoundData.has(key.slice('compounds/'.length))),
});

// ------------------------------------------------------------------ animated explainers (docs/EXPLAINERS.md)
checkExplainers({ err, warn, hasSource: (id) => sources.has(id), hasPerson: (id) => people.has(id), localeCodes, sourceLocale });

// ------------------------------------------------------------------ report
// Paths use backslashes on Windows; compare with forward slashes so `--only legal/nl` works everywhere.
const filt = (xs: Issue[]) => (only ? xs.filter((x) => x.file.split(String.fromCharCode(92)).join("/").includes(only.split(String.fromCharCode(92)).join("/"))) : xs);
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
  `\nvalidated: ${sources.size} sources, ${compoundData.size} compound data files, ${[...compoundPages.values()].reduce((a, m) => a + m.size, 0)} compound pages, ${pageFiles.length} pages, ${mediaStats.images} images, ${mediaStats.infographics} infographics` +
    `\n${E.length} error(s), ${W.length} warning(s)${only ? ` (filtered by "${only}")` : ''}`,
);
if (E.length || (strict && W.length)) process.exit(1);
