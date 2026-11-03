# Notes: assignment gloss-c (Dutch glossary, compound files), 27 October 2026

Files made (same names as `src/i18n/en/glossary/`): `src/i18n/nl/glossary/bpc-157.json`, `cjc-1295.json`,
`ipamorelin.json`, `kpv.json`, `melanotan-ii.json`, `pt-141.json`, `retatrutide.json`, `semaglutide.json`,
`tb-500.json`, `tesamorelin.json`, `tirzepatide.json`. 298 entries: the 301 English ids, minus 7 dropped, plus 4
Dutch entries of 23 October restored. `category`, `see_also` (and a missing `see_also` where English has none)
are as on English. Validator: `npx tsx scripts/validate-content.ts --only glossary` → 0 errors, 0 warnings.
No id or alias collides with the other Dutch glossary files present at the time of writing (basics, evidence,
final-qa, guides, history, shared); the safety, legal and stubs files were not there yet, so the next check
must run again once they land.

## Dropped ids (US, Canadian or Australian systems; no Dutch page will use them)

| File | Id | Why |
|---|---|---|
| semaglutide | `medicare-part-d` | US public insurance; the Dutch coverage note is about the basispakket and the GVS |
| semaglutide | `medicaid` | US public cover |
| semaglutide | `pharmaceutical-benefits-scheme` | Australia's PBS |
| semaglutide | `pbac` | Australia's PBS committee |
| semaglutide | `pcpa` | Canada's price alliance |
| semaglutide | `cda-amc` | Canada's Drug Agency |
| melanotan-ii | `debarment` | US FDA sanction; not used on any current English page (only in the 23 October US column), so no Dutch page will use it |

## Restored Dutch entries (23 October, removed from English on 26 October; facts re-checked today)

| File | Id | Source of the old entry | Re-checked against |
|---|---|---|---|
| semaglutide | `gvs` | `MANIFEST-compounds-a.md` | zorginstituutnederland.nl, "Geneesmiddelen (Zvw)", fetched 27 Oct: "Alleen geregistreerde geneesmiddelen die zijn opgenomen in het Geneesmiddelenvergoedingssysteem (GVS) worden vergoed uit het basispakket." · "Voor sommige geneesmiddelen in het GVS gelden extra voorwaarden voor vergoeding." (also `research/nl/nl-care.md` facts 56–58). The old alias "Bijlage 2" is left out: "bijlage 2" also names annexes of other acts. |
| tirzepatide | `nhg-standaard` | `MANIFEST-compounds-a.md` | `research/nl/nl-care.md` (facts 8, 64; NHG-Standaard Obesitas). Definition generic: a guideline for Dutch huisartsen by the NHG. |
| tirzepatide | `combined-lifestyle-intervention` | `MANIFEST-compounds-a.md` | zorginstituutnederland.nl, "Gecombineerde Leefstijlinterventie (GLI) (Zvw)", fetched 27 Oct: "Een GLI is een programma van 2 jaar." · "advies over gezonde voeding, gezonde eetgewoontes en gezond bewegen" · "De huisarts stelt vast of u een GLI kan krijgen." "GLI first, before medicines": NHG-Standaard Obesitas as in `nl-care.md` fact 64 (medication only after a GLI of at least a year). |
| tesamorelin | `chmp` | `MANIFEST-compounds-b.md` | ema.europa.eu, CHMP committee page, fetched 27 Oct: "the European Medicines Agency's (EMA) committee responsible for human medicines"; "conducting the initial assessment of EU-wide marketing authorisation applications"; "recommending to the European Commission …". |

If the owner prefers the glossary files to hold only the English ids, these four can move to a Dutch-only file;
the ids must stay the same (the 23 October `nhg` entry, `MANIFEST-guides-en.md`, pointed to `nhg-standaard`;
no Dutch file has `nhg` yet). `chmp` keeps its old `see_also` (`ema`, `marketing-authorisation`); a target
that no Dutch file defines yet is simply not shown.

