# Notes: group melanotan-ii (Dutch site, 27 October 2026)

Page: `src/content/compounds/nl/melanotan-ii.mdx` (from `src/content/compounds/en/melanotan-ii.mdx` and
`src/data/compounds/melanotan-ii.yaml`). New files: `src/data/sources/nl-melanotan-ii.yaml` (2 sources),
`src/i18n/nl/glossary/nl-melanotan-ii.json` (1 term). `src/i18n/nl/glossary/melanotan-ii.json` was checked and needs
no change (see "Glossary"). Nothing else was edited; no build, commit or push.

Validator: `npx tsx scripts/validate-content.ts --only melanotan-ii` → 0 errors, 0 warnings on the Dutch files (the 5
warnings shown are on the English page: lede length and the four inline reporting links). Residue:
`npx tsx scripts/check-locale-residue.ts --only melanotan-ii --details` → 0 error, 0 frame, 0 warn hits (12 markers,
each on a world-context or evidence line).

## Method

`translation: { method: translated, from: en, review: pending }`. Same frontmatter fields, same components, same
`<Section>` order, the same 7 mechanism steps with the same `kind` and `level`, every one of the 24 study ids of the data
file with its Dutch `finding` and `limitation`, the same figures (2 `Compare` in what-it-is and risks, 2 `Diagram`,
3 `KeyNumber`, 1 `TimeStrip`, `Mechanism`, `StudyTable`, `RegulatoryTable`, `ProductCheck`, `WarningSigns`) and the same
folds. The regulatory section and the help, reporting and route parts of harm reduction were rewritten for the
Netherlands and the EU (brief: compound regulatory sections stay part of a `translated` page). `regulatory_notes` only
for EU, NL and WADA. No `indications` (the data file has no `authorised_products`; Scenesse is a different medicine and
correctly not a product of this compound: research/nl/status/melanotan-ii.yaml).

## What came back from the saved material (23 October), and the re-check

From `research/for-nl-site/MANIFEST-compounds-d.md` and the snapshot page:

| Saved item | Re-checked against | Used? |
|---|---|---|
| `regulatory_notes` EU and NL ("no record in EMA's medicines data"; "no CBG record"; Gnw supply ban) | eu-status fact 9, 10; status/melanotan-ii.yaml (as_of 2026-10-27) | Yes, reworded from the status file's suggested notes |
| Compare row "Approved in the EU?" (afamelanotide since 22 December 2014 for EPP; no EU bremelanotide product) | eu-status facts 7, 10; Dutch Scenesse SmPC section 9 (read today) | Yes |
| Fold "The EU, the Netherlands, …": EMA no record (also refused/withdrawn), afamelanotide and setmelanotide authorised but different; CBG no product; Gnw definition and supply ban | eu-status fact 9–10; nl-law facts 2, 4; `cbg-gib-search-status-2026-10-27` ("melanotan" returns only Scenesse) | Yes, plus: no application under evaluation, no orphan designation (eu-status fact 9) |
| "Dutch dermatologists have warned about it" (Habbema 2017); "a Dutch hospital" (Eijmael 2022, Gouda) | source notes (`habbema-2017-melanotan-review`: Leiden, Rotterdam, Bussum; `eijmael-2022-barbie-drug`: Groene Hart Ziekenhuis, Gouda) | Yes, as publication facts |
| Belgium: FAGG calls distribution illegal; insulin found | be-notes fact 18 (page live, 29 January 2013) | Yes, as one short "België" paragraph with a link to `/nl/legal/be/`, and as product evidence |
| "In the EU afamelanotide is prescribed only by specialist doctors in recognised centres" | Dutch Scenesse SmPC 4.2 ("specialisten in erkende porfyriecentra") | Yes |
| "bremelanotide … not authorised in the EU" | eu-status fact 7 | Yes |
| Report side effects to Lareb | nl-help facts 19, 22 | Yes, with the FAGG line for Belgium and `<JurisdictionCard code="NL" />` |
| "A GP or a dermatologist …" | STYLE-NL §2.5 (huisarts), glossary `dermatologist` | Yes: "je huisarts of een dermatoloog (huidarts)" |
| Setmelanotide "authorised in the EU since 16 July 2021 for obesity and hunger in some rare genetic and hypothalamic conditions" | Dutch Imcivree SmPC (read today) and `ema-epar-imcivree` | Yes, rewritten: approved since 16 July 2021; the indications as the current SmPC words them (the hypothalamic indication is not dated, because its EU date was not checked) |
| BfArM warning of 28 October 2010 | – | No: German (an `error` term on Dutch; Germany is not a Dutch-site jurisdiction) |
| "We found no specific warning about melanotan from the IGJ or the CBG online" | nl-law fact 27 only says the IGJ has no page about peptides; nothing in research/nl/ on a CBG melanotan page | No: left out (not re-confirmed; the CBG and IGJ site searches are script applications that could not be read today) |
| FDA 2016 debarment (`fr-2016-melanotan-debarment`) | – | No: not on the current English page either |

