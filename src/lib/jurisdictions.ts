/**
 * Which jurisdictions a locale shows, and what "is it an approved medicine?" means there. Pure
 * functions over the data (no Astro, no UI strings), shared by the components and the validator
 * (scripts/validate-content.ts), so a page and its checks can never disagree. The words for these
 * answers are in src/lib/approval.ts.
 *
 * Owner's decision, 23 October 2026: each locale covers some jurisdictions in full and has short
 * notes for a few more (config/locales.json, jurisdictions.full and .notes); WADA is shown in every
 * locale. Rows, products, timeline events, tracker items and feeds of any other jurisdiction stay in
 * src/data/ for the locale that covers them, and are never shown in this one.
 *
 * A missing row for one of the locale's own jurisdictions is UNKNOWN, never "not approved": it is
 * left out of every approval sentence until the row has been researched.
 */
import type { CompoundData } from '../schemas';
import type { Jurisdiction } from '../schemas/vocab';

/** What a locale covers: the `jurisdictions` entry of config/locales.json (a locale object will do). */
export type LocaleScope = { jurisdictions: { full: readonly Jurisdiction[]; notes: readonly Jurisdiction[] } };

/**
 * While false (until the content rewrite removes the European pages from the English site), a
 * <JurisdictionCard> for a jurisdiction outside its locale's full + notes is left out of the page,
 * and the validator only warns about it, about such a page `jurisdiction` and about regulatory_notes
 * for rows the locale does not show. Set it to true after the rewrite: the card then fails the build
 * and the validator reports errors.
 */
export const STRICT_PAGE_JURISDICTIONS = false;

/**
 * Member states whose rows an EU-wide (central) authorisation covers: an EU product counts as the
 * product for their authorised rows (validator). Ireland is a note jurisdiction on English.
 */
export const EU_MEMBER_STATES: readonly Jurisdiction[] = ['NL', 'DE', 'BE', 'IE'];

/** The rows a locale shows: its full jurisdictions in its own order, then WADA. */
export function visibleCodes(locale: LocaleScope): Jurisdiction[] {
  return [...locale.jurisdictions.full.filter((j) => j !== 'WADA'), 'WADA'];
}

/** Jurisdictions with a contact card in the locale: full, notes, or both (full first). */
export function cardCodes(locale: LocaleScope, which: 'full' | 'notes' | 'all' = 'all'): Jurisdiction[] {
  const { full, notes } = locale.jurisdictions;
  return which === 'full' ? [...full] : which === 'notes' ? [...notes] : [...full, ...notes];
}

/** Whether something tagged with these jurisdictions is shown in the locale ([] or none = global: always). */
export function isVisible(codes: readonly Jurisdiction[] | Jurisdiction | undefined, locale: LocaleScope): boolean {
  const list = typeof codes === 'string' ? [codes] : (codes ?? []);
  if (list.length === 0) return true;
  const visible = visibleCodes(locale);
  return list.some((c) => visible.includes(c));
}

/** A tracker item's sources in the locale: its own, then the local_sources of jurisdictions the locale shows. */
export function visibleSources(item: { sources: readonly string[]; local_sources?: Partial<Record<Jurisdiction, readonly string[]>> }, locale: LocaleScope): string[] {
  const local = Object.entries(item.local_sources ?? {}) as [Jurisdiction, readonly string[]][];
  return [...item.sources, ...local.filter(([j]) => isVisible(j, locale)).flatMap(([, ids]) => ids)];
}

/** The regulatory rows the locale shows (full ∪ WADA), in the locale's order, WADA last. */
export function visibleRows(data: CompoundData, locale: LocaleScope): CompoundData['regulatory'] {
  const order = visibleCodes(locale);
  return data.regulatory.filter((r) => order.includes(r.jurisdiction)).sort((a, b) => order.indexOf(a.jurisdiction) - order.indexOf(b.jurisdiction));
}

/** The authorised products of the locale's full jurisdictions, in the locale's order (data order within one). */
export function visibleProducts(data: CompoundData, locale: LocaleScope): CompoundData['authorised_products'] {
  const order: readonly string[] = locale.jurisdictions.full;
  return data.authorised_products.filter((p) => order.includes(p.jurisdiction)).sort((a, b) => order.indexOf(a.jurisdiction) - order.indexOf(b.jurisdiction));
}

/**
 * The answer to "is it an approved medicine?" in one locale:
 *   all       every full jurisdiction has an authorised row
 *   some      at least one has
 *   former    none is authorised now, but at least one row is discontinued
 *   elsewhere category authorised or authorised-nationally, but nothing visible is approved (the
 *             words name the national_authorisations countries, or say "other countries": never a
 *             tracked jurisdiction outside the locale's set)
 *   trials    category investigational
 *   none      anything else
 * approved / former / notApproved / unknown split the locale's full jurisdictions (in its order):
 * authorised, discontinued, any other status, and no row at all. peptide is false for not-a-peptide.
 */
export type ApprovalKey = 'all' | 'some' | 'former' | 'elsewhere' | 'trials' | 'none';
export type Approval = {
  key: ApprovalKey;
  peptide: boolean;
  approved: Jurisdiction[];
  former: Jurisdiction[];
  notApproved: Jurisdiction[];
  unknown: Jurisdiction[];
  /** ISO 3166-1 codes from national_authorisations (category authorised-nationally). */
  national: string[];
};

export function approvalFor(data: CompoundData, locale: LocaleScope): Approval {
  const a: Approval = { key: 'none', peptide: data.category !== 'not-a-peptide', approved: [], former: [], notApproved: [], unknown: [], national: data.national_authorisations.map((n) => n.country) };
  const full = locale.jurisdictions.full.filter((j) => j !== 'WADA');
  for (const j of full) {
    const row = data.regulatory.find((r) => r.jurisdiction === j);
    if (!row) a.unknown.push(j);
    else if (row.status === 'authorised') a.approved.push(j);
    else if (row.status === 'discontinued') a.former.push(j);
    else a.notApproved.push(j);
  }
  if (full.length > 0 && a.approved.length === full.length) a.key = 'all';
  else if (a.approved.length > 0) a.key = 'some';
  else if (a.former.length > 0) a.key = 'former';
  else if (data.category === 'authorised' || data.category === 'authorised-nationally') a.key = 'elsewhere';
  else if (data.category === 'investigational') a.key = 'trials';
  return a;
}

/** Approved (or once approved) in at least one of the locale's own jurisdictions. */
export function approvedHere(a: Approval): boolean {
  return a.key === 'all' || a.key === 'some' || a.key === 'former';
}
