# Notes: group safety-c (Dutch site, 27 October 2026)

Pages: `src/content/pages/nl/safety/product-risk.mdx` and `src/content/pages/nl/safety/monitoring.mdx`.
Own files: `src/data/sources/nl-safety-c.yaml` (3 new sources), `src/i18n/nl/glossary/nl-safety-c.json` (4 new
terms). Shared file edited once: `config/link-allowlist.json` (host `www.rva.nl` added).

Base: the current English pages (`src/content/pages/en/safety/product-risk.mdx`, `.../monitoring.mdx`, both
last_reviewed 2026-10-24), the saved 23 October versions
(`research/for-nl-site/snapshot-2026-10-23/content/pages-en/safety/`) and `MANIFEST-safety-en-b.md`. Every Dutch, EU
and help fact was re-checked against `research/nl/` (nl-help.md, nl-care.md, nl-law.md and their fact-checks) or
fetched today. Validator and residue check: 0 errors, 0 warnings, 0 residue hits for both pages and both own files.

## safety/product-risk (method: adapted)

**Structure kept:** the same eight `##` sections in the same order, the infographic `online-vial-risks`, the four
diagrams (`insulin-in-fake-pen`, `lab-report-ladder`, `red-flags-product-use-seller`), the three key numbers, the
studies table, the Compare, the stop callout (`id="stop-now"`), `<ProductCheck />` and `<WarningSigns
only="injection,allergic,metabolic" />`. Every study, number, claim level and caveat of the English page is kept, in
Dutch number format (7,7–14,37%; 51,3–190%; 12,8%; 1.190; 10.000).

**The lab-report ladder** is under `## Wat een labrapport wel en niet zegt` (anchor
`#wat-een-labrapport-wel-en-niet-zegt`, as the product check links) and follows STYLE-NL §5.5 word for word: the four
rungs, "*Dit kan het laten zien:*" and "*Dit blijft onbekend:*" under every rung (rung 3 gets "niets over wat er in
de flacon zit", which the English rung 3 lacks, because §5.5 asks for both lines under each rung), the fixed line "De
resultaten gelden alleen voor de geteste monsters." and the closing line "Alleen in de legale keten, van fabriek tot
apotheek, zijn deze controles ingebouwd. Geen rapport vervangt dat." (with the GMP, Qualified Person and IGJ sentences
between them, as the English closing paragraph has its equivalents).

**What came back from the saved 23 October material (re-checked):**
- "A medicine from a pharmacy ... nobody can show you that such checks were done": cited again to the IGJ
  (`igj-online-medicijnen`, re-read today: "Bestelt u een medicijn online, dan is er geen controle op deze medicijnen";
  `igj-2025-illegal-online-medicines`, re-read today).
- The Belgian origin of the public-health lab studies (Janvier 2018, Vanhee 2017) and the German origin of the Cologne
  study: stated as study origin only ("Een Belgisch lab voor volksgezondheid", "op de Belgische markt", the study's own
  title), never as the reader's frame.
- "Two people treated in Dutch hospitals" (Stammers 2026): the source note confirms Dordrecht and Deventer, so the fold
  has a bullet "Nederland, 2026".
- The IGJ warning of 20 October 2026 on stolen insulin pens that may be presented as obesity medication
  (`igj-2026-10-stolen-medicines`, the merged id of nl-help's `igj-2026-10-gestolen-medicijnen`; re-read today; the
  IGJ's own advice quoted with "u", as STYLE-NL §1 allows).
- The 2023 falsified Ozempic pens: not as an insulin case (neither the EMA alert nor the IGJ notice says they held
  insulin; only the BfArM page did, and it is a German-law source whose name is a residue error on Dutch), but in the
  GMP fold, as an example of the EU safety features catching fakes (`ema-2023-falsified-ozempic`,
  `igj-2023-falsified-ozempic`, both re-read today: identified at wholesalers in the EU, originating from wholesalers in
  Austria and Germany, serial numbers inactive when scanned).
- The EU column of the Compare ("What EU guidance asks"): the right column is now "Wat een medicijnfabrikant moet testen"
  with EU sources (Directive 2001/83 art. 40, 48, 51; the EMA synthetic-peptide guideline §4.4.1, which lists bacterial
  endotoxins and microbiological purity in a specification; EudraLex vol. 4 with Annex 1) plus ICH Q6B.

**Rewritten for the Netherlands:**
- The fold "How the pharmacy supply chain checks every batch, by country" (US, UK, CA, AU) became "Hoe de legale keten
  elke batch controleert": the EU (manufacturing authorisation, Qualified Person, GMP in EU law, extra rules for sterile
  medicines), the Netherlands (the IGJ inspects every manufacturer periodically, also of medicines without a
  handelsvergunning: new source `igj-gmp-inspecties-certificaten`) and the safety features since 9 February 2019
  (`cbg-fmd-vervalsing-melden`).
- NVLAP (the US accreditation body) became the Raad voor Accreditatie (new source `rva-over-ons`; host added).
- The warning-signs table: Dutch and EU sources where they say the same (expiry date and batch number on the pack:
  Directive 2001/83 art. 54, read today in the Dutch 1 January 2025 consolidation through CELLAR; "sells a prescription
  medicine without a prescription" and "is not a pharmacy": Gnw art. 61 and the IGJ; "looks different": the EMA alert;
  "cloudy liquid": the EU Wegovy product information, which says the solution must be clear and colourless). One
  sentence added after the table from the IGJ/CBG warning of 3 September 2025: some websites show the logos of the IGJ
  or the CBG, which the IGJ and CBG call false endorsements (a negative sign only; the page's "betrouwbare websites" and
  register advice is not repeated, nl-help §4.13).
