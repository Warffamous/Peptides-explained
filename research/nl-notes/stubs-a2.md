# Notes: group stubs-a2 (Dutch compound pages Semax and Selank), 27 October 2026

Files written:

- `src/content/compounds/nl/semax.mdx`
- `src/content/compounds/nl/selank.mdx`
- `src/i18n/nl/glossary/nl-stubs-a2.json` (2 new terms)

No new sources (every id was already registered; no `src/data/sources/nl-stubs-a2.yaml` was needed). No host added to
`config/link-allowlist.json`. Validator: 0 errors, 0 warnings for `compounds/nl/se` and `nl-stubs-a2`. Residue check:
0 error, 0 frame, 0 warn hits in both pages (every warn-level hit, all `FDA`, `in de VS` or `503A`, carries a marker;
checked by scanning each page with and without its markers: 32 and 7 warn hits, all marked, none at error or frame level).

## Method, per page

Both pages: `translation: { method: translated, from: en, review: pending }` (brief: the compound regulatory section is
part of a translated page). Base: the current English page (`src/content/compounds/en/<slug>.mdx`, tier 2 stub, no
`unknowns` section, no `related` key in the frontmatter). Same frontmatter fields, same components, same `<Section id>`
order (what-it-is, mechanism, evidence, regulatory, risks, harm-reduction), same figures (one `<Compare>` per section,
the `<KeyNumber>`s, `<Mechanism />`, `<StudyTable />`, `<RegulatoryTable />`, `<ProductCheck />`, the stop callout,
`<WarningSigns />`), same folds. Mechanism steps keep the English `kind` and `level`; every study id of the data file
has a Dutch `finding` and `limitation`; `regulatory_notes` only for EU, NL and WADA, written from
`research/nl/status/<slug>.yaml` (27 October 2026). No `indications` (no authorised product).

### What came back from the saved material (snapshot of 23 October, MANIFEST-compounds-e.md)

- The NL and EU `regulatory_notes` (re-written from the fact-checked status files of 27 October: EMA medicines, orphan
  and under-evaluation data, and the Geneesmiddeleninformatiebank search of 27 October; the saved lines said
  "checked 22 October").
- The "Netherlands and the EU" column of the regulatory `<Compare>`: now one row for Nederland and one for the EU
  (brief: one card for the Netherlands, an EU column where the EU decides), with `cbg-gib-search-status-2026-10-27`,
  `ema-medicines-json`, `ema-under-evaluation-2026-10`, `ema-orphan-designations-json` and
  `nl-gmw-art-40-handelsvergunning` (the saved page cited `nl-geneesmiddelenwet` for the same point; the article-level
  id is more precise).
- "The CBG database lists no … product" (fold "Status in each country"): now in the fold "Nederland en de Europese
  Unie", re-checked on 27 October.
- The "approved in the EU …" row of the what-it-is `<Compare>` and the lede's "not in the EU": now "Goedgekeurd in
  Nederland of de EU?" with the CBG and EMA sources.
