# European material cut from the English compound pages (group compounds-e, 24 October 2026)

Pages: `compounds/{mots-c,epitalon,semax,selank,thymosin-alpha-1,aod-9604,ss-31,nad-precursors}` and the glossary files
`src/i18n/en/glossary/stubs-a.json`, `stubs-b.json`. The full pre-refocus text of every page is in
`research/for-nl-site/snapshot-2026-10-23/content/compounds-en/<slug>.mdx` and in
`git show nl-source-2026-10-23:src/content/compounds/en/<slug>.mdx`; the glossary files in
`research/for-nl-site/snapshot-2026-10-23/i18n/en/glossary/` and `git show nl-source-2026-10-23:src/i18n/en/glossary/<file>`.
The data files' EU, NL, DE and BE rows are intact (the only data change, in the third run, swaps one US-row source in
`nad-precursors.yaml` under the seller rule). The third run (review, 26 October 2026) cut nothing European; this
manifest is unchanged by it apart from this sentence. The adversarial fact-check that followed (26 October 2026) also cut
nothing European; its fixes are logged in `research/refocus-notes/compounds-e.md` §7.

## Regulatory notes (frontmatter `regulatory_notes`), removed from all eight pages

| Page | Key | Text (verbatim) |
|---|---|---|
| mots-c | EU | "No authorised product, and no record in EMA's medicines data (checked 22 October 2026)." |
| mots-c | NL | "Not authorised; supplying an unauthorised medicine is prohibited by the Geneesmiddelenwet." |
| epitalon | EU | "No authorised product, and no record in EMA's medicines data (checked 22 October 2026)." |
| epitalon | NL | "Not authorised; supplying an unauthorised medicine is prohibited by the Geneesmiddelenwet." |
| epitalon | DE | "Not authorised; finished medicines need a licence under AMG § 21, and the FDA found no approved product in Germany." |
| epitalon | BE | "Not authorised; the 1964 Medicines Act requires a licence, and the FDA found no approved product in Belgium." |
| semax | EU | "No authorised product, and no record in EMA's medicines data (checked 22 October 2026)." |
| semax | NL | "Not authorised; supplying an unauthorised medicine is prohibited by the Geneesmiddelenwet." |
| selank | EU | "No authorised product, and no record in EMA's medicines data (checked 22 October 2026)." |
| selank | NL | "Not authorised; supplying an unauthorised medicine is prohibited by the Geneesmiddelenwet." |
| thymosin-alpha-1 | EU | "Authorised nationally in Italy (Zadaxin, as an add-on to flu vaccination in people with weak immune systems). No EU-wide authorisation, and none in the Netherlands." |
| thymosin-alpha-1 | NL | "Not authorised; supplying an unauthorised medicine is prohibited by the Geneesmiddelenwet." |
| aod-9604 | EU | "Not authorised. No EMA record and no European Pharmacopoeia monograph." |
| aod-9604 | NL | "Not authorised. Supplying a medicine without a marketing authorisation is prohibited." |
| ss-31 | EU | "Not authorised. EU orphan designations only (2021, 2022); no application under evaluation in October 2026." |
| ss-31 | NL | "Not authorised. Supplying a medicine without a marketing authorisation is prohibited, with narrow exceptions." |
| nad-precursors | EU | "No medicine. NR chloride is an authorised novel food for supplements (2020). NMN had a positive EFSA opinion in May 2026 but no EU authorisation yet." |
| nad-precursors | NL | "No medicine in the CBG database. EU novel-food rules apply; an injection is not a food under EU law." |

## Body text and figures cut, per page

Every source id below was cited only for the European statement it stood behind; it stays in `src/data/sources/`
(and, where a data row cites it, in the data file).

### mots-c
- **What it is, Compare row "Approved as a medicine anywhere?"**: "EMA lists no product, and it is not FDA-approved" (`ema-medicines-search`). Now four-country.
- **Regulatory, Compare "Netherlands and the EU | United States"**: the NL/EU column ("No EU or Dutch authorisation", `ema-medicines-json`, `cbg-geneesmiddeleninformatiebank`; "Dutch law forbids supplying a medicine without a marketing authorisation, with narrow exceptions", `nl-geneesmiddelenwet`; sport "Banned at all times, named in section S4"). Replaced by one row per country (US, UK, Canada, Australia); the sport line moved under the figure.
- **Fold "Status in each country, and in sport"**: "The CBG database lists no MOTS-c product." (`cbg-geneesmiddeleninformatiebank`).
- **Fold "The July 2026 US vote, point by point", last item**: "None of these is an approved medicine in the EU, the UK or the US … changes nothing in the EU or the Netherlands." (`nl-geneesmiddelenwet`). Now the four-country framing of CONTENT-GUIDE §1 element 5.

