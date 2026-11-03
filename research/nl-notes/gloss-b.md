# Notes: gloss-b (Dutch glossary, legal, safety and stub terms), 27 October 2026

Translated `src/i18n/en/glossary/{legal-a,legal-b,legal-en,safety-a,safety-b,stubs-a,stubs-b}.json` into
`src/i18n/nl/glossary/<same name>.json`: same ids, `category`, `see_also` and `autolink` (cosmetic-product
stays `autolink: false`, as on English) unchanged. 205 English entries: 148 translated, 57 dropped.

| File | English | Dutch | Dropped |
|---|---|---|---|
| legal-a | 9 | 9 | 0 |
| legal-b | 42 | 26 | 16 |
| legal-en | 38 | 4 | 34 |
| safety-a | 40 | 38 | 2 |
| safety-b | 20 | 18 | 2 |
| stubs-a | 27 | 27 | 0 |
| stubs-b | 29 | 26 | 3 |

Validator: `npx tsx scripts/validate-content.ts --only glossary` → 0 errors, 0 warnings. Every file passes
`JSON.parse`, LF line endings, no straight apostrophes, every definition under 400 characters. Across all 24
Dutch glossary files present at 19:40 (675 ids): no duplicate id, no form (term or alias) used by two ids.

## 1. Dropped ids (term exists only for US/UK/CA/AU/IE/NZ readers' own systems; no Dutch page uses it)

- **UK:** `human-medicines-regulations`, `special-medicinal-product` (UK specials route), `misuse-of-drugs-act`,
  `class-c-drug`, `conviction-on-indictment`, `ukad`, `eams` (UK early-access route), `nice-uk`,
  `scottish-medicines-consortium`, `gphc`, `care-quality-commission`, `yellow-card`.
- **US:** `fdca`, `interstate-commerce`, `usada`, `right-to-try` (US route), `medwatch`,
  `medical-device-clearance` (510(k); not used on any English page either), `new-dietary-ingredient` (the US NMN
  story is the US answer; the Dutch nad-precursors page answers for the EU).
- **Several countries:** `global-dro` (covers the US, UK, Canada, Australia, New Zealand and a few others, not
  the Netherlands; Dutch athletes use the Dopingautoriteit's own tools), `health-advice-line` (NHS 111,
  healthdirect: the Dutch help levels use the huisarts and the huisartsenpost), `urgent-care-centre` (same).
- **Canada:** `food-and-drugs-act`, `food-and-drug-regulations`, `din`, `notice-of-compliance`,
  `prescription-drug-list`, `drug-product-database`, `special-access-program`, `natural-health-product`,
  `canada-vigilance-program`, `cbsa`, `type-i-recall`, `sport-integrity-canada`.
- **Australia:** `therapeutic-goods-act`, `therapeutic-good`, `artg`, `poisons-standard`, `schedule-4`,
  `appendix-d`, `s4d`, `special-access-scheme`, `authorised-prescriber`, `personal-importation-scheme`,
  `infringement-notice`, `penalty-unit`, `ahpra`, `australian-border-force`, `sport-integrity-australia`,
  `listed-medicine`.
- **Ireland and New Zealand:** `hpra`, `hse-ireland`, `medsafe`, `medicines-act-1981`, `section-29-nz`, `carm`,
  `sport-integrity-commission-nz`.

**For the page writers and the final QA:**
- The English `history/how-we-got-here` names the Yellow Card, Canada Vigilance, the notice of compliance,
  the Therapeutic Goods Act and the ARTG, EAMS, the Special Access Scheme, the Authorised Prescriber and Right
  to Try. If the Dutch history page keeps any of these lines as history, it gets no tooltip (fine), or the
  entry must be added back. English `legal-routes` uses an explicit `<Term id="nice-uk">`: the Dutch routes page
  must not copy it.
- While `nl` is `preview`, `namespace()` in `src/lib/i18n.ts` merges the English glossary under the Dutch one,
  so the dropped ids still show, in English, on the Dutch glossary page. They disappear when `nl` is
  published; an explicit `<Term id>` of a dropped id then fails the build (`Term.astro` throws).
- Kept on purpose as world context or evidence: `mhra`, `tga`, `health-canada` (regulators that Dutch history
  and evidence text may still name), the FDA terms used to describe the US vote and US enforcement
  (`advisory-committee`, `rulemaking`, `federal-register`, `bulk-drug-substance`, `warning-letter`,
  `unapproved-new-drug`, `drug-shortage-list`, `intended-use`, `gras` for the AOD-9604 myth), and the trial
  registries that hold trial records (`isrctn`, `anzctr`). Each definition names its country.

## 2. Concepts that keep the English id (so no Dutch-only id should be created)

