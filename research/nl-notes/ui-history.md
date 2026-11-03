# Notes: ui-history (Dutch UI strings: timeline, tracker, explainers), 27 October 2026

Files written: `src/i18n/nl/timeline.json`, `src/i18n/nl/tracker.json`, `src/i18n/nl/explainers.json`.
Followed `research/nl-spec/content-brief.md` and `docs/STYLE-NL.md` ("je", B1, fixed terms, Dutch numbers and
dates, curly quotes in JSON). No English file was touched. Status: translation, `review: pending` (a medical
translator and, for the explainers, the medical reviewer still have to read them).

Validation: `npx tsx scripts/validate-content.ts --only i18n/nl` gives 0 errors and no warnings in these three
files (the 3 warnings are in `src/i18n/nl/pages.json`, another assignment's file). All three files parse with
`JSON.parse`; UTF-8, LF line endings.

## What is in each file

- **timeline.json: 29 events**, every event the Dutch locale shows (jurisdictions `[]`, NL, EU, WADA; `isVisible`
  in `src/lib/jurisdictions.ts`), in the order of the English file. Source text: the current English strings (they
  are the split, fact-checked versions of 24 October; the EU events `exenatide-approval-eu`, `liraglutide-approval`,
  `semaglutide-approval-eu`, `wegovy-approval-eu`, `tirzepatide-approval-eu` do not exist in the 23 October
  snapshot, which still held the combined FDA-plus-EU texts under the US ids). The snapshot text of the NL, EU and
  WADA events that existed on 23 October is identical to the current English text.
- **tracker.json: 5 items**, every item the Dutch locale shows: `eu-pharma-reform`, `wada-2027-prohibited-list`,
  `wada-2027-code`, `wada-glp1-monitoring`, `nl-igj-online-sellers`. Same keys per item as English (`title`,
  `summary`, `next`).
- **explainers.json: all 9 explainers**, same ids, same keys, same number of steps, same label keys, in the same
  order as English. Every step caption and every `caption` is 18 words or fewer (counted with the validator's
  word rule); the summaries are B1 as well.

## Keys omitted (not visible on nl)

Allowed by the assignment: these items are tagged only with jurisdictions the Dutch locale does not show, so
`<Timeline>` and `<ChangeTracker>` never render them on `/nl/`.

- **timeline (45):** us-food-drug-cosmetic-act-1938 [US], au-mcbride-letter [AU], kefauver-harris-1962 [US],
  ca-thalidomide-withdrawn [CA], uk-committee-on-safety-of-drugs [UK], au-drug-evaluation-committee [AU],
  uk-yellow-card [UK], au-adverse-reaction-reporting [AU], ca-adverse-reaction-reporting [CA],
  uk-medicines-act-1968 [UK], recombinant-human-insulin [US], leuprolide-approval [US], octreotide-approval [US],
  au-therapeutic-goods-act [AU], us-accelerated-approval [US], uk-mhra-formed [UK], exenatide-approval [US],
  liraglutide-approval-us [US], tesamorelin-approval [US], tesamorelin-approval-ca [CA], semaglutide-approval [US],
  semaglutide-approval-ca [CA], bremelanotide-approval [US], semaglutide-approval-au [AU],
  afamelanotide-approval-us [US], wegovy-approval [US], wegovy-approval-uk [UK], glp1-shortages [US],
  tirzepatide-approval [US], tirzepatide-approval-uk [UK], tesamorelin-ca-no-longer-sold [CA],
  tirzepatide-approval-ca [CA], tirzepatide-approval-au [AU], fda-category-2-peptides [US], falsified-ozempic-uk
  [UK], zepbound-approval [US], au-bpc-157-schedule-4 [AU], glp1-shortages-end [US],
  uk-illicit-factory-retatrutide [UK], unlicensed-supply-seizures [UK], ca-peptides-advisory-2026 [CA],
  au-peptides-compliance-priority [AU], fda-pcac-2026-vote [US], au-counterfeit-retatrutide-2026 [AU],
  uk-counterfeit-pens-2026 [UK].
- **tracker (13):** us-pcac-2026-peptide-vote [US], us-pcac-2027-meeting [US], us-503a-interim-categories [US],
  us-503b-glp1-exclusion [US], us-ruo-warning-letters [US], uk-mhra-weight-loss-raids [UK],
  uk-high-risk-wellbeing-procedures [UK], ca-hc-injectable-peptides-enforcement [CA], au-personal-import-packaging
  [AU], au-tga-peptide-compliance-priority [AU], au-nsw-medicines-law-2026 [AU], au-advertising-code-review [AU],
  de-doping-list-gazette [DE].

**For the integrator, before nl is published:** `scripts/validate-content.ts` (the block after "for (const loc of
localeCodes)", around line 739) requires text for *every* timeline and tracker item once a locale is `published`,
not only the visible ones. While nl is `preview` this is silent (and the preview falls back to English for missing
keys, which are never rendered anyway). At publication either the check should test only `isVisible` items, or the
45 + 13 hidden keys need Dutch text. This is a decision for the owner or the integrator, not for this assignment.

## Country-dependent strings to check

Each of these carries a Dutch or EU fact, a help level or a Dutch service. All were written from the fact-checked
research of 27 October 2026 and/or re-read today (table below), but they must be re-checked against `research/nl/`
when the data merge lands, in case a source id or date moves.

| Key | What to check | Basis |
|---|---|---|
| `timeline.nl-wog-1958.text` | the 1958 act: register of packaged medicines, test "aannemelijk ... werking" and "niet schaadde", ban on selling unregistered ones | source `nl-wog-1958` (history.yaml note, art. 3) |
| `timeline.nl-geneesmiddelenwet-2007.text` | act of 8 February 2007, in force 1 July 2007, replaced the 1958 act | source `nl-geneesmiddelenwet-2007-version` note |
| `timeline.exenatide-approval-eu.text` | EU authorisation 20 November 2006, withdrawn at the holder's request 1 January 2026 | source `ema-epar-byetta` note |
| `timeline.falsified-ozempic-alerts.text` | names the IGJ as the Dutch regulator that warned (source `igj-2023-falsified-ozempic`, 25 October 2023) | research/nl/eu-status.md section 7 confirms the event date 18 October 2023 |
| `timeline.wada-bpc157-s0.text`, `tracker.wada-2027-prohibited-list.summary` | the Dopingautoriteit's Dutch name of S0, “Niet erkende stoffen” (STYLE-NL §2.4, from the 2026 translation) | STYLE-NL §8 |
| `tracker.eu-pharma-reform.summary` and `.next` | political agreement 11 December 2025; Council position published 1 October 2026; second reading pending; EMA expects 2028; indicative plenary 23 November 2026 | research/nl/eu-status.md facts 28–30 (see "Possible refinement" below) |
| `tracker.wada-2027-prohibited-list.summary` | Dutch frame: the UK Anti-Doping sentence of the English text is replaced by the Dopingautoriteit's: full Dutch translation from 1 January 2027 on its website and in the Dopingwaaier app (local source NL `dopingautoriteit-2027-list-news`) | re-read today, see table |
| `tracker.wada-2027-code.summary` | the Dutch names “Wereld Anti-Doping Code” and “dispensatie (TUE)” | re-read today; STYLE-NL §2.4 |
| `tracker.nl-igj-online-sellers.summary` | 114 reports (2024), 187 (January to early October 2025), 150 sites investigated, “tientallen” removed; IGJ may warn or fine a website that offers or advertises illegal medicines to Dutch consumers | re-read today; research/nl/nl-law.md facts 26–27 |
| `explainers.insulin-glp1-hypo.steps[5]`, `.summary`; `explainers.glp1-class-hypo.steps[5]`, `.summary` | "Lukt slikken niet? Bel 112." where English had "call your local emergency number" (brief: Dutch prints 112). Thuisarts says 112 when unconscious, and huisarts or huisartsenpost at once when not responding well or confused; the site keeps its faster level, as research/nl/nl-help.md fact 17 records | research/nl/nl-help.md facts 12, 17; Thuisarts re-read today |
| `explainers.contamination-infection.summary` | help levels: spreading redness, red lines, fever or feeling very ill → "Bel dan direct je huisarts of de huisartsenpost"; confusion, very fast breathing, blotchy skin → "Bel dan 112" | research/nl/nl-help.md fact 11 (Thuisarts wondroos, sepsis: "bel direct"); the 112 line is the site's faster level for the NHS sepsis signs (fact 17) |
| `explainers.contamination-infection.steps[5]`, `.caption`, `.labels.help` | "Zoek direct hulp" / "Zoek snel medische hulp" (generic; the summary names the services) | as above |
| `explainers.insulin-glp1-hypo.steps[4]`, `explainers.glp1-class-hypo.steps[4]` | "zoals de productinformatie aanraadt": on nl the explainer cites the EU product information (`local_sources.EU`: Ozempic SmPC 4.2 "should be considered"; Mounjaro SmPC 4.2 "may be considered") | src/data/explainers.yaml |
| `explainers.incretin-three-receptors.summary` | "Op 20 oktober 2026 had geen enkel land het als medicijn goedgekeurd" (world statement kept from English, with its date; research/nl/status/retatrutide.yaml: EU and NL investigational on 27 October 2026) | research/nl/status/retatrutide.yaml |

## Checked today (27 October 2026), with the wording relied on

| URL (fetched with curl) | Used for | Wording |
|---|---|---|
| https://www.dopingautoriteit.nl/nieuws/2026-09-28_wada-publiceert-dopinglijst-2027 (200) | tracker `wada-2027-prohibited-list` | "De lijst wordt op 1 januari 2027 van kracht."; "De complete Nederlandse vertaling van de WADA Dopinglijst 2027 is vanaf 1 januari 2027 te vinden:"; "In het (sub)menu van de Dopingwaaier App." |
| https://www.dopingautoriteit.nl/code-2027 (200) | tracker `wada-2027-code`: the Dutch name of the Code | "Wereld Anti-Doping Code 2027: Wat verandert er?"; "Per 1 januari 2027 treedt de nieuwe Wereld Anti-Doping Code in werking." |
| https://www.igj.nl/actueel/nieuws/2025/10/30/inspectie-maakt-zich-zorgen-over-toename-van-online-nepapotheken (200) | tracker `nl-igj-online-sellers` (title word "nepapotheken"; numbers; what the reports were about) | "In 2024 ontvingen we 114 meldingen en van januari 2025 tot en met begin oktober 2025 waren dat er al 187. De inspectie deed onderzoek naar 150 van deze websites."; "receptmedicijnen als ADHD-medicatie, opiaten, pijnstillers en slaappillen"; "De IGJ heeft tientallen van deze sites laten verwijderen." |
| https://publications.europa.eu/resource/celex/31993R2309 (200, Dutch) | timeline `ema-founded`: Dutch act and agency names | "Verordening (EEG) nr. 2309/93 van de Raad van 22 juli 1993 ... en tot oprichting van een Europees Bureau voor de geneesmiddelenbeoordeling" |
| https://publications.europa.eu/resource/celex/31965L0065 (200, Dutch) | timeline `eu-directive-65-65` | "Richtlijn 65/65/EEG van de Raad van 26 januari 1965 ... inzake farmaceutische specialiteiten"; art. 3: "mag in een Lid-Staat slechts in de handel worden gebracht als ... een vergunning is afgegeven" |
| https://publications.europa.eu/resource/celex/32001L0083 (200, Dutch) | timeline `eu-directive-2001-83` ("wetboek") | "Richtlijn 2001/83/EG ... tot vaststelling van een communautair wetboek betreffende geneesmiddelen voor menselijk gebruik" |
| https://www.thuisarts.nl/diabetes-type-2/ik-heb-diabetes-type-2-en-mijn-bloedsuiker-is-te-laag (200) | hypo explainers: the word and the 112 level | "Een te lage bloedsuiker noemen we hypoglykemie (een hypo)."; "zoals zweten, trillen en honger"; "112: Iemand moet direct 112 bellen als je bewusteloos bent." |
| https://www.thuisarts.nl/diabetes-type-2/ik-gebruik-medicijnen-bij-diabetes-type-2 (200) | hypo explainers: the example tablet | "Gliclazide is een verlager van het bloedsuiker. Het behoort tot de sulfonylureum-verbindingen." |
| https://www.farmacotherapeutischkompas.nl/bladeren/groepsteksten/sulfonylureumderivaten (200) | the Dutch term "sulfonylureumderivaten" | page title "Geneesmiddelenoverzicht sulfonylureumderivaten" |
| https://www.farmacotherapeutischkompas.nl/bladeren/preparaatteksten/l/leuproreline (200) | timeline `gnrh-sequence`: the Dutch name of leuprolide | "Leuproreline" |

EUR-Lex itself (eur-lex.europa.eu) answered curl with HTTP 202 and an empty body (bot check); the Publications
Office's CELLAR address above serves the same official Dutch text.

## Where the Dutch text differs from the English (for the reviewer)

1. `tracker.wada-2027-prohibited-list.summary`: the English last sentence ("UK Anti-Doping adds that not every banned
   experimental peptide is named on the list", source `ukad-2027-list-summary`, local source UK) is replaced by the
   Dutch frame from the 23 October text, re-checked today: the Dopingautoriteit's Dutch translation from 1 January
   2027 (local source NL `dopingautoriteit-2027-list-news`). This is the replacement the tracker data was built for
   (`local_sources: { UK: [...], NL: [...] }`).
2. `tracker.nl-igj-online-sellers.summary`: English "The reports are not only about peptides." is written as "De
   meldingen gaan over receptmedicijnen in het algemeen, niet speciaal over peptiden." The IGJ article (re-read
   today) names ADHD medicines, opiates, painkillers and sleeping pills and does not mention peptides; the English
   sentence could be read as "some are about peptides". The English text may want the same fix (not touched: the
   English site is live and not this assignment's).
3. `tracker.nl-igj-online-sellers.title`: "Inspectie: meer meldingen over nepapotheken op internet" uses the IGJ's
   own word ("online-nepapotheken") and avoids "verkopers" in a heading (STYLE-NL §7).
4. `timeline.thalidomide-withdrawn.text`: adds "in Europa onder meer als Softenon", the name Dutch readers know.
   Support: `vargesson-2015-thalidomide`, already a source of this event, cited on the English
   history/how-we-got-here page for "sold as Contergan in Germany, Softenon elsewhere in Europe".
5. `timeline.gnrh-sequence.text`: "Leuproreline (in de VS: leuprolide) ... Het werd in 1985 in de VS goedgekeurd."
   The English said "approved in 1985"; the date is the FDA approval of 9 April 1985 (event `leuprolide-approval`,
   hidden on nl), so the Dutch says "in de VS" (world context, no US route).
6. Hypo explainers, step 2: "tabletten zoals gliclazide (sulfonylureumderivaten)". Gliclazide is added as a Dutch
   example (Thuisarts names it as the sulfonylurea for diabetes type 2). The medical reviewer may drop it.
7. Hypo explainers, step 4: "zoals de productinformatie aanraadt" for "as the label suggests" (STYLE-NL: no "label"
   in Dutch text; on nl the explainer cites the EU product information).
8. `explainers.contamination-infection`: "germs" is "bacteriën" (STYLE-NL §2.6); cellulitis is "wondroos" in the
   step (word limit) and "huidinfectie (wondroos)" in the summary; sepsis is explained in the summary (STYLE-NL
   §2.5).
9. `explainers.incretin-two-receptors.summary`: explains "open-label" ("iedereen wist wie wat kreeg") and HbA1c ("een
   maat voor de gemiddelde bloedsuiker"), as STYLE-NL rule 7 asks for B1 text.
10. `tracker.wada-2027-code.summary`: "Strict liability stays" is written as "De hoofdregel (“strict liability”)
    blijft", because no Dutch official term for it was verified today.
11. Numbers follow STYLE-NL §3 literally: digits from 2 up ("2 receptoren", "de laatste 3", "bij 7 vrijwilligers");
    "Drie groepen" spelled out at the start of a sentence.

## Possible refinements (not made; for the owner or the data merge)

- `tracker.eu-pharma-reform`: research/nl/eu-status.md (section 2, point 2, and section 7) adds that the Council
  *adopted* its position on 28 September 2026 (published 1 October), and that the new rules apply 24 months after
  entry into force (the EMA's "2028" is an expectation). Its suggested Dutch text cites
  `council-st-7105-2026-rev2` and `council-st-7106-2026-rev2`, which are not yet sources of this tracker item. The
  Dutch string keeps the English facts, which the research confirms are still correct; add the two sentences when
  the data merge adds those sources.
- `tracker.nl-igj-online-sellers`: research/nl/nl-law.md proposes moving `updated` to 5 October 2026 (minister's
  answers, `tk-2026-ah-249-antwoord-afslankmedicatie`) or 25 February 2026 (SHIELD VI). That would need a matching
  sentence in this string.
- `tracker.wada-2027-code`: research/nl/nl-law.md fact 45 (the Nationaal Dopingreglement changes on 1 January 2027;
  federations hand doping prosecution to the Dopingautoriteit; source `dopingautoriteit-code-2027`) could become a
  Dutch sentence via `local_sources.NL`, or the proposed new item `nl-ndr-2027`.
- New EU events proposed in research/nl/eu-status.md section 7 (tesamorelin-withdrawal-eu,
  eu-falsified-medicines-directive, eu-safety-features, eu-clinical-trials-regulation, semaglutide-naion-eu,
  eu-pharma-reform-agreement, kayshild-approval-eu, wegovy-tablets-eu, eu-council-pharma-position,
  glp1-shortages-eu, ozempic-shortage-end-nl): if the data merge adds any to `src/data/timeline.yaml`, they need
  Dutch text here.
- STYLE-NL has no row for "sulfonylurea"; this file uses "sulfonylureumderivaat" (Farmacotherapeutisch Kompas).
  Suggested row for §2.5: `sulfonylurea | sulfonylureumderivaat (zoals gliclazide) | the Kompas; Thuisarts:
  "sulfonylureum-verbindingen"`. Not added: STYLE-NL is not this assignment's file.
- Titles contain "Nobelprijs" and "Laskerprijs" (an award, not a price). The commerce validator matches whole
  words, so they pass; the one free-standing "prijs" in a body text was changed to "onderscheiding".

## Dropped citations

None. These files hold no `<Cite>`; the sources of each item live in `src/data/` and were not changed.

## Check (independent, 27 October 2026)

Adversarial check of all 43 entries (29 timeline events, 5 tracker items, 9 explainers with every step, caption,
summary and label) against the current English strings, `docs/STYLE-NL.md`, `research/nl/` (with its fact-checks) and
the merged data (`src/data/tracker.yaml` as changed by the merge on 27 October). Key sets, key order, step counts, label
keys and line breaks per label match English; the 45 + 13 omitted keys are exactly the items `isVisible` hides on nl
(recomputed from `timeline.yaml` and `tracker.yaml`). No placeholders or markup exist in these files. No "u", no straight
quotes, no commerce token (the whole-word "prijs" only occurs inside Nobelprijs and Laskerprijs, which are awards).

Validation after the fixes: `npx tsx scripts/validate-content.ts --only i18n/nl`: 0 errors, no warning in these three
files (the 6 warnings are in `pages.json` and `media.json`, other assignments' files); every step caption and caption
is 18 words or fewer. `npx tsx scripts/check-locale-residue.ts --only nl`: 0 hits. All three files pass `JSON.parse`,
UTF-8 without BOM, LF.

### What I changed, and why

**Tracker (country-dependent facts brought in line with the research and the merged data)**

1. `eu-pharma-reform.summary`. Before: "De Raad publiceerde zijn standpunt op 1 oktober 2026 … krijgen de lidstaten een
   overgangsperiode … Het EMA verwacht dat die periode tot 2028 duurt." After: "De Raad stelde zijn standpunt vast op
   28 september 2026 en publiceerde het op 1 oktober 2026. … Treedt de nieuwe wet in werking? Dan krijgen de lidstaten
   24 maanden om hun eigen wetten aan te passen. Pas daarna gelden de meeste nieuwe regels. Het EMA verwacht dat dat in
   2028 is." Why: research/nl/eu-status.md §1 E facts 28–30 and §4 conflicts 1–2 (use 28 September for adoption; write
   "24 months after entry into force"; 2028 only as the EMA's expectation). The merge added `council-st-7105-2026-rev2`
   and `council-st-7106-2026-rev2` to this item, so the facts are cited on nl. "De meeste" because the Regulation lets
   some articles apply earlier (art. 187).
2. `nl-igj-online-sellers.summary`. (a) Added the sentence the merged data asks for (`tracker.yaml`: `updated`
   2026-10-05, new source `tk-2026-ah-249-antwoord-afslankmedicatie`): "In antwoorden aan de Tweede Kamer van 5 oktober
   2026 schreef de minister van Volksgezondheid, Welzijn en Sport (VWS): de IGJ treedt waar mogelijk stevig op,
   bijvoorbeeld door websites uit de lucht te laten halen en boetes op te leggen." (b) "De meldingen gaan over
   receptmedicijnen in het algemeen, niet speciaal over peptiden." became "De meldingen gaan over receptmedicijnen in het
   algemeen. Hoeveel daarvan over peptiden gaan, is onbekend." This keeps the English meaning ("not only about
   peptides") and writes the number as unknown, as research/nl/nl-law.md §5 UNRESOLVED 14 requires.
   **Not used, on purpose:** merge.md §7's suggested sentence "Hoeveel meldingen over peptiden gaan, kan de IGJ niet
   zeggen." The minister's answer 6 (PDF read today) says the IGJ cannot split its figures into the categories the
   question asked for ("off-labelgebruik, online bestelde of vermoedelijk vervalste middelen") of obesity medicines; it
   says nothing about peptides. For the merge owner: research/nl/nl-law.md §5.14 paraphrases the same answer as being
   about peptides; the unknown is right, the attribution to the IGJ's answer is not.
3. `wada-2027-code.summary`. Before: "De hoofdregel (“strict liability”) blijft: … Dan is dat een overtreding …". After:
   "De regel van “strict liability” blijft: je bent zelf verantwoordelijk voor wat er in je lichaam zit. Zit er een
   verboden stof in je monster? Dan is dat een dopingovertreding, wat je bedoeling ook was." Why: "hoofdregel" was an
   invented label; the Dopingautoriteit explains the rule as "Je bent zelf verantwoordelijk voor de aanwezigheid van
   verboden stoffen … in je lichaam" and uses "dopingovertreding" (page read today, below).
4. `wada-2027-prohibited-list.summary`: "staan nu ook peptiden als voorbeeld" → "noemt de lijst nu ook “peptiden” als
   voorbeeld". The English quotes the word the list uses ('peptides'; source note of `wada-2027-list-en`); the Dutch
   lost that.

**Timeline**

5. `falsified-ozempic-alerts.text`: "Binnen een paar dagen waarschuwden ook de IGJ en de Britse medicijnautoriteit" →
   "Ongeveer een week later …". The IGJ warning is dated 25 October 2023 (page read today) and the MHRA's 26 October 2023
   (source note), 7 and 8 days after the EMA's of 18 October; "een paar dagen" was too short.
6. `exenatide-approval-eu.text`: passive "Op verzoek van het bedrijf is die handelsvergunning … ingetrokken" → "Op
   1 januari 2026 trok de Europese Commissie die handelsvergunning in. Het bedrijf had daarom gevraagd." (STYLE-NL §1
   rule 3, say who does it). EMA EPAR page read today: "On 1 January 2026, the European Commission withdrew the marketing
   authorisation … at the request of the marketing authorisation holder".
7. `ema-prime-launched.text`: "Zo gaan de ontwikkeling en de beoordeling sneller." → "Zo moeten … sneller gaan." The
   English gives the purpose ("to speed up"), not a result.
8. `eu-directive-65-65.text`: stiff opening "Richtlijn 65/65/EEG van de Raad is van 26 januari 1965." → "De Raad nam
   richtlijn 65/65/EEG aan op 26 januari 1965." (the act's own title: "Richtlijn 65/65/EEG van de Raad van 26 januari
   1965"; STYLE-NL §4.2 lowercase "richtlijn" in running text).
9. `nl-wog-1958`: title "Een Nederlandse wet start een register voor medicijnen" (a law does not "start" something) →
   "Een Nederlandse wet voert een register voor medicijnen in"; text "als aannemelijk was" → "als het aannemelijk was",
   "Ook moest aannemelijk zijn" → "Ook moest het aannemelijk zijn". Content checked against the source note of
   `nl-wog-1958` (art. 3: "naar redelijkerwijze mag worden aangenomen de aangeprezen werking bezitten, niet schadelijk
   zijn voor de gezondheid bij gebruik overeenkomstig het voorschrift"; art. 3(3) the ban): unchanged.

**Explainers (Dutch idiom, lost qualifiers, STYLE-NL terms)**

10. "De maag leegt (eerst) trager" (intransitive "legen" is not standard Dutch) → "De maag wordt eerst trager leeg"
    (`incretin-two-receptors` step 2 and summary); label `glp1-action.slower` "Leegt misschien / trager" → "Wordt
    misschien / trager leeg".
11. `glp1-action` step 2: "Die maken meer insuline vrij" → "Die geven meer insuline af"; step 3: "dat bloedsuiker
    verhoogt" → "dat de bloedsuiker verhoogt".
12. Hypo explainers (`insulin-glp1-hypo`, `glp1-class-hypo`): step 5's list mixed verbs and an adjective ("Trillen,
    zweten, honger of verward?") → "Trillen, zweten, honger of verwardheid?" / "Trillen, zweten of verwardheid?", the
    form of `src/i18n/nl/warning-signs.json` ("Trillen, zweten of plotseling honger, die overgaan in verwardheid");
    step 2 "verlagen suiker ook" → "verlagen de suiker ook"; labels "Gezond gebied" / "blijft in gezond gebied" (a chart
    band is not a "gebied") → "Gezond bereik" / "blijft in gezond bereik" (both explainers, 6 strings). The 112 line
    ("Lukt slikken niet? Bel 112.") stays: research/nl/nl-help.md facts 12 and 17 (Thuisarts names 112 only when
    unconscious; the site keeps its faster level, as the research records).
13. `contamination-infection` step 3 dropped the English "may" ("They may form …"): "Bacteriën groeien onder de huid:
    een bult met pus (abces), of …" → "Bacteriën groeien onder de huid. Soms ontstaat een bult met pus (abces) of een
    groeiende rode plek (wondroos)."; summary "een huidinfectie (wondroos)" → "een huidinfectie (wondroos of
    cellulitis)" (STYLE-NL §2.5; the English says cellulitis); label `redness` "Roodheid breidt uit" (standard Dutch
    needs "zich") → "Rode plek groeit". Help levels in the summary unchanged and correct: "Bel dan direct je huisarts of
    de huisartsenpost" (nl-help fact 11, Thuisarts wondroos and sepsis: "bel direct") and "Bel dan 112" for confusion,
    very fast breathing or blotchy skin (the site's faster level, fact 17).
14. `angiogenesis-double-edge` step 5: "een verborgen tumor laten groeien" ("make it grow") was stronger than the
    English "feed" → "helpen groeien", as in the summary.
15. `bpc-157-proposed-chain.summary`: "vond geen duidelijke winst" (winst of what?) → "vond geen duidelijk sterkere
    pees", as in step 5 and the label (English: "no clear gain" in strength).

### Checked and left as written

- All other timeline texts against English: meaning, qualifiers ("in labtests en bij ratten", "bij 7 vrijwilligers",
  "voorlopige datum"), numbers (10.000; 1.879; 751; 2.339) and dates. EU dates confirmed today in the EMA medicines
  JSON (timestamp of 27 October 2026): Byetta 20/11/2006 (withdrawn 01/01/2026), Victoza 30/06/2009, Ozempic
  08/02/2018, Wegovy 06/01/2022, Mounjaro 15/09/2022, Scenesse 22/12/2014 (exceptional circumstances: Yes).
- `thalidomide-withdrawn` "in Europa onder meer als Softenon": supported by `vargesson-2015-thalidomide` (research/
  history.md fact-check log: "Distaval (UK and Australia), Softenon (Europe), Contergan (Germany)"); kept.
- `gnrh-sequence` "in de VS goedgekeurd" and the gliclazide example in the hypo explainers: kept, as the translator
  explained (correct, world context / a definitional example); the medical reviewer may drop gliclazide.
- `incretin-three-receptors.summary` "Op 20 oktober 2026 had geen enkel land het als medicijn goedgekeurd": the
  English world statement with its date; research/nl/status/retatrutide.yaml (27 October 2026): EU and NL
  investigational. Kept.
- `tracker.eu-pharma-reform.next`: still "Indicative plenary sitting date" 23/11/2026 on OEIL today; kept.

### Sources fetched today (27 October 2026), with the wording relied on

| URL | Used for | Wording |
|---|---|---|
| https://zoek.officielebekendmakingen.nl/ah-1272885.pdf (curl 200, pdftotext) | tracker `nl-igj-online-sellers` | "Antwoord van minister Hermans … (ontvangen 5 oktober 2026)"; answer 5: "Waar mogelijk treedt de IGJ als toezichthouder van de Geneesmiddelenwet stevig op, bijvoorbeeld door het uit de lucht laten halen van websites en het opleggen van boetes."; answer 6: "kan de IGJ geen betrouwbare uitsplitsing geven" (for the asked categories: "off-labelgebruik, online bestelde of vermoedelijk vervalste middelen") |
| https://www.igj.nl/actueel/nieuws/2025/10/30/inspectie-maakt-zich-zorgen-over-toename-van-online-nepapotheken (200) | same item, numbers | "In 2024 ontvingen we 114 meldingen en van januari 2025 tot en met begin oktober 2025 waren dat er al 187. De inspectie deed onderzoek naar 150 van deze websites."; "De IGJ heeft tientallen van deze sites laten verwijderen." |
| https://www.igj.nl/onderwerpen/medicijnen/online-medicijnen/toezicht-op-online-medicijnen (200) | same item, warning or fine | "Zien we dat een website illegale medicijnen aanbiedt of daarvoor reclame maakt? Dan kunnen we maatregelen nemen. Bijvoorbeeld door een waarschuwing of boete op te leggen."; "zich via een website op de Nederlandse consument richten" |
| https://www.igj.nl/actueel/nieuws/2023/10/25/waarschuwing-vervalste-injectiepennen-diabetesmedicijn-ozempic (200) | timeline `falsified-ozempic-alerts` (date of the IGJ warning) | "Nieuwsbericht 25-10-2023"; "Het Europees Medicijn Agentschap (EMA) waarschuwt voor nep-injectiepennen van het diabetesmedicijn Ozempic" |
| https://www.ema.europa.eu/en/medicines/human/EPAR/byetta (200) | timeline `exenatide-approval-eu` | "On 1 January 2026, the European Commission withdrew the marketing authorisation for Byetta … at the request of the marketing authorisation holder" |
| https://www.ema.europa.eu/en/documents/report/medicines-output-medicines_json-report_en.json (200) | EU authorisation dates (above) | fields `marketing_authorisation_date`, `withdrawal_expiry_revocation_lapse_of_marketing_authorisation_date`, `exceptional_circumstances` |
| https://www.ema.europa.eu/en/about-us/what-we-do/reform-eu-pharmaceutical-legislation (200) | tracker `eu-pharma-reform` (the EMA's 2028) | "are expected to enter into force in 2026. The following two years, until 2028, will serve as a transition period"; "2028 New pharmaceutical legislation becomes applicable" |
| https://data.consilium.europa.eu/doc/document/ST-7106-2026-REV-2/en/pdf (200, pdftotext) | same item (adoption date, 24 months) | "Adopted by the Council on 28 September 2026"; art. 222(1): "Member States shall apply those measures from ... [24 months from the date of entry into force of this Directive]" |
| https://oeil.secure.europarl.europa.eu/oeil/en/procedure-file?reference=2023/0132(COD) (200) | same item, status and next | "01/10/2026 Council position published"; "Awaiting Parliament 2nd reading"; "23/11/2026 Indicative plenary sitting date" |
| https://www.dopingautoriteit.nl/nieuws/2026-09-28_wada-publiceert-dopinglijst-2027 (200) | tracker `wada-2027-prohibited-list` | "De complete Nederlandse vertaling van de WADA Dopinglijst 2027 is vanaf 1 januari 2027 te vinden: Op de website van de Dopingautoriteit. In het (sub)menu van de Dopingwaaier App." |
| https://www.dopingautoriteit.nl/code-2027 (200) | tracker `wada-2027-code` | "Per 1 januari 2027 treedt de nieuwe Wereld Anti-Doping Code in werking." |
| https://www.dopingautoriteit.nl/wat_is_doping/dopingovertredingen (200) | tracker `wada-2027-code` (strict liability in Dutch) | "Wordt er in je urine- of bloedmonster een verboden stof en/of methode gevonden? Dan bega je een dopingovertreding."; "Je bent zelf verantwoordelijk voor de aanwezigheid van verboden stoffen en/of methoden in je lichaam." (the page does not use a Dutch term for "strict liability", so the English term stays in quotes) |

### Open (not this assignment's files)

- The English `nl-igj-online-sellers.summary` (hidden on English) could get the same two changes (not touched: the
  English site is live).
- merge.md §7's suggested IGJ sentence and nl-law §5.14 misattribute the minister's answer 6 (see change 2).
- STYLE-NL still has no row for "sulfonylurea" (the translator's suggested row stands) and none for "strict liability";
  suggested row for §2.4: `strict liability | “strict liability”: je bent zelf verantwoordelijk voor wat er in je lichaam
  zit | the Dopingautoriteit explains it this way and gives no Dutch term`.
