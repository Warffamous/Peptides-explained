# Notes: group stubs-b1 (Dutch compound pages GHK-Cu, AOD-9604, hexarelin), 27 October 2026

Files written:

- `src/content/compounds/nl/ghk-cu.mdx`
- `src/content/compounds/nl/aod-9604.mdx`
- `src/content/compounds/nl/hexarelin.mdx`
- `src/data/sources/nl-stubs-b1.yaml` (no entry: every source already had an id; the file records what was re-read)
- `src/i18n/nl/glossary/nl-stubs-b1.json` (3 new terms: `medical-device-clearance` “510(k)-procedure”,
  `osteoarthritis` “artrose”, `coronary-artery` “kransslagader”)

Base: the current English pages (`src/content/compounds/en/<slug>.mdx`) and data files. Saved material: the snapshot of
23 October (`research/for-nl-site/snapshot-2026-10-23/content/compounds-en/<slug>.mdx`) and the manifests
`MANIFEST-compounds-b.md` (hexarelin), `-d.md` (GHK-Cu), `-e.md` (AOD-9604). Every Dutch, EU and Belgian fact was
re-checked against `research/nl/` (status yaml, eu-status.md, nl-law.md, nl-care.md, nl-help.md and their fact-check
sections) or re-read today (below).

Validation (27 October 2026): `validate-content.ts --only` each file: 0 errors, 0 warnings. `check-locale-residue.ts
--only <file> --details`: 0 error, 0 frame, 0 warn hits on all three (every FDA, US or Australian mention is world context
or evidence, with the marker). No build, no commit.

## Method per page

All three: `translation: { method: translated, from: en, review: pending }` (the brief: compound regulatory sections are
part of a translated page). Same frontmatter fields, same components, same `<Section>` order (what-it-is, mechanism,
evidence, regulatory, risks, harm-reduction; the English stubs have no `unknowns` section), same mechanism kinds and
levels, every study id, same figures (Compare, KeyNumber, Mechanism, StudyTable, RegulatoryTable, ProductCheck,
WarningSigns). `regulatory_notes` only EU, NL and WADA. No `related` key on English, so none here. No authorised
products, so no `indications`.

### GHK-Cu

- **Back from the saved material (23 October), re-checked:** the EU cosmetics frame: CosIng lists COPPER TRIPEPTIDE-1
  (`cosing-copper-tripeptide-1`) and an injected product is never a cosmetic (Regulation 1223/2009 art. 2(2),
  `eu-regulation-1223-2009-cosmetics`); the ProductCheck extra line ("Volgens de Europese wet is iets om te spuiten nooit
  een cosmetisch product", with the 23 October extraSources); the EU/NL regulatory notes; "Dutch law forbids supplying a
  medicine without a marketing authorisation" (`nl-gmw-art-40-handelsvergunning`).
  - The research of 27 October did **not** re-check the cosmetics clause (eu-status.md "Saved facts NOT re-checked";
    status/ghk-cu.yaml; merge.md). So I re-checked it today: the CosIng details page (ID 55687), read in the built-in
    browser (own tab) on 27 October 2026, shows INCI name COPPER TRIPEPTIDE-1, "Copper Tripeptide-1 is a copper complex
    of Tripeptide-1", function SKIN CONDITIONING, an empty "Cosmetics Regulation provisions" field and no "Other
    restriction(s)". Art. 2(2) and the NVWA's supervision were re-read by nl-law.md (fact 34, "Confirmed unchanged").
    The page therefore says "zonder verbod of beperking" (what the record shows), not "allowed" in a stronger sense.
- **Rewritten for the Netherlands:** the four-country cosmetics comparison (US, UK, Canada, Australia) became the EU
  rule and the NVWA; the US fold "cosmetic or drug" became "Cosmetica of geneesmiddel: de regels in Nederland en de EU"
  (EU definition of a cosmetic; Gnw art. 1 presentation test, labelled "volgens onze lezing", linking
  `/nl/legal/nl/#wat-een-geneesmiddel-is`); the UK/Canada/Australia fold became "Wat de Nederlandse wet zegt" (CBG search,
  art. 40, Opiumwet) and "Zelf gebruiken en zelf invoeren" (art. 40, the 2019 parcel ruling, Douane); the FDA compounding
  paragraph stays once and short as world context (category 2 and 1, the PCAC meeting due by end of February 2027, "a
  US listing changes nothing outside the US"); the TGA/Chief Medical Officer warning and Health Canada's seizure list
  moved to the risks fold as evidence (marked). TL;DR: "Is it allowed in creams? (US, UK, Canada; Australia not
  confirmed)" became the EU answer; "Is the FDA reviewing it?" (a US route) was replaced by "En om te spuiten?" (EU art.
  2(2)). Help: Thuisarts help levels; side effects to Lareb; a reaction to a cream can be reported to the NVWA
  (`nvwa-cosmetica-toezicht` note: "consumers can report unsafe cosmetics to the NVWA"); `<JurisdictionCard code="NL" />`;
  one Belgian line (FAGG).
