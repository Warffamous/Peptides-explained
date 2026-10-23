import { getLocale } from './config';

export function formatDate(locale: string, d: Date | string, style: 'long' | 'short' | 'year' = 'long'): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  const loc = getLocale(locale).dateLocale;
  if (style === 'year') return String(date.getUTCFullYear());
  return new Intl.DateTimeFormat(loc, {
    timeZone: 'UTC',
    day: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    year: 'numeric',
  }).format(date);
}

export function isoDate(d: Date | string): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  return date.toISOString().slice(0, 10);
}

/**
 * Country and region names from ISO 3166-1 codes, joined as a list in the locale's own words
 * ("Italy, India and Hong Kong"; "Italië, India en Hongkong"). The short style gives "Hong Kong"
 * rather than "Hong Kong SAR China". Unknown codes come back unchanged (the validator rejects them).
 */
export function formatCountryList(locale: string, codes: string[]): string {
  const loc = getLocale(locale).dateLocale;
  const names = new Intl.DisplayNames([loc], { type: 'region', style: 'short' });
  return new Intl.ListFormat(loc, { type: 'conjunction' }).format(codes.map((c) => names.of(c) ?? c));
}

export function formatNumber(locale: string, n: number): string {
  return new Intl.NumberFormat(getLocale(locale).dateLocale).format(n);
}
