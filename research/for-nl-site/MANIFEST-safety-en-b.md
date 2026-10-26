# Manifest: group safety-en-b (English refocus, 24 October 2026)

What left the English pages and files of this group because it was Dutch, Belgian, German or EU framing. Nothing was
deleted from `src/data/sources/` (every id below still exists for the Dutch site). The full text of every item is in
two places:

- the snapshot: `research/for-nl-site/snapshot-2026-10-23/content/pages-en/safety/<page>.mdx`,
  `research/for-nl-site/snapshot-2026-10-23/data/product-check.yaml` and
  `research/for-nl-site/snapshot-2026-10-23/i18n/en/glossary/safety-b.json`;
- git: `git show nl-source-2026-10-23:src/content/pages/en/safety/<page>.mdx`,
  `git show nl-source-2026-10-23:src/data/product-check.yaml`,
  `git show nl-source-2026-10-23:src/i18n/en/product-check.json` and
  `git show nl-source-2026-10-23:src/i18n/en/glossary/safety-b.json`.

Re-check every fact before reuse on the Dutch site (last checked 20 to 22 October 2026).

## safety/product-risk

| Section (before) | What it said | Cite ids that left the page |
|---|---|---|
| What can be wrong inside a vial (opening paragraph) | "A medicine from a pharmacy has been checked by a regulator. Its maker must test it against set limits" (EMA guideline, kept elsewhere on the page); "for a product from outside that system, nobody can show you that such checks were done", cited to the Dutch inspectorate's pages on online medicines (now cited to the MHRA and Health Canada, and the batch rule to 21 CFR 211.165 and Canada C.02.018) | `igj-online-medicijnen`, `igj-2025-illegal-online-medicines` |
| Fold "How each problem happens" | "A Belgian lab found …", "Belgian public-health labs found …", "Belgian labs tested ten …"; "So EU guidance asks makers to test for metals". The studies and their cites stay; only the nationality and "EU guidance" left ("a national public-health lab", "guidance for makers of peptide medicines") | – |
| KeyNumber and table "All the studies we found" | "The 10 peptide products most often found on the Belgian market"; "Belgian public-health labs (2018)"; "Anti-doping lab, Cologne … 337 black-market products from Germany". The rows stay, without the country names; the Cologne row now says "Of what the lab found, 12.8% …" (the source note: the abstract does not give the base of the percentage) | – |
| Diagram `insulin-in-fake-pen`, step 1 | Cited the German medicines agency's falsification notice for fake pens holding insulin (now: the Italian case report and the WHO alert) | `bfarm-ozempic-falsification` (step 1) |
| Diagram `insulin-in-fake-pen`, step 4 | "Two people treated in Dutch hospitals …" (kept as "Two people in one case report …", same cite) | – |
| Fold "Where fake pens with insulin were found" | Bullet "Germany and Austria, 2023": fake Ozempic pens at wholesalers, no semaglutide, an official German lab found insulin, some reached patients in Austria; bullet "The Netherlands, 2026" (kept as "A 2026 case report", same cite); bullet "Across Europe" (kept as evidence, marked `residue-ok`); bullet "Now": insulin pens stolen from a Dutch wholesaler, IGJ warning of 20 October 2026 that they may be sold online as an obesity medicine | `bfarm-ozempic-falsification`, `ema-2023-falsified-ozempic`, `igj-2026-10-stolen-medicines` |
| What a lab certificate shows (Compare) | Column "What EU guidance asks for a peptide medicine" (two methods for identity, content measured, each impurity reported, germ and endotoxin tests), cited to the EMA synthetic-peptide guideline. Replaced by the column "What a medicine maker must test" (21 CFR 211.165/211.167, ICH Q6B, USP <71>/<85> through FDA guidance). The EMA guideline stays cited in the folds for the chemistry (impurity types, two orthogonal identity methods, co-eluting impurities) | – (`ema-2025-synthetic-peptides-guideline` is still cited on the page) |
| Fold "Why '99% pure' can mislead" | "EU guidance warns about impurities that come out at the same time …" (kept as "Guidance for makers warns …", same cite) | – |
| Warning signs diagram | Seller column: "Sells a prescription medicine without a prescription" also cited the IGJ page; "No information about where the product was made" (IGJ 2025, replaced by "Is not a licensed pharmacy", FDA BeSafeRx); product column: "looks different" also cited the EMA falsified-Ozempic alert; "cloudy liquid" cited the EU Wegovy product information (now the US label); closing line "Nothing you can see shows what is inside" cited the IGJ page (now FDA, "Facts about CGMP") | `igj-online-medicijnen`, `igj-2025-illegal-online-medicines`, `ema-2023-falsified-ozempic`, `ema-epar-wegovy` |