- **Dropped citations (US/UK/CA/AU framing):**
  - what-it-is Compare: `fda-cosmetics-prohibited-restricted`, `uk-cosmetic-products-reg-gb-annexes`,
    `ca-hc-cosmetic-ingredient-hotlist`, `au-aicis-inventory-search-ghk-cu-2026-10-23`, `au-aicis-cant-find-chemical`
    (four-country cosmetic status) → `cosing-copper-tripeptide-1`; `uk-cosmetic-products-reg-gb-art-2`,
    `ca-hc-cosmetic-drug-interface-guidance`, `openfda-drugsfda-search-stubs-b-2026-10-23`,
    `uk-mhra-substance-index-status-c-2026-10-23`, `ca-dpd-search-status-c-2026-10-23`,
    `au-artg-search-status-c-2026-10-23` → `eu-regulation-1223-2009-cosmetics`, `ema-medicines-json`,
    `cbg-gib-search-status-2026-10-27`.
  - glance.facts "On the skin" and "Injected use": `uk-cosmetic-products-reg-gb-annexes`, `ca-hc-cosmetic-ingredient-hotlist`,
    `fda-cosmetics-prohibited-restricted`, `uk-cosmetic-products-reg-gb-art-2`, `ca-hc-cosmetic-drug-interface-guidance`
    → `cosing-copper-tripeptide-1`, `eu-regulation-1223-2009-cosmetics`.
  - regulatory Compare (four countries): `openfda-drugsfda-search-stubs-b-2026-10-23`, `fda-cosmetic-or-drug`,
    `uk-mhra-substance-index-status-c-2026-10-23`, `ca-noc-search-status-c-2026-10-23` and the cosmetics ids above →
    `cbg-gib-search-status-2026-10-27`, `nvwa-cosmetica-toezicht`, `ema-medicines-json`, `ema-orphan-designations-json`,
    `cosing-copper-tripeptide-1`.
  - US fold: `fda-cosmetics-prohibited-restricted`, `fda-cosmetic-or-drug` (US cosmetics law) → EU/NL law
    (`eu-regulation-1223-2009-cosmetics`, `nl-gmw-art-1-geneesmiddel`). The sentence on the FDA's enforcement discretion
    for category-1 substances (a US compounding route) was left out; `fda-503a-categories-2026-05` stays cited for
    "category 1, still under evaluation".
  - UK/Canada/Australia fold: `uk-hmr-2012-reg-2`, `uk-hmr-2012-reg-46`, `uk-govuk-search-status-c-2026-10-23`,
    `ca-fda-s2-definitions`, `ca-food-and-drug-regulations`, `ca-hc-recalls-database`, `au-tga-2026-04-peptide-responsibilities`,
    `au-poisons-standard-2026-10`, `au-tga-peptide-products-hub` (plus the ids above) → the Dutch law sources. Kept as
    evidence in the risks fold: `au-tga-2026-06-cmo-peptide-statement`, `ca-hc-2026-04-think-twice-peptides`.
  - ProductCheck extraSources `uk-cosmetic-products-reg-gb-art-2`, `ca-hc-cosmetic-drug-interface-guidance` →
    `eu-regulation-1223-2009-cosmetics`, `cosing-copper-tripeptide-1` (the saved Dutch line).
  - Legal routes fold: `openfda-…`, `uk-mhra-…`, `ca-dpd-…`, `au-artg-…` → `cbg-gib-search-status-2026-10-27`,
    `ema-medicines-json`; the English route links (`/en/legal-routes/#…`) → the seven Dutch anchors. Reporting:
    `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `au-tga-report-adverse-event`
    → `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `nvwa-cosmetica-toezicht`, the NL card.

### AOD-9604

- **Back from the saved material, re-checked:** the GRAS fold's EU food sentence (`eu-regulation-178-2002-food-law`):
  not covered by research/nl, so I re-read the Dutch text of art. 2 today (Publications Office resolver, CELEX 32002R0178):
  a "levensmiddel" is what is "bestemd ... om door de mens te worden geconsumeerd"; "Onder deze definitie vallen niet:
  ... d) geneesmiddelen". The page states those two points and labels the step to injections as our reading ("volgens
  ons"). The NL/EU Compare column (CBG, EMA, art. 40) is back, with the 27 October sources. The saved EU note "no
  European Pharmacopoeia monograph" was **not** reused (eu-status.md: not re-checked; nl-care.md §5: unverified).
- **Rewritten for the Netherlands:** the four-country Compare became NL and EU rows (CBG; art. 40; EMA medicines,
  under-evaluation and orphan data; Directive 2001/83); the 12–0 PCAC vote of December 2024 and the FDA category 2 stay
  once as world context in the status fold, with "Een Amerikaanse lijst verandert niets buiten de VS"; the UK/Canada
  fold became "Wat de Nederlandse wet zegt" (with the Opiumwet result, `nl-opiumwet-lijsten-2026-09`, in place of the UK
  Misuse of Drugs Act; no compassionate-use programme) and "Zelf gebruiken en zelf invoeren"; "Australia, where it
  began" kept its history (development, the 2005 trial registration, the 2007 stop, the 2013 Crime Commission report,
  WADA's 2013 S0 statement; marked as history) and lost its Australian scheduling and state-law paragraphs. TL;DR:
  "Can US pharmacies make it?" (US route) and "Can I own it in Australia?" became "Mag ik het invoeren?" (art. 40) and
  "Gebruik je het toch?" (condensed from the stop list). Help levels, Lareb, NL card, BE line as above.
