# Final sweep: area "safety" (28 October 2026)

Files: `src/content/pages/nl/safety/**`. No new source file and no allowlist change were needed. No heading changed.

## Changed

- **SA-01** `before-you-consider.mdx` (Compare row "Aangetoond bij mensen?", US column): "Onbekend" after
  `<Verdict is="unknown" />` printed "Onbekend Onbekend". Now: "Of het bij mensen gebeurt, is niet vastgesteld",
  same Cite. Checked today in both FDA labels (PDF text): Ozempic 209637s038 and Wegovy 218316s007 boxed warning,
  "It is unknown whether ... causes thyroid C-cell tumors ... in humans as the human relevance ... has not been
  determined."
- **HR-12** `if-something-goes-wrong.mdx` "### België" (heading kept): the 4 sentences with 1733, the
  Antigifcentrum number and the FAGG became the brief's short line: "Woon je in België? Bel bij levensgevaar ook
  daar 112. De Belgische diensten staan in de kaart hieronder, en meer in [de korte notities over België](/nl/legal/be/)."
  Cite `be-112-andere-noodnummers` (research/nl/be-notes.md fact 25). `<JurisdictionCards which="notes" />` stays;
  the BE card lists the dokter van wacht, the Antigifcentrum and the FAGG (jurisdictions.yaml). 070 245 245 and
  1733 now appear on /nl/legal/be/ only.
- **HR-13** stop-level wording for a mild rash ("Stop en maak een afspraak met je huisarts", vocab
  `warningAction.stop`, STYLE-NL §5.1): injection-safety TL;DR item 1 and Lead "Allergische reacties";
  if-something-goes-wrong TL;DR item 3. Exact wording from the item.
