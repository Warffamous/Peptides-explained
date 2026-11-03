# Notes: group tirzepatide (Dutch site), 27 October 2026

Assignment: the Dutch compound page `src/content/compounds/nl/tirzepatide.mdx` (from
`src/content/compounds/en/tirzepatide.mdx`). Extra task: insurance, GLI and NHG strictly from
`research/nl/nl-care.md`; indications of the EU product (Mounjaro) from the Dutch SmPC 4.1.

Files written or changed by this group:

- `src/content/compounds/nl/tirzepatide.mdx` (new)
- `src/i18n/nl/glossary/nl-tirzepatide.json` (new: one term)
- `src/i18n/nl/glossary/tirzepatide.json` (one definition corrected, see "Glossary")
- `research/nl-notes/tirzepatide.md` (this file)

No new source was needed: every id the page cites already exists in `src/data/sources/` (so no
`src/data/sources/nl-tirzepatide.yaml` was created). No host was added to `config/link-allowlist.json`.
No English file was touched. No build, commit or push.

Checks at the end: `npx tsx scripts/validate-content.ts --only tirzepatide` → 0 errors; the only
warnings are 4 on the English page (inline links to MedWatch, Yellow Card, MedEffect, TGA; not ours).
`--only compounds/nl/tirzepatide` → 0 errors, 0 warnings. Full validator run: 0 errors.
`npx tsx scripts/check-locale-residue.ts --only tirzepatide --details` → 0 error/frame hits, 0 warn hits.
Without the markers the page has 17 warn hits (FDA, "in de VS", "in het Verenigd Koninkrijk", "in Canada"),
all on lines that keep evidence or world context; each such line carries `{/* residue-ok: … */}` (or
`# residue-ok:` in the frontmatter).

## 1. Method and what each part came from

**Method: `translated`** (`translation: { method: translated, from: en, review: pending }`), as the brief
says for compound pages; the regulatory and harm-reduction sections are adapted to the Netherlands and
the EU inside that translated page.

- **Structure kept from the current English page:** same frontmatter fields, the same seven `<Section>`s
  in the same order, the same components (`Compare` ×2, `Callout` note/uncertain/stop, `InDetail` folds,
  `AuthorisedProducts`, `OrganCards`, `Diagram`, `Mechanism`, `KeyNumber` ×7, `StudyTable`, `TimeStrip`,
  `RegulatoryTable`, `Explainer glp1-class-hypo`, `ProductCheck` with the same `extra`, `WarningSigns`
  with the same `only`, `Checklist`), every study id of the data file with its Dutch finding and
  limitation, the seven mechanism steps with the same kind and level, every `<Claim>` with the same
  level, every number (converted to Dutch format and checked twice).
- **Science:** identical. All PubMed/DOI sources, the FDA labels and FDA review data, the EMA product
  information and outcome reports stay. Where the English page names the US label as evidence, the Dutch
  page says "de Amerikaanse productinformatie"; where the English says "the product information assessed
  by the EMA", the Dutch page says "de Europese productinformatie" (it is the reader's own label now).
- **Came back from the saved 23 October page** (`research/for-nl-site/snapshot-2026-10-23/content/compounds-en/tirzepatide.mdx`,
  `MANIFEST-compounds-a.md`), each fact re-checked against `research/nl/`:
  - EU authorisation history: 15 September 2022; weight management 11 December 2023; children from 10 on
    22 January 2026 (eu-status fact 3 and 17; the procedural-steps sources).
  - The EU fold: central procedure, holder Eli Lilly Nederland B.V., OSA (December 2024), HFpEF
    (January 2026) and SURPASS-CVOT (June 2026) data added without a separate indication; additional
    monitoring (eu-status facts 17, 18; fact-check item 17).
  - The Dutch fold: prescription only; Bijlage 2 item 194 (type 2 diabetes only, from 18, three routes),
    now cited from the Regeling itself (`nl-regeling-zorgverzekering-bijlage-2-glp1`, nl-care fact 57) as well
    as the Kompas copy; weight management not reimbursed and the Zorginstituut's staged assessment
    (nl-care fact 60; I also re-read the werkagenda page today: modified 27 October 2026 08:26, planning
    unchanged); the NHG-Standaard Obesitas advises against tirzepatide (nl-care fact 64, now read directly,
    not via the Kompas); the GLI (nl-care fact 63); the cost figures 4,1 million people, € 10 billion in
    theory, € 1,3 billion (2024), "ruim 1 miljoen" in the first groups (nl-care fact 61).
  - The CBG position on online GLP-1 medicines (`cbg-glp1-position`; nl-care fact 19). I fetched the page
    today: "Daarom is het belangrijk dat een arts en apotheker de behandeling begeleiden" (the Compare row
    "Medische begeleiding"); "Het is onduidelijk wat erin zit, hoe je het moet gebruiken en dus ook wat de
    gevolgen voor je gezondheid zijn"; the lower-BMI sentence used for off-label (below).
  - Lareb for side effects; the EU product information as the source of the stop strip.
- **Not reused from the saved material:**
  - The Kompas summary that the **NHG-Standaard Diabetes mellitus type 2 (2024)** advises against
    tirzepatide without very high cardiovascular risk, and the Kompas sentence on hospital care. Neither is
    in `research/nl/nl-care.md` (which re-checked only the obesity standard), so they are left out (the
    extra task says NHG strictly from nl-care).
  - The Germany fold (§ 34 SGB V) and the Belgium paragraph (reimbursement "not verified"): Germany is not
    part of the Dutch site; Belgium gets one line ("In België meld je een bijwerking bij het FAGG.") and a
    link to `/nl/legal/be/`.
  - The saved TimeStrip of EU and US approval bars: the current English page has a `Compare` there, so the
    Dutch page has a Dutch `Compare` (rows: approved, prescription only, reimbursed; columns: type 2 diabetes,
    weight management). The EU dates are in its cells and in the folds.
