# Final QA, sweep B: editorial consistency (English)

Date: 23 October 2026. Scope: all English content (`src/content/**/en/**`), compound data files, the tracker and
timeline data, and the English i18n strings. Text, data and i18n only; no component or CSS change. Every source
was kept; sources were only added, and only ids already in the registry.

## What was checked

- **Guardrails.** Searched for dosing language ("typical dose", "users report", "start low"), reconstitution
  maths, stacks and cycles, seller help, superlatives between compounds, "safe/proven/effective" for unapproved
  uses, testimonials, and quantities outside `<Q>`. Nothing to fix: the quantities outside `<Q>` are label
  identities (an Egrifta 2 mg vial, products sold as 10 mg retatrutide, falsified 15 mg pens) or the WADA 100 mL
  infusion rule; the sterile-technique mixing section gives no amounts; the warning signs are negative-only and
  say no sign proves a product is good. The validator's four KPV flags ("safe", "strongest") are false positives:
  they debunk safety claims or compare evidence within KPV.
- **Emergency number.** No English content or i18n file prints 112, 999 or 911 as a phone number ("week 112" in
  tirzepatide is a trial week). See "Found, not fixed" for "call an ambulance".
- **PCAC framing (CONTENT-GUIDE §1).** A script listed every block that mentions the July 2026 vote and checked
  the five elements. Fixed the six places where element 5 was incomplete (below). All other full statements carry
  all five; short mentions in summaries and regulatory notes say "only advice" and "the law is unchanged".
- **Statuses.** Each data file's category and regulatory rows against the page's summary, lede, Lead, Compare and
  regulatory notes, the compounds index, the legal pages, the tracker, the timeline and the glossary. Checked dates
  against `as_of` for all 21 compounds: they match. WADA statuses match between data, compound pages, the sport
  page (after the change below), the German page and the glossary.
- **Cross-page facts.** Approval and withdrawal dates (Ozempic, Wegovy, Mounjaro, Zepbound, Egrifta, Vyleesi,
  Scenesse, Forzinity), WADA dates (TB-500 2018, BPC-157 2022, MOTS-c 2025, 2027 List of 21 September 2026, 2027
  Code of 5 December 2025), shortage and grace-period dates, the 2024 PCAC votes (ipamorelin 0–12–1, CJC-1295,
  AOD-9604 12–0, thymosin alpha-1 4–17), the 503A list of six substances, the EU reform timeline, MHRA seizures,
  IGJ report counts, the retatrutide product test (51%, 165%, 190%), STEP 1, SELECT, TRIUMPH-1, the BPC-157 human
  reports. Also the AOD-9604 OPTIONS timing (24-week trial, primary endpoint at 12 weeks), confirmed in the FDA
  briefing (`fda-pcac-2024-aod9604-briefing`).
- **Tone (§1a).** No reader-directed "if you bought it on the grey market"; "grey market" appears only in
  third-person descriptions of the market. Safety pages address "a product that did not come from a pharmacy".
- **B1 on safety and legal pages.** A script split the open (unfolded) text of all safety and legal pages into
  sentences: no prose sentence over 25 words (the only hits were component props). Two sentences on the start page
  (a B1 guide page, not safety or legal) are 27 and 33 words; listed below.
- **Dates.** Every "as of" and "checked" date is 20–23 October 2026. Other dates are sources' own stamps and say so
  (eCFR "as of 15 October 2026"; FDA meeting page "current as of 6 August 2026"; FAMHP page read in an archive
  snapshot of 20 September 2026; a literature search "up to 1 June 2026").

## Changes (before → after)

1. **PCAC element 5, BPC-157.** `src/content/compounds/en/bpc-157.mdx` line 430.
   Before: "None of these is an approved medicine." After: "None of these is an approved medicine in the EU, the UK
   or the US (Semax is registered as a medicine in Russia)." Added cites `fda-pcac-2026-semax-briefing`,
   `ema-medicines-search`. Reason: the old sentence was untrue for Semax and left out the EU/UK/US wording that the
   epitalon, MOTS-c, Semax, ipamorelin and timeline versions use.
2. **PCAC element 5, TB-500.** `src/content/compounds/en/tb-500.mdx` line 445. Same change and the same added cites.
3. **PCAC element 5, US law.** `src/content/pages/en/legal/us.mdx` line 160.
   Before: "None of these is an FDA-approved medicine (Semax is registered in Russia)." After: "None of these is an
   approved medicine in the EU, the UK or the US (Semax is registered as a medicine in Russia)." Added cite
   `ema-medicines-search`.
