// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import fs from 'node:fs';
import remarkCitations from './src/plugins/remark-citations.mjs';
import remarkFaq from './src/plugins/remark-faq.mjs';
import rehypeGlossary from './src/plugins/rehype-glossary.mjs';

const site = JSON.parse(fs.readFileSync(new URL('./config/site.json', import.meta.url), 'utf8'));
const localeCfg = JSON.parse(fs.readFileSync(new URL('./config/locales.json', import.meta.url), 'utf8'));

/**
 * Build variants (see README "Builds"):
 *   THEME=switchable (default) — root site; all three design systems, chosen by ?theme= or saved preference
 *   THEME=a|b|c BASE=/a        — dedicated single-system build for side-by-side review
 *   PSEUDO_RTL=1               — render every page dir="rtl" at build time (RTL acceptance screenshots)
 */
const THEME = process.env.THEME ?? 'switchable';
if (!['switchable', 'a', 'b', 'c'].includes(THEME)) throw new Error(`THEME must be switchable|a|b|c, got ${THEME}`);
const BASE = process.env.BASE ?? '/';
const PSEUDO_RTL = process.env.PSEUDO_RTL === '1';
const SITE_URL = process.env.SITE_URL ?? site.siteUrl;

const builtLocales = localeCfg.locales.filter((l) => l.status !== 'planned').map((l) => l.code);

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'never' },
  output: 'static',
  i18n: {
    locales: builtLocales,
    defaultLocale: localeCfg.defaultLocale,
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkCitations, remarkFaq],
      rehypePlugins: [[rehypeGlossary, { base: BASE }]],
      optimize: false,
    }),
  ],
  markdown: { smartypants: true },
  prefetch: false,
  devToolbar: { enabled: false },
  vite: {
    define: {
      __THEME__: JSON.stringify(THEME),
      __PSEUDO_RTL__: JSON.stringify(PSEUDO_RTL),
      __REVIEW_BUILD__: JSON.stringify(THEME !== 'switchable'),
    },
    build: { assetsInlineLimit: 0 },
  },
});