- **Dropped citations:** what-it-is Compare `mhra-products-search-status-d-2026-10-23`,
  `ca-dpd-search-canada-legal-2026-10-23`, `au-artg-search-status-d-2026-10-23` → `cbg-gib-search-status-2026-10-27`,
  `ema-medicines-json`. Regulatory Compare `usc-21-355`, `mhra-products-search-status-d-2026-10-23`, `uk-hmr-2012-reg-46`,
  `ca-dpd-extract-search-merge-2026-10-24`, `ca-food-and-drug-regulations`, `ca-hc-recalls-search-status-d-2026-10-23`,
  `au-poisons-standard-2026-10`, `au-tg-act-s19b-19d-offences`, `au-tga-2026-04-peptide-responsibilities` → NL/EU sources
  (`fda-pcac-2024-12-minutes` moved to the fold). UK/CA/AU fold: `uk-mda-1971-sch-2`, `uk-home-office-fews-2017-18`,
  `ca-hc-2026-04-think-twice-peptides`, `au-poisons-standard-2015-06`, `au-poisons-standard-2015-02`,
  `au-tga-2014-09-scheduling-consultation`, `au-vic-dpcs-act-1981`, `au-nsw-health-s4d`, `au-nsw-health-s4d-2026`,
  `au-tga-search-status-d-2026-10-23`, `au-tga-2026-06-peptide-compliance-priority` (and the ids above), plus the links
  to `/en/legal/us|uk|ca|au/` → the Dutch law sources and `/nl/legal/nl/`. Reporting: the five US/UK/CA/AU ids → Lareb.
  Kept as registry evidence: `ctgov-search-status-d-2026-10-23`, `au-anzctr-search-status-d-2026-10-23`,
  `anzctr-actrn12605000067673` (marked), plus the Dutch searches.

### Hexarelin

- **Back from the saved material, re-checked:** the NL/EU Compare column (no EU or Dutch authorisation; art. 40) with
  the 27 October sources. The saved German Anti-Doping Act sentence (`de-antidopg-anlage`, `de-antidopg-2`) stays out
  (German frame).
- **Rewritten for the Netherlands:** four-country Compare → NL and EU rows; the UK/Canada/Australia fold → "Nederland en
  de EU" (CBG search for hexarelin and hexareline, art. 40, Opiumwet, no compassionate-use programme, own use and
  import, EMA also under examorelin); the legal callout now says that FDA decisions change nothing in NL or the EU; the
  WADA line adds the Dopingautoriteit's Dutch wording "examoreline (hexareline)". The stop list splits chest pain (112,
  Thuisarts "pijn op de borst") from palpitations that do not settle (huisarts or huisartsenpost, Thuisarts
  "hartkloppingen"), because the Dutch help levels differ. TL;DR "Is it legal to sell? (four countries; Australia limits
  possession)" → "Mag iemand het leveren?" (NL).
- **Dropped citations:** what-it-is Compare `mhra-products-search-hexarelin`, `ca-dpd-search-status-b-2026-10-23`,
  `au-artg-search-status-b-2026-10-23` → `cbg-gib-search-status-2026-10-27`, `ema-medicines-json`
  (`openfda-drugsfda-search-stubs-b-2026-10-23` stays as world context). Regulatory Compare `usc-21-355`,
  `uk-hmr-2012-reg-46`, `ca-noc-search-status-b-2026-10-23`, `ca-hc-recalls-database`, `au-poisons-standard-2026-10`,
  `au-tga-how-we-regulate-peptides` → NL/EU sources. UK/CA/AU fold: `uk-govuk-search-status-b-2026-10-23`,
  `uk-mda-1971-sch-2`, `ca-dpd-extract-search-status-b-2026-10-23`, `ca-pdl-human`, `ca-food-and-drug-regulations`,
  `au-poisons-standard-2015-06`, `au-poisons-standard-2015-02`, `au-nsw-health-s4d`, `au-nsw-health-s4d-2026`,
  `au-vic-dpcs-act-1981`, `au-customs-prohibited-imports-regs`, `au-odc-growth-hormones-import-permit`,
  `au-tga-personal-importation-scheme` → Dutch law sources. Routes fold: `fda-off-label-use`, `usc-21-353a` (US routes) →
  `nl-gmw-art-68-off-label`, `igj-qa-zonder-handelsvergunning`, `igj-eigen-bereidingen-apotheek`; reporting: the five
  US/UK/CA/AU ids → Lareb. Kept as registry evidence: `ctgov-search-status-b-2026-10-23`,
  `au-anzctr-search-status-b-2026-10-23`.

### Kept on all three (science, evidence)

Every study, number, caveat, claim level and mechanism step of the English pages, in Dutch number format (98,5%;
1.815,1 g/mol; 19,1 → 10,5; 5,3 → 8,3 cm). The NHS pages in the stop lists stay (medical facts, as on other Dutch
pages); the Thuisarts pages are added for the Dutch help level (`thuisarts-wondroos`, `thuisarts-sepsis`,
`thuisarts-dikke-ogen-lippen`, `thuisarts-pijn-op-borst`, `thuisarts-hartkloppingen`). The FDA briefings stay as
evidence (marked).

## UNRESOLVED points and how the pages handle them

- **Artsenverklaring for a substance authorised nowhere** (nl-care §5, fact-check "Still UNRESOLVED"): "Of die weg kan
  werken voor een stof die nergens als medicijn is goedgekeurd, weten we niet." (all three).
- **European Pharmacopoeia monographs** (nl-care fact 34, §5): "Of er een monografie van … bestaat, hebben we niet
  kunnen nagaan." The saved AOD-9604 EU note "no European Pharmacopoeia monograph" was left out.
- **"In voorraad hebben" for a few vials at home** (nl-law 5.1): "zegt de wet niet duidelijk".
- **Whether a vial is a medicine or an active substance for Customs** (nl-law 5.4): not stated; GHK-Cu says "Is een
  flacon volgens de wet een geneesmiddel? Dan …" and links the two-test explanation on `/nl/legal/nl/`.
- **S0 for GHK-Cu, a cosmetic ingredient not named on the list** (nl-law 5.10): WADA row "unclear"; "Vraag het de
  Dopingautoriteit".
- **National authorisations in other member states** (eu-status §5 item 7): every page says "geen handelsvergunning
  voor de hele EU" and "niet goedgekeurd in Nederland", never "in geen enkel EU-land". The English description of
  hexarelin ("never approved") became "In de jaren 90 is het in kleine studies bij mensen getest" plus the NL/EU/US
  statements, so no worldwide claim rests on unsearched registers.
