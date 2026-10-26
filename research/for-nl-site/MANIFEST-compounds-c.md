# Cut from the English site: group compounds-c (BPC-157, TB-500, KPV), 24 October 2026

Everything below was European framing (Netherlands, EU, Germany, Belgium) on the English compound pages
`bpc-157`, `tb-500` and `kpv`. It left the English pages in the refocus on the US, the UK, Canada and Australia.
Nothing here was deleted from the data: the EU, NL, DE and BE rows in `src/data/compounds/{bpc-157,tb-500,kpv}.yaml`
are untouched, and every source id below is still registered in `src/data/sources/`.

Full text of every item: `git show nl-source-2026-10-23:src/content/compounds/en/<slug>.mdx` (line numbers below
are lines of that file), or the plain copy `research/for-nl-site/snapshot-2026-10-23/content/compounds-en/<slug>.mdx`.
Facts were last checked on 20 October 2026: re-check before reuse.

Removed source ids (the no-loss check: these are the only ids that left each page, and all are European framing):
- bpc-157: `ema-medicines-search`, `ema-medicines-json`, `cbg-geneesmiddeleninformatiebank`, `nl-geneesmiddelenwet`,
  `de-amg-21`, `be-medicines-law-1964`
- tb-500: `ema-medicines-search`, `ema-medicines-json`, `ema-orphan-designations-json`,
  `cbg-geneesmiddeleninformatiebank`, `nl-geneesmiddelenwet`, `de-amg-21`, `de-antidopg-anlage`, `de-antidopg-2`,
  `de-dmmv-2023`, `be-medicines-law-1964`
- kpv: `ema-medicines-search`, `ema-medicines-json`, `cbg-geneesmiddeleninformatiebank`, `nl-geneesmiddelenwet`,
  `de-amg-21`, `be-medicines-law-1964`

## BPC-157 (`src/content/compounds/en/bpc-157.mdx`)

| Where (nl-source line) | What it said | Sources |
|---|---|---|
| frontmatter `regulatory_notes.EU` (128) | "No authorised product, and no record in EMA's medicines data (checked 20 October 2026)." | (data row EU) |
| `regulatory_notes.NL` (129) | "Not authorised; supplying an unauthorised medicine is prohibited by the Geneesmiddelenwet." | (data row NL) |
| `regulatory_notes.DE` (130) | "Not authorised; finished medicines need a licence under AMG § 21." | (data row DE) |
| `regulatory_notes.BE` (131) | "Not authorised; the 1964 Medicines Act requires a national or EU licence, and none exists." | (data row BE) |
| Section "Is it legal?", Compare "It is not an approved medicine anywhere…" (376–386) | Two-column table "Netherlands and the EU" vs "United States": no EU or Dutch authorisation (EMA data, CBG); Dutch law forbids supplying an unauthorised medicine; the US vote changes nothing here; a US listing changes nothing in the EU or NL; sport row. The US column and the sport row live on in the new four-country table and the US and sport folds. | `ema-medicines-search`, `ema-medicines-json`, `cbg-geneesmiddeleninformatiebank`, `nl-geneesmiddelenwet` |
| Fold "The European Union, the Netherlands, Germany, Belgium and the United Kingdom" (400–417) | "European Union and member states": no EU marketing authorisation, no record in EMA data (incl. refused and withdrawn), no European Pharmacopoeia monograph; bullets for the Netherlands (CBG lists none; Geneesmiddelenwet art. 1 definition of a medicine and art. 40 prohibition), Germany (AMG § 21), Belgium (Medicines Act 1964, art. 6 § 1); callout "The US vote does not apply here" (Netherlands/EU). The UK paragraph was rewritten into the new fold "The UK, Canada and Australia". | `ema-medicines-search`, `ema-medicines-json`, `cbg-geneesmiddeleninformatiebank`, `nl-geneesmiddelenwet`, `de-amg-21`, `be-medicines-law-1964` (plus `fda-pcac-2026-bpc157-briefing`, still cited) |
| Fold "The United States, and the July 2026 vote point by point", last bullet (430) | "None of these is an approved medicine in the EU, the UK or the US … changes nothing in the EU or the Netherlands." Now: the US, the UK, Canada or Australia; "changes nothing outside the US". | `ema-medicines-search` |
| Fold "Why an effect on cancer is theorised", becaplermin precedent (504) | The clause "(its EU authorisation ended in 2012)" about Regranex. The rest of the paragraph stays. | `ema-medicines-json` |

## TB-500 (`src/content/compounds/en/tb-500.mdx`)

