/** RSS feed of the corrections log, so anyone can follow what changed and why. */
import type { APIRoute } from 'astro';
import { BUILT_LOCALES } from '../../../../lib/config';
import { CORRECTIONS } from '../../../../lib/data';
import { namespace, t } from '../../../../lib/i18n';
import { canonicalUrl } from '../../../../lib/urls';

export const getStaticPaths = () => BUILT_LOCALES.map((l) => ({ params: { locale: l.code } }));
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = ({ params }) => {
  const locale = params.locale as string;
  const text = namespace<Record<string, { summary: string; detail?: string }>>(locale, 'corrections');
  const items = [...CORRECTIONS].filter((c) => c.locales.includes(locale) || c.locales.includes('*')).sort((a, b) => +b.date - +a.date);
  const link = canonicalUrl(locale, 'about/corrections');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>${esc(t(locale, 'common.brand'))} — ${esc(t(locale, 'common.footer.corrections'))}</title>
<link>${link}</link><description>${esc(t(locale, 'common.tagline'))}</description><language>${locale}</language>
${items.map((c) => `<item><title>${esc(t(locale, `pages.corrections.kinds.${c.kind}`))}: ${esc(text[c.id]?.summary ?? c.id)}</title><link>${link}#correction-${c.id}</link><guid isPermaLink="false">${c.id}</guid><pubDate>${c.date.toUTCString()}</pubDate>${text[c.id]?.detail ? `<description>${esc(text[c.id]!.detail!)}</description>` : ''}</item>`).join('\n')}
</channel></rss>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
