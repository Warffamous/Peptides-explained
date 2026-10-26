# Manifest: compounds-d (English refocus, 24 October 2026)

Pages: GHK-Cu, melanotan II, PT-141 (`src/content/compounds/en/<slug>.mdx`), and the glossary files
`src/i18n/en/glossary/melanotan-ii.json` and `pt-141.json`. Everything below was European framing on the English
pages and is cut from them. The full text is in `git show nl-source-2026-10-23:src/content/compounds/en/<slug>.mdx`
(the line numbers below are lines of that file) and in
`research/for-nl-site/snapshot-2026-10-23/content/compounds-en/<slug>.mdx`.

Nothing was cut from the data files: the EU, NL, DE and BE rows of `src/data/compounds/{ghk-cu,melanotan-ii,pt-141}.yaml`
are unchanged (the components hide them on English). The two study ids renamed in `melanotan-ii.yaml`
(`eijmael-2022-netherlands` → `eijmael-2022-sympathomimetic`, `deville-2024-belgian-sample` → `deville-2024-vial-analysis`)
point to the same sources; only the id words changed. The glossary files had no European term (nothing cut there).
Re-check every legal and status fact before reuse on the Dutch site.

## Frontmatter `regulatory_notes` (removed from the English pages; text as it was)

| Page | Code | Text |
|---|---|---|
| ghk-cu | EU | "No medicine. Allowed as a cosmetic ingredient ('copper tripeptide-1'); a product meant for injection cannot be a cosmetic." |
| ghk-cu | NL | "No medicine in the CBG database. Supplying a medicine without a marketing authorisation is prohibited." |
| melanotan-ii | EU | "Not authorised; no record in EMA's medicines data. Afamelanotide (Scenesse), a different molecule, is authorised for EPP." |
| melanotan-ii | NL | "Not authorised; no CBG record. Supplying an unauthorised medicine is prohibited by the Geneesmiddelenwet." |
| melanotan-ii | DE | "Not authorised. The BfArM warned against melanotan products in October 2010." |
| melanotan-ii | BE | "Not authorised; the FAGG calls its distribution illegal and found insulin in products sold as melanotan." |
| pt-141 | EU | "Not authorised. The EMA's list of medicines, which also includes refused and withdrawn applications, has no bremelanotide entry." |
| pt-141 | NL | "Not authorised. Only possible through a named-patient exemption (artsenverklaring), which the IGJ decides on and can refuse." |
| pt-141 | DE | "Not authorised. AMG § 73(3) lets a pharmacy import a medicine authorised abroad for one person, on prescription, in narrow cases." |
| pt-141 | BE | "Not authorised. Art. 6quater of the 1964 Medicines Act allows narrow named-patient imports on prescription." |

## GHK-Cu (`src/content/compounds/en/ghk-cu.mdx`)

| Where (old line) | What it said | Cite ids that left the page |
|---|---|---|
| `description` (4), `summary[1]` (7) | "used in EU skin creams"; "EU skin creams may contain it. It is not an approved medicine in the EU or the US." | – |
| `glance.facts` "Allowed in the EU" (30–32) | "A cosmetic ingredient in skin products" (CosIng, Regulation 1223/2009); now "On the skin", four-country sources | cosing-copper-tripeptide-1, eu-regulation-1223-2009-cosmetics |
| `glance.facts` "Injected use" (33–35) | "Not a cosmetic; no published studies in people", sourced partly to the EU cosmetics regulation | eu-regulation-1223-2009-cosmetics |
| What it is: Compare (93, 97) | detail "from EU law, the FDA and published studies"; row "Allowed in the EU?": listed as a cosmetic ingredient (CosIng); anything injected is not a cosmetic under EU law, no medicine authorised (EMA data) | cosing-copper-tripeptide-1, eu-regulation-1223-2009-cosmetics, ema-medicines-json |
| "The molecule" fold (107) | "copper tripeptide-1" cited also to CosIng | cosing-copper-tripeptide-1 |
| Regulatory: Lead (153), Compare (155–163) | "In EU skin creams, yes"; grid "Netherlands and the EU vs United States": no EU or Dutch authorisation (EMA, CBG); allowed in cosmetics as copper tripeptide-1 with no special limits (CosIng); US cosmetic rules "not checked" (now checked: two new FDA sources) | ema-medicines-json, cbg-geneesmiddeleninformatiebank, cosing-copper-tripeptide-1 |
| Status fold (169) | "Under EU law a cosmetic is put on the outside of the body, and anything meant to be injected is not a cosmetic. Dutch law forbids supplying a medicine without a marketing authorisation, with narrow exceptions." | eu-regulation-1223-2009-cosmetics, nl-gmw-art-40-handelsvergunning |
| US compounding fold (177) | "… would change nothing in the EU" (now: "nothing outside the US") | – |
| Harm reduction, ProductCheck extra (209) | "Under EU law, nothing meant for injection is a cosmetic." (now: the UK and Canada) | eu-regulation-1223-2009-cosmetics, cosing-copper-tripeptide-1 |

