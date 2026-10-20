// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import fs from 'node:fs';
import remarkExplainerSources from './src/plugins/remark-explainer-sources.mjs';
import remarkCitations from './src/plugins/remark-citations.mjs';
import remarkFaq from './src/plugins/remark-faq.mjs';
import rehypeGlossary from './src/plugins/rehype-glossary.mjs';
import rehypeTableWrap from './src/plugins/rehype-table-wrap.mjs';

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

/**
 * Dev only: the theme stylesheets are an endpoint (src/pages/themes/[theme].css.ts). In a build
 * they are real files, but the dev server applies trailingSlash: 'always' to them and 404s on
 * /themes/a.css. Rewrite the request to the slash form the dev server serves.
 */
function devThemeCss() {
  return {
    name: 'dev-theme-css',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url) req.url = req.url.replace(/^(\/(?:[^?]*\/)?themes\/[a-z]+\.css)(?=\?|$)/, '$1/');
        next();
      });
    },
  };
}

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
      remarkPlugins: [remarkExplainerSources, remarkCitations, remarkFaq],
      rehypePlugins: [[rehypeGlossary, { base: BASE }], rehypeTableWrap],
      optimize: false,
    }),
  ],
  markdown: { smartypants: true },
  prefetch: false,
  devToolbar: { enabled: false },
  vite: {
    plugins: [devThemeCss()],
    define: {
      __THEME__: JSON.stringify(THEME),
      __PSEUDO_RTL__: JSON.stringify(PSEUDO_RTL),
      __REVIEW_BUILD__: JSON.stringify(THEME !== 'switchable'),
    },
    build: { assetsInlineLimit: 0 },
  },
});