- **GHK-Cu cosmetics clause** (eu-status "not re-checked"): re-checked today (above).
- **Fines or prosecution of private importers** (nl-law 5.2): not claimed; the pages say only what the law and the 2019
  ruling say.

## Open questions for the medical or legal reviewer

1. Legal (GHK-Cu): "Volgens onze lezing kan dus ook een crème onder de Geneesmiddelenwet vallen, als die wordt
   voorgesteld als middel tegen een ziekte." Our reading of Gnw art. 1 (presentation) applied to a cosmetic.
2. Legal (GHK-Cu): the Compare says "Toegestaan als cosmetisch ingrediënt? Ja" on the basis of CosIng (no Cosmetics
   Regulation provision, no other restriction) and the NVWA page. Is "toegestaan" right for an ingredient that is on no
   annex, with the product's safety the responsible person's duty? (The research did not read the annexes.)
3. Legal (AOD-9604): "Een product om te spuiten is volgens ons dus geen voedingsmiddel." Our reading of Regulation
   178/2002 art. 2 (Dutch "geconsumeerd"; the English text says "ingested").
4. Legal (AOD-9604): "Wordt een product aangeprezen voor afvallen of herstel? Dan valt het volgens onze lezing meestal
   al onder de omschrijving van een geneesmiddel." Mirrors `/nl/legal/nl/`.
5. Medical (all): the help level per stop sign: chest pain or pressure that stays → 112 (Thuisarts pijn op borst);
   palpitations that do not settle → huisarts or huisartsenpost (Thuisarts hartkloppingen); hot, red injection site,
   fever after an injection → huisarts or huisartsenpost (Thuisarts wondroos, sepsis); swelling of face or throat,
   trouble breathing → 112 (Thuisarts dikke ogen of lippen). The closing line is "Twijfel je? Bel je huisarts of de
   huisartsenpost." (STYLE-NL §5.1) instead of English's single emergency line, because each item carries its level.
6. Medical (hexarelin): the growth-hormone-medicine risks rest on the FDA's CJC-1295 briefing (US evidence, as on
   English). A Dutch reviewer may prefer an EU somatropin SmPC; not changed.
7. Advertising test (GHK-Cu): the KeyNumber "Eén studie met een gel bij voetwonden vond een voordeel" stands next to
   two null results and carries its level; the TL;DR says "Wisselend, in kleine studies". Please check the balance.

## Style terms (STYLE-NL lacks them; the word used)