## safety/monitoring

| Section (before) | What it said | Cite ids that left the page |
|---|---|---|
| Frontmatter | Description "… and how to get them in the Netherlands"; summary "In the Netherlands, ask your GP. Your GP must keep what you say private." | – |
| Blood tests (cite line), Kidneys, Blood sugar, Liver, Blood fats, Pulse, Pregnancy folds | GLP-1 facts cited to the EU product information of Wegovy and Mounjaro: fluid loss and kidney injury; with insulin or tablets blood sugar can fall too low; gallstones; blood fats improved; resting pulse +3 bpm (semaglutide) and +3 to 5 (tirzepatide); stop 2 months (semaglutide) or 1 month (tirzepatide) before a planned pregnancy. All facts stay, now cited to the US labels (pulse: +1 to 4 bpm versus placebo with Wegovy; +2 to 4 versus +1 with Mounjaro) and the Canadian monographs (pregnancy). The EU Wegovy EPAR stays cited for the body-scan study of 140 people (evidence) | `ema-epar-mounjaro` |
| Pregnancy fold, last sentence | "The EU label calls the effect [of tirzepatide on the pill] not clinically relevant" (replaced by "The Canadian label gives the same advice" as the US label) | `ema-epar-mounjaro` |
| Liver fold | "Products from outside a pharmacy can hold impurities that may harm organs such as the liver", cited to the IGJ (now the impurity study and the Victorian health alert); "see their GP" (now "their doctor") | `igj-online-medicijnen` |
| What checks cannot do (Compare) | "That needs a lab test of the product itself", cited to the EMA synthetic-peptide guideline (now the Hungarian product test and the ISO/IEC 17025 report rule) | `ema-2025-synthetic-peptides-guideline` |
| ## Getting checks in the Netherlands (Lead, diagram `checks-via-the-gp`) | Through your GP: book a (longer) appointment; say what you use, bring the product or a photo and a list of medicines (Thuisarts); you and your GP agree on tests, often done by a lab outside the practice (Zorginstituut); costs: the GP visit does not use the deductible (eigen risico), lab tests do (Zorginstituut); results: you may see your file and get a copy (WGBO 7:454–456); "What you tell your GP stays private" (KNMG, WGBO 7:457). Replaced by "Getting checks where you live" (ask your own doctor, five steps, privacy and costs per country) | `thuisarts-naar-de-huisarts`, `zin-huisarts-zvw`, `nl-wgbo-art-454-456-records`, `knmg-beroepsgeheim`, `nl-wgbo-art-457-confidentiality` |
| Fold "If your GP does not want to do the tests" | GPs must give the care a good doctor would give, not every test asked for (WGBO 7:453); "We found no Dutch GP guideline on checks for people who use unlicensed peptides (searched 22 October 2026)"; ask about symptoms (Thuisarts); a doctor should normally agree to refer you and may refuse only for serious reasons (KNMG second opinion); tests you pay for yourself: full cost, you work out the result yourself, false alarms and false reassurance, many not well studied (Thuisarts gezondheidstest). Replaced by country-neutral text (GMC paras 48–49, CMA code, Medical Board of Australia code, FDA on direct-to-consumer tests, Victoria and Alberta) | `nl-wgbo-art-453-good-care`, `thuisarts-naar-de-huisarts`, `knmg-2024-second-opinion`, `thuisarts-gezondheidstest` |

## safety/before-you-consider

