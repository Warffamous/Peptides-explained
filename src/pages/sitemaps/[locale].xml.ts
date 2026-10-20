/** Per-locale sitemap with the full hreflang matrix (xhtml:link alternates) for every URL. */
import type { APIRoute } from 'astro';
import { PUBLISHED_LOCALES, REVIEW_BUILD, getLocale, DEFAULT_LOCALE } from '../../lib/config';
import { translationMatrix } from '../../lib/content';
import { canonicalUrl } from '../../lib/urls';

export const getStaticPaths = () => (REVIEW_BUILD ? [] : PUBLISHED_LOCALES.map((l) => ({ params: { locale: l.code } })));

export const GET: APIRoute = async ({ params }) => {
  const locale = params.locale as string;
  const matrix = await translationMatrix();
  const published = PUBLISHED_LOCALES.map((l) => l.code);
  const urls: string[] = [];
  for (const [key, locs] of [...matrix.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    if (!locs.has(locale) || key === 'search') continue;
    const alts = published.filter((l) => locs.has(l));
    const links = alts.map((l) => `<xhtml:link rel="alternate" hreflang="${getLocale(l).hreflang}" href="${canonicalUrl(l, key)}"/>`);
    if (alts.includes(DEFAULT_LOCALE)) links.push(`<xhtml:link rel="alternate" hreflang="x-default" href="${canonicalUrl(DEFAULT_LOCALE, key)}"/>`);
    urls.push(`<url><loc>${canonicalUrl(locale, key)}</loc>${links.join('')}</url>`);
  }
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
