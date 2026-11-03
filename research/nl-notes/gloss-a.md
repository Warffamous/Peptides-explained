# Notes: glossary group gloss-a (27 October 2026)

Assignment `gloss-a`: Dutch versions of six English glossary files. Nothing in `src/i18n/en/`, `docs/` or any
other assignment's file was edited. Read first: `research/nl-spec/content-brief.md`, `docs/STYLE-NL.md` (§2, §6),
`docs/CONTENT-GUIDE.md` §1, §1a, §12, `src/plugins/rehype-glossary.mjs` (how matching works).

## 1. Files written

| File | English ids | Dutch ids | Dropped |
|---|---|---|---|
| `src/i18n/nl/glossary/basics.json` | 73 | 73 | none |
| `src/i18n/nl/glossary/evidence.json` | 50 | 50 | none |
| `src/i18n/nl/glossary/final-qa.json` | 70 | 69 | `nhs` |
| `src/i18n/nl/glossary/shared.json` | 4 | 4 | none |
| `src/i18n/nl/glossary/history.json` | 15 | 15 | none |
| `src/i18n/nl/glossary/guides.json` | 18 | 18 | none |
| **Total** | 230 | 229 | 1 |

Same ids, same `category`, same `see_also`, same `autolink: false` (peptide, protein, informed-consent) as English.
Terms follow STYLE-NL §2 where it has a row; aliases are Dutch plurals and inflections, with an English alias only
where Dutch readers meet the English words (research use only, off-label, US law names, RCT, NNT).

## 2. Dropped

| Id | Why |
|---|---|
| `nhs` | The UK's own health service and its patient websites (the brief: NHS leaves with the UK frame). A Dutch page answers with the huisarts, Thuisarts and the Dutch help levels. No Dutch page should use the term. |

Note: in preview the glossary page merges the English namespace (`src/lib/i18n.ts`, `namespace()`), so the English
`nhs` entry still shows on `/nl/glossary/` until the locale is published. Auto-linking on Dutch pages reads only
`src/i18n/nl/glossary/`, so no Dutch page links it.