- **Rewritten for the Netherlands** (English US/UK/CA/AU framing → Dutch answer): the TL;DR line on how to
  get it legally; the regulatory `Lead`, `Compare` and folds ("De Europese Unie en Nederland", "Vergoeding
  uit het basispakket"); the legal route (huisarts or specialist, apotheek, Gnw art. 61; online prescribing
  only under strict conditions; NHG; off-label; artsenverklaring and magistrale bereiding do not fit); zelf
  invoeren; the reporting paragraph (Lareb, Landelijk Meldpunt Zorg, `<JurisdictionCard code="NL" />`,
  the Belgian line); the help levels in the stop callout (112 / bel direct je huisarts, is de praktijk dicht?
  bel dan de huisartsenpost; STYLE-NL §5.1 and brief item 2).
- **New Dutch and EU facts not on either earlier page** (all from `research/nl/`, fact-checked):
  - liraglutide and naltrexon/bupropion can be reimbursed for obesity under strict conditions (nl-care
    §2 item 10, fact 57), so readers are not told no obesity medicine is ever reimbursed;
  - the eigen risico applies to a reimbursed medicine: € 385 in 2026, € 400 from 1 January 2027 (nl-care
    facts 54, 55, 56; fact-check correction 3); the GLI has no eigen bijdrage and no eigen risico;
  - a huisarts need not prescribe weight-loss medicines ("facultatief"), may refer to an obesity centre or a
    specialised internist; some GPs do, some do not (nl-care fact 8);
  - online prescribing only under strict conditions (IGJ, nl-care fact 11); the GP still helps with side
    effects of a medicine prescribed elsewhere (NHG situation 6, nl-care fact 12);
  - the EMA/HMA warning of September 2025 on illegal GLP-1 products, including tirzepatide (eu-status fact
    25, fact-check addition 6); the IGJ/CBG warning of 3 September 2025; the IGJ warning of 20 October 2026
    on stolen insulin pens possibly presented as obesity medicine (nl-care fact 67a; cited as
    `igj-2026-10-stolen-medicines`, the id the merge kept);
  - the pending EU variation on the pill (SmPC 4.5 and 4.6), outcome unknown on 27 October 2026; the PRAC's
    warfarin signal closed in April 2026 without a label change; the class lithium signal (EPITT 20275) still
    open (eu-status facts 17, 23 and the fact-check corrections);
  - no Mounjaro shortage on the EMA catalogue and no tirzepatide entry on Farmanco (eu-status facts 26, 27);
  - no other EU tirzepatide medicine, no Zepbound in the EU (eu-status fact 3);
  - MASH is not an approved use (Dutch SmPC 4.1); SYNERGY-Outcomes (tirzepatide and retatrutide, high-risk
    MASLD) started in the Netherlands on 22 September 2026 (nl-care fact 46 with the fact-check wording
    "gestart", not "recruiting");
  - from the Dutch SmPC, read today (`ema-pi-mounjaro-nl`, PDF fetched with curl, pdftotext): 4.1 indications
    (below), 4.3 (only hypersensitivity), 4.4 (pancreatitis, hypoglycaemia, dehydration, severe GI disease,
    retinopathy, aspiration), 4.5 (the pill: "niet als klinisch relevant beschouwd. Er is geen
    dosisaanpassing van orale anticonceptiva nodig"), 4.6 (contraception advised; "niet aanbevolen" in
    pregnancy; stop at least one month before a planned pregnancy because of the long half-life), 4.8
    (pancreatitis, cholelithiasis and cholecystitis "soms"; GI effects highest while the dose is raised), the
    leaflet's black-triangle sentence ("U kunt hieraan bijdragen door melding te maken van alle
    bijwerkingen").

**Indications (`indications.mounjaro`)** from the Dutch SmPC 4.1 (and `research/nl/status/tirzepatide.yaml`,
`indications_nl_from_smpc`): type 2 diabetes not well controlled, alongside diet and exercise, in adults,
adolescents and children from 10; weight management (loss and maintenance) in adults with a BMI of 30 or
more, or 27 to 30 with at least one weight-related condition, alongside a reduced-calorie diet and more
physical activity. Only `mounjaro` (jurisdiction EU) is a visible product on the Dutch site; the US, UK, CA
and AU products need no Dutch line (brief item 7).

**`regulatory_notes`:** EU, NL and WADA only (from the status file's suggested notes, with the
reimbursement clause from nl-care).

## 2. The advertising test (brief, "Added after step 1", item 1)

Mounjaro is a prescription medicine, so public advertising is forbidden and the text must stay in line with
the SmPC (nl-law fact 17a). What the page does:

- Every effect is named with its claim level, its uncertainty and its risks: the `Lead` and TL;DR on "does it
  work" carry the weight regain; a new sentence after the four key numbers names the common side effects
  (nausea, diarrhoea, vomiting, mostly while the dose is raised; Dutch SmPC 4.8); the effect step of the
  mechanism chain says GI complaints are common.
- The indications are the Dutch SmPC's, in the TL;DR ("Waarvoor is het goedgekeurd?") and in `indications`.
- The only EU contraindication (hypersensitivity) and the main side effects and warnings are named.
- Off-label is presented as off-label: MASH is "geen goedgekeurde toepassing"; use for weight at a lower BMI
  than the indication is off-label, with the CBG's line that the benefit-risk balance is then unknown.
- No success story, no "results", no before/after; the head-to-head with semaglutide says the trial was
  open-label and run by one maker, and "Geen van beide laat zien welk middel bij een bepaald persoon past".
