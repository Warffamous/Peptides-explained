import type { APIRoute } from 'astro';
import { PUBLISHED_LOCALES, SITE, REVIEW_BUILD } from '../lib/config';
export const GET: APIRoute = () => {
  // Review builds are not indexed: emit an empty index.
  const items = (REVIEW_BUILD ? [] : PUBLISHED_LOCALES).map((l) => `<sitemap><loc>${new URL(`/sitemaps/${l.code}.xml`, SITE.siteUrl).href}</loc></sitemap>`);
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items.join('\n')}\n</sitemapindex>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
