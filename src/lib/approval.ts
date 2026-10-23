/**
 * The words for "is it an approved medicine?" (approvalFor in src/lib/jurisdictions.ts): the At a
 * glance tile, the fact sheet's "Approved in" row, the badge under the title, the authorised-products
 * block and the compounds index all say the same thing, from the same rows.
 *
 * Translators get whole sentences (beginner.glance.approved.*, compound.authorised.*): only the
 * jurisdictions are filled in, as one list in the locale's own words (vocab.jurisdictionInSentence)
 * joined with Intl.ListFormat ("the US, the UK, Canada and Australia"; "or" for "not approved").
 * When a preview locale shows an English sentence, the list is English too. A jurisdiction without a
 * row is in no sentence at all: unknown is never "not approved".
 */
import { t, isFallback } from './i18n';
import { SOURCE_LOCALE, getLocale } from './config';
import { formatCountryList, formatDate } from './format';
import { approvedHere, type Approval, type ApprovalKey } from './jurisdictions';
import type { CompoundData } from '../schemas';
import type { Jurisdiction } from '../schemas/vocab';

export type Tone = 'yes' | 'partial' | 'no';

/** The language a sentence is shown in (a preview locale without its own string shows English). */
function langOf(L: string, key: string): string {
  return isFallback(L, key) ? SOURCE_LOCALE : L;
}

/** Jurisdictions as a list inside a sentence: "the US, the UK and Canada" / "the UK or Australia". */
export function jurisdictionList(lang: string, codes: readonly Jurisdiction[], type: 'conjunction' | 'disjunction' = 'conjunction'): string {
  return new Intl.ListFormat(getLocale(lang).dateLocale, { type }).format(codes.map((c) => t(lang, `vocab.jurisdictionInSentence.${c}`)));
}

/** A whole sentence with its list filled in; the first letter is upper case ("The UK approved it, …"). */
function sentence(L: string, key: string, vars: Record<string, string> = {}): string {
  const lang = langOf(L, key);
  const s = t(L, key, vars);
  return s.charAt(0).toLocaleUpperCase(getLocale(lang).bcp47) + s.slice(1);
}
const listIn = (L: string, key: string, codes: readonly Jurisdiction[], type?: 'conjunction' | 'disjunction') => jurisdictionList(langOf(L, key), codes, type);

const G = (k: string) => `beginner.glance.approved.${k}`;

/** The short answer on the tile (at most 4 words): "Yes", "Only in the US", "Only in other countries", "No". */
export function approvalShort(L: string, a: Approval): string {
  if (a.key === 'some') {
    return a.approved.length === 1 ? t(L, G('short.someOne'), { jurisdiction: listIn(L, G('short.someOne'), a.approved) }) : t(L, G('short.someMany'));
  }
  return t(L, G(`short.${a.key}`));
}

/**
 * The tile's sentences, e.g. "Approved in the US. Canada approved it, but it is no longer sold there.
 * Not approved in the UK or Australia. Only with a prescription."
 */
export function approvalText(L: string, a: Approval): string {
  const out: string[] = [];
  if (!a.peptide) out.push(sentence(L, G('notPeptide')));
  const formerAndNot = () => {
    if (a.former.length) out.push(sentence(L, G('formerIn'), { list: listIn(L, G('formerIn'), a.former) }));
    if (a.notApproved.length) out.push(sentence(L, G('notApprovedIn'), { list: listIn(L, G('notApprovedIn'), a.notApproved, 'disjunction') }));
  };
  switch (a.key) {
    case 'all':
    case 'some':
      out.push(sentence(L, G('approvedIn'), { list: listIn(L, G('approvedIn'), a.approved) }));
      formerAndNot();
      if (a.peptide) out.push(sentence(L, G('prescription')));
      break;
    case 'former':
      formerAndNot();
      break;
    case 'elsewhere':
      // The countries of national_authorisations are named; a tracked jurisdiction outside the locale never is.
      out.push(
        a.national.length
          ? sentence(L, G('nationally'), { countries: formatCountryList(langOf(L, G('nationally')), a.national) })
          : sentence(L, G('otherCountries')),
      );
      formerAndNot();
      break;
    case 'trials':
      out.push(sentence(L, G('trials')));
      break;
    case 'none':
      out.push(a.notApproved.length ? sentence(L, G('none'), { list: listIn(L, G('none'), a.notApproved, 'disjunction') }) : sentence(L, G('unchecked')));
      break;
  }
  return out.join(' ');
}