`research/nl/nl-help.md` §7.4 proposes Dutch glossary ids `naaldencontainer`, `prikaccident`, `pep` and
`spuitomruil`. These concepts already have English ids in my files: `sharps-container` (naaldencontainer),
`needle-stick-injury` (prikaccident), `post-exposure-prophylaxis` (PEP), `needle-syringe-programme`
(spuitomruil). STYLE-NL §6: "Never two ids for one concept". Whoever writes the Dutch-only ids should skip
these four. `ethics-committee` is the generic "ethische commissie"; its definition names the METC, which keeps
its own Dutch-only id (`metc`, 23 October). I used no METC alias ("medisch-ethische toetsingscommissie" is left
for `metc`; the hyphen rule of `rehype-glossary.mjs` stops "ethische toetsingscommissie" from matching inside it).

## 3. Term choices not in STYLE-NL §2 (proposed rows; I did not edit the style sheet, which another assignment owns)

| English | Dutch term used | Why |
|---|---|---|
| medicine by presentation · by function | geneesmiddel naar presentatie · geneesmiddel naar werking | NVWA "op grond van hun werking of hun presentatie"; Customs "aandieningscriterium (presentatie)", "toedieningscriterium" / "de toediening (werking)" are aliases |
| Investigator's Brochure · IMPD | onderzoekersdossier · GVO-dossier (IMPD) | Gnw art. 1 "qq. onderzoekersdossier"; verordening 536/2014 annex I "G. GENEESMIDDEL VOOR ONDERZOEK-DOSSIER (GVO-DOSSIER)" |
| GMP (long form) | goede praktijken bij het vervaardigen | verordening 536/2014 annex I, heading F |
| pharmacopoeia | farmacopee, de Europese Farmacopee | Gnw ("Europese farmacopee", "monografieën van de Europese Farmacopee"); matches `pharmacopoeia-monograph` |
| bulk drug substance | farmaceutische grondstof | "grondstof" alone would also catch "grondstof" in the everyday sense (vitamin B3 as the body's raw material for NAD+) |
| reconstitution | reconstitutie | STYLE-NL says "oplossen (poeder in vloeistof)", but "oplossen" is an everyday word (a problem, a sugar cube) and may not be an alias (§6). The definition uses "oplossen". |
| qualified person | Qualified Person (QP) | directive 2001/83 art. 48 says "bevoegde persoon" (in the definition); "bevoegde persoon" alone is an everyday phrase |
| strict liability | risicoaansprakelijkheid | Nationaal Dopingreglement 2025, art. 2.5 |
| specified substance | specifieke stof | the Dopingautoriteit's list translation and NDR 2025 ("Specifieke stof", "Niet-Specifieke Stoffen") |
| contaminated source/product | vervuild product | NDR 2025 definition "Vervuild product"; Dopingautoriteit "vervuilde voedingssupplementen" |
| testing pool | testing pool (RTP, NTP) | Dopingautoriteit whereabouts page keeps the English words |
| recreational athlete | recreatieve sporter | NDR 2025 definition |
| S4 | S4 (“Hormoon- en metabole modulatoren”) | Dopingautoriteit translation of the 2026 list |
| M2.2 | M2.2 (grens voor infusen) | content from the same translation |
| UNESCO convention | Internationaal Verdrag tegen doping in de sport | wetten.overheid.nl BWBV0001829 |
| orphan designation | aanwijzing als weesgeneesmiddel | verordening 141/2000, art. 5 |
| novel food | nieuw voedingsmiddel | verordening 2015/2283 |
| telehealth | zorg op afstand | no source term found; aliases telezorg, online consult |
| PIEDs | prestatieverhogende middelen | DIMS "prestatieverhogende middelen"; Mainline writes "PIEDs" (alias) |
| drug checking | drugs testen | Mainline "drugs testen"; Jellinek "drugstestservice" |
| anticoagulant | bloedverdunner | Thuisarts page title "Bloedverdunners" |
| full blood count · liver tests · baseline | bloedbeeld · leverwaarden · nulmeting | common Dutch lab words |
| cellulitis | cellulitis, alias wondroos | Thuisarts "Wondroos" page is tagged "erysipelas cellulitis"; STYLE-NL "huidinfectie (wondroos of cellulitis)" |
| GRAS | GRAS-status | see §4 |

INN spellings in definitions follow the site's compound names (tesamorelin, ipamorelin, hexarelin), not the
Dutch INN forms in the doping list (tesamoreline, ipamoreline): writers should keep one form; the style sheet
has no row yet.

## 4. Aliases left out on purpose (auto-linking is case-insensitive, whole words, `-` counts as a letter)

- **GRAS**: lowercase "gras" is Dutch for grass (§6, like WED and BIG). Term "GRAS-status", aliases "GRAS-claim",
  "GRAS-notificatie". A bare "GRAS" in the text does not link; use `<Term id="gras">`.
- **NR** (nicotinamide riboside): would link "nr." in every EU act name ("verordening (EG) nr. 726/2004").
- **IB** (Investigator's Brochure): "IB" is the Dutch abbreviation for inkomstenbelasting.
- **epifyse** (pineal gland): also the end of a long bone.
- **supplement**, **grondstof**, **tekortenlijst**, **drugstest** (also a urine drug test), **antidopingorganisatie**
  (any anti-doping organisation, not only the national one), **huidinfectie**, **onder de huid**, **bedoeld gebruik**.
- **Hyphenated forms** added because the hyphen blocks the shorter match: "ISO/IEC 17025-accreditatie" (ladder
  rung 1), "ISO/IEC 17025-norm", "GMP-regels", "IGF-1-waarde", "GHRH-analoog", "GVO-dossier".

**Known risks kept:** "PEP" is also Dutch street slang for amphetamine (not checked against a source); STYLE-NL
fixes PEP as the term, so it stays. "specifieke stof" and "vervuild product" could catch an everyday phrase on a page that uses
it before the doping sense ("een vervuild product" for a vial with germs; STYLE-NL §2.6 prefers "besmet" there).
No English page uses "specific substance" in an everyday sense.

## 5. Facts in definitions, and where each was checked (all read 27 October 2026)

| Entry | Source and wording relied on |
|---|---|
| medicine-by-presentation, -by-function | wetten.overheid.nl Geneesmiddelenwet (BWBR0021505, "Geldend van 09-09-2025 t/m heden"), art. 1: "op enigerlei wijze wordt gepresenteerd als zijnde geschikt voor"; "het herstellen, verbeteren of anderszins wijzigen van fysiologische functies bij de mens door een farmacologisch, immunologisch of metabolisch effect". Douane Handboek VGEM ch. 7 (kennisbank.douane.nl, curl 200): "Criterium 2: het aandieningscriterium (presentatie)", "Criterium 3: de toediening (werking)". IGJ melatonin Q&A (curl 200): "een noemenswaardig en gunstig effect … door een farmacologisch effect te bewerkstelligen" … "criteria, die door de rechter zijn vastgesteld". Also `research/nl/nl-law.md` facts 31–33 |
| investigators-brochure | Gnw art. 1 "qq. onderzoekersdossier: het dossier, bedoeld in artikel 2, tweede lid, onderdeel 23, van verordening 536"; verordening (EU) nr. 536/2014 (Dutch, publications.europa.eu CELLAR, celex 32014R0536): "„onderzoekersdossier”: het geheel van de klinische en niet-klinische gegevens over het geneesmiddel … voor onderzoek"; annex I "G. GENEESMIDDEL VOOR ONDERZOEK-DOSSIER (GVO-DOSSIER)" |
| gmp | same act, annex I: "GOEDE PRAKTIJKEN BIJ HET VERVAARDIGEN (GOOD MANUFACTURING PRACTICE — GMP)" |
| pharmacopoeia | Gnw: "de … samengestelde Europese farmacopee", "de monografieën van de Europese Farmacopee" |
| national-marketing-authorisation | Gnw: "College: het College ter beoordeling van geneesmiddelen"; "Het College verleent een handelsvergunning voor een geneesmiddel" |
| qualified-person | richtlijn 2001/83/EG (Dutch, CELLAR celex 32001L0083), art. 48: "ten minste één bevoegde persoon"; art. 51: "de verantwoordelijkheid ervoor draagt dat … iedere partij geneesmiddelen is vervaardigd en gecontroleerd" |
| nado | `nl-law.md` fact 44 (Wuab art. 4: "De Dopingautoriteit is de nationale antidopingorganisatie"); NDR 2025 PDF (dopingautoriteit.nl, curl 200): "de door de Nederlandse overheid aangewezen NADO voor Nederland" |
| therapeutic-use-exemption | NDR 2025: "Dispensatie: een dispensatie staat toe dat een lid met een medische aandoening een verboden stof of verboden methode mag gebruiken, doch alleen indien is voldaan aan de voorwaarden van artikel 4.4 …" (four conditions: from the English entry, ISTUE) |
| recreational-athlete | NDR 2025 "Recreatieve sporter: …"; "De Dopingautoriteit bepaalt welke …"; `nl-law.md` fact 45 |
| specified-substance | Dopingautoriteit, "Vertaling WADA dopinglijst" (15 december 2025, "geldig vanaf 1 januari 2026", PDF via curl): "Specifieke Stoffen", "Niet-Specifieke Stoffen"; NDR 2025 "Specifieke stof" |
| contaminated-source | NDR 2025: "Vervuild product: een product dat een verboden stof bevat (i) die niet staat vermeld op het etiket …" |
| strict-liability | NDR 2025 art. 2.5: "risicoaansprakelijkheid van toepassing is" |
| testing-pool | dopingautoriteit.nl/whereabouts: "De Dopingautoriteit heeft vanaf 1 januari 2023 twee testing pools, namelijk: de Registered Testing Pool (RTP) en de National Testing Pool (NTP)" |
| prohibited-list | dopingautoriteit.nl/juridisch/dopinglijst/wada-dopinglijst: "Jaarlijks wordt de door WADA opgestelde lijst per 1 januari van kracht. Bijgaand de Nederlandse vertaling …" |
| wada-s2, wada-s4, ampk, aicar | list translation: "S2.2.4 Groeihormoon Releasing Factors", "S2.3 … Thymosin-β4 en derivaten, zoals TB-500"; "S4 Hormoon- en metabole modulatoren"; "S4.4.1 AMP-geactiveerde proteïnekinase activatoren (AMPK), zoals AICAR … (MOTS-c)"; "Te allen tijde verboden" |
| wada-m2 | list translation: "M2.2. Intraveneuze infusies en/of -injecties van meer dan 100 milliliter binnen een periode van 12 uur, tenzij ze legitiem worden gegeven bij chirurgische ingrepen, ziekenhuisbehandelingen of klinisch onderzoeken" |
| unesco-convention | wetten.overheid.nl BWBV0001829 (title "Internationaal Verdrag tegen doping in de sport", "Geldend van 01-01-2026 t/m heden", "Bijlage I De Lijst van verboden stoffen en methoden"); Tractatenblad 2007, 5 (zoek.officielebekendmakingen.nl, curl 200): "voor het Koninkrijk der Nederlanden op 1 februari 2007 in werking treden" |
| novel-food | verordening (EU) 2015/2283 (Dutch, CELLAR): "die binnen de Unie vóór 15 mei 1997 niet in significante mate voor menselijke voeding werden gebruikt"; art. 6(2) "Alleen nieuwe voedingsmiddelen die zijn toegelaten en in de Unielijst zijn opgenomen, mogen … in de handel worden gebracht"; authorisation by "de Commissie" after "het advies van de Autoriteit" |
| efsa | verordening (EG) nr. 178/2002 (Dutch, CELLAR), art. 22: "Er wordt een Europese Autoriteit voor voedselveiligheid opgericht"; "De Autoriteit verstrekt wetenschappelijk advies" |
| orphan-designation | verordening (EG) nr. 141/2000 (Dutch, CELLAR): "aanwijzing als weesgeneesmiddel"; art. 5(8): the agency sends the opinion "ter kennis van de Commissie, die binnen 30 dagen … een besluit neemt" |
| cosmetic-product | `nl-law.md` fact 34 (verordening 1223/2009 art. 2(2), Dutch: "ingespoten … niet als cosmetische producten worden beschouwd") |
| dietary-supplement | `nl-law.md` fact 33 (NVWA: "Producten kunnen op grond van hun werking of hun presentatie als geneesmiddel worden beschouwd"; Warenwetbesluit voedingssupplementen in force) |
| medical-confidentiality | `nl-help.md` §N, fact 54 (KNMG "Een arts moet zwijgen …"; Thuisarts "Alle artsen in Nederland hebben een beroepsgeheim") |
| needle-syringe-programme | `nl-help.md` fact 36 (Rijksoverheid "Gratis omwisselen van gebruikte spuiten voor nieuwe steriele spuiten"; Trimbos: "ook apotheken of GGD-locaties") |
| drug-checking | `nl-help.md` facts 40–41 (DIMS "geen steroïden, geen medicijnen"; Jellinek does not test "Anabolen", "Medicijnen") |
| sharps-container | `nl-help.md` facts 45, 48 (apotheek.nl "Een naaldencontainer is te krijgen bij uw apotheek"; Thuisarts "naalden-container") |
| post-exposure-prophylaxis | `nl-help.md` fact 44 (Thuisarts: less than 72 hours, "Het liefst al binnen 2 uur") |
| cellulitis, anticoagulant, anaemia, eating-disorder | thuisarts.nl/wondroos ("Wondroos erysipelas cellulitis"), /bloedverdunners, /bloedarmoede ("Bloedarmoede anemie"), /eetstoornissen (all curl 200) |

Everything else (science, the US, UK, Canadian and Australian entries kept as world context) is translated
from the English entry, which the English site fact-checked; no fact was added.

## 6. UNRESOLVED (left out of the definitions)

- **NMN's EU novel-food status after 10 August 2026** (`research/nl/eu-status.md` §5 item 8): the
  `nicotinamide-mononucleotide` definition stays neutral ("de regels verschillen per land").
- **Where a Dutch athlete applies for a dispensatie**: dopingautoriteit.nl/magdit/dispensatie answered 404; the
  definition names no body.
- **The 2027 Nationaal Dopingreglement text** was not found (`nl-law.md` §5.9); the doping definitions follow
  NDR 2025 and the 2026 list translation, which are in force today.

## Check (independent, 27 October 2026)

Adversarial check of all 148 Dutch entries in the 7 files against the English entries (`src/i18n/en/glossary/`),
`docs/STYLE-NL.md`, the brief, the fact-checked `research/nl/*.md` and today's sources. I edited only the 7 Dutch
files and this note. English files, the style sheet and other glossary files are untouched. 51 fields were changed in
46 entries. Ids, `category` and `autolink` are unchanged. `see_also` was changed only where it pointed at a dropped id.

**After the fixes:** `npx tsx scripts/validate-content.ts --only glossary` gave 0 errors and 0 warnings.
`npx tsx scripts/check-locale-residue.ts` gave 0 hits. The 25 Dutch glossary files (731 ids, 2,511 forms, read at about
20:30) have no duplicate id and no form shared by two ids. All 7 files are UTF-8 with LF endings and no straight
apostrophes, are written as `JSON.stringify(…, null, 2)`, and have every definition under 400 characters.

### 1. Meaning lost, wrong or added (fixed)

| Id | Problem | Fix |
|---|---|---|
| `wada-m2` | **Mistranslation.** "een klinisch onderzoek" means a clinical trial on this site (STYLE §2.4). WADA's 2026 list says "clinical diagnostic investigations". The Dopingautoriteit's "klinisch onderzoeken" (plural) means diagnostic examinations | "Dit verbod geldt niet bij een ziekenhuisbehandeling, een operatie of medisch onderzoek om een diagnose te stellen. Ook met een dispensatie mag het." |
| `orphan-designation` | Narrowed to "de Europese Commissie". The only English use (epitalon) is a **US** designation, so the tooltip would have been wrong there | Back to "een medicijnautoriteit" (as the English has it), plus "In de EU neemt de Europese Commissie dat besluit" |
| `ethics-committee` | Lost the English sentence "It asks whether the study is useful and not too risky". The Dutch line named only the METC | Sentence restored. Now "een METC of de CCMO" (`nl-care.md` fact 41: WMO art. 2, "een positief oordeel" from an authorised committee or the CCMO) |
| `sharps-container` | Lost "Needles cannot easily pierce it" | Restored: "Naalden prikken er niet makkelijk doorheen." (The apotheek sentence stays: `nl-help.md` fact 45) |
| `needle-syringe-programme` | Lost "usually", "Many also give advice and some offer tests". It was called "een plek" (it is a service), and "bij GGD’en" was too broad (Trimbos: "ook apotheken of GGD-locaties") | English meaning restored. Now "bij de verslavingszorg en bij sommige apotheken en GGD’en" (`nl-help.md` fact 36). Whether these services take people who inject peptides is still UNRESOLVED (§5.2) and is not stated |
| `medical-confidentiality` | Lost "The law and professional rules … for example to protect someone from serious harm" | Restored (KNMG grounds, `nl-help.md` fact 54: legal duty, conflict of duties) |
| `medicine-by-function` | "als het echt verandert" lost the English "can" (the legal test is what the product *can* do: Hecht-Pharma, Gnw art. 1) | "als het echt kan veranderen …, door een effect zoals dat van een medicijn" |
| `pharmacopoeia` | Added claim "In Nederland is dat de Europese Farmacopee". The Gnw (read today) does not say this. It refers to the Europese Farmacopee in art. 1 (homeopathic medicines: "… samengestelde Europese farmacopee of, bij ontstentenis daarvan, in een in een lidstaat officieel in gebruik zijnde farmacopee") and in the certificate article ("monografieën van de Europese Farmacopee"). edqm.eu answered 403 | "De Nederlandse wet verwijst naar de Europese Farmacopee." |
| `unlicensed-medicine` | "Niemand heeft daar … beoordeeld" overstated the English passive. A doctor or pharmacist may have assessed it; what is missing is the regulator's assessment. "sold" had become only "gebruikt" | "De medicijnautoriteit van dat land heeft … dus niet beoordeeld"; "verkocht of gebruikt" |
| `unapproved-new-drug` | "voor dat gebruik": "dat" pointed back to nothing | "voor het gebruik waarvoor het bedoeld is" |
| `intended-use` | "seller" had become "bedrijf" | "de verkoper" (STYLE §5.6: the only word for the role) |
| `drug-shortage-list` | "mogen Amerikaanse apotheken" narrowed the English "allows more compounding" (503B outsourcing facilities make copies too) | "mogen er volgens de Amerikaanse wet meer kopieën van worden bereid" |
| `specified-substance` | "die iemand eerder … gebruikt": "eerder" can mean "earlier" | The Dopingautoriteit's own wording: "waarvan de kans groter is dat een sporter die om een andere reden dan sport heeft gebruikt" |
| `post-exposure-prophylaxis` | "Na 72 uur werkt het niet meer." stood alone, so it seemed to cover hepatitis B too. The English limits it to HIV | One sentence: "Tegen hiv begin je het liefst binnen 2 uur, en na 72 uur werkt het niet meer." |
| `hplc` | Lost "by itself" (HPLC alone does not identify the substance; with mass spectrometry it can). "welke stof het vooral is" is unclear | "Maar de test alleen laat niet zien welke stof het hoofdbestanddeel is." |
| `catalyst` | Lost "must": "testen labs" became a description | "Daarom moeten labs testen of er restjes metaal zijn achtergebleven." |
| `osteocalcin` | "laat zien" lost the English hedge "is used as a sign of" | "wordt gebruikt als teken van" |
| `drug-checking` | "een monster van een drug": the English says "a substance" | "een middel". (The NL sentence on medicines and anabolen is right: `nl-help.md` facts 40–41, DIMS and Jellinek) |
| `telehealth` | "Sommige bedrijven" lost "telehealth companies" | "Sommige bedrijven die zorg op afstand bieden, …" |
| `cellulitis` | "In Nederland heet dit meestal wondroos" is broader than the source. thuisarts.nl/wondroos (curl 200 today) has the page title "Wondroos" with the tags "erysipelas cellulitis". Medically the two names are not the same | "Op Thuisarts heet dit wondroos." |
| `efsa` | Lost "publish their safety opinions". "de Europese Commissie beslist" was a claim the English did not make and is not true of every decision. Verordening 178/2002 (Dutch, CELLAR, today) limits EFSA to "het verstrekken van wetenschappelijk advies" | "… en publiceren hun oordeel over de veiligheid. EFSA geeft advies, maar beslist niet wat er in de handel mag." |

### 2. Dutch that read as translated English, or grammar (fixed)

- `federal-register`: "dagblad" means a newspaper. Now "het officiële dagelijkse publicatieblad".
- `rulemaking`: a definition that began "Zo maakt …". Now "De manier waarop …".
- `advisory-committee`: "deskundigen van buiten" and "Hun stemming" (the antecedent was "groep"). Now "externe
  deskundigen" and "De stemming van zo’n commissie".
- `mitochondria`, `mitochondrial-derived-peptide`: the calque "hoofd-DNA". Now "het DNA in de celkern".
- `nootropic`: the calque "Een los woord". Now "Een vaag begrip".
- `tuftsin`: "Het zet afweercellen aan", where "het" pointed to "de keten". Now "Tuftsine zet …".
- `enkephalin`: "een … opioïde … breken het": the gender did not match. Now "breken enkefaline snel af".
- `lipohypertrophy`: "op een plek waar iemand vaak op dezelfde plaats" said the same thing twice, and "ongelijk"
  should be "ongelijkmatig".
- `antimicrobial-preservative`: "open is gegaan" (as if the vial opened by itself). Now "is geopend".
- `needle-stick-injury`: a heavy passive. Now "Zo kun je een virus oplopen dat via bloed overgaat …".
- `platelets`: "Hele kleine" is spoken Dutch. Now "Heel kleine".
- `rhabdomyolysis`: "spierpijn of zwakte". Now "spierpijn of spierzwakte".
- `barth-syndrome`: "en ben je snel moe" addressed the reader as the patient. Now "en kan iemand snel moe zijn".
- `left-ventricular-ejection-fraction`: "grootste pompkamer" is not "main". Now "belangrijkste pompkamer".
- `liver-function-tests`: the term "leverwaarden" was defined as "Bloedonderzoek". Now "Waarden uit bloedonderzoek …".
- STYLE §3 (use digits from 2 up): `therapeutic-use-exemption` "4 strenge voorwaarden", `tetrapeptide` and `tuftsin`
  "4 aminozuren", `dermis` "2 hoofdlagen", `testing-pool` "2 testing pools".

### 3. Aliases (fixed)

- Removed `telehealth` "online consult", "online consulten": an online consult is one kind of zorg op afstand, not the
  same thing (STYLE §6: synonyms only if exact).
- Removed `drug-checking` "testservice", "testservices": these are generic words that would also link a GGD soa-test
  service.
- Kept, with the risk written down for the page writers and the final QA:
  - **"vervuild product"** (`contaminated-source`). STYLE §2.6 allows "vervuild" for a vial with germs. On a safety page,
    "een vervuild product" would show the anti-doping definition. English `bpc-157` has "A contaminated product or
    needle can cause an infection", and English has the same clash. **Dutch safety and compound text should write
    "besmet" for germs** (STYLE §2.6 lists it first), and keep "vervuild product" for the doping sense.
  - "beoogd gebruik" (`intended-use`, which is US law). On Dutch pages it must not be used for EU or Canadian rules
    (English uses "intended use" for Canada in `history/how-we-got-here`).
  - "S2" and "S4" as bare aliases (English has only "section S2"). "S2.3" has its own alias, so it is not captured. In
    "S2.2.4" and "S4.4.1" the link goes to the parent group, which is correct.

### 4. `see_also` pointing to dropped ids (fixed)

`GlossaryIndex.astro` filters out missing ids. But in preview, the English glossary is merged in, so the Dutch page
would have shown UK, US, Canadian and Australian entries in English (for example "nado → UK Anti-Doping"). Changed:
- `nado` → `wada`, `dopingautoriteit`
- `mhra`, `health-canada` and `tga` → `medicines-regulator`
- `unlicensed-medicine` → `marketing-authorisation`, `magistral-preparation` (the Dutch counterpart of UK specials)
- `unapproved-new-drug` → `fda`
- `telehealth` → none
- `dietary-supplement` → `medicine-by-presentation`, `medicine-by-function`, `novel-food`

### 5. Facts re-checked today (curl, 27 October 2026), with the wording relied on

| Entry | Source | Wording |
|---|---|---|
| `wada-m2` | WADA, 2026 Prohibited List (wada-ama.org PDF, 200) | "M2.2. Intravenous infusions and/or injections of more than a total of 100 mL per 12-hour period except for those legitimately received in the course of hospital treatments, surgical procedures or clinical diagnostic investigations." |
| `wada-m2`, `wada-s4`, `ampk`, `specified-substance` | Dopingautoriteit, "Vertaling WADA dopinglijst 2026" (PDF, 200) | "M2.2. Intraveneuze infusies en/of -injecties van meer dan 100 milliliter binnen een periode van 12 uur, tenzij ze legitiem worden gegeven bij chirurgische ingrepen, ziekenhuisbehandelingen of klinisch onderzoeken."; "S4. Hormoon- en metabole modulatoren"; "AMP-geactiveerde proteïnekinase activatoren (AMPK), zoals AICAR, … (MOTS-c)"; "stoffen en methoden waarvan de kans groter is dat ze door een sporter worden ingenomen of gebruikt voor een ander doel dan het verbeteren van de sportprestaties"; "Te allen tijde verboden" |
| `prohibited-list` | dopingautoriteit.nl/juridisch/dopinglijst/wada-dopinglijst (200) | "Jaarlijks wordt de door WADA opgestelde lijst per 1 januari van kracht. Bijgaand de Nederlandse vertaling van de WADA-Dopinglijst van 2026." |
| `testing-pool` | dopingautoriteit.nl/whereabouts (200) | "De Dopingautoriteit heeft vanaf 1 januari 2023 twee testing pools, namelijk: de Registered Testing Pool (RTP) en de National Testing Pool (NTP)." |
| `recreational-athlete`, `contaminated-source`, `therapeutic-use-exemption`, `specified-substance`, `strict-liability`, `nado` | Nationaal Dopingreglement 2025 (dopingautoriteit.nl PDF, 200) | "Recreatieve sporter: (a) sporters die niet vallen onder de definitie van International-Level Athlete en/of National-Level Athlete, (b) …"; "De Dopingautoriteit bepaalt welke sporters recreatieve sporters zijn"; "Vervuild product: een product dat een verboden stof bevat (i) die niet staat vermeld op het etiket en (ii) die niet wordt genoemd in informatie die beschikbaar is via een redelijke zoekinspanning op internet"; "Dispensatie: … een verboden stof of verboden methode mag gebruiken, doch alleen indien is voldaan aan de voorwaarden van artikel 4.4 …"; "Specifieke stof: de als zodanig aangemerkte (categorieën van) stoffen op de dopinglijst" (note: "specified substances"); "2.5. Voor artikel 3 en artikel 4 geldt dat risicoaansprakelijkheid van toepassing is"; "de door de Nederlandse overheid aangewezen NADO voor Nederland" |
| `unesco-convention` | wetten.overheid.nl BWBV0001829 (200, "Geldend van 01-01-2026 t/m heden"); Trb. 2007, 5 (200) | "Internationaal Verdrag tegen doping in de sport"; "voor het Koninkrijk der Nederlanden op 1 februari 2007 in werking treden. Wat betreft het Koninkrijk der Nederlanden, zal het Verdrag alleen voor Nederland …" |
| `pharmacopoeia`, `national-marketing-authorisation` | Geneesmiddelenwet BWBR0021505 (200, "Geldend van 09-09-2025 t/m heden") | see §1 for the farmacopee wording; "College: het College ter beoordeling van geneesmiddelen"; "Het College verleent een handelsvergunning voor een geneesmiddel" |
| `investigators-brochure`, `gmp` | verordening (EU) nr. 536/2014, Dutch (CELLAR, 200) | "„onderzoekersdossier”: het geheel van de klinische en niet-klinische gegevens over het geneesmiddel of de geneesmiddelen voor onderzoek …"; "G. GENEESMIDDEL VOOR ONDERZOEK-DOSSIER (GVO-DOSSIER)"; "GOEDE PRAKTIJKEN BIJ HET VERVAARDIGEN (GOOD MANUFACTURING PRACTICE — GMP)" |
| `qualified-person` | richtlijn 2001/83/EG, Dutch (CELLAR, 200) | art. 51: "de in artikel 48 bedoelde bevoegde persoon … de verantwoordelijkheid ervoor draagt dat … iedere partij geneesmiddelen is vervaardigd en gecontroleerd" |
| `orphan-designation` | verordening (EG) nr. 141/2000, Dutch (CELLAR, 200) | art. 5(8): "Het Bureau brengt het definitieve advies van het comité onmiddellijk ter kennis van de Commissie, die binnen 30 dagen na ontvangst van het advies een besluit neemt"; "aanwijzing als weesgeneesmiddel" |
| `novel-food` | verordening (EU) 2015/2283, Dutch (CELLAR, 200) | "… dat het niet vóór … 15 mei 1997, in significante mate binnen de Unie voor menselijke voeding is gebruikt"; "Alleen nieuwe voedingsmiddelen die zijn toegelaten en in de Unielijst zijn opgenomen, mogen als zodanig in de Unie in de handel worden gebracht" |
| `efsa` | verordening (EG) nr. 178/2002, Dutch (CELLAR, 200) | art. 22: "Er wordt een Europese Autoriteit voor voedselveiligheid opgericht"; "De Autoriteit verstrekt wetenschappelijk advies"; recital: "moet dan ook beperkt worden tot het verstrekken van wetenschappelijk advies" |
| `cellulitis` | thuisarts.nl/wondroos (200) | title "Wondroos", tags "Wondroos erysipelas cellulitis"; "Warme, dikke, pijnlijke, rode of donkere plek op je been of neus? Dat kan wondroos zijn." |

The facts on help, harm reduction, supplements and cosmetics come from the fact-checked research. I checked them
against it: `nl-help.md` facts 36, 40–41, 44, 45, 48, 51 and 54, and §5.2–4 (nothing UNRESOLVED is stated). From
`nl-law.md`, facts 31, 33, 34, 44 and 45. From `eu-status.md`, §5 item 8: the NMN definition stays neutral, and the NR
definition states no legal status.

### 6. Checked and left as they are

- **The 57 dropped ids** are all another country's own system: the UK, US, Canadian, Australian, Irish and New Zealand
  laws, routes, registers, help lines and reporting schemes, plus Global DRO (it does not cover the Netherlands). No
  id was dropped that the Dutch frame needs. Concepts with a Dutch counterpart keep the English id
  (`sharps-container`, `needle-stick-injury`, `post-exposure-prophylaxis`, `needle-syringe-programme`,
  `personal-importation`).
- `recreational-athlete`: the English says "Under the 2027 World Anti-Doping Code". The Dutch "In de antidopingregels"
  is right, because NDR 2025 (based on the 2021 Code) already defines "Recreatieve sporter". **For the English
  owner:** the English definition may date the concept wrongly (not edited).
- `smpc`: "hoe je het gebruikt" stands for the English "the approved doses" (STYLE §5.6 limits "dosis" and "dosering"
  to study descriptions).

### 7. For other assignments (not edited: not my files)

- `src/i18n/nl/glossary/guides.json`, `informed-consent`: the alias **"toestemming"** is an everyday word (STYLE §6).
  It would link "zonder toestemming", "toestemming van de patiënt" and so on, on any page. Suggest removing it and
  keeping "geïnformeerde toestemming" and "informed consent".
- STYLE-NL §2.6 could add one line: "contaminated (germs) → besmet. 'Vervuild product' is the doping term (NDR 2025)".

### 8. Still UNRESOLVED (not stated in any definition)

Same as §6 of the translator's notes. Also: whether today's spuitomruil services take people who inject peptides
(`nl-help.md` §5.2), and whether a naaldencontainer from the apotheek is free (§5.4). The definitions say neither.