## Rewritten for the Netherlands

- **Regulatory section:** Lead "Is het legaal in Nederland?"; the four-country Compare became a Nederland | Europese Unie
  Compare (approved? / doorgeven of invoeren? / reclame?); the status fold with the Dutch S0 wording and the
  Dopingautoriteit; a fold "Nederland en de Europese Unie" (EMA data, Directive 2001/83 art. 6(1) and 87(1); CBG register;
  the Gnw definition, art. 40, art. 84; the Douane on peptides; Dutch publications; zelf invoeren with the #zelf-invoeren
  anchor; one Belgium paragraph); and a short world-context fold "Wat medicijnautoriteiten buiten de EU zeggen" (FDA
  Category 2 harms and the announced 2027 PCAC meeting with the §1 point-5 framing; MHRA, Health Canada and TGA in one
  paragraph, as evidence), with the legal callout "Een Amerikaans besluit verandert niets in Nederland".
- **Harm reduction:** the stop callout uses the Dutch help levels: priapism "Bel direct 112" (the shared
  `warning-signs.json` gives `priapism` the action `emergency`); racing heart and the brain signs "Bel 112"; a changing
  mole "Stop met melanotan II en maak een afspraak met je huisarts" (STYLE-NL §5.1, `thuisarts-moedervlek-niet-vertrouwen`).
  Skin checks by "je huisarts of een dermatoloog"; blood pressure via the huisarts (`thuisarts-hoge-bloeddruk`); the
  doctor-as-ally line of STYLE-NL §5.3; Lareb, the FAGG for Belgium and the NL card; leftovers to the apotheek or the
  kca (`apotheek-medicijnafval`) and a link to `/nl/safety/sharps-disposal/`.
- **Legal routes fold:** no approved product in NL or the EU; artsenverklaring needs a medical reason (IGJ: "Niet-medische
  redenen zijn geen argumenten"); compassionate use needs an application or running trials (none; no CBG programme);
  no trial in the Dutch registers (CTIS with the NL filter, OMON); afamelanotide's EU route (specialists in porphyria
  centres); bremelanotide US-only; all seven fixed anchors of `/nl/legal-routes/`.
- **Extra task (afamelanotide):** the distinction is kept and framed for the EU: the what-it-is Compare row "Goedgekeurd
  in de EU en Nederland?"; the molecule fold quotes the Dutch SmPC indication (4.1), says that an EU-wide approval applies
  in the Netherlands, gives the exceptional-circumstances status (with `<Term id="exceptional-circumstances-authorisation">`),
  the prescribing restriction (4.2) and, for the advertising test, the main side effects (4.8: headache 20%, implant-site
  reactions 21%, nausea 19%; anaphylaxis "soms"), the contraindications (4.3) and the skin-check and sun-protection advice
  (4.4). The `regulatory_notes.EU` line names it as a different peptide authorised since 22 December 2014.

## Citations dropped (page, cite id, why, what replaced it)

All on `compounds/nl/melanotan-ii`. Every other English cite id is kept.