- No commerce word in any title, heading, `Lead`, fold title, figure title, label or link text (the validator
  passes; I also avoided STYLE-NL §7's extra list, such as "kosten" and "verkrijgbaar", in titles).

## 3. Citations dropped (page, cite id, why, what replaced it)

All on `compounds/tirzepatide`. Every one supported US, UK, Canadian or Australian framing (status, routes,
insurance, reporting, import, enforcement or compounding rules as the reader's frame), which the brief
removes from Dutch pages.

| Cite id | Why it went | Replaced by |
|---|---|---|
| `uk-mhra-ma-granted-2022`, `uk-mhra-2023-11-mounjaro-weight`, `uk-mhra-2024-01-mounjaro-kwikpen`, `uk-mhra-substance-index-status-a-2026-10-24`, `uk-emc-smpc-mounjaro-kwikpen-2-5mg` | UK licensing dates, UK forms, UK SmPC as the reader's label | EU dates and forms: `ema-epar-mounjaro`, `ema-mounjaro-procedural-steps(-archive)`, `ec-union-register-mounjaro`, `ema-pi-mounjaro-nl`, `cbg-gib-search-tirzepatide-2026-10-27` |
| `ca-sbd-mounjaro`, `ca-pm-zepbound`, `ca-pm-zepbound-2026-06-11`, `ca-rds-mounjaro-kwikpen-2024`, `ca-rds-mounjaro-paediatric-2026`, `ca-dpd-extract-search-status-a-2026-10-24`, `ca-pdl-human` | Canadian approvals, forms and schedule | the same EU sources |
| `au-tga-pmr-search-tirzepatide-2026-10-26`, `au-artg-search-tirzepatide-2026-10-26`, `au-artg-mounjaro-439430-public-summary-2026-10-26`, `au-tga-under-evaluation-search-tirzepatide-2026-10-26`, `au-poisons-standard-2026-10`, `au-tga-advertising-glp1-prohibited`, `au-tg-amendment-2024-measures-2-glp1`, `au-tga-2024-06-glp1-compounding-update`, `au-tga-s19a-search-tirzepatide-2026-10-26` | Australian approvals, schedule and pregnancy label warning, advertising ban, compounding ban, s19A supply | EU status sources; for the pregnancy warning the Dutch SmPC 4.6 (`ema-pi-mounjaro-nl`) |
| `fda-drugsatfda-search-status-a-2026-10-24` | "no generic approved in the US" | `ema-medicines-json`, `cbg-gib-search-tirzepatide-2026-10-27` (no other EU tirzepatide medicine) |
| `fda-2026-503b-glp1-exclusion-proposal`, `fr-2026-12937-503b-comment-extension`, `federalregister-fda-search-2026-10-23` | US 503B rule-making (a US compounding route) | one world-context sentence on the US shortage, kept with `fda-glp1-compounding-policy` |
| `fda-pcac-2026-07-meeting` | "tirzepatide was not among the PCAC peptides": PCAC framing not needed on a page about an EU-authorised medicine | nothing (the PCAC framing appears on the pages of the peptides it concerns) |
| `fda-warning-letters-index` | US enforcement against online sellers | `cbg-glp1-position`, `ema-hma-2025-09-illegal-glp1`, `igj-2025-illegal-online-medicines`, `igj-online-medicijnen` (the FDA's own warning stays, with `fda-unapproved-glp1-concerns`) |
| `fda-personal-importation`, `fda-rpm-ch9-personal-importations`, `uk-hmr-2012-reg-17`, `uk-hmr-2012-reg-214`, `mhra-foi-22-431-personal-import-seizures`, `ca-hc-gui-0116-personal-import`, `ca-cbsa-d19-9-1`, `au-tga-personal-importation-scheme`, `au-tga-2026-10-prescription-import-infringements`, `au-vic-dpcs-act-1981`, `au-nsw-ptg-act-1966`, `au-nsw-health-s4d` | personal import and possession rules of the four countries | Dutch zelf invoeren: `douane-medicijnen-reizen-2026`, `douane-invoer-geneesmiddelen-2026`, `nl-rbdha-2019-4817-postzending-eigen-gebruik`, `nl-gmw-art-40-handelsvergunning`, link `/nl/legal-routes/#zelf-invoeren` |
| `fda-off-label-use`, `mhra-gn14-specials`, `ca-hc-sap-drugs`, `au-tga-sas-individual-patients` | the four countries' treatment routes | `nl-gmw-art-68-off-label`, `igj-2026-off-label-standpunt`, `nl-regeling-gnw-art-3-17`, `igj-leveren-op-artsenverklaring`, `knmp-richtlijn-bereiden-2016`, the brief's route anchors |
| `us-usc-42-1395w-102-e`, `us-usc-42-1396r-8-d`, `us-medicare-gov-weight-loss-drugs`, `us-cms-medicare-glp1-bridge`, `us-cms-balance-model`, `nice-ta1026-tirzepatide`, `nice-ta924-tirzepatide-t2d`, `smc-2653-tirzepatide-mounjaro`, `ca-pcpa-negotiations-2026-10-24`, `ca-pcpa-role-system`, `ca-cda-amc-2026-mounjaro`, `ca-cda-amc-2026-zepbound`, `au-pbs-tirzepatide-2026-10-24`, `au-pbs-medicine-status-tirzepatide`, `au-pbac-2025-11-obesity-treatments-advice` | insurance and funding of the four countries | Dutch reimbursement: `zin-geneesmiddelen-zvw`, `nl-regeling-zorgverzekering-bijlage-2-glp1`, `fk-regeling-zorgverzekering-bijlage-2-tirzepatide`, `fk-tirzepatide`, `fk-liraglutide`, `zin-tirzepatide-obesity-assessment`, `zin-2025-obesity-staged-approach`, `zin-2024-wegovy-not-reimbursed`, `zin-gli-zvw`, `nhg-standaard-obesitas-2025`, `thuisarts-obesitas-medicijnen-huisarts`, `rijksoverheid-eigen-risico-2026`, `nl-zvw-art-19-eigen-risico-2027` |
| `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `au-tga-report-adverse-event` | the four countries' side-effect reporting | `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `lareb-home`, `igj-landelijk-meldpunt-zorg`, `cbg-fmd-vervalsing-melden`, `<JurisdictionCard code="NL" />` |
| `mhra-2026-05-largest-seizure` | a UK enforcement event in the UK fold | nothing; the UK falsified KwikPens (`mhra-2026-falsified-mounjaro`) and the October 2026 seizure (`mhra-2026-10-counterfeit-pens`) stay as evidence that fakes exist |

Frontmatter source lists (not `<Cite>`s): the stop strip and the fact sheet cite `ema-pi-mounjaro-nl` and
`ema-epar-mounjaro` instead of `fda-label-mounjaro` and `ema-epar-mounjaro` (the reader's own label;
`fda-label-mounjaro` is still cited in the body). In the first `Compare`, the cells that cited
`fda-drugsatfda-mounjaro`, `fda-drugsatfda-zepbound`, `fda-label-mounjaro`, `ca-hc-2026-01-glp1-advisory` and
`mhra-glp1-what-you-need-to-know` for the US/Canadian/UK frame now cite the EU and CBG sources; all five ids
stay cited elsewhere on the page.

**Kept as evidence or world context, marked** (and still cited): the FDA labels and approval records, the FDA's
compounded-tirzepatide reports and vial advice, the UK falsified pens and seizure, the MHRA's pancreatitis
and mood conclusions, the Health Canada advisory and seizure, the Canadian monograph (thyroid, pregnancy),
the Canadian withdrawn HFpEF request. One world-context line gives the US approval dates and that Zepbound
does not exist in the EU.

## 4. UNRESOLVED points and how the page handles them

| Point (source) | On the page |
|---|---|
| When the Zorginstituut advises on Mounjaro for obesity, and what the minister decides (nl-care §5.3) | "Wanneer het advies komt, is nog niet bekend." Only the published planning is given |
| Any 2027 reimbursement decision for obesity medicines (nl-care §5.2) | Not mentioned |
| Outcome of the Mounjaro oral-contraceptive variation EMA/VR/0000340438 (eu-status, unresolved) | "op 27 oktober 2026 was de uitkomst nog niet bekend" |
| Outcome of the lithium class signal EPITT 20275 (eu-status, unresolved) | "op 27 oktober 2026 nog in behandeling" |
| Whether SYNERGY-Outcomes recruits Dutch participants (nl-care fact-check) | "in Nederland gestart op 22 september 2026", nothing about recruitment; no site named |
| Intra-EU parcels (nl-law, unresolved) | Left out: the page says only that a parcel from outside the EU is not covered by the traveller rule |
| Whether a "research" vial is a medicine or an active substance for Customs (nl-law, unresolved) | Phrased so that both readings hold: "Zo'n middel mag je niet invoeren of naar Nederland brengen, ook niet voor eigen gebruik" (Gnw art. 40(2) for a medicine; Customs: no active substances without registration) |
| Supplementary insurance | "Of een aanvullende verzekering iets betaalt, hebben we niet onderzocht." |
| European Pharmacopoeia monograph for tirzepatide (nl-care §5.5) | Not mentioned |
| Additional monitoring: EMA's medicines JSON says "No", the list and the SmPC say yes (eu-status §4.4, fact-check 17) | Followed the list and the SmPC |
| The NHG diabetes standard on tirzepatide (only in the Kompas text of 20 October, not re-checked) | Left out |

## 5. Open questions for the medical or legal reviewer

1. **Legal (advertising):** is the TL;DR "Werkt het? Ja, voor bloedsuiker en gewicht. Na stoppen kwam veel
   gewicht terug." balanced enough for a prescription medicine, given that the main-risk tile ("Veel mensen zijn
   eerst misselijk …") sits in the same box? The English says "Yes … Average loss in a large trial: about 15 to
   21%"; I left the percentage out of the TL;DR (it stays in the key numbers with its trial and placebo figure).
2. **Legal (advertising):** the paragraph on the reimbursement gap ("Er is een goedgekeurd medicijn voor
   gewichtsbeheersing met grote studies erachter, maar wie het niet zelf kan betalen, krijgt het niet") comes
   from the English and the saved Dutch text and is balanced with the Zorginstituut's cost figures. Is it purely
   informative under the 2026 case law?
3. **Medical:** the pill. The Dutch SmPC 4.5 says the effect is not clinically relevant and no change is needed;
   the US label and the MHRA advise a barrier method for four weeks after the start and each dose increase. The
   TL;DR says "Vraag je arts naar extra bescherming. Het advies verschilt per land." Is that right for a Dutch
   reader while the EMA reviews the text?
4. **Medical:** the low-blood-sugar stop item keeps the site's faster level ("Wordt iemand suf of verward? Bel dan
   112."), as nl-help §1.17 advises; Thuisarts names 112 only for unconsciousness.
5. **Legal:** the line on online prescribing and the NHG's "the GP still helps with side effects" (nl-care §6
   questions 1 and 7): fair at B1, and fine on this page?
6. **Legal:** naming the trial acronym SYNERGY-Outcomes (a company-sponsored trial; nl-care §6 question 8).
7. **Legal:** "Denk je dat een pen van de apotheek nep is? Vertel het je apotheker." is our reading of the
   pharmacists' duty to report falsification (nl-help fact 28).
8. **Legal:** "Een pakket uit een land buiten de EU valt niet onder die regel" rests on Rb Den Haag 2019 and the
   Customs pages; confirm the wording.
9. **Medical:** the artsenverklaring and magistrale bereiding are said not to fit because Mounjaro is authorised
   and a pharmacist first checks whether an authorised product covers the need (KNMP guideline). Correct?

## 6. Style terms (terms STYLE-NL lacks, and the word used)

| English | Dutch used | Note |
|---|---|---|
| additional monitoring · black triangle | aanvullende monitoring · zwarte driehoek | the Dutch SmPC's "onderworpen aan aanvullende monitoring"; glossary id `additional-monitoring` (nl-semaglutide.json) |
| atherosclerotic (cardiovascular) disease | slagaderverkalking (atherosclerose) | new glossary id `atherosclerosis` (nl-tirzepatide.json) |
| major adverse cardiovascular events · heart attack, stroke or cardiovascular death | ernstige hart- en vaatproblemen · een hartaanval of beroerte, of overlijden door hart- en vaatziekte | |
| heart failure with preserved ejection fraction | hartfalen met behouden ejectiefractie (HFpEF) | glossary `hfpef` |
| general anaesthesia or deep sedation | narcose of diepe sedatie | the leaflet says "narcose" |
| combined oral contraceptive · barrier method | combinatiepil, de (anticonceptie)pil · barrièremethode (zoals condooms) | |
| sulfonylurea · basal insulin | sulfonylureumderivaat · basale insuline | as the SmPC; glossary `sulfonylurea`, `basal-insulin` |
| dual agonist · receptor occupancy · isolated mouse islets · musk shrews | dubbele agonist · receptorbezetting · losse eilandjes van Langerhans van muizen · spitsmuizen | |
| dose knob (pen) | doseerknop | |
| generic medicine | generiek middel (een kopie van een andere fabrikant) | |
| pivotal trials | alle grote studies waarop de goedkeuring rust | |
| Lilly-affiliated author | auteur die aan Lilly verbonden is | |
| health records (study) · matched | patiëntendossiers · gematcht | |
| compounded (US) | door Amerikaanse apotheken zelf bereid · bereide GLP-1-producten | STYLE-NL: "bereiding door een Amerikaanse apotheek" |
| boxed warning | zware waarschuwing (boxed warning) | glossary `boxed-warning` (basics.json) |
| PRAC | de veiligheidscommissie van het EMA (PRAC) | glossary `prac` (nl-legal-sport-changing.json) |
| shortage list (Farmanco) | de Nederlandse lijst van tekorten van de apothekers (Farmanco) | |
| obesity centre · internist specialised in obesity | obesitascentrum · internist die gespecialiseerd is in obesitas | NHG wording |
| Scientific Advisory Council (Zorginstituut) | Wetenschappelijke Adviesraad | |
| facultative (NHG) | facultatief | NHG wording, explained as "hoeft niet" |
| 95% CI | 95%-BI; "95,3%-BI" | STYLE-NL §2.3 gives BI; the hyphenated form is my choice |
| single-dose pen · multi-dose KwikPen | pen voor één dosis · KwikPen voor meerdere doses | as STYLE-NL "flacon voor één dosis" |

## 7. Glossary

- `src/i18n/nl/glossary/tirzepatide.json` → `combined-lifestyle-intervention`: definition corrected to the
  Zorginstituut page (`zin-gli-zvw`, nl-care fact 63): the basic package pays for it with no eigen risico;
  "en verwijst je door" removed (not in the source); `see_also` now `nhg-standaard`, `eigen-risico`.
  The other entries were checked against the page and left as they are. `outsourcing-facility` is a US term
  (with "In de VS" and FDA); the Dutch page no longer uses it, but it stays for other pages that may.
- `src/i18n/nl/glossary/nl-tirzepatide.json` (new): `atherosclerosis` ("slagaderverkalking", aliases
  atherosclerose, aderverkalking, atherosclerotische hart- en vaatziekte). Grepped every glossary file first: no
  such id or term. I did not add `additional-monitoring` or `basal-insulin`: the semaglutide group added them
  in `nl-semaglutide.json` while I worked.

## 8. For the final sweep (changes needed in files I do not own)

1. `src/data/sources/tirzepatide.yaml`, `zin-tirzepatide-obesity-assessment`: `accessed: 2026-10-20` →
   `2026-10-27` (re-read today by nl-care and by me; page modified 27 October 2026 08:26; planning unchanged).
   Same file, `fk-tirzepatide`: `accessed` → `2026-10-27` (re-fetched by nl-care, fact 58); its note's line on the
   NHG-Standaard Diabetes mellitus type 2 (2024) was not re-checked by the Dutch research.
2. `src/data/sources/semaglutide.yaml`, `cbg-glp1-position`: `accessed: 2026-10-20` → `2026-10-27` (fetched today;
   the quoted sentences are unchanged; nl-care: modified 3 March 2026).
3. `src/data/compounds/tirzepatide.yaml`, `names.brands: [Mounjaro, Zepbound]`: Zepbound is a US (and Canadian)
   brand that does not exist in the EU (eu-status fact 3). If the fact sheet's "Ook bekend als" shows brands on the
   Dutch page, consider a per-locale brand list or leave it as world context (the page text says Zepbound does
   not exist in the EU).
4. `src/data/compounds/tirzepatide.yaml`, product `mounjaro`: `label_url` is the English EPAR page. For Dutch
   readers the Dutch product information (`ema-pi-mounjaro-nl`,
   https://www.ema.europa.eu/nl/documents/product-information/mounjaro-epar-product-information_nl.pdf) or the
   Dutch EPAR page may be better; the field is shared by all locales, so this is the data owner's call.
5. `docs/STYLE-NL.md`: merge the terms of section 6.
6. Links to other groups' Dutch pages: `/nl/legal-routes/` (the brief's fixed anchors `#recept`, `#off-label`,
   `#artsenverklaring`, `#magistrale-bereiding`, `#klinisch-onderzoek`, `#zelf-invoeren`),
   `/nl/safety/sterile-technique/#wanneer-je-een-flacon-weggooit` (fixed anchor, brief item 3),
   `/nl/safety/product-risk/`, `/nl/talking-to-your-doctor/`, `/nl/legal/sport-and-doping/`, `/nl/legal/be/`
   (pages without anchors). The sweep's `check:html` should confirm the two fixed anchors exist once those pages
   are written.
7. `src/data/explainers.yaml` / `src/i18n/nl/explainers.json` (`glp1-class-hypo`): the Dutch step 5 says
   "Lukt slikken niet? Bel 112."; the page's stop item says "Wordt iemand suf of verward? Bel dan 112." Both are
   the faster site level; no change needed unless the medical reviewer chooses Thuisarts's level (question 4).

## Check (independent, 27 October 2026)

Independent fact-check and edit of `src/content/compounds/nl/tirzepatide.mdx`, `src/i18n/nl/glossary/nl-tirzepatide.json`,
`src/i18n/nl/glossary/tirzepatide.json` and this file. Read first: the brief (with "Added after step 1"), STYLE-NL,
CONTENT-GUIDE §1, §1a, §4.1, §5, §9, §11–13, `research/nl/{nl-care,nl-law,nl-help,eu-status}.md` with their fact-check
sections, `research/nl/status/tirzepatide.yaml`, the data file, `MANIFEST-compounds-a.md`. Fetched today with curl:
the Dutch product information (`ema-pi-mounjaro-nl`, PDF, pdftotext: section 1, 4.1, 4.3–4.6, 4.8, 5.1–5.3, the
leaflet's black-triangle sentence) and the CBG position page (`cbg-glp1-position`: the lower-BMI sentence, "een arts en
apotheker de behandeling begeleiden", "Het is onduidelijk wat erin zit …", "grijpen in als er illegale medicijnen
verkocht worden" all confirmed). No source was added, so there is still no `src/data/sources/nl-tirzepatide.yaml`;
no host was added to the allowlist (every host the page's sources use is already on it, including farmanco.knmp.nl,
euclinicaltrials.eu, onderzoekmetmensen.nl, www.douane.nl, uitspraken.rechtspraak.nl and richtlijnen.nhg.org).
No English file touched; no build, commit or push.

**Science parity (English page of today vs Dutch page): confirmed, nothing to restore.** All 23 study ids of the data
file have a Dutch finding and limitation; the 7 mechanism steps keep kind and level (binding/human, binding/in-vitro,
signal/in-vitro, cellular/human, tissue/animal, tissue/human, effect/human); 26 `<Claim>`s with the same levels (9
animal, 9 human-controlled, 3 human-limited, 2 established, 2 in-vitro, 1 hypothesis); the 7 `<KeyNumber>`s and the
`<TimeStrip>` have the same values and sources; a number-by-number comparison of both files found no science number
missing (the only numbers that left are dates, BMI thresholds, amounts and section numbers of the US/UK/CA/AU framing).
Every English cite id that is not on the Dutch page is US/UK/CA/AU framing and is listed in §3 above (checked one by
one). The English TL;DR's "about 15 to 21%" is not in the Dutch TL;DR (it stays in the mechanism step and the first
key number, with its trial and placebo figure): deliberate, for the advertising test; see concern 1.

### Changes made (page, before → after, why, source)

| # | Where | Before | After | Why | Source |
|---|---|---|---|---|---|
| 1 | evidence, OSA fold | "In de EU staan deze resultaten sinds december 2024 in de productinformatie" | the EMA finished its assessment in December 2024; no separate indication; the results are in the product information | the CHMP outcome was 12/13 December 2024, the Commission decision 14 February 2025: the label did not change in December 2024 | `ema-2024-mounjaro-osa-outcome`, `ema-mounjaro-procedural-steps-archive` (II/0027), `ema-pi-mounjaro-nl` 5.1 |
| 2 | evidence, HFpEF | "zette de gegevens in januari 2026 in de productinformatie" | assessment finished in January 2026, no separate indication; the data are in the product information | opinion date is not the label date; the current SmPC has the HFpEF data | `ema-2026-mounjaro-hfpef-outcome`, `ema-pi-mounjaro-nl` |
| 3 | evidence, SURPASS-CVOT | "In juni 2026 kwamen de resultaten in de Europese productinformatie" | assessment finished in June 2026; no separate indication because type 2 diabetes covers it; the results are in the product information | as 1–2; the SmPC read today has SURPASS-CVOT in 4.8 and 5.1; the Union Register shows no decision for EMA/VR/0000310637 | eu-status fact 17, `ec-union-register-mounjaro` note, `ema-pi-mounjaro-nl` |
| 4 | regulatory, EU fold | "zette het EMA de studieresultaten in de productinformatie" (with three dates) | "beoordeelde het EMA nieuwe studies. Er kwam geen aparte indicatie bij, maar de resultaten staan nu in de productinformatie." | same correction | same sources + `ema-pi-mounjaro-nl` |
| 5 | regulatory, status fold | "De statussen zijn gecontroleerd op 27 oktober 2026." | NL and EU checked 27 October 2026, sport on 20 October 2026 | the WADA row has `as_of: 2026-10-20` | data file |
| 6 | what-it-is Compare; harm reduction | "soms zit er helemaal geen werkzame stof in" | "misschien zit er helemaal geen werkzame stof in" | the EMA/HMA text says they "may not contain the claimed active substance at all": "soms" overstated it | `ema-hma-2025-09-illegal-glp1` |
| 7 | harm reduction | "het EMA en de Europese medicijnautoriteiten"; "Ze gaan vaak via nepwebsites en sociale media" | "het EMA en de hoofden van de nationale medicijnautoriteiten in Europa (HMA)"; "vaak via nepwebsites verkocht en op sociale media aangeprezen" | who issued it; closer to "sold via fraudulent websites and promoted on social media" | `ema-hma-2025-09-illegal-glp1` |
| 8 | fake pens fold | "De IGJ zegt: gebruik zulke middelen niet …" | "De IGJ zegt: heb je medicijnen online gekocht? Gebruik ze dan niet, en neem contact op met je arts of apotheek." | the IGJ's advice is about medication bought online ("Hebt u medicatie online gekocht? Gebruik die niet …") | nl-help fact 28a, `igj-2026-10-stolen-medicines` |
| 9 | what-it-is, pens fold | "Elk goedgekeurd tirzepatide-product in Nederland is een kant-en-klare oplossing van Mounjaro" (GIB only) | "Alle goedgekeurde producten met tirzepatide in Nederland zijn Mounjaro, en dat is altijd een kant-en-klare oplossing, geen poeder." + `ema-pi-mounjaro-nl` | the "oplossing voor injectie" wording is the SmPC's section 1; the GIB search shows the 18 lines | `cbg-gib-search-tirzepatide-2026-10-27`, `ema-pi-mounjaro-nl` |
| 10 | harm reduction, legal route | "Meestal is dat je huisarts of een specialist, zoals een internist." | "Die arts kan je huisarts zijn, of een specialist zoals een internist." | "meestal" has no source | nl-care facts 3, 8 |
| 11 | harm reduction, legal route | "… Vertel je huisarts daarom welke medicijnen je gebruikt. Je huisarts kan helpen met controles die bij jou passen." | last sentence removed | it contradicted the sentence before: NHG situation 6, "De huisarts draagt geen verantwoordelijkheid voor periodieke controles bij elders verkregen medicatie" (the GP helps with side effects, which the page keeps) | `nhg-2025-gewichtsreducerende-medicatie`, nl-care fact 12 |
| 12 | NHG paragraph | "wie minstens een jaar een GLI deed en daarmee niet genoeg afviel" | "… en daarmee 10% of minder afviel" | the standard's own threshold | nl-care fact 64, `nhg-standaard-obesitas-2025` |
| 13 | regulatory Compare, weight column | cites `zin-tirzepatide-obesity-assessment,fk-tirzepatide` | `zin-tirzepatide-obesity-assessment,nl-regeling-zorgverzekering-bijlage-2-glp1` | the FK copy (accessed 20 October; its note carries the NHG diabetes advice that was not re-checked) only shows "Bijlage 2"; the Regeling itself (read 27 October) shows item 194 is for type 2 diabetes only. `fk-tirzepatide` is no longer cited on the Dutch page | nl-care facts 57–58 |
| 14 | who-should-not-use-it, MTC/MEN 2 | "De Europese productinformatie noemt het niet." | "… noemt dit niet als reden om het niet te gebruiken." | the SmPC 4.3 lists only hypersensitivity; 5.3 does describe the rat C-cell tumours, so "noemt het niet" was too broad | `ema-pi-mounjaro-nl` 4.3, 5.3 |
| 15 | thyroid fold | "noemt een persoonlijke of familiegeschiedenis van medullair schildkliercarcinoom of MEN 2 als reden om het niet te gebruiken" | the same, as "als jij of iemand in je familie …", with both terms explained in plain words | B1 rule 7 (first use) | STYLE-NL §1 |
| 16 | `indications.mounjaro` | type 2 diabetes line without the treatment place; "met een BMI van 30 of meer" | adds "als enig middel als metformine niet geschikt is, of naast andere medicijnen voor diabetes" and "een BMI bij de start" | the Dutch SmPC 4.1 wording ("als monotherapie wanneer metformine ongeschikt wordt geacht … in aanvulling op andere geneesmiddelen"; "aanvankelijke BMI") | `ema-pi-mounjaro-nl` 4.1 |
| 17 | evidence, after the key numbers | side effects named, no contraindication | adds "Ben je overgevoelig (allergisch) voor tirzepatide of voor een van de andere stoffen in het middel? Dan mag je het niet gebruiken." | advertising test (brief item 1): name the main side effects and contraindications wherever an effect is named | `ema-pi-mounjaro-nl` 4.3 |
| 18 | reimbursement fold, last paragraph | "Deze kloof heeft gevolgen, en de redenen zijn ook echt. Er is een goedgekeurd medicijn voor gewichtsbeheersing met grote studies erachter, maar wie het niet zelf kan betalen, krijgt het niet." | "Dat het basispakket Mounjaro voor gewichtsbeheersing niet vergoedt, heeft gevolgen: wie het niet zelf kan betalen, krijgt het niet. … Daar staan de redenen van het Zorginstituut tegenover." | advertising test: "met grote studies erachter" is praise in a sentence about access; calque "de redenen zijn ook echt" | brief item 1; `zin-tirzepatide-obesity-assessment`, `zin-2025-obesity-staged-approach` |
| 19 | TL;DR "Werkt het?" | "Ja, voor bloedsuiker en gewicht. Na stoppen …" | "Ja, voor bloedsuiker en gewicht, in grote studies. Na stoppen …" | the evidence level goes with the effect (brief item 1); same as the Lead | — |
| 20 | TL;DR "Slik je de pil?" and the pill bullet | "Vraag je arts naar extra bescherming. Het advies verschilt per land." | "Vraag je arts of je extra bescherming nodig hebt. De adviezen verschillen." | the reader's label (SmPC 4.5) says no change is needed, the US/UK advise a barrier method and the EMA is reviewing the text: "naar extra bescherming" presented one side as the answer, "per land" is not the reader's frame | `ema-pi-mounjaro-nl` 4.5, `ema-chmp-2026-10-agenda` |
| 21 | TL;DR "Waarvoor is het goedgekeurd?" | "… of overgewicht met een ziekte." | "… of overgewicht met bijkomende gezondheidsproblemen." | the indication needs a weight-related condition, not any disease; the CBG's own plain wording | `cbg-glp1-position` ("een BMI vanaf 27 met bijkomende gezondheidsproblemen") |
| 22 | stop callout | allergic: "Bel 112."; infection: "Bel direct je huisarts of de huisartsenpost." | "Bel direct 112."; "Bel direct je huisarts. Is de praktijk dicht? Bel dan de huisartsenpost." | the fixed phrases of STYLE-NL §5.1 and brief item 2 | — |
| 23 | mechanism step 1 | "Daarom spuit je het 1 keer per week." | "Daarom wordt het 1 keer per week gespoten." | a mechanism step must not read as an instruction to the reader | CONTENT-GUIDE §1 |
| 24 | `studies.surmount-osa.limitation` | "in studie 2 stopte het ademhalingsapparaat een week voor de meting" | "in studie 2 stopten de deelnemers een week voor de meting met hun ademhalingsapparaat (CPAP)" | meaning (the participants stopped their device; it did not stop) | English page |
| 25 | `studies.summit.limitation` | "het EMA wist niet zeker" | "het Europees Geneesmiddelenbureau (EMA) wist niet zeker" | the study table renders before the body's first mention | STYLE-NL §2.7 |
| 26 | WADA paragraph | "de dopinglijst van 2026" … "Het Wereld Anti-Doping Agentschap (WADA) nam het …" | "de dopinglijst van het Wereld Anti-Doping Agentschap (WADA) van 2026" … "WADA nam het …" | STYLE-NL §2.4 ("de dopinglijst van WADA") and §2.7 | — |
| 27 | `lede`, `glance.main_risk` | "zijn anders"; "Problemen met alvleesklier en galblaas zijn zeldzamer." | "zijn niet hetzelfde"; "Alvleesklier- en galblaasproblemen komen minder vaak voor." | meaning of the English; "zeldzaam" is the leaflet's word for "zelden", while these effects are "soms"; same words as the risks Lead | `ema-pi-mounjaro-nl` 4.8 |
| 28 | whole page and frontmatter (about 45 places) | "vijf dagen", "vier jaar", "twee receptoren", "drie doses", "Alle zeven open vragen", "twee kanten op" … | "5 dagen", "4 jaar", "2 receptoren", "3 doses", "Alle 7 open vragen", "in 2 richtingen" (sentence starts and "twee derde" kept in words) | STYLE-NL §3: digits from 2 up | — |
| 29 | B1 rewrites | Bijlage-2 route (1) in one 30-word sentence; "Steeds vaker worden … aangeboden"; "grijpt in als er illegale medicijnen worden verkocht"; antibodies ("Er werd geen effect … gevonden"); thyroid sentence ("bij een blootstelling tot ongeveer die bij mensen"); the Canadian warning in one long sentence; harm-reduction intro in one list sentence; "Tirzepatide raadt de standaard af" | split, active voice, main clause first | STYLE-NL §1 rules 1–4 | — |
| 30 | off-label sentence | "een lager BMI" | "een lagere BMI" | as the CBG writes it | `cbg-glp1-position` |
| 31 | description | "dat twee receptoren …" | "dat 2 receptoren …" | §3 | — |

Checked and left as they were (all confirmed against the research of 27 October): EU dates (15 September 2022;
11 December 2023; 22 January 2026), holder, one MA for pens/vials/KwikPen, no other EU tirzepatide medicine, no
Zepbound in the EU, additional monitoring (list and SmPC; the EMA JSON conflict followed as eu-status §4.4 says),
the pending pill variation (unknown outcome), warfarin signal closed in April 2026, lithium class signal EPITT 20275
open, no shortage (EMA catalogue, Farmanco); prescription only and supply (Gnw art. 61; CBG "alleen op recept
verkrijgbaar"; online without prescription "mag volgens de wet niet"); zelf invoeren (traveller rule, a parcel from
outside the EU not covered, a "research" vial not importable even for own use under both readings, nl-law facts 38–43;
the unresolved intra-EU parcel point is left out); Bijlage 2 item 194 (18+, type 2 diabetes, three routes, version of
6 October 2026); weight management not reimbursed and the Zorginstituut planning (dossier March 2026, WAR 5 October
2026, consultation expected early November 2026, advice date unknown); liraglutide and naltrexon/bupropion under
strict conditions; eigen risico € 385 (2026) and € 400 (from 1 January 2027, fact-check correction); GLI (2 years,
no eigen bijdrage, no eigen risico, BMI criteria); NHG-Standaard Obesitas (dates, thresholds, recommended medicines,
tirzepatide "wordt afgeraden", "facultatief", referral); Thuisarts on GPs who do or do not prescribe; ZIN cost figures;
IGJ internet prescribing; off-label (art. 68, IGJ, CBG); artsenverklaring and magistrale bereiding not fitting; Lareb
(also for products not from a pharmacy); a doubtful website to the Landelijk Meldpunt Zorg (nl-help fact 27); a
suspected fake pharmacy pen to the pharmacist (nl-help fact 28, our reading, already flagged in §5 question 7); the
Belgian line; SYNERGY-Outcomes "in Nederland gestart op 22 september 2026" (no recruitment claim, no site, as the
fact-check requires); the stop-callout levels (pancreatitis and dehydration "bel direct", as the English "urgent care";
low sugar with confusion 112, faster than Thuisarts, kept as nl-help fact 17 allows). Anchors: `/nl/legal-routes/`
has `## Recept`, `## Off-label`, `## Artsenverklaring`, `## Magistrale bereiding`, `## Klinisch onderzoek`,
`## Zelf invoeren`; `/nl/safety/sterile-technique/` has `## Wanneer je een flacon weggooit` (both files read). No link
to `/en/` or to a US/UK/CA/AU legal page. No commerce word in any title, heading, Lead question, fold title, figure
title, label or link text (also STYLE-NL §7's list). No "u". Glossary: both files checked (no id or alias clash with
any other Dutch glossary file; definitions B1 and under 400 characters; `combined-lifestyle-intervention` matches
`zin-gli-zvw`).

Validation after the changes: `npx tsx scripts/validate-content.ts --only compounds/nl/tirzepatide` → 0 errors,
0 warnings (`--only tirzepatide`: the only 4 warnings are the English page's inline reporting links, not ours);
`npx tsx scripts/check-locale-residue.ts --only compounds/nl/tirzepatide --details` → 0 error/frame hits, 0 warn hits
(also 0 for both glossary files).

### Remaining concerns for the reviewer

1. **Advertising test, legal reviewer:** the page keeps comparative results against semaglutide and dulaglutide
   (SURPASS-2, SURMOUNT-5, the receptor table "een grotere daling … dan met GLP-1-medicijnen"), each with design,
   funding and "Geen van beide laat zien welk middel bij een bepaald persoon past". Informative, but for a prescription
   medicine this is where a court would look first. The TL;DR keeps "Ja, voor bloedsuiker en gewicht, in grote studies"
   with the regain line, and no percentage.
2. **World context, legal reviewer:** besides the one marked line in `what-it-is` (US approval dates, Zepbound), the page
   keeps the US date in `grade_rationale`, the US cardiovascular indication of August 2026, Canada's withdrawn HFpEF
   request and the US compounding shortage (as background to the FDA's 730 reports). All are evidence the English page
   has and are marked, but the brief asks for world context "once and short".
3. **SYNERGY-Outcomes** (retatrutide is unauthorised): one neutral sentence; flag kept from §5 question 6.
4. **Online prescribing sentence** ("Krijg je het van een andere arts dan je huisarts, bijvoorbeeld na een consult via
   internet?"): factual and names no clinic, but it names the online route; §5 question 5 stays open.
5. **The pill:** TL;DR and bullet now say "Vraag je arts of je extra bescherming nodig hebt. De adviezen verschillen."
   If the EMA adopts EMA/VR/0000340438 (SmPC 4.5/4.6), rewrite both lines and the fold from the new SmPC.
6. **STYLE-NL §3 digits:** applied on this page ("2 receptoren", "5 dagen"); other Dutch compound pages mix words and
   digits ("drie receptoren", "vier jaar" on peer pages), so the final sweep should make the site consistent one way.

### For the final sweep (additions to §8)

9. `src/data/sources/bpc-157.yaml`, `ema-medicines-json`: the note describes only the BPC-157 search (accessed
   20 October); the Dutch tirzepatide page cites it for "no other EU tirzepatide medicine" and "no Zepbound in the
   EU" (eu-status re-downloaded the JSON on 27 October: one tirzepatide record). Consider updating `accessed` and the
   note, or a dataset note that the link opens the whole JSON (CONTENT-GUIDE §11, "The link must show the claim").
10. `src/data/sources/semaglutide.yaml`, `cbg-glp1-position`: re-read again today by this check (quotes unchanged):
    `accessed` → 2026-10-27 (as §8 item 2).
11. `src/data/sources/safety-b.yaml`, `igj-2026-10-stolen-medicines` (accessed 22 October): nl-help registered the same
    page as `igj-2026-10-gestolen-medicijnen` (re-read 27 October), which is not in `src/data/sources/`; keep one id.
12. `src/data/sources/tirzepatide.yaml`, `ema-mounjaro-procedural-steps` and `-archive`, `ema-2024-mounjaro-osa-outcome`,
    `ema-2026-mounjaro-*-outcome`: `accessed` 2026-10-20; confirmed by the eu-status fact-check on 27 October.
