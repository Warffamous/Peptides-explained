# Manifest: compounds-b (English refocus, 24 October 2026)

Pages: tesamorelin, CJC-1295, ipamorelin, hexarelin (`src/content/compounds/en/<slug>.mdx`), and the glossary files
`src/i18n/en/glossary/tesamorelin.json` and `ipamorelin.json`. Everything below was European framing on the English
pages and is cut from them. The full text is in `git show nl-source-2026-10-23:src/content/compounds/en/<slug>.mdx`
(the line numbers below are lines of that file) and in `research/for-nl-site/snapshot-2026-10-23/content/compounds-en/<slug>.mdx`;
the glossary entries in `git show nl-source-2026-10-23:src/i18n/en/glossary/<file>.json`.

Nothing was cut from the data files: the EU, NL, DE and BE rows of `src/data/compounds/{tesamorelin,cjc-1295,ipamorelin,hexarelin}.yaml`
are unchanged (the components hide them on English). Re-check every legal and status fact before reuse on the Dutch site.

## Frontmatter `regulatory_notes` (removed from the English pages; text as it was)

| Page | Code | Text |
|---|---|---|
| tesamorelin | EU | "Application withdrawn on 21 June 2012; the CHMP's provisional view was that it could not be approved. No EU authorisation." |
| tesamorelin | NL | "Not authorised. Only possible through a named-patient exemption (artsenverklaring), which the IGJ decides on and can refuse." |
| tesamorelin | DE | "Not authorised. AMG § 73(3) lets a pharmacy import a medicine authorised abroad for one person, on prescription, in narrow cases." |
| tesamorelin | BE | "Not authorised. Art. 6quater of the 1964 Medicines Act allows narrow named-patient imports on prescription." |
| cjc-1295 | EU | "No authorised product and no record in EMA's medicines data (checked 22 October 2026)." |
| cjc-1295 | NL | "Not authorised; no product in the CBG database. Supplying an unauthorised medicine is prohibited (Geneesmiddelenwet art. 40)." |
| cjc-1295 | DE | "Not authorised (AMG § 21). The Anti-Doping Act names CJC-1295 and mod-GRF. The 2005 phase 2 trial had a German arm, which ended early." |
| cjc-1295 | BE | "Not authorised; the 1964 Medicines Act requires a national or EU licence, and none exists." |
| ipamorelin | EU | "No authorised product, and no record in EMA's medicines data (checked 22 October 2026)." |
| ipamorelin | NL | "Not authorised; no product in the CBG database. Supplying a medicine without authorisation is prohibited (Geneesmiddelenwet art. 40)." |
| ipamorelin | DE | "No EU authorisation, and no approval anywhere in ChEMBL. The Anti-Doping Act annex names it as a growth hormone secretagogue." |
| ipamorelin | BE | "Not authorised: the 1964 Medicines Act requires a national or EU licence. No EU licence exists, and ChEMBL records no approval anywhere." |
| hexarelin | EU | "Not authorised; no EMA record." |
| hexarelin | NL | "Not authorised. Supplying a medicine without a marketing authorisation is prohibited." |

## Tesamorelin (`src/content/compounds/en/tesamorelin.mdx`)