| English | Nederlands (used) | Note |
|---|---|---|
| copper tripeptide-1 (INCI name) | copper tripeptide-1 | as CosIng and the labels write it |
| cosmetic ingredient database (CosIng) | de Europese databank van cosmetische ingrediënten (CosIng) | |
| medical device · 510(k) clearance | medisch hulpmiddel · toestemming als medisch hulpmiddel, via de 510(k)-procedure | glossary `medical-device-clearance` |
| wound chamber | wondkamer | |
| venous leg ulcer · diabetic foot ulcer | open been (door slecht werkende aders) · diabetische voetwond | as the Dutch glossary |
| laser resurfacing | laserbehandeling van de huid | |
| evaluator-blinded | met geblindeerde beoordelaars | as the Dutch glossary alias |
| dummy / vehicle gel · inert cream | gel zonder werkzame stof · crème zonder werkzame stof | B1 |
| nomination (FDA bulks list) · category 1/2 | voordracht · categorie 1/2 | |
| growth hormone fragment | groeihormoonfragment | Dopingautoriteit: "Groeihormoonfragmenten zoals AOD-9604" |
| GHRPs | peptiden die groeihormoon vrijmaken (GHRP’s) | WADA name quoted as "examoreline (hexareline)" (Dopingautoriteit) |
| short children | kinderen met een kleine lengte | |
| coronary arteries | kransslagaders | glossary `coronary-artery` |
| osteoarthritis | artrose | glossary `osteoarthritis` |
| euphoria | euforie (een opgewonden, blij gevoel) | |
| drip, IV infusion | infuus, infusen | |
| wind (flatulence) | winderigheid | |
| hives | galbulten | Thuisarts word |
| sold under this name | (de stof die) onder deze naam in omloop is | avoids commerce words |
| clinics market it | klinieken prijzen het aan | |
| when to stop and get help (###) | Wanneer je stopt en hulp zoekt | as tirzepatide |
| stop callout title | Stop en zoek hulp als je dit merkt | STYLE §2.1; most Dutch compound pages use it |

## For the final sweep (files this group does not own)

1. `src/data/sources/stubs-b.yaml` → `cosing-copper-tripeptide-1`: `accessed: 2026-10-27`; add to the note "Re-read
   27 October 2026 in a browser: INCI name COPPER TRIPEPTIDE-1, 'Copper Tripeptide-1 is a copper complex of
   Tripeptide-1', function SKIN CONDITIONING, no Cosmetics Regulation provision, no other restriction."
2. `src/data/sources/stubs-b.yaml` → `eu-regulation-178-2002-food-law`: `accessed: 2026-10-27`; note: Dutch text of art. 2
   re-read (CELEX 32002R0178, Publications Office resolver): "bestemd ... om door de mens te worden geconsumeerd";
   excluded: "d) geneesmiddelen".
3. `research/nl-notes/merge.md` and the comment on the EU row of `src/data/compounds/ghk-cu.yaml`: the GHK-Cu cosmetics
   clause is now re-checked (item 1; art. 2(2) via nl-law.md fact 34), so the EU row's cosmetics sources no longer rest
   only on the 23 October check.
4. `src/data/sources/bpc-157.yaml` → `ema-medicines-json` and `src/data/sources/tb-500.yaml` → `ema-orphan-designations-json`:
   notes and `accessed` (20 October) describe only the BPC-157 and TB-500 searches, but the EU rows of many compounds
   (GHK-Cu, AOD-9604, hexarelin …) cite them for the 27 October searches (research/nl/eu-status.md fact 9, status
   yaml notes: 2,754 and 3,310 records, 0 hits for GHK, copper tripeptide, prezatide, AOD-9604, AOD9604, Tyr-hGH,
   hexarelin, examorelin, EP-23905, MF-6003). Update the notes and dates, or register the 27 October searches.
5. Two ids for the same EMA spreadsheet (applications under evaluation, October 2026): `ema-under-evaluation-2026-10`
   (pt-141.yaml; used by the data files and these pages) and `ema-2026-10-under-evaluation` (retatrutide.yaml). Merge.
6. `src/i18n/nl/glossary/stubs-b.json`: the English `medical-device-clearance` (510(k)) had no Dutch entry; it is now in
   `nl-stubs-b1.json`. Move it if the sweep prefers one file per English group. Do not add a plain "GRAS" alias to the
   Dutch `gras` entry: matching is case-insensitive, so it would link every Dutch "gras".
7. `src/i18n/nl/glossary/stubs-b.json` → `dermis` (lederhuid): its aliases "opperhuid" and "epidermis" make the outer
   layer link to the lederhuid entry (mirrors English). Optional: a separate `epidermis` entry.
8. `thuisarts-hartkloppingen` was registered by the ipamorelin group (`nl-ipamorelin.yaml`) at the same time as this
   group read the same page; the hexarelin page reuses it and this group's file holds no copy.
9. Stop callout titles on Dutch compound pages are not yet one wording: 16 "Stop en zoek hulp als je dit merkt", 2
   "Stop en zoek hulp", 2 "Zoek direct medische hulp" (semaglutide, retatrutide), 1 "Zoek nu medische hulp"
   (tirzepatide). Harmonise.
10. `check-locale-residue.ts --only i18n/nl/glossary` reports 0 files: the residue scan does not seem to read the Dutch
    glossary. The new glossary entry `medical-device-clearance` says "In de VS" (a warn-level frame word, correct as a
    named-country definition); check whether the scan should cover Dutch i18n files.

## Check (independent, 27 October 2026)

Independent fact-check and edit of the three Dutch pages, the group's source file (no entry) and glossary file, by a
second editor. Read first: the brief (incl. "Added after step 1"), STYLE-NL, CONTENT-GUIDE §1, §1a, §4.1, §5, §9, §11–13,
research/nl/ (nl-law, nl-care, nl-help, eu-status and their fact-check sections; status/ghk-cu, aod-9604, hexarelin.yaml),
nl-notes/merge.md, the manifests (compounds-b, -d, -e) and the current English pages and data files.

**What was checked.** (1) Science parity: every `<Cite>` id, glance and `sources:` id, KeyNumber `source`, claim level,
mechanism kind and level, study id, number and caveat of the English pages, by script and by reading. All 27 (GHK-Cu), 27
(AOD-9604) and 29 (hexarelin) ids that the Dutch pages lack are US/UK/CA/AU framing and are listed in the writer's
dropped-citation list above; no science id, study, number or claim level is missing; mechanism kinds/levels and all study
ids (7, 6, 6) match. (2) Every Dutch, EU and Belgian statement against research/nl and the merged EU/NL rows. (3) Links:
every internal link is `/nl/…`; the seven route anchors and `/nl/legal/nl/#wat-een-geneesmiddel-is` exist as headings in
the Dutch target files; no `/en/` and no US/UK/CA/AU/IE-NZ page. (4) The advertising test, §5.6 words and commerce words
in titles, headings, Lead questions, fold and figure titles, labels and link texts. (5) Language, B1, STYLE-NL terms and
first mentions. (6) Frontmatter (translation block, regulatory_notes NL/EU/WADA only, no products so no indications, glance
and TL;DR limits).

**Re-read today by the checker (not taken from the writer's notes):**

| Source | How | What it says (relied on) |
|---|---|---|
| `cosing-copper-tripeptide-1` | CosIng search API (api.tech.ec.europa.eu, database GROWTH_COSING, query INCI "COPPER TRIPEPTIDE-1") | substanceId 55687, status Active, chemicalDescription "Copper Tripeptide-1 is a copper complex of Tripeptide-1", functionName SKIN CONDITIONING, annexNo [], cosmeticRestriction [], otherRestrictions []. The writer's re-check holds; "zonder verbod of beperking" is what the record shows. |
| `eu-regulation-1223-2009-cosmetics` | Dutch text through the Publications Office CELLAR resolver (CELEX 32009R1223) | art. 2(1)(a): "opperhuid, beharing, haar, nagels, lippen en uitwendige geslachtsorganen ... tanden en kiezen en de mondslijmvliezen, met het uitsluitende of hoofdzakelijke oogmerk deze te reinigen, te parfumeren, het uiterlijk ervan te wijzigen en/of ... te beschermen of in goede staat te houden of lichaamsgeuren te corrigeren"; art. 2(2): "ingenomen, geïnhaleerd, ingespoten of ingebracht ... niet als cosmetische producten worden beschouwd". |
| `eu-regulation-178-2002-food-law` | Dutch text through the Publications Office resolver (CELEX 32002R0178) | art. 2: "'levensmiddel' (of 'voedingsmiddel'): alle stoffen en producten ... die bestemd zijn om door de mens te worden geconsumeerd"; "Onder deze definitie vallen niet: ... d) geneesmiddelen". |
| `nvwa-cosmetica-toezicht` | curl, page modified 2026-09-11 | "Krijgt u bij gebruik van cosmetica last van jeuk, uitslag of blaasjes? ... Ga naar uw huisarts voor medisch advies."; "Als consument meldt u onveilige cosmetica bij de NVWA". |

Every other Dutch, EU or help source on the pages was checked against its registry note and the research fact it rests on
(nl-law facts 2, 4–7, 31, 34–35, 36–43; nl-care facts 13, 18, 20–26, 29–31, 39, 49 and §5.5, §5.11; nl-help facts 10–11,
14, 17, 19, 22; eu-status facts 1, 32 and §5.7; status yaml notes; the Dopingautoriteit translation note).

### Changes made

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| ghk-cu | TL;DR "Werken crèmes?": "Eén gel hielp, naast gewone wondzorg, …" | "In één studie hielp een gel, naast gewone wondzorg, …" | "one gel helped" read as a general effect; English says "one gel trial" (advertising test: an effect only with its evidence) | mulder-1994-ghk-diabetic-ulcers |
| ghk-cu | TL;DR "En om te spuiten?": "Dan is het volgens de EU geen cosmetica. Spuiten is nooit bij mensen onderzocht." | "Dan is het volgens de Europese wet geen cosmetisch product." | second sentence stronger than English ("no published study") and a repeat of the risk tile; term "cosmetisch product" (glossary `cosmetic-product`) | eu-regulation-1223-2009-cosmetics art. 2(2) |
| ghk-cu | main_risk "Spuiten is nooit bij mensen getest. …" | "Geen gepubliceerde tests van spuiten bij mensen. Flacons kunnen bacteriën bevatten." | parity with English "No published tests of shots in people" | pubmed-ghk-cu-count-2026-10-23 |
| ghk-cu | fact "Om te spuiten": "Geen studies bij mensen; volgens de EU geen cosmetica" | "Geen gepubliceerde studies bij mensen; volgens EU-recht geen cosmetica" | parity ("published") | same ids |
| ghk-cu | regulatory_notes EU "… nooit cosmetica." | "… nooit een cosmetisch product." | one term | eu-regulation-1223-2009-cosmetics |
| ghk-cu | mechanism Lead "… en stijgt het collageen." | "… en verhoogt het collageen." | grammar (parity "boosts collagen") | – |
| ghk-cu | regulatory Compare, NL × cosmetics cell cited only the NVWA | cites `cosing-copper-tripeptide-1,nvwa-cosmetica-toezicht` | the "yes" rests on the CosIng record | CosIng (re-read) |
| ghk-cu | fold "Status in Nederland, de EU en de sport" (holds the FDA paragraph) | "Status in Nederland, de EU en de sport, en wat de FDA doet" + marker | a fold title says what it holds (STYLE §4.3) | – |
| ghk-cu, aod-9604, hexarelin | first body mention "WADA" | "het Wereld Anti-Doping Agentschap (WADA)" | STYLE §2.7 first mention | – |
| ghk-cu | cosmetic definition "Het maakt schoon, geeft geur, verandert …, beschermt of houdt in goede staat." | "Het is vooral bedoeld om schoon te maken, geur te geven, het uiterlijk te veranderen, te beschermen, in goede staat te houden of lichaamsgeur tegen te gaan." | the Dutch text says "uitsluitende of hoofdzakelijke oogmerk" and lists body odour | 1223/2009 art. 2(1)(a), re-read today |
| ghk-cu | Gnw art. 1: fragment "Of als het bedoeld is om …" | "Dat geldt ook als het bedoeld is om …" | B1: no sentence fragments | nl-gmw-art-1-geneesmiddel |
| ghk-cu, aod-9604, hexarelin | "Laat je een pakket per post komen? Dan geldt ook de regel voor reizigers niet, oordeelde een rechter in 2019." | "Reizigers mogen medicijnen voor eigen gebruik meenemen zonder invoervergunning. Die regel gaat alleen over die vergunning: het verbod van artikel 40 blijft gelden. En voor een pakket dat je laat opsturen, geldt de regel voor reizigers niet. Dat oordeelde een rechter in 2019." | the old line named a rule the reader had not met, and could be read as "a traveller may bring the vial in"; art. 18(6)(a) lifts only the art. 18 licence (as /nl/legal/nl/ says) | nl-law facts 7, 38, 39, 43; nl-gnw-art-18-licence, nl-rbdha-2019-4817-postzending-eigen-gebruik |
| ghk-cu | "Is een flacon volgens de wet een geneesmiddel? Dan is invoeren verboden …" (other case left open) | added "Ziet de Douane de inhoud als werkzame stof (een grondstof voor medicijnen)? Dan kan een particulier die helemaal niet per post invoeren." | without it the conditional suggests import may be fine if the vial is not a medicine; which class a vial falls in stays unknown (nl-law 5.4) | nl-law fact 40; douane-hvgem-geneesmiddelen-h13-fysiek-toezicht-werkzame-stoffen |
| ghk-cu, aod-9604, hexarelin | stop item "Je krijgt galbulten, een dik gezicht of een dikke keel, of je ademt moeilijk (een allergische reactie). Bel 112." | "Je gezicht of keel wordt dik, je krijgt overal galbulten, of je ademt moeilijk (misschien een zware allergische reactie). Bel direct 112." | hives alone are the `stop` level in src/i18n/nl/warning-signs.json (hives-swelling), so the item sent them to 112 against the list below it; fixed phrase "Bel direct 112." (STYLE §5.1); wording as cjc-1295 | thuisarts-dikke-ogen-lippen; nl-help facts 10, 17 |
| aod-9604 | stop item chest pain "Bel 112."; TL;DR "Bel dan 112." | "Bel direct 112."; "Bel dan direct 112." | STYLE §5.1 fixed phrase | thuisarts-pijn-op-borst |
| hexarelin | stop items: chest pain "…, en dat gaat niet weg als je stil zit. Bel 112." and palpitations "… Bel direct je huisarts. Is de praktijk dicht? Bel dan de huisartsenpost." | one item: "Je krijgt pijn of een drukkend gevoel op je borst, of je hart klopt heel snel of onregelmatig en komt niet tot rust. Bel direct 112." | `chest-pain` and `palpitations-severe` are `emergency` in the Dutch warning signs rendered right under the callout; "where the site is faster it keeps its level" (nl-help fact 17); the added "als je stil zit" narrowed the site's chest-pain sign; same as cjc-1295. Frontmatter comment updated | thuisarts-pijn-op-borst, thuisarts-hartkloppingen, nhs-heart-palpitations |
| ghk-cu, aod-9604, hexarelin | "Een magistrale bereiding … kan alleen met een grondstof die in een officiële farmacopee staat. Of er een monografie van … bestaat, hebben we niet kunnen nagaan." | "Een apotheek mag op recept zelf een medicijn maken voor één patiënt: een magistrale bereiding. Staat een grondstof in geen enkele officiële farmacopee? Dan kan die volgens de IGJ "niet zomaar worden gebruikt". Of … in een officiële farmacopee staat, hebben we niet kunnen nagaan." | "kan alleen" overstated the IGJ ("niet zomaar"); the unverified point covers every official pharmacopoeia, not only a monograph (nl-care §5.5) | igj-eigen-bereidingen-apotheek; eu-directive-2001-83 art. 3(1) (added cite) |
| ghk-cu | NVWA line | added "Ga dan voor medisch advies naar je huisarts." | the NVWA page says so (re-read today); the doctor first | nvwa-cosmetica-toezicht |
| aod-9604 | main_risk "Inhoud van een flacon is onbekend. …" | "Wat in een flacon zit, is onbekend. Lange termijn nooit onderzocht." | Dutch grammar (article missing) | – |
| aod-9604 | what-it-is Compare: detail "de FDA" before the first full mention; row "FDA … Het is ook niet goedgekeurd in Nederland of voor de EU." | detail "de Amerikaanse medicijnautoriteit FDA"; row "Niet in Nederland en niet voor de EU. Het zit ook in geen enkel medicijn dat de FDA goedkeurde." | STYLE §2.7; the reader's frame first, the US as world context | cbg-gib-search-status-2026-10-27, ema-medicines-json, fda-pcac-2024-aod9604-briefing |
| aod-9604 | GRAS "(algemeen erkend als veilig)" | ("algemeen erkend als veilig") | the US term in quotes, so "veilig" is not our claim (STYLE §5.6) | fda-gras-inventory-search-2026-10-23 |
| aod-9604 | "… volgens ons dus geen voedingsmiddel." | "… geen levensmiddel." | same word as the sentence before (the act defines "levensmiddel (of voedingsmiddel)") | 178/2002 art. 2, re-read today |
| aod-9604, hexarelin | EU: "Zonder handelsvergunning mag een medicijn in geen enkele lidstaat in de handel." | "Zonder handelsvergunning van een lidstaat of voor de hele EU mag …"; EU fold adds "Of een ander EU-land zelf een handelsvergunning gaf, hebben we niet nagekeken." | Directive art. 6 allows national authorisations, which were not searched (eu-status §5.7: never imply "in no EU country") | eu-directive-2001-83; eu-status fact 32, §5.7 |
| aod-9604 | fold "Status in Nederland, de EU en de sport" (holds the 2024 PCAC vote) | "…, en de Amerikaanse stemming" + marker | fold title | – |
| aod-9604 | fold "Nederland en de EU" (also holds "Waar het begon") | "Nederland en de EU, en waar het begon" | fold title | – |
| aod-9604 | `<Cite id="nl-gmw-art-1-geneesmiddel" />` after "Zie [wat een geneesmiddel is](…)." | cite moved to the claim | the cite belongs to "volgens onze lezing …" | – |
| aod-9604, hexarelin | "Er is geen goedgekeurd programma voor compassionate use." | "In de lijst van goedgekeurde programma's voor compassionate use van het CBG staat … niet." | say what the source shows (the CBG list was text-searched) | cbg-compassionate-use-list; nl-care fact 39 |
| aod-9604 | risks Lead "De lange termijn is nooit onderzocht." | "De veiligheid op lange termijn is nooit onderzocht." | parity ("long-term safety") | – |
| aod-9604 | risks Compare title "… een paar alarmsignalen …" | "Kleine studies gaven een paar signalen over de veiligheid. Niemand onderzocht ze verder." | "alarmsignalen" is the site's stop-now term (STYLE §2.1) | fda-pcac-2024-aod9604-briefing |
| aod-9604 | "AOD-9604 is gevonden in in beslag genomen producten die … testte, en in in beslag genomen flacons in de VS." | two sentences, no "in in" | readability | vanhee-2014-aod9604-seized, cox-2015-aod9604-detection |
| hexarelin | mechanism step 4 title "Het hart pompt een uur harder; …" | "Het hart pompt tot een uur harder; …" | parity ("up to an hour"; Bisi 1999 "up to 60 minutes") | bisi-1999-hexarelin-heart |
| glossary nl-stubs-b1 | `medical-device-clearance`: "… wordt toegelaten als de FDA het vergelijkbaar vindt met een hulpmiddel dat al is toegelaten." | "… op de markt mag komen. De FDA moet het dan vergelijkbaar vinden met een hulpmiddel dat al op de markt is." | two passives in one sentence (STYLE §1 rule 3); parity with English ("on the market") | – |
| glossary nl-stubs-b1 | `coronary-artery`: "Raakt er een vernauwd of verstopt, dan krijgt …" | "Raakt er een vernauwd of verstopt? Dan krijgt …" | STYLE §1 rule 5 | – |

**Checked and left as written (correct):** the CosIng clause (re-read above); the art. 40 list paraphrase ("aan iemand
geven" for "ter hand stellen" in B1, a subset of the acts); "Gebruiken staat niet in de lijst"; "in voorraad hebben …
zegt de wet niet duidelijk" (nl-law 5.1); the Opiumwet (fact 35); the artsenverklaring requirements and "weten we niet"
(nl-care fact 24, §5.11); off-label only for authorised medicines (fact 18); no Dutch trial (fact 49; GHK's OMON hits are
fuzzy matches); Lareb for everyone, also for illegal products (nl-help facts 19, 22); the Belgian line (brief); the EU and
NL status rows and notes (status yaml, as_of 27 October 2026); the WADA rows (unclear for GHK-Cu with "Vraag het de
Dopingautoriteit", nl-law 5.10; S2 for AOD-9604 and hexarelin, Dutch names from the Dopingautoriteit's translation); the
2013 history (marked); all study findings, limitations, numbers (Dutch format) and claim levels.

**Validation after the changes:** `validate-content.ts --only compounds/nl/ghk-cu`, `…/aod-9604`, `…/hexarelin` and
`--only nl-stubs-b1`: 0 errors, 0 warnings each (one warning on the new GHK-Cu fold title, "FDA", was fixed with the
world-context marker). `check-locale-residue.ts --only compounds/nl/<slug> --details`: 0 error/frame hits, 0 warn hits.

### Remaining concerns for the reviewers

1. **Legal reviewer, GHK-Cu:** "Toegestaan als cosmetisch ingrediënt? Ja" rests on CosIng (no annex entry, no restriction)
   and EU law; the product's safety remains the responsible person's duty. "Toegestaan" may read stronger than "niet
   verboden of beperkt" (the TL;DR and notes use the weaker words). Writer's question 2.
2. **Legal reviewer, our readings** (labelled on the pages): Gnw art. 1 presentation applied to a cream (GHK-Cu); 178/2002
   art. 2 "geconsumeerd" read as excluding injection (AOD-9604; the English text says "ingested"); "aangeprezen voor
   afvallen of herstel … meestal een geneesmiddel" (AOD-9604, mirrors /nl/legal/nl/).
3. **Medical reviewer, help levels:** palpitations that do not settle and chest pain are now "Bel direct 112" on hexarelin
   (the site's emergency level; Thuisarts says "bel direct je huisarts" for palpitations). Widespread hives with swelling
   or breathing trouble go to 112; hives alone are left to `<WarningSigns />` (stop level).
4. **NHS pages** (`nhs-chest-pain`, `nhs-heart-palpitations`, `nhs-cellulitis`, `nhs-sepsis`, `nhs-anaphylaxis`) stay as
   medical sources for the stop signs, next to Thuisarts, as on other Dutch compound pages; no UK route is named. A Dutch
   reviewer may prefer Thuisarts alone.
5. **World context on GHK-Cu:** the FDA paragraph in the status fold (category 2 safety concern, category 1, PCAC by end
   of February 2027, point 5) is longer than "one sentence"; the category 2 concern is evidence, the rest is the
   US-listing framing with "niets veranderen buiten de VS". Cut to the safety sentence if the editor prefers.
6. **Advertising test, GHK-Cu KeyNumber** "Eén studie met een gel bij voetwonden vond een voordeel" (writer's question 7):
   it carries its level and stands between two null results; the TL;DR now says "In één studie". Acceptable in my reading.
7. **Asymmetry:** GHK-Cu keeps the TGA/Chief Medical Officer warning and Health Canada's seizure list as safety evidence
   (marked); AOD-9604 and hexarelin dropped the Canadian seizure lines with the Canadian frame. Not wrong; the editor may
   want one rule.
8. **Source registry (other owners' files):** `ema-medicines-json` (bpc-157.yaml) and `ema-orphan-designations-json`
   (tb-500.yaml) still carry notes and `accessed: 2026-10-20` for the BPC-157 and TB-500 searches only, while the EU rows
   cite them for the 27 October searches (writer's sweep item 4, confirmed).

### For the final sweep (added by the checker)

11. `src/data/sources/stubs-b.yaml` → `cosing-copper-tripeptide-1`: the checker confirmed the writer's re-read through the
    CosIng search API on 27 October 2026 (status Active; annexNo, cosmeticRestriction and otherRestrictions empty); the
    `accessed` date and note can say so (writer's item 1). `eu-regulation-1223-2009-cosmetics`: Dutch art. 2(1)(a) and
    2(2) re-read through CELLAR on 27 October 2026; `accessed: 2026-10-27`.
12. `src/data/sources/nl-research-nl-law.yaml` → `nvwa-cosmetica-toezicht` (research file, not editable here): the page
    also says "Ga naar uw huisarts voor medisch advies" for a reaction to cosmetics; the GHK-Cu page now uses it.
13. Stop-callout help levels across Dutch compound pages: check every item that sends hives alone ("galbulten") to 112;
    the Dutch warning sign `hives-swelling` is the stop level. GHK-Cu, AOD-9604, hexarelin and cjc-1295 now say "overal
    galbulten" together with swelling or breathing trouble.