## Dutch framing added to a definition (checked today)

| Id | Dutch text says | Source, wording |
|---|---|---|
| `macimorelin` | approved in the EU since 2019 (Ghryvelin), in the US since 2017 | ema.europa.eu/en/medicines/human/EPAR/ghryvelin, fetched 27 Oct: status "Authorised"; "Ghryvelin received a marketing authorisation valid throughout the EU on 11 January 2019." US date as on the English page (`fda-drugsatfda-macrilen`). |
| `anamorelin` | a marketing authorisation was refused in the EU in 2017 | ema.europa.eu/en/medicines/human/EPAR/adlumiz, fetched 27 Oct: status "Refused"; "the CHMP re-examined the opinion, and confirmed the refusal of the marketing authorisation on 14 September 2017." (The English page says the same, `ema-epar-adlumiz`.) |
| `investigational-medicine` | in the Netherlands and the EU only through a few exceptions, mainly trials or compassionate use (English named the US, UK, Canada and Australia) | `research/nl/nl-care.md` facts 20, 35–42 (Gnw art. 40(3); CBG compassionate-use rules; WMO) |
| `compassionate-use` | in the Netherlands the manufacturer asks the CBG for approval; the law calls it "gebruik in schrijnende gevallen" | `nl-care.md` facts 35–38: Gnw art. 40(3)(f) "voor gebruik in schrijnende gevallen"; CBG Q&A "Alleen de fabrikant van het geneesmiddel kan een aanvraag voor een CUP indienen" |
| `pharmacovigilance` | in the Netherlands you can report a side effect yourself to Bijwerkingencentrum Lareb | the brief and STYLE-NL §5.1 (fixed sentence) |
| `dulaglutide` | approved for type 2 diabetes (no country named, true in the EU) | ema.europa.eu/en/medicines/human/EPAR/trulicity, fetched 27 Oct: "This medicine is authorised for use in the European Union"; used "in adults and children from 10 years of age with type 2 diabetes" |
| `wada-s0`, `wada-s2-3`, `wada-monitoring-program` | Dutch names | dopingautoriteit.nl, "Vertaling WADA dopinglijst 2026" (PDF, curl, 27 Oct): "S0. Niet erkende stoffen" · "Te allen tijde verboden (binnen- en buiten wedstrijdverband)" · "S2.3. Groeifactoren en groeifactor modulatoren" · "Thymosin-β4 en derivaten, zoals TB-500" · "WADA Monitoring Program 2026" (kept in English by the Dopingautoriteit) |

## US terms kept (a Dutch page uses them for the US vote, US science or world context)

`503a-bulks-list` (503A-lijst, STYLE-NL §5.4), `pharmacy-compounding` (bereiding door een Amerikaanse apotheek,
STYLE-NL §2.4), `pcac`, `fda-category-2`, `outsourcing-facility` (503B), `expanded-access`,
`biologics-license-application`, `biological-product` (all defined with "In de VS" / "In de Amerikaanse wet"),
`postmarketing-requirement` and `pregnancy-registry` (FDA label evidence; defined generically). When
`config/locale-residue.json` gets its `locales.nl` entry, these definitions may need `allowStrings` for "FDA".

## Term choices not (yet) in STYLE-NL §2

I own only the glossary files, so these are proposals for the style-sheet owner; page writers should use the
same words so the tooltip links.