| Where (old line) | What it said | Cite ids that left the page |
|---|---|---|
| frontmatter `description` (4), `summary[2]` (8), `lede` (11) | "not approved in the EU"; "It is not approved in the EU or the UK. The EU application was withdrawn in 2012." | – |
| `glance.facts` "Approved for" (40–41) | "Extra belly fat in adults with HIV, in the US", sourced partly to the EMA withdrawal | (ema-egrifta-withdrawal stays on the page) |
| `grade_rationale.human_clinical` (43) | "Not authorised in the EU: the application was withdrawn in 2012." | – |
| What it is: Compare (140, 143) | Rows "Approved in the EU or the UK?" and "Legal to supply in the Netherlands?" (named-patient route; Geneesmiddelenwet art. 40) | igj-leveren-op-artsenverklaring, nl-gmw-art-40-handelsvergunning |
| "Why this page looks different" callout (158) | "authorised in the United States, but not in the EU, the UK or the Netherlands … an unauthorised product in Europe" | – |
| Regulatory: Lead (349) and Compare (351–358) | "Netherlands and the EU vs United States" grid: EU withdrawal and CBG database; Dutch named-patient exemption decided by the IGJ (Regeling Geneesmiddelenwet art. 3.17); supplying without authorisation forbidden | cbg-geneesmiddeleninformatiebank, nl-regeling-gnw-art-3-17 |
| Sport fold (370) | Tesamorelin named in the annex of Germany's Anti-Doping Act (Anti-Doping-Gesetz) | de-antidopg-anlage |
| "Two regulators, the same trials, two answers" (378–380) | The EMA committee's 2012 doubts (kept as evidence, marked) and "People in Europe with this kind of fat gain cannot get tesamorelin" (now UK and Australia; Canada no longer sold) | – |
| Fold "The Netherlands, Germany, Belgium and the United Kingdom" (384–398) | Netherlands: CBG lists no product; supply prohibited; artsenverklaring route, IGJ decides within eight weeks. Germany: AMG § 21 (no German or EU authorisation, checked in EMA data); AMG § 73(3) pharmacy import for one person. Belgium: 1964 Medicines Act; art. 6quater named-patient import. UK paragraph kept and expanded. | cbg-geneesmiddeleninformatiebank, nl-gmw-art-40-handelsvergunning, igj-leveren-op-artsenverklaring, nl-regeling-gnw-art-3-17, de-amg-21, ema-medicines-json, de-amg-73, be-medicines-law-1964, be-medicines-law-1964-art-6quater |
| Harm reduction, opening (494) | "In the Netherlands a doctor can only request it through the narrow named-patient route." | igj-leveren-op-artsenverklaring |
| Harm reduction, "The legal route" (519) | Dutch artsenverklaring and IGJ exemption; "Germany and Belgium have similar narrow routes" | igj-leveren-op-artsenverklaring, nl-regeling-gnw-art-3-17, de-amg-73, be-medicines-law-1964-art-6quater |
| Report side effects (565) | "In the Netherlands you can report a side effect to Lareb" | lareb-home |

Kept as evidence (marked `residue-ok`): the EMA committee's 2012 assessment (`ema-egrifta-withdrawal`) in the mechanism
step, the diagram cite, the unknowns list, the "Three regulators" fold, the eye-disease caution and the checks; and, as
history, why there is no UK licence (the 2012 EU-wide application would have covered the UK).

## CJC-1295 (`src/content/compounds/en/cjc-1295.mdx`)

| Where (old line) | What it said | Cite ids that left the page |
|---|---|---|
| `summary[1]` (7), Lead (333) | "not an approved medicine in Europe, the UK or the US" | – |
| What it is: Compare row "Approved as a medicine?" (134) | "Not in the EU, the UK or the US" | ema-medicines-json |
| Regulatory Compare (335–343) | "Netherlands and the EU vs United States" grid: no EU or Dutch authorisation (EMA and CBG data); Dutch law forbids supply; no EU or Dutch body has assessed it | ema-medicines-json, cbg-geneesmiddeleninformatiebank, nl-gmw-art-40-handelsvergunning |
| Fold "The European Union, the Netherlands, Germany, Belgium and the United Kingdom" (358–378) | EU: no marketing authorisation, no record in EMA data; tesamorelin appears there only as a withdrawn 2012 application; the FDA found no approved product in Belgium, Germany, the UK or elsewhere, none in the European Pharmacopoeia. Netherlands: CBG; Geneesmiddelenwet definition of a medicine and art. 40. Germany: AMG § 21; the Anti-Doping Act names CJC-1295 and mod-GRF (acquiring, possessing or bringing in more than a small amount for doping is prohibited; Dopingmittel-Mengen-Verordnung); the German arm of the 2005 trial ended early. Belgium: 1964 Medicines Act art. 6 § 1. UK paragraph kept and expanded. | nl-geneesmiddelenwet, nl-gmw-art-40-handelsvergunning, cbg-geneesmiddeleninformatiebank, de-amg-21, de-antidopg-anlage, de-antidopg-2, de-dmmv-2023, be-medicines-law-1964, ema-medicines-json |
| Callout "US decisions do not apply here" (381) | "… changes the legal position in the Netherlands or anywhere else in the EU" (now: the UK, Canada or Australia) | – |
| Clean injecting (573) | "In the Netherlands, side effects of any product can be reported to Lareb." | lareb-home |

Kept: the trial history sentence "with sites that included Germany" (a trial fact from the EU trial register, marked
`residue-ok: evidence`; `euctr-2005-003797-25` stays).

## Ipamorelin (`src/content/compounds/en/ipamorelin.mdx`)

