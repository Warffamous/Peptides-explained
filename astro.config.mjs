// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import fs from 'node:fs';
import remarkExplainerSources from './src/plugins/remark-explainer-sources.mjs';
import remarkCitations from './src/plugins/remark-citations.mjs';
import remarkFigureSources from './src/plugins/remark-figure-sources.mjs';
import remarkProductCheckSources from './src/plugins/remark-product-check-sources.mjs';
import remarkFaq from './src/plugins/remark-faq.mjs';
import rehypeGlossary from './src/plugins/rehype-glossary.mjs';
import rehypeTableWrap from './src/plugins/rehype-table-wrap.mjs';

const site = JSON.parse(fs.readFileSync(new URL('./config/site.json', import.meta.url), 'utf8'));
const localeCfg = JSON.parse(fs.readFileSync(new URL('./config/locales.json', import.meta.url), 'utf8'));

/**
 * Build variants:
 *   (default)     — the site, into dist/
 *   PUBLISHED_ONLY=1 — leave out preview locales, as if planned (the public copy: npm run build:live)
 *   PSEUDO_RTL=1  — render every page dir="rtl" at build time (RTL acceptance screenshots;
 *                   npm run build:rtl writes it to dist-rtl/)
 */
const PSEUDO_RTL = process.env.PSEUDO_RTL === '1';
const PUBLISHED_ONLY = process.env.PUBLISHED_ONLY === '1';
const SITE_URL = process.env.SITE_URL ?? site.siteUrl;

const builtLocales = localeCfg.locales.filter((l) => l.status === 'published' || (l.status === 'preview' && !PUBLISHED_ONLY)).map((l) => l.code);

/**
 * Dev only: the stylesheet is an endpoint (src/pages/styles/site.css.ts). In a build it is a real
 * file, but the dev server applies trailingSlash: 'always' to it and 404s on /styles/site.css.
 * Rewrite the request to the slash form the dev server serves.
 */
function devSiteCss() {
  return {
    name: 'dev-site-css',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url) req.url = req.url.replace(/^(\/styles\/site\.css)(?=\?|$)/, '$1/');
        next();
      });
    },
  };
}

export default defineConfig({
  site: SITE_URL,
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
      remarkPlugins: [remarkExplainerSources, remarkFigureSources, remarkProductCheckSources, remarkCitations, remarkFaq],
      rehypePlugins: [rehypeGlossary, rehypeTableWrap],
      optimize: false,
    }),
  ],
  markdown: { smartypants: true },
  prefetch: false,
  devToolbar: { enabled: false },
  vite: {
    plugins: [devSiteCss()],
    define: {
      __PSEUDO_RTL__: JSON.stringify(PSEUDO_RTL),
      __PUBLISHED_ONLY__: JSON.stringify(PUBLISHED_ONLY),
    },
    build: { assetsInlineLimit: 0 },
  },
});
