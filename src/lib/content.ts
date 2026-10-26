/**
 * Content access: joins localised MDX with locale-independent data, and computes the
 * translation matrix used for hreflang, the language switcher and preview fallbacks.
 */
import { getCollection, render, type CollectionEntry } from 'astro:content';
import { BUILT_LOCALES, PUBLISHED_LOCALES, SOURCE_LOCALE, getLocale } from './config';
import { isVisible, visibleProducts, visibleRows, visibleSources } from './jurisdictions';
import { TIMELINE, TRACKER } from './data';
import { EXPLAINERS } from './explainers';
import { ORGAN_ART, getOrganCards, sourcesOf } from './organ-cards';
import { MEDIA, heroFor, getInfographic } from './media';
import type { CompoundData, CompoundPage } from '../schemas';

export type PageEntry = CollectionEntry<'pages'>;
export type CompoundEntry = CollectionEntry<'compounds'>;

export type CompoundContext = {
  slug: string;
  locale: string;
  /** The locale of the page's text (the source locale on a preview fallback): it picks the jurisdictions shown. */
  contentLocale: string;
  data: CompoundData;
  page: CompoundPage;
  /** source id -> number in this page's source list */
  citeIndex: Map<string, number>;
};

/** "en/safety/sterile-technique" -> { locale: "en", key: "safety/sterile-technique" } ; index -> section key */
export function splitPageId(id: string): { locale: string; key: string } {
  const [locale, ...rest] = id.split('/');
  const key = rest.join('/').replace(/(^|\/)index$/, '');
  return { locale, key };
}

let _pages: PageEntry[] | null = null;
let _compounds: CompoundEntry[] | null = null;
let _data: Map<string, CompoundData> | null = null;

export async function allPages(): Promise<PageEntry[]> {
  return (_pages ??= await getCollection('pages'));
}
export async function allCompoundPages(): Promise<CompoundEntry[]> {
  return (_compounds ??= await getCollection('compounds'));
}
export async function compoundDataMap(): Promise<Map<string, CompoundData>> {
  if (!_data) {
    const entries = await getCollection('compoundData');
    _data = new Map(entries.map((e) => [e.data.slug, e.data]));
  }
  return _data;
}

export async function getCompoundData(slug: string): Promise<CompoundData> {
  const d = (await compoundDataMap()).get(slug);
  if (!d) throw new Error(`no compound data for ${slug}`);
  return d;
}

/** Page for (locale, key), with fallback to the source locale for preview locales. */
export async function resolvePage(locale: string, key: string): Promise<{ entry: PageEntry; fallback: boolean } | null> {
  const pages = await allPages();
  const own = pages.find((p) => { const s = splitPageId(p.id); return s.locale === locale && s.key === key; });
  if (own) return { entry: own, fallback: false };
  if (getLocale(locale).status === 'preview') {
    const src = pages.find((p) => { const s = splitPageId(p.id); return s.locale === SOURCE_LOCALE && s.key === key; });
    if (src) return { entry: src, fallback: true };
  }
  return null;
}

export async function resolveCompound(locale: string, slug: string): Promise<{ entry: CompoundEntry; fallback: boolean } | null> {
  const all = await allCompoundPages();
  const own = all.find((c) => c.id === `${locale}/${slug}`);
  if (own) return { entry: own, fallback: false };
  if (getLocale(locale).status === 'preview') {
    const src = all.find((c) => c.id === `${SOURCE_LOCALE}/${slug}`);
    if (src) return { entry: src, fallback: true };
  }
  return null;
}

/** Route keys that exist (genuinely translated, not fallback) per locale. */
export async function translationMatrix(): Promise<Map<string, Set<string>>> {
  const m = new Map<string, Set<string>>();
  const add = (key: string, loc: string) => {
    if (!m.has(key)) m.set(key, new Set());
    m.get(key)!.add(loc);
  };
  for (const p of await allPages()) {
    const { locale, key } = splitPageId(p.id);
    add(key, locale);
  }
  for (const c of await allCompoundPages()) {
    const [locale, slug] = c.id.split('/');
    add(`compounds/${slug}`, locale);
  }
  // Built-in generated routes exist wherever the locale is built.
  for (const key of BUILTIN_ROUTES) for (const l of BUILT_LOCALES) add(key, l.code);
  return m;
}

/** Generated routes that are not MDX pages. The landing ("") comes from pages/<locale>/index.mdx. */
export const BUILTIN_ROUTES = ['compounds', 'glossary', 'sources', 'news', 'search'];

