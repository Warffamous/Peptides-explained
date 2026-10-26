# Refocus notes: compounds-c (BPC-157, TB-500, KPV), 24 October 2026

Group `compounds-c` of the English refocus (US, UK, Canada, Australia; short notes for Ireland and New Zealand). Inputs:
`research/refocus-spec/content-brief.md`, `docs/CONTENT-GUIDE.md` (§1 PCAC framing, §1a, §1b, §5), the fact-checked
research (`research/refocus/status/{bpc-157,tb-500,kpv}.yaml`, `australia-legal.md`, `canada-legal.md`,
`us-uk-routes.md`, each with its "Fact-check (independent)" section) and `research/refocus-notes/merge.md`.

An earlier run of this assignment was cut off after committing its draft (commit 1b7304f, "first content groups
drafted (not yet fact-checked)"); this notes file did not exist. The resumed run re-read the whole draft against the
inputs above, re-opened every source the new text rests on (source notes in `src/data/sources/refocus-*.yaml`), kept
what held, and made the corrections listed under "Changed in the resumed run".

## Files

| File | What |
|---|---|
| `src/content/compounds/en/bpc-157.mdx` | rewritten without European framing (below) |
| `src/content/compounds/en/tb-500.mdx` | same |
| `src/content/compounds/en/kpv.mdx` | same |
| `src/data/compounds/kpv.yaml` | one source added to the AU row (below); status unchanged |
| `src/data/compounds/bpc-157.yaml`, `tb-500.yaml` | not changed by this group (the merge's CA/AU/UK rows and AU schedules checked against the status files: no error) |
| `src/i18n/en/glossary/{bpc-157,tb-500,kpv}.json` | unchanged: no Dutch, Belgian, German or EU term in any definition (the residue grep's only hits are "separate" for `epar`) |
| `src/data/sources/en-compounds-c.yaml` | two new sources (below) |
| `research/for-nl-site/MANIFEST-compounds-c.md` | everything cut, with nl-source line numbers and the cite ids that left |

Not touched: `src/data/media.yaml`, `src/data/heroes.yaml`, `src/i18n/en/media.json`, `config/link-allowlist.json` (no
new host: openFDA and the Purple Book are on `api.fda.gov` and `www.accessdata.fda.gov`, covered by the `.gov` suffix).

## What changed, common to all three pages

- **Frontmatter.** `regulatory_notes` only for US, UK, CA, AU and WADA (the EU, NL, DE and BE notes are in the manifest
  with their text). New UK, CA and AU notes written from the data rows and the status files. `description`, `summary`,
  `lede` and `glance.*` contained no EU framing except KPV `summary[1]` ("approved in the EU or the US"), now "in the
  US, UK, Canada or Australia". No `glance.facts` row named the EU and none duplicates the derived "Approved in" row.
  The derived At-a-glance answer for all three is "No. Not approved as a medicine in the US, the UK, Canada or
  Australia" (four rows `not-authorised`, category `experimental`); the summaries, ledes and Leads say the same or less
  ("No country has approved it" for BPC-157 rests on the FDA's globalEDGE search, `fda-pcac-2026-bpc157-briefing`).
- **The status Compare** ("Netherlands and the EU" vs "United States", five rows) is now one row per country, US, UK,
  Canada, Australia, with two columns, "Approved as a medicine?" and "Legal to sell or supply?". Each cell cites the
  data row's sources or the status file's. The US cell keeps "the July 2026 vote was only advice"; the vote counts and
  the sport row, which were in the old US column, are in the US fold and the sport fold (both kept from the nl-source).
  A sentence under the grid says each country decides for itself and a US compounding rule would change nothing in
  the UK, Canada or Australia.
- **The fold** "The European Union, the Netherlands, Germany, Belgium and the United Kingdom" is now "The UK, Canada
  and Australia", one `###` per country, from the status files and the legal research (below). The US fold stays where
  it was, with its last PCAC bullet rewritten to CONTENT-GUIDE §1 element 5 ("None of these is an approved medicine in
  the US, the UK, Canada or Australia (Semax is registered as a medicine in Russia) … changes nothing outside the US"),
  plus a short "Bringing it into the US" paragraph (FDA personal-importation policy).
- **Harm reduction.** A new last fold "Legal routes to treatment, and reporting a side effect": a country-neutral
  paragraph ("not an approved medicine in the US, the UK, Canada or Australia, so there is no approved product a doctor
  can prescribe … No regulator has judged its safety or whether it works") and links to all eight anchors on
  `/en/legal-routes/`. The routes are named and linked only, not described (CONTENT-GUIDE §1b, Canada caution).
  "Report a side effect" names and links FDA MedWatch, the Yellow Card scheme, the Canada Vigilance Program and the
  TGA, with one sentence each for the HPRA (Ireland) and Medsafe/CARM (New Zealand) and a link to
  `/en/legal/ireland-and-new-zealand/`. The nl-source pages had no harm-reduction legal paragraph and no reporting
  paragraph, so nothing was replaced there.
- Mechanism, evidence, unknowns and risks sections: unchanged except where a European name was the frame (below).

## Per page

### BPC-157
- Removed (manifest): the EU/NL/DE/BE notes; the NL/EU Compare column; the EU/NL/DE/BE fold with its callout "The US
  vote does not apply here"; the EU clause in the last PCAC bullet; "(its EU authorisation ended in 2012)" in the
  becaplermin precedent (Regranex stays as a US label precedent, `fda-regranex-label-2011`, `-2018`).
- UK: no UK licence, not in the MHRA substance index (`uk-mhra-substance-index-status-c-2026-10-23`); HMR 2012 reg 46
  (`uk-hmr-2012-reg-46`); no MHRA page on GOV.UK (`uk-govuk-search-status-c-2026-10-23`); personal import needs no
  licence (reg 17(6), `uk-hmr-2012-reg-17`) but Border Force seizes unlicensed medicines, 6.3 million doses in the year
  to February 2022, larger-than-personal seizures destroyed (`mhra-foi-22-431-personal-import-seizures`); "We found no
  newer official statement" follows us-uk-routes.md (open item 7: the 2022 FOI is the only official statement found).
- Canada: Health Canada has not authorised it, "have not been assessed for safety, efficacy, and quality", "peptides are
  generally regulated as prescription drugs" presented as Health Canada's position, "research use only" does not make
  it legal (`ca-hc-2026-04-think-twice-peptides`); no product in the DPD or NOC database
  (`ca-dpd-search-status-c-2026-10-23`, `ca-dpd-search-canada-legal-2026-10-23`, `ca-noc-search-status-c-2026-10-23`);
  legal explanation rests on the new-drug and DIN rules (`ca-food-and-drug-regulations`, `ca-fdr-c08-001-new-drug`);
  named in the April 2026 advisory and in 2025 seizure notices (`ca-hc-recalls-search-status-c-2026-10-23`, which
  summarises the advisories that name sellers); May 2026 recall of BPC-157 powder sold to compounding and community
  pharmacies as an unauthorised active ingredient (`ca-hc-recalls-database`: the merge dropped the recall's own record,
  `ca-hc-2026-05-ghk-cu-bpc-157-api-recall`, under the seller rule and summarised RA-82047 there); border detention and
  referral to Health Canada (`ca-cbsa-d19-9-1`, `ca-hc-gui-0116-personal-import`). The mail-import ban for residents
  is not stated (canada-legal.md fact-check: on its face it covers PDL drugs only).
- Australia: not on the ARTG (`au-artg-search-status-c-2026-10-23`); TGA example of an unapproved peptide
  (`au-tga-2026-04-peptide-responsibilities`); ARTG needed before import, supply or advertising
  (`au-tga-how-we-regulate-peptides`); Schedule 4 and Appendix D clause 5 since 1 June 2024 (`au-poisons-standard-2026-10`,
  `-2024-06`, `-2024-02`), after 48 import referrals since July 2022 (`au-tga-2024-05-final-decisions-notice`); Victoria
  (`au-vic-dpcs-act-1981`); **NSW written as unclear** (on the national list, not on the list NSW Health publishes:
  `au-nsw-health-s4d`, `au-nsw-health-s4d-2026`), the same as `legal/au.mdx` (australia-legal.md UNRESOLVED 1: "do
  not state it either way"); other states not checked; personal import of an S4 medicine needs a doctor's authority and
  identifying packaging, code-labelled vials are not released (`au-tg-regulations-1990-sch-5-item-1`,
  `au-tga-personal-importation-scheme`, `au-tga-2026-05-peptide-import-warning`); August 2026 NSW seizure that included
  a BPC-157 and TB-500 combination product (`au-tga-2026-08-peptide-seizure`; the stack's marketing name is not used);
  September 2026 Federal Court proceedings over alleged advertising (`au-tga-search-status-c-2026-10-23`, which
  summarises the release because its title names a company; the company is not named); harm reports for unapproved
  peptides as a group, not by compound (`au-tga-2026-06-cmo-peptide-statement`).
- Sport fold: Sport Integrity Canada's April 2026 reminder (use or possession may be a rule violation,
  `ca-sic-2026-04-peptides-reminder`); Sport Integrity Australia's BPC-157 page (S0, prohibited at all times,
  `au-sia-bpc-157`); 2025 four-year sanction of a Canadian university athlete for BPC-157 and TB-500
  (`ca-sic-2025-04-bpc157-tb500-sanction`; athlete and university not named).

### TB-500
- Removed (manifest): the EU/NL/DE/BE notes; the what-it-is Compare row "Approved as a medicine in the EU?"; the NL/EU
  Compare column; the EU/NL/DE/BE fold, including the German Anti-Doping Act paragraph (`de-antidopg-*`,
  `de-dmmv-2023`); the EU clause in the last PCAC bullet; "A German anti-doping laboratory" became "The anti-doping
  laboratory in Cologne" (same study, `krug-2014-black-market-germany`; affiliation confirmed on PubMed, PMID 25168622:
  German Sport University Cologne, "the Cologne Anti-Doping Laboratory"). The "eight European sites" of the venous-ulcer
  trial stay as evidence, with `# residue-ok` in the frontmatter.
- What-it-is Compare: new row "Approved as a medicine in the US, the UK, Canada or Australia?" for both molecules. For
  the whole protein it cites the two new FDA searches (below) and the UK, Canadian and Australian register searches
  (timbetasin and thymosin searched there: status/tb-500.yaml notes).
- UK: no UK licence for TB-500 or thymosin beta-4 (`uk-mhra-substance-index-status-c-2026-10-23`; the FDA also found
  none in the UK, `fda-pcac-2026-tb500-briefing`); Home Office FEWS 2017-18 found thymosin beta-4 once in Border Force
  samples and classed it as not controlled under the Misuse of Drugs Act 1971 (`uk-home-office-fews-2017-18`); the
  research-use-only link from the old fold is kept; personal import as for BPC-157.
- Canada: as BPC-157, plus "Some of those notices write 'Thymosin-β4 (TB4 or TB-500)'" (status/tb-500.yaml, corrected
  by its fact-check: RA-77218 has no plain TB-500 entry; the page does not claim one).
- Australia: TB-500 and thymosin beta-4 each in Schedule 4 and Appendix D since 1 June 2016 (`au-poisons-standard-2016-06`,
  `-2016-03`, `-2026-10`); the entry does not define TB-500, but the whole protein has its own identical entry; the
  October 2015 consultation's stated purpose, quoted (`au-tga-2015-10-tb500-scheduling-consultation`); NSW: both on
  the S4D list NSW Health publishes (`au-nsw-health-s4d`, `au-nsw-health-s4d-2026`, `au-nsw-ptg-act-1966`); Victoria;
  other states not checked; import and seizure as BPC-157.
- Sport fold: Sport Integrity Australia names thymosin beta-4 (TB-500) among prohibited peptides (`au-sia-peptides`);
  the Canadian sanction.
- US fold: one added sentence, "We found no FDA approval or licence for the whole protein, thymosin beta-4, either"
  (new sources below). The FDA briefing covers TB-500 itself ("neither is a component of an FDA-approved drug").

### KPV
- Removed (manifest): `summary[1]`'s EU phrasing; the EU/NL/DE/BE notes; the what-it-is row and paragraph "No
  authorised medicine in the EU, the Netherlands or the US"; the NL/EU Compare column; the EU/NL/DE/BE fold (EU,
  Netherlands, callout, Germany, Belgium) and its "what we checked" sentence about EMA and the Dutch database; "one is
  from Münster, Germany" became "one is from a university group in Münster" (the study, `kannengiesser-2008-colitis`,
  is unchanged). Kept as evidence, marked: "or the EU trials register" (a register search: no trial exists) and the
  evidence-map row "Several independent groups (US, Europe, east Asia)" (where the research was done; marker in the
  row's last cell, added in the resumed run).
- What-it-is row "Is it an approved medicine?": "Not in the US, the UK, Canada or Australia, and we know of none
  anywhere". The FDA's KPV briefing checked only the EMA and the European and Japanese pharmacopoeias for other
  countries (status/kpv.yaml), so it is cited only for the US; the "approved nowhere" reasoning paragraph (no human
  study, no authorisation without clinical data) is kept from the nl-source.
- UK: no UK licence (`uk-mhra-substance-index-status-c-2026-10-23`; the old "we did not search the UK register" is no
  longer true and was dropped); reg 46; personal import as BPC-157.
- Canada: as BPC-157 (no recall); named in RA-81874 and in 2025 seizure notices (RA-81403 lists it only inside a blend
  product; the page says "named among … seized", which holds).
- Australia: not on the ARTG; **not named in the Poisons Standard, so no schedule**; that does not make it legal to
  sell: a peptide product for a health purpose is a therapeutic good and needs ARTG entry (`au-tga-peptide-products-hub`,
  `au-tga-how-we-regulate-peptides`, `au-tg-act-s19b-19d-offences`); code-labelled vials not released, link to
  `#personal-import`. Following the status file's editor note, the page does **not** say that the doctor's-authority
  condition of the Personal Importation Scheme does not apply to an unscheduled peptide (accurate, but it could read as
  a route); the routes page holds the conditions.
- Trials: the 23 October 2026 searches found no KPV trial in Canada or Australia (`ctgov-search-status-c-2026-10-23`,
  `ca-hc-ctdb-search-status-c-2026-10-23`, `au-anzctr-search-status-c-2026-10-23`).
- Reporting paragraph keeps the nl-source's point that the FDA found no KPV reports to December 2025.

## Data files

- `kpv.yaml` (earlier run, kept): `au-poisons-standard-2026-10` added to the AU row's sources, so that the English
  regulatory note "Not named in the Poisons Standard" carries its source (status/kpv.yaml cites it for
  "unscheduled"). Status, date and other sources unchanged. No EU, NL, DE or BE row was touched in any file.
- `bpc-157.yaml`, `tb-500.yaml`: CA and AU rows, the AU schedules (BPC-157 S4 from 1 June 2024; TB-500 S4 from 1 June
  2016) and the UK re-check rows match the status files and their fact-checks. No error found.

## New sources (`src/data/sources/en-compounds-c.yaml`)

Both were searched again in the resumed run (machine date 26 October 2026), with the same result:
- `us-fda-drugsfda-search-compounds-c-2026-10-24`: openFDA drugsfda, `openfda.generic_name:thymosin` and
  `products.active_ingredients.name:TIMBETASIN` → "No matches found!"; control `openfda.generic_name:tesamorelin`
  returns a record. Cited only for "no FDA approval was found for thymosin beta-4".
- `us-fda-purple-book-search-compounds-c-2026-10-24`: the September 2026 Purple Book data file, re-downloaded with curl:
  no "thymosin" or "timbetasin"; the only "thymo" strings are the two anti-thymocyte globulins; controls somatropin and
  aldesleukin present. (Plain line count for somatropin is 69, against the note's 68 product rows counted with a CSV
  parser; one line is outside the product table. Not material.)
No other new source: every other id is reused from the registry (grep of all `src/data/sources/*.yaml` by id, URL and
DOI before use).

## No-loss check (cite ids, `git show nl-source-2026-10-23:<path>` vs now)

Ids extracted from `<Cite id>`, `source=`, `extraSources=` and frontmatter `sources: [...]`:

| Page | Ids before | Ids now | Removed (all European framing, all in the manifest) |
|---|---|---|---|
| bpc-157 | 61 | 100 | `be-medicines-law-1964`, `cbg-geneesmiddeleninformatiebank`, `de-amg-21`, `ema-medicines-json`, `ema-medicines-search`, `nl-geneesmiddelenwet` |
| tb-500 | 96 | 131 | `be-medicines-law-1964`, `cbg-geneesmiddeleninformatiebank`, `de-amg-21`, `de-antidopg-2`, `de-antidopg-anlage`, `de-dmmv-2023`, `ema-medicines-json`, `ema-medicines-search`, `ema-orphan-designations-json`, `nl-geneesmiddelenwet` |
| kpv | 41 | 69 | `be-medicines-law-1964`, `cbg-geneesmiddeleninformatiebank`, `de-amg-21`, `ema-medicines-json`, `ema-medicines-search`, `nl-geneesmiddelenwet` |

No study, `<Claim>`, number or caveat that was not European framing left any page; mechanism, evidence, unknowns and
risks sections are unchanged apart from the three geography edits named above.

## Changed in the resumed run

1. TB-500 regulatory Lead shortened to 18 words (validator warned at 19): "Not approved in the US, UK, Canada or
   Australia. Banned in sport. The US vote was only advice."
2. KPV evidence-map row "(US, Europe, east Asia)": residue-ok marker added in the last cell (validator warn).
3. All three routes paragraphs: "Each route has its own conditions, and not every route is open for X" became "Each
   route has strict conditions, and none turns an unapproved product into an approved one" (the wording of the other
   refocused compound pages). The old wording implied that some route might be open, which the Canada caution (never
   suggest availability through the SAP) and the evidence do not support.

## Validator and residue

`npx tsx scripts/validate-content.ts --only <slug>` for bpc-157, tb-500, kpv and en-compounds-c: **0 errors**.
Warnings left, explained:
- Four "inline outbound link" warnings per page: the MedWatch, Yellow Card, Canada Vigilance and TGA reporting forms,
  linked as CONTENT-GUIDE §10 allows ("a reporting form"), with their registry sources cited; same pattern as every
  other refocused compound page.
- KPV, four warnings in nl-source text this group did not change: "safe" twice, both in the sense "this does not show
  it is safe" ("says nothing about whether an injected product is safe"; "often used to argue KPV must be safe … None of
  them holds up"); "superlative" twice ("the strongest animal evidence is for the gut", "The cell evidence is KPV's
  strongest suit"), comparing kinds of evidence for KPV itself, not one compound with another.
Residue: the validator's residue check reports no hit. The brief's raw grep, run on the three pages and glossaries,
finds only false positives ("Canada" for `nada\b`, "separate" for `epar`, the id `krug-2014-black-market-germany`) and
the three marked lines (TB-500 frontmatter, Guarnera "eight European sites"; KPV "EU trials register"; KPV "Europe" in
the evidence map). The data files still hold the EU/NL/DE/BE rows by design.

## Open questions for the medical and legal reviewers

1. **BPC-157 in New South Wales** (australia-legal.md UNRESOLVED 1): the page says the position is not clear (on the
   national Appendix D list, not on the S4D list NSW Health publishes). A legal reviewer should read the NSW
   Regulation's text; legislation.nsw.gov.au was blocked for the researchers.
2. **What "TB-500" in the Poisons Standard means** (no sequence or CAS number; UNRESOLVED in status/tb-500.yaml). The
   page says the entry does not define it and that thymosin beta-4 has its own identical entry, so either reading is
   caught. The delegate's 2016 reasons were not found; the page quotes the 2015 consultation's stated purpose only.
3. **Health Canada's "peptides are generally regulated as prescription drugs"**: no PDL entry for any of the three
   (UNRESOLVED in the status files). The pages present it as Health Canada's statement and rest the law on the
   new-drug and DIN rules.
4. **Health Canada advertising guidance (2023)**: each page says plainly that Health Canada has not authorised the
   product and that no regulator has judged its safety or effectiveness, and links (does not describe) the SAP anchor
   as the brief requires. Please confirm this satisfies the guidance (CONTENT-GUIDE §1).
5. **Canada's NOC database** could not be re-checked on 24 October 2026 (maintenance); the DPD was checked through the
   data extracts. The "never authorised" cells cite the 23 October searches.
6. **PCAC vote counts** (8–6, one abstention, for each of the three; six of seven recommended) remain "as reported from
   the public meeting": the FDA had posted no minutes by 20 October 2026. Re-check when minutes appear, including
   whether the free-base and acetate votes differed.
7. **KPV personal import in Australia**: as an unscheduled peptide, the doctor's-authority condition does not apply
   (status/kpv.yaml); the page leaves this out on purpose (it could read as a route). Confirm the omission is right.
8. **"Approved nowhere" for KPV**: rests on the absence of any human study, not on a register search outside the four
   countries; the page says so. A reviewer may prefer "approved in none of the four countries" in the Leads.
9. **The September 2026 Federal Court case** (BPC-157 page) is an allegation; the page says "alleged advertising" and
   names no company.

## Adversarial fact-check (independent), 26 October 2026 (machine date)

Scope: the three pages, `src/data/compounds/{bpc-157,tb-500,kpv}.yaml`, the three glossaries and
`src/data/sources/en-compounds-c.yaml`, checked against the brief, CONTENT-GUIDE §1 and §1a, the status files with their
fact-check blocks, australia-legal.md, canada-legal.md and us-uk-routes.md (with their UNRESOLVED lists), and
`git show nl-source-2026-10-23:<path>`.

### Sources opened again (live, 26 October 2026)
- FDA PCAC briefings for BPC-157, TB-500 and KPV (fda.gov/media/193343, 193349, 193346; PDFs fetched with curl, text
  extracted): BPC-157 "did not yield ... as a component of an approved product in any country"; TB-500 "no approved
  products containing TB-500 in Canada, Australia, the United Kingdom ..."; KPV "neither are a component of an
  FDA-approved drug", no European or Japanese Pharmacopoeia monograph, EMA lists no product. Conclusions read for fix 1.
- openFDA drugsfda (thymosin, timbetasin, substance_name thymosin: "No matches found!"; tesamorelin control returns a
  record) and the September 2026 Purple Book file (no thymosin or timbetasin; the only "thymo" strings are
  Thymoglobulin and anti-thymocyte rows): both new sources in `en-compounds-c.yaml` confirmed.
- Health Canada RA-81874: "The following products are examples of unauthorized injectable peptide drugs seized by Health
  Canada" (the list includes BPC-157, KPV and TB-500); "peptides are generally regulated as prescription drugs"; "have
  not been assessed for safety, efficacy, and quality"; "8-digit" DIN; CBSA cooperation; research-use labels: all as
  quoted.
- FDA Personal Importation page (content current 18 August 2025): quotation exact.
- Sport Integrity Canada reminder (27 April 2026: "use, administration, trafficking or possession ... could result in an
  anti-doping rule violation") and the 7 April 2025 four-year sanction for BPC-157 and TB-500 (the release names the
  athlete and her university; the page names neither).
- Home Office FEWS 2017-18, Table 7 (Border Force collection): "Thymosin Beta 4, 1, Not controlled".
- HMR 2012 reg 46(1) and reg 17(6) (legislation.gov.uk); MHRA FOI 22/431 (6,320,344 doses, 3 March 2021 to
  25 February 2022; "Seizures determined to be more than reasonable personal importation quantities have been
  destroyed").
- TGA (in the built-in browser, own tab; tga.gov.au does not answer curl): October 2015 consultation ("Create new
  Schedule 4 and Appendix D, Item 5 entries for thymosin beta-4 and TB-500 to control the manner in which they are
  advertised, sold and accessed without legitimate purpose"; released 1 October 2015); "How we regulate therapeutic
  peptide products" ("must be included in the ARTG before they can be imported, manufactured, supplied, exported or
  advertised"); May 2026 import warning ("will not be released under the Personal Importation Scheme", ABF to "seize and
  destroy"); peptide hub listing the 28 September 2026 Federal Court release (company in liquidation; not named on the
  page, cited through `au-tga-search-status-c-2026-10-23` as the seller rule requires).
- PubMed 25168622 (Krug 2014): Center for Preventive Doping Research, German Sport University Cologne; "the Cologne
  Anti-Doping Laboratory analyzed" 337 products, so "The anti-doping laboratory in Cologne" is correct.

Every other new id was checked against its registry note and the status files' fact-check blocks (all hosts are on
`config/link-allowlist.json`). Every not-authorised cell matches the status rows (CA, AU) and the re-checked UK rows.

### Fixed in place
1. **All three pages, legal-routes fold.** "No regulator has judged its safety or whether it works" contradicted the
   FDA's own 2026 evaluations, which did judge both. It now reads "No regulator has found it safe or effective",
   followed by the FDA's finding, cited to each briefing. BPC-157 (for ulcerative colitis): "the data available do not
   support the use" and "insufficient clinical safety information to characterize the safety profile". TB-500: "lack of
   any evidence of effectiveness" and "potential safety risks ... in humans are unknown". KPV: "non-existing information
   on the use of these substances administered in humans to make a conclusion on their clinical safety and
   effectiveness". This also meets the Canadian advertising-guidance point (safety and effectiveness not established)
   more directly.
2. **TB-500 legal-routes cite.** The claim that thymosin beta-4 is not approved in the US cited the Purple Book only.
   Added `us-fda-drugsfda-search-compounds-c-2026-10-24`: the two searches together support it, as the source note says.
3. **TB-500 and KPV "What is it?" Compare details** said "as of 20 October 2026", but their approval rows now rest on
   the 23 and 24 October searches. The details now give both dates.
4. **KPV, Australia fold.** "That does not make it legal to sell" was broader than the TGA source. The hub says a
   peptide product is a therapeutic good when it is promoted, supplied or generally used for a therapeutic purpose, and
   that some may be cosmetics. It now reads "legal to sell as a health product", and the next sentence gives the rule.
   The cosmetic case is not spelt out, because it could read as a route.
5. **`src/data/compounds/bpc-157.yaml`, AU schedule note** (shown in the RegulatoryTable). "Possessing it without
   authority, such as a prescription, is illegal (Appendix D)" stated as fact the NSW point that australia-legal.md
   UNRESOLVED 1 says not to state either way, and it contradicted the page ("In New South Wales the position is not
   clear"). It now reads "Also in Appendix D, the national list of poisons not to be possessed without authority, such
   as a prescription; state law gives it effect, and the New South Wales position is not clear", with
   `au-nsw-health-s4d` added to its sources. Status, dates and every EU/NL/DE/BE row are unchanged. The same flat
   wording in tb-500.yaml is left as it is: NSW Health lists TB-500 and thymosin beta-4 as S4D, and Victoria covers
   every S4 poison.

### No-loss check (repeated)
Cite ids before and now (from `<Cite id>`, `source=`, `extraSources=` and frontmatter `sources:`): bpc-157 61 → 100,
tb-500 96 → 131, kpv 41 → 69 (recounted after the fixes: this run's new cites reuse ids already on each page, and none
was removed). The removed ids are exactly
the European ones in the manifest (6, 10 and 6). `<Claim>` counts are unchanged (21, 21, 6). Every removed line in the
three diffs was read: the vote counts, the seven/six outcome, "not an approval", the sport rows and the FDA's "no
approved product in any country" all survive in the US, sport and what-it-is sections. One non-European detail went
with a European sentence: the KPV "what we checked" sentence also said that the FDA searched the **Japanese**
Pharmacopoeia (no monograph). Not restored: it is a pharmacopoeia listing, not a study, claim, number or caveat, the
cite stays, and restoring it alone reads oddly. Listed here for the editor.

### Residue, markers, guardrails, links
- Brief grep: 0 real hits (107 "Canada" for `nada\b`, 14 "separate/prepare" for `epar`, one cite id containing
  "germany"). `scripts/check-locale-residue.ts`: no hit in these files.
- Markers: TB-500 "eight European sites" (where a trial ran) and KPV "EU trials register" (a register search showing no
  trial) are evidence. The KPV evidence-map "Europe" (where cell research was done) is evidence context as the brief
  allows ("European" only in history/evidence context), but it is not EMA or regulator evidence. Kept, flagged.
- No dose or protocol (only study doses already in the nl-source animal studies), no seller help, no emergency number,
  no seller or lab named, no "trusted", "reputable" or "legit". One nl-source KeyNumber title says "a product sold as
  TB-500" (identity, not commerce); left. Stop-now callouts are outside folds on all three pages.
- Internal links are all on the brief's route list. All eight anchors exist in the built `/en/legal-routes/` page
  (`id="prescription"` to `id="trials"`). External links: the four reporting forms (allowlisted hosts).
- `npx tsx scripts/validate-content.ts --only` bpc-157, tb-500, kpv and en-compounds-c: 0 errors. Warnings: the four
  reporting-form links per page (CONTENT-GUIDE §10) and KPV's four nl-source wording warnings, as above. The three
  pages compile as MDX.

### Still open (for the editor and the reviewers)
- All of the writer's open questions stand: NSW and BPC-157; the basis of Health Canada's "prescription drugs"
  statement; the SAP and the 2023 advertising guidance; KPV personal import; KPV "approved nowhere"; the PCAC counts;
  the NOC database not re-checked.
- The canonical PCAC bullet ("None of these is an approved medicine in the US, the UK, Canada or Australia") follows
  CONTENT-GUIDE §1 element 5 word for word. In context, "these" includes emideltide (DSIP), which has no data file and
  for which no UK, Canadian or Australian register search is cited. Editor: confirm that the canonical wording means
  the six recommended peptides, or add a DSIP search.
- Other compounds' AU schedule notes use the same flat "is illegal (Appendix D)" wording, and the other states and
  territories were not checked (australia-legal.md UNRESOLVED 3). Consider attributing it to the national standard
  site-wide.
