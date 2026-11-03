# Notes: group retatrutide (Dutch site, 27 October 2026)

File written: `src/content/compounds/nl/retatrutide.mdx`. No new source file (`src/data/sources/nl-retatrutide.yaml`
was not needed: every source the page cites was already registered) and no new glossary file
(`src/i18n/nl/glossary/nl-retatrutide.json` was not needed: every technical term on the page has a Dutch entry).
`src/i18n/nl/glossary/retatrutide.json` was checked against the page and left unchanged (see "Glossary").

Validator: `npx tsx scripts/validate-content.ts --only compounds/nl/retatrutide` → 0 errors, 0 warnings.
Residue: `npx tsx scripts/check-locale-residue.ts --only compounds/nl/retatrutide --details` → 0 error, 0 frame, 0 warn.
With the markers removed, the scan finds 8 warn hits (FDA, MHRA, TGA, "in de VS", "in Australië"); all eight are
deliberate evidence or world-context lines and carry `{/* residue-ok: … */}` (or `# residue-ok` in the frontmatter).

## Page: compounds/retatrutide

**Method:** `translated` (brief: compound regulatory and harm-reduction sections are adapted, but part of a
translated page). Same frontmatter fields, same components, same `<Section>` order, same figures (Compare ×2,
OrganCards, Diagram, Mechanism, StudyTable, KeyNumber ×7, TimeStrip, RegulatoryTable, ProductCheck, stop Callout,
WarningSigns), same mechanism kinds and levels, all 23 study ids, same depth and the same folds (the US fold became
"Nederland", the UK/Canada/Australia fold became "De Europese Unie").

### What came back from the saved material (snapshot 23 October, MANIFEST-compounds-a.md)

All re-checked against `research/nl/` (eu-status, nl-law, nl-care, nl-help, status/retatrutide.yaml) before reuse.

- Legal callout: Dutch law forbids selling, supplying, stocking or importing a medicine without a
  handelsvergunning; the narrow exceptions (research, approved compassionate-use programmes, an IGJ ontheffing).
  Now cited to `nl-gmw-art-40-handelsvergunning` and `eu-directive-2001-83` (art. 6(1), re-read today).
- Status sentence: not on the EMA list of applications under evaluation (5 October 2026); not in the EMA data.
- Molecule: "its EU label says the tail binds albumin": now the Dutch SmPC of Mounjaro (`ema-pi-mounjaro-nl`, 5.2:
  "een C20-vetzuurgroep, die albuminebinding mogelijk maakt en de halfwaardetijd verlengt", read today).
- Liver-fat substudy: the liver-outcome trial "including in the Netherlands": now with today's status (started in the
  Netherlands on 22 September 2026; Dutch recruitment UNRESOLVED, see below).
- The fold "The European Union and the Netherlands": CBG database, art. 40 and its exceptions, the CBG list of
  compassionate-use programmes, no IGJ exemption known, Dutch trial sites. Back as the folds "Nederland" and
  "De Europese Unie", with the CTIS facts of 27 October.
- Harm reduction: "In the EU, retatrutide is in practice legal only inside a trial; look for trials in the registers":
  now Dutch (Onderzoekmetmensen.nl, the CCMO's participant pages).
- Not reused: the saved Belgian and German folds (Belgium is notes only; Germany is not on the Dutch site), the saved
  EU/NL regulatory notes (replaced by the status file's suggested notes, which start with the row's word
  "investigational", eu-status §4 conflict 8).

### What was rewritten for the Netherlands

- **TL;DR:** "When might it be approved? Lilly plans to ask the US FDA in early 2027" → "Komt er een goedkeuring?
  Onbekend. Op 5 oktober 2026 lag er geen aanvraag bij het EMA." (the US plan rests only on a company-named source,
  see dropped citations). "Can I get it legally?" → "In Nederland vrijwel alleen in een studie …".
- **What it is, Compare:** the GMP row, the "checked before anyone takes it" row and the "legal to supply" row now
  rest on EU and Dutch law (Regulation 536/2014 art. 4, 61, 63(1); WMO art. 2; Gnw art. 40) instead of US, UK, Canadian
  and Australian law. Status sentence: NL and EU (CBG Geneesmiddeleninformatiebank, EMA data, EMA list of 5 October
  2026), plus one world-context line (the TGA: no comparable regulator has approved it).
- **"Why so many people have heard of it":** first the European warnings (EMA/HMA September 2025, IGJ and CBG
  September 2025, the Douane August 2026, the FAGG 19 October 2026, which names retatrutide), then one marked
  world-context paragraph (MHRA factory and 12.000 fake pens, the TGA vial with semaglutide, the FDA warning).
- **Regulatory:** Lead and Compare answer for the Netherlands and the EU (two rows, same three questions). The US fold
  became "Nederland" (law, own use and own import, the two Dutch trials, supervision); the UK/CA/AU fold became
  "De Europese Unie" (no EU authorisation; the central route for diabetes medicines, Regulation 726/2004 art. 3 and
  Annex point 3, read today; the nine CTIS trials, three not ended). Sport: WADA plus the Dopingautoriteit's Dutch
  translation of S0 and the Dopingautoriteit as the place to ask; the Sport Integrity Australia line stays as marked
  world context (it is the only anti-doping body page on retatrutide, and it reads "not listed").