| English | Dutch term (glossary) | Why |
|---|---|---|
| ALT (liver enzyme) | ALAT | the Dutch lab name; "ALT" is not an alias because "alt" is a Dutch word |
| hypertension · hypotension | hypertensie · hypotensie (aliases hoge bloeddruk, lage bloeddruk) | B1 text writes "hoge bloeddruk (hypertensie)" |
| arrhythmia · atrial fibrillation · palpitations | hartritmestoornis · boezemfibrilleren · hartkloppingen | Thuisarts words |
| investigational medicine | geneesmiddel voor onderzoek | STYLE-NL §2.4 (investigational medicinal product) |
| retraction | teruggetrokken artikel (alias retractie) | "teruggetrokken" alone also means a withdrawn application |
| satisfying sexual event | bevredigend seksueel contact | "ervaringen" is a banned word (§5.6) |
| postmarketing requirement | verplichte studie na toelating | follows "bewaking na toelating" (§2.3) |
| peer review | beoordeling door vakgenoten | §2.3 |
| trial phase | onderzoeksfase (aliases fase 1, fase 2, fase 3 …) | "fase" alone is an everyday word |
| hazard ratio · odds ratio | hazardratio · oddsratio (plural with ’s) | §3 |
| GLP-1 receptor agonist | GLP-1-agonist (aliases GLP-1-medicijn, GLP-1-receptoragonist) | §2.5 |
| sulfonylurea | sulfonylureumderivaat (alias SU-derivaat) | NHG usage |
| INN spelling | macimorelin, anamorelin, ipamorelin (no -e) | the Dutch Ghryvelin SmPC writes "macimorelin" |
| ghrelin · GH deficiency | ghreline · groeihormoondeficiëntie (GHD) | the Dutch Ghryvelin SmPC |
| SNAC | alias natriumsalcaprozaat | the Dutch Rybelsus SmPC ("Natriumsalcaprozaat") |
| NAION | full form "niet-arteritische anterieure ischemische opticusneuropathie" | the Dutch Rybelsus SmPC |
| dysaesthesia | dysesthesie | the Dutch Rybelsus SmPC |
| thymosin beta-4 | thymosine bèta-4 (aliases with β and the English spelling) | |
| mole · dermatologist | moedervlek (§2.5) · dermatoloog (alias huidarts) | |
| venous leg ulcer · pressure ulcer | open been · doorligwond | Thuisarts words; "zweer" and "ulcus" stay with final-qa's `ulcer` |
| falsified medicine | vervalst geneesmiddel (aliases nep-pen, namaakpen …) | §2.4 |

## Aliases left out on purpose

Short codes that are Dutch words or collide: AF ("af"), VAT ("vat"), ALT ("alt"), BLA ("bla"), PD, CUP ("cup").
Generic or not exactly the same meaning: "bijlage 2", "bloedvetten" (also cholesterol), "leverenzym(en)" (the
liver-tests entry may claim it), "teruggetrokken", "voor de overgang", "tandvlees", "blozen", "namaak" and "nep"
alone. Case-only duplicates of a term (PEPT1, Drug Affinity Complex) removed: matching ignores case.

## Open points

- `hsdd`: the Dutch term "hypoactief seksueel verlangen" follows the DSM-IV wording; if the pt-141 page writer
  chooses another Dutch name, add it as an alias (the English abbreviation HSDD is an alias already).
- No source was dropped (glossary entries carry no citations).

## Check (independent, 27 October 2026)

All 298 entries of the 11 files compared one by one with `src/i18n/en/glossary/` (term, aliases, definition,
category, `see_also`), against the brief, CONTENT-GUIDE §1, §1a, §12 and STYLE-NL (§1 B1 rules, §2 terms, §3 numbers,
§5.6 banned words, §6 glossary rules). Ids, categories and `see_also` match English; every `see_also` target exists in
`src/i18n/nl/glossary/`; no id and no term or alias (case-insensitive) is duplicated across the Dutch glossary files
present now, including the safety, legal and stubs files that landed after the translation; no commerce token in a
term or alias; no dose, no seller wording, no "u"; no straight apostrophes; decimal commas in place. Files are UTF-8,
LF, no BOM. `npx tsx scripts/validate-content.ts --only glossary`: 0 errors, 0 warnings. English files untouched; no
build, no commit.

### Country-dependent strings: checked today (fetched 27 October 2026)