- Help: the stop callout and the TL;DR say "112"; the page closes with the Lareb line (STYLE-NL §5.1; "ook als je
  product niet van een apotheek komt": `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`), "Twijfel je? Bel je
  huisarts of de huisartsenpost." and `<JurisdictionCard code="NL" />`.
- **Drug checking (new fold "Kun je een flacon in Nederland laten testen?")**, as nl-help facts 40–41 say: DIMS tests no
  medicines, no steroids and no other performance drugs, does not name peptides, tests only for people who plan to use
  the substance themselves and only drugs from the Netherlands; Jellinek's test service tests no anabolics and no
  medicines; "We vonden in Nederland geen openbare dienst die een peptideflacon test (gezocht op 27 oktober 2026)". That
  a peptide vial falls under what DIMS does not take is written as our reading ("volgens ons"), as nl-help §4.8 asks.
  Mainline (stopped May 2026) is not mentioned.
- Links: `/nl/safety/sterile-technique/#bewaren-en-de-koudeketen` (heading checked in the Dutch file of the other group
  today: `## Bewaren en de koudeketen`; if that heading changes, the anchor must follow), `/nl/safety/monitoring/`,
  `/nl/safety/if-something-goes-wrong/`. Related keys unchanged (all four are Dutch routes).

**Dropped citations (page, cite id, why, what replaced it):**

| Cite id | Where | Why | Replaced by |
|---|---|---|---|
| `ecfr-21-211-165` | opening, Compare rows 1–2, closing ladder line | US rule (batch release testing) | `eu-directive-2001-83` (art. 51), `igj-gmp-inspecties-certificaten`, `ema-2025-synthetic-peptides-guideline`, `fda-1999-ich-q6b` |
| `ca-fdr-c02-018` | opening, GMP fold | Canadian rule | `eu-directive-2001-83` |
| `mhra-2026-01-seizures-2025`, `ca-hc-2026-04-think-twice-peptides` | opening ("not checked by your country's regulator") | UK and Canadian regulator as the reader's frame | `igj-online-medicijnen`, `igj-2025-illegal-online-medicines` |
| `nist-nvlap` | ladder rung 1, fold "Wie het rapport maakte" | US accreditation body | `rva-over-ons` (new) |
| `fda-2016-ich-q7-gmp-api` | ladder rung 1, folds | the FDA's copy of ICH Q7 | `ema-ich-q7-gmp-api` (the EMA's copy of the same ICH text; already the EU source of the product check) |
| `ecfr-21-211-167` | ladder paragraph, Compare row 4 | US sterility rule | `ema-2025-synthetic-peptides-guideline`, `eudralex-volume-4-gmp` (the FDA guidance documents on sterility and endotoxin testing stay as evidence) |
| `ecfr-21-211-160` | Compare row 3 | US rule | `fda-1999-ich-q6b`, `ema-2025-synthetic-peptides-guideline` |
| `ecfr-21-201-100` | fold "Welke batch?" | US labelling rule | `eu-directive-2001-83` (art. 54), `ema-epar-wegovy` (SmPC 4.4, batch number recorded for traceability) |
| `ecfr-21-211-22`, `uk-hmr-2012-sch-7-qualified-person`, `ca-fdr-c02-014`, `ca-fdr-c02-029`, `mhra-gmp-gdp-guidance`, `au-tga-manufacturing` | closing ladder line, GMP fold | US/UK/CA/AU manufacturing law and regulators | `eu-directive-2001-83`, `eudralex-volume-4-gmp`, `igj-gmp-inspecties-certificaten` |
| `fda-considering-online-pharmacy` (4 of 6 cells) | warning-signs table: expiry date; sells without prescription; looks different; is not a licensed pharmacy | US consumer advice where a Dutch or EU source says the same | `eu-directive-2001-83`; `nl-gmw-art-61-prescription`, `igj-online-medicijnen`; `ema-2023-falsified-ozempic`; `nl-gmw-art-61-prescription` |
| `fda-label-wegovy` | warning-signs table, "cloudy liquid" | US label where the EU label says the same | `ema-epar-wegovy` |
| `fda-cgmp-facts` (closing ladder line only) | "the regulator inspects" | the FDA inspecting is US framing | `igj-gmp-inspecties-certificaten` (fda-cgmp-facts stays for "testing alone is not enough" and "you cannot see it") |

Also left out: the English sentence "In the US, the methods for sterility and endotoxin are set out in the US
Pharmacopeia (chapters 71 and 85)" (US framing); its cites (`fda-2004-aseptic-processing-guidance`,
`fda-2026-pyrogen-endotoxins-qa`) stay on the shortened sentence "Daarvoor zijn aparte tests nodig, met vaste methoden",
with `ema-2025-synthetic-peptides-guideline`. No European Pharmacopoeia claim was made (nl-care §5.5: not verified).