- **Risks:** science unchanged. Where English used the US label as the only source, the Dutch SmPC of Mounjaro was
  added (pancreatitis class risk, hypoglycaemia with insulin or sulfonylureumderivaten, rat C-cell tumours "relevantie
  voor de mens niet bekend", reproductive toxicity in animals, dysesthesie). The US label stays as evidence.
- **Contraception (interactions fold):** English said "UK and US regulators advise a non-pill method or condoms for
  four weeks". For a Dutch reader the EU label is the frame: the Mounjaro SmPC (4.5) calls the pill effect "niet als
  klinisch relevant beschouwd"; the US label's advice is kept as evidence; the pending EU variation EMA/VR/0000340438
  (CHMP agenda 12–15 October 2026, read today) is written as unknown outcome.
- **Stop callout and stop strip:** Dutch help levels (STYLE-NL §5.1, brief item 2): 112 for the heart and allergy
  signs and ketoacidosis; "Bel direct je huisarts. Is de praktijk dicht? Bel dan de huisartsenpost." for liver signs
  and dehydration; pancreatitis: the urgent wording plus "Is het ernstig? Bel 112." (see medical questions). Sources:
  Thuisarts pages instead of NHS pages.
- **Harm reduction:** the Dutch legal routes with the brief's fixed anchors; the two Dutch trials; no Dutch CUP
  (CBG list, re-read today: no retatrutide or LY3437943); the artsenverklaring as an unknown for a substance approved
  nowhere; the expanded-access record as world context ("noemt geen locaties"); reporting to Lareb (also for products
  that did not come from a pharmacy), one Belgian line (FAGG), and `<JurisdictionCard code="NL" />`; the IGJ warning of
  20 October 2026 on stolen insulin pens possibly presented as obesity medication, in place of the UK pen line.
- **Advertising test (brief, "Added after step 1", item 1), changes beyond translation:**
  - evidence section: one added sentence after the key numbers, so that the effect is not named without its risks
    ("Veel deelnemers kregen bijwerkingen, vooral diarree en misselijkheid. Tot 12 op de 100 stopten erdoor", cited to
    `bellido-2026-triumph-2`, the page's own risk figures);
  - "For people with severe obesity, that is a real prospect" → "Voor mensen met ernstige obesitas kan dat belangrijk
    zijn. Maar geen medicijnautoriteit heeft de voordelen en de risico's al tegen elkaar afgewogen."; the subheading
    "Where the evidence is genuinely promising" → "Wat het bewijs wel laat zien";
  - "Large weight loss" (mechanism step title) → "Gewichtsverlies"; "Lilly has announced positive results" → the
    company "bracht al eerste cijfers naar buiten" (no "positive");
  - tirzepatide is named with an effect (network meta-analysis), so its Dutch SmPC indication, its most frequent side
    effects and its only contraindication were added in that paragraph (`ema-pi-mounjaro-nl`, 4.1, 4.3, 4.8, read today).

### Dropped citations (page compounds/retatrutide; id, why, what replaced it)

| Cite id | Why it went | Replaced by |
|---|---|---|
| `sec-lilly-2026-q2-results` (4×) | Title names a company (brief, Sources; CONTENT-GUIDE §11; MANIFEST-guides-en.md row 140 says the Dutch site may reuse the fact only under the same rule). The US BLA plan is also US framing. | TL;DR and status: the EU answer (`ema-2026-10-under-evaluation`); the BLA plan is left out |
| `sec-lilly-2025-q4-results` | Title names a company | `ctgov-nct05882045`, `ctgov-nct05931367` (completed) and `kaczynski-2026-retatrutide-review` (company-reported TRIUMPH-4 figures); "positive results" left out |
| `ecfr-21-210-2`, `uk-si-2004-1031-reg-43`, `ca-fdr-c05-010` | US/UK/CA law as the frame (GMP for trial medicines) | `eu-regulation-536-2014` (art. 61, 63(1), read today) |
| `ecfr-21-312-20`, `ecfr-21-56-103`, `uk-si-2004-1031-reg-12`, `ca-fdr-c05-clinical-trials`, `au-tg-regs-sch-5a-item-3-clinical-trials` | US/UK/CA/AU trial authorisation as the frame | `eu-regulation-536-2014` (art. 4), `nl-wmo-art-2-6-7` |
| `usc-21-355`, `uk-hmr-2012-reg-46`, `ca-food-and-drug-regulations`, `au-tg-act-s19b-19d-offences` | Their countries' sale bans | `nl-gmw-art-40-handelsvergunning`, `eu-directive-2001-83` |
| `ca-dpd-extract-search-status-a-2026-10-24`, `uk-mhra-substance-index-status-a-2026-10-24`, `ca-hc-sur-search-status-a-2026-10-24`, `au-artg-search-australia-legal-2026-10-24`, `au-tga-pmr-search-retatrutide-2026-10-26`, `au-tga-under-evaluation-search-retatrutide-2026-10-26` | Status searches of US/UK/CA/AU | `cbg-gib-search-status-2026-10-27`, `ema-medicines-json`, `ema-2026-10-under-evaluation`, `eu-regulation-726-2004` |
| `nice-id6644-retatrutide` | UK funding body (residue error pattern) | – (no Dutch equivalent: nothing is under assessment) |
| `ca-hc-2026-04-think-twice-peptides`, `ca-hc-recalls-database`, `ca-cbsa-d19-9-1`, `ca-fda-s27-2-removal-destruction`, `ca-hc-ctsp-retatrutide-2026-10-24`, `ca-ctgov-retatrutide-ca-au-2026-10-24` | Canada fold and Canadian/Australian trial counts | The "Nederland" fold (`tk-2026-ah-249-antwoord-afslankmedicatie`, `douane-invoer-geneesmiddelen-2026`, `ctgov-nl-peptide-search-2026-10-27`, `omon-nl-omon60031`, `omon-nl-omon61112`, `ctis-2025-522674-36-00`) |
| `au-poisons-standard-2026-10`, `au-tga-advertising-glp1-prohibited`, `au-tg-amendment-2024-measures-2-glp1`, `au-tga-2026-04-peptide-responsibilities`, `au-tga-2026-06-cmo-peptide-statement`, `au-tga-2026-08-peptide-seizure` | Australia fold | The "Nederland" and "De Europese Unie" folds |
| `fda-pcac-2026-07-meeting` | US compounding framing ("not among the seven peptides"); naming the PCAC would require the full five-point framing for nothing Dutch readers need | – |
| `fda-personal-importation`, `fda-rpm-ch9-personal-importations`, `uk-hmr-2012-reg-17`, `mhra-foi-22-431-personal-import-seizures` | US/UK personal import | `nl-gmw-art-40-handelsvergunning`, `nl-rbdha-2019-4817-postzending-eigen-gebruik`, `douane-invoer-geneesmiddelen-2026`, `tk-2026-ah-249-antwoord-afslankmedicatie` |
| `mhra-2026-05-largest-seizure` | UK enforcement detail (UK fold) | – (the two MHRA seizures that name retatrutide stay as marked world context) |
| `mhra-2026-07-no-summer-shortcut` | UK public warning ("online hype") as the reader's frame | `ema-hma-2025-09-illegal-glp1`, `igj-2025-illegal-online-medicines`, `douane-2026-08-illegale-online-handel-medicijnen`, `fagg-2026-glp1-misuse-warning` |
| `ctgov-us-uk-peptide-search-2026-10-23` | US/UK trial-site counts | `ctgov-nl-peptide-search-2026-10-27`, `ctis-2025-522674-36-00` |
| `ukad-2027-list-summary` | UK Anti-Doping as the reader's anti-doping body | `wada-2027-list-explanatory-note` (already cited) and `dopingautoriteit-vertaling-dopinglijst-2026`; where to ask: `dopingautoriteit-geneesmiddelen-controleren` |
| `nhs-acute-pancreatitis`, `nhs-heart-palpitations`, `nhs-anaphylaxis` | UK help pages as the action level (stop strip, stop callout) | `thuisarts-buikpijn`, `thuisarts-pijn-op-borst`, `thuisarts-dikke-ogen-lippen` |
| `nhs-jaundice` | UK help page | `thuisarts-spoed-wie-bellen` (the Dutch levels); no Thuisarts jaundice page is registered |
| `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `au-tga-report-adverse-event` | Other countries' reporting (residue error pattern) | `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `cbg-bijwerking-melden`; Belgium `fagg-melden-bijwerking-patient`; `<JurisdictionCard code="NL" />` |
| `mhra-2026-10-counterfeit-pens` (reporting sentence only) | "the UK regulator asks people to report to the Yellow Card scheme" | Lareb (above); the id stays elsewhere on the page |
| `mhra-glp1-what-you-need-to-know` | UK advice on contraception with tirzepatide | `ema-pi-mounjaro-nl` (EU label), `ema-chmp-2026-10-agenda` (pending variation); `fda-label-mounjaro` kept as evidence |

Kept on purpose, marked: `au-tga-2026-09-retatrutide-counterfeit` (product test and "no comparable international
regulator" statement), `mhra-2025-retatrutide-seizure`, `mhra-2026-10-counterfeit-pens` (fake retatrutide pens exist),
`fda-unapproved-glp1-concerns` (once: falsely labelled "for research purposes"), `au-sia-retatrutide` (the only
anti-doping body page on retatrutide), `vic-health-2026-retatrutide-liver`, `piatkowski-…`, `rubin-…` (evidence),
`ctgov-nct07629401` (expanded access, as world context: no locations listed), all FDA labels (evidence). The JAMA fact
"21 FDA warning letters" left with the US fold (the id `rubin-2026-jama-news` stays for its other facts). The links to
`/en/legal/us/`, `/en/legal/ireland-and-new-zealand/` and the English route anchors are gone; every link is a `/nl/`
route from the brief, the route anchors are the brief's, and `/nl/legal/nl/#zelf-invoeren-uit-het-buitenland` is a
heading slug checked in `src/content/pages/nl/legal/nl.mdx` today (`## Zelf invoeren uit het buitenland`).
`/nl/legal/sport-and-doping/` is linked without an anchor (another group's page, still in flux).

Newly cited on this page (all existing ids; regulator and law pages fetched today and confirmed): `eu-regulation-536-2014`
(art. 4, 61, 63(1), via the Publications Office), `eu-directive-2001-83` (art. 6(1), 2025-01-01 consolidation),
`eu-regulation-726-2004` (art. 3(1)–(2), Annex point 3), `ema-pi-mounjaro-nl` (PDF, pdftotext), `ema-chmp-2026-10-agenda`
(PDF), `ema-hma-2025-09-illegal-glp1`, `igj-2025-illegal-online-medicines`, `igj-2026-10-stolen-medicines`,
`douane-2026-08-illegale-online-handel-medicijnen`, `douane-invoer-geneesmiddelen-2026`, `fagg-2026-glp1-misuse-warning`
(the FAGG site serves a script check to curl; read in my own built-in-browser tab: "LET OP! … ‘drievoudige agonisten’,
zoals retatrutide …", "Laatste update op 19/10/2026"), `cbg-compassionate-use-list`, `cbg-compassionate-use-criteria`,
`cbg-bijwerking-melden`, `igj-qa-zonder-handelsvergunning`, `omon-nl-omon60031` ("Werving gestopt"), `omon-nl-omon61112`
("Werving gestart"), `omon-overzicht-ctis-2026`, `ctis-2025-522674-36-00` (CTIS API: Netherlands decision 2026-02-04
"authorized_conditions", START_OF_TRIAL 2026-09-22, no START_OF_RECRUITMENT), `ccmo-achtergrond-meedoen`,
`ccmo-ivo-meedoen`, `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, the four Thuisarts pages,
`dopingautoriteit-geneesmiddelen-controleren`, `tk-2026-ah-249-antwoord-afslankmedicatie` (PDF), `nl-wmo-art-2-6-7`,
`nl-gmw-art-40-handelsvergunning`. Not re-fetched (fact-checked today by the research and only reused):
`cbg-gib-search-status-2026-10-27`, `ema-medicines-json`, `ema-2026-10-under-evaluation`, `ctis-2024-511450-49-00`,
`ctgov-nl-peptide-search-2026-10-27`, `nl-rbdha-2019-4817-postzending-eigen-gebruik`, `nl-regeling-gnw-art-3-17`,
`dopingautoriteit-vertaling-dopinglijst-2026`, `fagg-melden-bijwerking-patient`.

### UNRESOLVED points and how the page handles them

- **SYNERGY-Outcomes, Dutch recruitment** (eu-status and nl-care fact-checks): the page says the trial "is hier op
  22 september 2026 gestart" and "Of er in Nederland al deelnemers in SYNERGY-Outcomes zitten, is niet duidelijk: de
  registers zeggen niet hetzelfde." The NL regulatory note says "gestart" (status file wording), never "werft". No trial
  site is named (some are commercial research centres).
- **TRIUMPH-Outcomes in CTIS** (empty record for 2023-508630-34-00): "Voor TRIUMPH-Outcomes toont CTIS geen openbare
  gegevens. Hoe die studie onder de Europese regels is goedgekeurd, is daarom niet bekend"; ClinicalTrials.gov's 28
  Dutch site entries and OMON's "Werving gestopt" are given as such.
- **Artsenverklaring for a substance authorised nowhere** (nl-care UNRESOLVED; eu-status reviewer question 5): "Of die
  kan werken voor een middel dat nergens is goedgekeurd, weten we niet; we vonden geen geval." The IGJ's restrictive
  wording is quoted; "in de praktijk alleen legaal binnen een studie" is kept as in the saved text.
- **"In voorraad hebben" for a few vials** (nl-law 5.1): "zegt de wet niet duidelijk".
- **Outcome of the Mounjaro oral-contraceptive variation** (eu-status): "de uitkomst was op 27 oktober 2026 niet bekend".
- **National authorisations in other EU member states** (eu-status 5.7, not searched): the regulatory section says
  "geen handelsvergunning in Nederland of de EU" (Compare title and Lead changed for this). The what-it-is Lead keeps
  "Geen enkel land heeft het goedgekeurd" as on English; it rests on the TGA's statement (no comparable international
  regulator has approved it) and the absence of any authorisation in the tracked rows. Flagged for the reviewer.
- **The IGJ's August 2026 order against a webshop selling retatrutide** (nl-law 6.1, not citable): not mentioned.
- **Approval anywhere would change S0**: kept as on English ("Die moet dan opnieuw worden bekeken").

### Open questions for the medical reviewer

1. Pancreatitis in the stop callout: Thuisarts gives "Spoed: bel direct je huisarts of de huisartsen-spoedpost" for
   sudden severe belly pain (no 112), the English page says "urgent care", while `warning-signs.json` (rendered just
   below) puts pancreatitis at the emergency level ("Bel direct 112"). The callout now says "Stop en bel direct je
   huisarts. Is de praktijk dicht? Bel dan de huisartsenpost. Is het ernstig? Bel 112." Is that the right level?
2. Ketoacidosis in type 1 diabetes: "Bel direct 112" (English "Get emergency care"); no Dutch page checked for DKA.
3. Contraception: is it right to put the EU label first ("niet klinisch relevant") and the US advice second, for a
   compound that is not tirzepatide and whose own pill study is unpublished?
4. The added balance sentence in the evidence section and the rewritten "real prospect" sentence: do they keep the
   site's "uncertainty in both directions" while passing the Dutch advertising test?

### Open questions for the legal reviewer

1. Is "in de praktijk alleen legaal binnen een studie" right for the Netherlands, given that the artsenverklaring route
   (Regeling Gnw art. 3.17) exists in law and the IGJ accepts an IB or IMPD for medicines without any authorisation?
2. The advertising test: does naming tirzepatide's effect with its SmPC indication, most frequent side effects and only
   contraindication meet the Rb Amsterdam standard ("in overeenstemming met de samenvatting van de productkenmerken")?
3. May the page name the developer (Eli Lilly, LY3437943) and its expanded-access programme (a company programme, on
   ClinicalTrials.gov) as world context? English does; no seller is named.
4. The FAGG warning of 19 October 2026 is cited as evidence (it names retatrutide); is one Belgian regulator sentence
   outside the BE notes acceptable here?
5. "Over een ontheffing voor retatrutide vonden we niets openbaars": the IGJ does not publish individual ontheffingen as
   far as we know; is the sentence fair?

## Glossary

`src/i18n/nl/glossary/retatrutide.json` checked against the page and against all Dutch glossary files (no duplicate id
or term): the terms the page uses (drievoudige agonist, glucagonreceptor, GLP-1-receptor, energieverbruik, dysesthesie,
allodynie, ketonen, ketoacidose, boezemfibrilleren, sinusknoop, MASLD, DXA-scan, substudie, post-hocanalyse,
netwerkmeta-analyse, topline-resultaten, cryo-elektronenmicroscopie, geneesmiddel voor onderzoek, expanded access,
casusbeschrijving, massaspectrometrie, ANGPTL3/8) are right for the page. No change. `biologics-license-application` is
no longer used on the Dutch page (the BLA plan left with its company-named source); it is harmless and was left in.
Other terms the page needs exist elsewhere (surrogaateindpunt, HbA1c, BMI, sulfonylureumderivaat, vetvrije massa,
MEN2, medullair schildkliercarcinoom, C-cellen, slaapapneu, risicoratio, betrouwbaarheidsinterval, CTIS, METC, CCMO,
Onderzoekmetmensen.nl, compassionate use, artsenverklaring, ontheffing, handelsvergunning, Lareb, FAGG, S0, dopinglijst).
"Hartfilmpje (ecg)", "artrose" and "PKA" are explained in the sentence.

## Style terms (terms STYLE-NL lacks, and the word used)

| English | Used on the page | Note |
|---|---|---|
| triple agonist | drievoudige agonist | glossary term; the FAGG writes "drievoudige agonisten" |
| the glucagon part (of the molecule's action) | het glucagondeel | also "het GLP-1-deel", "het GIP-deel" |
| knee osteoarthritis | artrose in de knie | |
| sleep apnoea; apnoeas and hypopnoeas | slaapapneu; ademstops en te ondiepe ademhalingen tijdens de slaap | glossary: obstructieve slaapapneu |
| atrial fibrillation; atria | boezemfibrilleren; boezems (rechterboezem, linkerboezem) | as Thuisarts |
| ECG | hartfilmpje (ecg) | |
| sulfonylurea | sulfonylureumderivaat (een tablet tegen diabetes) | the SmPC's word |
| dysaesthesia (B1) | vreemde gevoelens in de huid; term: dysesthesie | SmPC "Dysesthesie" |
| start of trial / recruitment (Regulation 536/2014) | het onderzoek is gestart / de werving | OMON: "Werving gestart/gestopt" |
| contract research organisation | bedrijf dat onderzoek in opdracht doet | |
| abstract (of a paper) | samenvatting | |
| weight management (label) | gewichtsbeheersing | Mounjaro SmPC 4.1 |
| up to (25%) | met maximaal (25,0%) | "met tot" reads awkwardly |
| percentage points | procentpunt | STYLE §3 |
| 95% CI | 95%-BI | |
| a fold of the page | named by its title ("onder “Status in Nederland, de EU en de sport”") | no word for "fold" in STYLE |
| life coach | ‘lifecoach’ | in quotes, as English |

## For the final sweep (changes needed in files I do not own)

1. `src/data/organ-cards/retatrutide.yaml`: `status_local_sources.EU` still uses `ema-2026-10-under-evaluation`, the id
   the merge chose to retire in favour of `ema-under-evaluation-2026-10` (merge.md, eu-status §4 conflict 10). Switch it
   (and `src/data/explainers.yaml` line 234), and consider adding `NL: [cbg-gib-search-status-2026-10-27]`. Until then the
   Dutch page must cite `ema-2026-10-under-evaluation` in its text (the OrganCards check fails otherwise), so the page's
   source list shows the same EMA spreadsheet twice (once from the RegulatoryTable's EU row). After the switch, replace
   the three `ema-2026-10-under-evaluation` cites in `src/content/compounds/nl/retatrutide.mdx` by
   `ema-under-evaluation-2026-10`.
2. English page (owner of `src/content/compounds/en/retatrutide.mdx` and `src/data/sources/retatrutide.yaml`): it still
   cites `sec-lilly-2026-q2-results` and `sec-lilly-2025-q4-results`, whose titles name the developer (CONTENT-GUIDE
   §11; MANIFEST-guides-en.md row 140 already dropped the same fact from start-here for this reason). The US row of
   `src/data/compounds/retatrutide.yaml` also cites `sec-lilly-2026-q2-results`.
3. `src/data/sources/legal-a.yaml` → `eu-regulation-536-2014`: the note lists only art. 28–29; this page also cites it
   for art. 4 (prior authorisation after scientific and ethical review), art. 61 (manufacturing authorisation for
   investigational medicinal products) and art. 63(1) (good manufacturing practice), all read on 27 October 2026 through
   publications.europa.eu (CELEX 32014R0536). Add them to the note.
4. `src/data/sources/shared.yaml` → `eu-directive-2001-83`: still points at the 2022-01-01 consolidation; art. 6(1) was read
   today in the 2025-01-01 consolidation (same wording). The eu-status fact-check asks for the same update.
5. `src/data/sources/retatrutide.yaml` → `cbg-compassionate-use-list`: `accessed: 2026-10-20`; re-read on 27 October 2026
   (no retatrutide, LY3437943; only older Lilly programmes): update `accessed`.
6. `src/data/sources/nl-research-nl-help.yaml` / `cbg-bijwerking-melden`: the CBG page (modified 7 May 2026) now also
   points readers to "www.mijnbijwerking.nl" next to "via www.lareb.nl"; worth a line in the source note and a look at the
   NL contact card's reporting link (not checked who runs mijnbijwerking.nl).
7. `src/i18n/nl/warning-signs.json`: `pancreatitis` is `emergency`, while Thuisarts names no 112 threshold for belly pain
   (nl-help fact 17 keeps the faster level). The compound stop callouts of the GLP-1 pages should say the same thing;
   align once the medical reviewer has answered question 1.
8. STYLE-NL: the "Style terms" above (merge into §2 if the sweep agrees).

## Check (independent, 27 October 2026)

Independent fact-check and edit of `src/content/compounds/nl/retatrutide.mdx` against the current English page and
data file, the brief (including "Added after step 1"), STYLE-NL, CONTENT-GUIDE and the fact-checked research of
27 October 2026 (`research/nl/eu-status.md`, `nl-law.md`, `nl-care.md`, `nl-help.md`, `status/retatrutide.yaml`; the
Fact-check sections win). No source file and no glossary file of this group exists (`nl-retatrutide.yaml` and
`nl-retatrutide.json` were not created), so there was no new source entry to check. The writer's notes say "all 23 study
ids": the data file has 22, and all 22 have a Dutch finding and limitation.

**What was checked.** Science parity, by script and by reading: the cited ids of both pages (every id the English page
has and the Dutch page lacks is US/UK/CA/AU framing, as in the writer's table above; nothing scientific was dropped
except the company-sourced "positive results" sentence, see concerns); the 30 `<Claim>` levels (identical, in the same
order); the 7 KeyNumbers and every figure (Compare, Diagram, TimeStrip, OrganCards, Mechanism, StudyTable,
RegulatoryTable, ProductCheck, WarningSigns); the 7 mechanism steps (kinds and levels identical); every number in Dutch
format. Dutch, EU and Belgian facts against the research and, where the page relies on a source text, the source itself
(fetched today): the Dutch SmPC of Mounjaro (`ema-pi-mounjaro-nl`, PDF, pdftotext: 4.1 both indications, 4.3
hypersensitivity only, 4.5 "wordt niet als klinisch relevant beschouwd", 4.6 and 5.3 reproductive toxicity in animals,
4.8 "Dysesthesie" and GI effects most frequent, 5.2 "een C20-vetzuurgroep, die albuminebinding mogelijk maakt en de
halfwaardetijd verlengt", 5.3 rat C-cell tumours "De relevantie van deze bevindingen voor de mens is niet bekend"); the
Dutch SmPC of Wegovy (dysesthesie in 4.8); Regulation 536/2014 through CELLAR (art. 4 "shall be subject to scientific
and ethical review and shall be authorised", art. 61(1) manufacturing authorisation for investigational products,
art. 63(1) good manufacturing practice); Lareb "Alles over bijwerkingen melden" ("Ook als je niet zeker weet of de
klachten door het medicijn of vaccin komen"). Rules, the advertising test, B1 and STYLE terms read line by line; links
and anchors checked in the Dutch target files (`legal-routes.mdx` headings `## Recept` … `## Zelf invoeren`;
`legal/nl.mdx` `## Zelf invoeren uit het buitenland`).

### Changes

| Page part | Before | After | Why | Source |
|---|---|---|---|---|
| TL;DR "Werkt het?" | "Het gewicht daalde gemiddeld tot een kwart" | "… daalde gemiddeld met maximaal een kwart" | "daalde tot een kwart" means "fell TO a quarter" in Dutch: a wrong number | `jastreboff-2026-triumph-1` (17,6–25,0%) |
| Nederland fold, own import | "Er is een uitzondering voor medicijnen die je zelf op reis bij je hebt. Die geldt niet voor een pakket …" | The traveller rule lifts only the art. 18 import licence; art. 40 still applies, so a medicine without a handelsvergunning does not become legal; it does not cover a parcel either (2019) | Factual error: the old text implied a traveller may bring retatrutide in legally | nl-law facts 7, 38, 43(a); `nl-gnw-art-18-licence`, `douane-medicijnen-reizen-2026` (added), `nl-gmw-art-40-handelsvergunning` |
| Regulatory, Sport | "In de lijst van 2027 noemt WADA peptiden er voor het eerst als voorbeeld bij." | "Daarom noemt de lijst van 2027 bij S0 nu ook peptiden als voorbeeld." | "voor het eerst" is wrong: S0 already named BPC-157 in 2026 ("inclusief maar niet beperkt tot BPC-157", Dutch translation); the note says only "peptides are now named as examples" | `wada-2027-list-explanatory-note`, `dopingautoriteit-vertaling-dopinglijst-2026` |
| Regulatory, Sport | "WADA schrijft …"; "de dopinglijst van 2026" | "Het Wereld Anti-Doping Agentschap (WADA) schrijft in zijn toelichting …"; "de WADA-Dopinglijst 2026" | STYLE §2.7 first mention; §2.4 the year's list as the Dopingautoriteit titles it | – |
| Evidence, after the key numbers | "Tot 12 op de 100 stopten erdoor" | "… stopten door bijwerkingen of overlijden" | The 4–12% figure counts stopping for side effects or death (English KeyNumber) | `bellido-2026-triumph-2` |
| Evidence Lead | "In grote studies daalden het gewicht en de bloedsuiker. De maker betaalde elke studie." | "In grote studies daalden gewicht en bloedsuiker. Veel deelnemers kregen bijwerkingen. De maker betaalde elke klinische studie." (18 words) | Advertising test: an effect never without its risks; "elke studie" was false (independent animal studies, an observational study, case reports) | `bellido-2026-triumph-2`, `pubmed-retatrutide-count-2026-10-20` |
| grade_rationale (independence); evidence fold; "Onafhankelijk onderzoek" | "Elke studie bij mensen werd betaald door Eli Lilly"; "in een studie bij mensen"; "Alle studies bij mensen tot nu toe"; "Geen groep buiten Lilly heeft een studie bij mensen gedaan" | "klinische studie" in all four | English "trial": independent studies in people exist (Sehgal 2026, Carneiro 2026, two case reports), so "studie bij mensen" was false | data file `studies` |
| Evidence fold, "Wat het bewijs wel laat zien" | "grote en steeds terugkerende dalingen"; no risk named | "in elke studie een grote daling van het gewicht"; added "Tegelijk kregen veel deelnemers bijwerkingen, vooral van maag en darmen (zie de risico's)." | Calque ("consistent" is not "steeds terugkerend"); advertising test (effect with its risks) | `bellido-2026-triumph-2` |
| Fold title and `###` heading | "Hoe het zich verhoudt, en wat het wachten kost"; "### Wat het bewijs wel laat zien, en wat het wachten kost" | "… en wat het wachten betekent"; "### Wat het bewijs wel laat zien, en de nadelen van wachten" | STYLE §7: "kost/kosten" never in a title, heading or fold title | – |
| Regulatory Lead | "Niet goedgekeurd in de EU. Verkopen is verboden; in de praktijk kan het alleen in een studie." | "Niet goedgekeurd in Nederland of de EU. Verkopen is verboden. Legaal kan het vrijwel alleen in een studie." | The question asks about the Netherlands; same wording as the TL;DR ("vrijwel") | NL and EU rows |
| Regulatory Compare title | "…, en handel erin is in Nederland verboden." | "Geen handelsvergunning in Nederland of de EU. Leveren en invoeren zijn in Nederland verboden." | Keeps trade words out of a figure title; names the art. 40(2) acts | `nl-gmw-art-40-handelsvergunning` |
| Legal callout and Nederland fold | "De uitzonderingen zijn smal: geneesmiddelen voor onderzoek, …" (a closed list of three) | "Er zijn een paar smalle uitzonderingen, zoals …" | Art. 40(3) has nine exceptions (a–i); the three named are the relevant ones | nl-law fact 5 |
| Nederland fold | "De minister schreef op 5 oktober 2026 aan de Tweede Kamer:" | "In antwoorden op Kamervragen van 5 oktober 2026 schreef de minister:" | The document is the answers to Kamervragen, received and published on 5 October 2026 | `tk-2026-ah-249-antwoord-afslankmedicatie` |
| EU fold, TRIUMPH-Outcomes | "Hoe die studie onder de Europese regels is goedgekeurd, is daarom niet bekend" | "Wat de Europese status van die studie is, kunnen we daar dus niet zien." | "Hoe … is goedgekeurd" presumed an EU authorisation; eu-status §5 item 3: its status under the Regulation is unknown | eu-status §5 item 3 |
| Evidence, liver substudy | "… In Nederland is het op 22 september 2026 gestart" | adds "; of er hier al deelnemers zijn, is niet duidelijk"; cite `omon-nl-omon61112` added | Next to "werft deelnemers" the old line read as Dutch recruitment, which is UNRESOLVED | eu-status and nl-care fact-checks |
| what-it-is fold | "De Amerikaanse FDA" | "De Amerikaanse medicijnautoriteit FDA" | STYLE §2.7 first mention | – |
| what-it-is status paragraph | no marker | `{/* residue-ok: world context … */}` before it | Brief: a world-context line (the TGA's "no comparable regulator") is marked | – |
| Harm-reduction intro | the UK pen seizure inside the paragraph, unmarked | its own paragraph, with `{/* residue-ok: world context … */}` | Brief: world context marked | – |
| Stop callout, heart line | "bel 112." | "bel direct 112." | STYLE §5.1 "Levensgevaar: Bel direct 112."; same as the other 112 lines in the callout | – |
| grade_rationale (preclinical) | "Dat valt binnen de grens van 10 tot 50." | "Dat valt binnen de klasse van 10 tot 50 studies." | "grens" (a limit) is the wrong word for the 10–50 band | – |
| Study Sehgal 2026 (finding) | "schreven de meesten over meer eetlust, …" | "kwamen deze klachten het vaakst voor: meer eetlust, …" | "de meesten" (most people) misstated "the most common symptoms were" | `sehgal-2026-retatrutide-social-media` |
| Risks fold, social media | "schreven velen over …" | "kwamen deze klachten vaak voor: …" | Same meaning as English ("common ones were") | same |
| Study Buzzi 2026 (limitation) | "niet als bewezen" | "niet als zeker" | Keeps §5.6 claim words off the page, so a search for "bewezen" finds only mistakes | – |
| Phase 3 paragraphs | "TRANSCEND-T2D-1 verdeelde 537 volwassenen … door loting over de groepen." (and TRIUMPH-2, TRIUMPH-1) | "In TRANSCEND-T2D-1 bepaalde loting welke behandeling 537 volwassenen … kregen." (and the same for the other two) | Verb split around a long phrase (STYLE §1 rule 2) | – |
| Risks fold, dysesthesia | cites the Mounjaro SmPC and the Wegovy EPAR page | adds `ema-pi-wegovy-nl` | The Dutch Wegovy SmPC lists dysesthesie (4.8), read today | `ema-pi-wegovy-nl` |
| Interactions fold | title "… wie het helemaal niet moet gebruiken"; `### Wie het helemaal niet moet gebruiken`; `### Mogelijke wisselwerkingen (geen gepubliceerd)` | "… wie het beter helemaal niet gebruikt" (title and heading); "(geen gepubliceerde gegevens)" | "niet moeten" means "need not" in Dutch; "(geen gepubliceerd)" was ungrammatical | – |
| Routes link list | "[een bereiding door de apotheek](…#magistrale-bereiding)" | "[magistrale bereiding](…#magistrale-bereiding)" | STYLE §2.4 term; matches the target heading | – |

Validator after the changes: `npx tsx scripts/validate-content.ts --only compounds/nl/retatrutide` → 0 errors, 0 warnings.
Residue: `npx tsx scripts/check-locale-residue.ts --only compounds/nl/retatrutide --details` → 0 error/frame, 0 warn.

### Confirmed as written (no change needed)

The Dutch and EU status (investigational in both rows; no CBG product; not in the EMA data or on the 5 October list; no
Dutch CUP), the CTIS facts (9 trials, 3 not ended; SYNERGY-Outcomes Dutch decision 4 February 2026 and start
22 September 2026, "gestart", never "werft"; TRIUMPH-5 in Germany and Poland, end expected 16 November 2026), the two
Dutch trials and their OMON statuses, the art. 40(1)–(2) wording, "in voorraad hebben" as unclear (nl-law 5.1), the 2019
parcel ruling, the Douane pages, the IGJ warnings of 3 September 2025 and 20 October 2026, the EMA/HMA warning, the
FAGG warning wording, the artsenverklaring wording (IGJ "terughoudend", "Niet-medische redenen"), compassionate use only
on the manufacturer's application, the CCMO lines, Lareb also for products from outside a pharmacy, the Belgian line,
the Mounjaro contraception variation as an unknown outcome, the help levels (112 for the heart, allergy and ketoacidosis
lines; "Bel direct je huisarts. Is de praktijk dicht? Bel dan de huisartsenpost." for liver signs and dehydration), the
route anchors, regulatory notes only for NL, EU and WADA, no `indications` (no EU product), the translation block, and
every number.

### Remaining concerns for the reviewer

1. **"Geen enkel land heeft het goedgekeurd"** (what-it-is Lead; "nergens goedgekeurd" in the lede and description):
   eu-status §5 item 7 says national authorisations in other EU member states were not searched and asks never to
   write "not authorised in any EU country". The page rests the claim on the TGA's statement (no "comparable
   international regulator" has approved it) and on the data rows, as English does. A national obesity authorisation
   in another member state is legally possible (obesity is not on the mandatory central list, Regulation 726/2004,
   Annex point 3), but nothing suggests one. Kept for parity; the editor may soften it to "voor zover bekend nergens
   goedgekeurd".
2. **TRIUMPH-3 company announcement.** English says Lilly "has announced positive results" for TRIUMPH-3 and TRIUMPH-4,
   citing SEC filings whose titles name the company. Dutch keeps only that the company released TRIUMPH-4 figures
   (`kaczynski-2026-retatrutide-review`); that TRIUMPH-3 results were announced too is missing, because no citable
   source without a company name was found. A science-parity gap, not US framing.
3. **Pancreatitis level** in the stop callout (urgent plus "Is het ernstig? Bel 112.") differs from `warning-signs.json`
   (emergency), rendered just below it; the writer's medical question 1 stands.
4. **The FAGG sentence** in "Waarom zoveel mensen ervan hebben gehoord" is Belgian regulator content outside the BE
   notes (writer's legal question 4); kept as evidence that a European regulator names retatrutide.
5. **Duplicate source in the list**: `ema-2026-10-under-evaluation` (page text, organ cards) and
   `ema-under-evaluation-2026-10` (RegulatoryTable EU row) are the same EMA spreadsheet; see "For the final sweep" item 1.
6. The developer is named (Eli Lilly, LY3437943, its expanded-access programme), as on English: writer's legal question 3.
7. "Het bewijs is niet zwak." stays (CONTENT-GUIDE §1: say plainly where evidence is promising); the same paragraph now
   names the side effects and the missing benefit-risk assessment. The legal reviewer should read this paragraph
   against the Raad van State and Rechtbank Amsterdam standard (brief, "Added after step 1", item 1).
8. The glossary entry `expanded-access` (`src/i18n/nl/glossary/retatrutide.json`, not this group's file) defines it as
   "In de VS een legale route"; on this page it is a company programme with no locations listed. Final sweep: consider a
   neutral definition.
