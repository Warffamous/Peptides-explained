import type { APIRoute } from 'astro';
import { bundleSiteCss } from '../../lib/site-css';

/** The site's one stylesheet (src/lib/site-css.ts). BaseHead links it with its content hash. */
export const GET: APIRoute = () =>
  new Response(bundleSiteCss().code, { headers: { 'Content-Type': 'text/css; charset=utf-8' } });