- **LS-17** injection-safety fold: "galbulten" -> "jeukende bulten (netelroos)" (STYLE-NL §2.5, Thuisarts).
- **LS-27** first mention, full name: if-something-goes-wrong TL;DR item 6 now "Bijwerkingencentrum Lareb" and
  "Inspectie Gezondheidszorg en Jeugd (IGJ)" (the item's full wording, 18 words); injection-safety and
  sharps-disposal "Thuisarts, de site van het Nederlands Huisartsen Genootschap (NHG)".
- **LS-32** warning-signs: "drie labels / Het label" -> "drie niveaus / Het niveau"; "De labels volgen" ->
  "De niveaus volgen" (STYLE-NL §2.8).
- **LS-36** product-risk: ICH Q6B "handleiding" -> "richtlijn"; the EMA's "eigen handleiding" -> "eigen
  wetenschappelijke richtlijn" (STYLE-NL §2.4, as on basics/what-is-a-peptide).
- **LS-42** digits (STYLE-NL §3): if-something-goes-wrong "2 mensen" (2x), "5 situaties"; monitoring caption
  "in 5 stappen"; product-risk caption "op 3 plekken"; sterile-technique "Er zijn 2 soorten:", "6 problemen".
  Also warning-signs "behandelden artsen 2 mensen": the same Stammers 2026 fact as on if-something-goes-wrong, not
  in the item list, changed so the two pages match.

## Skipped (part of LS-42)

- monitoring frontmatter TL;DR "Voel je je ziek tussen twee controles?": "tussen twee controles" means "between
  check-ups", a fixed phrase, not a count. "tussen 2 controles" would read as a number.
- injection-safety "Met twee handen een dop terugzetten": "met twee handen" (two-handed recapping) is a fixed
  manner phrase set against "maar één hand"; "met 2 handen" reads oddly.
- Not touched: "De twee soorten water" (sterile-technique Compare detail) and "Over de andere twee" (product-risk)
  are references back to a group, like "alle drie de studies"; "De drie niveaus van hulp" is a heading (§4.3 example).

## Checks

- `npx tsx scripts/validate-content.ts --only nl`: 0 errors. One new warning that I caused:
  if-something-goes-wrong `tldr: 124 words (aim for 120 or fewer)`, under the hard limit of 140. It comes from
  LS-27's full names (+5 words). The item's shorter option ("Bijwerkingencentrum Lareb" only, IGJ short) would
  stay at 120 but leaves IGJ before its full name. Kept the full wording (STYLE-NL §2.7 is a rule; 120 is an aim).
- `npx tsx scripts/check-locale-residue.ts --only nl --details`: 0 hits.

## Check (independent, 2026-10-27)

Checked every change in `diff -ru research/nl-notes/_baseline-step5/src/content/pages/nl/safety src/content/pages/nl/safety`
(8 files, 21 changed lines) against the fixer's report. No change needed fixing; I edited no page.

- **SA-01** (before-you-consider, Compare row "Aangetoond bij mensen?"): right. Re-read today on DailyMed (Ozempic
  label, "Revised: 5/2026", the same revision as `fda-label-ozempic` 209637s038): "It is unknown whether OZEMPIC
  causes thyroid C-cell tumors ... in humans as human relevance of semaglutide-induced rodent thyroid C-cell tumors
  has not been determined." The new cell says the same and no longer prints "Onbekend" twice next to
  `<Verdict is="unknown" />`. Same Cite, ids exist (semaglutide.yaml).
- **HR-12** (if-something-goes-wrong, `### België`, heading kept): right, and it follows the brief (Belgium = one
  short line or a link, no Belgian paragraph). 112.be/nl/andere-noodnummers re-read today: 112 "Ambulance en
  brandweer", "gratis, 24u/24". `be-112-andere-noodnummers` exists (nl-research-be-notes.yaml) and supports the
  line. The BE card under it (`<JurisdictionCards which="notes" />`, jurisdictions.yaml BE) lists the dokter van
  wacht 1733, the Antigifcentrum and the FAGG reporting page, so "De Belgische diensten staan in de kaart
  hieronder" is true. 1733 and 070 245 245 are still on /nl/legal/be/ (`## Hulp en contact in België`), so nothing
  was lost. The intro line "met een korte noot voor België aan het eind" and warning-signs line 72 still fit.
- **HR-13**: right. The new wording is the STYLE-NL §5.1 "binnen een paar dagen" phrase and `vocab.json`
  `stop`. The two signs behind it, "Jeukende, bobbelige uitslag ... ademhaling normaal" and a changing mole,
  both have `action: stop` in `src/i18n/nl/warning-signs.json`, and the allergy diagram body already said "maak een
  afspraak met je huisarts". Word counts: injection-safety TL;DR item 1 = 17, Lead = 17, if-something-goes-wrong
  item 3 = 14 (limit 18). Minor, not changed: "flauw" on its own in injection-safety TL;DR item 1 (the body and
  warning sign say "je flauw voelen"). In this list it reads as "faint". "of flauw voelen" would make 19 words.
- **LS-17**: right. STYLE-NL §2.5 row "hives: jeukende bulten (netelroos)"; the Egrifta label's hypersensitivity
  list includes urticaria (`dailymed-egrifta-sv-label`, English page: "rash and hives"). Same wording as the Dutch
  compound pages.
- **LS-27**: right. STYLE-NL §2.7 (Bijwerkingencentrum Lareb; Inspectie Gezondheidszorg en Jeugd (IGJ); "het
  Nederlands Huisartsen Genootschap (NHG) · Thuisarts", Thuisarts is the NHG's patient site). TL;DR item 6 = 18
  words (at the limit). The box total of 124 words is a warning (aim 120, max 140), not an error. Leaving it is fair.
- **LS-32**: right (STYLE-NL §2.8: a help level is a "niveau", never "label"). No "label(s)" left in safety prose.
- **LS-36**: right (STYLE-NL §2.4 row "EMA scientific guideline · ICH guideline": "wetenschappelijke richtlijn
  van het EMA", "internationale richtlijn (ICH)", not "handleiding"). Same as basics/what-is-a-peptide.
- **LS-42**: right (STYLE-NL §3). The extra warning-signs change ("2 mensen", Stammers 2026) is the same fact as on
  if-something-goes-wrong. It does not change the fact, and the two pages now match. Both skips are fair: "tussen
  twee controles" (between check-ups) and "Met twee handen" (two-handed, set against "maar één hand") are not counts. The
  words left are at the start of a sentence or caption (Twee, Drie, Vier, Zes), in the heading "De drie niveaus
  van hulp" and the lines that refer to it, or a pointer back to a group ("De twee soorten water", "de andere twee").

Rules: "je" throughout, no "u"; B1 wording; no product praised, no dose, no seller, no foreign help route (the
only Belgian content is one line plus the notes card). No `##`/`###` heading changed (the diff shows no `+#`/`-#`
line). Links: `/nl/legal/be/` exists. All 10 anchors that Dutch pages, strings and components link into /nl/safety/
(for example `#hulp-en-melden-in-nederland`, `#wat-een-labrapport-wel-en-niet-zegt`, `#wanneer-je-een-flacon-weggooit`,
`#na-een-prikaccident`) still match a heading on the target page (grep, 28 October 2026).
`git status --short src/content/pages/en src/content/compounds/en src/i18n/en` is empty.

Runs (28 October 2026): `npx tsx scripts/validate-content.ts --only nl`: 1 error and 18 warnings. The error is in
src/content/compounds/nl/retatrutide.mdx (`<OrganCards>` cites ema-2026-10-under-evaluation, which the page cites
nowhere else). That file belongs to area compounds-a, not to this area. The only warning in this area is the
if-something-goes-wrong TL;DR at 124 words (above). `npx tsx scripts/check-locale-residue.ts --only nl
--details`: 0 hits.

Still open in this area, not on the item list and not caused by the sweep: on sterile-technique the TimeStrip
labels end in "(WHO)" and "(CDC)" before the body gives the full name (safety-b, "Minor").