/** Locales to list as hreflang alternates for a route: published locales that truly have it. */
export async function alternatesFor(key: string): Promise<string[]> {
  const m = await translationMatrix();
  const have = m.get(key) ?? new Set();
  return PUBLISHED_LOCALES.map((l) => l.code).filter((c) => have.has(c));
}

/** Pages in a section for a locale (with preview fallback), sorted by order. */
export async function sectionPages(locale: string, section: string): Promise<{ key: string; entry: PageEntry; fallback: boolean }[]> {
  const pages = await allPages();
  const keys = new Set<string>();
  for (const p of pages) {
    const s = splitPageId(p.id);
    if (p.data.section === section && (s.locale === locale || s.locale === SOURCE_LOCALE)) keys.add(s.key);
  }
  const out: { key: string; entry: PageEntry; fallback: boolean }[] = [];
  for (const key of keys) {
    const r = await resolvePage(locale, key);
    if (r && r.entry.data.template !== 'index') out.push({ key, ...r });
  }
  return out.sort((a, b) => a.entry.data.order - b.entry.data.order || a.key.localeCompare(b.key));
}

// ---------------------------------------------------------------- what a locale shows

const ID_ATTR = (name: string) => new RegExp(`<${name}\\b[^>]*?\\bid=["']([^"']+)["']`, 'g');
const idsOf = (body: string, name: string) => [...body.matchAll(ID_ATTR(name))].map((m) => m[1]);

/**
 * A compound page's source list: the inline citations first (in order of appearance), then the
 * sources behind what the page renders from the data, as the content locale shows it: studies, the
 * locale's regulatory rows (and their schedules), national authorisations, sequence, SMILES, the
 * locale's product labels, and the sourced At a glance overrides, stop strip and fact sheet (all
 * rendered outside the MDX), then the organ-card figures (their marks are numbered from this list).
 */
export function compoundCitations(data: CompoundData, page: CompoundPage, inline: string[], body: string, contentLocale: string): string[] {
  const scope = getLocale(contentLocale);
  const out: string[] = [...inline];
  const add = (id?: string) => { if (id && !out.includes(id)) out.push(id); };
  data.studies.forEach((s) => add(s.source));
  visibleRows(data, scope).forEach((r) => { r.sources.forEach(add); r.schedule?.sources.forEach(add); });
  data.national_authorisations.forEach((n) => n.sources.forEach(add));
  add(data.sequence?.source);
  add(data.molecular.smiles_source);
  visibleProducts(data, scope).forEach((p) => add(p.label_source));
  page.glance.tested?.sources.forEach(add);
  page.glance.sport?.sources.forEach(add);
  page.glance.stop_signs?.forEach((s) => s.sources.forEach(add));
  page.glance.facts.forEach((f) => f.sources.forEach(add));
  idsOf(body, 'OrganCards').forEach((id) => sourcesOf(getOrganCards(id), scope).forEach(add));
  return out;
}

/** The pages and compound pages a locale builds, each with the locale its text is in. */
async function builtEntries(locale: string) {
  const preview = getLocale(locale).status === 'preview';
  const keys = new Set<string>();
  for (const p of await allPages()) {
    const s = splitPageId(p.id);
    if (s.locale === locale || (preview && s.locale === SOURCE_LOCALE)) keys.add(s.key);
  }
  const pages: { key: string; entry: PageEntry; contentLocale: string }[] = [];
  for (const key of keys) {
    const r = await resolvePage(locale, key);
    if (r) pages.push({ key, entry: r.entry, contentLocale: r.fallback ? SOURCE_LOCALE : locale });
  }
  const compounds: { slug: string; data: CompoundData; entry: CompoundEntry; contentLocale: string }[] = [];
  for (const [slug, data] of await compoundDataMap()) {
    const r = await resolveCompound(locale, slug);
    if (r) compounds.push({ slug, data, entry: r.entry, contentLocale: r.fallback ? SOURCE_LOCALE : locale });
  }
  return { pages, compounds };
}

/** Sources that blocks built from data list or link to (not numbered by remark-citations): timeline, tracker, plates. */
function blockSources(body: string, contentLocale: string): string[] {
  const scope = getLocale(contentLocale);
  const out: string[] = [];
  if (/<Timeline\b/.test(body)) TIMELINE.filter((e) => isVisible(e.jurisdictions, scope)).forEach((e) => out.push(...e.sources));
  if (/<ChangeTracker\b/.test(body)) TRACKER.filter((it) => isVisible(it.jurisdiction, scope)).forEach((it) => out.push(...visibleSources(it, scope)));
  // A plate's "Based on" links to /sources/#source-<id> when the page itself does not cite the source.
  idsOf(body, 'Infographic').forEach((id) => out.push(...getInfographic(id).sources));
  return out;
}

