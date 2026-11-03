# Final sweep, area "compounds-a" (28 October 2026)

Files: `src/content/compounds/nl/{semaglutide,tirzepatide,retatrutide,tesamorelin,bpc-157,tb-500,kpv}.mdx`. No
headings (`##`, `###`) renamed, no new source file, no allowlist change, no English file touched. Compare with
`_baseline-step5/` (`diff -ru`).

## Checked today

- FDA, "July 23-24, 2026: Meeting of the Pharmacy Compounding Advisory Committee" (`fda-pcac-2026-07-meeting`),
  re-fetched 28 October 2026, just after midnight Dutch time: "Content current as of 08/06/2026". Event Materials list
  only the briefing documents, webcast information, questions, final agenda, final roster and the FDA presentations of
  both days. No minutes, no vote summary, no transcript. This matches the bpc-157 check of 27 October. The pages
  therefore say "27 oktober 2026", as Semax and KPV already did.
- EMA Dutch SmPC of Wegovy (local copy of the 27 October download): section 4.8 "Dysesthesie", and "In STEP UP werden
  dysesthesie-gerelateerde verschijnselen gemeld bij 21,6% … en 0,3%". This supports the LS-15 wording.
- research/nl/nl-help.md fact 17 and §4.1 (pancreatitis: the site is faster, keep `emergency`), fact 16 (113 via
  `thuisarts-psychische-crisis`), fact 10 (hives or swollen lips or eyes with normal breathing: an appointment). Source
  notes `nhs-acute-pancreatitis` and `nhs-vision-loss` (safety-a.yaml). `src/i18n/nl/warning-signs.json`:
  `pancreatitis` and `sudden-vision-loss` are `emergency`; `hives-swelling`, `lump-not-going` and `changing-mole` are
  `stop`.
- research/nl/status/semaglutide.yaml and tirzepatide.yaml `indications_nl_from_smpc` ("Gewichtsbeheersing").
- research/nl/nl-law.md §5 item 10 and fact 48 (KPV and S0: write "ask").

## Changed

- **CA-01 retatrutide.** (b) The Compare cell now reads `<Verdict is="no" /> |`, so it no longer says "Nee Nee".
  (a) The 3 cites of `ema-2026-10-under-evaluation` are now `ema-under-evaluation-2026-10`, and the combined cite has no
  duplicate. **One bridge is left.** `src/data/organ-cards/retatrutide.yaml` still has
  `EU: [ema-medicines-json, ema-2026-10-under-evaluation]`: SH-04 has not landed. The validator needs every organ-card
  source to be cited on the page. So the what-it-is paragraph (the sentence about the list of 5 oktober 2026) cites
  `ema-under-evaluation-2026-10,ema-2026-10-under-evaluation`. Once the organ card uses the new id, delete
  `,ema-2026-10-under-evaluation` from that one cite. Then the source list shows the EMA spreadsheet only once.
- **CA-02 semaglutide, tirzepatide.** Both ledes now read "voor diabetes type 2, en om af te vallen en op gewicht te
  blijven. Online flacons zijn iets anders." The TL;DR is unchanged. The validator warns that the ledes are 23 and
  24 words (it aims for 18). That is within the 25-word limit of CONTENT-GUIDE §9.1. A shorter lede would have to drop
  the SmPC wording or the line about online vials.
- **CA-03 / LS-20(b) tirzepatide.** The callout title "Zoek nu medische hulp" is now "Zoek direct medische hulp".
- **CA-04 bpc-157** (and **tb-500**, which has the same sentence and is in this area). "Op/De FDA had op 20 oktober 2026 …
  verslag/notulen" now says 27 oktober 2026. The Federal Register sentence that followed with "op dezelfde datum" or
  "op die datum" now says "Op 20 oktober 2026" itself, because that search (`federalregister-503a-search-2026-10-20`)
  was not repeated.
