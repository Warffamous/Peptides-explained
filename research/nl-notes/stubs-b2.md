# Notes: group stubs-b2 (Dutch compound pages SS-31 and NAD+-voorlopers), 27 October 2026

Files written (all new, UTF-8, LF):

- `src/content/compounds/nl/ss-31.mdx`
- `src/content/compounds/nl/nad-precursors.mdx`
- `src/data/sources/nl-stubs-b2.yaml` (1 new source: `eu-op-novel-food-acts-search-2026-10-27`)
- `src/i18n/nl/glossary/nl-stubs-b2.json` (2 new terms: `dry-amd`, `union-list-novel-foods`)
- this file

No other file was edited (no English content, no shared i18n, data, allowlist or glossary file). No build, commit or push.
`config/link-allowlist.json` needed no change: the only new host, `publications.europa.eu`, is covered by the `.europa.eu`
suffix.

Validation (27 October 2026): `npx tsx scripts/validate-content.ts --only compounds/nl/ss-31`, `--only
compounds/nl/nad-precursors` and `--only nl-stubs-b2`: 0 errors, 0 warnings each. `npx tsx scripts/check-locale-residue.ts
--only compounds/nl/<slug> --details`: 0 error/frame hits, 0 warn hits for both pages. With the `residue-ok` markers stripped
(a scratch scan with `scanMdx`), the only hits are `warn` hits (FDA, "in de VS") on the marked world-context and evidence
lines: 17 on ss-31, 5 on nad-precursors; no error or frame hit even without markers.

Read before writing: the brief (with "Added after step 1"), STYLE-NL, CONTENT-GUIDE §1, §1a, §2, §4.1, §5, §9, §11–§13,
`research/nl/eu-status.md`, `nl-care.md`, `nl-law.md` (§1.4), `nl-help.md` (§D), the status files
`research/nl/status/ss-31.yaml` and `nad-precursors.yaml` (with their fact-check notes), `research/nl-notes/merge.md`,
`research/for-nl-site/MANIFEST.md`, `MANIFEST-compounds-e.md`, and the saved pages
`snapshot-2026-10-23/content/compounds-en/{ss-31,nad-precursors}.mdx`; the Dutch pages `legal-routes`, `legal/nl`,
`legal/eu`, `legal/sport-and-doping` and `compounds/tirzepatide` (for shared wording and anchors).

---

## 1. SS-31 (elamipretide): `method: translated`

**Base:** the current English page (structure, sections, folds, figures, the `tested` override, studies and mechanism kept;
mechanism kinds and levels identical: binding/in-vitro, cellular/animal, effect/human). Same components:
`AuthorisedProducts`, `Compare` ×2, `KeyNumber` ×3, `TimeStrip`, `IconArray`, `StudyTable`, `RegulatoryTable`,
`ProductCheck`, stop `Callout`, `WarningSigns`, plus `JurisdictionCard code="NL"`.

**Back from the saved material (23 October):** the EU orphan-designation sentence, "no EU application under evaluation",
"the Dutch medicines database lists no product" and "Dutch law forbids supplying a medicine without a marketing
authorisation, with narrow exceptions" (MANIFEST-compounds-e, ss-31). All re-checked against `research/nl/`
(eu-status fact 6 and fact-check 16; nl-care fact 47; the merged EU and NL rows). The saved EU note "EU orphan
designations only" was incomplete and is not reused: the EU now has two authorised trials.

**Rewritten for the Netherlands:**

