# Final sweep: area "site" (28 October 2026)

Files: `src/content/pages/nl/{index,start-here,talking-to-your-doctor,the-case-for-reform}.mdx`,
`compounds/index.mdx`, `about/**`. No new source file, no allow-list change. No heading renamed.
Checks after the edits: `validate-content.ts --only nl` 0 errors (16 warnings, none in this area);
`check-locale-residue.ts --only nl --details` 0 hits.

## Changed

- **ST-01** `compounds/index.mdx`: prescription cell "Ja, en de apotheek geeft het je mee." -> "De apotheek geeft
  het je mee." (`<Verdict is="yes">` already prints "Ja"). Cite kept.
- **ST-02 (a)** `the-case-for-reform.mdx` (retatrutide paragraph): cite `ema-2026-10-under-evaluation` ->
  `ema-under-evaluation-2026-10` (same EMA xlsx; research/nl/eu-status.md fact 5 cites this id for "not on the
  5 October 2026 list"). The id exists in `src/data/sources/pt-141.yaml`, so the page is fine before or after SH-04.
- **LF-03** `about/editorial-policy.mdx` (Rechtbank Amsterdam): the item's wording, word for word ("... met
  semaglutide-medicijnen op recept. Bij een ervan, goedgekeurd voor diabetes, ging het om gebruik buiten de
  goedkeuring (off-label). De artikelen noemden niet alle bijwerkingen en contra-indicaties ..."). Checked today
  against ECLI:NL:RBAMS:2026:5160 via data.rechtspraak.nl: 2 products; off-label use of the one whose SmPC
  indication is diabetes (7.7); the magazine article did name some side effects (7.5); the court found "(alle)"
  side effects and contraindications missing (7.7, 7.11). No brand or publisher named. Cite kept.
- **LS-02** `start-here.mdx` FAQ: "In Rusland is Semax als medicijn goedgekeurd." -> "... toegelaten." (STYLE-NL
  §2.4 Russia row, §5.4, §8 item 6).
- **LS-19** `talking-to-your-doctor.mdx` 2x "GLP-1-middelen" -> "GLP-1-medicijnen" (STYLE §2.5; the fact cites the
  Wegovy SmPC, an authorised medicine). `start-here.mdx` KeyNumber: "medicijnprogramma’s" -> "ontwikkeltrajecten"
  in label and counted (STYLE §2.3). In the label "werd uiteindelijk goedgekeurd" became "eindigde in een
  goedkeuring", because a traject is not approved (same verb as the prose above it). Numbers unchanged.
- **LS-29** `the-case-for-reform.mdx` proposals table: first mention "Bij Lareb" -> "Bij Bijwerkingencentrum Lareb".
- **LS-31** `about/editorial-policy.mdx`: caption "labels" -> "bewijsniveaus"; table head "Label op de pagina" ->
  "Bewijsniveau op de pagina"; AI images "het label" -> "de vermelding" (STYLE §2.1, §2.8).
- **LS-40** digits (STYLE §3), typographic only; words kept at sentence start, in decades ("jaren vijftig") and
  ordinals ("tweede"):
  - `the-case-for-reform.mdx` (9): description "6 legale voorstellen"; "meer dan 5 jaar (mediaan)"; "3 flacons";
    "3 producten"; "de 10 vervalste peptidemedicijnen"; "Of die 2 dingen samenhangen"; caption "Onze 6 ideeën";
    "besprak 7 peptiden en adviseerde er 6" (as start-here already says). The item counted 6; the rule gives 9.
  - `about/editorial-policy.mdx`: "4 dingen", "4 vragen", fold title "De 4 schalen", "De 4 aparte beoordelingen",
    caption "De 6 bewijsniveaus", "over 2 medicijnen op recept", "een studie 2 medicijnen"; "In twee richtingen"
    became "In beide richtingen" (the English says "In both directions").
  - `about/funding.mdx`: "Er zijn 2 uitzonderingen"; "maximaal 6 maanden".

## Skipped

- **ST-02 (b)** (Semax "toegelaten" -> "goedgekeurd" on the reform page): wrong. The current STYLE-NL §2.4 row
  "registered as a medicine (Russia)" and §8 item 6 fix **toegelaten** and rule out "goedgekeurd"; LS-02 goes the
  same way. The reform page already says "Semax is in Rusland toegelaten als medicijn." Left as it is.

## For the owner (reform page, decision O-04)

All reform-page changes above are wording or typography only: the cite id (a), Lareb's full name, 9 digits.
Two things I did not change, for the owner to decide:
- KeyNumber (Wong 2019) says "ontwikkelprogramma’s"; STYLE §2.3 and start-here / the-translation-gap say
  "ontwikkeltrajecten".
- Table row "Veelbelovende stoffen wachten soms jaren op een sponsor": "veelbelovend" in our own voice
  (STYLE §2.3, §5.6), next to a BPC-157 cite.

## Left for the final review (not in my items)

- `about/editorial-policy.mdx` "waar het veelbelovend is" (evidence direction, not a compound; on English).
- LF-03 wording "Bij een ervan" kept exactly as given; STYLE §3 would write "één" for the number one.

## Check (independent, 2026-10-27)

Checked every change above with `diff -ru` against `research/nl-notes/_baseline-step5/` (only the 6 files named above
differ; `index.mdx`, `about/index.mdx` and `about/corrections.mdx` are unchanged). `git status --short` on
`src/content/pages/en`, `src/content/compounds/en` and `src/i18n/en` is empty. No `##`/`###` heading changed in any
site file (heading lists compared with the baseline). InDetail titles make no anchor (`InDetail.astro` takes an `id`
prop only), so "De 4 schalen" breaks no link.

- **ST-01** right: `<Verdict is="yes">` prints "Ja" (`figures.json` `verdict.yes`), so "Ja, en ..." doubled it.
- **ST-02 (a)** right: `ema-under-evaluation-2026-10` exists (`src/data/sources/pt-141.yaml`), same EMA xlsx as
  `ema-2026-10-under-evaluation` (retatrutide.yaml); research/nl/eu-status.md conflict 10 and section 7 pick this id;
  `compounds/index.mdx` already cites it for the same retatrutide fact. Its note still speaks of bremelanotide only
  (the widening is a shared-area item, `_final-sweep-input.md` line 748).
- **ST-02 (b)** skip is right: STYLE-NL §2.4 row "registered as a medicine (Russia)" and §8 item 6 fix "toegelaten".
- **LF-03** right. Re-read today on data.rechtspraak.nl (ECLI:NL:RBAMS:2026:5160): 2 products, both semaglutide
  (the ruling names only the brands; both are semaglutide medicines); off-label use of the one whose SmPC has the
  diabetes indication (7.7); the magazine article did mention a side effect (7.5), and the court found "niet (alle)
  mogelijke bijwerkingen en contra-indicaties" covered (7.11). So "noemden niet alle" is right and "ontbraken de
  bijwerkingen" was too strong. No brand, publisher or amount on the page. **Fixed:** "Bij een ervan" ->
  "Bij één ervan" (STYLE §3: "één" for the number one in prose; the fixer left this open).
- **LS-02** right (STYLE §2.4 "in Rusland als medicijn toegelaten"); cites unchanged.
- **LS-19** right: "GLP-1-medicijnen" is for authorised ones (STYLE §2.5), and both sentences cite the Wegovy SmPC.
  "ontwikkeltrajecten" follows STYLE §2.3 and §8 item 6; "eindigde in een goedkeuring" matches the prose above it.
  Numbers (13,8%, 41.040, 2000 tot 2015) unchanged.
- **LS-29** right (STYLE §2.7: first mention "Bijwerkingencentrum Lareb"). The section on reporting (line 259) repeats
  the full name; not wrong, left.
- **LS-31** right (STYLE §2.1 and §2.8: a claim badge is a "bewijsniveau", an image tag a "vermelding"); the quoted
  text "Illustratie gemaakt met AI" matches `media-ui.json` `ai`.
- **LS-40** right: every changed number is 2 or more and not at a sentence start; "In beide richtingen" matches the
  English "In both directions". Grep of all site files for spelled-out numbers: the rest open a sentence, a caption
  or a Lead ("Zes", "Drie", "Vijf", "Vier", "Twee"), or are "jaren vijftig"/"duizenden": all allowed by STYLE §3.
- **Fixed (the fixer left it for the owner):** reform KeyNumber (Wong 2019) "ontwikkelprogramma’s" -> "ontwikkeltrajecten"
  in label and counted, as STYLE §2.3 says ("also in KeyNumbers") and start-here now says. Label now "van de
  ontwikkeltrajecten met onderzoek bij mensen eindigde in een goedkeuring: ongeveer 1 op de 7" (a traject is not
  "getest"). Numbers unchanged. Wording only: part of owner decision O-04.

Checks after my edits: `validate-content.ts --only nl`: 1 error, 18 warnings, none in this area. The error is
`src/content/compounds/nl/retatrutide.mdx` (compounds-a): the page now cites `ema-under-evaluation-2026-10`, but
`src/data/organ-cards/retatrutide.yaml` (shared) still cites `ema-2026-10-under-evaluation`, so `<OrganCards>` cites
an id the page no longer cites. Fix in the shared area (organ card to the kept id) or in compounds-a.
`check-locale-residue.ts --only nl --details`: 0 hits.

Still open, for the owner or final review (not changed):
- Reform table row "Veelbelovende stoffen wachten soms jaren op een sponsor" (English "Promising compounds"):
  "veelbelovend" in our own voice (STYLE §2.3), in a row that cites the BPC-157 FDA briefing. Owner decision.
- `about/editorial-policy.mdx` "waar het veelbelovend is": about evidence, not a product; the same word is used on
  evidence pages and bpc-157 (other areas). Final review.