**Kept on purpose** (a Dutch page uses them to describe US science, US law history or the US vote, never as the
reader's route): `fda`, `docket`, `boxed-warning`, `accelerated-approval`, `user-fee`, `kefauver-harris-amendments`,
`substantial-evidence`, `adequate-and-well-controlled-study`, `cdc` (CDC injection guidance is evidence on the safety
pages), `medlineplus` (a source some safety pages cite in their source lines; defined plainly as an American website),
`pubmed`, `clinicaltrials-gov`. Each definition names the US.

## 3. Definitions that now answer for the Netherlands or the EU (verified)

Facts taken from the fact-checked research of 27 October 2026 or fetched today (27 October 2026).

| Id | What the Dutch definition says | Source and wording relied on |
|---|---|---|
| `marketing-authorisation` | In NL the CBG grants it, or the EU for all member states | `research/nl/nl-law.md` fact 4: Gnw art. 40(1) "zonder handelsvergunning van de Europese Unie, verleend krachtens verordening 726/2004 ..., of van het College" |
| `medicines-regulator` | Examples CBG (NL), EMA (EU), FDA (US) | same; STYLE-NL §2.4 "medicijnautoriteit" |
| `prescription-only-medicine` | The pharmacy may not hand it over without a prescription, except in an emergency (UR-geneesmiddel) | `nl-law.md` facts 3 and 9: art. 1(1)(s) "UR-geneesmiddel: een geneesmiddel dat uitsluitend op recept ter hand mag worden gesteld"; art. 61(9) "verboden een UR-geneesmiddel ter hand te stellen zonder dat een recept is overgelegd" (emergency exception) |
| `off-label` | In NL only where the profession has a guideline or protocol; while one is being written, doctor and pharmacist consult first | `nl-care.md` fact 13: Gnw art. 68(1) "alleen geoorloofd wanneer daarover binnen de beroepsgroep protocollen of standaarden zijn ontwikkeld ... overleg tussen de behandelend arts en apotheker noodzakelijk" |
| `named-patient-route` (term "artsenverklaring") | Usually one patient; the doctor declares that authorised medicines do not fit for medical reasons; a pharmacy or wholesaler asks the IGJ for an "ontheffing"; you cannot apply yourself | `nl-care.md` facts 21–23, 26: "Sinds 9 september 2025 gebruikt de ... IGJ de term 'ontheffing'"; "dat de patiënt om medisch inhoudelijke redenen niet kan worden behandeld met de in Nederland toegelaten geneesmiddelen"; only an NL manufacturer, wholesaler, (hospital) pharmacist or dispensing GP applies; usually per patient |
| `informed-consent` | In NL the law (WGBO) requires your consent for a treatment | `nl-care.md` fact 51: WGBO art. 7:448 (information), 7:450 (consent required) |
| `medical-file` | In NL you can usually see it and get a copy (WGBO) | `nl-care.md` fact 51: arts. 7:454–456 (file, access, copy), 7:457 (secrecy) |
| `second-opinion` | The KNMG says a doctor may refuse only for weighty reasons | `nl-care.md` fact 52: KNMG "Je kunt dit alleen weigeren als je daar zwaarwegende redenen voor hebt." |
| `legal-supply-chain` | Every business on the way needs a licence; in NL the IGJ supervises | `nl-law.md` fact 7 (Gnw art. 18 licence); STYLE-NL §8 (cbg-meb.nl: the IGJ "houdt toezicht") |
| `conditional-marketing-authorisation` | In the EU valid 1 year, renewable every year; the company must still deliver the missing studies | EMA, "Conditional marketing authorisation" (ema.europa.eu/en/human-regulatory-overview/marketing-authorisation/conditional-marketing-authorisation), curl 200 today: "Conditional marketing authorisations are valid for one year and can be renewed annually."; "on less comprehensive clinical data than normally required" |
| `exceptional-circumstances-authorisation` | Full benefits and risks cannot be studied (for example a very rare disease); in the EU the EMA reviews new data every year | EMA glossary "Exceptional circumstances" (ema.europa.eu/en/glossary-terms/exceptional-circumstances), curl 200 today: "unable to provide comprehensive data on the efficacy and safety under normal conditions of use, because the condition to be treated is rare ..."; EMA Scenesse EPAR page (ema.europa.eu/en/medicines/human/EPAR/scenesse), curl 200 today: "Every year, the European Medicines Agency will review any new information that becomes available" |
| `orphan-medicine` (term "weesgeneesmiddel") | The EU gives incentives since 2000; the US since 1983 (US from English) | EMA "Orphan designation: overview", curl 200 today: "The EU orphan regulation has played a central role ... since it entered into force in 2000"; "The EU offers incentives to encourage pharmaceutical companies to research and develop medicines for rare diseases". Dutch word: Regulation 141/2000 in Dutch through the CELLAR resolver (publications.europa.eu/resource/celex/32000R0141), today: "Verordening (EG) nr. 141/2000 ... inzake weesgeneesmiddelen" |
| `emideltide` | Not an authorised medicine in NL or the EU (English named the US, UK, Canada, Australia) | EMA "Medicines output: medicines report" (ema.europa.eu/en/documents/report/medicines-output-medicines-report_en.xlsx), downloaded today, sheet dated "27/10/2026 - 18:05": no "emideltide", "DSIP" or "delta sleep" (control: "semaglutide" present). CBG Geneesmiddeleninformatiebank, the search URL of `cbg-gib-search-status-2026-10-27`, human medicines, today: "Geen producten gevonden die voldoen aan uw zoekopdracht: emideltide" and "... DSIP" (control "semaglutide": "33 producten gevonden") |
| `world-anti-doping-code` (term "Wereld Anti-Doping Code") | Dutch name | `nl-law.md` fact 44: Wuab art. 4 "De Dopingautoriteit is de nationale antidopingorganisatie, bedoeld in de Wereld Anti-Doping Code" |
| `wada` | "het Wereld Anti-Doping Agentschap" | STYLE-NL §2.7 (the Dopingautoriteit's translation) |
| `plenary-vote` | Example: the European Parliament | no new fact (the English generalised it; the EP example names a parliament the EU pages discuss) |

Not given a Dutch or EU fact (kept as the English generalisation, no new claim): `mabel` ("sommige
medicijnautoriteiten"; the 23 October text said European guidance, not re-checked), `zeranol` and `zilpaterol`
("sommige landen ... andere landen niet"; the EU ban of the 23 October text was not re-checked), `clenbuterol`,
`self-doping` (whether self-doping is a crime in NL is not in the research), `folate` (English "vitamin B9" left out:
Dutch sources often say B11; not checked, so the definition says only "een B-vitamine").

## 4. Aliases left out on purpose (whole-word, case-insensitive matching)

- Dutch everyday words or short codes with another meaning: `PK` (pk = paardenkracht), `NEP` (nep = fake; STYLE-NL
  uses "nep" for falsified products), `AAS` (aas), `PKA` (matches "pKa"), `KOL` (kol), `WHO` (English "who" in quoted
  English), `BI` alone (bi), `RIA`, "zweren" (also the verb), "verstopt" (= hidden), "overgang", "gewenning",
  "hulpstof" (any excipient), "gifstof" (any poison), "clearance" (also 510(k) clearance), "uitzonderlijke
  omstandigheden" alone, "dossier" alone, "sponsor" alone, "beoordeling", "voorloper" (forerunner, as in law
  history), "selectief" alone.
- `annex` has the term "bijlage (bij een wet)" (does not match text) and only long aliases ("bijlage bij de
  verordening" …), because "bijlage" alone is an everyday word; same pattern as English `drug-tolerance`, whose
  Dutch term is "tolerantie (voor een medicijn)".

**Kept, with a risk for page writers** (the term itself is the fixed word): "potentie" (`potency`; on the PT-141
page do not use "potentie" for sexual potency, or the tooltip shows the pharmacology meaning), "spin" (also
"spider"; no other sense is expected on this site), "onthouding" (STYLE-NL's word for the abstention in the PCAC
vote; also "abstinence"), "verstopping" (Thuisarts' word for constipation; also "blockage"), "condensatie",
"plasma". If the lead prefers, set `"autolink": false` on any of these and use `<Term id>` on the pages.

Cross-file check today: no id and no lowercased term or alias appears twice across all 17 files then in
`src/i18n/nl/glossary/` (script in the scratchpad; re-run after the other glossary groups finish).

## 5. Terms not in STYLE-NL (proposed rows for the style owner; I did not edit STYLE-NL)

| English | Dutch term used | Aliases that cover the likely variants |
|---|---|---|
| Kefauver-Harris Amendments | Kefauver-Harris Amendments (US law name) | Kefauver-Harris-wet, Kefauver-Harris-amendementen |
| substantial evidence · adequate and well-controlled study | kept in English as US terms of art | substantieel bewijs; goed opgezette studie(s) met een controlegroep |
| accelerated approval (US) | accelerated approval | versnelde goedkeuring |
| confirmatory trial | bevestigende studie | bevestigend onderzoek |
| orphan medicine | weesgeneesmiddel | weesmedicijn |
| authorisation under exceptional circumstances | handelsvergunning onder uitzonderlijke omstandigheden | goedgekeurd onder uitzonderlijke omstandigheden |
| prescription-only medicine | alleen op recept (term), as STYLE-NL §2.4 | UR-geneesmiddel, receptplichtig |
| research chemical / research use only | alleen voor onderzoek (term), as STYLE-NL §2.4 | research use only, niet voor menselijk gebruik |
| named-patient route | artsenverklaring | |
| statistical power | statistische power | onderscheidend vermogen |
| case-control study | patiënt-controleonderzoek | case-controlstudie |
| allocation concealment | verborgen toewijzing | allocation concealment |
| risk of bias | risico op vertekening | risk of bias |
| predatory journal | roofjournal | roofuitgever, predatory journal, malafide tijdschrift |
| citation laundering (the site's own name) | citatiewitwassen | witwassen van citaties |
| pivotal trial | registratiestudie | pivotale studie |
| comparator | vergelijkingsbehandeling | comparator |
| saline | fysiologisch zout | fysiologische zoutoplossing |
| monoclonal antibody | monoklonale antistof (follows STYLE-NL "antistoffen") | monoklonaal antilichaam |
| solid-phase peptide synthesis | vaste-fasesynthese | SPPS |
| permeation enhancer | opnameversterker | absorptieversterker |
| first-pass metabolism | first-passeffect | first-pass-effect |
| G-protein-coupled receptor · second messenger | G-eiwitgekoppelde receptor · tweede boodschapper | GPCR; second messenger |
| intrinsic efficacy · potency · efficacy | intrinsieke activiteit · potentie · werkzaamheid | |
| constipation · menopause | verstopping (obstipatie) · menopauze ("hoort bij de overgang") | Thuisarts' words |
| precursor | voorloperstof | precursor |
| annex (of a law) | bijlage (bij een wet) | see §4 |

## 6. Not in scope, for the lead

- **Dutch-only entries of 23 October** in these six files' groups were not recreated, because the assignment is
  "the same ids" and another assignment may own the Dutch-only ids (a duplicate id fails the validator). From
  `research/for-nl-site/snapshot-2026-10-23/i18n/en/glossary/`: guides: `ema`, `cbg`, `igj`, `lareb`,
  `zorginstituut`, `dopingautoriteit`, `wgbo`, `knmg`, `wet-big`, `reserved-procedure`, `nhg`; final-qa: `rivm`,
  `thuisarts`, `flemish-decree` (BE notes only); history: `accelerated-assessment`, `prime-scheme`,
  `directive-65-65`, `wet-op-de-geneesmiddelenvoorziening`. My definitions name the CBG, the IGJ, the EMA, the WGBO
  and the KNMG, so those entries should exist somewhere in `src/i18n/nl/glossary/`. Their facts must be re-checked
  before reuse (written 20–23 October).
- `clinicaltrials-gov` had `see_also: ["ctis"]` on 23 October; kept as English (`pre-registration` only). If a Dutch
  `ctis` entry is added, consider linking it.
- Several `see_also` ids point into other groups that may drop them for Dutch (`mhra`, `health-canada`, `tga`,
  `special-medicinal-product`, `special-access-program`, `special-access-scheme`, `expanded-access`). The glossary
  page filters missing ids (`GlossaryIndex.astro`), so nothing breaks.
- No citations: glossary entries carry none, so no citation was dropped.

## 7. Validation (27 October 2026)

- `npx tsx scripts/validate-content.ts --only glossary` and `--only nl/glossary`: 0 errors, 0 warnings.
- `JSON.parse` of all six files: OK; UTF-8, LF; no straight apostrophes (’ only); every definition ≤ 400
  characters; ids, categories, see_also and autolink identical to English except the dropped `nhs`.
- Grep of my six files for commerce, seller, claim and dose words (STYLE-NL §5.6, §7): none, except "veilig" in
  `kefauver-harris-amendments` ("niet alleen dat het veilig is": the 1962 legal requirement, not a claim about a
  compound).

## Check (independent, 27 October 2026)

Adversarial check of all 229 Dutch entries in the six files against the English (`src/i18n/en/glossary/`), the brief,
STYLE-NL §1–§6 and the fact-checked research (`research/nl/nl-law.md`, `nl-care.md`). Every entry was read side by side
with its English entry (term, aliases, definition, category, see_also, autolink). Fixed in place; nothing outside these six
files and this note was edited; nothing in `src/i18n/en/` changed; no build, no commit.

### Verified today (fetched 27 October 2026, wording relied on)

| What | Source | Wording |
|---|---|---|
| prescription-only: emergency exception | wetten.overheid.nl, Gnw BWBR0021505, "Geldend van 09-09-2025 t/m heden", art. 61(9) | "Hij is evenwel bevoegd in spoedgevallen een UR-geneesmiddel ter hand te stellen zonder dat een recept wordt overgelegd, indien hij zich voldoende zekerheid heeft verschaft dat gevaar voor misbruik niet kan ontstaan." |
| off-label | same, art. 68(1) | "alleen geoorloofd wanneer daarover binnen de beroepsgroep protocollen of standaarden zijn ontwikkeld. Als de protocollen en standaarden nog in ontwikkeling zijn, is overleg tussen de behandelend arts en apotheker noodzakelijk." |
| marketing authorisation: EU or CBG | same, art. 40(1) | "zonder handelsvergunning van de Europese Unie, verleend krachtens verordening 726/2004 ... of van het College" |
| informed consent and its emergency exception | wetten.overheid.nl, BW Boek 7 (BWBR0005290), "Geldend van 08-10-2026 t/m heden", art. 7:450(1), 7:466(1) | "Voor verrichtingen ter uitvoering van een behandelingsovereenkomst is de toestemming van de patiënt vereist."; 7:466(1): where only a representative's consent is required, the act may go ahead without it "indien de tijd voor het vragen van die toestemming ontbreekt aangezien onverwijlde uitvoering van de verrichting kennelijk nodig is teneinde ernstig nadeel voor de patiënt te voorkomen" |
| medical file: access and copy | same, art. 7:456 | "De hulpverlener verstrekt aan de patiënt desgevraagd inzage in en afschrift van de gegevens uit het dossier." (withheld only to protect another person's privacy, so "meestal" stays) |
| conditional MA: 1 year, renewable | ema.europa.eu, "Conditional marketing authorisation" | "Conditional marketing authorisations are valid for one year and can be renewed annually."; "on less comprehensive clinical data than normally required" |
| exceptional circumstances: yearly reassessment | Verordening (EG) nr. 726/2004 in Dutch via CELLAR (publications.europa.eu/resource/celex/32004R0726, OJ L 136 text), art. 14(8); EMA glossary "Exceptional circumstances"; EMA Scenesse EPAR page | "De instandhouding van de vergunning is afhankelijk van een jaarlijkse herbeoordeling van deze voorwaarden."; "unable to provide comprehensive data on the efficacy and safety under normal conditions of use, because the condition to be treated is rare"; "Every year, the European Medicines Agency will review any new information" |
| orphan medicine: EU since 2000 | ema.europa.eu, "Orphan designation: overview" | "since it entered into force in 2000"; "The EU offers incentives to encourage pharmaceutical companies to research and develop medicines for rare diseases" |
| emideltide: not authorised in NL or EU | CBG Geneesmiddeleninformatiebank, the search URL of `cbg-gib-search-status-2026-10-27` with "emideltide" and "DSIP"; EMA "Medicines output: medicines report" (xlsx, sheet "27/10/2026 - 18:05") | "Geen producten gevonden die voldoen aan uw zoekopdracht" for both (control "semaglutide": "33 producten gevonden"); no "emideltide", "DSIP" or "delta sleep" in the EMA report (control "semaglutide" present) |
| artsenverklaring, second opinion, legal chain, Wereld Anti-Doping Code | `research/nl/nl-care.md` facts 21–26, 51, 52; `nl-law.md` facts 7, 18, 44 (fact-checked) | as quoted there; consistent with the definitions after the changes below |

No fact in these files is one the research marks UNRESOLVED. No Belgian fact appears.

### What I changed, and why

**Country-dependent definitions**

- `informed-consent`: the English qualifier "Apart from emergencies" was lost (the Dutch said consent is always needed).
  Now: consent is needed for a treatment (WGBO); "Een uitzondering is een spoedgeval waarin je zelf niet kunt beslissen
  en er geen tijd is om iemand anders te vragen" (BW 7:466(1), read today). Worded as "an exception", not "the only
  exception", because 7:466(2) (presumed consent for minor acts) also exists.
- `named-patient-route`: "dat de goedgekeurde medicijnen om medische redenen niet passen" softened the IGJ's test ("dat de
  patiënt om medisch inhoudelijke redenen niet kan worden behandeld met de in Nederland toegelaten geneesmiddelen"). Now
  "dat je om medische redenen niet kunt worden behandeld met medicijnen die hier wel zijn goedgekeurd". "Een apotheek of
  groothandel" → "Een apotheek, groothandel of fabrikant" (nl-care facts 22–23; a dispensing GP can also apply, left out
  for B1). The repeated "hier ... hier" is gone ("zonder handelsvergunning in Nederland").
- `off-label`: art. 68 is about prescribing, so "mag een arts dat" → "mag een arts het ... alleen zo voorschrijven";
  "overleggen arts en apotheker eerst" → "Dan moeten arts en apotheker eerst overleggen" (the law: "noodzakelijk"), in the
  B1 question + "Dan" pattern (STYLE-NL §1 rule 5). The English "or in another way" (route) was lost: now "groep of
  dosis, of op een andere manier".
- `marketing-authorisation`: the English "only after checking" was lost: "en pas na een beoordeling".
- `exceptional-circumstances-authorisation`: "het EMA bekijkt elk jaar de nieuwe gegevens" rested on one EPAR summary
  page; now "beoordeelt het EMA zo’n vergunning elk jaar opnieuw" (Reg. 726/2004 art. 14(8): "jaarlijkse
  herbeoordeling"). The English "Not every country has this kind of licence" is back ("Niet elk land kent deze vorm").
- `legal-supply-chain`: IGJ written out on first mention (STYLE-NL §2.7), semicolon split.
- `research-chemical`: the English says who puts the text there ("A label sellers put on"): "Een tekst die verkopers op
  het etiket zetten" ("verkoper" is the only allowed role word, STYLE-NL §5.6).
- `self-doping`: "straffen dat als misdrijf" used a technical class of Dutch criminal law ("misdrijf" against
  "overtreding") that the English does not claim; now "is dat ook een strafbaar feit". No Dutch fact added (whether
  self-doping is punishable in NL is not in the research).
- `world-anti-doping-code`: "straffen" → "sancties, zoals een schorsing" (the Dopingautoriteit's words, nl-law fact 46).
- `emideltide`: "first described" → "voor het eerst beschreven".

**Lost or changed meaning, wording (not country-dependent)**

- `clinical-trial`: "Grote studies vergelijken met ..." had no object → "vergelijken de behandeling met".
- `kefauver-harris-amendments`: "well-controlled studies" had lost "controlled" → "goed opgezette studies met een
  controlegroep" (same words as `adequate-and-well-controlled-study`).
- `hierarchy-of-evidence`: English "near the top" → "bovenin" (was "bovenaan", the very top).
- `allocation-concealment`: "niet bewust in één groep stoppen" can read as "not consciously"; now "niet in één groep
  sturen".
- `evaluator-blinded`: "weten het soms wel" → "mogen het wel weten" (English "may know").
- `hcg`: "helpt bij vruchtbaarheidsbehandelingen" was a small benefit claim; English "is used in" → "wordt het gebruikt
  bij".
- `vial`: a needle goes through the rubber stopper ("stop"), not the cap ("dop", STYLE-NL §2.6), and "Je prikt een naald"
  read as an instruction → "afgesloten met een rubberen stop. Om de vloeistof op te zuigen, gaat er een naald door de
  stop."
- `nausea`: "Je ziek voelen" means feeling ill in Dutch → "Een naar gevoel in je maag, alsof je moet overgeven."
- `racemisation`: defined a process as a thing ("Een aminozuur dat ... omklapt") → "Het omklappen van een aminozuur ...".
- `inverse-agonist`: "zachter zet" (a volume knob) → "minder actief maakt".
- `clearance`: "volume of plasma" had become "hoeveelheid", and "van het medicijn wordt ontdaan" was stiff → "het volume
  plasma (het vloeibare deel van het bloed) dat het lichaam per tijdseenheid ... helemaal vrijmaakt van het medicijn".
- `plasma`: "Het vocht van het bloed" → "Het vloeibare deel van het bloed" (English "liquid part"; same words as
  clearance).
- `small-molecule`: term is now "kleinmoleculair geneesmiddel" (English term "small-molecule drug"; the definition
  defines a medicine); "klein molecuul" and "kleine moleculen" stay as aliases (same coverage as English).
- `cyclic-peptide`: "dus blijft vaak langer heel" had no subject → "Daardoor blijft het peptide vaak langer heel."
- `animal-model`: "Een dier bij wie onderzoekers een aandoening maken" → "waarbij ... veroorzaken".
- `conflict-of-interest`: a definition again ("Een situatie waarin ...", as English).
- `thalidomide`: "morning sickness" → "zwangerschapsmisselijkheid"; sentence split.
- `anabolic-steroids`: "Door mensen gemaakte vormen" (calque of "man-made") → "Kunstmatige vormen".
- `corticosteroid`: "een steroïd" → "een steroïde" (the Dutch noun); semicolon split.
- `fasting-glucose`: "Meestal meet je die" (implies self-testing) → "Meestal wordt die ’s ochtends gemeten".
- `toxicity-study`: "Zulke tests komen voordat" → "gebeuren voordat". `saline`: "Studies spuiten het" → "In studies
  spuiten onderzoekers het ... (placebo)". `dihexa`: "getest" → "onderzocht" (English "studied").
- `regression-to-the-mean`: "op het ergst" → "op hun ergst" (idiom). `citation-laundering`: "gaat een gok lezen als een
  feit" (calque of "reads like") → "Uiteindelijk lijkt een gok dan een feit." `drug-lag`: "of het ontbreken ervan daar" →
  "Soms komt het er helemaal niet." `harm-reduction`: "Mensen die een middel toch gebruiken helpen ..." could be read as
  "people who use it help" → "Hulp aan mensen die een middel toch gebruiken, zodat ze er minder schade van hebben, zonder
  over hen te oordelen." `control-group`: "wat er toch al was gebeurd" → "wat er ook zonder de behandeling was gebeurd".
  `randomisation`: plain word order, semicolon split. `exendin-4`: "eerst werd gevonden" ("at first") → "voor het eerst
  werd gevonden". `conditional-marketing-authorisation`: "op minder volledige gegevens" → "op basis van".
- **Numbers (STYLE-NL §3, digits from 2 up):** `peptide-bond`, `condensation-reaction`, `quaternary-structure` (reworded
  so it does not open with a digit), `disulfide-bond`, `lh-and-fsh` (reworded likewise), `adme`, `steady-state` ("4 tot 5
  halfwaardetijden"), `confidence-interval`, `relative-risk`, `absolute-risk`, `evidence-profile`. "regel van vijf" stays
  (a name; "regel van 5" is an alias).
- **B1 semicolons split** where two separate ideas were joined: `second-messenger`, `oxytocin`, `accelerated-approval`,
  `user-fee`, `clenbuterol`, `second-opinion`, `exendin-4`, `conditional-marketing-authorisation`. Short two-clause
  semicolons stay in amino-acid, d-amino-acid, intrinsic-efficacy, cell-membrane, p-value, grade-approach, hormone, hcg,
  somatropin, zeranol and orphan-medicine: each keeps the definition within STYLE-NL §6's "one or two sentences".

**Aliases**

- `key-opinion-leader`: removed "opinieleider", "opinieleiders": in Dutch an opinion leader in general (media, politics),
  not an expert paid by companies; STYLE-NL §6 allows a synonym only if it means exactly the same.
- `fasting-glucose`: removed "nuchter glucose" (not a Dutch form; "nuchtere glucose" is the term).
- `small-molecule`: added "kleinmoleculaire geneesmiddelen" (plural of the new term).
- Re-ran the cross-file check over all 25 files now in `src/i18n/nl/glossary/` (731 ids): no duplicate id, no term or
  alias in two entries, no straight apostrophe.

### Checked and left as is

- Ids, categories, see_also and autolink flags equal English for all 229 entries; the only dropped id is `nhs` (the UK's
  own health service: correct under the brief). No commerce word in any term or alias; no dose, no seller help; "je"
  throughout, no "u"; all definitions ≤ 400 characters (longest now 349, `off-label`).
- US terms kept as world context (fda, docket, boxed-warning, accelerated-approval, user-fee, kefauver-harris-amendments,
  substantial-evidence, adequate-and-well-controlled-study, cdc, medlineplus): each says "Amerikaans" or names the FDA.
- `mabel`, `zeranol`, `zilpaterol`, `clenbuterol`, `folate` keep the English generalisation: correct, since no checked
  Dutch or EU fact replaces it.
- `prescription-only-medicine`, `medical-file`, `second-opinion`, `wada`, the `world-anti-doping-code` term,
  `orphan-medicine` and `conditional-marketing-authorisation` facts match the sources above.
- Risky but kept (the term is STYLE-NL's fixed word): `potentie`/`potent` (`potency`; PT-141 and melanotan-II page
  writers: do not use "potentie" or "potent" for sexual function, or the tooltip shows the pharmacology meaning; if the
  pages need the other sense, set `autolink: false` and use `<Term id="potency">`), `onthouding`, `spin`, `verstopping`,
  `zweer` (also a verb form, "ik zweer"), `alleen voor onderzoek` (matches the label phrase; `investigational` is written
  "alleen in klinisch onderzoek", STYLE-NL §2.4, so it does not collide), `nepmiddel` for placebo (STYLE-NL §2.3's B1
  word; falsified products use "nepmedicijn", `tirzepatide.json`). `informed-consent` keeps the alias "toestemming": it
  has `autolink: false`, so the everyday word never links.

### Validation

- `npx tsx scripts/validate-content.ts --only glossary` and `--only nl/glossary`: 0 errors, 0 warnings.
- `npx tsx scripts/check-locale-residue.ts`: 0 hits.
- All six files: valid JSON, UTF-8, LF.
