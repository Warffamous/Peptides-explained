/**
 * Content validator: schema + cross-reference + editorial-guardrail checks.
 *
 *   npm run validate                 # everything
 *   npm run validate -- --only bpc   # only report problems in files whose path contains "bpc"
 *   npm run validate -- --strict     # treat guardrail warnings as errors
 *
 * Errors fail CI. Warnings are guardrail heuristics that need a human (or agent) to look:
 * they flag phrasing that tends to drift into promotion or dosing advice.
 *
 * Besides schemas and cross-references, it checks (docs/CONTENT-GUIDE.md): commerce words in page
 * titles, headings, section questions, fold and figure titles, diagram captions and labels (errors,
 * §1); seller-judging words such as "reputable", "legit" or "vendor" (warnings, §1, §1a); emergency
 * numbers printed as phone numbers on a locale with printsEmergencyNumbers: false (errors, §1;
 * scripts/lib/emergency.ts); and another locale's framing (the residue check, §1b;
 * scripts/lib/residue.ts, warnings while STRICT_RESIDUE is false).
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
  localeFileSchema,
  type CompoundData,
} from '../src/schemas/index.ts';
import * as V from '../src/schemas/vocab.ts';
import { STRICT_PAGE_JURISDICTIONS, EU_MEMBER_STATES, cardCodes, visibleCodes } from '../src/lib/jurisdictions.ts';
import { ALLOWED_COMPONENTS, COMPOUND_ONLY_COMPONENTS, SOURCED_FIGURES } from '../src/schemas/components.ts';
import { wordCount, fleschReadingEase } from '../src/lib/readability.ts';
import {
  ROOT,
  rel,
  walk,
  readYaml,
  readJson,
  readMdx,
  loadAllowlist,
  hostAllowed,
  loadCommerceTokens,
  commerceRegex,
  stripNonCommerce,
  stripLegalOrders,
} from './lib/load.ts';
import { STRICT_RESIDUE, loadResidueConfig, scanLocaleSources, describeHit, type ResidueHit } from './lib/residue.ts';
import { emergencyNumbers, emergencyRegex, findEmergencyNumbers, SAFETY_KEYS } from './lib/emergency.ts';
import { validateMedia } from './lib/validate-media.ts';
import { checkExplainers } from './lib/explainers.ts';
import { checkProductCheck } from './lib/product-check.ts';
import { checkOrganCards } from './lib/organ-cards.ts';

/**
 * Rows each locale shows (config/locales.json, jurisdictions.full; owner's decision, 23 October 2026).
 * A compound needs a regulatory row for every full jurisdiction of every PUBLISHED locale (today US,
 * UK, CA and AU), and every authorised or discontinued row a locale shows needs a product of that
 * jurisdiction; every jurisdiction a locale lists needs a contacts entry in src/data/jurisdictions.yaml
 * (until it has one, its <JurisdictionCard> is left out of the page).
 * While STRICT_LOCALE_ROWS is false these are warnings: the CA and AU rows (and 9 UK rows), products
 * and contacts come from the refocus research (research/refocus/). Set it to true when that is merged.
 * Preview locales' sets only ever warn; the WADA row is always required (an error, in the schema).
 * The page-level checks (regulatory_notes, page jurisdiction, <JurisdictionCard> of another
 * jurisdiction) follow STRICT_PAGE_JURISDICTIONS in src/lib/jurisdictions.ts, which the content
 * rewrite turns on.
 */
const STRICT_LOCALE_ROWS = true;
/*
 * STRICT_RESIDUE (scripts/lib/residue.ts, shared with npm run check:residue): the locale residue check
 * (config/locale-residue.json; CONTENT-GUIDE §1b) reports Dutch, Belgian, German and EU reader framing
 * on English as WARNINGS while it is false (the content rewrite is in progress); set it to true after
 * the rewrite, and error and frame hits fail the validator (warn hits stay warnings).
 */

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