**Kept as evidence (not reader framing), with `{/* residue-ok: … */}` where the text names the FDA:** the FDA PCAC
briefing documents on certificates, the FDA guidance on aseptic processing and pyrogens, `fda-cgmp-facts`,
`fda-unapproved-glp1-concerns`, the FDA dosing-error reports (key number), `fda-1999-ich-q6b`, `nist-2018-iso17025-
crosswalk-reporting` (it documents the ISO standard's reporting clause), `mhra-2023-fake-weight-loss-pens` (UK seizure,
as evidence that fakes held insulin), `fda-considering-online-pharmacy` for two cells ("broken seal, damaged packaging,
unreadable label"; "no pharmacist you can ask") for which no Dutch or EU source was found today, and
`nhs-low-blood-sugar` beside Thuisarts (see below).

## safety/monitoring (method: adapted)

**Structure kept:** the same seven `##` sections, the five diagrams (`baseline-then-compare`, `blood-tests-by-product`,
`checks-without-a-needle`, `getting-checks`), the explainer `glp1-class-hypo`, the Compare, every fold, and
`<WarningSigns only="metabolic,cardiovascular,general" />`. Every claim level, study and number of the English page
is kept (5% against 1%, 6,5%, 47%, 1,5 to 3 times, 9 to 11 days, up to 6 and 3 points, 2 to 4 hours, 12 hours, 1%
and 38%, 15% to 40–60%, 140 people, 2 months, 1 month, 4 weeks).

**What came back from the saved material (re-checked against nl-care, nl-help):** the Dutch section "Getting checks
in the Netherlands" (`checks-via-the-gp`) is now `## Controles via je huisarts` with the English five-step diagram
(`getting-checks`): longer appointment and the medicine list (`thuisarts-naar-de-huisarts`), tests often done by a lab
outside the practice and the eigen risico (`zin-huisarts-zvw`), the medical file (`nl-wgbo-art-454-456-records`), the
beroepsgeheim (`knmg-beroepsgeheim`, `nl-wgbo-art-457-confidentiality`); the fold "If your GP does not want to do the
tests" (WGBO 7:453, KNMG second opinion, Thuisarts on tests you arrange yourself); the IGJ sentence that contaminated
medicines can damage organs (`igj-online-medicijnen`, re-read today) in the liver fold.

**Rewritten for the Netherlands:**
- **Basisverzekering and eigen risico** (fold "Basisverzekering en eigen risico: wat je zelf betaalt", replacing "Who
  pays for the tests, by country"): GP and huisartsenpost care is paid from the basispakket with no eigen bijdrage and no
  eigen risico; the eigen risico (18 and over, per calendar year) is € 385 in 2026 and € 400 from 1 January 2027
  (nl-help fact 8 and nl-care fact 55 as corrected by both fact-checks; `nl-zvw-art-19-eigen-risico-2027`, the merged id);
  it applies to tests the GP has done outside the practice (blood tests), to medicines the GP prescribes and to referred
  care (`zin-huisarts-zvw`, nl-help fact 49).
- **NHG, October 2025** (fold "Als je huisarts de controles niet wil doen"): the GP is not responsible for periodic
  checks of medication obtained elsewhere, but has a role in recognising side effects and complications, and the
  patient must tell the doctors what they use (`nhg-2025-gewichtsreducerende-medicatie`). Framed for the reader as an
  ally: "Die tekst gaat over medicijnen om af te vallen, niet over peptiden ... Heb je klachten? Ga dan altijd naar je
  huisarts." The Alberta regulator's advice (`ca-cpsa-2026-04-injectable-peptides`) is replaced by this NHG sentence.
- "We vonden geen NHG-Standaard of andere richtlijn voor huisartsen over controles bij mensen die niet-goedgekeurde
  peptiden gebruiken (gezocht op 27 oktober 2026)" (nl-care §5.9, nl-help §5.6: write as "we vonden geen", with the
  date).
- The EU labels beside the US labels for semaglutide and tirzepatide (EU Dutch product information PDFs, downloaded and
  read today with pdftotext, both updated 21 September 2026): dehydration and kidney function (Wegovy and Mounjaro 4.4,
  Mounjaro "waaronder acuut nierfalen"), hypoglycaemia with insulin or sulfonylureas (Wegovy 4.4), gallstones (Wegovy
  leaflet), plasma lipids (Wegovy 5.1), body composition (STEP 1 DEXA substudy, N = 140), heart rate (Wegovy: +3 bpm
  from a baseline of 72 in the phase 3a studies; Mounjaro: +3 to 5 bpm against +1 with placebo, pooled phase 3 studies in
  type 2 diabetes), pregnancy (Wegovy: stop at least 2 months before; Mounjaro: at least 1 month before; reproductive
  toxicity in animals) and oral contraceptives (Mounjaro 4.5: the reduced exposure after a single dose "wordt niet als
  klinisch relevant beschouwd", no dose adjustment; 4.6: contraception advised). The US numbers (+1 to 4 against placebo;
  +2 to 4 against +1) and the US contraception advice (4 weeks after start and after each dose increase) stay, each
  attributed to "de Amerikaanse productinformatie", so both labels are visible and the reader is asked to discuss it with
  their doctor.
- Help: TL;DR "Bel direct je huisarts, of de huisartsenpost als de praktijk dicht is. Levensgevaar? Bel 112."; the last
  section gives the three Dutch help levels (STYLE-NL §5.1, `thuisarts-spoed-wie-bellen`), the Lareb line and
  `<JurisdictionCard code="NL" />`.
- World context: "Tesamorelin ... In de VS is het goedgekeurd als medicijn, in Nederland niet" (`cbg-gib-search-status-
  2026-10-27`, whose link opens the tesamorelin search) and "Bremelanotide (PT-141) is in de VS goedgekeurd als Vyleesi",
  each line marked `{/* residue-ok: world context … */}`.
- Links: `/nl/talking-to-your-doctor/#je-rechten-geheimhouding-en-toestemming` (heading `## Je rechten: geheimhouding en
  toestemming` checked today in the Dutch file of the other group), `/nl/safety/product-risk/#nep-pennen-met-insuline`
  (my own heading), `/nl/safety/warning-signs/`, `/nl/safety/before-you-consider/`.

**Dropped citations:**

| Cite id | Where | Why | Replaced by |
|---|---|---|---|
| `au-healthdirect-questions-to-ask-your-doctor` | getting-checks steps 1–2 | Australian help service | `thuisarts-naar-de-huisarts` |
| `au-healthdirect-paying-for-diagnostic-testing` | step 3; who-pays fold | Australian funding | `zin-huisarts-zvw`, `rijksoverheid-eigen-risico-2026`, `zin-eigen-risico-zvw`, `nl-zvw-art-19-eigen-risico-2027` |
| `ecfr-45-164-524`, `uk-govuk-data-protection`, `nhs-constitution-england`, `oaic-access-health-information`, `cpsa-cma-code-of-ethics` | step 5 (your record) | US/UK/AU/CA law | `nl-wgbo-art-454-456-records` |
| `hhs-hipaa-your-rights`, `gmc-confidentiality-duties`, `gmc-confidentiality-framework`, `opc-privacy-laws-summary`, `oaic-health-information` | privacy paragraph | US/UK/CA/AU privacy rules | `knmg-beroepsgeheim`, `nl-wgbo-art-457-confidentiality`, `thuisarts-naar-de-huisarts` |
| `nhs-constitution-england`, `ca-hc-health-care-system` | who-pays fold | UK and Canadian funding | the Dutch insurance sources above |
| `gmc-2020-consent-paras-48-49` | "doctor need not do every test"; second opinion | UK professional rules | `nl-wgbo-art-453-good-care`; `knmg-2024-second-opinion` |
| `cpsa-cma-code-of-ethics`, `mba-good-medical-practice-2020` | second opinion | Canadian and Australian codes | `knmg-2024-second-opinion` |
| `fda-dtc-tests` | tests you arrange yourself | US regulator advice | `thuisarts-gezondheidstest` |
| `ca-cpsa-2026-04-injectable-peptides` | doctors' role | Alberta regulator | `nhg-2025-gewichtsreducerende-medicatie` |
| `ca-pm-wegovy-2026-10-02`, `ca-pm-mounjaro-2026-06-23` | pregnancy and contraception | Canadian monographs | `ema-epar-wegovy`, `ema-epar-mounjaro` |
| `nhs-cellulitis` | blood-test cite line; blood-count fold | UK health service | `thuisarts-wondroos` |
| `nhs-moles` | mole advice | UK health service | `thuisarts-moedervlek-niet-vertrouwen` (new) |

**Kept as evidence:** the MedlinePlus pages (what each lab test measures; US National Library of Medicine; no Dutch
equivalent is registered; they are not a route, help line or the reader's law), the US labels of Egrifta SV and
Vyleesi (world context, marked), the US Wegovy and Mounjaro labels beside the EU ones, the FDA PCAC briefings (marked),
`vic-health-2026-retatrutide-liver` (Victoria, Australia, as evidence that impurities may harm the liver and that
health authorities see a role for doctors), `teichman-2006-cjc1295`, `branine-2026-retatrutide-ketosis-case`,
`neeland-2024-lean-mass`, `habbema-2017-melanotan-review`, `cardones-2009-eruptive-nevi`,
`nelson-2012-melanotan-rhabdomyolysis`, `janvier-2018-falsified-peptides-belgium`.

## The advertising test (brief, "Added after step 1", item 1)

Both pages name effects only with their level or label: the claim badges are unchanged; authorised medicines
(semaglutide, tirzepatide) appear for side effects, checks and risks, each from the EU product information (Dutch
SmPC) and the US label. The only positive effects named are "Semaglutide verbeterde in studies de bloedvetten een
beetje" (Wegovy SmPC 5.1: "gunstig effect op plasmalipiden") and the fat/lean-mass split of the weight lost (SmPC 5.1,
DEXA), both in the monitoring folds next to the kidney, gallstone, pulse, pregnancy and contraception warnings. No
indication is claimed and no off-label use is described. No success story, no "results", no seller, no lab name, no
dose, schedule or mixing sum ("We noemen geen hoeveelheden en geen rekensommen om poeder op te lossen."). No commerce
word in any title, heading, Lead question, fold title, figure title, label or link text (validator: 0; "verkocht" and
"aangeboden" occur only in body text and table cells where the fact needs them; figure labels say "met retatrutide op
het etiket").

## UNRESOLVED points and how the pages handle them

- No Dutch public service tests a peptide vial (nl-help fact 41): "We vonden ... geen openbare dienst ... (gezocht op 27
  oktober 2026)". Whether DIMS refuses peptides: not quoted as a fact; "valt volgens ons onder wat DIMS niet test".
- Whether the Drugs Infolijn advises on peptides (nl-help §5.1): not mentioned.
- NHG or KNMG guidance on unlicensed peptides (nl-care §5.9): written as "we vonden geen", with the date.
- Whether a GP will order checks for an unauthorised peptide (nl-help §5.6): "Huisartsen kunnen dus verschillend
  handelen."
- What a health insurer sees of a GP visit or lab test (nl-help §5.7): left out.
- European Pharmacopoeia monographs (nl-care §5.5): no claim either way; the US Pharmacopeia sentence was dropped.
- The 2027 basispakket and reimbursement of obesity medicines (nl-care §5.2–5.3): not mentioned (the pages need only
  the eigen risico, which the fact-checks resolved: € 400 from 1 January 2027). The pending € 60 rise for 2028 is not
  mentioned.
- Lareb's form fields (nl-help §5.8): not described; the page says only that you can report yourself.
- The BfArM finding of insulin in the 2023 fake Ozempic pens: not re-checked and not usable on Dutch (German-law
  source; residue error term); the 2023 pens appear only as caught by inactive serial numbers (EMA, IGJ).

## Open questions for the medical reviewer

1. Stop callout on product-risk: "Word je suf of verward? Dan moet iemand 112 bellen." Thuisarts (hypo, diabetes
   type 2) gives 112 only when unconscious; confused or not responding is "Spoed: bel direct de huisarts of
   huisartsen-spoedpost". The page keeps the English (faster) level, as nl-help §4.1 resolved; please confirm
   (nl-help §6.1).
2. Monitoring: is the NHG sentence (no responsibility for periodic checks of medication obtained elsewhere) fair and
   safe to quote on a page for people using unlicensed products (it concerns weight-loss medicines bought online), and
   is the framing "go to your GP with complaints" right (nl-care §6.7, nl-help §6.7)?
3. Tirzepatide and the pill: the EU and US labels differ (EU: single-dose effect not clinically relevant, contraception
   advised; US: switch or add a barrier method for 4 weeks after start and each dose increase). Both are shown, with
   "Bespreek met je arts wat voor jou geldt". Enough?
4. Heart rate: the EU numbers (Wegovy +3 bpm from baseline; Mounjaro +3 to 5 against +1) and the US numbers (+1 to 4 and
   +2 to 4 against placebo) are both given. Keep both, or EU only?
5. MedlinePlus pages stay the sources for what each blood test measures. Should Dutch sources (Thuisarts, NHG lab
   information) replace them in a later pass?

## Open questions for the legal reviewer

1. Naming DIMS and Jellinek's test service on a peptide site, to say they do not test peptides or medicines (nl-help
   §6.10).