4. **PCAC element 5, what's changing.** `src/content/pages/en/legal/whats-changing.mdx` line 77. Same as 3.
5. **PCAC element 5, start here.** `src/content/pages/en/start-here.mdx` line 215 (FAQ "Did the FDA approve
   BPC-157 in 2026?"). Before: "None of them is an approved medicine, and a listing would not make them one."
   After: "None of them is an approved medicine in the EU, the UK or the US. Semax is registered as a medicine in
   Russia. A listing would not make them approved medicines." Added cites `fda-pcac-2026-semax-briefing`,
   `ema-medicines-search`.
6. **PCAC element 5, tracker.** `src/i18n/en/tracker.json` line 4 (`us-pcac-2026-peptide-vote.summary`).
   Before: "None of them is an FDA-approved medicine (Semax is registered in Russia)." After: "None of them is an
   approved medicine in the EU, the UK or the US (Semax is registered as a medicine in Russia)." Added
   `ema-medicines-search` to the item's sources in `src/data/tracker.yaml` line 16.
7. **Tracker compound links.** `src/data/tracker.yaml`. The file says `compounds` lists the compounds that have a
   page; the stub pages written since then were missing although the item text names them.
   - line 15, `us-pcac-2026-peptide-vote`: [bpc-157, kpv, tb-500] → [bpc-157, kpv, tb-500, mots-c, semax, epitalon]
   - line 23, `us-pcac-2027-meeting`: [] → [ghk-cu, melanotan-ii]
   - line 30, `us-503a-interim-categories`: [bpc-157, kpv, tb-500] → [bpc-157, kpv, tb-500, mots-c, cjc-1295,
     aod-9604, semax, epitalon, ghk-cu]
   Not changed: `us-ruo-warning-letters` (adding SS-31, tesamorelin and PT-141 would rest on the
   `fda-warning-letters-index` additions, still an open reviewer question in research/pt-141.md).
8. **Date of the FDA's 503B proposal for semaglutide and tirzepatide.** The compound pages said "April 2026" and
   "30 April 2026" (the FDA announcement, `fda-2026-503b-glp1-exclusion-proposal`); the legal pages and tracker said
   "May 2026" and "1 May 2026" (the Federal Register notice). Aligned to the date the FDA proposed it:
   - `src/i18n/en/tracker.json` line 19: "On 1 May 2026 the FDA proposed" → "On 30 April 2026 the FDA proposed"
     (the item already cites the announcement).
   - `src/content/pages/en/legal/us.mdx` line 199: "In May 2026, the FDA proposed" → "On 30 April 2026, the FDA
     proposed" (already cites the announcement).
   - `src/content/pages/en/legal/whats-changing.mdx` line 84: "In May 2026 the FDA proposed" → "On 30 April 2026
     the FDA proposed"; added cite `fda-2026-503b-glp1-exclusion-proposal`.
   The US page's time strip still says "comments from 1 May to 30 July 2026", which is right: comments opened with
   the Federal Register notice.
9. **BPC-157 summary vs its own page.** `src/content/compounds/en/bpc-157.mdx` line 7.
   Before: "Most research was done in rats. About three in four papers come from one group in Zagreb, Croatia."
   After: "Most research was in rats. Nearly nine in ten lab papers come from one group in Zagreb, Croatia."
   Reason: the page itself (fact sheet, grade rationale, key number) says about 140 of 160 lab and animal papers
   (about 85–87%); "three in four" is the Croatian-lab page's count of all PubMed records (175 of 235), which this
   page never states. 18 words, reading ease 90.
10. **BPC-157 reports in people, the Croatian lab page.** `src/content/pages/en/history/the-croatian-lab.mdx`.
    - line 145 (table "People"): "The developer (its trial); one US clinician (three reports)" / "Three small
      reports had no comparison group." → "The developer (its trial); one US clinician (three reports); a group of US
      dentists (one report, 2026)" / "Four small reports had no comparison group." Added `froum-2026-nerve-cases`
      to the block's cites (line 149).
    - line 159 (fold "Humans"): added "A fourth, on three dental patients given BPC-157 in a mixture with other
      drugs, came from a group of US dentists in 2026." with `froum-2026-nerve-cases`.
    Reason: the BPC-157 page and the start page count four reports (33 people), including Froum 2026 (published 30
    September 2026, after the review this page relied on).
11. **CJC-1295 vote count.** `src/content/compounds/en/cjc-1295.mdx` line 341 (Compare, US column).
    Before: "In December 2024, FDA advisers voted 0–13 against pharmacy use." After: "In December 2024, FDA advisers
    voted against pharmacy use for every form: 0–13, or 1–12 for one salt." Reason: the page's own fold and its
    regulatory note give 1–12 for the acetate.
12. **Sport page: the "unclear" peptides.** `src/content/pages/en/legal/sport-and-doping.mdx` lines 115–116.
    The page's table listed only Semax as unclear, while Selank, PT-141, SS-31 and thymosin alpha-1 are `unclear` in
    their data and pages (PT-141 changed on 23 October), and its row "Other peptides that no health authority has
    approved: banned under S0" does not cover approved ones.
    - "Semax | … It is registered as a medicine in Russia, so S0 may not apply." → "Semax, Selank | … They are
      registered as medicines in Russia, so S0 may not apply." Added cite `deigin-2022-russian-peptides`.
    - New row: "PT-141, SS-31, thymosin alpha-1 | Not by name | Unknown. Each is approved as a medicine in at least
      one country, so S0 does not cover it. WADA says other sections still can. Ask your anti-doping organisation."
      Cites `fda-drugsatfda-vyleesi`, `fda-drugsatfda-forzinity`, `ema-orphan-thymalfasin-eu-3-02-110`,
      `fda-pcac-2024-thymosin-alpha-1-briefing`, `wada-2027-list-explanatory-note`.
    The table title ("names eight peptides on this site. Others can still be banned.") is still true.

Tried and reverted: "Can't swallow? Call an ambulance." → "… Call your local emergency number." in
`src/i18n/en/explainers.json` (`insulin-glp1-hypo`). The caption's reading ease fell from 62 to 53 (validator
warning). Keeping it above 60 would have meant dropping "confusion" from the hypo signs. File restored byte for byte.