- Status: EU and NL rows are `investigational` (as the data file and the extra task say). The prose says "niet
  goedgekeurd" plus "two trials have permission (toestemming)": ReNEW (CTIS 2024-511482-11-00 = NCT06373731, dry AMD,
  five member states, recruitment ended) and 4TAZPower (CTIS 2025-523837-25-00 = NCT07531251 = NL-OMON61412, Barth
  syndrome, authorised for the Netherlands on 27 July 2026, also France, Ireland, Italy; no start of trial anywhere; 5 of 22
  EU participants planned in the Netherlands; males 5–55, genetically confirmed). The badge and At a glance ("Alleen in
  andere landen goedgekeurd") come from the category, as the merge notes say.
- What-it-is Compare: the row "Approved in the UK, Canada or Australia?" became "Goedgekeurd in Nederland of de EU?".
- Regulatory Compare: one row Nederland, one row Europese Unie (approved? / trial with permission?).
- The fold "The UK, Canada and Australia" became "De Europese Unie en Nederland" (EMA, orphan designations, the two EU
  trials, CBG register, Gnw art. 40, the Dutch trial, three earlier Dutch-site trials all completed, no compassionate-use
  programme, not on the Opiumwet lists).
- The US approval story (advisory committee, the May 2025 letter, accelerated approval) stays as evidence on the strength
  of the approval and as world context, marked. The TimeStrip keeps the US rows and gets a fourth row: the same trial in the
  Netherlands (permission since 27 July 2026; whether and when recruitment starts: "Onbekend"). `checked` is 27 October
  2026: I re-queried openFDA (NDA 215244: only ORIG-1, AP 19 September 2025, prescription; data updated 26 October 2026)
  and the ClinicalTrials.gov API (NCT07531251 recruiting, start 2 July 2026, primary completion 30 September 2029,
  enrolment 48; sites Calgary and Bristol recruiting, Needham terminated; NCT06373731 active, not recruiting).
- Help and reporting: 112 / huisarts / huisartsenpost (STYLE-NL §5.1, brief item 2), Thuisarts sources added beside the
  NHS sources; Lareb (with "ook als je product niet van een apotheek komt"); `<JurisdictionCard code="NL" />`; one
  Belgian line (FAGG) and a link to `/nl/legal/be/`.
- Legal routes: the Dutch anchors (#klinisch-onderzoek, #artsenverklaring, #compassionate-use, #zelf-invoeren, #recept,
  #off-label, #magistrale-bereiding). The artsenverklaring is described neutrally as the route for a medicine authorised
  elsewhere (as `/nl/legal-routes/` says for SS-31), with "De IGJ is terughoudend en kan nee zeggen" and "Of de IGJ dat
  ooit voor elamipretide toestond, weten we niet".
- Sport: "Vraag het de Dopingautoriteit" (`dopingautoriteit-geneesmiddelen-controleren`), the Dutch list translation
  beside the English lists, link `/nl/legal/sport-and-doping/`.
- Advertising test: every effect has its level and its weakness next to it (0 of 2 primary endpoints; the knee-strength
  rise only without a comparison group, `human-limited`; negative trials in other diseases). No Dutch SmPC exists (no EU
  product), so `indications` is empty: Forzinity is a US product and is not shown on Dutch pages.

**Dropped citations (all US/UK/CA/AU framing; replaced as shown):**

| Cite id | Why it went | Replaced by |
|---|---|---|
| `mhra-products-search-status-d-2026-10-23`, `uk-govuk-search-status-d-2026-10-23` | UK status (reader frame) | `cbg-gib-search-status-2026-10-27`, `ema-medicines-json`, `ema-under-evaluation-2026-10` |
| `ca-dpd-search-canada-legal-2026-10-23`, `ca-dpd-extract-search-merge-2026-10-24`, `ca-hc-ctdb-search-status-d-2026-10-24` | Canadian status and trial portal | same as above; `ctis-2025-523837-25-00`, `omon-nl-omon61412` |
| `au-artg-search-status-d-2026-10-23`, `au-tga-search-status-d-2026-10-23`, `au-poisons-standard-2026-10`, `au-tg-act-s19b-19d-offences`, `au-tga-2026-04-peptide-responsibilities` | Australian status, schedule and import law | `nl-gmw-art-40-handelsvergunning`, `nl-opiumwet-lijsten-2026-09` |
| `uk-mda-1971-sch-2` | UK controlled-drugs law | `nl-opiumwet-lijsten-2026-09` |
| `ctgov-us-uk-peptide-search-2026-10-23`, `ctgov-elamipretide-us-sites-2026-10-26`, `ctgov-search-status-d-2026-10-23` | US/UK/AU trial-site searches | `ctgov-nl-peptide-search-2026-10-27`, `ctis-*`, `omon-nl-omon61412` |
| `ctgov-nct03323749` | cited only for MMPOWER-3's Canadian sites; the trial's results stay (`karaa-2023-mmpower-3`) | (none needed) |
| `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `au-tga-report-adverse-event` | other countries' side-effect reporting | `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `fagg-melden-bijwerking-patient` (BE line) |

`ctgov-nct05162768` (NuPower) stays, now for its Dutch site (one of the three completed Dutch-site trials) instead of its
Australian sites. The Health Canada seizure line (`ca-hc-recalls-search-status-d-2026-10-23`,
`ca-hc-2026-04-think-twice-peptides`) moved from the what-it-is Compare to the risks fold, marked as evidence that vials
named "SS-31" circulate (see reviewer question L4).

## 2. NAD+-voorlopers (nad-precursors): `method: translated`

**Base:** the current English page, same structure, figures (Compare ×3, KeyNumber ×3), both overrides (`tested`,
`sport`), studies and mechanism (cellular/human, cellular/animal, effect/human).

**Back from the saved material:** the EU food-law clauses (NR chloride authorised novel food since 2020; NMN positive EFSA
opinion but not on the Union list; NAD+ not on the list; food = something to swallow, Regulation 178/2002 art. 2; NMN
orphan designation; the ProductCheck line with `eu-regulation-178-2002-food-law`). `research/nl/` did **not** re-check
the novel-food clauses (eu-status §2, §5 item 8: NMN status after 10 August 2026 UNRESOLVED), so I looked them up today:

- CELLAR, CELEX 32020R0016 (English and Dutch): recital 1 "alleen nieuwe voedingsmiddelen die zijn toegelaten en in de
  Unielijst zijn opgenomen, in de Unie in de handel mogen worden gebracht"; NR chloride as a source of niacin in food
  supplements for adults.
- SPARQL (Publications Office): the latest consolidation of 2017/2470 is still 02017R2470-20260810; no act on
  nicotinamide mononucleotide since July 2026 (the index holds 87 regulations dated 1–27 October 2026). Recorded as the
  new source `eu-op-novel-food-acts-search-2026-10-27`.
- CELLAR, CELEX 02017R2470-20260810: "Nicotinamide riboside chloride" (authorised 20 February 2020; food supplements for
  adults with a lower maximum for pregnant and lactating women; also foods for special medical purposes, total diet
  replacement and meal replacements for adults); no "mononucleotide", "NMN", "nadide" or "dinucleotide".
- CELLAR, CELEX 32002R0178 (Dutch): art. 2, food is "bestemd om door de mens te worden geconsumeerd" (English:
  "ingested"); medicines are not food.
- PubMed (eutils) PMID 42125559: the EFSA NMN opinion was published 11 May 2026 (so "mei 2026").

**Rewritten for the Netherlands:** the four-country Compare became Nederland / Europese Unie; the fold "The UK, Canada and
Australia" became "De Europese Unie en Nederland" (EMA, NMN orphan designation for sickle cell disease, the novel-food
facts above, the CBG register search including "nicotinamide", the NVWA's supervision of supplements and its rule that a
food with a medical claim, or with a medicinal function, is a medicine, Gnw art. 40, food law art. 2, the Opiumwet). The
US paragraph (NMN supplement reversal, 503A category 1) is cut to one marked world-context sentence: the US list is not an
approval and changes nothing outside the US. Help, reporting (Lareb also takes supplements: nl-help fact 19), routes and
sport as on SS-31. The `sport` override now also cites the Dopingautoriteit's Dutch list translation, whose M2.2 text I
read today ("Intraveneuze infusies en/of injecties van meer dan 100 milliliter binnen een periode van 12 uur, tenzij ze
legitiem worden gegeven bij chirurgische ingrepen, ziekenhuisbehandelingen of klinisch onderzoeken").

**Dropped citations:**

| Cite id | Why it went | Replaced by |
|---|---|---|
| `openfda-drugsfda-search-stubs-b-2026-10-23`, `fda-2025-nmn-petition-response`, `fda-gras-inventory-search-2026-10-23`, `usc-21-321` | US drug and supplement status (reader frame); the NMN reversal paragraph was cut | `ema-medicines-json`, `cbg-gib-search-status-2026-10-27`, `eu-regulation-2020-16-nr`, `eu-union-list-novel-foods-2026-08-10`, `eu-regulation-178-2002-food-law` |
| `mhra-products-search-status-d-2026-10-23`, `uk-fsa-gb-novel-96-nr-chloride`, `uk-fsa-novel-food-register-search-status-d-2026-10-23`, `uk-govuk-search-status-d-2026-10-23`, `uk-mda-1971-sch-2` | UK status, GB novel-food register, UK controlled drugs | EU novel-food sources above; `nl-opiumwet-lijsten-2026-09` |
| `ca-dpd-search-canada-legal-2026-10-23`, `ca-dpd-extract-search-merge-2026-10-24`, `ca-nhpr-definition`, `ca-nhpr-schedule-1`, `ca-nhpr-schedule-2`, `ca-lnhpd-api-nr-nmn-2026-10-26`, `ca-nhpid-nmn-monograph`, `ca-food-and-drug-regulations`, `ca-hc-recalls-search-status-d-2026-10-23`, `ca-hc-2026-04-think-twice-peptides` | Canadian status, NHP licensing, the Canadian NAD+ recall and seizure (part of the Canada bullet) | `nvwa-toezicht-voedingssupplementen`, `nvwa-verbod-medische-claims`, `nl-gmw-art-40-handelsvergunning` |
| `au-artg-search-status-d-2026-10-23`, `au-permissible-ingredients-determination-2026-3`, `au-tga-2025-04-nad-nmn-safety-alert`, `au-tga-2026-08-nad-nmn-representations-guidance`, `au-poisons-standard-2026-10`, `au-tga-search-status-d-2026-10-23` | Australian status and listed-medicine rules (incl. the AU pregnancy line in the checks fold) | EU and NL sources above; the EFSA pregnancy line stays |
| `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `au-tga-report-adverse-event` | other countries' side-effect reporting | `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `fagg-melden-bijwerking-patient` |
| (ProductCheck `extraSources`) `usc-21-321`, `ca-nhpr-schedule-2` | US/CA definitions | `eu-regulation-178-2002-food-law` (as on 23 October) |

The English sentence "We found no TGA statement about NAD+ drips given in clinics" has no Dutch counterpart: I could not
search igj.nl or nvwa.nl reliably (their search pages are script-driven; a web search found nothing), so I left it out
rather than write "we vonden geen" (open question M5).

## 3. UNRESOLVED points and how the pages handle them

| Point (source) | Handling |
|---|---|
| Whether and when 4TAZPower recruits in the Netherlands (nl-care §5 item 7) | Written as unknown: "Of en wanneer dat hier begint, is niet bekend"; the TimeStrip shows an "Onbekend" block. Never "recruits here". |
| SS-31 rows investigational or not-authorised (merge open question 2; eu-status §6 q5–6) | The page follows the data (investigational). The prose ("niet goedgekeurd"; "twee studies hebben toestemming") stays true either way. |
| National authorisations in other member states (eu-status §5 item 7) | "geen handelsvergunning voor de hele EU"; "Of een ander EU-land het zelf goedkeurde, hebben we niet nagekeken." Never "in no EU country". |
| NMN novel-food status after 10 August 2026 (eu-status §5 item 8) | Looked up today (above): written with the date ("de versie van 10 augustus 2026, op 27 oktober 2026 de nieuwste"; "Een later besluit over NMN vonden we niet"). |
| WADA S0 for unnamed compounds approved somewhere / supplements (nl-law §5 item 10) | "Onduidelijk"; "Vraag het de Dopingautoriteit". |
| Whether the IGJ has ever granted an artsenverklaring for elamipretide (not researched) | "weten we niet". |
| "An injection is a medicine, not a food" (status-file NL note, 23 October wording, not re-checked) | Not used. The page says only what was checked: an infusion or injection is not a food (178/2002 art. 2), and the NVWA's rule on presentation and function. |
| Dutch regulator statements on NAD+ drips in clinics (not researched) | Left out. |

## 4. Open questions for the reviewers

**Medical**

- M1. Stop-now lists: allergic swelling of face/throat or trouble breathing → "Bel 112"; spreading redness at the
  injection site and fever after an injection → "Bel direct je huisarts. Is de praktijk dicht? Bel dan de
  huisartsenpost", with "Word je suf of verward? Bel dan 112" for sepsis. Right levels (Thuisarts wondroos, sepsis,
  dikke ogen of lippen)?
- M2. The NHS pages stay cited beside the Thuisarts pages for the symptom descriptions (as `/nl/safety/warning-signs/`
  does). Keep both, or Thuisarts only?
- M3. NAD+ TL;DR "Bij muizen hielpen ze tumoren" is the English simplification ("In mice, they helped tumours"). Fine?
- M4. SS-31 `tested` override "Deels" with the text "Goedgekeurd na 1 studie bij 12 patiënten, die de doelen miste.
  Grotere studies bij andere ziekten: geen voordeel." (18 words; the colon form keeps "bigger trials" and "other
  diseases"). Acceptable?
- M5. Should the NAD page say anything about NAD+ infusions offered in Dutch clinics? We found no Dutch source either way.

**Legal**

- L1. SS-31: the artsenverklaring is described as the route for a medicine authorised elsewhere (following
  `/nl/legal-routes/`), neutrally, with the IGJ's reticence and "we weten niet" whether it was ever granted. Passes the
  advertising test?
- L2. SS-31 what-it-is Compare, vial column: "Een geneesmiddel zonder handelsvergunning mag niemand in Nederland
  verkopen of invoeren." Written conditionally because `legal/nl` says such peptides are "waarschijnlijk" medicines. OK?
- L3. NAD: "De EU-toelating geldt ook hier" (an implementing regulation applies directly) and "Niet toegelaten in de EU,
  dus ook niet hier" for NMN. OK as plain wording?
- L4. Evidence from other countries' regulators kept, marked: the FDA's warning letters on "research" SS-31, Health
  Canada naming "SS-31" among seized peptides, and the US Anti-Doping Agency's explanatory note on IV infusions
  (`usada-iv-infusions`, for "wat er ook in zit" and the exemption; the rule itself is also cited to the Dopingautoriteit's
  Dutch list). Keep, or cite only the Dutch and WADA texts?

## 5. Style terms (STYLE-NL lacks them; the word used)

| English | Nederlands used | Note |
|---|---|---|
| precursors (NAD+) | voorlopers: "NAD+-voorlopers" | as `/nl/legal/nl/` writes |
| drip, IV infusion | infuus, meervoud infusen ("NAD+-infusen") | the Dopingautoriteit's list says "intraveneuze infusies": quote only |
| accelerated approval | versnelde goedkeuring | alias of glossary `accelerated-approval` |
| confirmatory trial | bevestigende studie | glossary `confirmatory-trial` |
| orphan designation | aangewezen als weesgeneesmiddel | glossary `orphan-designation` |
| open-label extension | vervolg zonder placebo (open-label) | |
| primary endpoints (B1) | hoofddoelen | STYLE §2.3 gives "primair eindpunt" as the term; B1 "het hoofddoel" |
| knee extensor strength | kniekracht; "de kracht van de spier die de knie strekt" | |
| trial site | plek ("één plek in Nederland") | as `/nl/legal-routes/` |
| recruitment | werving; "deelnemers zoeken" | OMON: "Werving nog niet gestart" |
| a trial is authorised (CTIS) | heeft toestemming / kreeg toestemming | |
| hives | netelroos ("bultjes die jeuken") | |
| brand name | merknaam | TL;DR |
| novel food · Union list | nieuw voedingsmiddel · de EU-lijst van toegelaten nieuwe voedingsmiddelen (Unielijst) | new glossary id `union-list-novel-foods` |
| dry AMD | droge (leeftijdsgebonden) maculadegeneratie | new glossary id `dry-amd` |
| sickle cell disease | sikkelcelziekte | |
| ECG | hartfilmpje (ECG) | Thuisarts |
| stent | stent (een buisje dat een kransslagader openhoudt) | |

## 6. For the final sweep (files I do not own)

1. **`src/i18n/nl/compound.json` `authorised.noProducts`** ("De officiële productinformatie staat hier nog niet.") renders
   inside `<AuthorisedProducts />` on the Dutch SS-31 page, where no NL/EU product exists. It reads as if a product will
   come. Suggest a separate string for `approval.key === 'elsewhere'`, e.g. "In Nederland en de EU is geen product
   goedgekeurd. Productinformatie van andere landen tonen we hier niet." (component `AuthorisedProducts.astro`).
2. **`src/components/mdx/Section.astro`** titles the harm-reduction section "Veilig en legaal gebruiken" for every
   `category: authorised` compound. On the Dutch SS-31 page (approved only in the US) that title promises a legal route
   that hardly exists in the Netherlands. Suggest choosing the title from `approvalFor(...)` (`all`/`some`) instead of the
   category; the same applies to tesamorelin and PT-141 on Dutch.
3. **`src/i18n/nl/glossary/stubs-b.json`** (shared): (a) `nicotinamide-mononucleotide`: "In sommige landen zit het in
   supplementen; de regels verschillen per land." → add the Dutch/EU fact: "In de EU is het niet toegelaten als nieuw
   voedingsmiddel (gecontroleerd op 27 oktober 2026)."; (b) `nicotinamide-riboside`: add "In de EU sinds 2020 toegelaten
   als nieuw voedingsmiddel, vooral voor voedingssupplementen voor volwassenen."; (c) `barth-syndrome`: term
   "barthsyndroom" → "syndroom van Barth" (the form Dutch pages use), keep "barthsyndroom" as an alias; (d) `novel-food`:
   add `union-list-novel-foods` to `see_also`.
4. **`src/i18n/nl/glossary/history.json`** `accelerated-approval`: the term is English ("accelerated approval"); suggest
   the term "versnelde goedkeuring" with the English words as aliases.
5. **`src/data/sources/nl-legal-sport-changing.yaml`** `dopingautoriteit-vertaling-dopinglijst-2026`: the note does not
   mention M2.2; add the quote above (read in the PDF on 27 October 2026), since these pages cite it for M2.2.
6. **`src/data/compounds/nad-precursors.yaml`** EU row: the novel-food sources were re-read on 27 October 2026 (section 2);
   consider adding `eu-op-novel-food-acts-search-2026-10-27` to the row's sources and updating the comment ("NMN is not on
   the Union list (consolidated 10 August 2026, still the latest on 27 October 2026)").
7. **`src/data/sources/stubs-b.yaml`**: `ctgov-nct07531251` (re-read 27 October 2026: recruiting; Calgary and Bristol
   recruiting, the US site in Needham terminated; last update 17 September 2026) and `fda-drugsatfda-forzinity` (openFDA
   re-queried 27 October 2026: only the original approval) could carry the newer check in their notes.

---

## Check (independent, 27 October 2026)

Independent fact-check and edit of both pages, the source file and the glossary file, against the brief (with "Added
after step 1"), STYLE-NL, CONTENT-GUIDE §1, §1a, §4.1, §5, §9, §11–§13, `research/nl/` (eu-status, nl-care, nl-law,
nl-help, their fact-check sections), the status files, the merged data files and the current English pages.

**Science parity.** Every cite id, KeyNumber (3 + 3, same levels), IconArray, TimeStrip row, mechanism step (kinds and
levels identical), study id (7 and 8, each with finding and limitation), caveat and number of the English pages is on the
Dutch pages, except US/UK/CA/AU framing (listed by the writer above, plus the three ids below). Numbers re-compared one by
one (1.000; 639,8; 10 tegen 6; 0 van 2; +63 N / 124 N; −3,2 m; 48; 2.036 / 1.091; 2,72; 8,3% / 14,1%; 45,4% / 42,4%;
663,4 / 255,25 / 334,22; 100 ml / 12 uur). One science line had been lost and is restored (NAD TL;DR "mixed results").

**Fetched today to check the Dutch and EU facts and the new source:**

| Record | What it shows (27 October 2026) |
|---|---|
| Publications Office SPARQL (the URL of `eu-op-novel-food-acts-search-2026-10-27`, and a title search for acts dated from 1 July 2026 with "novel food", "mononucleotide" or "nicotinamide") | Latest consolidation 02017R2470-20260810; acts 2026/1427, 2026/1507, 2026/1749, the consolidations of 2 and 14 July and 10 August, and 2026/2115 (feed additive, vitamin K3); no NMN act. The source entry is correct. |
| CELLAR, CELEX 02017R2470-20260810 (XHTML) | "Nicotinamide riboside chloride", authorised 20 February 2020; food supplements for adults excluding pregnant and lactating women, a lower maximum for them; foods for special medical purposes, total diet replacement. 0 hits for mononucleotide, NMN, nadide, dinucleotide, NAD. |
| CELLAR, CELEX 32002R0178, Dutch | Art. 2: "levensmiddel (of voedingsmiddel)": "bestemd ... om door de mens te worden geconsumeerd"; not included: "d) geneesmiddelen". |
| EMA orphan-designations JSON (3,310 records) | EU/3/21/2430 elamipretide, Barth, 20/05/2021; EU/3/22/2614 elamipretide, 16/05/2022; EU/3/23/2786 nicotinamide mononucleotide, sickle cell disease, 20/06/2023; all Positive. |
| CTIS public API, 2025-523837-25-00 | Authorised (code 2); member states concerned NL (first decision 27/07/2026), IT (28/07), FR (29/07), IE (04/08); per country `hasRecruitmentStarted: false`; subjects NL 5, FR 7, IE 4, IT 6; NL site Amsterdam UMC. Spain appears in the trial-events list but not among the member states concerned. |
| ClinicalTrials.gov API, NCT07531251 | Recruiting; start 2 July 2026; primary completion 30 September 2029 (estimated); 48 (estimated); male, 5–55 years; Needham terminated, Calgary and Bristol recruiting. |
| ClinicalTrials.gov API, NCT06373731 | Active, not recruiting; EU sites in Czechia, Germany, Hungary, Italy, Spain. |
| ClinicalTrials.gov API, NCT05162768 | Completed 4 December 2024; site countries include the Netherlands. |
| Dopingautoriteit, "Vertaling WADA dopinglijst 2026" (PDF) | M2.2: "Intraveneuze infusies en/of injecties van meer dan 100 milliliter binnen een periode van 12 uur, tenzij ze legitiem worden gegeven bij chirurgische ingrepen, ziekenhuisbehandelingen of klinisch onderzoeken." |

Every other Dutch, EU and Belgian statement was compared with `research/nl/` (eu-status facts 6 and 9 and fact-check 16;
nl-care facts 20–28, 35–39, 47, 50; nl-law facts 4–7, 33, 35, 38, 43; nl-help facts 11, 17–19, 22) and with the registry
notes of the cited ids (`cbg-gib-search-status-2026-10-27`, `omon-nl-omon61412`, `ctgov-nl-peptide-search-2026-10-27`,
`cbg-compassionate-use-list`, `nl-opiumwet-lijsten-2026-09`, `nvwa-*`, `lareb-*`, `thuisarts-*`, `fagg-melden-bijwerking-patient`,
`igj-*`, `dopingautoriteit-*`, `efsa-*`, `eu-regulation-2020-16-nr`). Anchors on `/nl/legal-routes/` checked in the Dutch
file (all seven `##` headings exist); every `/nl/` link target exists.

### Changes

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| ss-31, description | "is in de VS een medicijn voor het syndroom van Barth, op beperkt bewijs. Niet in Nederland of de EU." | "is in de VS goedgekeurd voor het syndroom van Barth, op beperkt bewijs. In Nederland en de EU niet." | unidiomatic ("een medicijn ... op beperkt bewijs") | – |
| ss-31, TL;DR 1 | "Merknaam: Forzinity." | "In de VS: Forzinity." (marked world context) | a brand name with no country reads as if it were available here; English says "The US medicine is Forzinity" | `fda-drugsatfda-forzinity` |
| ss-31, TL;DR 4 | q "Kan ik het in Nederland krijgen?" a "Niet als medicijn. Een studie ... kreeg hier toestemming, maar is nog niet begonnen." | q "Kan ik het hier krijgen?" a "Een studie bij het syndroom van Barth heeft hier toestemming, maar zoekt nog geen deelnemers. Vraag je arts." | the trial HAS begun (recruiting since 2 July 2026 in Calgary and Bristol); only the Dutch part has not; "Niet als medicijn" repeated the glance tile and left out the doctor (English: "Your doctor can ask if it fits"); keeps the TL;DR at 85 words | `ctgov-nct07531251`, `ctis-2025-523837-25-00`, `omon-nl-omon61412` |
| ss-31, glance.tested | "die de doelen miste" | "die de hoofddoelen miste" | English "main goals" | `reid-thompson-2021-tazpower` |
| ss-31 and nad, stop sign (allergy) | "Dikke lippen of keel, of moeilijk ademen" | "Dik gezicht of dikke keel, of moeilijk ademen" | English "Swollen face or throat"; lips is narrower | `nhs-anaphylaxis`, `thuisarts-dikke-ogen-lippen` |
| ss-31, mechanism step 2 | "een vetmolecuul dat de onderdelen die energie maken nodig hebben" | "een vetmolecuul dat nodig is voor de onderdelen die energie maken" | ambiguous word order (who needs whom) | `birk-2013-ss31-cardiolipin` |
| ss-31, regulatory_notes.NL | "Niet goedgekeurd: geen product ..." | "Geen handelsvergunning: geen product ..." | "niet goedgekeurd" is the status word of `not-authorised` (STYLE §2.4), printed next to the row's `investigational` status | data NL row |
| ss-31, Lead what-it-is | "Een klein labpeptide dat op mitochondriën mikt." | "Een klein peptide uit het lab, gericht op mitochondriën." | calque of "lab-made peptide" | – |
| ss-31, Compare "Goedgekeurd in Nederland of de EU?" | "&lt;Verdict no/&gt; Nee. Een studie in Nederland heeft wel toestemming, maar is nog niet begonnen." / "&lt;Verdict no/&gt; Nee. Een geneesmiddel ..." | "&lt;Verdict no/&gt; Een studie heeft wel toestemming in Nederland, maar zoekt hier nog geen deelnemers." / "&lt;Verdict no/&gt; Een geneesmiddel ..." | the Verdict renders "Nee" itself ("Nee Nee."); the trial has begun elsewhere | `src/i18n/nl/figures.json` verdict; CTIS, ClinicalTrials.gov |
| ss-31, molecule fold | "“aanzienlijke onzekerheid” (“significant uncertainty”)" | "“aanzienlijke onzekerheid”" | no English left in the text (STYLE §2.8) | `fda-crdac-2024-10-elamipretide-minutes` |
| ss-31, molecule fold | "een meting die een voordeel “redelijkerwijs” voorspelt" | "een meting die “redelijkerwijs waarschijnlijk” een voordeel voorspelt" | the quoted rule is "reasonably likely to predict"; "redelijkerwijs" alone changes it | `fda-2025-forzinity-approval` |
| ss-31, study fold | "Eén uur het middel tijdens het plaatsen van een stent" | "Een infuus van een uur tijdens het plaatsen van een stent" | calque; the trial gave a one-hour drip | `gibson-2016-embrace-stemi` |
| ss-31, regulatory Compare, EU row | "Een studie bij een oogziekte loopt in vijf andere EU-landen" | "... in vijf EU-landen" | wrong: Italy is in both trials (ReNEW DE, ES, IT, CZ, HU; 4TAZPower NL, IT, FR, IE) | `ctis-2024-511482-11-00`, `ctis-2025-523837-25-00` |
| ss-31, EU fold | "Dat helpt bij de ontwikkeling, maar het is geen toestemming om het te verkopen." | "... maar het is geen goedkeuring als medicijn." | precision (an orphan designation is not a marketing authorisation), and no sales wording | `ema-orphan-elamipretide-eu-3-21-2430` |
| ss-31, EU fold | "... en was op 27 oktober 2026 nog nergens begonnen." | "Op 27 oktober 2026 zocht ze in die landen nog geen deelnemers." | wrong: "nergens" = nowhere, but the trial recruits in Canada and the UK; CTIS: no recruitment in any of the four member states | `ctgov-nct07531251`, `ctis-2025-523837-25-00` |
| ss-31, NL fold | "Er is geen compassionate-useprogramma voor elamipretide." | "Er is in Nederland geen compassionate-useprogramma voor elamipretide (gecontroleerd op 27 oktober 2026)." | the CBG list is national; status facts carry their date | `cbg-compassionate-use-list`; nl-care fact 39 |
| ss-31, risks fold | paragraph: Health Canada named "SS-31" among seized peptides (2025, April 2026), cited `ca-hc-recalls-search-status-d-2026-10-23`, `ca-hc-2026-04-think-twice-peptides` | removed; the product-risk link moved to the sentence before | Canadian enforcement is the Canadian frame, not the world context the brief allows (a US approval, once); the FDA warning-letter evidence on "research" vials stays (answers reviewer question L4) | brief, "What leaves" / "What stays" |
| ss-31, ProductCheck extra | "Een flacon “SS-31” “voor onderzoek” is niet het Amerikaanse medicijn." | "Een flacon met “SS-31” en “voor onderzoek” op het etiket is niet het Amerikaanse medicijn." | unidiomatic run of quotes | – |
| ss-31, stop callout (allergy) | "...: mogelijk een zware allergische reactie (anafylaxie). Bel 112." (hives alone included) | "...: mogelijk een ernstige allergische reactie. Wordt je tong of keel dik, of kun je moeilijk ademen? Bel dan direct 112. Alleen bultjes of uitslag? Stop met het middel en bel direct je huisarts. Is de praktijk dicht? Bel dan de huisartsenpost." | hives alone is not a 112 sign (Thuisarts: 112/spoed with tongue or throat swelling or breathing trouble; site: `anaphylaxis` emergency, `hives-swelling` stop); the label's serious reactions can start as a rash, so "bel direct" rather than an appointment (as on the Dutch tesamorelin page) | `thuisarts-dikke-ogen-lippen`, `fda-label-forzinity-2025` |
| ss-31 and nad, stop callout (sepsis) | "Word je suf of verward? Bel dan 112." | "... Bel dan direct 112." | STYLE §5.1 wording for levensgevaar | STYLE §5.1 |
| ss-31, routes fold (trial) | eligibility (boys and men 5–55) cited to CTIS and OMON only | `ctgov-nct07531251` added | the eligibility comes from ClinicalTrials.gov | `ctgov-nct07531251` |
| nad, TL;DR 4 | "vond vooral kleine studies en noemde infusen experimenteel" | "vond vooral kleine studies met wisselende uitkomsten, en noemde infusen experimenteel" | science parity: English "mostly small studies with mixed results" | `godic-2026-iv-longevity-review` |
| nad, TL;DR 5 | "Wie kanker of de ziekte van Parkinson heeft ... Bij muizen hielpen ze tumoren." | "Wie kanker of parkinson heeft ... Bij muizen hielpen ze tumoren groeien." | "hielpen ze tumoren" reads as "helped against tumours", the opposite of the finding | `nakazzi-2026-b3-pancreatic-cancer`, `maric-2023-nr-metastasis-mice` |
| nad, glance.main_risk | "Infusen en injecties kunnen bacteriën bevatten. Effecten op lange termijn zijn onbekend." | "Infusen en injecties kunnen een infectie geven. Effecten op lange termijn: onbekend." | germs come in by the needle as well as in the product; matches the risks section ("infectie") | `godic-2026-iv-longevity-review`, `nhs-cellulitis` |
| nad, study grant-2019 | "Bij 11 gezonde mannen kregen een infuus met NAD+ van 6 uur. ... Er werden geen ongewenste voorvallen gezien." | "Bij 11 gezonde mannen liep een infuus met NAD+ 6 uur lang. ... De onderzoekers zagen geen ongewenste voorvallen." | ungrammatical (no subject); "er" + passive (STYLE §1 rule 4) | `grant-2019-iv-nad-pilot` |
| nad, regulatory_notes.EU | "Geen medicijn: ..." | "Geen goedgekeurd medicijn: ..." | "geen medicijn" is a classification claim; a product can be a medicine by function or presentation (NVWA) | `nvwa-verbod-medische-claims` |
| nad, Compare NMN cell | "EFSA vond het in 2026 veilig voor volwassenen" | "EFSA gaf in 2026 een positief advies voor volwassenen" | "veilig" in a short cell without EFSA's conditions and its exclusion of pregnancy and breastfeeding (STYLE §5.6; the advertising test) | `efsa-2026-nmn-novel-food` |
| nad, Compare medicine row | "&lt;Verdict no/&gt; Nee." ×2, "&lt;Verdict no/&gt; Nee, ook niet als infuus of injectie." | "Niet goedgekeurd." ×2, "Niet goedgekeurd, ook niet als infuus of injectie." | Verdict duplicate; English "Not approved" | – |
| nad, what-it-is | (US 503A sentence) | added "Die lijst is geen goedkeuring en verandert niets buiten de VS." | the world-context line must say it changes nothing here | brief; CONTENT-GUIDE §1 point 5 |
| nad, status fold | paragraph on US 503A category 1 (the FDA does not act against compounding pharmacies), cited `fda-503a-categories-2026-05`, `fda-503a-bulks-page` | removed (`fda-503a-categories-2026-05` stays cited in what-it-is; `fda-503a-bulks-page` dropped) | the brief allows world context once and short, never a US route; category 1 describes a tolerated US compounding route, and the what-it-is line already gives the context | brief, "What stays" |
| nad, EU fold | "EFSA vond NMN in mei 2026 veilig voor volwassenen, behalve voor zwangere vrouwen en vrouwen die borstvoeding geven." | "EFSA vond NMN in mei 2026 veilig voor volwassenen, onder de voorwaarden die de aanvrager voorstelde. Dat oordeel geldt niet voor zwangere vrouwen en vrouwen die borstvoeding geven." | EFSA excluded these groups, it did not find NMN unsafe for them; the conditions belong with "veilig" | `efsa-2026-nmn-novel-food` |
| nad, EU fold | "NAD+ zelf staat ook niet op de EU-lijst." (no cite) | cite `eu-op-novel-food-acts-search-2026-10-27` added | uncited claim; the Union list re-read today has no NAD+ entry | CELLAR 02017R2470-20260810 |
| nad, what-it-is fold and NL fold | "een voedingsmiddel bedoeld om in te slikken" / "Een infuus of injectie is volgens de EU-wet geen voedingsmiddel." | "een voedingsmiddel bedoeld om te eten of te drinken" / "Volgens de EU-wet is een voedingsmiddel bedoeld om te eten of te drinken. Een infuus of injectie is dus geen voedingsmiddel." | the Dutch text of art. 2 says "geconsumeerd" (English "ingested"); the reasoning is now visible and the same in both places | `eu-regulation-178-2002-food-law` |
| nad, stop callout (allergy) | "Is je keel dik of kun je moeilijk ademen? Bel 112." | "Wordt je tong of keel dik, of kun je moeilijk ademen? Bel dan direct 112." | Thuisarts names the tongue too; STYLE §5.1 wording | `thuisarts-dikke-ogen-lippen` |
| glossary `union-list-novel-foods` | "die in de EU in de handel mogen ... Dan mag het in de EU niet worden verkocht." | "die in de EU zijn toegelaten ... Dan is het in de EU niet toegestaan." | STYLE §6: no commerce words in a definition | – |

**Dropped citations added by this check** (to the writer's lists above): ss-31 `ca-hc-recalls-search-status-d-2026-10-23`,
`ca-hc-2026-04-think-twice-peptides` (Canadian enforcement; nothing replaces them, the FDA warning letters stay); nad
`fda-503a-bulks-page` (US compounding category; the world-context line keeps `fda-503a-categories-2026-05`).

**Confirmed as written** (no change): the EU and NL rows and notes as the data say (SS-31 investigational, NAD+
not-authorised); the 4TAZPower facts (27 July 2026, one Dutch site, 5 planned participants, not recruiting; four member
states); ReNEW (five member states, recruitment ended); three earlier Dutch-site elamipretide trials, all completed, the last
on 4 December 2024; the orphan designations; art. 40(1)–(3) and the artsenverklaring (ontheffing, IGJ terughoudend, a Dutch
supplier applies); "zelf invoeren" (no own-use exception in art. 40(2)); the Opiumwet; the NVWA statements; the NMN and NR
novel-food status with its date; Lareb (also for supplements, also for products not from a pharmacy); the FAGG line; 112 and
the huisarts/huisartsenpost levels; M2.2; the Dopingautoriteit line; `<JurisdictionCard code="NL" />`; one Belgian line plus
`/nl/legal/be/`; no `/en/` link, no US/UK/CA/AU help, route or reporting; "je" throughout; translation block; no
`indications` needed (no EU product). Validator (`--only compounds/nl/ss-31`, `compounds/nl/nad-precursors`, `nl-stubs-b2`):
0 errors, 0 warnings each (one TL;DR word-count warning on ss-31 appeared after the TL;DR fix and was removed). Residue check
(`--only`, `--details`): 0 error/frame hits, 0 warn hits for all three.

### For the final sweep (added; files I do not own)

1. `src/data/sources/refocus-status-d.yaml` `ctgov-nct05162768`: the note names Australian, NZ and UK sites and "seven
   other countries"; the Dutch pages cite it for its Dutch site. Add "site countries include the Netherlands (API, 27 October
   2026)".
2. `src/data/sources/tb-500.yaml` `ema-orphan-designations-json`: the note lists only the TB-500 search; the Dutch NAD page
   cites it for EU/3/23/2786 (nicotinamide mononucleotide, sickle cell disease, 20/06/2023, Positive; confirmed today). Add it.
3. `src/data/sources/retatrutide.yaml` `cbg-compassionate-use-list`: accessed 20 October and the note names only retatrutide;
   the Dutch SS-31 page cites it for "no programme for elamipretide, checked 27 October 2026" (nl-care fact 39). Add the
   27 October search to the note.
4. Agree with the writer's sweep items 1 (`authorised.noProducts` on an `elsewhere` page) and 2 (harm-reduction title
   "Veilig en legaal gebruiken" for SS-31, tesamorelin and PT-141 on Dutch).

### Remaining concerns for the reviewers

1. **World context on SS-31 (legal/editorial).** The page keeps the US approval story (advisory committee vote with
   "aanzienlijke onzekerheid", the May 2025 letter, accelerated approval on a surrogate, the TimeStrip) as evidence that the
   approval is weak. The brief allows world context "once and short"; this is more, but every line is a caveat, not a
   route. Keep, or cut to one sentence plus the evidence fold?
2. **Advertising test, SS-31 harm-reduction Lead** "Het Amerikaanse medicijn heeft de minste onzekerheden" (faithful to
   English). It compares quality with "research" vials, but on a Dutch page it may read as pointing to a product that cannot
   legally be imported. Legal reviewer.
3. **SS-31 stop callout, hives alone**: "Stop met het middel en bel direct je huisarts" is faster than Thuisarts (an
   appointment) because the label's serious reactions can start as a rash. Medical reviewer.
4. **"Een infuus of injectie is dus geen voedingsmiddel"** is our reading of art. 2 of 178/2002 ("geconsumeerd" /
   "ingested"). Legal reviewer.
5. **NAD what-it-is "Klinieken bieden NAD+-infusen aan"** names no country (the review is international); no Dutch source
   either way (writer's M5).
6. **SS-31 NL row `investigational`** while recruitment in the Netherlands has not started: a data decision (merge open
   question 2), kept as the data say.
7. **CTIS 4TAZPower** lists Spain in its trial events but not among the member states concerned (perhaps an application
   being added). The pages say four member states, which is what the record authorises today; re-check before publishing.