// ------------------------------------------------------------------ locales (config/locales.json, localeFileSchema)
const localeFile = path.join(ROOT, 'config/locales.json');
const localeResult = localeFileSchema.safeParse(readJson(localeFile));
if (!localeResult.success) {
  // Everything below depends on the locales: report the registry's problems and stop.
  console.log(`\n\x1b[31merror\x1b[0m ${rel(localeFile)}`);
  for (const i of localeResult.error.issues) console.log(`  - ${i.path.join('.') || '(root)'}: ${i.message}`);
  process.exit(1);
}
const { locales, sourceLocale } = localeResult.data;
const localeCodes = locales.map((l) => l.code);
const publishedLocales = locales.filter((l) => l.status === 'published').map((l) => l.code);
const localeByCode = new Map(locales.map((l) => [l.code, l]));
/** Report per locale status: published locales' checks follow `strictFlag`; others only warn. */
const byStatus = (code: string, strictFlag: boolean) => (localeByCode.get(code)?.status === 'published' && strictFlag ? err : warn);
/** Jurisdictions with a contacts entry (src/data/jurisdictions.yaml, read raw here; its schema is checked further down). */
const contactsRaw = readYaml(path.join(ROOT, 'src/data/jurisdictions.yaml'));
const contactCodes = new Set(Array.isArray(contactsRaw) ? contactsRaw.map((c: { code?: string }) => c?.code) : []);
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
  for (const reg of c.regulatory) {
    reg.sources.forEach((s) => requireSource(file, s, `regulatory ${reg.jurisdiction}`));
    reg.schedule?.sources.forEach((s) => requireSource(file, s, `regulatory ${reg.jurisdiction} schedule`));
  }
  // authorised-nationally: every country named in the "approved?" tile is a real region code with sources.
  const regionNames = new Intl.DisplayNames(['en'], { type: 'region', fallback: 'none' });
  for (const n of c.national_authorisations) {
    if (!regionNames.of(n.country)) err(file, `national_authorisations: "${n.country}" is not an ISO 3166-1 region code`);
    n.sources.forEach((s) => requireSource(file, s, `national_authorisations ${n.country}`));
  }
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

