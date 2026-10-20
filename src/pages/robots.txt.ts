import type { APIRoute } from 'astro';
import { SITE, REVIEW_BUILD } from '../lib/config';
// Review builds (/a/, /b/, /c/) are for side-by-side design review and must not be indexed.
export const GET: APIRoute = () =>
  new Response(
    REVIEW_BUILD
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\nAllow: /\nDisallow: /a/\nDisallow: /b/\nDisallow: /c/\n\nSitemap: ${new URL('/sitemap-index.xml', SITE.siteUrl).href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