/** Ring and pictogram of the tile. frac: how much of the ring is drawn (some: the share approved). */
export function approvalTone(a: Approval): { tone: Tone; frac: number } {
  const full = a.approved.length + a.former.length + a.notApproved.length + a.unknown.length;
  const TONES: Record<ApprovalKey, { tone: Tone; frac: number }> = {
    all: { tone: 'yes', frac: 1 },
    some: { tone: 'partial', frac: full ? a.approved.length / full : 0.5 },
    former: { tone: 'partial', frac: 0.4 },
    elsewhere: { tone: 'partial', frac: 0.5 },
    trials: { tone: 'no', frac: 0.33 },
    none: { tone: 'no', frac: 0 },
  };
  return TONES[a.key];
}

export function approvalIcon(a: Approval): string {
  if (!a.peptide && !approvedHere(a)) return 'status-not-a-peptide';
  const ICONS: Record<ApprovalKey, string> = {
    all: 'status-authorised',
    some: 'status-authorised-elsewhere',
    former: 'status-authorised-elsewhere',
    elsewhere: 'status-authorised-nationally',
    trials: 'status-investigational',
    none: 'status-experimental',
  };
  return ICONS[a.key];
}

/** The badge under the title (and on the authorised-products block): "Authorised in the US". */
export function approvalBadge(L: string, a: Approval): string {
  if (!a.peptide && !approvedHere(a)) return t(L, 'compound.notPeptideBadge');
  switch (a.key) {
    case 'all': return t(L, 'compound.authorised.badge');
    case 'some': return t(L, 'compound.authorised.badgeSome', { list: listIn(L, 'compound.authorised.badgeSome', a.approved) });
    case 'former': return t(L, 'compound.authorised.badgeFormer');
    case 'elsewhere': return t(L, 'compound.authorised.badgeElsewhere');
    case 'trials': return t(L, 'compound.investigationalBadge');
    case 'none': return t(L, 'compound.experimentalBadge');
  }
}

/** The authorised-products block's explanation after its first, general sentence. */
export function approvalExplainExtra(L: string, a: Approval): string[] {
  const out: string[] = [];
  if (a.former.length) out.push(sentence(L, 'compound.authorised.explainFormer', { list: listIn(L, 'compound.authorised.explainFormer', a.former) }));
  if (a.notApproved.length && (a.key === 'some' || a.key === 'former')) {
    out.push(sentence(L, 'compound.authorised.explainSome', { list: listIn(L, 'compound.authorised.explainSome', a.notApproved, 'disjunction') }));
  }
  return out;
}

/**
 * The value of the fact sheet's (and an index card's) "Approved in" row: "US since 2010; Canada
 * 2014–2022", "Italy, India and Hong Kong", "Only in other countries" or "Not in the US or the UK".
 */
export function approvedInValue(L: string, data: CompoundData, a: Approval): string {
  const F = (k: string) => `beginner.facts.${k}`;
  const short = (j: Jurisdiction) => t(L, `vocab.jurisdictionShort.${j}`);
  const row = (j: Jurisdiction) => data.regulatory.find((r) => r.jurisdiction === j);
  if (approvedHere(a)) {
    const parts = [
      ...a.approved.map((j) => {
        const since = row(j)?.since;
        return since ? t(L, F('approvedSince'), { jurisdiction: short(j), year: formatDate(L, since, 'year') }) : short(j);
      }),
      ...a.former.map((j) => {
        const r = row(j)!;
        return t(L, F('approvedFormer'), { jurisdiction: short(j), from: formatDate(L, r.authorised_since!, 'year'), to: formatDate(L, r.since!, 'year') });
      }),
    ];
    return parts.join(t(L, F('approvedJoin')));
  }
  // Country names in the language of the row's label (English on a preview locale without its own).
  if (a.key === 'elsewhere') return a.national.length ? formatCountryList(langOf(L, F('approvedIn')), a.national) : t(L, F('approvedElsewhere'));
  return a.notApproved.length ? t(L, F('approvedNot'), { list: listIn(L, F('approvedNot'), a.notApproved, 'disjunction') }) : t(L, F('approvedUnchecked'));
}
