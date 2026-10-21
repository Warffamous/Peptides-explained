import type { APIRoute } from 'astro';
import { SITE } from '../lib/config';
export const GET: APIRoute = () =>
  new Response(`User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap-index.xml', SITE.siteUrl).href}
`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