## Melanotan II (`src/content/compounds/en/melanotan-ii.mdx`)

| Where (old line) | What it said | Cite ids that left the page |
|---|---|---|
| comment above `stop_signs` (16) | "Eijmael 2022, a Dutch case" | – |
| `glance.facts` "Approved relatives" (36–37) | "Afamelanotide (Scenesse, EU) and bremelanotide (Vyleesi, US)", sourced to the Scenesse EPAR | (ema-epar-scenesse stays on the page as evidence) |
| `studies` mang-2012 (117), eijmael-2022 (130–132), deville-2024 (145–146) | "in German"; "a hospital in Gouda", "in Dutch"; "A Belgian forensic laboratory" (now "not in English", "a hospital", "A forensic laboratory") | – |
| What it is: Compare row "Approved in the EU?" (166) and "Quality checked" (168) | melanotan II: no product in EMA data; afamelanotide: EU since 22 December 2014 for EPP; bremelanotide: no EU product; afamelanotide quality via the EPAR | ema-medicines-json (ema-epar-scenesse stays) |
| "The molecule" fold (182) | "In the EU it is an implant for EPP …" (now: approved in the US, the UK, Canada and Australia; the EMA's description of how it works kept, marked) | – |
| "Where it came from" fold (192) | "… regulators were already warning about products sold under its name in 2010" (the German BfArM); now the MHRA's 2024 "over ten years" statement | bfarm-2010-melanotan-warning |
| "Where the evidence is promising" fold (287) | "authorised in the EU for EPP"; setmelanotide (Imcivree) "authorised in the EU since 16 July 2021 for obesity and hunger in some rare genetic and hypothalamic conditions" (now its US approval, 25 November 2020, from Drugs@FDA and the US label) | ema-medicines-json, ema-epar-imcivree |
| Unknowns, "What products contain" (327) | (kept; the FAGG insulin finding stays as product evidence, marked) | – |
| Regulatory: Lead (335), Compare (337–346) | "European regulators warn against it"; grid "Netherlands and the EU / United Kingdom / United States": no EU or Dutch authorisation; Dutch law forbids supply, Belgium calls distribution illegal; German (2010) and Belgian warnings, "we found no Dutch warning"; sport row | ema-medicines-json, cbg-geneesmiddeleninformatiebank, nl-geneesmiddelenwet, fagg-melanotan-warning (stays elsewhere), bfarm-2010-melanotan-warning |
| Status fold (348–358) | "All statuses were checked on 22 October 2026." | – |
| Fold "The EU, the Netherlands, Germany and Belgium" (360–378) | EU: no authorisation, no EMA record; afamelanotide and setmelanotide authorised but different molecules. Netherlands: CBG; Geneesmiddelenwet definition and supply ban; no IGJ/CBG warning found; Dutch dermatologists' warning and a Dutch hospital case. Germany: AMG § 21; BfArM warning of 28 October 2010 (heart and circulation, digestive tract, skin colour). Belgium: 1964 Medicines Act; FAGG calls MT2 an experimental product, distribution illegal; insulin found in products. | ema-medicines-search, ema-medicines-json, ema-epar-scenesse (stays), cbg-geneesmiddeleninformatiebank, nl-geneesmiddelenwet, habbema-2017-melanotan-review (stays), eijmael-2022-barbie-drug (stays), de-amg-21, bfarm-2010-melanotan-warning, be-medicines-law-1964, fagg-melanotan-warning (stays) |
| Fold "The United Kingdom" (380–384) | kept, now the UK part of "The UK, Canada and Australia" | – |
| US fold (394) | "… would change nothing in the EU" (now: "outside the US") | – |
| Callout "US decisions do not apply here" (396–398) | "Nothing the FDA or its advisers decide changes the legal position in the Netherlands or anywhere else in the EU." | nl-geneesmiddelenwet |
| Risks Compare (416) | "In case reports, including one from the Netherlands." | – |
| Moles fold (448–452) | "In a German case followed with a dermatoscope"; "a Dutch review counted four by 2017"; "The Dutch reviewers conclude …" (now "In one case …", "a 2017 review", "The authors of the 2017 review") | – |
| Heart/brain/kidneys fold (476, 482) | "A Dutch hospital treated a 27-year-old man …"; "The German regulator lists risks to the heart and circulation and to the digestive tract." (now: the TGA's list of reported harms) | bfarm-2010-melanotan-warning |
| Products fold (486) | "A Belgian forensic laboratory …"; "The Belgian medicines agency found insulin …" (now "A forensic laboratory"; "A European medicines regulator", marked as evidence) | – |
| Harm reduction (504, 521, 524) | "A GP or a dermatologist …", "by a GP or dermatologist", "See a GP …" (UK-only word; now "your doctor") | – |
| Other checks, "Report side effects" (535) | "In the Netherlands, report to Lareb; in the UK, through the Yellow Card scheme." | lareb-home |
| Legal routes fold (560) | "In the EU, afamelanotide for EPP is prescribed only by specialist doctors in recognised centres"; "it [bremelanotide] is not authorised in the EU" | ema-epar-scenesse (stays), ema-medicines-json |

Kept as evidence (marked `residue-ok`): the EMA assessment's description of how afamelanotide works (what-it-is fold
and "Where the evidence is promising", `ema-epar-scenesse`), and the Belgian regulator's finding of insulin in
products sold as melanotan (products fold, unknowns list and the ProductCheck line, `fagg-melanotan-warning`; the page
says "a European medicines regulator").

## PT-141 (`src/content/compounds/en/pt-141.mdx`)

| Where (old line) | What it said | Cite ids that left the page |
|---|---|---|
| `description` (4), `summary[1]` (7), `lede` (11) | "not approved in the EU"; "It is not approved in the EU or UK."; "Not approved in the EU." | – |
| `glance.facts` "Approved for" (39–41) | sourced partly to the EMA medicines data | ema-medicines-json |
| `grade_rationale.human_clinical` (43) | "Not authorised in the EU or the UK; the EMA's published lists show no application, refusal or withdrawal." | – |
| What it is: Compare row "Approved in the EU or the UK?" (148) | "No EU or UK product exists" | ema-medicines-json |
| Callout "Why this page looks different" (166) | "authorised in the United States, but not in the EU, the UK or the Netherlands … an unauthorised product in Europe" | – |
| Regulatory: Lead (344), Compare (346–355) | "Not approved in the EU, UK or Netherlands"; grid "Netherlands and the EU vs United States": no product in EMA records or the Dutch database; a doctor can sign a named-patient statement and a pharmacy asks the IGJ, which can refuse; supplying without authorisation forbidden (Geneesmiddelenwet art. 40); sport row | ema-medicines-json, cbg-geneesmiddeleninformatiebank, igj-leveren-op-artsenverklaring, nl-regeling-gnw-art-3-17, nl-gmw-art-40-handelsvergunning |
| Status fold (361) | "All statuses were checked on 22 October 2026." | – |
| Fold "The EU, the Netherlands, Germany, Belgium and the United Kingdom" (369–391) | EU: no entry in the EMA's list of medicines (incl. refused and withdrawn); not in the October 2026 list of applications under evaluation, so no EU application published. Netherlands: CBG lists no product; supply, sale and import without authorisation prohibited; the artsenverklaring route (doctor's statement, pharmacy or wholesaler asks the IGJ, decision within eight weeks, can refuse). Germany: AMG § 21 (no German or EU authorisation); AMG § 73(3) pharmacy import for one person, prescription needed from outside the EU/EEA. Belgium: 1964 Medicines Act; art. 6quater pharmacist import on prescription. UK paragraph kept and expanded. | ema-medicines-json, ema-under-evaluation-2026-10, cbg-geneesmiddeleninformatiebank, nl-gmw-art-40-handelsvergunning, igj-leveren-op-artsenverklaring, nl-regeling-gnw-art-3-17, de-amg-21, de-amg-73, be-medicines-law-1964, be-medicines-law-1964-art-6quater |
| "Two sides of the regulatory gap" (403–407) | "A woman in the Netherlands with the same diagnosis cannot get bremelanotide on a normal prescription …"; "no application … appears in the EMA's published lists" | ema-medicines-json, ema-under-evaluation-2026-10 |
| Harm reduction, opening (484) | "In the Netherlands it can only be supplied through the narrow named-patient route." | igj-leveren-op-artsenverklaring |
| Blood pressure fold (507) | "A pharmacy or GP practice can check it." (UK-only word; now "your doctor") | – |
| "The legal route" (517) | Netherlands not authorised; artsenverklaring and IGJ exemption; "Germany and Belgium have similar narrow routes for medicines authorised abroad" | igj-leveren-op-artsenverklaring, nl-regeling-gnw-art-3-17, de-amg-73, be-medicines-law-1964-art-6quater |
| Report side effects (561–563) | "In the Netherlands you can report a side effect to Lareb, the national centre for side effects." | lareb-home |