2. Quoting the IGJ advice "Hebt u medicatie online gekocht? Gebruik die niet en neem contact op met uw arts of
   apotheek." (attributed, in a fold).
3. The seller column of the warning-signs table ("Verkoopt een receptmedicijn zonder recept", "Is geen apotheek") and
   the added sentence on IGJ/CBG logos used as false endorsements: negative-only signs, sourced to the Gnw and the IGJ;
   acceptable under CONTENT-GUIDE §1a?
4. Naming the Raad voor Accreditatie as the Dutch accreditation body (no register linked, no lab named): any risk that
   this reads as help in finding a lab?
5. The advertising test on monitoring: is naming the lipid and body-composition effects of semaglutide (from the Dutch
   SmPC, next to the warnings) "in overeenstemming met de SmPC" without also stating the SmPC indications on that page?

## Style terms (STYLE-NL lacks them; the words used)

| English | Dutch used | Note |
|---|---|---|
| qualified person (GMP) | een aangewezen deskundige bij de fabrikant (de Qualified Person) | the Directive's Dutch text says "bevoegde persoon"; the glossary id `qualified-person` has the term "Qualified Person" |
| regulatory guideline (EMA, ICH) | handleiding; or "het EMA raadt aan / noemt" | to avoid "richtlijn" (= EU directive, STYLE §2.3) |
| basic health insurance | basisverzekering (with basispakket) | new glossary entry `basisverzekering` |
| own contribution (Zvw) | eigen bijdrage | Zorginstituut wording |
| medical record | medisch dossier | glossary alias of `medical-file` |
| national accreditation body | de Raad voor Accreditatie (RvA), nationale accreditatie-instantie | the RvA's own words |
| drug checking | drugs laten testen; testpunten; testservice | glossary `drug-checking` alias "drugs laten testen" |
| test buys (study) | producten die de onderzoekers zelf hadden aangeschaft | avoids "aankoop", "bestelling" |
| black-market products (study) | illegale producten | avoids "zwarte markt" (STYLE §5.3) |
| sold as X (figure cards, labels) | met X op het etiket | keeps "verkopen" out of labels (STYLE §7) |
| insulin-syringe units | "eenheden", streepjes op een spuit | |
| safety features (FMD) | veiligheidskenmerken | Directive 2001/83 art. 54(o), glossary alias |
| tanning peptides · sex-drive peptides | peptiden om bruin te worden · peptiden voor zin in seks | |
| systolic · diastolic (B1) | bovendruk · onderdruk | glossary alias of `systolic-blood-pressure` |
| contraception | voorbehoedmiddel (B1); anticonceptie in the SmPC | |
| baseline | nulmeting | glossary `baseline` |