- **HR-01** semaglutide, tirzepatide and retatrutide: the pancreatitis line in the stop callout now uses the item's
  wording ("Stop met semaglutide en bel direct 112." / "Stop met tirzepatide en bel direct 112." / "Stop en bel direct
  112."). `nhs-acute-pancreatitis` was added to each callout's Cite, and `thuisarts-buikpijn` was kept.
- **HR-02 semaglutide.** The NAION line now uses the item's wording, and `nhs-vision-loss` was added to the Cite.
- **HR-07 bpc-157.** The closing lines of the stop callout now use the item's wording, with 3 levels: 112, bel direct,
  and an appointment.
- **HR-10 tirzepatide.** The 113 line was added, worded exactly as on semaglutide, with `thuisarts-psychische-crisis`.
- **HR-11 tesamorelin.** "Is de praktijk dicht? Bel dan de huisartsenpost." now appears in both places.
- **LF-07 kpv.** The item's wording now stands at regulatory_notes.WADA, in the sport fold ("Toch is het volgens de
  tekst van de lijst verboden."), in the sport summary and in the avoid list. All cites were kept.
- **LS-03** bpc-157, tb-500 and kpv: Semax is "in Rusland als medicijn toegelaten".
- **LS-06** bpc-157: "onderzoekersdossier".
- **LS-07** tb-500: "aanwijzing als weesgeneesmiddel" in 3 places.
- **LS-09:** "groep S0" (retatrutide, semaglutide, tirzepatide) and "groep S2" (tesamorelin).
- **LS-12 semaglutide.** The first mention is now "De veiligheidscommissie van het EMA (PRAC)" (the NAION sentence
  in the comparison of the product information). Later mentions say "de veiligheidscommissie (van het EMA)". No
  "veiligheidscomité" is left.
- **LS-15.** (a) tesamorelin: "Jeukende bulten (netelroos)". The glance stop sign "Bultjes, dik gezicht of keel,
  moeilijk ademen" is now "Jeukende bulten, …" (8 words), as in the STYLE-NL §2.5 tile. This is an extension in the
  same file. (b) retatrutide: "hartfilmpje (ECG)". (c) semaglutide: "vreemde gevoelens in de huid (dysesthesie)" on
  first use, then "vreemde gevoelens in de huid".
- **LS-20(a) tirzepatide.** "GLP-1-agonist(en)" in the 5 mechanism and study places. The Canadian line now says
  "niet-goedgekeurde of nagemaakte GLP-1-achtige middelen".
- **LS-22** kpv (2 places) and retatrutide: "besmet product".
- **LS-26.** retatrutide: “lifecoach”, “waarschijnlijk” (curly doubles inside frontmatter). tesamorelin: "alleen voor
  onderzoek" ("research use only").
- **LS-34.** bpc-157: "eerdere congresabstracts". semaglutide and kpv: "Is het legaal in Nederland?".
- **CA-05 / LS-37 (digits).** Counts from 2 up, and every number with a unit, are now digits in body text, studies,
  glance tiles, Lead and TL;DR lines, fold titles and figure attributes. Spelled-out number words, baseline → now
  (the remaining ones are the exceptions listed below): retatrutide 62 → 20, semaglutide 41 → 11, tesamorelin 43 → 2,
  tb-500 54 → 12, kpv 38 → 6, bpc-157 19 → 16, tirzepatide 3 → 3 (tirzepatide already followed STYLE-NL §3). Sentences that started with a number were rephrased where the
  meaning stayed exact:
  - "Er vallen 4 dingen op:", "Er zijn er 6 afgelopen, en 3 lopen nog:", "Bij 4 mensen die …".
  - "Ook 2 nieuwere producten …", "Bij het EMA liggen 3 aanvragen …".
  - "Er zijn 3 belangrijke gaten.", "Er kwam 20 jaar lang geen beslissende studie.".
  - "Ook stopten 2 lange veiligheidsstudies vroeg." (TimeStrip title).
  - "- roodheid en zwelling op de prikplek, 9 dagen lang, …".
  Two numbers that ended up side by side were split: "6 gevallen … sinds januari 2026", and "7 peptiden, op 2
  vergaderdagen" (the bpc-157 wording, on tb-500 too).
  Kept as words, following STYLE-NL §3:
  - sentence starts that could not be rephrased without changing the meaning ("Drie producten die in Australië …",
    "Twaalf vrouwen …", "Negen mensen …", "Vier kleine verslagen …", "Twee verwante medicijnen …");
  - "alle drie (de)", "alle vijf", "Alle tien/acht/negen open vragen";
  - fractions ("twee derde", "vier vijfde");
  - pronoun uses without a noun ("de twee overlapten", "welke van de twee");
  - the idiom "twee kanten";
  - ages ("midden twintig");
  - YAML comments;
  - the parallel title and caption "Eén molecuul, drie receptoren" (retatrutide mechanism step 1 and the diagram
    caption), where digits would give "Eén …, 3 …".
  Every TL;DR, Lead, tile and caption stays within its limits (validator).

## Skipped

- **CA-03, the tesamorelin half** ("Stop en zoek hulp" → "Stop en zoek hulp als je dit merkt"). STYLE-NL §2.1 (the row
  for stop callout titles) and §8 item 6 fix "Stop en zoek hulp" as the translation of the English "Stop and get help",
  "as the English page has it". English tesamorelin (and pt-141) have "Stop and get help". The current Dutch title
  follows the style sheet. If the owner wants one title on every page, pt-141 (compounds-b) has to change too.
- **CA-04, the kpv half.** Already done before the sweep. The page says "Op 27 oktober 2026 had de FDA nog geen
  schriftelijk verslag gepubliceerd. Haar pagina over de vergadering was sinds 6 augustus 2026 niet meer bijgewerkt." My
  re-fetch today confirms this.

## Left for others

- **Shared (SH-04).** Switch `src/data/organ-cards/retatrutide.yaml` `status_local_sources.EU` and
  `src/data/explainers.yaml` line 234 to `ema-under-evaluation-2026-10`. Then delete the bridge
  `,ema-2026-10-under-evaluation` from the one cite in the retatrutide what-it-is paragraph (see CA-01).
- **Shared.** The accessed date of `fda-pcac-2026-07-meeting` (shared.yaml) is still 2026-10-20. The pages now state a
  check of 27 October.
- **Editor (not in any item).** The kpv regulatory Lead still says "Het is nergens goedgekeurd en verboden in de sport."
  The glance sport tile follows the data row (prohibited, S0). After LF-07 the body text says "Volgens de tekst van S0".
  If the editor wants the Lead to carry that hedge too, the answer could be "Het is nergens goedgekeurd. Volgens de
  dopinglijst is het verboden in de sport." The data row question is already in the final-sweep input.
- **Medical (existing open question, not changed).** The tesamorelin stop callout still sends hives or flushing after an
  injection to "bel direct". warning-signs.json `hives-swelling` is `stop`, and HR-07 now sets that level on bpc-157.

## Check (independent, 2026-10-27)

Checker of area "compounds-a". Every change was compared with `_baseline-step5/` (`git diff --no-index --word-diff`).
No `##`/`###` heading changed and the internal links are the same as in the baseline in all 7 files (checked
by script). `git status --short src/content/pages/en src/content/compounds/en src/i18n/en` is empty.

### Re-checked today

- FDA PCAC meeting page (`fda-pcac-2026-07-meeting`), WebFetch: "Content current as of 08/06/2026"; 14 Event
  Materials (7 briefing documents, introduction, webcast, questions, agenda, roster, FDA presentations of both
  days); no minutes, vote summary or transcript. This supports "op 27 oktober 2026" on bpc-157, tb-500 and kpv, and
  kpv's "sinds 6 augustus 2026 niet meer bijgewerkt". shared.yaml now has accessed 2026-10-27, so the "Left for
  others" item about that date is done.
- NHS "Vision loss" (`nhs-vision-loss`), WebFetch: 999/A&E if you "suddenly cannot see from 1 or both eyes"; urgent GP
  or 111 for "changes in your vision". This supports HR-02 (112 for sudden loss; bel direct for vision that gets worse
  fast). Only the Dutch routes are printed.
- IGJ "Online medicijnen" (`igj-online-medicijnen`), WebFetch: "Als het medicijn verontreinigd is, kan dat uw organen
  beschadigen".
- research/nl/nl-help.md fact 17 and §4.1 (pancreatitis: site keeps `emergency`, faster than Thuisarts), fact 10
  (swelling or hives with normal breathing: appointment), fact 16 (113); `warning-signs.json` pancreatitis and
  sudden-vision-loss `emergency`, hives-swelling `stop`. HR-01, HR-02, HR-07, HR-10 and HR-11 match these levels and
  the cited sources. `nhs-acute-pancreatitis`, `nhs-vision-loss`, `thuisarts-psychische-crisis` exist.
- research/nl/nl-law.md §5 item 10 (KPV and S0: "ask").
- docs/STYLE-NL.md as it stands now (it was being edited during this check): "toegelaten" for Semax in Russia (every
  Dutch page now says so), "onderzoekersdossier", "aanwijzing als weesgeneesmiddel", "groep S0", "GLP-1-agonist" (term)
  and "GLP-1-achtige middelen" (class), "besmet", "hartfilmpje (ECG)", "jeukende bulten (netelroos)", "vreemde
  gevoelens in de huid (dysesthesie)", "afvallen en op gewicht blijven", stop callout titles as in English
  (tirzepatide "Get medical help now" → "Zoek direct medische hulp"; tesamorelin "Stop and get help" → "Stop en zoek
  hulp"), §3 digits. The fixer's changes follow these rows. The tesamorelin skip (CA-03) is correct.
- The digits pass (CA-05/LS-37): no sentence or list item opens with digits; the spelled-out numbers left are
  sentence starts, "alle drie/vijf/acht…", fractions, pronoun uses, ages and the "Eén molecuul, drie receptoren"
  parallel. Verdict cells render their own word (`Verdict.astro`), so CA-01(b) is right.
- English bpc-157: "a thousand-fold apart" (→ "1.000 keer") and "nine days" (→ "9 dagen lang").

### Fixed by the checker

- **retatrutide (CA-01 bridge).** SH-04 has landed: `src/data/organ-cards/retatrutide.yaml` now has
  `EU: [ema-medicines-json, ema-under-evaluation-2026-10]` (and `NL: [cbg-gib-search-status-2026-10-27]`, already cited
  on the page), and explainers.yaml uses the new id. The bridge `,ema-2026-10-under-evaluation` is deleted from the
  what-it-is cite. No content file cites the old id any more; the source list shows the EMA spreadsheet once.
- **semaglutide (LS-22, missed place).** "Is het product vervuild? Dan kan dat volgens de IGJ …" → "besmet" (STYLE-NL
  §2.6: "vervuild product" is the doping term; IGJ says "verontreinigd").
- **tesamorelin (LS-15, first use).** The first mention of hives is in the hypersensitivity paragraph, not the stop
  callout: "netelroos en uitslag" → "jeukende bulten (netelroos) en uitslag". The callout keeps "(netelroos)" too,
  because readers land there directly via #stop-now.
- **kpv Lead (fixer's "Left for others", same file as LF-07).** "Het is nergens goedgekeurd en verboden in de sport. De
  Amerikaanse stemming van 2026 was alleen een advies." → "Het is nergens goedgekeurd en volgens de dopinglijst
  verboden in de sport. De Amerikaanse stemming was alleen advies." (18 words, the Lead limit). This is the LF-07
  hedge; the body, the WADA note and the avoid list already say it. The glance sport tile still follows the data row.
- **kpv stop callout (same level as bpc-157 HR-07 and tb-500).** After "Wordt je keel dik of gaat ademen moeilijk? Bel
  dan direct 112." added: "Alleen jeukende bulten, een dik gezicht of dikke lippen, en adem je normaal? Stop dan met
  het product en maak een afspraak met je huisarts." Source already cited below the callout
  (`thuisarts-dikke-ogen-lippen`: swelling without other symptoms, appointment on a working day); level as
  `warning-signs.json` hives-swelling (`stop`) and nl-help fact 10. This answers the kpv writer's medical question 1
  the way the other two pages now do; the medical reviewer can still change all three together.

### Validators

- `npx tsx scripts/validate-content.ts --only nl`: 0 errors, 18 warnings. In this area only the semaglutide (23) and
  tirzepatide (24) ledes warn; both are under the 25-word lede limit of CONTENT-GUIDE §9.1.
- `npx tsx scripts/check-locale-residue.ts --only nl --details`: 0 hits.

### Still open (not changed)

- PRAC later mentions: STYLE-NL §2.7 says "het PRAC" after the first mention; semaglutide writes "de
  veiligheidscommissie (van het EMA)". That reads more easily (B1) and is not wrong; left for the style owner.
- STYLE-NL §8 item 6 still opens with "Russia … goedgekeurd" as history, while the §2.4 row and every page say
  "toegelaten". For the style owner.
- Medical: pancreatitis now at 112 on the 3 GLP-1 pages (site faster than Thuisarts, nl-help §6 question 1); the 113
  line now on tirzepatide as well as semaglutide; tesamorelin hives and flushing still at "bel direct" (warning-signs
  `stop`).
