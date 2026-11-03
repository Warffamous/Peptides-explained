# Notes: Dutch tesamorelin page (group tesamorelin, 27 October 2026)

Files written by this group:

- `src/content/compounds/nl/tesamorelin.mdx` (new): the Dutch compound page.
- `src/data/sources/nl-tesamorelin.yaml` (new): 2 new sources (`thuisarts-diabetes-type-2`, `ctgov-search-tesamorelin-nl-2026-10-27`).
- `src/i18n/nl/glossary/nl-tesamorelin.json` (new): 2 new Dutch terms (`c-reactive-protein` "CRP", `executive-function` "executieve functies"); both ids are new on the site (no English entry exists), no duplicate id or alias (checked against every file in `src/i18n/nl/glossary/`).
- `src/i18n/nl/glossary/tesamorelin.json` (owned): one change, alias "littekens in de lever" added to `liver-fibrosis` (the page writes "littekens in de lever (fibrose)"). The other entries were read against the page and are right for it.
- This file.

Nothing else was edited: no English file, no shared i18n or data file, no `config/link-allowlist.json` (no new host was needed: thuisarts.nl and clinicaltrials.gov are listed). No build, commit or push.

Validation (27 October 2026): `npx tsx scripts/validate-content.ts --only tesamorelin` → 0 errors; the 4 warnings are all in `src/content/compounds/en/tesamorelin.mdx` (inline MedWatch, Yellow Card, Canada Vigilance and TGA links; not this group's file). `--only compounds/nl/tesamorelin`, `--only nl-tesamorelin`, `--only glossary/tesamorelin` → 0 errors, 0 warnings. `npx tsx scripts/check-locale-residue.ts --only tesamorelin --details` → 0 error/frame hits, 0 warn hits (every world-context and FDA/Health Canada evidence line carries `{/* residue-ok: … */}` or `# residue-ok: …`).

## Page: compounds/tesamorelin

**Method:** `translated` (from `en`, `review: pending`). The regulatory and harm-reduction sections are adapted for the Netherlands, as the brief says compound regulatory sections are part of a translated page.

**Base:** the current English page (TL;DR, chapter structure, all figures, all folds, all studies, the lab-report ladder via `<ProductCheck />`). Same frontmatter fields, same components, same `<Section id>` order, same 7 mechanism steps with the same `kind:level` (validator parity check passes), all 14 study ids with a Dutch finding and limitation, `regulatory_notes` only for NL, EU and WADA, `indications: {}` (no EU or NL product: the data file's products are US and Canadian and are not shown on the Dutch site).

**Status used (data file, as_of 2026-10-27; research/nl/status/tesamorelin.yaml; eu-status fact 4 and its fact-check):** EU `withdrawn` since 2012-06-21 (the applicant withdrew before the CHMP adopted an opinion; the CHMP's provisional view was negative; withdrawn, not refused), NL `not-authorised` (Geneesmiddeleninformatiebank: "Geen producten gevonden" for tesamorelin, tesamoreline, Egrifta). WADA: prohibited at all times, S2.2.4. The At a glance tile, badge and fact sheet are derived ("Alleen in andere landen"; "Alleen in andere landen goedgekeurd. Niet goedgekeurd in Nederland of de EU."); the prose says the same everywhere. I re-opened the EMA EPAR page (withdrawal of 21 June 2012, "not ... clinically meaningful", "major safety concern") and the CBG compassionate-use list (modified 10 July 2026; no tesamorelin, tesamoreline or Egrifta) on 27 October 2026.

**Extra task (EU withdrawal; US approval as world context):** the EU withdrawal of 21 June 2012 is in the regulatory Compare, the NL/EU fold, the EU note, the grade rationale and the "why this page looks different" callout. The US approval appears as world context, marked `residue-ok: world context` (what-it-is Lead and Compare column, the products fold, the callout, the US fold, the fact-sheet row "Goedgekeurd voor … in de VS", the grade rationale), and FDA documents stay as evidence (the summary review, the approval letter's required studies and contamination finding, the US label), marked `residue-ok: FDA evidence`. No US route is offered (US personal import and US compounding are gone).

### What came back from the saved material (23 October snapshot, re-checked)

- The "Netherlands and the EU" column idea of the regulatory Compare, and its rows (approved?, can a doctor prescribe it?, legal to sell a research vial?). Re-checked: EU withdrawal (eu-status fact 4), CBG register (`cbg-gib-search-status-2026-10-27`), artsenverklaring route (nl-care facts 20–26, nl-law fact 6: the IGJ now says "ontheffing"; legal term 8 weeks, average about 4; the patient cannot apply; restraint; non-medical reasons do not count; an ontheffing says nothing about reimbursement).
- The saved NL and EU regulatory notes (MANIFEST-compounds-b.md), rewritten in Dutch from the status file's suggested notes.
- The saved Dutch text of the EMA committee paragraph ("European patients with HIV ... lower BMI and less belly fat"; "People in Europe with this kind of fat gain cannot get tesamorelin"), now as the reader's own EU frame.
- The saved Lareb line, now with the Dutch fixed phrase (STYLE-NL §5.1) and `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`.
- Not reused: the German paragraphs (AMG § 21, § 73(3), the Anti-Doping-Gesetz annex: German frame, error-level residue on Dutch) and the Belgian law paragraph (1964 Medicines Act art. 6 § 1, 6quater: Belgian clauses were not re-checked by the research, eu-status §2 "Saved facts NOT re-checked"; Belgium gets one line and a link to `/nl/legal/be/`).

### What was rewritten for the Netherlands

- **What it is:** Compare "Egrifta (Amerikaans medicijn op recept)" vs "Een flacon “tesamorelin” van buiten de legale keten"; the UK/CA/AU row became "Goedgekeurd in Nederland of de EU?" and "Legal to sell?" became "Mag het in Nederland worden geleverd?" (artsenverklaring; Gnw art. 40; Customs: "Onderzoeksdoeleinden spelen dan geen rol"). The "why this page looks different" callout now says US approved, EU application withdrawn, not authorised in the Netherlands. One added sentence: "In Nederlandse teksten heet het soms tesamoreline" (the Dopingautoriteit's translation of the 2026 list).
- **Regulatory:** Lead "Is het legaal in Nederland?"; Compare with columns Nederland | Europese Unie; status fold with the Dutch name of S2.2.4 ("Groeihormoon Releasing Factors", Dopingautoriteit translation) and the Dopingautoriteit; new fold "Nederland en de Europese Unie" (replaces "The UK, Canada and Australia"): CBG register, Gnw art. 40, Opiumwet (not listed), artsenverklaring, no compassionate-use programme, no trial with a Dutch site (ClinicalTrials.gov, CTIS, OMON), central EU authorisation valid in every member state, the withdrawal, not under evaluation (October 2026 list), one Belgian line with a link; the legal callout became "Amerikaanse besluiten gelden niet in Nederland of de EU". The "Three regulators" fold keeps the FDA committee, the EMA committee and Health Canada's review as evidence; its "cost" paragraph now speaks of people in the Netherlands and the EU. The US fold keeps approval dates, the required long-term studies (stopped 2018), the biological-product status (one world-context sentence), the 2026 FDA warning letters and the PCAC sentence; "Bringing it into the US" is gone.
- **Harm reduction:** the opening says the approved medicine is Egrifta in the US and that here only the artsenverklaring route exists; the legal-route fold lists the Dutch routes with the fixed anchors (`#recept`, `#off-label`, `#artsenverklaring`, `#klinisch-onderzoek`, `#compassionate-use`, `#magistrale-bereiding`, `#zelf-invoeren`); "why a research vial is different" now rests on the US label plus Customs; the stop-now list uses the Dutch help levels (112; "Bel direct je huisarts. Is de praktijk dicht? Bel dan de huisartsenpost."; "Stop en maak een afspraak met je huisarts"); report side effects: Lareb, the Landelijk Meldpunt Zorg for a doubtful website, `<JurisdictionCard code="NL" />`, and the one Belgian line "In België meld je een bijwerking bij het FAGG." with a link to `/nl/legal/be/`. Added the fixed doctor-as-ally line (STYLE-NL §5.3).
- **Anti-ageing fold:** one added sentence from Customs (6 August 2026): peptides recommended on social media, also against ageing, have often unclear effects and unknown risks and long-term effects (`douane-2026-08-illegale-online-handel-medicijnen`; the article's lab finding about wrong or missing substances concerns slimming products, so it is not used for tesamorelin).

### Advertising test (brief, "Added after step 1", item 1): deliberate differences from the English wording

Tesamorelin has no Dutch or EU handelsvergunning, so Gnw art. 84(1) forbids any advertising; every effect is named with its evidence level, its uncertainty and its risks. Changes against the English page, for the owner and the legal reviewer:

1. TL;DR "Does it work? Yes, in people with HIV …" → "In grote studies bij mensen met hiv nam diep buikvet ongeveer 15% af. Na stoppen kwam het terug." (no leading "Ja"; evidence level named).
2. Evidence Lead "Yes, for deep belly fat …" → "Bij mensen met hiv neemt diep buikvet af. Na stoppen komt het terug; gezondheidswinst is niet aangetoond."
3. Fold title "Fatty liver: the most promising newer evidence" → "Leververvetting: nieuwer onderzoek, nog klein"; body "This is promising and from a well-designed trial" → "De studie had een goede opzet, met … biopten." (fatty liver is an unregistered use: IGJ's list of banned advertising names advertising for "gebruik van een geneesmiddel voor een ziekte waarvoor dat geneesmiddel niet is geregistreerd", nl-law fact 14, question 6.6).
4. Liver KeyNumber title "More people reached normal liver fat" → "In één kleine studie kregen meer mensen weer normaal levervet".
5. "a real medicine" → "een medicijn met een vergunning"; "the main benefit" → "het belangrijkste effect"; "the gains were rapidly lost" → "verdween het effect snel"; "Several cited powerful testimonies from patients" → "Verschillende leden noemden de verhalen van patiënten" (the praising adjective removed).
6. English quotations from US and EU documents are paraphrased in Dutch without quotation marks (a translated quote would not be the source's words): "were not accompanied by robust or consistent changes", "require further study", "do not yet support the routine use", "major safety concern", "a known growth factor", "The effects of prolonged elevations in IGF-1 levels are unknown", "microbial contamination possibly resulting in soft tissue infections", "deemed to be", "age-associated conditions …".

### Dropped citations (page compounds/tesamorelin; all US/UK/CA/AU/IE framing unless stated)

| Cite id | Why it went | What replaced it |
|---|---|---|
| `mhra-products-search-tesamorelin`, `mhra-products-search-cjc-1295-ipamorelin`, `uk-govuk-search-status-b-2026-10-23` | UK status (Compare rows, UK fold, harm reduction) | NL/EU status: `cbg-gib-search-status-2026-10-27`, `cbg-geneesmiddeleninformatiebank`, `ema-egrifta-withdrawal`, `ema-medicines-json` |
| `uk-hmr-2012-reg-46`, `uk-hmr-2012-reg-167`, `mhra-specials-guidance` | UK supply ban and "specials" route | Gnw art. 40 (`nl-gmw-art-40-handelsvergunning`), artsenverklaring (`igj-leveren-op-artsenverklaring`, `nl-regeling-gnw-art-3-17`, `igj-qa-zonder-handelsvergunning`) |
| `uk-mda-1971-sch-2` | UK controlled-drugs law | `nl-opiumwet-lijsten-2026-09` (not on the Opiumwet lists) |
| `uk-euwa-2018-s20-exit-day`, `ie-hpra-licensing-procedures` | "why there is no UK licence" (UK history of the EU application) | the EU withdrawal itself, now the reader's frame (`ema-egrifta-withdrawal`); central authorisation valid in every member state (`eu-regulation-726-2004`) |
| `ca-noc-egrifta`, `ca-dpd-egrifta-din-02438712`, `ca-dpd-egrifta-din-02423677`, `ca-dpd-extract-search-status-b-2026-10-23`, `ca-food-and-drug-regulations`, `ca-pdl-human` | Canadian status, DINs, Prescription Drug List | one world-context clause "In 2022 stopte het bedrijf met de verkoop in Canada" cited to `ca-sbd-egrifta` (its post-authorisation table gives the 30 September 2022 discontinuation); Health Canada's review stays as evidence with `ca-sbd-egrifta` and `ca-pm-egrifta-2015` |
| `ca-hc-recalls-database` | Health Canada seizures (Canadian enforcement) | Dutch law and Customs (`nl-gmw-art-40-handelsvergunning`, `douane-2026-08-illegale-online-handel-medicijnen`) |
| `ca-hc-gui-0116-personal-import` | Canadian personal import | `#zelf-invoeren`: `nl-gmw-art-40-handelsvergunning`, `nl-rbdha-2019-4817-postzending-eigen-gebruik`, `douane-invoer-geneesmiddelen-2026` |
| `au-artg-search-status-b-2026-10-23`, `au-tga-search-status-b-2026-10-23`, `au-tga-how-we-regulate-peptides`, `au-tga-2026-04-peptide-responsibilities`, `au-poisons-standard-2026-10`, `au-tga-2014-09-scheduling-consultation`, `au-customs-prohibited-imports-regs`, `au-odc-growth-hormones-import-permit` | Australian status, scheduling and import permits | NL/EU status and Dutch law as above |
| `au-anzctr-search-status-b-2026-10-23`, `ctgov-search-status-b-2026-10-23` | trial searches for UK/CA/AU sites | `ctgov-search-tesamorelin-nl-2026-10-27` (new), `ctis-nl-peptide-search-2026-10-27`, `omon-peptide-search-2026-10-27` |
| `fda-personal-importation`, `fda-rpm-ch9-personal-importations` | "Bringing it into the US" (a US route) | the Dutch `#zelf-invoeren` sentence |
| `fda-off-label-use` | US off-label rule | `nl-gmw-art-68-off-label` (off-label is about a medicine authorised here, so it cannot apply) |
| `fda-2020-notice-compounders-biologics` | US compounding exclusion for biologics (a US route) | none needed; the biological-product status stays as one world-context sentence (`ecfr-21-600-3-protein`, `fda-drugsatfda-egrifta`); magistral preparation in the Netherlands: `igj-eigen-bereidingen-apotheek` |
| `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `au-tga-report-adverse-event` | other countries' side-effect reporting | `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `<JurisdictionCard code="NL" />`; Belgium `fagg-melden-bijwerking-patient` |
| `nhs-anaphylaxis`, `nhs-cellulitis` | UK help pages as the source of the stop signs and stop list | Thuisarts: `thuisarts-dikke-ogen-lippen`, `thuisarts-wondroos` (plus `thuisarts-steenpuist`, `thuisarts-spoed-wie-bellen` for the help levels) |

Kept although foreign (evidence or world context, marked): all FDA review, label and approval documents, `fda-warning-letters-index` (also cited once, without naming the FDA in the text, for "vials with the same name are offered online"), `fda-pcac-2026-07-meeting`, `ecfr-21-600-3-protein`, `ca-sbd-egrifta`, `ca-pm-egrifta-2015`, and `nhs-high-blood-sugar` (the symptom list of a high blood sugar, including blurred vision, which the Thuisarts page does not list; kept next to the new `thuisarts-diabetes-type-2`, as the Dutch warning-signs page keeps NHS pages as evidence where no Thuisarts page covers a sign).

### UNRESOLVED points and how the page handles them

- **National authorisations in other EU member states** were not searched (eu-status §5.7): the page says "no EU-wide authorisation" and "not authorised in the Netherlands", never "in no EU country".
- **Belgium:** the Belgian register was not searched and the saved Belgian clauses were not re-checked: one line ("Een EU-vergunning zou ook in België gelden") and links to `/nl/legal/be/`; the FAGG reporting line is from be-notes (fact-checked).
- **Whether an artsenverklaring would be granted for tesamorelin:** not stated. The page describes the route, its conditions and the IGJ's restraint, and says the IGJ can refuse.
- **Magistral preparation / European Pharmacopoeia monograph** (nl-care §5.5): not claimed either way; the page quotes the IGJ rule on raw materials and says "Of dat voor tesamorelin kan, hebben we niet gevonden".
- **A traveller bringing in US-prescribed Egrifta** (nl-law §5.13), **how Customs classes a vial** (§5.4) and **intra-EU parcels** (§5.5): left out; the page states only what the law forbids (no own-use exception in art. 40(2); a parcel is not covered by the traveller rule) and links `#zelf-invoeren`.
- **Reimbursement of an ontheffing medicine:** only the IGJ's sentence that an ontheffing does not mean the insurer pays (igj-qa); nothing else about insurance.

### Open questions for the medical or legal reviewer

1. **Legal (advertising test):** is the neutral reporting of trials in unregistered uses (fatty liver, obesity without HIV, cognition), with evidence levels, "geen goedgekeurd gebruik" and the risks next to it, "informatie" under Gnw art. 84(1) for a medicine without a Dutch handelsvergunning? (nl-law question 6.6.) Are the wording changes listed above enough, or should the off-label folds be shortened further?
2. **Legal:** describing the artsenverklaring route for one named medicine that is authorised abroad: neutral information, or could it read as encouragement? The page adds the IGJ's restraint and "kan weigeren" each time.
3. **Legal:** the FDA warning-letters index is cited (the letters themselves name sellers; the index does not), as on English and on the Dutch tirzepatide page. Acceptable on the Dutch page?
4. **Medical (help levels):** hives or flushing after an injection keep the site's faster level ("Bel direct je huisarts …") where Thuisarts gives a working-day appointment for swelling without other signs; signs of a very high blood sugar with vomiting, fast breathing or drowsiness map to "bel direct je huisarts of de huisartsenpost" (Thuisarts diabetes page; English said "get urgent help"); worse eyesight with diabetes → "bel direct je huisarts" (English "without delay").
5. **Medical:** the checklist item "De controles op kanker die bij je leeftijd passen" replaces "the cancer screening due for your age". Should it name the Dutch bevolkingsonderzoek (not verified for this page)?
6. **Medical:** the stop-sign strip cites the US label plus Thuisarts; is "Bultjes, dik gezicht of keel, moeilijk ademen" the right Dutch condensation (English "Hives, swollen face or throat, hard to breathe")?

## Style terms (terms STYLE-NL lacks, and the word used)

| English | Dutch used | Note |
|---|---|---|
| senior author | senior auteur | for the MGH group's last author |
| clamp (insulin clamp) | clamptest | study description only |
| surrogate marker (artery thickness, CRP) | tussenmeting | "een tussenmeting, geen hartaanval" |
| abdominal obesity | buikobesitas | |
| carotid artery wall thickness | de dikte van de wand van de halsslagader; vaatwand | |
| fat gain / build-up | vetophoping | |
| extension (study) | verlenging | "elk met een verlenging van 26 weken" |
| pooled analysis | gepoolde analyse | |
| randomised (verb) | door loting verdelen | B1 form of "gerandomiseerd" |
| voting members | stemgerechtigde leden | |
| growth signal | groeisignaal | for growth hormone and IGF-1 |
| S2.2.4 growth hormone releasing factors | "Groeihormoon Releasing Factors" | the Dopingautoriteit's translation of the 2026 list, quoted as is |
| tesamorelin (Dutch INN form) | tesamoreline | named once; the page title stays "Tesamorelin" |
| the medicines committee of the EMA | het geneesmiddelencomité van het EMA (het CHMP); full name "Comité voor geneesmiddelen voor menselijk gebruik (CHMP)" | as the Dutch timeline text has it |
| major safety concern (EMA) | een groot veiligheidsrisico | same words as `src/i18n/nl/timeline.json` (`tesamorelin-withdrawal-eu`) |
| hexenoyl group | hexenoylgroep | |
| the US label | de (Amerikaanse) productinformatie | STYLE §2.4 |
| application withdrawn / refused | ingetrokken / geweigerd | the page explains why "ingetrokken" |

## For the final sweep (changes needed in files this group does not own)

1. **`src/i18n/nl/compound.json`, `authorised.noProducts`** ("De officiële productinformatie staat hier nog niet.") reads wrong for tesamorelin (and PT-141, SS-31) on Dutch: no EU product is coming, the EU application was withdrawn. Suggest a separate string for the `elsewhere` case in `AuthorisedProducts.astro`, e.g. "In Nederland en de EU is er geen goedgekeurd product, en dus ook geen Nederlandse productinformatie."
2. **`src/components/mdx/Section.astro`**: the authorised section titles ("Hoe het werkt", "Veilig en legaal gebruiken") and the missing harm-reduction intro are chosen from `category: authorised`, not from the locale's approval. On the Dutch tesamorelin, PT-141 and SS-31 pages the harm-reduction title says "Veilig en legaal gebruiken" although nothing is approved in the Netherlands or the EU, and the intro "We noemen geen doseringen … geen advies om deze stof te gebruiken" is not shown. Suggest using `approvalFor(data, locale)` (key all/some/former → authorised titles; elsewhere → the ordinary titles and the intro).
3. **Source notes (merge owner):** `cbg-compassionate-use-list` (retatrutide.yaml) accessed 2026-10-20 and its note mentions only retatrutide → accessed 2026-10-27, "none of the site's compounds, tesamorelin included" (nl-care §7 asks the same); `ema-egrifta-withdrawal` (tesamorelin.yaml) accessed 2026-10-22 → re-read 27 October 2026 (status file; this group re-opened it too); `ema-under-evaluation-2026-10` (pt-141.yaml) note "Cited for: no EU application for bremelanotide" → add tesamorelin (eu-status fact 11); `eu-regulation-726-2004` note: add art. 13(1) (eu-status §7); `eu-directive-2001-83` → the 2025-01-01 consolidation (eu-status fact-check).
4. **`docs/STYLE-NL.md`**: the terms in "Style terms" above.
5. **`src/data/compounds/tesamorelin.yaml`**: nothing needed; the EU and NL rows match the status file.

## Check (independent, 27 October 2026)

Independent fact-check and edit of `src/content/compounds/nl/tesamorelin.mdx`, `src/data/sources/nl-tesamorelin.yaml`,
`src/i18n/nl/glossary/nl-tesamorelin.json`, `src/i18n/nl/glossary/tesamorelin.json` and this file, against the brief
(including "Added after step 1"), STYLE-NL, CONTENT-GUIDE, `research/nl/*.md` (the fact-check sections win),
`research/nl/status/tesamorelin.yaml`, the data file and the current English page. No English file, shared file, data
file or allowlist entry was edited; no build, commit or push.

### What was checked

- **Science parity** with `src/content/compounds/en/tesamorelin.mdx` and the data file: all 14 study ids (finding and
  limitation, same numbers and meaning), the 7 mechanism steps (same kind and level), all 21 `<Claim>` badges (1 animal,
  7 established, 8 human-controlled, 2 human-limited, 3 hypothesis: identical counts and placement), the 4 KeyNumbers,
  the IconArray, the TimeStrip, the Diagram, 24 folds, 4 callouts, the one `<Q>` (5135.9 Da → 5.135,9 Da). Every
  English `<Cite>` id missing on the Dutch page is US/UK/CA/AU/IE framing and is listed in the writer's
  "Dropped citations" table (38 ids, checked one by one); no science citation was dropped.
- **Dutch, EU and Belgian facts** against research/nl: EU `withdrawn` since 21 June 2012, not refused (eu-status fact 4,
  conflict 6, fact-check); NL not authorised, CBG register empty for tesamorelin, tesamoreline, Egrifta
  (`cbg-gib-search-status-2026-10-27`); Gnw art. 40(1)-(3) (nl-law facts 4-5); artsenverklaring route, 8 weeks
  maximum, about 4 on average, the patient cannot apply, "uiterste gevallen", "terughoudend", non-medical reasons do not
  count, no reimbursement implied (nl-care facts 20-27); off-label only for an authorised medicine (fact 18); magistral
  preparation and the pharmacopoeia rule (fact 30; monograph question unresolved, §5); no CUP (fact 39); no Dutch trial
  in ClinicalTrials.gov, CTIS or OMON (fact 49); Opiumwet (nl-law fact 35); import for own use and parcels (nl-law
  facts 38-43, §5.5, §5.13); central EU licence valid in every member state (eu-status fact 37); WADA S2.2.4 and the
  Dopingautoriteit translation "Groeihormoon Releasing Factors", "tesamoreline" (source note of
  `dopingautoriteit-vertaling-dopinglijst-2026`; nl-law fact 48); Lareb, Landelijk Meldpunt Zorg (nl-help fact 25),
  the FAGG line (be-notes source).
- **Fetched today:** the Douane article of 6 August 2026 (`douane-2026-08-illegale-online-handel-medicijnen`: "tegen
  veroudering", "om er groot en sterk van te worden", "De gevaren van de middelen en ook de effecten over langere tijd
  zijn onbekend", "De inhoud kan verschillen van wat op de website staat", "Ook voldoet de productie niet aan de strenge
  kwaliteits- en hygiëne-eisen die gelden in officiële farmaceutische fabrieken", "Onderzoeksdoeleinden spelen dan geen
  rol"); both new sources of `nl-tesamorelin.yaml`: `thuisarts-diabetes-type-2` (dateModified 2026-03-23; every quoted
  sentence found word for word; the page does not list blurred vision for a high blood sugar, so `nhs-high-blood-sugar`
  stays as symptom evidence) and `ctgov-search-tesamorelin-nl-2026-10-27` (API v2: query.intr=tesamorelin +
  query.locn=Netherlands → totalCount 0; without the filter 24 trials, 14 completed, 4 terminated, 3 withdrawn,
  3 recruiting: NCT07481734 China, NCT03150511 and NCT06554717 United States; NCT00608023 completed, sites include
  Belgium; the search URL answers 200). Both entries are correct as written.
- **Rules of the brief:** no `/en/` link and no link to legal/us, uk, ca, au or ireland-and-new-zealand; every link
  target exists in Dutch (`legal-routes` headings Recept, Off-label, Artsenverklaring, Magistrale bereiding, Klinisch
  onderzoek, Compassionate use, Zelf invoeren checked in the Dutch file; `legal/be`, `legal/sport-and-doping`,
  `safety/product-risk`, `safety/sterile-technique`, `talking-to-your-doctor`, `compounds/bpc-157` exist); help levels
  and 112 as STYLE-NL §5.1; Lareb for side effects; Belgium only as the FAGG line and links.
- **Frontmatter:** translation block, `regulatory_notes` only NL, EU, WADA, `indications: {}` (the data file has no EU
  or NL product; brief item 7), glance and TL;DR limits (TL;DR now 84 words; every answer ≤ 18 words; main risk 11
  words; stop signs ≤ 8 words).

### Changes made

| Page / file | Before | After | Why | Source |
|---|---|---|---|---|
| tesamorelin, TL;DR 1 | "Voor extra diep buikvet bij volwassenen met hiv." | "In de VS: extra diep buikvet bij volwassenen met hiv." (marked world context) | The approved use is American; without "In de VS" a Dutch reader reads it as approved here (advertising test, brief item 1; the prose must agree with the NL and EU rows) | `dailymed-egrifta-sv-label`; data file |
| tesamorelin, TL;DR 3 | "De productinformatie verbiedt het onder meer bij …" | "De Amerikaanse productinformatie verbiedt het bij zwangerschap, actieve kanker en meer." | There is no Dutch productinformatie (STYLE §2.4: US label = Amerikaanse productinformatie) | `dailymed-egrifta-sv-label` |
| tesamorelin, TL;DR 5 | "Nee. Het is geen Egrifta. … heeft ze gecontroleerd." | "Nee, geen Egrifta. Geen medicijnautoriteit heeft ze gecontroleerd." | Singular/plural mismatch; also brings the TL;DR back to ≤ 85 words | – |
| tesamorelin, glance.facts "Goedgekeurd voor" | sources `[dailymed-egrifta-sv-label, ema-egrifta-withdrawal]` | `[dailymed-egrifta-sv-label, fda-drugsatfda-egrifta]` | The EMA withdrawal page does not support a US approval | `fda-drugsatfda-egrifta` |
| tesamorelin, grade_rationale.safety; unknowns (Kanker, Ogen); TimeStrip; "Elk antwoord"; US fold | "zonder gepubliceerde resultaten" / "geen resultaten gepubliceerd" | "zonder resultaten in het onderzoeksregister" / "geen resultaten in het register" / "zonder resultaten en zonder opgegeven reden" | English says "no results posted" (on ClinicalTrials.gov); "gepubliceerd" claimed more than the source shows | `ctgov-nct01579695`, `ctgov-nct01591902` |
| tesamorelin, TimeStrip labels | "verplicht gesteld bij de goedkeuring" | "verplicht bij de Amerikaanse goedkeuring" | Which approval was unclear for a Dutch reader (English: "the FDA required") | `fda-2010-egrifta-approval-letter` |
| tesamorelin, regulatory_notes.EU | "… geoordeeld dat die niet kon worden goedgekeurd" | "… dat Egrifta niet kon worden goedgekeurd" | "die" pointed to the application | `ema-egrifta-withdrawal` |
| tesamorelin, what-it-is Compare, vial column, row "Gecontroleerd …" | "In Nederland en de EU is geen enkel product met tesamorelin goedgekeurd" | "In Nederland is geen product met tesamorelin goedgekeurd, en voor de hele EU ook niet" | eu-status §5.7 UNRESOLVED: other member states' national registers were not searched; never "in no EU country" | `cbg-gib-search-status-2026-10-27`, `ema-medicines-json` |
| tesamorelin, what-it-is Compare, row "Inhoud en steriliteit bekend?" | "Volgens de Douane zijn de gevaren van zulke experimentele peptiden onbekend" | "Volgens de Douane kan de inhoud van zulke producten anders zijn dan beloofd, en voldoet het maken ervan niet aan de strenge eisen van een medicijnfabriek" | Tesamorelin is not an "experimental" peptide; the Douane's own sentences on content and production answer this row | `douane-2026-08-illegale-online-handel-medicijnen` (read today) |
| tesamorelin, what-it-is Compare, row "Mag het … worden geleverd?"; harm reduction "Waarom een flacon …" | "Valt het onder de wet, dan maakt “alleen voor onderzoek” … niets uit" | "Valt een product onder de wet, dan speelt “alleen voor onderzoek” … geen rol, zegt de Douane" / "Dan blijft het verboden, en speelt … geen rol" | Closer to the Douane's words ("dan blijft het verboden. Onderzoeksdoeleinden spelen dan geen rol"), attributed | same |
| tesamorelin, what-it-is body | "Tesamorelin is een medicijn dat in grote studies …" | "In de VS is tesamorelin een goedgekeurd medicijn. Het is in grote studies …" (marked) | STYLE §5.6: no "medicijn" for a compound without a Dutch or EU handelsvergunning unless the country is named | `dailymed-egrifta-sv-label` |
| tesamorelin, products fold | "Daarom staat hieronder geen Europese productinformatie." / "De productinformatie beperkt …" | "Daarom is er geen Nederlandse of Europese productinformatie." / "De Amerikaanse productinformatie beperkt …" | Agrees with what `<AuthorisedProducts />` shows; names the label's country | `ema-egrifta-withdrawal`, `dailymed-egrifta-sv-label` |
| tesamorelin, callout "Waarom deze pagina …" | "Tesamorelin is wel een medicijn met een vergunning: …" | "Tesamorelin is wel getest in grote studies bij mensen, en het is in de Verenigde Staten een goedgekeurd medicijn." | Same reason (no Dutch vergunning) | `fda-drugsatfda-egrifta` |
| tesamorelin, mechanism Lead | "Het laat de hypofyse meer groeihormoon afgeven." | "Het laat een klier onder de hersenen (de hypofyse) meer groeihormoon afgeven." | B1: a technical term in a Lead answer is explained (STYLE §1 rule 7, §2.5) | – |
| tesamorelin, evidence section after the KeyNumbers | (no balance line) | "De leverstudie was klein, en leververvetting is geen goedgekeurd gebruik. Tegenover deze effecten staan risico’s, zoals een hogere bloedsuiker en een IGF-1 ver boven normaal (zie Risico’s)." | Advertising test: the four KeyNumbers named effects (one in an unregistered use) without the risks or the off-label status next to them | `stanley-2019-tesamorelin-nafld`, `dailymed-egrifta-sv-label` |
| tesamorelin, phase 3 fold | "De goedkeuring rust op …" | "De Amerikaanse goedkeuring rust op …" | There is no EU or Dutch approval | `dailymed-egrifta-sv-label` |
| tesamorelin, fold title | "Claims over ‘anti-aging’ en spiergroei: buiten het bewijs" | "Claims over veroudering en spiergroei: buiten het bewijs" | No English in a Dutch fold title (STYLE §2.8) | – |
| tesamorelin, anti-ageing fold | "GHRH gewoon te gebruiken" | "GHRH standaard te gebruiken" | "routine use" (Merriam 2003) | `merriam-2003-ghrh-aging` |
| tesamorelin, unknowns fold | "het geneesmiddelencomité van het EMA (het CHMP)" | "… van het EMA, het Comité voor geneesmiddelen voor menselijk gebruik (CHMP), …" (and "Het CHMP van het EMA" in the EU fold) | STYLE §2.7: full name at the first mention on the page | – |
| tesamorelin, regulatory paragraph after Compare; sport fold | "volgens de wereldwijde dopingregels (WADA, onderdeel S2)"; "De dopinglijst van 2026 van het Wereld Anti-Doping Agentschap (WADA)" | "Dat staat in de dopinglijst van het Wereld Anti-Doping Agentschap (WADA), onderdeel S2."; "De WADA-Dopinglijst 2026 noemt …" | STYLE §2.7 (full name first) and §2.4 (the year's list as the Dopingautoriteit titles it) | `wada-2026-list-en`, `dopingautoriteit-vertaling-dopinglijst-2026` |
| tesamorelin, EU fold | "Er is geen andere aanvraag." | "Het EMA heeft geen andere aanvraag voor tesamorelin." | Says whose records | `ema-medicines-json` (status file notes) |
| tesamorelin, EU fold, Belgian line | "Een EU-vergunning zou ook in België gelden. Meer over België …" | "Voor België: zie [onze notities over België](/nl/legal/be/)." | Brief: the EU-wide point is said once, on the notes page; elsewhere only a link where the answer does not differ | brief, "Who the Dutch site is for" |
| tesamorelin, "Drie medicijnautoriteiten" fold | "Mensen in Nederland en de rest van de EU … kunnen tesamorelin niet als goedgekeurd medicijn krijgen." | "Mensen in Nederland … kunnen tesamorelin niet als goedgekeurd medicijn krijgen, en een goedkeuring voor de hele EU is er niet." | eu-status §5.7 UNRESOLVED (national authorisations in other member states not searched) | `cbg-gib-search-status-2026-10-27`, `ema-egrifta-withdrawal` |
| tesamorelin, fold title | "De Verenigde Staten" | "De Amerikaanse goedkeuring, en wat daarna gebeurde" | A US country fold beside "Nederland en de Europese Unie" set the US as a parallel frame; its content is evidence and world context (required studies, warning letters, PCAC) | brief, "What leaves" |
| tesamorelin, US fold | "Tesamorelin was niet een van de zeven peptiden …" | "Tesamorelin hoorde niet bij de zeven peptiden …" | STYLE §1 rule 9 ("geen", not "niet een") | `fda-pcac-2026-07-meeting` |
| tesamorelin, harm-reduction opening | "Het goedgekeurde medicijn is Egrifta, op recept, in de Verenigde Staten. …" | "In Nederland en de EU is tesamorelin niet goedgekeurd. In de Verenigde Staten is het wel een medicijn op recept (Egrifta). Hier kan het alleen via de smalle weg van de artsenverklaring, en de IGJ kan die weigeren. Dit deel is er om schade te beperken. Het is geen advies om tesamorelin te gebruiken." | The reader's frame first; the rendered title "Veilig en legaal gebruiken" and the missing harm-reduction intro made the section read as an invitation (advertising test); no "alleen in de VS" (other countries' status not checked) | `cbg-gib-search-status-2026-10-27`, `igj-leveren-op-artsenverklaring` |
| tesamorelin, legal-route fold | "In de VS is Egrifta een medicijn van de apotheek, op recept, voor één goedgekeurd gebruik." | removed; the fold opens with "In Nederland en de EU is tesamorelin niet goedgekeurd." | A US prescription route under "De legale weg" is a US route (brief: "never a US route") | brief |
| tesamorelin, legal-route fold | "Een apotheek vraagt daarna de IGJ om een ontheffing. Die kan weigeren." | "… De IGJ is terughoudend en kan de ontheffing weigeren." (+ `igj-qa-zonder-handelsvergunning`) | "Die" was ambiguous; the IGJ's restraint belongs next to the route (legal question 2) | nl-care facts 22, 26 |
| tesamorelin, legal-route fold | "staat die in geen enkele officiële farmacopee, dan kan …" | "Die moet in een officieel boek met kwaliteitseisen voor grondstoffen staan (een farmacopee). Staat de grondstof daar niet in? Dan kan een apotheek die niet zomaar gebruiken." | B1: term explained; condition as question + "Dan" | `igj-eigen-bereidingen-apotheek` |
| tesamorelin, legal-route fold | "[Zelf invoeren] mag niet. … ook niet voor eigen gebruik. En een pakket valt niet onder de regel voor reizigers." | "En [zelf invoeren]? De Geneesmiddelenwet verbiedt het invoeren van een geneesmiddel zonder handelsvergunning, en noemt daarbij geen uitzondering voor eigen gebruik. Er is een regel voor reizigers die hun eigen medicijnen bij zich hebben. Die regel geldt niet voor een pakket." | nl-law §5.13 UNRESOLVED (a traveller with a medicine authorised abroad): the page now states the law text and the parcel rule, not a flat "mag niet" that also decides the traveller case; "de regel voor reizigers" was unexplained | nl-law facts 38, 39, 43; `nl-gmw-art-40-handelsvergunning`, `nl-rbdha-2019-4817-postzending-eigen-gebruik`, `douane-invoer-geneesmiddelen-2026` |
| tesamorelin, stop list (high blood sugar) | "Stop en laat je bloedsuiker snel controleren bij je huisarts. … Bel dan direct je huisarts of de huisartsenpost." | "Stop met het middel en laat je bloedsuiker snel controleren door je huisarts. … Bel dan direct je huisarts. Is de praktijk dicht? Bel de huisartsenpost." | STYLE §5.1 fixed urgent phrase (brief item 2) | `thuisarts-diabetes-type-2` (read today) |
| tesamorelin, stop list (new lump) | "stop en maak een afspraak …" | "stop met het middel en maak een afspraak met je huisarts" | STYLE §5.1 wording ("Stop met het product …") | `dailymed-egrifta-sv-label` |
| tesamorelin, IconArray detail | "Aantal op de 100 mensen met elk probleem …" | "Hoeveel mensen op de 100 elk probleem hadden …" | Dutch word order | `dailymed-egrifta-sv-label` |

No change was needed in `nl-tesamorelin.yaml`, `nl-tesamorelin.json` or `tesamorelin.json` (glossary ids unique,
no duplicate aliases across `src/i18n/nl/glossary/`, definitions B1 and correct).

### Validation (after the changes)

- `npx tsx scripts/validate-content.ts --only nl/tesamorelin` → 0 errors, 0 warnings (the TL;DR warning that the first
  TL;DR edits caused, 89 words, is fixed: 84). `--only nl-tesamorelin`, `--only glossary/tesamorelin`,
  `--only glossary/nl-tesamorelin` → 0 errors, 0 warnings. `--only tesamorelin` → 0 errors; its 4 warnings are the inline
  MedWatch, Yellow Card, Canada Vigilance and TGA links in the English page (not this group's file).
- `npx tsx scripts/check-locale-residue.ts --only tesamorelin --details` → 0 error/frame hits, 0 warn hits.

### For the final sweep (in addition to the writer's list above)

1. **`src/components/mdx/Section.astro` (priority, legal):** on the Dutch tesamorelin page the harm-reduction section is
   titled "Veilig en legaal gebruiken" and the intro is hidden, although nothing is approved in the Netherlands or the
   EU. Under the advertising test (brief item 1) a title that promises safe and legal use of a medicine without a Dutch
   handelsvergunning is the riskiest line on the page. Until the component uses `approvalFor`, the page text carries
   "Dit deel is er om schade te beperken. Het is geen advies om tesamorelin te gebruiken."; **remove that sentence when
   the component shows `compound.harmReductionIntro` on this page**, or it is said twice.
2. `src/data/sources/shared.yaml` → `eu-directive-2001-83` has no note (the page cites it for art. 5(1), the
   named-patient exception left to member states, and art. 6(1)); add one when its URL moves to the 2025-01-01
   consolidation (eu-status fact-check).

### Remaining concerns for the reviewer

1. **Legal (advertising test):** the writer's questions 1-3 stand. Added: the four KeyNumbers of the evidence section
   (fat loss, regain, no weight change, normal liver fat) are figures; one is an unregistered use. The page now puts
   "geen goedgekeurd gebruik" and the risks right under them; the reviewer may want the liver KeyNumber moved into the
   liver fold.
2. **Legal (world context):** the US approval still appears in several places (what-it-is Lead and Compare column,
   products fold and callout, the US fold, glance fact row, grade rationale, TL;DR line 1, harm-reduction opening), all
   marked. The brief asks for world context "once and short"; the English page is built around the US product, and the
   products Compare and the label-based evidence need it. A stricter reading would cut the US fold to the required
   studies and the warning letters.
3. **Medical:** the writer's questions 4-6 stand. `nhs-high-blood-sugar` (a UK help page) is still cited as symptom
   evidence for blurred vision with a high blood sugar: no Thuisarts page found lists that sign for a "hyper" (the
   diabetes page lists it only for a hypo). Replace it if the reviewer knows a Dutch source.
4. **Unresolved, kept out:** national authorisations of tesamorelin in other EU member states (eu-status §5.7); a
   traveller with US-prescribed Egrifta (nl-law §5.13); how Customs classes a vial (§5.4); intra-EU parcels (§5.5);
   whether an ontheffing would be granted; a pharmacopoeia monograph (nl-care §5).