- PCAC item 5 (Semax): the Dutch framing of STYLE-NL §5.4 ("Geen van deze peptiden is een goedgekeurd medicijn in
  Nederland of de EU … Een Amerikaanse lijst verandert niets buiten de VS.").
- Not restored: "seized in Belgium" (study `vanhee-2020-seized`; Selank's evidence and risk folds). The English page
  made it neutral; the brief allows Belgium only as notes, and the country adds nothing for a Dutch reader. The study
  stays, with the same words as English ("de autoriteiten").

### What was rewritten for the Netherlands

- **Regulatory section.** Lead "Is het legaal in Nederland?"; `<Compare>` rows Nederland and Europese Unie; the fold
  "The UK, Canada and Australia" became "Nederland en de Europese Unie", with Dutch parallels of each English point:
  the MHRA database → the Geneesmiddeleninformatiebank; HMR reg. 46 → Geneesmiddelenwet art. 40 (no sale, supply or
  import without a handelsvergunning, also not from another EU state); the FSA's "a medicine, not a food" (Semax only,
  as on English) → the NVWA's general rule that a product can be a medicine by its action or presentation
  (`nvwa-verbod-medische-claims`; not a Semax-specific ruling, and the page does not say it is); the Misuse of Drugs
  Act → the Opiumwet lists (`nl-opiumwet-lijsten-2026-09`); the TGA's 2026 compliance priority → the Customs article
  of August 2026 that names experimental peptides (`douane-2026-08-illegale-online-handel-medicijnen`, citable per
  nl-law.md fact-check §5 item 6; its body names a webshop: not quoted). Links to `/nl/legal/nl/`,
  `/nl/legal/nl/#wat-dit-voor-jou-betekent` (heading checked in the Dutch file), `/nl/legal/eu/`, `/nl/legal/be/` and
  `/nl/legal/sport-and-doping/`.
- **Sport.** "Ask your anti-doping organisation" → "Vraag het dan eerst aan de Dopingautoriteit"
  (`dopingautoriteit-geneesmiddelen-controleren` added); S0 with its Dutch name from the Dopingautoriteit's
  translation (`dopingautoriteit-vertaling-dopinglijst-2026`).
- **Harm reduction.** The routes fold uses the brief's anchors only (#recept, #off-label, #artsenverklaring,
  #magistrale-bereiding, #klinisch-onderzoek, #compassionate-use, #zelf-invoeren). Compound-specific lines: no
  authorised medicine, so no off-label use of one; the artsenverklaring described only with the IGJ's own cautions
  ("in uiterste gevallen", "uitdrukkelijk niet bedoeld" to get round the handelsvergunning; never as a way to get
  this compound, by analogy with the content guide's Canada caution); zelf invoeren not allowed; no trial with a Dutch
  site in ClinicalTrials.gov, CTIS or OMON (27 October); not on the CBG's list of approved compassionate-use
  programmes (nl-care.md fact 39). Reporting: Lareb (`lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`),
  "Bespreek de bijwerking ook met je huisarts of apotheker" (`cbg-bijwerking-melden`), the STYLE-NL §5.3 doctor-as-ally
  lines, `<JurisdictionCard code="NL" />`, and one Belgian line ("In België meld je een bijwerking bij het FAGG",
  `fagg-melden-bijwerking-patient`, link to `/nl/legal/be/`).
- **Stop-now content.** English "If it is severe, call your local emergency number" → the Dutch help levels (brief item
  2, STYLE-NL §5.1): "Kun je moeilijk ademen, of zwelt je keel of tong op? Bel direct 112. Bij de andere tekenen: bel
  direct je huisarts. Is de praktijk dicht? Bel dan de huisartsenpost." The NHS symptom pages are replaced by the
  Thuisarts pages for the same signs (allergy, skin infection, sepsis) plus `thuisarts-spoed-wie-bellen`.
- **TL;DR.** Same four questions, in the reader's words; the legal question is "Wat zegt de wet in Nederland?" (no
  commerce word in the question). Word counts: Semax 84, Selank 62; every answer at most 18 words.
- **Russian registration (extra task).** Kept as world context, worded "in Rusland (als medicijn) toegelaten", and
  marked `{/* residue-ok: world context */}` (MDX) or `# residue-ok: world context` (frontmatter) on every line that
  names it, although "Rusland" is not a residue pattern today. FDA lines are marked `evidence`, `world context` or
  `PCAC framing`.

### The advertising test (brief, "Added after step 1", item 1)

Every effect is given with its level and its limits: the mechanism steps keep their levels (the effect step is
`hypothesis`, titled "niet aangetoond"); the evidence Leads start with "Onbekend"; the TL;DR "Werkt het?" says
"Onbekend"; the Semax uses sold in the US (memory, anxiety, stroke) are attributed to the US market and followed at
once by "Werkt het? Onbekend"; no word of STYLE-NL §5.6 appears (grepped: veilig as a claim, effectief, bewezen,
werkzaam, dosering, kuur, ervaringen, betrouwbaar, leverancier, aanbieder, webshop; none). No dose, schedule, route
advice or seller. Commerce words appear only in body text where a fact needs them ("verkocht", "verkopen en invoeren
mag hier niet"), never in a title, heading, Lead question, TL;DR question, fold title, figure title, label or link
text (a figure `detail` says "in omloop" instead of "verkocht").

## Dropped citations

Every dropped id supported only US, UK, Canadian or Australian framing (brief, "What leaves"); all stay registered.

### semax

| Cite id | Where | Why it went | Replaced by |
|---|---|---|---|
| `mhra-products-search-status-d-2026-10-23`, `uk-mhra-substance-index-status-c-2026-10-23` | what-it-is Compare; regulatory Compare UK row; UK bullet; PCAC item 5 | UK status | `cbg-gib-search-status-2026-10-27`, `ema-medicines-json` (and the EU sources in the regulatory Compare) |
| `ca-dpd-search-canada-legal-2026-10-23`, `ca-dpd-extract-search-merge-2026-10-24` | the same places, Canada | Canadian status | as above |
| `au-artg-search-status-d-2026-10-23`, `au-artg-search-status-c-2026-10-23` | the same places, Australia | Australian status | as above |
| `usc-21-355`, `uk-hmr-2012-reg-46`, `ca-food-and-drug-regulations`, `au-tg-act-s19b-19d-offences` | molecule fold ("not legal to supply in any of them"); regulatory Compare | the four countries' supply law | `nl-gmw-art-40-handelsvergunning` |
| `uk-fsa-2018-importing-food-supplements` | regulatory Compare UK row; UK bullet | UK food-supplement status | `nvwa-verbod-medische-claims` (general Dutch rule) |
| `uk-mda-1971-sch-2` | UK bullet | UK controlled-drug law | `nl-opiumwet-lijsten-2026-09` |
| `ca-hc-2026-04-think-twice-peptides`, `ca-hc-recalls-search-status-d-2026-10-23` | regulatory Compare Canada row; Canada bullet | Canadian enforcement | `douane-2026-08-illegale-online-handel-medicijnen` |
| `au-poisons-standard-2026-10`, `au-tga-2026-04-peptide-responsibilities`, `au-tga-2026-06-peptide-compliance-priority` | Australia row and bullet | Australian scheduling and enforcement | `nl-opiumwet-lijsten-2026-09`, `douane-2026-08-illegale-online-handel-medicijnen` |
| `ctgov-search-status-d-2026-10-23`, `au-anzctr-search-status-d-2026-10-23`, `ca-hc-ctdb-search-status-d-2026-10-24` | routes fold (no trial) | registries searched for the four countries | `ctgov-nl-peptide-search-2026-10-27`, `ctis-nl-peptide-search-2026-10-27`, `omon-peptide-search-2026-10-27`, plus `cbg-compassionate-use-list` |
| `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `au-tga-report-adverse-event` | routes fold (reporting) | other countries' reporting routes | `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `cbg-bijwerking-melden`, `fagg-melden-bijwerking-patient` (BE line) |
| `nhs-anaphylaxis`, `nhs-cellulitis` | stop strip (allergy); stop callout | UK help pages (their notes give 999, NHS 111, A&E) | `thuisarts-dikke-ogen-lippen`, `thuisarts-wondroos`, `thuisarts-sepsis`, `thuisarts-spoed-wie-bellen` |

The US Compare row went too (its claims are US framing); its science and world context stay: "Not FDA-approved" is
in the What-it-is text and the PCAC fold (`fda-pcac-2026-semax-briefing`), `fda-503a-bulks-page` stays in the PCAC
fold, `fda-category-2-safety-risks` in the status fold.

### selank

| Cite id | Where | Why it went | Replaced by |
|---|---|---|---|
| `openfda-drugsfda-search-2026-10-22` | what-it-is Compare; regulatory Compare US row | US approval status | `cbg-gib-search-status-2026-10-27`, `ema-medicines-json` |
| `mhra-products-search-status-d-2026-10-23`, `ca-dpd-search-canada-legal-2026-10-23`, `ca-dpd-extract-search-merge-2026-10-24`, `au-artg-search-status-d-2026-10-23` | what-it-is and regulatory Compare; country bullets | UK, Canadian, Australian status | as above, plus the EU sources |
| `usc-21-355`, `uk-hmr-2012-reg-46`, `ca-food-and-drug-regulations`, `au-tg-act-s19b-19d-offences` | molecule fold; regulatory Compare | the four countries' supply law | `nl-gmw-art-40-handelsvergunning` |
| `uk-mda-1971-sch-2` | UK bullet | UK controlled-drug law | `nl-opiumwet-lijsten-2026-09` |
| `ca-hc-2026-04-think-twice-peptides`, `ca-hc-recalls-search-status-d-2026-10-23`, `au-poisons-standard-2026-10`, `au-tga-2026-04-peptide-responsibilities`, `au-tga-2026-06-peptide-compliance-priority` | Canada and Australia rows and bullets | other countries' enforcement and scheduling | `douane-2026-08-illegale-online-handel-medicijnen`, `nl-opiumwet-lijsten-2026-09` |
| `ctgov-search-status-d-2026-10-23`, `au-anzctr-search-status-d-2026-10-23`, `ca-hc-ctdb-search-status-d-2026-10-24` | routes fold | registries for the four countries | `ctgov-nl-peptide-search-2026-10-27`, `ctis-nl-peptide-search-2026-10-27`, `omon-peptide-search-2026-10-27`, `cbg-compassionate-use-list` |
| `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `au-tga-report-adverse-event` | routes fold | other countries' reporting routes | Lareb, CBG and FAGG sources as for Semax |
| `nhs-anaphylaxis`, `nhs-cellulitis`, `nhs-sepsis` | stop strip (all three signs); stop callout | UK help pages | `thuisarts-dikke-ogen-lippen`, `thuisarts-wondroos`, `thuisarts-sepsis`, `thuisarts-spoed-wie-bellen` |

The US row's "nominated for pharmacy compounding, nominations withdrawn" moved to the status fold
(`fda-category-2-safety-risks`, world context).

Every scientific source of both English pages stays (PubChem, Deigin 2022, the FDA Semax briefing, the FDA category-2
page, the PCAC documents, all study papers, the PubMed count, Vanhee 2020, the WADA lists and note); every number is
copied in Dutch format (197, ongeveer 115, 550 tot 570, 451, 110, 30 en 80, 12 en 25, 4 van de 12, 1,4 keer, 20%,
261% en 182%; 62 (30 en 32), 60, 70 (40 en 30), 34 van de 84, 65, ongeveer 50; 813,9 en 751,9 g/mol).

## UNRESOLVED points and how the pages handle them

1. **The Russian registrations were not re-checked on 27 October** (`research/nl/status/semax.yaml` and `selank.yaml`:
   "not re-checked here"). Written as on English, from the FDA briefing and Deigin 2022, as world context and marked;
   never "only in Russia" (data-file comment).
2. **Whether WADA's S0 covers Semax and Selank** (nl-law.md §5 item 10): written as unclear, "Vraag het dan eerst aan de
   Dopingautoriteit". The 2027 list does not name them either (nl-law.md fact 48); the data's WADA row stays
   `unclear` with `as_of: 2026-10-22`, and the page says the sport status was checked on 22 October.
3. **OMON free-text search returns fuzzy matches for "semax" and "selank"** (nl-care.md fact 49): written as "We vonden
   … geen onderzoek", with the date, not as "er loopt geen onderzoek".
4. **Possession for own use** (nl-law.md fact 37, not settled): not stated; the pages name only sale, supply and import
   (art. 40(2)) and link `/nl/legal/nl/#wat-dit-voor-jou-betekent`.
5. **What happens to an intra-EU parcel** (nl-law.md §5): not stated; the pages give only the rule.
6. **PCAC minutes**: the Semax fold keeps the English date ("Op 23 oktober 2026 had de FDA geen verslag gepubliceerd");
   nobody re-checked fda.gov on 27 October for this group.
7. **No Dutch court ruling on these peptides, no IGJ page on peptides**: nothing is claimed either way.

## Open questions for the reviewers

- *Medical:* the help levels in the stop callouts: 112 when breathing is hard or the throat or tongue swells
  (Thuisarts, allergy); "bel direct je huisarts / de huisartsenpost" for the other signs, including bleeding or bruising
  more than usual and eye pain after nose drops, for which no Thuisarts page was cited (the English page lists them
  as stop-now signs; the FDA briefing is the source of the signs, not of the level). Is "bel direct" right for those
  two, or should they be "Stop en maak een afspraak met je huisarts"?
- *Medical:* "plaatjesremmers" added next to "bloedverdunners" for the English "antiplatelet medicines"; and
  "stollingsstoornis" for "bleeding disorder".
- *Legal:* "Een toelating buiten de EU telt niet. In Nederland telt alleen een handelsvergunning van de EU of van het
  CBG." (our reading of Gnw art. 40(1), cited to `nl-gmw-art-40-handelsvergunning`); the NVWA sentence on supplements is
  the general rule, not a ruling on Semax.
- *Legal:* the artsenverklaring line: is it neutral enough under the advertising test (it gives only the IGJ's own
  cautions and never says the route is open for these compounds)?
- *Legal/owner:* the TL;DR line "In de VS verkocht voor geheugen, angst, beroerte en meer" names marketed uses, as the
  English does, attributed to the US market and followed by "Onbekend" (the advertising test: no praise, no claim).

## Style terms (STYLE-NL lacks these; the word used)

| English | Nederlands used | Note |
|---|---|---|
| registered (as a medicine, Russia) | in Rusland (als medicijn) toegelaten · een toelating in Rusland | avoids "geregistreerd" (STYLE-NL §2.4) and "goedgekeurd" (which the site keeps for tracked regulators); the other Dutch pages mix "toegelaten", "geregistreerd" and "goedgekeurd" for Russia (see the final sweep) |
| labelled (radioligand) | gemerkt ("Gemerkt Semax, met een label dat de onderzoekers konden meten") | |
| antiplatelet medicine | plaatjesremmer | glossary `antiplatelet` (new) |
| generalised anxiety disorder | gegeneraliseerde angststoornis | glossary `generalised-anxiety-disorder` (new) |
| hives | jeukende bulten (netelroos) | Thuisarts word |
| bleeding disorder | stollingsstoornis, explained ("een ziekte waardoor ze snel bloeden") | |
| facial nerve pain · dental nerve pain | zenuwpijn in het gezicht · zenuwpijn in het gebit | |
| poor blood flow to the brain (cerebral ischaemia) | slechte doorbloeding van de hersenen | |
| experimental stroke (in rats) | een opgewekte beroerte | |
| the catch-all ban (S0) | de vangnetregel S0 | as on `/nl/legal/sport-and-doping/` ("Een vangnetregel verbiedt …") |
| nominations (for the 503A list) … withdrawn | voordrachten … ingetrokken | |
| allocation (of patients) | indeling | "loting" for randomisation (STYLE-NL §2.3) |
| drugs of abuse | verslavende middelen | |
| seized products | inbeslaggenomen producten / producten die in beslag waren genomen | |
| the substance sold under this name (figure detail) | de stof die onder deze naam in omloop is | keeps "verkocht" out of a figure's text |
| Legal to sell or supply as a medicine? (column head) | Legaal te leveren als medicijn? | no commerce word in a table head |
| Registered in (fact label) | Toegelaten in | |

## For the final sweep (files I do not own)

1. **Russia wording across the Dutch site.** "In Rusland is Semax als medicijn toegelaten" (basics/why-not-a-pill,
   history/timeline, the-case-for-reform, these two pages), "… geregistreerd" (legal/sport-and-doping, legal/whats-changing,
   legal-routes), "… goedgekeurd" (start-here). Pick one (I suggest "toegelaten") and add the row to STYLE-NL §2.4.
2. **`src/data/compounds/semax.yaml`, `selank.yaml`, WADA row:** `as_of: 2026-10-22`. nl-law.md fact 48 compared the
   2026 and 2027 lists line by line on 27 October (neither names Semax or Selank); the data owner may move `as_of` to
   2026-10-27 (`wada-2027-list-en` is already among the row's sources). If so, the pages' sentence "de sport op 22 oktober 2026"
   (status fold, both pages) must change with it.
3. **`cbg-compassionate-use-list` (src/data/sources/retatrutide.yaml):** its note records only the retatrutide check of
   20 October; the 27 October text search for semax and selank (nl-care.md fact 39) is not in the note, and
   `accessed` is 2026-10-20. Add the 27 October search to the note (or a new id) so the pages' claim is visible in the
   registry.
4. **`src/i18n/nl/glossary/stubs-a.json` (shared, not mine):** no change needed for these pages; its Dutch entries
   (BDNF, tuftsine, enkefaline, benzodiazepine, neurasthenie, trigeminusneuralgie, nootropicum) match the page text.
   The two new terms in `nl-stubs-a2.json` could move into it if the sweep prefers one file per English group.
5. **STYLE-NL:** merge the Style terms above.
6. **`research/for-nl-site/MANIFEST-merge.md`:** Semax and Selank still have no BE status row; the pages need none
   (Belgium is a notes-only jurisdiction and the pages link `/nl/legal/be/`).

## Check (independent, 27 October 2026)

Independent fact-check and edit of `src/content/compounds/nl/semax.mdx`, `src/content/compounds/nl/selank.mdx` and
`src/i18n/nl/glossary/nl-stubs-a2.json` against the current English pages and data files, the brief (including "Added
after step 1"), STYLE-NL, CONTENT-GUIDE and the fact-checked research of 27 October (`research/nl/nl-law.md`,
`nl-care.md`, `nl-help.md`, `eu-status.md`, `be-notes.md`, their Fact-check sections, and `research/nl/status/semax.yaml`,
`selank.yaml`). No new source file (`src/data/sources/nl-stubs-a2.yaml` does not exist; no new id was needed); no
allowlist host added; no file outside this group edited.

**What was checked.** (1) Science parity: every `<Cite>` id of both English pages listed against the Dutch pages with a
script; every id the Dutch pages lack is US/UK/CA/AU framing and is in the writer's "Dropped citations" tables above;
every study id of the data files has a Dutch finding and limitation; mechanism kinds and levels identical (Semax:
binding/in-vitro, cellular/animal, tissue/animal, effect/hypothesis; Selank: binding/in-vitro, cellular/animal,
effect/hypothesis); every number (197, ongeveer 115, 550 tot 570, 451, 110, 30 en 80, 12 en 25, 4 van de 12, 9: 6 en 3,
1,4, 20%, 261% en 182%, 813,9 g/mol; 62 (30, 32), 60, 70 (40, 30), 34 van de 84, 65, ongeveer 50, 751,9 g/mol) the same
as English, in Dutch format; every caveat and Lead the same in meaning (the English pages use no `<Claim>` tags).
(2) Dutch and EU facts: art. 40(1)–(3) Gnw (nl-law facts 4–5, 38), Opiumwet (fact 35), NVWA presentation/function test
(fact 33), Douane article of 6 August 2026 (fact-check §5 item 6: citable; its note in `nl-research-nl-law.yaml` read),
off-label art. 68 (nl-care fact 18), artsenverklaring (nl-care facts 23 and 26, quotes checked against the
`igj-qa-zonder-handelsvergunning` note), no compassionate-use programme (fact 39), no trial with a Dutch site in
ClinicalTrials.gov, CTIS or OMON, OMON fuzzy (fact 49), Lareb, CBG and FAGG reporting lines (nl-help facts 19–24,
be-notes), Thuisarts help levels (nl-help facts 10, 11, 17), EU and NL rows of the data files and the status yaml
(27 October). (3) Fetched today: the Dopingautoriteit page `dopingautoriteit-geneesmiddelen-controleren` (it says
"Heb je vragen over dopingstoffen in geneesmiddelen ... Stuur dan een e-mail", so "Vraag het de Dopingautoriteit" is
supported) and the FDA PCAC meeting page `fda-pcac-2026-07-meeting` ("Content current as of: 08/06/2026"; the event
materials list briefing documents, questions, agenda, roster and presentations, no minutes). (4) Rules: no link to
`/en/` or to legal/us, uk, ca, au, ireland-and-new-zealand; every internal link is a Dutch route; the routes anchors are
exactly the brief's seven; `/nl/legal/nl/#wat-dit-voor-jou-betekent` is the slug of `## Wat dit voor jou betekent` in
`src/content/pages/nl/legal/nl.mdx`; Belgium only as the one FAGG line and the `/nl/legal/be/` link; 112 and the help
levels; Lareb for side effects; no commerce word in a title, heading, Lead question, TL;DR question, fold title, figure
title, label or link text; no STYLE-NL §5.6 word (grepped); "je" throughout (no "u" or "uw").

### Changes

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| semax | TL;DR "In de VS verkocht voor geheugen, angst, beroerte en meer." | "In de VS verkocht met claims over geheugen, angst, beroerte en meer." | Advertising test (brief, added item 1): the uses are marketing claims, not effects; the old line read like a list of uses | `fda-pcac-2026-semax-briefing` (already cited) |
| semax | TL;DR q "Is het riskant met andere medicijnen?" | "Is het riskant naast medicijnen?" | "andere medicijnen" calls Semax a medicine (STYLE-NL §5.6, §2.1); one word shorter keeps the TL;DR at 85 words | – |
| semax | grade_rationale: "197 records"; "Ongeveer 115 van die 197 records hebben auteurs van de ontwikkelaars, bij het Instituut …" | "197 publicaties"; "Bij ongeveer 115 van die 197 publicaties zijn auteurs van de ontwikkelaars betrokken: van het Instituut …" | English word left in Dutch (STYLE-NL §2.8); clearer word order | `pubmed-semax-selank-count-2026-10-22` |
| semax | safety rationale and risks fold: "gingen (de onderzoekers) meestal niet in op bijwerkingen" | "meldden (de onderzoekers) meestal niets over bijwerkingen" | English "did not report side effects": the studies report nothing; they did not "discuss" it | `fda-pcac-2026-semax-briefing` |
| semax | mechanism step 1: "Gemerkt Semax, met een label dat de onderzoekers konden meten, bond …, maar …"; fold "Gemerkt Semax bond" | "Semax dat de onderzoekers radioactief hadden gemerkt, bond … Maar de receptor zelf is niet gevonden."; fold "Radioactief gemerkt Semax bond" | "label" is not Dutch here (STYLE-NL §2.6); the record says tritium-labelled; shorter sentences | `dolotov-2006-semax-binding` (PMID 16635254; note: "Tritium-labelled Semax") |
| semax | mechanism step 2 and study `dolotov-2006-bdnf`: "verhoogde het BDNF-eiwit … tot 1,4 keer" | "… tot 1,4 keer zoveel" | English "up to 1.4-fold": the Dutch was incomplete | `dolotov-2006-semax-bdnf` |
| semax | molecule fold: "Het einde Pro-Gly-Pro beschermt het molecuul waarschijnlijk tegen enzymen." | "Het einde Pro-Gly-Pro zou het molecuul beschermen tegen enzymen." | English "is thought to protect": "waarschijnlijk" was stronger than the source | `fda-pcac-2026-semax-briefing` |
| semax | KeyNumber title "stopte de meeste hoofdpijn niet"; who "geen vergelijkingsgroep" | "stopte de hoofdpijn bij de meeste mensen niet"; "geen controlegroep" | Natural Dutch; STYLE-NL §2.3 fixes "controlegroep" | `koroleva-1996-semax-analgesia`, FDA briefing |
| semax, selank | regulatory Compare, NL row: "op een paar smalle uitzonderingen na" | "op een paar beperkte uitzonderingen na. Hier telt alleen een handelsvergunning van de EU of van het CBG." | "smalle uitzonderingen" is a calque of "narrow exceptions"; the art. 40(1) sentence moved here from the EU row, where it answered for the Netherlands | `nl-gmw-art-40-handelsvergunning` (nl-law facts 4–5) |
| semax, selank | regulatory Compare, EU row: "Het EMA heeft geen handelsvergunning, geen aanvraag en geen aanwijzing …" / "Een toelating buiten de EU telt niet. In Nederland telt alleen …" (`nl-gmw-art-40-handelsvergunning`) | "In de gegevens van het EMA staat geen handelsvergunning, geen aanvraag en geen aanwijzing …" / "In elk EU-land mag een medicijn alleen op de markt met een handelsvergunning van dat land of van de EU. Een toelating buiten de EU telt niet." (`eu-directive-2001-83`) | The EMA does not hold or grant authorisations (the Commission does; orphan designations too, glossary `orphan-designation`); the EU column now gives the EU rule with the EU source | `eu-directive-2001-83` art. 6(1) (eu-status.md fact 32, fact-checked; reused id, shared.yaml) |
| semax, selank | NL/EU fold, EU bullet: "Het EMA heeft voor … geen handelsvergunning …" | "In de gegevens van het EMA staat voor … geen handelsvergunning …" | as above | `ema-medicines-json`, `ema-under-evaluation-2026-10`, `ema-orphan-designations-json` |
| semax, selank | NL/EU fold, Toezicht: "Ze noemt daarbij ook andere peptiden: experimentele middelen …" | "Ze schrijft dat naast afslankmiddelen ook andere peptiden populair zijn. Volgens de Douane zijn dat experimentele middelen: hun werking is vaak onduidelijk, en de risico's en de effecten op lange termijn zijn onbekend." | "andere peptiden" had no referent on this page; the article says "Naast afslankmiddelen zijn ook andere peptides populair"; attributed to the Douane | `douane-2026-08-illegale-online-handel-medicijnen` (note checked) |
| semax | NL fold: "door zijn werking, of door hoe het wordt aangeprezen" | "door zijn werking, of door de manier waarop het wordt gepresenteerd" | The NVWA's test is "presentatie", wider than "aanprijzen" (praising) | `nvwa-verbod-medische-claims` (nl-law fact 33) |
| semax | status fold: "Later zijn de voordrachten ingetrokken." | "Later zijn de voordrachten voor bereiding door Amerikaanse apotheken ingetrokken." | "voordrachten" had no referent | `fda-category-2-safety-risks` |
| semax | PCAC point 2: "Op 23 oktober 2026 had de FDA geen verslag gepubliceerd." (no cite) | "Op 27 oktober 2026 stond er op de pagina van de FDA nog geen verslag." plus `<Cite id="fda-pcac-2026-07-meeting" />` | Re-checked today: the meeting page is unchanged since 6 August 2026 and lists no minutes | `fda-pcac-2026-07-meeting` (fetched 27 October 2026) |
| semax | ProductCheck extra: "De FDA ziet dat als twee verschillende stoffen." | "De FDA ziet die als twee verschillende stoffen." | grammar (two forms) | `fda-pcac-2026-semax-briefing` |
| semax, selank | stop callout ended with the two-level line only | added "Is het ernstig? Bel 112." after it | The English closes "If it is severe, call your local emergency number"; brief: write "bel 112" there; same as `common.emergency.ifSevere` and the kpv, epitalon, mots-c and nad-precursors pages. Covers severe bleeding (Semax) and feeling very ill after an injection (Selank; the warning-signs list adds 112 for a fast heartbeat or fast breathing) | brief "Emergency, help and reporting"; STYLE-NL §5.1; `thuisarts-spoed-wie-bellen` |
| semax, selank | fold title "Wisselwerkingen, controles, en wie het beter niet gebruikt" | "Wisselwerkingen, controles en wie het beter niet gebruikt" | Dutch has no serial comma (the other fold titles with one comma before "en" are a site-wide pattern and stay) | – |
| semax, selank | "De artsenverklaring is een uitzondering voor één patiënt "in uiterste gevallen". De IGJ is daarin terughoudend, en de route is …" | "De artsenverklaring is volgens de Inspectie Gezondheidszorg en Jeugd (IGJ) "bedoeld voor individuele behandeling in uiterste gevallen". De IGJ is daarin terughoudend. De route is …" | The quote was cut mid-phrase and "één patiënt" overstated it (the IGJ: usually per patient, sometimes a patient group, nl-care fact 26); one idea per sentence | `igj-qa-zonder-handelsvergunning` |
| semax, selank | "geen onderzoek met … met een plek in Nederland" | "geen onderzoek met … op een locatie in Nederland" | clearer ("a site in the Netherlands") | `ctgov-nl-peptide-search-2026-10-27`, `ctis-nl-peptide-search-2026-10-27`, `omon-peptide-search-2026-10-27` |
| selank | TL;DR "Geen gegevens bij zwangerschap of borstvoeding." | "Geen gegevens over zwangerschap of borstvoeding." | the body says "over"; consistent | – |
| selank | grade_rationale preclinical: "65 records … : bovenaan de groep van 10 tot 50." | "65 publicaties … Daarmee valt Selank bovenaan de klasse van 10 tot 50 studies." | English word left in; the colon clause was unclear | `pubmed-semax-selank-count-2026-10-22` |
| selank | study limitations: "ontwikkelaars bij de auteurs", "een ontwikkelaar bij de auteurs" (2 times) | "… onder de auteurs" | calque of "among the authors" | study records |
| selank | KeyNumber label: "40 kregen Selank plus een ander medicijn, 30 alleen dat medicijn" | "40 kregen Selank naast een medicijn tegen angst, 30 alleen dat medicijn" | "een ander medicijn" calls Selank a medicine (STYLE-NL §5.6); phenazepam is an anxiety medicine (study finding) | `medvedev-2015-selank-add-on` |
| selank | evidence: "… niet scheiden van het natuurlijke op en neer van angst. Bij alle drie de studies bij patiënten staat een ontwikkelaar bij de auteurs." | "… niet scheiden van de gewone schommelingen in angst. Bij alle drie de studies bij patiënten is een ontwikkelaar van Selank een van de auteurs." | calques ("ups and downs", "among the authors") | the three study ids |
| selank | risks Lead: "Online producten worden door niemand gecontroleerd." | "Online producten worden niet gecontroleerd." | English "are not checked": "door niemand" overstated it | `vanhee-2020-nootropic-peptides` |
| glossary `antiplatelet` | "Een soort bloedverdunner. Het zorgt dat bloedplaatjes …" | "Een soort bloedverdunner: een medicijn dat ervoor zorgt dat bloedplaatjes minder aan elkaar plakken. Zo ontstaat …" | "Het" had no neuter antecedent (de plaatjesremmer) | – |

Checked and left as written: the writer's dropped-citation tables (complete: every English-only id is US, UK, Canadian
or Australian framing); the Russian registration lines (world context, marked, never "only in Russia"); "Verkopen en
invoeren mag hier niet" (art. 40(2); possession not stated, nl-law fact 37 unresolved); "Een middel zonder
handelsvergunning mag je niet zelf invoeren, ook niet voor eigen gebruik" (nl-law fact 38; `douane-invoer-geneesmiddelen-2026`:
"geen geneesmiddelen zonder vergunning binnenbrengen"); "Bespreek de bijwerking ook met je huisarts of apotheker" (the
`cbg-bijwerking-melden` note: "Bespreek de bijwerking ook altijd met jouw arts of apotheker"); the Lareb lines (nl-help
facts 19, 22); the FAGG line (STYLE-NL §5.1, be-notes); all Thuisarts help levels (nl-help facts 10, 11, 17); the glossary
entry `generalised-anxiety-disorder` (B1, under 400 characters, no duplicate id).

### Validation

- `npx tsx scripts/validate-content.ts --only compounds/nl/semax`, `--only compounds/nl/selank`, `--only nl-stubs-a2`:
  0 errors, 0 warnings each (Semax TL;DR 85 words). (`--only compounds/nl/se` also shows a TL;DR warning for
  `semaglutide.mdx`: not this group's file.)
- `npx tsx scripts/check-locale-residue.ts --only semax --details`, `--only selank --details`, `--only nl-stubs-a2
  --details`: 0 error/frame hits, 0 warn hits. Scanned once more with all markers stripped (a throw-away script calling
  `scanMdx`, deleted afterwards): Semax 0 error, 0 frame, 32 warn; Selank 0 error, 0 frame, 7 warn; every warn hit
  (FDA, VS, 503A) carries a marker.

### Remaining concerns for the reviewers

1. *Medical:* help level for "bleeding or bruising more than usual" (Semax) and "eye pain or burning after nose drops":
   both "bel direct je huisarts / de huisartsenpost" (stop callout), with no Thuisarts page checked for these two signs;
   the FDA briefing is the source of the signs, not of the level. Hives without breathing trouble is at "bel direct" in
   the callout, while the site's warning-signs list (`hives-swelling`) puts it at "Stop en maak een afspraak met je
   huisarts" (Thuisarts: an appointment on a working day). The callout is faster, as the English page groups the signs;
   the reviewer may split hives out.
2. *Legal/owner:* the TL;DR line "In de VS verkocht met claims over geheugen, angst, beroerte en meer" and the
   what-it-is paragraph name marketed uses (as English does), attributed to the US market and followed by "Onbekend"; the
   artsenverklaring line gives only the IGJ's own cautions. Both are our reading of the advertising test.
3. *Legal:* "In elk EU-land mag een medicijn alleen op de markt met een handelsvergunning van dat land of van de EU" is
   Directive 2001/83 art. 6(1) (current law; the agreed reform text keeps it, eu-status fact 31).
4. *Data owners (final sweep):* `fda-pcac-2026-07-meeting` (`src/data/sources/shared.yaml`) has `accessed: 2026-10-20`;
   the Semax page now says the FDA page showed no minutes on 27 October 2026 (fetched today: "Content current as of
   08/06/2026", no minutes among the event materials): add that check to the entry's note and move `accessed`. The
   writer's other final-sweep items (Russia wording, WADA `as_of`, `cbg-compassionate-use-list` note, glossary merge,
   style terms) stand. Add to the style terms: "radioactief gemerkt" (labelled, tritium), "met claims over" (marketed
   for), "beperkte uitzonderingen" (narrow exceptions), "onder de auteurs" (among the authors), "publicaties" (PubMed
   records).
5. *Unresolved, unchanged:* the Russian registrations were not re-checked on 27 October (status yaml notes); whether S0
   covers Semax and Selank (nl-law §5 item 10); possession for own use (nl-law §5 item 1); intra-EU parcels (§5 item 5).
   The pages state none of them as fact.
