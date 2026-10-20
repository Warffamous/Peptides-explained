import type { APIRoute, GetStaticPaths } from 'astro';
import { BUILD_THEMES } from '../../lib/config';
import { bundleTheme } from '../../lib/theme-css';

export const getStaticPaths: GetStaticPaths = () => BUILD_THEMES.map((theme) => ({ params: { theme } }));

export const GET: APIRoute = ({ params }) =>
  new Response(bundleTheme(params.theme as string).code, { headers: { 'Content-Type': 'text/css; charset=utf-8' } });