### epitalon
- **Study `vanhee-2015-illegal-products` (frontmatter `studies`)**: "A Belgian public-health laboratory identified epitalon …" now "A national public-health laboratory …"; the same change in the What-it-is paragraph ("A Belgian public-health laboratory has found it in illegal pharmaceutical preparations"). The paper (cite `vanhee-2015-epitalon-illegal`) stays; only the country word went.
- **What it is, Compare row "Approved as a medicine anywhere?"**: "The FDA found none in ten countries or in the EU" (`ema-medicines-search`). Now names Canada, Australia and the UK from the same FDA briefing.
- **Regulatory, Compare "Netherlands and the EU | United States"**: NL/EU column as for mots-c (`ema-medicines-json`, `cbg-geneesmiddeleninformatiebank`, `nl-geneesmiddelenwet`).
- **Fold "Status in each country, and in sport"**: the list of the FDA's ten countries named Belgium, Ireland, France, Norway, Germany, Spain and Italy "and none authorised in the EU"; "National law requires a licence in Germany, Belgium and the UK" (`de-amg-21`, `be-medicines-law-1964`; the UK half, `uk-hmr-2012-reg-46`, stays on the page); the WADA paragraph said "the FDA checked ten countries and the EU" (now "ten countries besides the US").
- **PCAC item 5**: as for mots-c (`nl-geneesmiddelenwet`).

### semax
- **Study `vanhee-2020-seized`**: "seized in Belgium" now "seized by the authorities".
- **Lede**: "Registered as nose drops in Russia, not in the EU. Its effects and safety are little studied."
- **What it is, Compare**: title "Semax is a Russian medicine. It is not approved in the EU, the UK or the US."; row "Approved in the EU, the UK or the US?" ("EMA lists no product", `ema-medicines-search`).
- **Fold "The molecule, and what a Russian registration means"**: "It is not an assessment by any EU, UK or US regulator. It does not make Semax legal to supply as a medicine in the Netherlands." (`nl-geneesmiddelenwet`). Now four-country (`usc-21-355`, `uk-hmr-2012-reg-46`, `ca-food-and-drug-regulations`, `au-tg-act-s19b-19d-offences`).
- **Regulatory, Compare "Netherlands and the EU | United States"** (title "It is not an approved medicine here …"): NL/EU column (`ema-medicines-json`, `cbg-geneesmiddeleninformatiebank`, `nl-geneesmiddelenwet`); the sport row (unclear, both columns) moved under the figure as one sentence.
- **Fold "Status in each country"**: "The CBG database lists no Semax product." (`cbg-geneesmiddeleninformatiebank`).
- **PCAC item 5**: as for mots-c (`nl-geneesmiddelenwet`).

### selank
- **Study `vanhee-2020-seized`** and the frontmatter stop-signs comment: "seized in Belgium" / "found in Belgium" now neutral. The evidence fold said "The only study from outside Russia we found is a Belgian laboratory analysis of seized products"; the risks fold "Belgian investigators had to test two unknown products"; both now without the country.
- **What it is, Compare**: title "Selank is a Russian anxiety medicine. It is not approved in the EU, the UK or the US."; row "Approved in the EU, the UK or the US?" ("EMA lists no product", `ema-medicines-search`).
- **Fold on the Russian registration**: "… It does not make Selank legal to supply as a medicine in the Netherlands." (`nl-geneesmiddelenwet`).
- **Regulatory, Compare "Netherlands and the EU | United States"** (title "It is not an approved medicine here, and it was not part of the 2026 US vote."): NL/EU column (`ema-medicines-json`, `cbg-geneesmiddeleninformatiebank`, `nl-geneesmiddelenwet`).
- **Fold "Status in each country"**: "The CBG database lists no Selank product." (`cbg-geneesmiddeleninformatiebank`).