| Entry | Source fetched | Wording relied on | Result |
|---|---|---|---|
| `macimorelin` | ema.europa.eu/en/medicines/human/EPAR/ghryvelin | status "Authorised"; "GHRYVELIN is indicated for the diagnosis of growth hormone deficiency (GHD) in adults"; "received a marketing authorisation valid throughout the EU on 11 January 2019" | correct |
| `anamorelin` | ema.europa.eu/en/medicines/human/EPAR/adlumiz | status "Refused"; CHMP negative opinion 18 May 2017; "confirmed the refusal of the marketing authorisation on 14 September 2017" | correct; wording made precise |
| `dulaglutide` | ema.europa.eu/en/medicines/human/EPAR/trulicity | "authorised for use in the European Union"; "used in adults and children from 10 years of age with type 2 diabetes" | correct |
| `chmp` | ema.europa.eu, CHMP committee page | "committee responsible for human medicines"; "conducting the initial assessment of EU-wide marketing authorisation applications"; the Adlumiz page shows the CHMP "recommending" to the Commission | correct; rewritten with the STYLE §2.7 full name |
| `gvs` | zorginstituutnederland.nl, "Geneesmiddelen (Zvw)" (modified 4 June 2026) | under "Geneesmiddelen bij de apotheek (extramurale geneesmiddelen)": "Alleen geregistreerde geneesmiddelen die zijn opgenomen in het Geneesmiddelenvergoedingssysteem (GVS) worden vergoed uit het basispakket"; "Het GVS bevat lijsten"; bijlage 2: "alleen vergoed voor bepaalde indicaties of voor bepaalde patiëntengroepen"; hospital medicines and some unregistered medicines (apotheekbereidingen) are reimbursed outside the GVS | **corrected** (see below) |
| `combined-lifestyle-intervention` | zorginstituutnederland.nl, "Gecombineerde Leefstijlinterventie (GLI) (Zvw)" (modified 29 May 2026); `research/nl/nl-care.md` fact 64 (NHG-Standaard Obesitas, confirmed by that file's fact-check) | "Een GLI is een programma voor mensen met overgewicht of obesitas"; "Een GLI is een programma van 2 jaar"; "advies over gezonde voeding, gezonde eetgewoontes en gezond bewegen"; "Zorgverleners begeleiden u ook"; "De huisarts stelt vast of u een GLI kan krijgen. Zo ja, dan verwijst deze u door"; NHG: medication only after at least a year of GLI | facts correct; rewritten (see below) |
| `compassionate-use` | wetten.overheid.nl, Geneesmiddelenwet art. 40(3)(f); cbg-meb.nl, "Vragen en antwoorden over compassionate use programma" | "beschikbaar is gesteld voor gebruik in schrijnende gevallen als bedoeld in artikel 83 van verordening 726/2004"; "Alleen de fabrikant van het geneesmiddel kan een aanvraag voor een CUP indienen." | facts correct; made precise (see below) |
| `investigational-medicine` | `nl-care.md` facts 20, 24, 28, 35–42 (fact-checked) | fact 28: a doctor can ask for an ontheffing (artsenverklaring) "buiten het klinische onderzoek"; fact 24: the IGJ then asks for the Investigator's Brochure or IMPD | **corrected** (see below) |
| `pharmacovigilance` | `nl-help.md` fact 19; `src/data/jurisdictions.yaml`, NL `reporting` | "Iedereen kan een bijwerking bij ons melden"; reporting: Bijwerkingencentrum Lareb | correct (STYLE §5.1 sentence) |
| `wada-s0`, `wada-s2-3`, `wada-monitoring-program` | dopingautoriteit.nl/juridisch/dopinglijst/wada-dopinglijst and its PDF "Vertaling WADA dopinglijst 2026" (curl, pdftotext) | "S0. Niet erkende stoffen"; "Te allen tijde verboden (binnen- en buiten wedstrijdverband)"; "S2.3. Groeifactoren en groeifactor modulatoren"; "Thymosin-β4 en derivaten, zoals TB-500"; "WADA Monitoring Program 2026" | correct |

US entries defined with "In de VS" (`503a-bulks-list`, `pharmacy-compounding`, `pcac`, `fda-category-2`,
`outsourcing-facility`, `expanded-access`, `biologics-license-application`, `biological-product`) translate the English
definitions and add no Dutch route; kept (PCAC framing and world context, brief). The seven dropped ids are all US,
Canadian or Australian systems (`debarment` is used on no English page; the insurance ids leave with the frame).

### What I changed (69 entries) and why

**Facts and meaning**
- `gvs`: "Staat een medicijn er niet in, dan vergoedt het basispakket het niet" was too absolute: the Zorginstituut
  page limits the GVS to medicines from the apotheek, and reimburses hospital medicines and some unregistered ones
  outside it. Now: the lists of medicines you get on prescription from the apotheek; "Staat een goedgekeurd medicijn
  niet in het GVS? Dan vergoedt je zorgverzekeraar het niet uit het basispakket"; extra conditions "bijvoorbeeld alleen
  voor bepaalde ziekten". The unexplained "(bijlage 2)" is gone; the full name is spelled out.
- `investigational-medicine`: "In Nederland en de rest van de EU ... vooral binnen klinisch onderzoek, of via
  compassionate use" left out the artsenverklaring, which the IGJ allows for a trial medicine outside the trial
  (nl-care fact 28), and claimed the same routes for the whole EU without a source. Now: "In Nederland ... vooral als
  deelnemer aan klinisch onderzoek, of via compassionate use of een artsenverklaring". "mag je het krijgen" became
  "kun je het krijgen" (the law restricts supply, not the patient).
- `compassionate-use`: "de fabrikant vraagt goedkeuring" now says "alleen de fabrikant" and "voor zo’n programma" (a
  CUP is a programme for a group; CBG Q&A); semicolon sentence split.
- `combined-lifestyle-intervention`: "je huisarts bepaalt" read as a gatekeeper (STYLE §5.3); now "Je huisarts kijkt of
  je ervoor in aanmerking komt en verwijst je door" (the Zorginstituut's own two steps); "advies en begeleiding"; the
  NHG point now says what the standard says: "Medicijnen tegen obesitas zijn pas een optie na minstens een jaar GLI."
- `anamorelin`: "In de EU is een handelsvergunning ... geweigerd" → "de aanvraag voor een handelsvergunning" (nothing
  was ever granted).
- `chmp`: rewritten around the STYLE §2.7 name, "voor de hele EU" and "handelsvergunning".
- `publication-bias`: "Tijdschriften publiceren studies met een positief resultaat vaker" added a cause the English does
  not give (authors also leave studies unpublished); now "worden vaker gepubliceerd".
- `l-name`: the English sentence on what researchers use it for was missing; added.
- `pt-141:hypertension`: alias "onbehandelde hoge bloeddruk" translated "uncontrolled" as "untreated" (a different
  thing); removed ("hoge bloeddruk" still matches).
- `angptl3-8`: "Een paar eiwitten" means "a few proteins" in Dutch; now "Twee eiwitten ... die samen".
- `masld`: "samen met overgewicht, diabetes of veel vet" → "Het hangt samen met overgewicht, diabetes en ..." (English
  "linked to").
- `pulsatile-secretion`: "veel ervan ’s nachts" (much of the hormone) → "veel van die pieken komen ’s nachts" (many of
  the pulses).
- `amide-end`: "replaced" was lost ("in plaats daarvan" added); comma splice fixed.
- `pres`: "grote schommelingen" → "schommelingen" (English "swings"; "grote" was added).
- `hyperpigmentation`: gums are not "huid": "dan het gebied eromheen".
- `dermoscopy`: "compare them over time" now says the patterns are compared "in de loop van de tijd".
- `fsds-dao`: grammar ("haar seksuele verlangen") and "last ... rond", so it does not read as if desire itself were the
  problem.

**Dutch grammar and natural wording**
- `erythropoietic-protoporphyria` (sentence without a subject), `flushing` (article clash "een rood en warm gezicht,
  hals of borst"), `melanoma-in-situ` ("Dan geneest het meestal" → "Dan ben je meestal genezen"),
  `erectile-dysfunction` ("houdt die niet stevig"), `embryo-fetal-study` (inverted object), `ghrelin` ("Het geeft je
  honger"), `akt` ("veel kankers" → "veel soorten kanker"), `epithelial-mesenchymal-transition` ("Wondherstel gebruikt
  dat"), `growth-factor` ("zijn een medicijn"), `neutralising-antibodies`, `lipodystrophy` ("mensen die hiv-medicijnen
  gebruiken"), `mod-grf` (word order of "uit het lab"), `hba1c` and `apnoea-hypopnoea-index` ("er mee" → "ermee"),
  `obstructive-sleep-apnoea` ("vaak per nacht" → "vele keren per nacht"), `narrow-therapeutic-index` (comma), `camp`
  ("de hoeveelheid cAMP"), `ghrelin-receptor` (fragment), `melanocortin-receptor` ("receptoren ... die alfa-MSH aanzet"
  could be read either way).
- `biased-agonism`: single quotes around a term (STYLE §4.1) removed.
- `angioedema`: alias "quincke-oedeem" → "Quincke-oedeem" (a name keeps its capital, STYLE §4.2).
- `international-nonproprietary-name`: alias "International Nonproprietary Name" added (the full English name Dutch
  readers meet; no collision).

**B1 (STYLE §1 rules 1 and 9; §6 "Definitions: B1")**: every semicolon sentence and every definition sentence over
about 23 words split into short sentences, condition first where it helps ("Is die hoger dan 1? Dan ..."):
`endotoxin`, `503a-bulks-list`, `pharmacy-compounding`, `fda-category-2`, `creatinine`, `naphthylalanine`,
`growth-hormone-deficiency`, `macimorelin`, `alpha-msh`, `melanin`, `creatine-kinase`, `ultraviolet-light`,
`systolic-blood-pressure`, `responder-analysis`, `norleucine`, `odds-ratio`, `expanded-access`,
`clinical-trial-phases`, `ketones`, `albumin-binding`, `acute-pancreatitis`, `thymosin-beta-4`,
`n-terminal-acetylation` ("soms" → "kan", as the English "can"), `free-base-and-salt`, `ac-sdkp`, `biological-product`,
`hypoglycaemia`, `kccq`, `randomised-withdrawal-trial`, `outsourcing-facility` ("het medicijn heeft een tekort" → "er
is officieel een tekort aan het medicijn").

### Checked and left as they are (with the reason)

- Aliases "monografie(ën)" (`pharmacopoeia-monograph`), "subgroep(en)", "spierpijn", "gewrichtspijn", "tintelingen",
  "vetweefsel", "albumine", "calcitonine", "hypo" and "desensibilisatie" (also used for allergy treatment, but the
  pharmacological sense is standard Dutch): each mirrors an English alias with the same meaning on this site. Watch the
  first two when the Dutch pages land (a Kompas "monografie" or a non-trial "subgroep" would link here).
- "ecg" in lowercase (`qt-prolongation`) follows the Woordenlijst; Thuisarts writes "ECG". Both are correct; the
  style-sheet owner may fix one.
- `hsdd` term "hypoactief seksueel verlangen": the translator's open point stands.
- The term proposals in the translator's table above are not yet rows in STYLE-NL §2; the style-sheet owner should add
  them, so page writers use the same words and the tooltips link.
- Nothing in these files depends on a fact the research marks UNRESOLVED (no 2027 reimbursement, no Ph. Eur.
  monograph claim, no artsenverklaring for a substance authorised nowhere).
