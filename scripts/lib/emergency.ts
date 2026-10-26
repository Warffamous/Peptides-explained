/**
 * Emergency numbers printed as phone numbers (CONTENT-GUIDE §1). A locale whose readers live in
 * several countries never prints an emergency number (owner's decisions, 20 and 23 October 2026): it
 * says "call your local emergency number" (common.emergency.* in components), and help services are
 * named and linked, never numbered. The validator applies this to every locale with
 * printsEmergencyNumbers: false in config/locales.json (today English).
 *
 * The numbers checked are 112 plus the emergency numbers of the locale's own jurisdictions
 * (src/data/jurisdictions.yaml, `emergency`, for its full and notes codes): on English 911 (US,
 * Canada; also written 9-1-1), 999 (UK, Ireland), 000 (Australia), 112 and 111 (New Zealand), and the
 * words "triple zero" and "nine-one-one".
 *
 * A number is a phone number when a calling word is near it (call, phone, dial, emergency, ambulance
 * …), or anywhere in a safety string (a stop callout, a stop sign, the warning signs, the emergency
 * and notice strings). Never a phone number: part of a bigger number or an amount ("1,000",
 * "10 000", "£1000", "1999", "99.9%"), a count or a measurement ("111 participants", "112 mg/dL"), a
 * position ("week 112", "volume 999"), and the name of a service that contains the number ("NHS 111").
 */
import { cardCodes, type LocaleScope } from '../../src/lib/jurisdictions.ts';

const SPACE = '[ \\u00a0\\u202f]';

/** 112 plus the `emergency` numbers of the locale's full and notes jurisdictions, longest first. */
export function emergencyNumbers(locale: LocaleScope, contacts: unknown): string[] {
  const own = cardCodes(locale, 'all') as string[];
  const nums = new Set<string>(['112']);
  if (Array.isArray(contacts)) {
    for (const c of contacts as { code?: string; emergency?: unknown }[]) {
      if (c?.code && own.includes(c.code) && Array.isArray(c.emergency)) c.emergency.forEach((n) => nums.add(String(n)));
    }
  }
  return [...nums].sort((a, b) => b.length - a.length || a.localeCompare(b));
}

/**
 * The numbers as written ("911", "9-1-1"), never inside a bigger number, an amount, a decimal, a
 * URL or an id: not after a letter, digit, "." "," "/" "-" "#" "+" or a currency sign, not after a
 * digit and a space ("10 000"), and not before a letter or digit, ".x" / ",x" ("111.wales", "1,112")
 * or a space and three digits (a grouped number).
 */
export function emergencyRegex(nums: string[]): RegExp {
  const forms = nums.flatMap((n) => (n.length === 3 ? [n, n.split('').join('-')] : [n]));
  return new RegExp(`(?<![\\w.,/£$€¥#+-])(?<!\\d${SPACE})(?:${forms.join('|')})(?!\\w|[.,]\\w|${SPACE}\\d{3}(?!\\d))`, 'g');
}

// Not inside an id or a URL ("au-triple-zero", "/triple-zero/"): no letter, digit, "-", "/" or "_" around it.
const EMERGENCY_WORDS = /(?<![\w/-])(?:triple[- ]zero|nine[- ]one[- ]one)(?![\w/-])/gi;
// A count, a measurement or a point in a study is never a phone number, even next to a calling word
// ("112 participants were called back", "above 112 mg/dL? Call your doctor", "at week 112 … call").
const NOT_A_PHONE = /^[\s-]*(?:%|(?:mg|mmol|µg|mcg|kg|g|ml|l|dl|da|kda|daltons?|percent|participants?|people|persons?|adults?|children|babies|women|men|patients?|subjects?|volunteers?|cases?|deaths?|events?|reports?|records?|times|vials?|pens?|parcels?|units?|samples?|studies|trials?|papers?|sites?|weeks?|days?|months?|years?|hours?|minutes?)\b)/i;
const NOT_A_PHONE_BEFORE = /\b(?:week|day|month|year|volume|vol\.|issue|page|pp?\.|ref\.|table|figure|fig\.|study|trial|step)\s*$/i;
/** The name of a service that contains the number, written as its name: "NHS 111", "NHS 111 Wales". */
const SERVICE_NAME_BEFORE = /\bNHS\s*$/;
const CALL_WORDS = /\b(?:call(?:s|ed|ing)?|phone|telephone|ring|dial(?:l?ing)?|bel(?:len|t)?|emergenc(?:y|ies)|ambulances?|paramedics?|noodnummer|alarmnummer|hotline)\b/i;
/** i18n key paths whose strings are safety text: any number there counts. */
export const SAFETY_KEYS = /(?:^|\.)(?:emergency|stop|stop_signs|warning|warnings|warningAction|warning-signs|notice|call)(?:\.|$)/i;

export type EmergencyHit = { index: number; number: string; context: string };

/** Emergency numbers printed as phone numbers in one text (safety = a safety string: no calling word needed). */
export function findEmergencyNumbers(text: string, re: RegExp, safety = false): EmergencyHit[] {
  const out: EmergencyHit[] = [];
  const near = (i: number, len: number) => {
    // whole words only: a window cut through "below" must not leave "bel"
    const from = Math.max(0, i - 60);
    const to = Math.min(text.length, i + len + 40);
    let s = text.slice(from, to).replace(/\s+/g, ' ');
    if (from > 0 && /\S/.test(text[from - 1])) s = s.replace(/^\S*/, '');
    if (to < text.length && /\S/.test(text[to])) s = s.replace(/\S*$/, '');
    return s.trim();
  };
  re.lastIndex = 0;
  for (const m of text.matchAll(re)) {
    const i = m.index ?? 0;
    const after = text.slice(i + m[0].length, i + m[0].length + 20);
    const before = text.slice(Math.max(0, i - 12), i);
    if (NOT_A_PHONE.test(after) || NOT_A_PHONE_BEFORE.test(before) || SERVICE_NAME_BEFORE.test(before)) continue;
    const context = near(i, m[0].length);
    if (safety || CALL_WORDS.test(context)) out.push({ index: i, number: m[0], context });
  }
  // "Triple zero" is Australia's emergency number spelled out: always a phone number.
  for (const m of text.matchAll(EMERGENCY_WORDS)) out.push({ index: m.index ?? 0, number: m[0], context: near(m.index ?? 0, m[0].length) });
  return out.sort((a, b) => a.index - b.index);
}