### thymosin-alpha-1
- **Description, summary item 2, lede**: "approved in Italy and some non-EU countries, not in the Netherlands"; "Italy and some countries outside Europe use it as a medicine. The Netherlands does not."; "Approved in Italy and some non-EU countries, not in the Netherlands. A big sepsis trial found no benefit."
- **glance.facts row "Approved in"**: "Italy, and some countries in Asia and elsewhere" (`ema-orphan-thymalfasin-eu-3-02-110`, `fda-pcac-2024-thymosin-alpha-1-briefing`). Dropped because it duplicated the derived "Approved in" row of the fact sheet (Italy, India, Hong Kong from `national_authorisations`).
- **grade_rationale.human_clinical**: "approved in some countries outside Europe, such as India" now "in some other countries, such as India".
- **What-it-is Lead**: "It is a medicine in Italy and some other countries, not here."
- **What it is, Compare**: title "Approved in some countries, but not in the Netherlands or the US."; row "Approved in the Netherlands or the US?" ("The CBG lists no product", `cbg-geneesmiddeleninformatiebank`); the row "Approved as a medicine anywhere?" also cited `ema-orphan-thymalfasin-eu-3-02-110` (now the FDA briefing alone, which says the same about Italy).
- **Paragraph under it**: "An Italian approval is a national authorisation: it does not apply in the Netherlands. The EU gave it orphan status for liver cancer in 2002, which is not an approval." (`ema-orphan-thymalfasin-eu-3-02-110`).
- **Regulatory Lead and Compare**: "Not approved here. US advisers said no to copies made by pharmacies."; Compare "It is not a medicine you can get from a Dutch pharmacy in the usual way." with a Netherlands column ("The CBG lists no product. Italy's approval does not apply here", `cbg-geneesmiddeleninformatiebank`, `ema-orphan-thymalfasin-eu-3-02-110`; "Dutch law forbids supplying a medicine without a marketing authorisation, with narrow exceptions", `nl-geneesmiddelenwet`).
- **Fold "Status in each country"**: "EMA's medicines data hold no central authorisation." (`ema-medicines-json`).
- **Harm reduction, fold "The legal route, checks, and who should not use it"**: "In the Netherlands, a medicine authorised abroad can in rare cases be supplied for one named patient. The doctor signs a statement that no Dutch medicine fits. A pharmacy then asks the inspectorate, which decides." (`igj-leveren-op-artsenverklaring`). Replaced by the four-country treatment-routes paragraph.

### aod-9604
- **Study `vanhee-2014-seized`**: "A Belgian public-health laboratory identified AOD-9604 in unknown preparations seized by the authorities" now "A national public-health laboratory …"; risks fold "found in seized products in Belgium" now "seized products tested by a national public-health laboratory".
- **What it is, Compare row "Approved as a medicine?"**: "no EU record" (`ema-medicines-json`).
- **Fold "The molecule, and the 'GRAS' claim"**: "In the EU, food means something meant to be swallowed, and medicines are excluded, so a product meant for injection is not a food." (`eu-regulation-178-2002-food-law`).
- **Regulatory, Compare "Netherlands and the EU | United States"** (title "Not approved where we looked."): NL/EU column (`ema-medicines-json`, `cbg-geneesmiddeleninformatiebank`, `nl-gmw-art-40-handelsvergunning`; sport "Banned at all times, named in section S2").
- **Fold "Status in each country, and in sport"**: "In Germany it is listed in the Anti-Doping Act, which forbids buying, possessing or bringing into the country more than a small amount for doping in sport." (`de-antidopg-anlage`, `de-antidopg-2`). (The next sentence, "Australia controls it as a performance- and image-enhancing drug" (`fda-pcac-2024-aod9604-briefing`), is not European: it was replaced by the sourced Australian scheduling history in the new fold "The UK, Canada and Australia".)

### ss-31
- **Description, summary item 4**: "… approved on limited evidence; not in the EU."; "In bigger trials for other diseases it did not help. It is not approved in the EU."
- **What it is, Compare row "Approved for any use in the EU?"**: "No EU authorisation" (`ema-medicines-json`) for both columns. Now "Approved in the UK, Canada or Australia?".
- **Regulatory Lead**: "A prescription medicine in the US since 2025. Not approved in the EU or the Netherlands."
- **Fold "Status in each country, and in sport"**: "In the EU, elamipretide has orphan designations for Barth syndrome (2021) and a mitochondrial DNA disease (2022). That status supports development; it is not permission to sell." (`ema-orphan-elamipretide-eu-3-21-2430`); "No EU application was under evaluation in October 2026." (`ema-under-evaluation-2026-10`); "The Dutch medicines database lists no product, and Dutch law forbids supplying a medicine without a marketing authorisation, with narrow exceptions." (`cbg-geneesmiddeleninformatiebank`, `nl-gmw-art-40-handelsvergunning`). All three sources are still cited by the data file's EU and NL rows.
- **Structure**: the US TimeStrip, formerly the section's figure, is now in the fold "How the US approval happened, and what is still due"; the section's figure is a four-country Compare.

