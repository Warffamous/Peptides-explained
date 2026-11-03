# Final sweep, area "strings" (28 October 2026)

Files: `src/i18n/nl/**` (not tracker.json, timeline.json), the existing `src/data/sources/nl-*.yaml`, and
`docs/STYLE-NL.md` (given to this area for the sweep). No page edited, no English file touched, no new source
file, no allowlist change. Compare with `research/nl-notes/_baseline-step5/`.

Checks after the changes: `npx tsx scripts/validate-content.ts --only nl`: 0 errors, 18 warnings (word-count
aims and DOI notes, none from these edits); `--only glossary`: 0 errors, 0 warnings;
`npx tsx scripts/check-locale-residue.ts --only nl --details`: 0 hits. Glossary scan (47 Dutch files, 796 ids):
0 duplicate ids, 0 forms shared by two entries, 0 `see_also` ids missing.

## What changed

- **STR-03 / LS-21** `explainers.json` contamination-infection: "rubberen dop" -> "rubberen stop" in step 1, the
  summary and the label ("Rubberen stop\nvan een flacon", line break kept).
- **STR-04** `explainers.json` glp1-action.summary: "En het helpt mensen minder te eten." -> "Mensen eten er minder
  door." Caption and the rest unchanged.
- **STR-05** (and ST-01, same string) `compound.json` authorised.noProducts: "Er is geen product met een
  handelsvergunning voor Nederland of de hele EU. Daarom staat hier geen Nederlandse productinformatie." STR-05's
  wording was used (two short sentences; "de hele EU" as in STR-06). Shown only by `AuthorisedProducts` when no NL
  or EU product is listed: pt-141, ss-31, tesamorelin (research/nl/status/*.yaml: no EU product; tesamorelin's
  application withdrawn 2012).
- **STR-06** `vocab.json` jurisdictionInSentence.EU: "de EU" -> "de hele EU" ($comment updated). Checked every use
  (`src/lib/approval.ts`: approvedIn, formerIn, notApprovedIn, none, badgeSome, explainSome, explainFormer, fact
  sheet approvedNot, compounds index experimentalGroup; `organ-cards.json` ui.notApproved): "Goedgekeurd in
  Nederland en de hele EU.", "Niet goedgekeurd in Nederland of de hele EU.", "Niet goedgekeurd als medicijn in
  Nederland of de hele EU", "Niet in Nederland of de hele EU". "Alleen in {jurisdiction}" can never get "de hele
  EU": no compound has an EU row authorised and the NL row not. jurisdictionShort.EU stays "EU". Thymosin alpha-1
  now reads "Goedgekeurd in Italië, … Niet goedgekeurd in Nederland of de hele EU."
- **STR-07 / LS-45 / LS-46 / LS-44** glossary:
  - safety-b `deletion-sequence`: aliases "ingekorte sequentie(s)" removed; in the definition "(een ingekorte
    sequentie)" -> "(een afgebroken sequentie)", the STYLE-NL §2.5 word.
  - tirzepatide `insulin-glargine`: alias "langwerkende insuline" removed.
  - stubs-a `pineal-gland`: alias "pijnappelklieren" added.
  - stubs-b `barth-syndrome`: term "syndroom van Barth", alias "barthsyndroom" (plus Barth-syndroom, BTHS).
  - stubs-b `novel-food`: see_also + `union-list-novel-foods`.
  - stubs-b `dermis`: aliases "opperhuid" and "epidermis" removed (they name the other skin layer).
  - history `accelerated-approval`: term "versnelde goedkeuring"; aliases versnelde goedkeuringen, accelerated
    approval, accelerated approvals, accelerated approval pathway.
  - basics `boxed-warning`: term "zware waarschuwing"; aliases zware waarschuwingen, boxed warning, boxed warnings,
    black box warning.
  - melanotan-ii `amide-end` and tirzepatide `c-terminal-amide`: each in the other's see_also (both ids kept).
  - guides `named-patient-route`: see_also lost the English-only ids special-medicinal-product,
    special-access-program, special-access-scheme.
  - guides `informed-consent`: alias "toestemming" removed. Note: the entry has `autolink: false`, so the alias
    never linked on a page; it did show on the glossary page ("(informed consent, toestemming)") and would link if
    autolink were switched on.
  - ipamorelin `qt-prolongation`: "hartfilmpje (ecg)" -> "hartfilmpje (ECG)" (LS-45 d). Thuisarts re-read today:
    "Dat kan met een hartfilmpje (ECG)." The page fixers already wrote "ECG" on cjc-1295, retatrutide and ss-31, so
    the glossary was the last "ecg". T-01 (translator) can still switch all four at once.
  - final-qa `anabolic-agent`: "in onderdeel S1" -> "in groep S1".
- **LS-43** digits in captions and alt texts: media.json 12 mid-sentence counts (2 spitse torens, 2 vlaggen, 8
  dunne punten, 2 handvatten, 4 hoektorens, 2 lege schalen, 2 laatjes, 2 handen, 2 ovale mitochondriën, 2 vormen
  van B3, 4 poten, Dezelfde 4 organen); organ-cards.json "op 2 receptoren", "op 3 receptoren" ("vier vijfde" is a
  fraction and stays); evidence.json few-groups "Het meeste werk kwam van 2 tot 4 groepen." (the old sentence opened
  with the number); infographics.json "met 3 organen in kleur". Words kept at the start of a sentence. Kept on
  purpose: media.json three-measuring-scales caption "op vier schalen" (hero of evidence-grading, where "vier
  vragen" stays in words as the page's named concept: learn fixer LS-39 and the evidence-a check) and evidence.json
  "deze vier". Word counts unchanged.
- **STR-08** source notes (additive, every quote re-read today: Dutch PDFs with pdftotext, web pages fetched):
  - `ema-pi-wegovy-nl`: 4.2 (buik, dij, bovenarm; niet intraveneus of intramusculair), 4.4 "Terugvinden herkomst",
    4.6 (2 months), 4.8 heart rate, 5.2 (89%, comparable exposure at the three sites, > 99% albumin, 3% in urine,
    about 7 weeks; tablets 1-2%), 6.4, 6.6, bijsluiter rubriek 5 (28 days below 30 °C; FlexTouch 6 weeks). The
    sunlight sentence ("Wegovy dat aan direct zonlicht is blootgesteld mag u niet injecteren.") is not in rubriek 5
    but in the FlexTouch instructions for use ("Uw pen onderhouden"); the note says so.
  - `ema-pi-mounjaro-nl`: 4.5 oral contraceptives (59/55/66% Cmax, not clinically relevant, no adjustment), 4.6,
    4.8 heart rate (3 to 5 vs 1 per minute), 6.6. The item's "4.4 traceability" is not in the Mounjaro SmPC (grep
    for "Terugvinden", "herkomst", "batchnummer": none); it is the Wegovy line (safety-c cites Wegovy 4.4 for it).
    The note says so.
  - `igj-geneesmiddelenreclame-wat-is`: the gunstbetoon sentences, reciprocity, paid lectures and advice within
    maximum hourly rates with a written agreement, the Transparantieregister Zorg sentence.
  - `dopingautoriteit-vertaling-dopinglijst-2026`: M2 heading and the M2.2 text.
  - `nvwa-cosmetica-toezicht`: "Krijgt u bij gebruik van cosmetica last van jeuk, uitslag of blaasjes? Ga naar uw
    huisarts voor medisch advies."
  - `nl-mvt-2003-geneesmiddelenwet`: the §4.3 criteria sentence and the next one.
  - `thuisarts-hypo-diabetes-type-2`: last sentence now "Cited for the signs, the action levels and what helpers
    do" (Thuisarts re-read: signs and "Laatst gewijzigd: 14 jul 2026" unchanged).
  `accessed` dates and titles left as they are.
- **STR-01** `docs/STYLE-NL.md`: (a) §5.2 already had the brief's publisher line word for word with both ids (an
  earlier merge of this sweep); added "(owner decision pending on wording and placement)". The placement it names
  is true (about, about/editorial-policy, legal/nl). (b) §7 already listed the 31 tokens (now counted in the text);
  added the Dutch idioms of merge §9 ("op prijs stellen", "op de koop toe", "afrekenen met"; with English "order":
  "tot nader order", "een order van de rechter") and SH-21. SH-21 had not reached `scripts/lib/load.ts` when this
  log was written, so §7 says to check `NON_COMMERCE_PHRASES` and that it still held only English phrases on 28
  October.
- **STR-02** `docs/STYLE-NL.md` §2: most "Style terms" had been merged into §2 before this fixer started (§8 item
  6). Added or settled here: strict liability's B1/UI form ("“strict liability”: je bent zelf verantwoordelijk voor
  wat er in je lichaam zit", beside the term risicoaansprakelijkheid); accelerated approval "versnelde goedkeuring
  (de Amerikaanse route accelerated approval)", glossary terms named for it and for boxed warning; ontheffing (IGJ,
  artsenverklaring route), vrijstelling (IGJ, shortages, Regeling art. 3.17a), machtiging (insurer), and
  "artsenverklaring" only for the IGJ route (also corrected "the ontheffing exists since 9 September 2025" to "the
  IGJ uses the word since 9 September 2025", nl-care fact 21); a Belgian-words row (be-notes §7.3: FAGG, VHB,
  dokter van wacht, wachtpost, Antigifcentrum, adviserend arts, ziekenfonds, machtiging, minnelijke schikking,
  parket; BE notes only); the ui-safety row (lymfevaten, necrotiserende fasciitis, rabdomyolyse, benauwd, scheve
  mond, leververvetting) and the ui-media row (juridische boeken, sporten); and three recurring terms from group
  notes not yet in the sheet (veiligheidssignaal · periodiek veiligheidsrapport; regressie naar het gemiddelde;
  internationale generieke naam (INN), klonteren (aggregatie)). Points 2, 3, 6, 8, 11 and kruimelpad,
  beeldverantwoording, webhost, toediening, legenda were already in the sheet. §8 item 6 records all of this.

## Skipped, and why

- **STR-02 point 1 (Russia: "goedgekeurd", never "toegelaten")**: not applied. The sheet already had a merged
  row "toegelaten", and the page fixers of this sweep (legal, learn, site, compounds-a, compounds-b, from items
  LS-01 to LS-04) made every Dutch page say "in Rusland als medicijn toegelaten" (grep today: 0 pages with
  "goedgekeurd" for Russia). Switching the sheet would make it contradict all pages. I first changed the row, then
  restored it when the page logs showed the result. Raised as a translator decision.
- **STR-02 point 5 ("GLP-1-middelen" for the class)**: not applied, same reason. The pages use "GLP-1-achtig
  middel / GLP-1-achtige middelen" (safety pages, tirzepatide) and the site fixer turned the last two
  "GLP-1-middelen" into "GLP-1-medicijnen" (LS-19). The sheet keeps the merged row.
- **STR-02 "leave ecg vs ECG to the translator"**: the sheet row was "hartfilmpje (ECG)" from the earlier merge and
  all pages now say "ECG"; the row now says T-01 may still change it everywhere. LS-45 (d) applied to the
  glossary for the same reason (see above).
- **ST-01**: same string as STR-05; STR-05's wording used.
- **LS-21, LS-45 (a, c), LS-46 (a)**: duplicates of STR-03, STR-07 (b, c, f); done once.

## For other owners

- English (not edited): `src/i18n/en/glossary/safety-b.json` `deletion-sequence` also treats a truncated sequence
  as a kind of deletion sequence ("or stops too early (a truncated sequence)"), while the EMA synthetic-peptides
  guideline lists them separately (basics-a notes). The Dutch definition keeps the same meaning (only the word
  changed); a medical reviewer may want both definitions narrowed.
- compounds-b: `nad-precursors.mdx` says the M2.2 exception covers "medisch onderzoek om een diagnose te stellen";
  the Dutch translation says "klinisch onderzoeken" (WADA English: "clinical diagnostic investigations"). Close
  enough in meaning; noted only.
- shared: SH-21 (Dutch idioms in `NON_COMMERCE_PHRASES`) had not landed at the time of writing; STYLE-NL §7 is
  worded so it stays true either way.

## Check (independent, 2026-10-27)

Second agent, assuming errors. Compared every file with `research/nl-notes/_baseline-step5/` (`diff -ru`); read the
brief's "Added after step 1", STYLE-NL §2, §3, §5.2, §6, §7 and §8 item 6, and the sweep input items for this area.
English files: `git status --short src/content/pages/en src/content/compounds/en src/i18n/en` is empty.

**Sources re-read today** (fresh downloads in a new folder, `pdftotext`; web pages fetched):
- `ema-pi-wegovy-nl`: 4.2, 4.4 "Terugvinden herkomst", 4.6 (2 maanden), 4.8 (3 bpm from 72 bpm), 5.2 (89%, the
  three sites, > 99% albumin, 3% in urine, about 7 weeks, tablets about 1-2%), 6.4, 6.6, leaflet rubriek 5 (28 days
  below 30 °C; FlexTouch in use 6 weeks) and the sunlight sentence under "Uw pen onderhouden" in the FlexTouch
  instructions: all word for word. ("plasma-albumine" is split over a line in the PDF; the hyphen is right Dutch
  spelling and kept.)
- `ema-pi-mounjaro-nl`: 4.5 (single 5 mg dose; 59/55/66%; not clinically relevant), 4.6, 4.8 "Hartslag" (pooled
  placebo-controlled phase 3 T2DM, 3 to 5 vs 1 per minute), 6.6: word for word. No "Terugvinden", "herkomst" or
  "batchnummer" anywhere in the text, so the note's "no traceability paragraph" holds. No Dutch page cites Mounjaro
  for the batch number (product-risk cites `ema-pi-wegovy-nl`).
- `igj-geneesmiddelenreclame-wat-is`, `nvwa-cosmetica-toezicht`, `thuisarts-hypo-diabetes-type-2` (signs,
  "Laatst gewijzigd: 14 jul 2026", 112 and spoed lines, helpers), `nl-mvt-2003-geneesmiddelenwet` (§4.3 criteria
  and the next sentence): all as quoted.
- `dopingautoriteit-vertaling-dopinglijst-2026`: M2 heading and "Het volgende is verboden:" hold, but M2.2 reads
  "Intraveneuze infusies en/of –injecties", not "en/of injecties". **Fixed** in the note.
- Thuisarts hartkloppingen: "Dat kan met een hartfilmpje (ECG)." (STYLE-NL ECG row, LS-45 d).

**UI strings and glossary:** STR-03 to STR-06, STR-07, LS-43 to LS-46 hold. `noProducts` is rendered only when
`visibleProducts` is empty (`AuthorisedProducts.astro`), which is PT-141, SS-31 and tesamorelin (EU
not-authorised, investigational, withdrawn 2012; NL never authorised), so the new sentence is true wherever it
shows. "de hele EU": every caller of `jurisdictionList` (approval.ts, CompoundIndex, OrganCards) reads correctly;
no compound has EU authorised without NL, and only `discontinued` makes a "former" row, which no EU row has.
Glossary scan (47 files, 796 ids): 0 duplicate ids, 0 shared forms, 0 missing `see_also`, 0 straight apostrophes,
0 everyday-word forms, no definition over 400 characters; the short codes that autolink (GRADE, PEP, PRIME, spin)
appear on pages only in their own sense. The glp1-action summary and caption pass the advertising test as a
mechanism text (no praise, the stomach and brain effects with their evidence level; the page's fold carries the
SmPC lines).

**STYLE-NL:** the §5.2 publisher line is the brief's text word for word; the ontheffing / vrijstelling /
machtiging row matches nl-care facts 20-21 and conflicts 5 (both sections); the Belgian row matches be-notes §7.3;
the strict-liability form matches `tracker.json`; grep confirms the Russia row ("toegelaten" on every Dutch page,
no "goedgekeurd" or "geregistreerd"), the GLP-1 row (no "GLP-1-middel(en)" left), the ECG row (no "ecg") and the
vial-stopper row (no "rubberen dop"). 31 Dutch commerce tokens counted in `config/commerce-tokens.json`.
**Fixed:** §7 said SH-21 had not landed; `scripts/lib/load.ts` now exempts "op de koop toe", "op prijs stellen"
(and "stel … op prijs"), "tot nader order", "afrekenen met" and "te koop lopen met". §7 now lists them and says
"een order van de rechter" is not exempt. (The "For other owners" line above about SH-21 is therefore out of date.)

**Fixed (digits, STYLE-NL §3):** LS-43 covered captions, alt texts, organ cards, evidence and the infographic, but
21 mid-sentence counts in glossary definitions were still words while the pages use digits (1.273 digit counts
against 73 word forms, mostly fixed phrases). Changed to digits: bpc-157 fistula; cjc-1295 covalent-bond,
trough-level; ipamorelin pentapeptide, anastomotic-leak; kpv alpha-msh, tripeptide, pept1 (2); melanotan-ii mc3r;
nl eea; pt-141 systolic-blood-pressure (2), odds-ratio, lactam-bridge; retatrutide triple-agonist; semaglutide
incretin, dpp-4; tb-500 heptapeptide, ac-sdkp; tirzepatide dual-agonist, hazard-ratio. Kept as words: "een paar
honderd woorden", "die twee" (tb-500 free-base-and-salt), "deze vier", "alle vier", "vier vijfde", "vier schalen".

**Left open (not changed, reported):**
- `product-check.json` `keep.text` "Een lab kan testen wat erin zat.": safety-c suggested "Een arts kan het dan
  laten onderzoeken."; no Dutch public service tests a peptide vial (nl-help facts 40-41), and the suggested
  sentence has no source either. Medical decision.
- stubs-b2's item to add the EU novel-food status to the NMN and NR glossary definitions: not done (a glossary
  definition cannot carry a citation; the NAD+ page states it with sources).
- melanotan-ii's item: `cbg-gib-search-status-2026-10-27` links the tesamorelin search; a separate id for the
  melanotan search needs a new source entry. Not done.
- Translator decisions STR-D1 (Russia "toegelaten"), STR-D2 (GLP-1 class wording) and T-01 (ECG / ecg) stand.

Checks after the fixes: `validate-content --only nl` 0 errors, 18 warnings (word-count aims, unchanged);
`--only glossary` 0 errors, 0 warnings; `check-locale-residue --only nl --details` 0 hits.

## Check (independent, 2026-10-27)

Second independent check of this area (the workflow was resumed; the "Check" section above is the first one and
stays). Assumed errors. Compared every strings-area file with `research/nl-notes/_baseline-step5/` (`diff -ru`),
read the brief's "Added after step 1", STYLE-NL §2.4, §3, §5.2, §6, §7 and §8 item 6, and the items for this area
in `_final-sweep-input.md`. English files: `git status --short src/content/pages/en src/content/compounds/en
src/i18n/en` is empty.

**Sources re-read in this check** (fresh downloads in a new scratch folder; PDFs with `pdftotext`, web pages fetched
with curl):
- `ema-pi-wegovy-nl`: every new quote found word for word (4.2, 4.4 "Terugvinden herkomst", 4.6, 4.8 "3 slagen per
  minuut (bpm) ten opzichte van een uitgangswaarde van 72 bpm", 5.2 89%, the three sites, 3% in urine, about 7
  weeks, tablets "ongeveer 1-2%", 6.4, 6.6, leaflet rubriek 5 "maximaal 28 dagen bij een temperatuur beneden
  30°C", FlexTouch "Na ingebruikname: 6 weken", and the sunlight line under "Uw pen onderhouden"). The PDF breaks
  "plasma-/albumine" over a line (`pdftotext -raw`), so the hyphen in the note is right.
- `ema-pi-mounjaro-nl`: 4.5 (59/55/66%, "niet als klinisch relevant beschouwd", no adjustment), 4.6 (anticonceptie,
  "ten minste één maand", breastfeeding "kan ... worden overwogen"), 4.8 "Hartslag" (3 tot 5 spm, placebo 1), 6.6:
  all as quoted. "Terugvinden", "herkomst" and "batchnummer": 0 hits, so "no traceability paragraph" holds.
- `igj-geneesmiddelenreclame-wat-is` (gunstbetoon, reciprocity, lectures and advice, maximum hourly rates, written
  agreement, Transparantieregister Zorg), `nl-mvt-2003-geneesmiddelenwet` (§4.3 criteria and the next sentence; the
  1963 sentences), `thuisarts-hypo-diabetes-type-2` ("Laatst gewijzigd: 14 jul 2026", 3,9, the signs, 112 when
  unconscious, the helpers), `dopingautoriteit-vertaling-dopinglijst-2026` (M2 heading, M2.2 with "en/of
  –injecties", S1 "Alle verboden stoffen in deze groep"), Thuisarts hartkloppingen ("hartfilmpje (ECG)"): all hold.
- `nvwa-cosmetica-toezicht`: the note joined two sentences that are not next to each other on the page. **Fixed:**
  the middle sentence ("Dan bent u misschien allergisch voor een stofje dat in de cosmetica zit.") is now in the
  quote.
- `dopingautoriteit-vertaling-dopinglijst-2026`: the note said M2.2 was re-read "for the NAD+ and SS-31 pages", but
  only nad-precursors cites the infusion rule (ss-31 cites this id for S0 and S2). **Fixed** in the note.

**UI strings and glossary:** STR-03 to STR-07 and LS-43 to LS-46 hold, and so do the 21 glossary digit changes of
the first check. `noProducts` renders only when no NL or EU product row is visible (`AuthorisedProducts.astro`,
`visibleProducts`): PT-141, SS-31, tesamorelin (research/nl/status: EU not-authorised, investigational, withdrawn
2012; NL not authorised); semaglutide has 6 EU rows, tirzepatide 1. "de hele EU": every `{list}` string reads
right ("Goedgekeurd in minstens één van deze: Nederland en de hele EU" on the compounds index is wordy but correct);
Italy's Zadaxin is the reason (thymosin-alpha-1 status file). **Fixed:** the `$comment` of `beginner.json` still gave
"Nederland en de EU" as the list form; it now says "de hele EU". Glossary scan (47 files, 796 ids): 0 duplicate
ids, 0 shared forms, 0 missing `see_also`, 0 straight apostrophes, 0 everyday-word forms, 0 definitions over 400
characters. Removed aliases were right: "langwerkende insuline" would have linked "de langwerkende insuline icodec"
on semaglutide; "toestemming" stands on 13 Dutch pages, often in another sense (ss-31: a trial's "toestemming voor Nederland"). Pages use "syndroom
van Barth" (22 times), "zware waarschuwing (boxed warning)" and "versnelde goedkeuring". No "u" or "uw" in any
Dutch UI string. LS-43 kept "vier schalen" in the evidence-grading hero caption; editorial-policy writes "4 schalen"
and "4 vragen", evidence-grading "vier vragen" (learn area's choice, noted only).

**STYLE-NL:** §5.2 is the brief's line word for word, on about, about/editorial-policy and legal/nl (whats-changing
has only the middle sentence). §7: 31 tokens in `config/commerce-tokens.json`; the `NON_COMMERCE_PHRASES` list in
`scripts/lib/load.ts` matches the sheet, and "een order van de rechter" is indeed not exempt. The ontheffing /
vrijstelling / machtiging row matches nl-care facts 20, 21 and 28; the Belgian row matches be-notes §7 ("Suggested
data changes"); the strict-liability form matches `nl-legal-sport-changing.yaml` (`dopingautoriteit-dopingovertredingen`)
and ui-history. Greps confirm the Russia row (every Russia line says "toegelaten"), no "GLP-1-middel(en)", no
lowercase "ecg", no "onderdeel/klasse S…", no "rubberen dop". The two skipped STR-02 points were right to skip: the
sheet must match the pages.

**Not changed, reported:**
- `compound.sections.harm-reductionAuthorised` ("Veilig en legaal gebruiken"): `Section.astro` picks it from the
  data's `category: authorised` (a US approval), so the Dutch PT-141, SS-31 and tesamorelin pages carry this title
  and lose `harmReductionIntro` (no doses, no seller, not advice), although none of them is authorised in NL or the
  EU. The fix belongs in `Section.astro` (use the locale's approval), which no sweep area owns (sweep-shared SH-01).
  Changing the shared string would also retitle semaglutide and tirzepatide. Owner decision.
- `product-check.json` keep.text "Een lab kan testen wat erin zat.": no Dutch public service tests a peptide vial
  (nl-help facts 40-41). Medical decision.
- `retatrutide.json` `expanded-access` says "In de VS een legale route"; the retatrutide page uses the term for a
  programme whose availability "hangt af van het land". Not wrong (the term is the FDA's), optional to widen.
- NMN and NR definitions (stubs-b2 item) still give no EU novel-food status; optional, and a dated status in a
  tooltip goes stale.
- The "For other owners" line above about SH-21 is out of date (SH-21 has landed).

Checks after the fixes: `validate-content --only nl` 0 errors, 18 warnings (word-count aims, unchanged);
`--only glossary` 0 errors, 0 warnings; `check-locale-residue --only nl --details` 0 hits (also 0 for `i18n/nl`);
all 65 Dutch JSON files parse.