// ------------------------------------------------------------------ rows each locale shows (STRICT_LOCALE_ROWS)
// The full jurisdictions of the built locales, in locale order, with the locales that show each.
const rowLocales = new Map<V.Jurisdiction, string[]>();
for (const l of locales.filter((x) => x.status !== 'planned')) {
  for (const j of l.jurisdictions.full) rowLocales.set(j, [...(rowLocales.get(j) ?? []), l.code]);
}
const shownByPublished = (j: V.Jurisdiction) => (rowLocales.get(j) ?? []).some((l) => publishedLocales.includes(l));
// An EU (central) authorisation is the product for its member states' rows too.
const productCovers = (product: V.Jurisdiction, row: V.Jurisdiction) => product === row || (product === 'EU' && EU_MEMBER_STATES.includes(row));
for (const c of compoundData.values()) {
  const file = path.join(ROOT, `src/data/compounds/${c.slug}.yaml`);
  const have = new Set(c.regulatory.map((r) => r.jurisdiction));
  const missing = [...rowLocales.keys()].filter((j) => !have.has(j));
  const missingPublished = missing.filter(shownByPublished);
  const missingPreview = missing.filter((j) => !shownByPublished(j));
  if (missingPublished.length) {
    (STRICT_LOCALE_ROWS ? err : warn)(file, `no regulatory row for ${missingPublished.join(', ')} (shown on ${[...new Set(missingPublished.flatMap((j) => rowLocales.get(j)!))].join(', ')}): until it is added, the page treats it as unknown and leaves it out of the approval answer`);
  }
  if (missingPreview.length) {
    warn(file, `no regulatory row for ${missingPreview.join(', ')} (shown on preview locale ${[...new Set(missingPreview.flatMap((j) => rowLocales.get(j)!))].join(', ')})`);
  }
  for (const r of c.regulatory) {
    if ((r.status !== 'authorised' && r.status !== 'discontinued') || !rowLocales.has(r.jurisdiction)) continue;
    if (c.authorised_products.some((p) => productCovers(p.jurisdiction, r.jurisdiction))) continue;
    (shownByPublished(r.jurisdiction) && STRICT_LOCALE_ROWS ? err : warn)(
      file,
      `the ${r.jurisdiction} row is ${r.status} and shown on ${rowLocales.get(r.jurisdiction)!.join(', ')}, but authorised_products has no ${r.jurisdiction} product (with its official label)`,
    );
  }
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

/**
 * Phrases that tend to slip into promotion or dosing advice. Warnings, reviewed by hand. A third
 * element `true` skips the phrase where it is quoted in the prose ("the seller uses it himself"):
 * the lab-report ladder (CONTENT-GUIDE §1a) quotes these claims to say they are not evidence. A
 * quoted attribute value (title="…") is never skipped.
 */
const GUARDRAIL_PATTERNS: [RegExp, string, boolean?][] = [
  [/\b(?:is|are|be|considered|generally|perfectly|completely|totally)\s+safe\b/i, '"safe" — only use for authorised medicines within their label, and say so'],
  [/\bproven\b/i, '"proven" — say what was shown, in whom, in which design'],
  [/\bclinically (?:validated|proven|tested)\b/i, '"clinically validated/proven" is banned phrasing'],
  [/\b(?:recommended|typical|standard|common|starting|maintenance|effective)\s+dos(?:e|age|ing)\b/i, 'dose recommendation phrasing — report studied doses descriptively, never as guidance'],
  [/\b(?:protocol|stack|stacking|cycle|cycling|loading phase|titrate yourself)\b/i, 'protocol/stack/cycle vocabulary — allowed only when explicitly explaining why the site does not provide them'],
  [/\b(?:mcg|µg|mg|iu)\s*(?:\/|per)\s*(?:day|week|kg|injection)\b/i, 'dose-per-time or dose-per-kg figure — must be inside <Q> and framed as study design (species, study)'],
  [/\b(?:best|most effective|superior|strongest|safest)\b/i, 'superlative — no superlative comparisons between compounds'],
  [/\b(?:miracle|breakthrough|game[- ]changer|revolutionary|wonder drug)\b/i, 'hype vocabulary'],
  [/\b(?:i|we) (?:recommend|suggest) (?:taking|using|trying)\b/i, 'recommends use'],
  ...SELLER_PATTERNS(),
];
/**
 * Seller-judging words (CONTENT-GUIDE §1 and §1a, the lab-report ladder): no seller or lab is ever
 * vouched for, ranked or found for the reader. Checked in the MDX body (with the patterns above) and,
 * on their own, in the frontmatter text and the locale's UI strings, glossary and captions.
 */
function SELLER_PATTERNS(): [RegExp, string, boolean?][] {
  return [
    [/\b(?:where to buy|reliable (?:sources?|sellers?|suppliers?|vendors?|labs?))\b/i, 'sourcing language — never'],
    [/\breputable\b/i, '"reputable" — the site never judges, vouches for or ranks a seller or a lab (§1a)', true],
    [/\btrusted (?:labs?|laborator(?:y|ies)|sources?|sellers?|vendors?|suppliers?)\b/i, '"trusted lab/source/seller" — the site never vouches for a seller or a lab (§1a)', true],
    [/\blegit\b/i, '"legit" — the site never judges a seller (§1a)', true],
    [/\bthird[- ]party[- ]tested\b/i, '"third-party tested" is not evidence without a report you can read and check (lab-report ladder, §1a)', true],
    [/\buses it (?:himself|herself|themselves|themself)\b/i, '"the seller uses it himself" is not evidence (lab-report ladder, §1a)', true],
    [/\bvendors?\b/i, '"vendor" — the site recommends no seller; where the role must be named, write "seller" and give no help choosing one (§1)'],
  ];
}
/** Seller-judging words in one text outside the MDX body (frontmatter value, UI string): warnings. */
function checkSellerWords(file: string, where: string, text: string) {
  for (const [re, why, quotedOk] of SELLER_PATTERNS()) {
    if (re.test(quotedOk ? unquoted(text) : text)) warn(file, `${where}: ${why}\n      > ${clip(text)}`);
  }
}
/** Frontmatter keys that hold ids, codes, dates or URLs, never words for the reader. */
const NON_TEXT_KEYS = new Set(['sources', 'source', 'slug', 'icon', 'id', 'related', 'further_reading', 'reviewed_by', 'signed_by', 'section', 'template', 'reading_level', 'jurisdiction', 'url', 'last_reviewed', 'published']);
function checkFrontmatterSellerWords(file: string, data: unknown, at = '') {
  if (typeof data === 'string') checkSellerWords(file, at, data);
  else if (Array.isArray(data)) data.forEach((x, i) => checkFrontmatterSellerWords(file, x, `${at}[${i + 1}]`));
  else if (data && typeof data === 'object') {
    for (const [k, v] of Object.entries(data)) if (!NON_TEXT_KEYS.has(k)) checkFrontmatterSellerWords(file, v, at ? `${at}.${k}` : k);
  }
}
/**
 * Prose with its quoted phrases removed, in double or single quotes, straight or typographic (not
 * attribute values: =\"…\" stays; an apostrophe inside a word, as in "seller's", never opens a quote).
 */
const unquoted = (line: string) => line.replace(/(?<!=)"[^"\n]*"|“[^”\n]*”|‘[^’\n]*’|(?<![=\w])'[^'\n]*'(?!\w)/g, ' ');

/** The page title and its menu label (frontmatter): the h1 and the navigation text. */
const titleLabels = (data: { title?: string; nav_title?: string }): [string, string][] =>
  ([['title', data.title], ['nav_title', data.nav_title]] as [string, string | undefined][]).filter((x): x is [string, string] => !!x[1]);

function checkBody(file: string, body: string, locale: string, kind: 'page' | 'compound', frontmatterLabels: [string, string][] = []) {
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
  // Contact cards: only the locale's own jurisdictions (full + notes). <JurisdictionCard> leaves any
  // other card out of the page until STRICT_PAGE_JURISDICTIONS, then fails the build. A card of the
  // locale's own whose jurisdiction has no contacts entry yet is left out too (STRICT_LOCALE_ROWS).
  const own = cardCodes(localeByCode.get(locale)!, 'all') as string[];
  const foreign: string[] = [];
  const noEntry: string[] = [];
  for (const m of body.matchAll(/<JurisdictionCard\s+code=["']([^"']+)["']/g)) {
    if (!(V.JURISDICTIONS as readonly string[]).includes(m[1])) err(file, `<JurisdictionCard code="${m[1]}">: not a jurisdiction (${V.JURISDICTIONS.join(', ')})`);
    else if (!own.includes(m[1])) foreign.push(m[1]);
    else if (!contactCodes.has(m[1])) noEntry.push(m[1]);
  }
  if (foreign.length) {
    byStatus(locale, STRICT_PAGE_JURISDICTIONS)(file, `<JurisdictionCard> for ${[...new Set(foreign)].join(', ')}: not one of the ${locale} locale's jurisdictions (${own.join(', ')}), so the card is left out of the page; the content rewrite removes it`);
  }
  if (noEntry.length) {
    byStatus(locale, STRICT_LOCALE_ROWS)(file, `<JurisdictionCard> for ${[...new Set(noEntry)].join(', ')}: no entry in src/data/jurisdictions.yaml yet, so the card is left out of the page`);
  }
  for (const tag of openTags(body, 'JurisdictionCards')) {
    const which = attr(tag, 'which');
    if (which && !['full', 'notes', 'all'].includes(which)) err(file, `<JurisdictionCards which="${which}">: use full, notes or all`);
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
    if (commerceRe.test(stripLegalOrders(l.text)) || commerceRe.test(l.href)) err(file, `commerce token in link: [${l.text}](${l.href})`);
    if (urlPatternRes.some((re) => re.test(l.href))) err(file, `link matches affiliate/shortener pattern: ${l.href}`);
  }
  // guardrails (skip code spans and <Q>…</Q> contents)
  const prose = body.replace(/<Q>[^<]*<\/Q>/g, '').replace(/`[^`]*`/g, '');
  const lines = prose.split('\n');
  lines.forEach((line, i) => {
    for (const [re, why, quotedOk] of GUARDRAIL_PATTERNS) {
      if (re.test(quotedOk ? unquoted(line) : line)) warn(file, `line ~${i + 1}: ${why}\n      > ${line.trim().slice(0, 160)}`);
    }
  });
  // Commerce words in headings, section questions, fold titles, figure titles and labels (the lab-report
  // ladder rules, CONTENT-GUIDE §1a and §10): what a reader scans must never read as an offer.
  const labelled: [string, string][] = [...frontmatterLabels];
  for (const m of body.matchAll(/^#{2,6}\s+(.+)$/gm)) labelled.push(['heading', m[1]]);
  const labelProps: [string, string][] = [['Lead', 'question'], ['InDetail', 'title'], ['FaqItem', 'q'], ['Callout', 'title'], ['KeyNumber', 'label'], ['Diagram', 'caption'], ...FIGURE_TITLE_COMPONENTS.map((n) => [n, 'title'] as [string, string])];
  for (const [name, prop] of labelProps) {
    for (const tag of openTags(body, name)) {
      const v = attr(tag, prop);
      if (v) labelled.push([`<${name} ${prop}>`, v]);
    }
  }
  for (const [where, text] of labelled) {
    const m = commerceRe.exec(stripNonCommerce(text));
    if (m) err(file, `${where} contains the commerce word "${m[0]}": headings, questions, titles and labels never use buy, order, shop, vendor, supplier, price, deal, sale … (CONTENT-GUIDE §1a, §10)\n      > ${clip(text)}`);
  }
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
  // Sourced overrides of the derived "tested" and "sport" answers (CONTENT-GUIDE §5.2): plain words,
  // registered sources, and no new claim: every source is one the page already cites for the same fact.
  const pageCited = new Set<string>();
  for (const m of body.matchAll(CITE_RE)) m[1].split(',').map((s) => s.trim()).forEach((s) => pageCited.add(s));
  cd.studies.forEach((s) => pageCited.add(s.source));
  cd.regulatory.forEach((reg) => reg.sources.forEach((s) => pageCited.add(s)));
  cd.national_authorisations.forEach((n) => n.sources.forEach((s) => pageCited.add(s)));
  cd.authorised_products.forEach((p) => pageCited.add(p.label_source));
  if (cd.sequence) pageCited.add(cd.sequence.source);
  for (const key of ['tested', 'sport'] as const) {
    const o = r.data.glance[key];
    if (!o) continue;
    // short (at most 4 words, schema) is an answer like "Some" or "Unclear": reading ease means nothing there.
    checkPlain(file, `glance.${key}.text`, o.text, locale, names);
    o.sources.forEach((id) => requireSource(file, id, `glance.${key}`));
    const uncited = o.sources.filter((id) => sources.has(id) && !pageCited.has(id));
    if (uncited.length) err(file, `glance.${key} cites ${uncited.join(', ')}, which the page does not cite anywhere else: the tile condenses this page, so cite it where the page makes the same claim`);
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
  if (cd.category === 'authorised' && !body.includes('<AuthorisedProducts')) {
    err(file, 'authorised compounds must include <AuthorisedProducts /> (prescription route + official label links)');
  }
  // localised study text covers the data
  for (const st of cd.studies) if (!r.data.studies[st.id]) err(file, `studies: missing localised finding/limitation for study "${st.id}"`);
  for (const id of Object.keys(r.data.studies)) if (!cd.studies.find((s) => s.id === id)) err(file, `studies: "${id}" is not a study in the data file`);
  // Notes for rows this locale does not show (its full jurisdictions and WADA) are never rendered.
  const shown = visibleCodes(localeByCode.get(locale)!);
  const unshown = Object.keys(r.data.regulatory_notes).filter((j) => !(shown as string[]).includes(j));
  if (unshown.length) {
    byStatus(locale, STRICT_PAGE_JURISDICTIONS)(file, `regulatory_notes for ${unshown.join(', ')}: ${locale} shows only ${shown.join(', ')} (config/locales.json), so these notes are not rendered; the content rewrite removes them`);
  }
  for (const p of cd.authorised_products) if (!r.data.indications[p.id]) err(file, `indications: missing localised indication for product "${p.id}"`);
  if (cd.status === 'complete' && r.data.mechanism.length < 3) err(file, 'complete pages need a mechanism chain of at least 3 steps');
  checkBody(file, body, locale, 'compound', titleLabels(r.data));
  checkFrontmatterSellerWords(file, data);
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
  const pageOwn = cardCodes(localeByCode.get(locale)!, 'all') as string[];
  if (r.data.jurisdiction && !pageOwn.includes(r.data.jurisdiction)) {
    byStatus(locale, STRICT_PAGE_JURISDICTIONS)(file, `jurisdiction: ${r.data.jurisdiction} is not one of the ${locale} locale's jurisdictions (${pageOwn.join(', ')}); the content rewrite removes or rewrites this page`);
  }
  requirePerson(file, r.data.reviewed_by, 'reviewed_by');
  if (r.data.opinion) requirePerson(file, r.data.opinion.signed_by, 'opinion.signed_by');
  r.data.further_reading.forEach((s) => requireSource(file, s, 'further_reading'));
  if (locale !== sourceLocale && r.data.translation.method === 'source') {
    warn(file, `translation.method is "source" in a non-source locale — set translated/adapted/native and review status`);
  }
  checkBody(file, body, locale, 'page', titleLabels(r.data));
  checkFrontmatterSellerWords(file, data);
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
const tracker = checkDataFile('src/data/tracker.yaml', trackerFileSchema as never) as { id: string; sources: string[]; local_sources: Record<string, string[]> }[] | null;
tracker?.forEach((e) => [...e.sources, ...Object.values(e.local_sources).flat()].forEach((s) => requireSource(path.join(ROOT, 'src/data/tracker.yaml'), s, `tracker ${e.id}`)));
const corrections = checkDataFile('src/data/corrections.yaml', correctionsFileSchema as never) as { id: string }[] | null;
checkDataFile('src/data/feeds.yaml', feedsFileSchema as never);
checkDataFile('src/data/news.json', newsFileSchema as never);
const jurisdictionsFile = path.join(ROOT, 'src/data/jurisdictions.yaml');
const contacts = checkDataFile('src/data/jurisdictions.yaml', jurisdictionsFileSchema as never) as { code: string }[] | null;
if (contacts) {
  // Every jurisdiction a locale lists (full and notes) has a contacts entry (STRICT_LOCALE_ROWS: the
  // CA, AU, IE and NZ entries come from the refocus research).
  const codes = contacts.map((c) => c.code);
  if (new Set(codes).size !== codes.length) err(jurisdictionsFile, 'a jurisdiction has two entries');
  const listedBy = new Map<string, string[]>();
  for (const l of locales) for (const j of cardCodes(l, 'all')) if (!codes.includes(j)) listedBy.set(j, [...(listedBy.get(j) ?? []), l.code]);
  for (const [j, locs] of listedBy) {
    (locs.some((l) => publishedLocales.includes(l)) && STRICT_LOCALE_ROWS ? err : warn)(jurisdictionsFile, `no entry for ${j}, which locale ${locs.join(', ')} lists in config/locales.json (contacts card, help services)`);
  }
}
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

// ------------------------------------------------------------------ emergency numbers (CONTENT-GUIDE §1)
// A locale with printsEmergencyNumbers: false never prints an emergency number (112, and the numbers of
// its own jurisdictions: on English 911, 999, 000, 112, 111, "triple zero"); scripts/lib/emergency.ts
// says what counts as a phone number and what does not ("1,000", "111 participants", "NHS 111").
const emergencyMsg = (n: string, loc: string) =>
  `prints the emergency number "${n}": the ${loc} site never prints one; write "call your local emergency number" (components: common.emergency.*), and name and link help services instead of giving their numbers (CONTENT-GUIDE §1)`;
const seenEmergency = new Set<string>();
function findEmergency(file: string, text: string, re: RegExp, loc: string, safety = false, where = '') {
  for (const h of findEmergencyNumbers(text, re, safety)) {
    if (seenEmergency.has(file + h.number + h.context)) continue;
    seenEmergency.add(file + h.number + h.context);
    const line = text.slice(0, h.index).split('\n').length;
    err(file, `${where || `line ~${line}:`} ${emergencyMsg(h.number, loc)}\n      > ${clip(h.context)}`);
  }
}
function walkStrings(node: unknown, at: string, out: [string, string][]) {
  if (typeof node === 'string') out.push([at, node]);
  else if (Array.isArray(node)) node.forEach((x, i) => walkStrings(x, `${at}.${i}`, out));
  else if (node && typeof node === 'object') for (const [k, v] of Object.entries(node)) walkStrings(v, at ? `${at}.${k}` : k, out);
}
for (const l of locales.filter((x) => !x.printsEmergencyNumbers)) {
  const loc = l.code;
  const re = emergencyRegex(emergencyNumbers(l, contactsRaw));
  for (const file of [...walk(`src/content/compounds/${loc}`, ['.mdx', '.md']), ...walk(`src/content/pages/${loc}`, ['.mdx', '.md'])]) {
    const raw = fs.readFileSync(file, 'utf8');
    findEmergency(file, raw, re, loc);
    // Stop-now content: any of the numbers at all.
    for (const m of raw.matchAll(/<Callout\s+type=["']stop["'][\s\S]*?<\/Callout>/g)) findEmergency(file, m[0], re, loc, true, 'stop callout:');
    const glance = readMdx(file).data.glance as { stop_signs?: { text?: string }[] } | undefined;
    (glance?.stop_signs ?? []).forEach((s, i) => findEmergency(file, s.text ?? '', re, loc, true, `glance.stop_signs[${i + 1}]:`));
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
    for (const [at, s] of strings) findEmergency(file, s, re, loc, SAFETY_KEYS.test(`${ns}.${at}`), `${at}:`);
  }
}
// Seller-judging words in the English UI strings, glossary and captions (the patterns are English).
for (const file of walk(`src/i18n/${sourceLocale}`, ['.json'])) {
  let data: unknown;
  try {
    data = readJson(file);
  } catch {
    continue;
  }
  const strings: [string, string][] = [];
  walkStrings(data, '', strings);
  for (const [at, s] of strings) if (!/(?:^|\.)\$/.test(at)) checkSellerWords(file, at, s);
}

// ------------------------------------------------------------------ locale residue (config/locale-residue.json; CONTENT-GUIDE §1b)
// Dutch, Belgian, German and EU reader framing on English (scripts/lib/residue.ts). One issue per file
// and kind, listing every hit with its line, so `--only <file>` shows what to change.
const residueConfigs = loadResidueConfig();
for (const l of locales) {
  const cfg = residueConfigs.get(l.code);
  if (!cfg) continue;
  const byFile = new Map<string, ResidueHit[]>();
  for (const h of scanLocaleSources(l, cfg)) byFile.set(h.file, [...(byFile.get(h.file) ?? []), h]);
  for (const [f, list] of byFile) {
    const file = path.join(ROOT, f);
    const framing = list.filter((h) => h.level !== 'warn');
    const names = list.filter((h) => h.level === 'warn');
    const lines = (xs: ResidueHit[]) => xs.map((h) => `\n      - ${describeHit(h).replace(/\n\s*/, '\n        ')}`).join('');
    if (framing.length) {
      (STRICT_RESIDUE ? err : warn)(
        file,
        `residue (${l.code}): ${framing.length} hit(s) of another locale's framing (Dutch, Belgian, German or EU reader framing); remove or rewrite for this locale's readers, or for EMA evidence and history mark the line with {/* residue-ok: … */} (frame hits only)${STRICT_RESIDUE ? '' : ' [a warning while STRICT_RESIDUE is false]'}:${lines(framing)}`,
      );
    }
    if (names.length) {
      warn(file, `residue (${l.code}): ${names.length} European name(s) (EU, EMA, EPAR, CHMP, Europe): keep only as evidence or history, with {/* residue-ok: … */} on the line before:${lines(names)}`);
    }
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

// ------------------------------------------------------------------ "check before you use it" (<ProductCheck />, CONTENT-GUIDE §1a, §9)
checkProductCheck({
  err,
  warn,
  hasSource: (id) => sources.has(id),
  routeExists: (key) => BUILTIN_ROUTES.includes(key) || [...pageRoutes.values()].some((s) => s.has(key)) || (key.startsWith('compounds/') && compoundData.has(key.slice('compounds/'.length))),
  checkPlain,
  localeCodes,
  sourceLocale,
});

// ------------------------------------------------------------------ organ-by-organ cards (<OrganCards />, CONTENT-GUIDE §9)
checkOrganCards({ err, warn, hasSource: (id) => sources.has(id), hasPerson: (id) => people.has(id), checkPlain, localeCodes, sourceLocale });

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