## Found, not fixed

- **German anti-doping law, two renderings of "nicht geringe Menge".** The compound pages say "more than a small
  amount" (aod-9604.mdx line 164, hexarelin.mdx line 164, cjc-1295.mdx line 370, ipamorelin.mdx line 394). The DE
  page (legal/de.mdx lines 9, 39, 147, 151, 163, 170, 173), whats-changing.mdx line 166, tracker.json line 54 and the
  glossary entry `anti-doping-gesetz` say "a large amount". The glossary entry `nicht-geringe-menge` says "not a
  small amount … this amount or more". It is one legal threshold set per substance by the Dopingmittel-Mengen-
  Verordnung. This is a legal-wording choice: the legal reviewer should pick one phrase, for example "more than the
  set amount".
- **"Call an ambulance"** in the semaglutide hypo explainer (explainers.json lines 33 and 35) and on
  warning-signs.mdx lines 47, 92 and 149, where it sits next to "call your local emergency number". No number is
  printed, so §1 is met. Only the explainer uses it alone. See the reverted change above.
- **The sport page has no row for GHK-Cu**, which is `unclear` in its data because of a US device clearance and
  its use as a cosmetic ingredient. A reader of the row "Other peptides that no health authority has approved:
  banned under S0" could take GHK-Cu to be banned, but the GHK-Cu page says "unknown". It needs a judgement on
  whether a device clearance counts; left for the legal reviewer.
- **The UK in the "experimental" wording.** `beginner.json` (`experimental`: "Not approved as a medicine in the
  EU, the UK or the US") and `compound.json` (`experimentalGroup`) apply to every experimental compound. The data
  files for aod-9604, ghk-cu, hexarelin, mots-c, selank and semax have no UK row (EU, NL, US and WADA only).
  Selank's and Semax's pages state the UK themselves. For the other four the UK claim has no UK-specific source.
  Either add UK rows (MHRA products database) or accept the generic wording.
- **Validator warnings that were already there** (16, unchanged): semaglutide.mdx summary item 4 (25 words), lede,
  a key-number title and a time-strip title below reading ease 60; pages.json intros for glossary, sources, news
  and search; the media.json caption `human-pancreatic-islet`; the four KPV false positives. Semaglutide is the
  worked example and other workstreams own the UI strings, so these were left.
- **Two long sentences on the start page** (B1 guide page, not safety or legal): start-here.mdx line 150 (33 words,
  the STEP 1 sentence) and line 178 (27 words, the Thuisarts sentence). Could be split.
- **Semaglutide's 503B sentence** (semaglutide.mdx line 409) says "In April 2026". That is consistent after change
  8, but less exact than tirzepatide's "On 30 April 2026". Optional.

## Verification

- `npx tsx scripts/validate-content.ts`: 0 errors, 16 warnings, the same 16 as before this sweep.
- Private `astro build --outDir <scratch>/sweepb/dist`: 138 pages. `check-html`: 0 errors, 1 warning (the root
  redirect has no `<header>`, as before). `check-no-commerce`: passed. The built HTML shows every change: the
  sport-page rows, "30 April 2026" and the EU/UK/US wording on what's changing, the new tracker links (MOTS-c,
  GHK-Cu), the BPC-157 summary and the Croatian lab "US dentists" row.