| Where (old line) | What it said | Cite ids that left the page |
|---|---|---|
| `summary[0]` (6), Lead (361) | "not an approved medicine in Europe or the US" | – |
| What it is: Compare row (136) | "Not in the EU, the UK or the US" | ema-medicines-json |
| "Related medicines that did reach patients" (169) | Macimorelin "is authorised in the EU (as Ghryvelin, since 11 January 2019) as a single-dose test for growth hormone deficiency in adults" (now: the FDA approval of Macrilen, 20 December 2017, `fda-drugsatfda-macrilen`). The anamorelin refusal (EMA, 2017) is kept as evidence, marked. | ema-epar-ghryvelin |
| "Where the evidence is promising" (319) | "drugs that act on the same system have passed regulators: macimorelin as a diagnostic test" (cited to the EU EPAR; now to Drugs@FDA) | ema-epar-ghryvelin |
| Regulatory Compare (363–372) | "Netherlands and the EU vs United States" grid: no EU or Dutch authorisation; Dutch law forbids supply; EMA and Dutch records show no application; the July 2026 US vote changes nothing "here" | ema-medicines-json, cbg-geneesmiddeleninformatiebank, nl-gmw-art-40-handelsvergunning, nl-geneesmiddelenwet |
| Fold "The European Union, the Netherlands, Germany, Belgium and the United Kingdom" (387–400) | EU and member states: no EU authorisation; EMA data (incl. refused and withdrawn applications) hold no record; ChEMBL records no approval (kept). Netherlands: CBG; Geneesmiddelenwet art. 1 and 40. Germany: AMG § 21; the Anti-Doping Act annex names ipamorelin (§ 2(3)). Belgium: 1964 Medicines Act art. 6 § 1. Callout "The US vote does not apply here" (Netherlands, EU). UK: "the MHRA's product database could not be searched automatically" (now replaced by the MHRA search of 23 October 2026). | ema-medicines-search, ema-medicines-json, cbg-geneesmiddeleninformatiebank, nl-gmw-art-1-geneesmiddel, nl-gmw-art-40-handelsvergunning, de-amg-21, de-antidopg-anlage, de-antidopg-2, be-medicines-law-1964 |
| July 2026 vote bullets (425, 427) | "None of them is an approved medicine in the EU, the UK or the US … changes nothing in the EU or the Netherlands" (now the four countries, per CONTENT-GUIDE §1 element 5) | nl-geneesmiddelenwet |

Kept as evidence (marked): the anamorelin refusal (`ema-epar-adlumiz`); the laboratories "in Denmark, Germany and Norway"
that analysed seized products (evidence table row and product-quality fold).

## Hexarelin (`src/content/compounds/en/hexarelin.mdx`)

| Where (old line) | What it said | Cite ids that left the page |
|---|---|---|
| What it is: Compare row (97) | "No EU, Dutch or US approval found." | ema-medicines-json, cbg-geneesmiddeleninformatiebank |
| Regulatory Lead and Compare (148–157) | "Netherlands and the EU vs United States" grid: no EU or Dutch authorisation; Dutch law forbids supply | ema-medicines-json, cbg-geneesmiddeleninformatiebank, nl-gmw-art-40-handelsvergunning |
| Status fold (164) | "In Germany it is listed in the Anti-Doping Act, which forbids buying, possessing or bringing into the country more than a small amount for doping in sport." | de-antidopg-anlage, de-antidopg-2 |

The page's `description` is unchanged (it had no European framing).

## Glossary

| File | Entry | What it said | Now |
|---|---|---|---|
| `src/i18n/en/glossary/tesamorelin.json` | `chmp` (CHMP, Committee for Medicinal Products for Human Use) | "The European Medicines Agency's expert committee that assesses applications for human medicines and advises whether the EU should authorise them." (see_also ema, marketing-authorisation) | Removed: the English page no longer uses "CHMP" (it says "the medicines committee of the European Medicines Agency", marked as evidence). No other English file links to it. |
| `src/i18n/en/glossary/ipamorelin.json` | `macimorelin` | aliases Ghryvelin, Macrilen; "… It is approved in the EU and the US." | Alias Ghryvelin dropped; "The FDA approved it in 2017." |
| `src/i18n/en/glossary/ipamorelin.json` | `anamorelin` | "… The EU refused to approve it in 2017." | "In trials its effect on muscle was small." |