| Cite id | Why it went | Replaced by |
|---|---|---|
| `usc-21-355` | US sale law (US framing) | `nl-gmw-art-40-handelsvergunning`, `eu-directive-2001-83` |
| `fda-pcac-2026-07-meeting` | Only supported "not on the July 2026 agenda" and the link to `/en/legal/us/` (not a Dutch route) | – (the 2027 meeting stays, with `fda-pcac-2027-early-announcement`) |
| `fda-personal-importation`, `fda-rpm-ch9-personal-importations` | US personal import route | `douane-medicijnen-reizen-2026`, `douane-invoer-geneesmiddelen-2026`, `nl-rbdha-2019-4817-postzending-eigen-gebruik`, `douane-hvgem-geneesmiddelen-h13-fysiek-toezicht-werkzame-stoffen` |
| `uk-hmr-2012-reg-46` | UK supply law | `nl-gmw-art-40-handelsvergunning` |
| `mhra-2021-foi-melanotan-ii` | UK classification history | – |
| `uk-opss-2026-08-delivery-report` | UK cosmetics market body | – |
| `mhra-products-search-bremelanotide` | Bremelanotide's UK status (four-country framing) | `ema-medicines-json`, `cbg-gib-search-status-2026-10-27` |
| `ca-noc-search-status-c-2026-10-23`, `ca-hc-pdl-2026-08-27-additions`, `au-artg-search-status-c-2026-10-23` | Afamelanotide's and bremelanotide's Canadian and Australian status (four-country framing) | `ema-epar-scenesse`, `ema-pi-scenesse-nl` |
| `ca-pdl-human`, `ca-food-and-drug-regulations`, `ca-cbsa-d19-9-1`, `ca-hc-gui-0116-personal-import`, `ca-hc-recalls-search-status-c-2026-10-23` | Canadian law, border and seizure notices | Dutch law and Douane sources above |
| `au-poisons-standard-2026-10`, `au-vic-dpcs-act-1981`, `au-nsw-ptg-act-1966`, `au-nsw-health-s4d`, `au-nsw-health-s4d-2026`, `au-tg-regulations-1990-sch-5-item-1`, `au-tga-personal-importation-scheme`, `au-customs-prohibited-imports-regs`, `au-tga-how-we-regulate-peptides` | Australian schedule, state possession law and import routes | Dutch law and Douane sources above (the 2018 scheduling stays as world context: `au-poisons-standard-2018-06`, `au-tga-2018-02-melanotan-ii-interim-decision`) |
| `au-tga-2026-05-melanotan-ii-infringement-notices` | Australian fines (in Australian dollars) | – |
| `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `au-tga-report-adverse-event` | Other countries' side-effect reporting | `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `lareb-home`, `fagg-melden-bijwerking-patient`, `<JurisdictionCard code="NL" />` |
| `ca-hc-recalls-database` (and `au-tga-2026-08-melanotan-ii-safety-alert` for this one point) | Canadian and Australian advice to take products to a pharmacy | `apotheek-medicijnafval` (`au-tga-2026-08-…` stays elsewhere on the page) |
| `nhs-moles` | UK health service mole advice (the reader's own GP advice exists) | `thuisarts-moedervlek-niet-vertrouwen` (so "or crusts", which only the NHS page said, left the checklist) |

**Kept as evidence or world context (marked):** the US rows of the what-it-is Compare, the FDA Category 2 harms, the 2027
PCAC announcement with the point-5 framing, the S0 paragraph's four-country register checks (they support "no regulator
approved it"), the MHRA reports (16, 2012–2022), Health Canada's seizure note, the 2018 Australian scheduling, the TGA's
spray test and its list of harms, `nhs-priapism`, `nhs-headaches`, `medlineplus-rhabdomyolysis` (no Dutch patient page
registered for priapism or headache), the US labels of Vyleesi and Imcivree.

**Added:** `ema-pi-scenesse-nl`, `ema-pi-imcivree-nl` (new, `src/data/sources/nl-melanotan-ii.yaml`); reused:
`ema-medicines-json`, `ema-under-evaluation-2026-10`, `ema-orphan-designations-json`, `ema-epar-imcivree`,
`eu-directive-2001-83`, `eu-regulation-726-2004`, `cbg-gib-search-status-2026-10-27`, `cbg-geneesmiddeleninformatiebank`,
`cbg-compassionate-use-list`, `nl-gmw-art-1-geneesmiddel`, `nl-gmw-art-40-handelsvergunning`,
`nl-gnw-art-84-85-advertising`, `nl-regeling-gnw-art-3-17`, `igj-qa-zonder-handelsvergunning`,
`igj-geneesmiddelenreclame-wat-is`, `douane-2026-08-illegale-online-handel-medicijnen`,
`douane-hvgem-geneesmiddelen-h7-vaststelling-geneesmiddel`, `douane-hvgem-geneesmiddelen-h13-fysiek-toezicht-werkzame-stoffen`,
`douane-medicijnen-reizen-2026`, `douane-invoer-geneesmiddelen-2026`, `nl-rbdha-2019-4817-postzending-eigen-gebruik`,
`ctis-nl-peptide-search-2026-10-27`, `omon-peptide-search-2026-10-27`, `dopingautoriteit-geneesmiddelen-controleren`,
`dopingautoriteit-vertaling-dopinglijst-2026`, `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `lareb-home`,
`fagg-melden-bijwerking-patient`, `thuisarts-moedervlek-niet-vertrouwen`, `thuisarts-spoed-wie-bellen`,
`thuisarts-verlamming`, `thuisarts-hoge-bloeddruk` (group pt-141's file), `apotheek-medicijnafval`.

Both new sources: the EMA's Dutch product information PDFs, fetched with curl today (HTTP 200), read with pdftotext;
dates from section 9 and from the EPAR pages ("Last updated" 07/10/2026 for Scenesse, 27/05/2026 for Imcivree). Host
`www.ema.europa.eu` is already allowlisted, so `config/link-allowlist.json` was not touched. No title or URL names a
company.

## UNRESOLVED points and how the page handles them

1. **Is a melanotan II product a "geneesmiddel" in Dutch law?** No court or authority has said so for melanotan II
   (nl-law §5.7: no Dutch ruling on the unauthorised peptides). The page says "Volgens onze lezing" (function test, art.
   1(1)(b); Customs' tests), and the Compare's detail points to that paragraph.
2. **Possession** ("in voorraad hebben", nl-law §5.1): "Of een paar flacons thuis al een voorraad zijn, zegt de wet niet
   duidelijk." The TL;DR says only that the law does not forbid use itself.
3. **Powder as medicine or active substance** (nl-law §5.4): written as a condition ("Ziet de Douane een poeder als
   werkzame stof …? Dan …"), with what follows from it (ch. 13).
4. **Whether S0 covers melanotan II** (nl-law §5.10: WADA does not say; ask the Dopingautoriteit): "Volgens onze lezing
   valt het onder S0", plus "twijfel je? Vraag het dan de Dopingautoriteit" and "a substance not in the app is not
   thereby allowed". The data row stays `prohibited` (unchanged; editor's call, see questions).
5. **National authorisations in other EU states** (eu-status §5.7): never "in geen enkel EU-land"; the S0 paragraph says
   "Andere landen hebben we niet gecontroleerd."
6. **A Dutch regulator warning about melanotan:** not established either way → left out.
7. **Intra-EU parcels** (nl-law §5.5): left out; the page says only what art. 40 forbids.
8. **The EU date of setmelanotide's hypothalamic-obesity indication:** not checked → the indications are given as the
   current SmPC words them, without dates.

## Advertising test (brief, "Added after step 1", item 1)

Every effect of melanotan II keeps its claim badge and its limits; no success stories, no "results", no before/after.
The two EU-authorised relatives are named with their Dutch SmPC indication and, where an effect is named, their main
side effects and contraindications (Scenesse: what-it-is fold and "Wat de biologie wel opleverde"; Imcivree: same fold
and the mole fold). Bremelanotide appears only as world context (US-only) and as evidence (its US label). No dose,
schedule, reconstitution, stack or seller; no commerce word in any title, heading, Lead question, fold title, figure
title, table head, label or link text ("verkopen" and "verkopers" occur only in body text and table cells where the fact
needs them; the products study says "drie online verkopers", never "webwinkels").

## Open questions for the reviewers

**Legal**

1. "Volgens onze lezing is een product met melanotan II … een geneesmiddel, ook als er 'alleen voor onderzoek' op staat":
   is that the right reading (function test), and is it fine to rest the Compare's "verboden" on it?
2. The Compare cell "verkopen, doorgeven en invoeren verboden, ook voor eigen gebruik": the own-use point applies to
   import (art. 40(2) has no own-use exception, nl-law fact 38). Wording acceptable?
3. The quote from the Douane's article ("Dit zijn experimentele middelen die op sociale media worden aangeraden"): the
   article body names a webshop; we quote only this sentence and register only the neutral-title page (as nl-law did).
4. Is quoting the trial registry's own English words ("This example interventional study record") fine on a Dutch page?

**Medical**

5. Priapism: the page says "Bel direct 112", following the shared warning-sign level (`emergency`). Thuisarts was not
   checked for priapism (nl-help fact 17: "the other items … English basis stays"). Should it be "bel direct je huisarts of
   de huisartsenpost" instead?
6. Scenesse side-effect percentages and contraindications in the what-it-is fold: enough, or too much detail for a page
   about another compound? (Included for the advertising test.)
7. Data: the WADA row is `prohibited` (S0, our reading). nl-law §5.10 says WADA does not settle it; keep, or `unclear`?
8. The "Wat de biologie wel opleverde" fold keeps the English balance ("not fantasy", "could have value" for a tested
   product): balanced enough under the 2026 case law, given it is about a hypothetical tested product, not melanotan II?

## Style terms (terms STYLE-NL lacks, and the word used)

| English | Nederlands used | Note |
|---|---|---|
| tan · to tan · tanning drug | bruine kleur · bruin worden · middel om bruin te worden | never "tan" or "tanning"; "kleur door melanotan" for "a melanotan tan" |
| sunbed · sunlamp | zonnebank · hoogtezon | |
| dermatologist | dermatoloog (huidarts) | glossary `dermatologist` |
| dermoscopy | dermatoscopie | glossary `dermoscopy` |
| pilot (phase 1) study | eerste studie (fase 1) | "pilotstudie" exists as a glossary term; we used plain words |
| crossover trial | cross-overstudie | glossary `crossover-trial` |
| in a dish | in een schaaltje | for cell-culture work in B2 text |
| conditioned taste aversion | (aangeleerde) afkeer van een smaak | glossary `conditioned-taste-aversion` |
| recognised porphyria centre | erkend porfyriecentrum | SmPC 4.2 wording |
| phototoxicity | fototoxiciteit | new glossary entry `phototoxicity` (nl-melanotan-ii.json) |
| exceptional circumstances (SmPC: "uitzonderlijke voorwaarden") | uitzonderlijke omstandigheden | STYLE-NL §2.4; the SmPC's phrase only in quotes |
| online shops (as sellers) | online verkopers | STYLE-NL §5.6 (never "webwinkels") |
| supply to others | doorgeven | as `/nl/legal/nl/` uses it |
| US label | de Amerikaanse productinformatie | STYLE-NL §2.4 |
| EU SmPC | de Europese productinformatie (de samenvatting van de productkenmerken, SmPC) | first mention; then "de productinformatie" |
| melanocytic naevus (SmPC side effect) | moedervlekken (melanocytaire naevus) | glossary `naevus` alias |

## Glossary

- `src/i18n/nl/glossary/melanotan-ii.json` (owned): read in full against the page; all 21 entries fit (terms, aliases with
  ’, B1 definitions, no seller words). No change. The English file's `debarment` has no Dutch entry and the Dutch page
  does not need it.
- New `src/i18n/nl/glossary/nl-melanotan-ii.json`: `phototoxicity` ("fototoxiciteit"; aliases fototoxisch, fototoxische,
  fototoxische reactie(s)); grepped all Dutch glossary files first: no such id, term or alias.

## For the final sweep (files I do not own)

1. `src/data/sources/nl-research-eu-status.yaml` → `cbg-gib-search-status-2026-10-27`: its link opens the "tesamorelin"
   search, while this page cites it for "a search for 'melanotan' returns only Scenesse". The title discloses this (so the
   validator's rule is met), but a separate id for the "melanotan" search would let the link show the claim.
2. `src/data/sources/shared.yaml` → `eu-directive-2001-83` still points at the 2022 consolidation (eu-status fact-check
   already asks to repoint it to `CELEX:02001L0083-20250101`; art. 6(1) and 87(1), cited here, are unchanged).
3. `src/data/sources/nl-pt-141.yaml` → `thuisarts-hoge-bloeddruk` is cited on this page too: keep it registered.
4. `src/data/sources/legal-a.yaml` → `eu-regulation-726-2004`: its note does not mention art. 13(1) (an EU-wide
   authorisation is valid in every member state), for which this page cites it (eu-status fact 37 checked the article).
   Add it to the note if wanted.
5. A Dutch patient page on priapism and on sudden severe headache (Thuisarts or a hospital) was not searched; if one is
   registered later, it can replace `nhs-priapism` and `nhs-headaches` here and on `/nl/safety/warning-signs/`.
6. `src/data/compounds/melanotan-ii.yaml`: no change needed. The WADA row (`prohibited`, S0) is an editor's call (question 7).
7. `src/data/heroes.yaml` / `src/i18n/nl/media.json`: the hero `dysplastic-nevus-micrograph` already has a Dutch alt
   text and caption; nothing to do.

## Check (independent, 27 October 2026)

Independent fact-check and edit of `src/content/compounds/nl/melanotan-ii.mdx`, `src/data/sources/nl-melanotan-ii.yaml`,
`src/i18n/nl/glossary/nl-melanotan-ii.json` and these notes, against the current English page and data file, the brief
(including "Added after step 1"), STYLE-NL, CONTENT-GUIDE §1, §1a, §4.1, §5, §9, §11, §12, the fact-checked research
(`research/nl/nl-law.md`, `eu-status.md`, `nl-help.md`, `be-notes.md`, `status/melanotan-ii.yaml`; the Fact-check sections
applied) and the merged data (`src/data/compounds/melanotan-ii.yaml`). Nothing outside this group was edited; no build,
commit or push; `config/link-allowlist.json` untouched (every host was already listed).

**Fetched today (27 October 2026):** the EMA's Dutch product information of Scenesse and of Imcivree (curl 200, pdftotext:
4.1, 4.2, 4.3, 4.4, 4.6, 4.8, sections 8 and 9 re-read word for word); the Scenesse and Imcivree EPAR pages (product
information "Last updated" 07/10/2026 and 27/05/2026; "The European Commission granted a marketing authorisation valid
throughout the European Union for Scenesse on 22 December 2014"); Thuisarts "Ik heb een moedervlek die ik niet vertrouw"
("Bel je huisarts als …"; "De huisarts stuurt je door naar de huid-arts (dermatoloog)"; last changed 2 December 2025);
apotheek.nl "Medicijnafval" ("Breng medicijnafval terug naar uw apotheek of naar een plek voor klein chemisch afval.
Bijvoorbeeld het milieuplein of de milieustraat in uw gemeente"; "Gooi medicijnen ook niet in de prullenbak"; reviewed
4 June 2025); the CBG list of approved compassionate-use programmes (modified 10 July 2026; no melanotan, afamelanotide or
Scenesse); ClinicalTrials.gov API for NCT07437560 (still RECRUITING, 60 participants, no results, brief summary still
"This example interventional study record"); the FDA PCAC early-announcement page (still "before the end of February
2027", melanotan II listed, no Federal Register notice yet, so the page's "Op 22 oktober 2026" sentence stays true);
thuisarts.nl/priapisme and /erectie (404) and the Thuisarts search for "priapisme" (no page found).

**Science parity:** every English `<Claim>` (7 animal, 4 human-controlled, 7 human-limited, 2 hypothesis, 4 in-vitro),
all 7 mechanism steps (same kind and level), all 24 study ids, the 3 KeyNumbers, 3 Compares, 2 Diagrams, the TimeStrip,
ProductCheck, WarningSigns and every number were compared one by one with the English page: same meaning and level. The
dropped English cite ids are all US/UK/CA/AU framing and are listed above; one was restored (change 32).

### Changes (page `compounds/nl/melanotan-ii` unless stated)

| # | Where | Before | After | Why | Source |
|---|---|---|---|---|---|
| 1 | TL;DR, pair 2 | q "Is het legaal in Nederland?" a "Nee. Verkopen, doorgeven en zelf invoeren zijn verboden. De wet verbiedt gebruik zelf niet." | q "Wat zegt de wet?" a "Volgens onze lezing zijn verkopen, doorgeven en zelf invoeren verboden. Gebruiken verbiedt de wet niet." | "Nee" to "is it legal?" overstated (use is not an offence), and the TL;DR must keep the body's "volgens onze lezing" (CONTENT-GUIDE §4.1: shorter must not mean stronger); the regulatory Lead already asks "Is het legaal in Nederland?" | nl-law facts 31, 33, 36, 38 |
| 2 | TL;DR, pair 1 | "Alle studies samen" | "Alle gepubliceerde studies samen" | parity with English "All published trials" (one registered trial exists) | dorr-1996, wessells-1998, wessells-2000; ctgov-nct07437560 |
| 3 | TL;DR, pair 5 | "door een arts" | "door je huisarts" | STYLE-NL §2.1 and §5.3: the huisarts is the first contact | STYLE-NL |
| 4 | lede | "Het maakt moedervlekken donkerder, geeft erecties en misselijkheid." | "Moedervlekken worden donkerder; erecties en misselijkheid komen voor." | "geeft" stated the effects as certain; English "can cause" (kept at 18 words) | English lede |
| 5 | glance.stop_signs 3 | "een aanval" | "schokken" | "een aanval" alone is ambiguous; STYLE-NL §2.5 (aanval met schokken) | STYLE-NL |
| 6 | regulatory_notes.EU | "Niet goedgekeurd in de EU: geen gegevens bij het EMA" | "Geen goedkeuring voor de hele EU: het EMA vermeldt geen product" | eu-status §5.7 (national authorisations in other member states not searched); "geen gegevens" reads as "no data" | eu-status fact 9, §5.7 |
| 7 | Lead what-it-is | "Een nagemaakte versie van een hormoon" | "Een kunstmatige kopie van een hormoon" | "nagemaakt" reads as counterfeit (STYLE-NL §2.4, namaak) | English "lab-made copy" |
| 8 | Compare what-it-is, detail | "gecontroleerd op 27 oktober 2026" | full names of EMA, CBG and FDA at their first mention; EMA and CBG 27 October, FDA 22 to 26 October 2026; world-context marker before the Compare | STYLE-NL §2.7 (full name at first mention); the US column was not checked on 27 October; residue warn on "FDA" | openfda-drugsfda-search-melanotan-2026-10-26 (26 October), fda-drugsatfda-* (22 October) |
| 9 | Molecule fold | "Het Europees Geneesmiddelenbureau (EMA) keurde het goed … omdat de ziekte zo zeldzaam is, waren niet alle gegevens over de voordelen te krijgen" | "De Europese Commissie keurde het goed op advies van het Europees Geneesmiddelenbureau (EMA) … onder meer omdat de ziekte zo zeldzaam is, waren niet alle gegevens over het medicijn te krijgen" | the Commission grants the authorisation; EPAR "in part due to"; Dutch SmPC "volledige informatie over dit geneesmiddel" | ema-epar-scenesse (page read today), ema-pi-scenesse-nl |
| 10 | Molecule fold | contraindications without hypersensitivity; "Ook blijven patiënten zich gewoon tegen de zon beschermen." | "Wie allergisch is voor de werkzame stof, …"; "Ook raadt ze aan dat patiënten zich gewoon blijven beschermen tegen de zon." | SmPC 4.3 lists hypersensitivity first; 4.4 is advice ("Er wordt aangeraden …") | ema-pi-scenesse-nl |
| 11 | Evidence fold title and text | "…, en wat de kloof kost"; "De kloof heeft een prijs:" | "Wat de biologie opleverde, en wat de kloof betekent"; "Die kloof heeft gevolgen:" | "kost" in a fold title and "prijs" are STYLE-NL §7 commerce words (the validator does not catch them) | STYLE-NL §7 |
| 12 | Same fold, Barnetson claim | "halveerde het meer dan het aantal zonverbrande cellen" | "daalde het aantal zonverbrande cellen … met meer dan de helft" | ambiguous word order | barnetson-2006-afamelanotide-photoprotection |
| 13 | Same fold, setmelanotide | indications without population | "bij volwassenen en kinderen", "een aangeboren fout in beide kopieën van het gen" | Dutch SmPC 4.1 (adults and children from 2 or 4 years; biallelic deficiency) | ema-pi-imcivree-nl (read today) |
| 14 | Registered-trial fold | 'staat op "werving"' | "Volgens de registratie zoekt ze nog deelnemers." | a translated status in quotes reads as a quote | ctgov-nct07437560 (API today: RECRUITING) |
| 15 | Lead regulatory | "Verkopen, doorgeven en invoeren zijn verboden. In de sport is het verboden." | "Volgens onze lezing zijn verkopen, doorgeven, invoeren en gebruik in de sport verboden." | the Lead was stronger than the body (geneesmiddel status: our reading; S0: nl-law §5.10) | nl-law §5.10, facts 31, 33 |
| 16 | Compare regulatory, NL row 2 | "verkopen, doorgeven en invoeren verboden, ook voor eigen gebruik" | "verkopen en doorgeven verboden. Invoeren ook, zelfs voor eigen gebruik." | the own-use point concerns import (writer's legal question 2) | nl-law fact 38 |
| 17 | Compare regulatory, detail | "Waarom de regels voor geneesmiddelen gelden, lees je hieronder." | "Dat de regels voor geneesmiddelen gelden, is onze lezing van de wet: hieronder lees je waarom." | the figure title states the ban plainly; the qualifier belongs next to it | as 15 |
| 18 | Status fold | "De statussen zijn gecontroleerd op 27 oktober 2026." | "De statussen voor Nederland en de EU …" | the WADA row is as of 22 October 2026 | src/data/compounds/melanotan-ii.yaml |
| 19 | Sport (WADA) | "die geen overheidsinstantie voor gezondheid heeft goedgekeurd voor gebruik bij mensen" | "die geen gezondheidsautoriteit van een overheid heeft goedgekeurd als medicijn voor mensen" | S0 says "for human therapeutic use" ("voor menselijk therapeutisch gebruik" in the Dopingautoriteit's translation) | dopingautoriteit-vertaling-dopinglijst-2026, wada-2026-list-en |
| 20 | EU paragraph | "In de EU is geen product met melanotan II goedgekeurd." | "Voor de hele EU is geen product met melanotan II goedgekeurd." | eu-status §5.7 | eu-status §5.7 |
| 21 | NL paragraph, Douane | "De Douane schrijft over peptiden naast afslankmiddelen:" | "Over andere peptiden dan afslankmiddelen schrijft de Douane:" | the Dutch was unclear (the article: "Naast afslankmiddelen zijn ook andere peptides populair") | douane-2026-08-illegale-online-handel-medicijnen (nl-law fact 27) |
| 22 | NL paragraph, Habbema | "de risico's van melanotan voor moedervlekken" | "… voor moedervlekken en melanoom" | the review covers mole changes and four melanoma reports | habbema-2017-melanotan-review (PMID 28266027) |
| 23 | Zelf invoeren | only the condition "Ziet de Douane een poeder als werkzame stof? …" | added "Of de Douane een flacon met poeder als medicijn of als werkzame stof ziet, is niet openbaar." | nl-law §5.4 is UNRESOLVED: write it as unknown | nl-law §5.4, fact 40 |
| 24 | World-context fold, 503A | "mogen apotheken in de VS het alleen op recept bereiden" | "Dan mogen apotheken in de VS het op recept bereiden, en meer niet." | the meaning had shifted (English: a listing "would only allow pharmacy compounding on prescription") | CONTENT-GUIDE §1 point 5 |
| 25 | Mole fold, setmelanotide | "noemt die moedervlekken (melanocytaire naevus) …"; "elk jaar … vóór en tijdens de behandeling" | "noemt ze moedervlekken (melanocytaire naevus) een zeer vaak voorkomende bijwerking"; "Vóór de behandeling en daarna elk jaar moet een arts de hele huid onderzoeken." | 4.8 lists naevus separately from the darkening; 4.4 wording | ema-pi-imcivree-nl (read today) |
| 26 | Fold title (sun) | "Waarom een kleur door melanotan geen zonbescherming is" | "Waarom je niet kunt rekenen op bescherming tegen de zon" | overstated: English "cannot be counted as", because nobody measured it | English page |
| 27 | Sun fold | "Ook met dat goedgekeurde medicijn blijven patiënten zich … beschermen." | "Ook bij dat goedgekeurde medicijn raadt de productinformatie aan dat patiënten zich gewoon blijven beschermen tegen de zon." | SmPC 4.4 is advice | ema-pi-scenesse-nl |
| 28 | Harm reduction, doctor paragraph and checklist 1 | "Je huisarts of een dermatoloog (huidarts) kan …"; "door je huisarts of een dermatoloog" | huisarts first; "Is meer onderzoek nodig? Dan stuurt je huisarts je door naar een dermatoloog (huidarts)."; "door je huisarts (of de dermatoloog naar wie die je doorstuurt)" | in the Netherlands the huisarts refers to the dermatologist | thuisarts-moedervlek-niet-vertrouwen (read today) |
| 29 | Checklist 5 | "De zonnebank geeft een eigen risico." | "De zonnebank is zelf ook een risico." | "eigen risico" is the insurance deductible (STYLE-NL §5.6), and the glossary id `eigen-risico` would have linked it | STYLE-NL §5.6 |
| 30 | Other checks, waste | "naar het klein chemisch afval van je gemeente, zoals bij medicijnafval. Gooi het niet bij het restafval, …" | "naar een plek voor klein chemisch afval in je gemeente, zoals de milieustraat. Gooi het niet in de prullenbak, de gootsteen of de wc." | the source's own words | apotheek-medicijnafval (read today) |
| 31 | Interactions | "er wordt minder naltrexon uit tabletten opgenomen"; "Dan kun je een reactie aan niets meer toeschrijven." | "het lichaam neemt dan minder naltrexon uit tabletten op"; "Dan weet je niet meer welk middel een reactie gaf." | STYLE-NL §1 rule 4 (no "er" with a passive); unclear calque | dailymed-vyleesi-label; vadner-2026-five-melanomas |
| 32 | Checklist 4 and the stop-callout source line | "… jeukt of bloedt." (`thuisarts-moedervlek-niet-vertrouwen` only) | "… jeukt, bloedt of een korstje krijgt." with `nhs-moles` restored as evidence | science parity: "crusts" is in the English list; Thuisarts gives the Dutch help step, the NHS page stays as evidence of the sign, as on `/nl/safety/warning-signs/` and `compounds/nl/tb-500` | nhs-moles, thuisarts-moedervlek-niet-vertrouwen |

New sources (`nl-melanotan-ii.yaml`): both entries checked against the documents read today (titles, EMA as author,
year 2026 from the "Last updated" dates, URLs 200, every quoted phrase in the notes found, EU/1/14/969/001,
EU/1/21/1564/0001-0002, 22 December 2014, 16 July 2021, the 4.8 percentages). No change needed. Glossary
(`nl-melanotan-ii.json`): `phototoxicity` is unique, B1, no seller words; its `see_also` exists. No change. The owned
glossary `melanotan-ii.json` was read: no change.

Validator (`--only melanotan-ii`): 0 errors; the 5 warnings are all on the English page (not owned). The Dutch files:
0 errors, 0 warnings (TL;DR within 85 words). Residue (`--only melanotan-ii --details`): 0 error, 0 frame, 0 warn.

### Remaining concerns for the reviewer

1. **Legal: "volgens onze lezing".** This page qualifies the geneesmiddel status (and so the sale and import ban) as our
   reading, in the body, the TL;DR and the Lead. Other Dutch compound pages (bpc-157, epitalon, kpv) state the ban
   plainly. nl-law facts 31 and 33 support the plain reading; no Dutch authority has said it for melanotan II. The final
   sweep should make the group pages consistent one way or the other.
2. **Priapism help level:** "Bel direct 112" follows the shared warning sign (`priapism`: `emergency`) and
   `compounds/nl/pt-141`. Thuisarts has no priapism page (checked today), so no Dutch GP source decides between 112 and
   "bel direct je huisarts of de huisartsenpost". Medical reviewer.
3. **UK and US patient pages kept as evidence of the signs:** `nhs-priapism`, `nhs-headaches`, `nhs-moles`,
   `medlineplus-rhabdomyolysis`. They are cited for what a sign means, never as a help route; replace them if Dutch
   pages are registered (final-sweep item 5 above).
4. **The "Het VK, Canada en Australië" paragraph** in the world-context fold (MHRA reports, the Health Canada seizure
   note, the 2018 Australian schedule) is five sentences: within "world context, short", but an editor may cut it to
   one.
5. **`cbg-gib-search-status-2026-10-27`** opens the tesamorelin search while this page cites the "melanotan" result
   (the title discloses it; final-sweep item 1). `eu-directive-2001-83` still points at the 2022 consolidation
   (final-sweep item 2).
6. **The 2027 PCAC sentence** is dated "Op 22 oktober 2026"; the FDA page was unchanged today. Re-check before
   publishing.
7. **The writer's open questions 1, 3, 4, 6, 7 and 8 stay open** (legal and medical review); question 2 is answered by
   change 16 and question 5 by concern 2.