| Where (nl-source line) | What it said | Sources |
|---|---|---|
| `regulatory_notes.EU` (152) | "No authorised product and no orphan designation in EMA records for TB-500 or thymosin beta-4 (checked 20 October 2026)." | (data row EU) |
| `regulatory_notes.NL` (153) | "Not authorised; supplying an unauthorised medicine is prohibited by the Geneesmiddelenwet." | (data row NL) |
| `regulatory_notes.DE` (154) | "Not authorised (AMG § 21). The Anti-Doping Act also names thymosin beta-4 and TB-500." | (data row DE) |
| `regulatory_notes.BE` (155) | "Not authorised; the 1964 Medicines Act requires a national or EU licence, and none exists." | (data row BE) |
| Section "What is it?", Compare row "Approved as a medicine in the EU?" (172) | "EMA's data hold no record of it" for both thymosin beta-4 and TB-500. Now a four-country row. | `ema-medicines-search`, `ema-medicines-json` |
| Fold "The molecule…", identity paragraph (213) | "A German anti-doping laboratory found thymosin beta-4…": the word "German" became "The anti-doping laboratory in Cologne" (same study, same cite `krug-2014-black-market-germany`). | – |
| Section "Is it legal?" Lead (389) | "Not approved in the EU, UK or US…" | – |
| Compare "Not an approved medicine in the EU or the US…" (391–401) | Two-column table "Netherlands and the EU" vs "United States", as for BPC-157, with EMA orphan designations; sport row. | `ema-medicines-search`, `ema-medicines-json`, `ema-orphan-designations-json`, `cbg-geneesmiddeleninformatiebank`, `nl-geneesmiddelenwet` |
| Fold "The European Union, the Netherlands, Germany, Belgium and the United Kingdom" (415–432) | No EU authorisation and no orphan designation (EMA data); the FDA found no approved TB-500 product in Belgium, Germany, the UK or several other European countries and no European Pharmacopoeia monograph; Netherlands (CBG, Geneesmiddelenwet art. 1 and 40; link to research use only); **Germany: AMG § 21, and the Anti-Doping Act (Anlage) names "Thymosin-beta-4 und seine Derivate" with TB-500 as an example, and prohibits acquiring, possessing or bringing into Germany a set amount or more for doping in sport (§ 2; DMMV 2023)**; Belgium (Medicines Act 1964 art. 6 § 1); callout "The US vote does not apply here". The UK sentence and the research-use-only link were kept in the new UK paragraph. | `ema-medicines-search`, `ema-medicines-json`, `ema-orphan-designations-json`, `cbg-geneesmiddeleninformatiebank`, `nl-geneesmiddelenwet`, `de-amg-21`, `de-antidopg-anlage`, `de-antidopg-2`, `de-dmmv-2023`, `be-medicines-law-1964` |
| US fold, last bullet (445) | "None of these is an approved medicine in the EU, the UK or the US … changes nothing in the EU or the Netherlands." | `ema-medicines-search` |

Kept as evidence (not framing): the study `guarnera-2010-venous-ulcers` "at eight European sites" (where the trial ran),
marked `# residue-ok` in the frontmatter.

## KPV (`src/content/compounds/en/kpv.mdx`)

| Where (nl-source line) | What it said | Sources |
|---|---|---|
| `summary[1]` (7) | "No KPV medicine is approved in the EU or the US. Sport bans it at all times." Now: US, UK, Canada or Australia. | – |
| `regulatory_notes.EU` (117) | "No authorised product and no record in EMA's medicines data; no European Pharmacopoeia monograph (checked 20 October 2026)." | (data row EU) |
| `regulatory_notes.NL` (118) | "Not authorised; supplying a medicine without a marketing authorisation is prohibited by the Geneesmiddelenwet." | (data row NL) |
| `regulatory_notes.DE` (119) | "Not authorised; finished medicines need a licence under AMG § 21." | (data row DE) |
| `regulatory_notes.BE` (120) | "Not authorised; a medicine may be placed on the market only with a national or EU authorisation (Medicines Act 1964, art. 6)." | (data row BE) |
| Section "What is it?", Compare row "Is it an approved medicine?" (139) and the paragraph after it (143) | "No authorised medicine in the EU, the Netherlands or the US." | `ema-medicines-json`, `cbg-geneesmiddeleninformatiebank` |
| Evidence KeyNumber "Most gut studies come from one lab" (233) | "one is from Münster, Germany" became "one is from a university group in Münster". | – |
| Section "Is it legal?", Compare (328–338) | Two-column table "Netherlands and the EU" vs "United States", as for BPC-157 (EMA data and the Dutch medicines database list no KPV product; Dutch law; the US vote changes nothing here). | `ema-medicines-search`, `ema-medicines-json`, `cbg-geneesmiddeleninformatiebank`, `nl-geneesmiddelenwet` |
| Fold "The European Union, the Netherlands, Germany, Belgium and the United Kingdom" (352–378) | What was checked (EMA data, the Dutch database, the FDA's search of the European and Japanese pharmacopoeias and EMA records; national registers of DE, BE, UK not searched); EU (no authorisation, no EMA entry, no Ph. Eur. monograph); Netherlands (CBG; Geneesmiddelenwet, incl. the exception for small-scale pharmacy preparation for one patient); callout "The US vote does not apply here … no effect on Dutch or European law"; Germany (Arzneimittelgesetz § 21; German register not searched); Belgium (Medicines Act 1964 art. 6 § 1; no European Commission authorisation). The UK paragraph was kept and extended; the "approved nowhere" reasoning paragraph was kept. | `ema-medicines-search`, `ema-medicines-json`, `cbg-geneesmiddeleninformatiebank`, `nl-geneesmiddelenwet`, `de-amg-21`, `be-medicines-law-1964` (plus `fda-pcac-2026-kpv-briefing`, still cited) |
| US fold, last bullet (394) | "… changes nothing in the EU or the Netherlands." | – |

Kept as evidence, marked `{/* residue-ok … */}`: "we found no registered clinical trial of KPV on ClinicalTrials.gov or
the EU trials register" (a register search, evidence that no trial exists), and the evidence-map row "Several
independent groups (US, Europe, east Asia)" (where the cell research was done; marker in the row's last cell).

Checked again on resuming this assignment: the removed cite ids above are the only ids that left each page
(`git show nl-source-2026-10-23:<path>` against the current file; counts in `research/refocus-notes/compounds-c.md`).

## Glossary

`src/i18n/en/glossary/{bpc-157,tb-500,kpv}.json`: no Dutch, Belgian, German or EU term in any of the three files;
nothing cut.
