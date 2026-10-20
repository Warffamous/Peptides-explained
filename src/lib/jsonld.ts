/**
 * schema.org structured data. reviewedBy is emitted ONLY for an active, named person — never for
 * a placeholder — so the YMYL trust signal is true rather than decorative.
 */
import { SITE } from './config';
import { getPerson } from './data';
import { canonicalUrl } from './urls';
import { isoDate } from './format';
import { t } from './i18n';

export function publisher(locale: string) {
  return { '@type': 'Organization', name: t(locale, 'common.brand'), url: SITE.siteUrl };
}

function reviewer(id: string) {
  const p = getPerson(id);
  if (p.kind !== 'person' || !p.active) return undefined;
  return { '@type': 'Person', name: p.name, ...(p.credentials ? { jobTitle: p.credentials } : {}), ...(p.url ? { url: p.url } : {}) };
}

export function webPage(opts: {
  locale: string; key: string; title: string; description: string; lastReviewed: Date; reviewedBy: string;
  medical: boolean; article?: boolean; about?: Record<string, unknown>; faq?: { q: string; a: string }[];
  trail?: { key: string; label: string }[]; opinion?: { published: Date; signedBy: string };
}) {
  const url = canonicalUrl(opts.locale, opts.key);
  const types = [opts.medical ? 'MedicalWebPage' : 'WebPage', ...(opts.article ? ['Article'] : [])];
  const rv = reviewer(opts.reviewedBy);
  const page: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': types.length === 1 ? types[0] : types,
    '@id': url,
    url,
    name: opts.title,
    headline: opts.title,
    description: opts.description,
    inLanguage: opts.locale,
    isAccessibleForFree: true,
    lastReviewed: isoDate(opts.lastReviewed),
    dateModified: isoDate(opts.lastReviewed),
    datePublished: isoDate(opts.opinion?.published ?? new Date(SITE.contentAsOf)),
    publisher: publisher(opts.locale),
    author: opts.opinion ? { '@type': 'Organization', name: getPerson(opts.opinion.signedBy).name } : publisher(opts.locale),
    ...(rv ? { reviewedBy: rv } : {}),
    ...(opts.medical ? { medicalAudience: [{ '@type': 'MedicalAudience', audienceType: 'Patient' }, { '@type': 'MedicalAudience', audienceType: 'Clinician' }] } : {}),
    ...(opts.about ? { about: opts.about } : {}),
    ...(opts.opinion ? { genre: 'opinion' } : {}),
  };
  const out: Record<string, unknown>[] = [page];
  if (opts.trail && opts.trail.length) {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [{ key: '', label: t(opts.locale, 'common.home') }, ...opts.trail].map((c, i) => ({
        '@type': 'ListItem', position: i + 1, name: c.label, item: canonicalUrl(opts.locale, c.key),
      })),
    });
  }
  if (opts.faq && opts.faq.length) {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: opts.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }
  return out;
}
