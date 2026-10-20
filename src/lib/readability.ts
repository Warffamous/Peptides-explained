/**
 * Plain-language metrics for the beginner layer. Pure TypeScript with no Astro imports, so the
 * standalone validator (scripts/validate-content.ts) and the page templates (reading time) share
 * one definition.
 *
 *   words("It sells nothing.")             -> ["It", "sells", "nothing."]
 *   fleschReadingEase("It sells nothing.") -> about 93
 *   readingMinutes(1234)                   -> 7
 *
 * The syllable counter is a heuristic for English (after Greg Fast's Lingua::EN::Syllable):
 * count vowel groups, then correct for common silent and split vowel patterns. It is right for
 * roughly nine words in ten, which is enough for a warning threshold; it is not a linguistic tool.
 */

/** Words a reader has to read: whitespace-separated tokens that contain a letter or a digit. */
export function words(text: string): string[] {
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w));
}

export function wordCount(text: string): number {
  return words(text).length;
}

/**
 * Sentences: runs ending in . ! ? (or a closing quote after one). Decimal points ("0.2%") and a
 * few common abbreviations are not sentence ends. Always at least 1 for non-empty text.
 */
export function sentenceCount(text: string): number {
  const cleaned = text
    .replace(/\b(?:e\.g|i\.e|vs|etc|approx|Dr|Prof|No|Fig)\./gi, (m) => m.replace(/\./g, ''))
    .replace(/(\d)\.(\d)/g, '$1$2');
  const ends = cleaned.match(/[.!?]+["'”’)\]]*(?=\s|$)/g)?.length ?? 0;
  return Math.max(1, ends || (wordCount(text) ? 1 : 0));
}

const SUB_SYL = [/cial/, /tia/, /cius/, /cious/, /giu/, /ion/, /iou/, /sia$/, /.ely$/, /[^td]ed$/];
const ADD_SYL = [
  /ia/, /riet/, /dien/, /iu/, /io/, /ii/, /[aeiouym]bl$/, /[aeiou]{3}/, /^mc/, /ism$/,
  /([^aeiouy])\1l$/, /[^l]lien/, /^coa[dglx]./, /[^gq]ua[^auieo]/, /dnt$/,
];

/** Estimated syllables in one English word. Numbers count as 1 (up to 2 digits) or 2. */
export function syllables(word: string): number {
  const raw = word.toLowerCase().replace(/[’']s$/, '');
  if (/^[\d.,%–-]+$/.test(raw)) return raw.replace(/\D/g, '').length > 2 ? 2 : 1;
  // Hyphenated compounds ("lab-made", "type-2") are the sum of their parts.
  const parts = raw.split(/[-–]/).filter(Boolean);
  if (parts.length > 1) return parts.reduce((n, p) => n + syllables(p), 0);
  let w = raw.replace(/[^a-z]/g, '');
  if (!w) return 1;
  if (w.length <= 3) return 1;
  // "people", "single": consonant + -le is its own syllable (vowel + -ble is handled by ADD_SYL).
  const syllabicLe = /[^aeiouyl]le$/.test(w) && !/[aeiouym]ble$/.test(w);
  // "stones", "hormones": -es after vowel + one consonant is silent ("places", "doses" are not).
  w = w.replace(/([aeiouy][^aeiouyscgxzh])es$/, '$1').replace(/e$/, '');
  let n = w.split(/[^aeiouy]+/).filter(Boolean).length + (syllabicLe ? 1 : 0);
  for (const re of SUB_SYL) if (re.test(w)) n--;
  for (const re of ADD_SYL) if (re.test(w)) n++;
  return Math.max(1, n);
}

export interface FleschOptions {
  /**
   * Proper names the reader meets anyway (the compound's own names, its trade names). Each counts
   * as a two-syllable word, so a page about "semaglutide" is not marked hard for saying so.
   */
  names?: string[];
}

/**
 * Flesch Reading Ease (English): 206.835 − 1.015 × words/sentence − 84.6 × syllables/word.
 * 60–70 is plain English; under 50 is hard for most adults; under 30 is academic prose.
 */
export function fleschReadingEase(text: string, opts: FleschOptions = {}): number {
  const ws = words(text);
  if (!ws.length) return 100;
  const names = new Set((opts.names ?? []).flatMap((n) => n.toLowerCase().split(/\s+/)).filter(Boolean));
  const strip = (w: string) => w.toLowerCase().replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
  const syl = ws.reduce((n, w) => n + (names.has(strip(w)) ? 2 : syllables(w)), 0);
  return 206.835 - 1.015 * (ws.length / sentenceCount(text)) - 84.6 * (syl / ws.length);
}

/**
 * Readable text of an MDX body, for word counts: drops ESM lines, comments, code fences and tag
 * syntax (keeping the text between tags), link targets and Markdown punctuation.
 */
export function mdxToPlain(src: string): string {
  return src
    .replace(/^\s*(?:import|export)\s.*$/gm, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<\/?[A-Za-z][^>]*>/g, ' ')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`|~]/g, ' ');
}

/**
 * Reading speed used for the estimate. 200 words a minute is a common figure for adults reading
 * for understanding; it is deliberately not the 250+ of skimming, because the reader we design
 * for is not skimming.
 */
export const WORDS_PER_MINUTE = 200;

/** Whole minutes to read `count` words, rounded up, never less than 1. */
export function readingMinutes(count: number, wpm = WORDS_PER_MINUTE): number {
  return Math.max(1, Math.ceil(count / wpm));
}
