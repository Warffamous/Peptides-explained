/**
 * Organ-by-organ cards (<OrganCards id="…" />): the figure data in src/data/organ-cards/<id>.yaml and
 * the shared organ pictures in src/data/organ-cards/_organs.yaml, validated at import time with the
 * same schemas the standalone validator uses (src/schemas/organ-cards.ts). See CONTENT-GUIDE §9.
 */
import YAML from 'yaml';
import { organCardsSchema, organArtSchema, type OrganCards, type OrganArt, type OcLevel } from '../schemas/organ-cards';
import { visibleSources, type LocaleScope } from './jurisdictions';

const raw = import.meta.glob<string>('/src/data/organ-cards/*.yaml', { eager: true, query: '?raw', import: 'default' });

function parse<T>(path: string, schema: { safeParse: (x: unknown) => { success: boolean; data?: T; error?: { issues: { path: (string | number)[]; message: string }[] } } }): T {
  const r = schema.safeParse(YAML.parse(raw[path] ?? '') ?? {});
  if (!r.success) throw new Error(`[organ-cards] ${path} is invalid:\n` + r.error!.issues.map((i) => `  ${i.path.join('.')}: ${i.message}`).join('\n'));
  return r.data as T;
}

export const ORGAN_ART: OrganArt = parse('/src/data/organ-cards/_organs.yaml', organArtSchema);

export const ORGAN_CARDS = new Map<string, OrganCards>();
for (const path of Object.keys(raw)) {
  const id = path.replace(/^.*\//, '').replace(/\.ya?ml$/, '');
  if (id.startsWith('_')) continue;
  ORGAN_CARDS.set(id, parse(path, organCardsSchema));
}

export function getOrganCards(id: string): OrganCards {
  const x = ORGAN_CARDS.get(id);
  if (!x) throw new Error(`[organ-cards] no data file src/data/organ-cards/${id}.yaml`);
  return x;
}

/** Evidence levels used on a figure, strongest first (drives the line legend). */
const ORDER: OcLevel[] = ['human', 'animal', 'in-vitro', 'hypothesis', 'unknown'];
export function levelsUsed(x: OrganCards): OcLevel[] {
  const used = new Set<OcLevel>([x.cell.level, ...x.cards.flatMap((c) => [c.level, ...(c.note ? [c.note.level] : [])])]);
  return ORDER.filter((l) => used.has(l));
}

/** The "not approved" line's sources in a locale: its own, then those of the countries the locale shows. */
export function statusSources(x: OrganCards, scope: LocaleScope): string[] {
  return visibleSources({ sources: x.status_sources, local_sources: x.status_local_sources }, scope);
}

/** Every source id a figure cites in a locale (cell panel, status line, cards and notes), in order of appearance. */
export function sourcesOf(x: OrganCards, scope: LocaleScope): string[] {
  const ids = [...x.cell.sources, ...statusSources(x, scope), ...x.cards.flatMap((c) => [...c.sources, ...(c.note?.sources ?? [])])];
  return [...new Set(ids)];
}