## For the final sweep (files I do not own)

1. `src/data/product-check.yaml`: add `local_sources.NL` for `stop` (`thuisarts-wondroos`, `thuisarts-sepsis`,
   `thuisarts-dikke-ogen-lippen`), as nl-help §7.4 and merge.md propose; nothing else needed for these pages (the
   certificate link resolves through `src/i18n/nl/product-check.json` `anchors` to `#wat-een-labrapport-wel-en-niet-zegt`,
   which exists).
2. `src/i18n/nl/product-check.json`, `keep.text` "Een lab kan testen wat erin zat.": on Dutch pages this may read as if
   a reader can have a vial tested; no Dutch public service tests a peptide vial (this page, fold "Kun je een flacon in
   Nederland laten testen?"). Suggest: "Een arts kan het dan laten onderzoeken." (owner of the UI strings decides).
3. `src/data/sources/shared.yaml`, `eu-directive-2001-83`: its url points to the 2022 consolidation; the articles cited
   here (40, 48, 51, 54, 111) were read today in the 1 January 2025 Dutch consolidation (CELLAR
   `CELEX:02001L0083-20250101`), same wording. The merge already lists this url update.
4. `src/data/sources/safety-b.yaml`, `igj-2026-10-stolen-medicines`: `accessed` 2026-10-27 (re-read today; page issued
   20 October 2026), as merge.md also says.
5. Glossary (another group's or the final sweep): proper names used on these pages without an entry: "Trimbos-instituut"
   (STYLE §2.7 lists it), "Jellinek"; and "eigen bijdrage". My `basisverzekering` entry has `see_also: ["basispakket"]`,
   an id in `nl-about.json` (another group's file): keep that id or update the see_also.
6. `fda-considering-online-pharmacy` stays for two cells of the warning-signs table (seal and packaging; no pharmacist
   to ask). If a Dutch or EU source with the same advice is registered later (for example a CBG or IGJ page on how to
   recognise a falsified pack), swap it in.
7. Heroes: `safety/product-risk` (`mass-spectrometer-fda`) and `safety/monitoring` (`blood-sample-analyser`) have Dutch
   captions in `src/i18n/nl/media.json`; nothing to change.

## Check (independent, 27 October 2026)

Independent fact-check and edit of both pages, the three new sources and the four glossary terms. Read first: the
brief (with "Added after step 1"), STYLE-NL, CONTENT-GUIDE §1, §1a, §4.1, §9, §11–13, research/nl/nl-help.md, nl-care.md,
eu-status.md (§E) and their fact-check sections, merge.md, MANIFEST-safety-en-b.md, and the current English pages.
Fetched today with curl and read as text (PDFs with pdftotext): igj.nl GMP-inspecties (issued 11 July 2025, modified
13 October 2026), rva.nl/over-ons (modified 4 June 2026, title "Over de RvA"), Thuisarts moedervlek ("Laatst gewijzigd:
2 dec 2025"), IGJ online medicijnen, IGJ/CBG warning of 3 September 2025 (modified 24 November 2025), CBG Falsified
Medicines Directive (modified 22 October 2025), EMA falsified-Ozempic alert (18 October 2023), IGJ Ozempic notice
(25 October 2023), IGJ stolen-medicines warning (20 October 2026), Thuisarts "Ik ga naar de huisarts" (19 April 2024),
Thuisarts gezondheidstest (27 March 2025), KNMG second opinion, Zorginstituut Huisarts (Zvw), the Dutch EU product
information of Wegovy and Mounjaro (EMA PDFs), Civil Code Book 7 ("Geldend van 08-10-2026 t/m heden": art. 7:453, 7:456)
and Directive 2001/83 (EN consolidation 1 January 2025: art. 40, 48, 51, 54, 54a). The three new source entries match
their records (titles, bodies, dates, and every quoted sentence was found on the page).

**Science parity.** Every `<Cite>` of the English pages that is not US/UK/CA/AU framing is on the Dutch pages; every
`<Claim>` keeps its level (product-risk: `in-vitro`, `human-limited`; monitoring: three `human-controlled`); every
KeyNumber keeps its value, level and population; the studies table keeps its six rows; all diagrams, the Compare
figures, the explainer, the infographic, `<ProductCheck />` and `<WarningSigns>` are in place. Every number was compared
digit by digit (7,7–14,37%; 51,3–190%; 29–39%; 8–14%; 12,8%; 1.190; 10.000; 1 op de 1.000; 98 van de 100; 5% and 1%;
6,5%; 47%; 1,5 tot 3; 9 tot 11 dagen; 6 en 3 punten; 2 tot 4 uur; 12 uur; 1% and 38%; 15% tot 40 tot 60%; 140;
2 maanden; 1 maand; 4 weken). The dropped citations are all framing and all in the writer's tables above (with one
change: the EU label cites are now the EMA's Dutch product information, see below). Correction to the writer's notes:
monitoring has four diagrams, not five.

**Dutch, EU and Belgian facts.** All checked against the research and the fetched pages. Correct as written: the
eigen risico (€ 385 in 2026, € 400 from 1 January 2027; GP and huisartsenpost exempt; lab tests, prescribed medicines
and referred care not exempt), the NHG text of October 2025, DIMS and Jellinek (nl-help facts 40–41, "volgens ons"),
"we vonden geen" with the date for both searches, Lareb ("ook als je product niet van een apotheek komt"), the help
levels (112; bel direct je huisarts; is de praktijk dicht, de huisartsenpost), the IGJ quotes (organ damage, stolen
insulin pens, logos as false endorsements), the RvA, the IGJ GMP inspections, the Stammers case (Dordrecht, Deventer),
Wegovy +3 bpm from 72 in the phase 3a studies, Mounjaro +3 to 5 against 1 (pooled phase 3 type 2 diabetes studies),
stop 2 months (Wegovy) and 1 month (Mounjaro) before a planned pregnancy, the Mounjaro pill interaction ("niet als
klinisch relevant beschouwd") and contraception advice, "helder en kleurloos", the batch-number traceability line (4.4),
the lipid and DEXA statements (5.1). No Belgian paragraph; Belgium appears only as the origin of two studies.

### Changes

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| product-risk, TL;DR 2 | "sommige nep-pennen en flacons bevatten insuline" | "in sommige nep-pennen en flacons zat insuline" | English "did": a finding, not a general property | as before |
| product-risk, opening | "De fabrikant moet elke batch testen voordat die de fabriek uit mag." | "… elke batch testen. Pas als die aan vaste eisen voldoet, mag de batch de fabriek uit." | English "against set limits" was lost | `eu-directive-2001-83` art. 51 |
| product-risk, opening | "Dan heeft niemand het zo gecontroleerd. Je weet dan niet wat erin zit, en of het je kan schaden." | "Dan is het niet gecontroleerd zoals een medicijn van de apotheek. Je weet dan niet wat erin zit, en of het veilig is." | "niemand" overstated; the IGJ says "geen controle … zoals dat wel gebeurt als u via uw arts of apotheker een medicijn krijgt" and "weet u niet of de medicijnen veilig zijn" | `igj-online-medicijnen`, `igj-2025-illegal-online-medicines` |
| product-risk, studies table (Queensland) | "De onderzoekers vonden lood, ruim onder de grens volgens hun oordeel." | "De onderzoekers vonden lood. Volgens hen lag de hoeveelheid ruim onder de grens." | word order (B1) | as before |
| product-risk, fold "Waar nep-pennen …" | IGJ stolen-pen warning as a bullet "Nederland, oktober 2026" in the list of places where fake pens with insulin were found | own paragraph after the WHO line: "Een echte insulinepen kan ook als iets anders worden aangeboden. …" | stolen genuine pens are a warning, not a fake pen that was found | `igj-2026-10-stolen-medicines` (re-read today) |
| product-risk, ladder Lead | "Een rapport zegt wat in het geteste monster zat. Schoon betekent: getest op bacteriën en hun gifstoffen." | "Het rapport gaat over het geteste monster. "Schoon" vraagt om tests van die batch op bacteriën en gifstoffen." | English "for that batch" was lost; 18 words | as on English |
| product-risk, ladder rung 2 | "of de test wel is gedaan, op wat, en door wie" | "of de test wel is gedaan, waarop en door wie" | Dutch | – |
| product-risk, ladder closing | "En de IGJ inspecteert de fabrikanten." | "En inspecteurs controleren de fabrikanten; in Nederland doet de IGJ dat." | the IGJ inspects manufacturers in the Netherlands; others are inspected by their own country's inspectorate (and, outside Europe, by an EU inspectorate at the EMA's request) | `igj-gmp-inspecties-certificaten` (read today) |
| product-risk, fold "Welke batch?" | "Daarmee is na te gaan hoe die verpakking is gemaakt." | "Daarmee is na te gaan uit welke batch die verpakking komt." | the EU texts support the batch number on the pack (Directive art. 54(m)) and traceability of the product given (Wegovy SmPC 4.4 "Terugvinden herkomst"), not the manufacturing history (that was the US rule 21 CFR 201.100) | `eu-directive-2001-83`, `ema-pi-wegovy-nl` |
| product-risk, fold "Wat gebeurde er na de test?" | "GLP-1-producten van Amerikaanse apotheken die warm aankwamen" | "GLP-1-producten die warm aankwamen. Amerikaanse apotheken hadden die producten zelf bereid." | the relative clause attached to "apotheken"; STYLE §2.4 "bereiding door een Amerikaanse apotheek" | `fda-unapproved-glp1-concerns` |
| product-risk, fold "99% zuiver" | "Naar gewicht bestond 20% en 43% ervan uit een suikeralcohol (mannitol)." | "Het ene poeder bestond voor 20% van het gewicht uit een suikeralcohol (mannitol), het andere voor 43%." | Dutch, clarity | `choules-2020-nmr-mannitol` |
| product-risk, GMP fold | "Een uniek nummer op elk doosje. Sinds 9 februari 2019 heeft elke verpakking van een receptmedicijn veiligheidskenmerken." | "Een uniek nummer op het doosje. Sinds 9 februari 2019 hebben verpakkingen van receptmedicijnen in de EU veiligheidskenmerken, op een paar uitzonderingen na: een unieke code en een verzegeling. De apotheker controleert die …" | the CBG page names a "white list" of prescription medicines without safety features; the two features and the pharmacist's check are the CBG's own words | `cbg-fmd-vervalsing-melden` (read today) |
| product-risk, GMP fold | (none) | "Het EMA had geen aanwijzingen dat apotheken ze aan patiënten hadden meegegeven." | EMA: "There is no evidence that any affected product has been dispensed to patients from legal pharmacies"; completes the example | `ema-2023-falsified-ozempic` (read today) |
| product-risk, KeyNumber `who` | "gemaakt door apotheken" | "bereid door apotheken" | STYLE §2.4 | – |
| product-risk, warning-signs text | logo sentence after "Deze signalen helpen je niet om … een goed product te vinden" | logo sentence first, then the closing two sentences | the list must end by saying no sign proves a product is good (CONTENT-GUIDE §1a) | `igj-2025-illegal-online-medicines` (quote found today) |
| product-risk, last section | "Een schone flacon bewijst niet …" | "Een flacon die er schoon uitziet, bewijst niet …" | English means clean-looking | – |
| product-risk, fold title | "Kun je een flacon in Nederland laten testen?" | "Een flacon laten testen in Nederland" | fold titles say what the fold holds (STYLE §4.3) | – |
| product-risk, two cites | `ema-epar-wegovy` ("Welke batch?", "Troebele vloeistof") | `ema-pi-wegovy-nl` | the EMA's Dutch product information (brief, Sources); text found today: "Terugvinden herkomst … batchnummer", "niet helder en kleurloos" | `ema-pi-wegovy-nl` |
| monitoring, TL;DR 2 and Lead | "Welke precies, hangt af van het product." | "Welke je nodig hebt, hangt af van het product." | Dutch | – |
| monitoring, TL;DR 3 and 6 | "vergelijk je later de nieuwe uitslagen"; "Vraag het je huisarts" | "vergelijk je latere uitslagen"; "Vraag je huisarts" | the TL;DR was 123 words after the fix below (limit 120) | – |
| monitoring, TL;DR 5 and Lead "Wat controles niet kunnen" | "Niet wat er in een flacon zit, en ook geen kankerrisico." / "… en ook geen kanker." | "Ze laten niet zien wat in een flacon zit, of je kankerrisico." | the Lead said tests find "no cancer" (English: they cannot predict cancer); fragment | as on English |
| monitoring, intro | "Controles betekent: …" | "Met controles bedoelen we: …" | Dutch | – |
| monitoring, heading 1 | "## Waarom en wanneer je controleert" | "## Waarom en wanneer je je laat controleren" | the reader is checked, does not check (no Dutch page links the old slug; checked) | – |
| monitoring, diagram step 4 | "Ga dan naar een arts" | "Neem dan contact op met je huisarts" | Dutch help route (brief, Emergency) | – |
| monitoring, liver fold | "Volgens de IGJ kan een verontreinigd medicijn je organen beschadigen. Soms merk je dat pas …" | "Volgens de IGJ merk je zulke schade soms pas als je al ernstig ziek bent." | repeated the sentence before it; IGJ: "kan dat uw organen beschadigen en pas tot klachten leiden als u ernstig ziek bent" | `igj-online-medicijnen` |
| monitoring, blood-fats fold | "Semaglutide verbeterde in studies de bloedvetten een beetje." (no indication) | adds: Wegovy is authorised in the EU, on prescription, for weight management in adults with obesity, or overweight with a weight-related disease, and adolescents from 12 with obesity over 60 kg; "Het is niet goedgekeurd om je bloedvetten te verlagen." | advertising test (brief, Added after step 1, item 1): the only positive effect of an authorised medicine on the page now stands with its SmPC indication and is not framed as a use | `ema-pi-wegovy-nl` 4.1 (research/nl/status/semaglutide.yaml `indications_nl_from_smpc`) |
| monitoring, checks table | "Er zijn nieuwe moedervlekken en moedervlekken die veranderden gemeld." / "Van veel middelen zijn er geen gegevens." | "Mensen meldden nieuwe moedervlekken, en moedervlekken die veranderden." / "Over veel middelen zijn geen gegevens." | Dutch, active voice (STYLE §1.3) | – |
| monitoring, BP fold | "Bremelanotide (PT-141) is in de VS goedgekeurd als Vyleesi." | "… als Vyleesi, in Nederland niet." | world context says why the NL row differs (brief); NL row `not-authorised` | `cbg-gib-search-status-2026-10-27` |
| monitoring, pregnancy fold | "een ander middel dan de pil" | "een ander voorbehoedmiddel dan de pil" | "middel" read as another medicine | `fda-label-mounjaro` |
| monitoring, getting-checks step 1 | (questions not mentioned) | "Schrijf je vragen op en neem ze mee." | English step restored; Thuisarts "U kunt uw vragen opschrijven" | `thuisarts-naar-de-huisarts` |
| monitoring, step 3 | "Vaak doet een lab buiten de praktijk het bloedonderzoek." | "Vraag wat de voor- en nadelen van elke test zijn. Je huisarts kan het bloedonderzoek laten doen door een lab buiten de praktijk." | "vaak" is not in the source ("kan een huisarts testen aanvragen bij (huisartsen)laboratoria"); English "You can ask whether you really need each test" restored with Thuisarts's "3 goede vragen" | `zin-huisarts-zvw`, `thuisarts-naar-de-huisarts` |
| monitoring, step 5 | "Je mag je medisch dossier inzien en een kopie krijgen." | adds: "Je arts mag alleen iets weglaten als dat nodig is voor de privacy van iemand anders." | English "with a few exceptions"; art. 7:456: "De verstrekking blijft achterwege voor zover dit noodzakelijk is in het belang van de bescherming van de persoonlijke levenssfeer van een ander" | `nl-wgbo-art-454-456-records` |
| monitoring, insurance fold | "Je basisverzekering betaalt de zorg uit het basispakket." | "… vergoedt …" | the insurer pays; Dutch usage | – |
| monitoring, GP fold | "Je huisarts hoeft niet elke test te doen die je vraagt. Een arts moet de zorg geven …" | "Volgens de wet moet een arts de zorg geven … Wij lezen dat zo: je huisarts hoeft niet elke test te doen die je vraagt." | nl-care fact 53: this is our reading; label it | `nl-wgbo-art-453-good-care` |
| monitoring, GP fold | "Die tekst gaat over medicijnen om af te vallen, niet over peptiden." | "… niet over niet-goedgekeurde peptiden." | semaglutide and tirzepatide are peptides | `nhg-2025-gewichtsreducerende-medicatie` |
| monitoring, GP fold | "Vraag om een verwijzing of een second opinion. Een arts moet dat in principe doen …" | "Vraag om een verwijzing voor een second opinion. Een tweede arts kijkt dan naar je diagnose of je behandeling. Je arts moet in principe meewerken …" | the KNMG page covers a referral for a second opinion only ("Als je patiënt om een verwijzing vraagt voor een second opinion, dan moet je daaraan meewerken") | `knmg-2024-second-opinion` (read today) |
| monitoring, ten cites | `ema-epar-wegovy`, `ema-epar-mounjaro` | `ema-pi-wegovy-nl`, `ema-pi-mounjaro-nl` | the EMA's Dutch product information; every fact checked in the Dutch PDFs today (4.4, 4.5, 4.6, 4.8, 5.1) | `ema-pi-wegovy-nl`, `ema-pi-mounjaro-nl` |
| glossary `raad-voor-accreditatie` | "laboratoria en keuringsinstanties accrediteert … volgens internationale normen" | "laboratoria en andere keurings- en certificatie-instellingen erkent (accrediteert) … volgens Europese en internationale normen" | the RvA page: "laboratoria, inspectie-instellingen, certificatie-instellingen en verificatie-instellingen", "Europese (EN) en internationale (ISO of ISO/IEC) normen"; term explained (B1) | `rva-over-ons` |

Validator after the changes: 0 errors, 0 warnings for `pages/nl/safety/product-risk`, `pages/nl/safety/monitoring` and
`nl-safety-c`. Residue check (`--details`): 0 error, 0 frame, 0 warn hits for the same three filters.

### Remaining concerns for the reviewer

1. **Medical:** the stop callout on product-risk keeps "Word je suf of verward? Dan moet iemand 112 bellen." Thuisarts
   gives 112 only when unconscious (writer's question 1 stands). The callout also cites `thuisarts-hypo-diabetes-type-2`,
   whose threshold differs; the NHS page supports the faster level.
2. **Legal (advertising test):** the Wegovy indication sentence added to the blood-fats fold of monitoring. Keep it
   there, or move it to the first mention of an EU product on the page? Tirzepatide's effects on this page are all side
   effects or checks, so no indication line was added for Mounjaro.
3. `fda-considering-online-pharmacy` (US consumer advice) still supports two cells of the warning-signs table (seal and
   packaging; no pharmacist to ask). No Dutch or EU source with the same advice was found; the EMA Ozempic alert says
   only to compare the pen with the leaflet.
4. Registry notes for the final sweep (files I may not edit): `ema-pi-wegovy-nl` and `ema-pi-mounjaro-nl` notes list
   only 4.1, 4.4 and section 9; the pages now cite them also for 4.4 traceability, 4.5, 4.6, 4.8 heart rate, 5.1 lipids
   and body composition, and 6.6 ("niet helder en kleurloos"): all read today in the Dutch PDFs.
   `nl-wgbo-art-454-456-records` (guides.yaml): add the 7:456 exception (privacy of another person).
   `igj-2025-illegal-online-medicines` (safety-b.yaml): page modified 24 November 2025; it also carries "Betrouwbare
   online verkopers … herken je aan het onderstaande logo", which a Dutch page must never repeat. `eu-directive-2001-83`:
   url still the 2022 consolidation (writer's item 3).
5. "Qualified Person" (English term; glossary `qualified-person` gives the Directive's "bevoegde persoon") and "second
   opinion" (KNMG's own word; glossary `second-opinion`): add both to STYLE-NL §2.8 in the final sweep.
6. Monitoring keeps MedlinePlus (US National Library of Medicine) for what each blood test measures; no Dutch source is
   registered (writer's question 5).

### Style terms (added by the check)

| English | Dutch used | Note |
|---|---|---|
| second opinion | second opinion | KNMG and the glossary entry `second-opinion` use the English term |
| weight management (indication) | afvallen en op gewicht blijven | STYLE §2.5 B1 form of the SmPC's "gewichtsbeheersing" |