### nad-precursors
- **Description, summary item 3**: "… their legal status in the EU and US …"; "In the EU, NR may be sold in food supplements. NMN may not, yet."
- **glance.facts row "EU food status"**: "NR allowed in supplements; NMN not yet" (`eu-regulation-2020-16-nr`, `eu-union-list-novel-foods-2026-08-10`). Now "Rules for pills".
- **grade_rationale.independence**: "groups in Europe, North America and Asia" now "on three continents".
- **What it is, Compare** "Three close relatives, each with its own legal place in the EU." (detail "how it is treated in the EU"): row "Allowed in EU food supplements?" (NR authorised novel food since 2020, `eu-regulation-2020-16-nr`; NMN "EFSA judged it safe for adults in 2026, but it is not yet authorised", `efsa-2026-nmn-novel-food`, `eu-union-list-novel-foods-2026-08-10`; NAD+ "Not on the EU list of authorised novel foods; we found no EU decision on it"); row "An approved medicine in the EU?" (`ema-medicines-json`, `cbg-geneesmiddeleninformatiebank`). Both rows are now four-country.
- **Fold "Why the category confusion matters"**: "In the EU, NR as a food supplement was assessed by EFSA for swallowing, within limits, for adults." (`eu-regulation-2020-16-nr`; `efsa-2019-nr-novel-food` stays as evidence) and "Under EU law, food is something meant to be swallowed, so a product meant for injection or a drip is not a food." (`eu-regulation-178-2002-food-law`).
- **Regulatory Lead and Compare**: "NR pills are legal EU supplements. NMN is not yet, and no NAD+ injection is an approved medicine."; Compare "Food rules apply to pills. Neither the EU nor the US has approved any as a medicine." with a "Netherlands and the EU" column (medicine: `ema-medicines-json`, `cbg-geneesmiddeleninformatiebank`; NR in food supplements since 2020: `eu-regulation-2020-16-nr`; NMN not yet authorised: `eu-union-list-novel-foods-2026-08-10`; drips in sport). Now one row per country.
- **Fold "Status in each country, and in sport"**: "In the EU, only novel foods on the EU list may be sold." (`eu-regulation-2020-16-nr`); "EFSA gave a positive opinion on NMN in May 2026, but EFSA only advises; the Commission had not added NMN to the list by its 10 August 2026 version, and we found no later act." (`efsa-2026-nmn-novel-food`, `eu-union-list-novel-foods-2026-08-10`; EFSA's opinion stays on the page as safety evidence); "NMN also has an EU orphan designation as a possible medicine for sickle cell disease." (`ema-orphan-designations-json`).
- **ProductCheck extra line**: "Check whether it is meant to be swallowed or injected. In the EU, food law covers only what is swallowed." (`eu-regulation-178-2002-food-law`).

## Glossary (`src/i18n/en/glossary/`)

| File | Id | What changed | Old text (verbatim) |
|---|---|---|---|
| stubs-a.json | national-marketing-authorisation | definition made neutral; `see_also` "centralised-procedure" (an EU term) removed | "A licence to sell a medicine given by one country's regulator. It applies in that country only, not in the rest of the EU." |
| stubs-b.json | cosmetic-product | "In EU law," removed; `see_also` "cosing" removed | "In EU law, a product put on the outside of the body, such as skin, hair or lips, to clean, protect or change its look. Anything injected is not a cosmetic." |
| stubs-b.json | cosing | **entry removed** (no English page uses CosIng any more) | `{ "term": "CosIng", "aliases": [], "definition": "The European Commission's public database of cosmetic ingredients and the rules that apply to them.", "category": "regulation", "see_also": ["cosmetic-product"] }` |
| stubs-b.json | nicotinamide-mononucleotide | definition made country-neutral | "A molecule one step before NAD+ in the cell. It is sold as a supplement, but in the EU it is not yet authorised as a food." |
| stubs-b.json | novel-food | definition rewritten for Great Britain; alias "Union list of novel foods" removed | "In EU law, a food or ingredient that was not commonly eaten in the EU in the past. It may only be sold after a safety check and an EU authorisation." |
| stubs-b.json | efsa | definition without EU framing (the alias "European Food Safety Authority" stays: EFSA is cited as safety evidence) | "The EU agency that checks the safety of foods and food ingredients. It gives advice; the European Commission decides." |
| stubs-b.json | dietary-supplement | "US and EU" now "US and the UK", plus Canada and Australia | "A product swallowed to add nutrients, such as vitamins, to the diet. In the US and EU it is regulated as a food, not as a medicine." |