const usedSources = new Map<string, Promise<Set<string>>>();
const usedMedia = new Map<string, Promise<Set<string>>>();

/**
 * Every source a locale's built pages use (for the sources index): the citations remark-citations
 * collects from each page body (<Cite>, figure source="…", explainers, the product check), further
 * reading, a compound's data-driven sources as compoundCitations lists them, the visible timeline
 * and tracker items, infographic plates, and the caption sources of the images the locale shows.
 */
export function usedSourceIds(locale: string): Promise<Set<string>> {
  if (!usedSources.has(locale)) {
    usedSources.set(locale, (async () => {
      const ids = new Set<string>();
      const { pages, compounds } = await builtEntries(locale);
      for (const { entry, contentLocale } of pages) {
        const { remarkPluginFrontmatter: rpf } = await render(entry);
        [...(rpf.citations ?? []), ...entry.data.further_reading, ...blockSources(entry.body ?? '', contentLocale)].forEach((id) => ids.add(id));
      }
      for (const { data, entry, contentLocale } of compounds) {
        const { remarkPluginFrontmatter: rpf } = await render(entry);
        const body = entry.body ?? '';
        [...compoundCitations(data, entry.data, rpf.citations ?? [], body, contentLocale), ...blockSources(body, contentLocale)].forEach((id) => ids.add(id));
      }
      // caption sources as this locale shows them (a country's own sources only where it is shown)
      for (const id of await usedMediaIds(locale)) {
        const m = MEDIA.get(id);
        if (m) visibleSources(m, getLocale(locale)).forEach((s) => ids.add(s));
      }
      return ids;
    })());
  }
  return usedSources.get(locale)!;
}

/**
 * Every registered image a locale's built pages show (for the image credits): the heroes of its
 * routes (per locale, src/data/heroes.yaml), <Photo>, the art of <Infographic> plates and
 * <Explainer> backdrops, and the organ pictures of <OrganCards>, each with its dark-scheme version.
 */
export function usedMediaIds(locale: string): Promise<Set<string>> {
  if (!usedMedia.has(locale)) {
    usedMedia.set(locale, (async () => {
      const ids = new Set<string>();
      const add = (id?: string) => { if (id) ids.add(id); };
      const { pages, compounds } = await builtEntries(locale);
      const routes = [...pages.map((p) => p.key), ...compounds.map((c) => `compounds/${c.slug}`), ...BUILTIN_ROUTES];
      for (const key of routes) add(heroFor(key, locale)?.id);
      for (const body of [...pages, ...compounds].map((e) => e.entry.body ?? '')) {
        idsOf(body, 'Photo').forEach(add);
        idsOf(body, 'Infographic').forEach((id) => { const g = getInfographic(id); add(g.art); add(g.art_dark); });
        idsOf(body, 'Explainer').forEach((id) => { add(EXPLAINERS[id]?.art); add(EXPLAINERS[id]?.art_dark); });
        for (const id of idsOf(body, 'OrganCards')) {
          for (const card of getOrganCards(id).cards) {
            const art = ORGAN_ART.art[ORGAN_ART.organs[card.organ]?.art ?? ''];
            add(art?.light);
            add(art?.dark);
          }
        }
      }
      return ids;
    })());
  }
  return usedMedia.get(locale)!;
}

/** Primary navigation: [section, route key of its landing]. Order is the reading order of the site. */
export const PRIMARY_NAV = [
  { id: 'start', key: 'start-here' },
  { id: 'basics', key: 'basics' },
  { id: 'compounds', key: 'compounds' },
  { id: 'evidence', key: 'evidence' },
  { id: 'safety', key: 'safety' },
  { id: 'legal', key: 'legal' },
  { id: 'history', key: 'history' },
  { id: 'news', key: 'news' },
] as const;

/** Which primary-nav item a route belongs to (for aria-current). */
export function navSectionFor(key: string): string | null {
  if (key === 'start-here') return 'start';
  const first = key.split('/')[0];
  if (['legal-routes', 'talking-to-your-doctor'].includes(first)) return 'safety';
  const hit = PRIMARY_NAV.find((n) => n.key === first);
  return hit ? hit.id : null;
}
