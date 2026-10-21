/**
 * Word counts for the reading-time line in the summary box. Shared by the compound template and
 * the generic page template so "the short version" means the same thing everywhere.
 */
import { tr } from './i18n';
import { mdxToPlain, wordCount } from './readability';

/** Words that live in component props rather than between tags: section leads, figure titles and
 *  detail lines, key numbers, comparison and timeline labels (question="…", title="…", label: "…"). */
export const propText = (src: string) =>
  [...src.matchAll(/\b(?:question|title|detail|label|value|who|text|axis|a|b)\s*[=:]\s*"([^"]*)"/g)].map((m) => m[1]).join(' ');

/** Explainers carry their words in i18n: the title, step captions and summary are always visible. */
export const explainerText = (locale: string, src: string) =>
  [...src.matchAll(/<Explainer\s+id="([^"]+)"/g)]
    .map((m) => {
      const x = tr<{ title: string; steps: string[]; summary: string }>(locale, `explainers.${m[1]}`);
      return [x.title, ...x.steps, x.summary].join(' ');
    })
    .join(' ');

/** The MDX body without its <InDetail> folds: what a reader sees with every fold closed. */
export const withoutFolds = (body: string) => body.replace(/<InDetail\s[\s\S]*?<\/InDetail>/g, ' ');

export const hasFolds = (body: string) => body.includes('<InDetail');

/** Words in an MDX body, counting prose, component props and explainer text. */
export const bodyWords = (locale: string, body: string) =>
  wordCount(mdxToPlain(body)) + wordCount(propText(body)) + wordCount(explainerText(locale, body));
