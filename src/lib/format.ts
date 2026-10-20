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

export function formatNumber(locale: string, n: number): string {
  return new Intl.NumberFormat(getLocale(locale).dateLocale).format(n);
}