| Section (before) | What it said | Cite ids that left the page |
|---|---|---|
| Pregnancy: TimeStrip and fold | "How long before a planned pregnancy the EU labels say to stop"; EU Wegovy label: not in pregnancy or breastfeeding, stop 2 months before; Mounjaro: 1 month before. Now the US and Canadian labels (Wegovy 2 months, US and Canada; Mounjaro 1 month, Canada; the US Mounjaro label gives no time) | `ema-epar-wegovy`, `ema-epar-mounjaro` |
| Under 18 (Compare and fold) | Wegovy authorised from age 12, cited to the EU product information (now the US label and the Canadian monograph) | `ema-epar-wegovy` |
| Diabetes fold | Glucose-dependent action and "rarely too low on their own", the EU labels' warning on insulin and sulfonylureas, "not a substitute for insulin, not studied in type 1", all cited to the EU product information. Now the US labels (Ozempic 12.1, Mounjaro hypoglycaemia table, Wegovy 5.4, Mounjaro 5.3) and the Canadian Wegovy monograph | `ema-epar-wegovy`, `ema-epar-mounjaro` |
| Heart disease (Compare and fold) | Melanotan II "Not in the EU", "No EU label, because it is not authorised", "It is not an authorised medicine in the EU", cited to the EMA medicines search. Now: not approved in the US, the UK, Canada or Australia (the regulators' own sources) | `ema-medicines-search` |
| Eating disorders diagram, step 1 | "Less hungry and full sooner" cited to the EU Wegovy product information (now the US label) | `ema-epar-wegovy` |
| Kidney disease (Compare and fold) | EU Wegovy label: kidney disease did not change exposure; people with moderate kidney disease may get more gut side effects; not recommended with severe kidney disease; fluid loss (EU Mounjaro and Wegovy). Now: the Canadian monograph (no clinically relevant change in exposure, single dose, mild to severe kidney disease and dialysis; limited experience in severe kidney disease; not recommended in end-stage kidney disease) and the US label (no change with eGFR 30 to <90; kidney side effects more common with a history of kidney disease; acute kidney injury with fluid loss). The EU-only point "more stomach and gut side effects with moderate kidney disease" was not found in the parts of the US and Canadian labels we read and is not on the English page | `ema-epar-wegovy`, `ema-epar-mounjaro` |
| Pancreatitis and thyroid (Compare, bullet and fold) | Compare "EU label (Wegovy)" versus "US label (Ozempic)": the EU label calls the human risk low but not ruled out and has no formal contraindication for MTC/MEN 2; "In the EU it is not a formal contraindication"; pancreatitis caution cited to the EU labels. Now: US labels versus the Canadian label (both forbid use with MTC/MEN 2); pancreatitis: US Wegovy label and the Canadian Wegovy and Mounjaro monographs; "We did not check how the UK and Australian labels treat it" | `ema-epar-wegovy`, `ema-epar-mounjaro` |
| Blood thinners fold | INR checks with acenocoumarol, cited to the EU Wegovy product information (now the Canadian Wegovy monograph, which has the same advice) | `ema-epar-wegovy` |
| Rules for everyone (diagram and folds) | "Never use a product that looks wrong" cited the EU Wegovy product information (now the US label); "Never stop a medicine your doctor prescribed" cited Thuisarts (now NHS); sharing a pen or vial cited the EU Wegovy product information and the Dutch harm-reduction pages of Mainline and Trimbos (now the US Ozempic and Mounjaro labels and WHO) | `ema-epar-wegovy`, `thuisarts-dikke-ogen-lippen`, `mainline-steroids-safe-injecting`, `drugsinfo-injecteren` |
| Tell your doctor | Lead "In the Netherlands, doctors must keep it private"; "In the Netherlands, your doctor must keep what you say private" (KNMG). Now the four countries' privacy rules and a link to talking-to-your-doctor | `knmg-beroepsgeheim` |

## safety/injection-safety

| Section (before) | What it said | Cite ids that left the page |
|---|---|---|
| Under the skin (diagram) | Wegovy injection sites and "not into a vein or a muscle", cited to the EU product information (now the US label); "Dutch GP advice for insulin names the belly and the upper legs as good places" (Thuisarts) | `ema-epar-wegovy`, `thuisarts-insuline-spuiten` |
| Under the skin (paragraph) | "Dutch harm-reduction workers warn that injecting performance drugs into a vein can kill" (Mainline). The reason that follows stays | `mainline-steroids-safe-injecting` |
| Change the spot every time | "Dutch GP advice for insulin is to move about 1 cm along each day" (Thuisarts); now "Inject on a different patch of skin each time" (FITTER) | `thuisarts-insuline-spuiten` |
| Fold "Cleaning the skin" | "Dutch GP advice for insulin also says water and soap, without a disinfectant" (Thuisarts); "Some product leaflets and Dutch harm-reduction services do advise an alcohol swab" (Mainline, Trimbos). Now: product leaflets (Egrifta, the US Wegovy instructions) | `thuisarts-insuline-spuiten`, `mainline-steroids-safe-injecting`, `drugsinfo-injecteren` |
| What is normal (diagram and cite line) | "Call your GP or the out-of-hours GP service straight away", "Call your GP today", "See your GP"; Thuisarts on wondroos and sepsis among the sources. Now "Get medical help straight away: your doctor, or a health advice line or urgent care when your doctor is closed" and "your doctor"; healthdirect on cellulitis among the sources | `thuisarts-wondroos`, `thuisarts-sepsis` |
| Allergic reactions | Lead "stop and call your GP"; mild reaction "contact your GP" (Thuisarts on swollen eyes and lips; now the Egrifta and US Mounjaro labels on hypersensitivity); severe reaction also cited Thuisarts (NHS kept); "Dutch harm-reduction advice for people who inject is not to inject alone, so that someone can help or call for help" (Trimbos), replaced by "A severe reaction usually starts within minutes (NHS). So the first time … it helps to have someone nearby" | `thuisarts-dikke-ogen-lippen`, `drugsinfo-injecteren` |

## safety/sterile-technique

| Section (before) | What it said | Cite ids that left the page |
|---|---|---|
| Before you start (checklist cite line) | RIVM's hygiene guideline for piercing and the EU Wegovy product information among the sources of the hand, surface and pack steps (WHO, which covers every step, kept) | `rivm-hygiene-piercing`, `ema-epar-wegovy` |
| Handling the vial | "Never share …" cited Mainline and Trimbos (now WHO and the US Ozempic label); "A needle is also only really sharp the first time. A reused needle is blunter and makes infection more likely" (Trimbos; no source in the four countries found; replaced by the insulin study's finding on needle reuse and lumps) | `mainline-steroids-safe-injecting`, `drugsinfo-injecteren` |
| Bacteriostatic and sterile water; mixing | "Never use tap water …" and "Do not shake" also cited Mainline (now WHO and the sterile-water label; the Egrifta label) | `mainline-steroids-safe-injecting` |
| Storage (KeyNumber and fold) | "EU product information for Wegovy": fridge 2–8 °C away from the cooling element, below 30 °C only for the leaflet's time, no freezing, protect from light, not if frozen or left in direct sunlight. Now the US Wegovy label (the same, without "direct sunlight": the US label says "protect from light") | `ema-epar-wegovy` |
| When to throw a vial away (cite line) | EU Wegovy product information among the sources (now the US label) | `ema-epar-wegovy` |

## src/data/product-check.yaml and src/i18n/en/product-check.json (the shared `<ProductCheck />`)

The schema has one source list per check for every locale (no per-locale sources), so the Dutch and EU sources were
replaced by sources from the four countries. **The Dutch site's `<ProductCheck />`
would number these English-country sources** (there is no src/i18n/nl/product-check.json yet, 24 October 2026); to
restore the Dutch sources there, the schema would need per-locale sources (open question in
research/refocus-notes/safety-en-b.md).

| Check | Before (sources; English words) | Cite ids that left |
|---|---|---|
| intro | `igj-online-medicijnen` (now `fda-cgmp-facts`) | `igj-online-medicijnen` |
| label | "In the EU, a medicine must show all four, even on a small vial." (EU Directive 2001/83; now "In the US, for example, a prescription medicine must show all four, on the vial or its box", 21 CFR 201.100 and 201.17) | `eu-directive-2001-83` |
| look | EU Wegovy product information (now the US label) | `ema-epar-wegovy` |
| certificate | Sources: ICH Q7 on the EMA site (the same text is now cited from the FDA's copy, `fda-2016-ich-q7-gmp-api`) and the EMA synthetic-peptide guideline (now the NIST ISO/IEC 17025 report crosswalk). Words: points "its batch number is not the one on your vial;", "it does not name the lab, or has no date or signature;", "it shows only purity (HPLC), with no test of what it is, such as mass spectrometry;"; text "Even a full report covers only one sample. A report from the seller comes from someone who gains if it looks good. It cannot show that your vial is clean."; link text "What a certificate of analysis shows, and what it does not" to `safety/product-risk#what-a-lab-certificate-shows-and-what-it-does-not` (now the ladder: `#what-a-lab-report-can-and-cannot-tell-you`) | `ema-ich-q7-gmp-api`, `ema-2025-synthetic-peptides-guideline` |
| storage | EU Wegovy product information (now the US label) | `ema-epar-wegovy` |
| doctor | Thuisarts (preparing a GP visit) and KNMG (medical secrecy); words "In the Netherlands, your doctor must keep what you say private." (now healthdirect's questions page and the four countries' privacy sources; "What you tell your doctor is kept private, with a few exceptions set by law.") | `thuisarts-naar-de-huisarts`, `knmg-beroepsgeheim` |

## src/i18n/en/glossary/safety-b.json

Removed entries (full JSON in the snapshot file named above; Dutch, German and Dutch-insurance terms):

- `seh` (SEH, alias "spoedeisende hulp"): the Dutch hospital emergency department, reached through the GP or huisartsenpost unless a life is in danger.
- `nvic` (NVIC, aliases "Nationaal Vergiftigingen Informatie Centrum", "Dutch Poisons Information Centre"): advises professionals; patients call the GP or huisartsenpost.
- `landelijk-meldpunt-zorg` (alias "national reporting point"): the IGJ's reporting point for doubtful websites or sellers.
- `eigen-risico` (aliases "deductible", "compulsory deductible"): the yearly Dutch insurance excess; GP care does not count, lab tests and hospital care do.
- `bfarm` (BfArM, alias "Bundesinstitut für Arzneimittel und Medizinprodukte"): the German medicines agency and its reporting portal.

Note: the aliases "deductible" and "national reporting point" no longer link to a glossary entry on English.
