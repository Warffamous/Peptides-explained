# Refocus notes: compounds-d (GHK-Cu, melanotan II, PT-141), 24 October 2026

Group `compounds-d` of the English refocus (US, UK, Canada, Australia; notes for Ireland and New Zealand). Inputs:
`research/refocus-spec/content-brief.md`, `docs/CONTENT-GUIDE.md` (§1, §1a, §1b, §5), the fact-checked research
(`research/refocus/status/{ghk-cu,melanotan-ii,pt-141}.yaml`, `australia-legal.md`, `canada-legal.md`, `us-uk-routes.md`,
each with its fact-check section) and `research/refocus-notes/merge.md` (lead decisions, legal-review questions 4 and 5).
An earlier run of this assignment was cut off: its draft of `ghk-cu.mdx` and `melanotan-ii.mdx` and the four sources in
`en-compounds-d.yaml` were reviewed line by line against those inputs, kept where they held and corrected where listed
below; `pt-141.mdx` had not been started and was rewritten in this run.

## Files

| File | What |
|---|---|
| `src/content/compounds/en/ghk-cu.mdx` | rewritten without European framing (below) |
| `src/content/compounds/en/melanotan-ii.mdx` | same |
| `src/content/compounds/en/pt-141.mdx` | same |
| `src/i18n/en/glossary/pt-141.json` | one wording change: `sympathetic-nervous-system` "prepares" → "gets … ready" (the brief's grep pattern `epar` matched "prepares") |
| `src/i18n/en/glossary/melanotan-ii.json` | unchanged (no European term) |
| `src/data/sources/en-compounds-d.yaml` | four new sources (below), all re-fetched and re-read in this run |
| `src/data/compounds/melanotan-ii.yaml` | two study ids renamed by the earlier run (`eijmael-2022-netherlands` → `eijmael-2022-sympathomimetic`, `deville-2024-belgian-sample` → `deville-2024-vial-analysis`; same sources, used only in the English MDX `studies:` map). Rows: merge's, unchanged |
| `src/data/compounds/{ghk-cu,pt-141}.yaml` | not changed by this group. The merged UK, CA and AU rows (and the melanotan II AU schedule) were compared with the status files: no error found |
| `research/for-nl-site/MANIFEST-compounds-d.md` | everything cut, with old line numbers and the cite ids that left |

Not touched: `src/data/media.yaml`, `heroes.yaml`, `src/i18n/en/media.json` (the three heroes and their captions have no
European wording), `config/link-allowlist.json` (every host cited is already covered: `.gov`, `.gov.uk`, `.gc.ca`,
`.canada.ca`, `.gov.au`, `hpr-rps.hres.ca`, `www.anzctr.org.au`, `yellowcard.mhra.gov.uk`).

## What changed, per page

Common to all three pages:
- Frontmatter `regulatory_notes` only for US, UK, CA, AU and WADA (EU/NL/DE/BE texts in the manifest); CA and AU notes
  written from the data rows and the status files.
- The regulatory Compare ("Netherlands and the EU vs United States") is now one row per country (US, UK, Canada,
  Australia), each cell sourced from the row's sources or the status file; sport moved into the status fold.
- The fold "The EU, the Netherlands, Germany, Belgium (and the UK)" became "The UK, Canada and Australia"; the US fold
  stays where it was. US-decision callouts now name the UK, Canada and Australia.
- Harm reduction: the legal-routes paragraph is country-neutral and links all eight anchors on `/en/legal-routes/`
  (named and linked, not described, per the Canada caution); "Report side effects" names and links FDA MedWatch, the
  Yellow Card scheme, Health Canada's Canada Vigilance Program and the TGA, cites `ca-hc-canada-vigilance` as well
  (added in this run), and links `/en/legal/ireland-and-new-zealand/`.
- UK-only words: "GP" → "your doctor" (melanotan II, PT-141).
- Science sections unchanged except where a European name was the frame.

### GHK-Cu
- Cosmetic versus medicine, per country (status file "two categories"): what-it-is Compare row "Can it be a cosmetic?"
  (US, UK, Canada: not banned or restricted; UK and Canada: anything injected is not a cosmetic); regulatory Compare
  with two columns, "Approved as a medicine?" (no, in all four) and "Allowed as a cosmetic ingredient?" (US, UK, CA yes;
  AU **unknown**: AICIS public inventory has no record, and AICIS warns this does not show it is banned).
- US: the old cell "We did not check US cosmetic rules" is replaced by two FDA pages (new sources). The fold is now
  "The United States: cosmetic or drug, and pharmacy compounding"; the PCAC paragraph ends with CONTENT-GUIDE §1
  element 5 ("not an approved medicine in the US, the UK, Canada or Australia"; a listing "would change nothing
  outside the US").
- Australia: "not named in the Poisons Standard" only (the COPPER COMPOUNDS question is the merge's legal-review item 4).
- Sport fold: this run restored the Iamin sentence the draft had dropped, worded to the fact-check ("A wound gel was
  cleared in the US as a medical device in 1996, which is not an approval as a medicine"; it does not say the FDA
  cleared a "GHK-Cu" product).
- New: harm-reduction fold "Legal routes, and reporting side effects" (the nl-source page had no reporting paragraph).
- Summary, description, Lead: four countries; glance.facts "Allowed in the EU" → "On the skin" (four-country sources),
  "Injected use" no longer cites the EU regulation.

### Melanotan II
- What-it-is Compare: row "Approved in the EU?" → "Approved in the UK, Canada or Australia?" (melanotan II none;
  afamelanotide all three, Canada since July 2026; bremelanotide none). Afamelanotide is described as approved in the
  four countries; the EMA's description of how it works stays as evidence (marked).
- Regulatory Compare: four rows, three columns (approved, legal to supply, regulator warning). Australia: Schedule 4 since
  1 June 2018 is **not** an approval (TGA: "There are currently no products containing Melanotan II" on the ARTG).
  Canada: Health Canada's "generally regulated as prescription drugs" presented as its position; not on the PDL.
- Fold "The UK, Canada and Australia" (UK: MHRA FOI 2024 and 2021, OPSS analysis 2025–26; Canada: seizures, RUO label,
  border; Australia: scheduling history, TGA blog, infringement notices, nasal-spray test, possession law by the
  principle with Victoria and NSW as examples, personal import).
- This run: the US callout now cites the four status sources for "not an approved medicine in the US, the UK, Canada or
  Australia" (the draft cited only laws); NSW sentence also cites `au-nsw-ptg-act-1966` and says "check your own state
  or territory's law"; one sentence that the Customs "aphrodisiacs" rule's application is **not settled** (status
  file UNRESOLVED; stated as unknown, so the page never implies that no import rule applies); legal-routes fold "No
  country this site covers" → "None of the four countries"; setmelanotide indication wording matched to the label
  ("injury to, or a disorder of, the hypothalamus").
- Case-report locations (Gouda, German, Dutch, Belgian) removed from the text and study rows; the reports stay.
- Setmelanotide: the EU authorisation (EPAR) is replaced by the US approval and label (new sources), keeping the
  science (mole darkening and new moles in the label's warning 5.4; MC1 activity 20-fold lower).
- Kept with markers: `ema-epar-scenesse` (twice) and `fagg-melanotan-warning` ("a European medicines regulator found
  insulin in products sold as melanotan"); see open question 1.

### PT-141
- Frontmatter: description, `summary[1]` ("It treats low sex drive in women before menopause. The UK, Canada and
  Australia have not approved it."; 18 words, reading ease 66 on our formula), lede ("A US medicine for low desire in
  women. The UK, Canada and Australia have not approved it.": the blood-pressure clause was dropped to meet the
  18-word aim; it stays in the "biggest risk" tile, `summary[3]` and the risks section), `glance.facts` "Approved for"
  now cites Drugs@FDA instead of the EMA data, `grade_rationale.human_clinical` names the UK, Canada and Australia.
  These match the derived tile ("Only in the US. Approved in the US. Not approved in the UK, Canada or Australia.").
- What-it-is Compare row and the "Why this page looks different" callout: the UK, Canada and Australia.
- Regulatory Compare: four rows, three columns (approved; is a "research" product legal to supply; has the regulator
  acted). UK and Australia "acted" cells are **unknown** ("We found no … statement/warning"), not "no".
- Fold "The UK, Canada and Australia": UK (MHRA product records, licence rule, specials sentence kept from the
  nl-source UK paragraph, the London study, no MHRA statement); Canada (never authorised, submissions lists "since April
  2015" per the fact-check, Canadian trial sites 2011–2017, not on the PDL, HC position, DIN and new-drug rules, two 2025
  seizure notices, RUO label); Australia (not on the ARTG, no published application, not named in the Poisons Standard:
  "no schedule of its own", never called prescription-only; ARTG rule; aphrodisiacs rule not settled; the two Sydney
  studies, no published results).
- US fold: one closing sentence that the US approval applies only in the US.
- "Two sides of the regulatory gap": "A woman in the UK, Canada or Australia …"; the EMA lists replaced by Health
  Canada's and the TGA's published lists.
- Harm reduction: opening, "The legal route" (artsenverklaring/IGJ, AMG § 73 and Belgian art. 6quater removed), report
  side effects (Lareb removed). Blood-pressure thresholds now attributed: "The NHS, for example, counts it as high at
  140/90 …" (they are the NHS's figures; other countries' guidelines were not checked); "GP practice" → "your doctor".
- The status-fold date line now says the US and sport were checked on 22 October 2026 and the UK, CA and AU rows on
  23 October 2026 (merge.md 12.1 flagged the old hard-coded line).

## New facts and their source ids

| Page | Fact | Source id(s) |
|---|---|---|
| ghk-cu | US cosmetics and ingredients (except colour additives) need no FDA approval; GHK-Cu is not among the ingredients FDA rules prohibit or restrict | `fda-cosmetics-prohibited-restricted` (new) |
| ghk-cu | US: intended use decides cosmetic versus drug; claims such as "regenerate cells" make a product a drug | `fda-cosmetic-or-drug` (new) |
| ghk-cu | No UK-licensed medicine contains GHK-Cu; no MHRA statement on it | `uk-mhra-substance-index-status-c-2026-10-23`, `uk-govuk-search-status-c-2026-10-23` |
| ghk-cu | UK medicinal-product definition and licence rule | `uk-hmr-2012-reg-2`, `uk-hmr-2012-reg-46` |
| ghk-cu | Copper tripeptide-1 neither banned nor restricted in GB cosmetics; injected products are not cosmetics (Art. 2(2)) | `uk-cosmetic-products-reg-gb-annexes`, `uk-cosmetic-products-reg-gb-art-2` |
| ghk-cu | Canada: no authorised medicine; cosmetic definition; not on the Hotlist; injected products not cosmetics; therapeutic claims → drug | `ca-dpd-search-status-c-2026-10-23`, `ca-noc-search-status-c-2026-10-23`, `ca-fda-s2-definitions`, `ca-hc-cosmetic-ingredient-hotlist`, `ca-hc-cosmetic-drug-interface-guidance` |
| ghk-cu | HC: peptides "generally regulated as prescription drugs"; GHK-Cu among seized injectable peptides (April 2026) | `ca-hc-2026-04-think-twice-peptides` |
| ghk-cu | May 2026 recall of GHK-Cu powder sold to pharmacies as unauthorised ingredients (RA-82047, summarised in the index entry, seller rule) | `ca-hc-recalls-database` |
| ghk-cu | Not on the ARTG; TGA example of unapproved peptides "often supplied in injectable form"; June 2026 TGA–CMO statement | `au-artg-search-status-c-2026-10-23`, `au-tga-2026-04-peptide-responsibilities`, `au-tga-2026-06-cmo-peptide-statement` |
| ghk-cu | Not named in the Poisons Standard; TGA: some peptide products can be cosmetics; AU cosmetic use not confirmed (AICIS) | `au-poisons-standard-2026-10`, `au-tga-peptide-products-hub`, `au-aicis-inventory-search-ghk-cu-2026-10-23`, `au-aicis-cant-find-chemical` |
| all three | Side-effect reporting routes | `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `au-tga-report-adverse-event` |
| melanotan-ii | Afamelanotide (Scenesse) approved in the UK, Canada (NOC 9 July 2026; PDL 27 August 2026) and Australia (ARTG 327947) | `uk-mhra-substance-index-status-c-2026-10-23`, `ca-noc-search-status-c-2026-10-23`, `ca-hc-pdl-2026-08-27-additions`, `au-artg-search-status-c-2026-10-23` |
| melanotan-ii | Bremelanotide not approved in the UK, Canada or Australia | `mhra-products-search-bremelanotide`, `ca-dpd-search-status-c-2026-10-23`, `au-artg-search-status-c-2026-10-23` |
| melanotan-ii | Setmelanotide (Imcivree) US approval 25 November 2020; indications incl. acquired hypothalamic obesity; MC4 agonist with 20-fold less MC1/MC3 activity; warning 5.4 (darker and new moles, full skin examination) | `fda-drugsatfda-imcivree`, `fda-label-imcivree-2026-03` (new) |
| melanotan-ii | UK: no melanotan II product licensed; OPSS analysed melanotan products in 2025–26 (no findings published) | `uk-mhra-substance-index-status-c-2026-10-23`, `uk-opss-2026-08-delivery-report` |
| melanotan-ii | Canada: not authorised; not on the PDL; "Melanotan I and II" in RA-81874; four 2025 seizure notices; RUO label does not make it legal; unauthorised drug products illegal; border can hold parcels for Health Canada | `ca-dpd-…`, `ca-noc-…`, `ca-pdl-human`, `ca-hc-2026-04-think-twice-peptides`, `ca-hc-recalls-search-status-c-2026-10-23`, `ca-cbsa-d19-9-1`, `ca-hc-gui-0116-personal-import` |
| melanotan-ii | Australia: S4 since 1 June 2018, not in Appendix D; ACMS "no body of evidence"; S10 request not followed; no ARTG product; illegal to supply without prescription or advertise; 27 infringement notices, A$101,412 (May 2026); five sprays varied more than twofold (August 2026); TGA's list of reported harms; return to a pharmacy | `au-poisons-standard-2018-06`, `au-poisons-standard-2026-10`, `au-tga-2018-02-melanotan-ii-interim-decision`, `au-tga-2026-08-melanotan-ii-safety-alert`, `au-tga-2025-01-melanotan-blog`, `au-tga-2026-05-melanotan-ii-infringement-notices` |
| melanotan-ii | Possession: Victoria any S4 without authority; NSW only its S4D list, which omits melanotan II; others not checked | `au-vic-dpcs-act-1981`, `au-nsw-ptg-act-1966`, `au-nsw-health-s4d-2026` |
| melanotan-ii | Personal import of an S4 medicine needs an Australian doctor's written authority and identifiable packaging; "aphrodisiacs" rule not settled | `au-tg-regulations-1990-sch-5-item-1`, `au-tga-personal-importation-scheme`, `au-customs-prohibited-imports-regs` |
| melanotan-ii | Health Canada also advises returning products to a pharmacy | `ca-hc-recalls-database` |
| pt-141 | UK: no licensed product; one completed London study (NCT04179734, 2019–2020); no MHRA statement on PT-141 products | `mhra-products-search-bremelanotide`, `uk-mhra-substance-index-status-c-2026-10-23`, `ctgov-search-status-c-2026-10-23`, `uk-govuk-search-status-c-2026-10-23` |
| pt-141 | Canada: never authorised; no application in the published submissions lists (from April 2015); sites in the developer's 2011–2017 trials; not on the PDL | `ca-dpd-…`, `ca-noc-…`, `ca-hc-sur-search-status-c-2026-10-23`, `ctgov-search-status-c-2026-10-23`, `ca-pdl-human` |
| pt-141 | Canada: DIN rule (C.01.014) and new-drug rule (C.08.002); two 2025 seizure notices (RA-77218, RA-77807, by number only); RUO label | `ca-food-and-drug-regulations`, `ca-hc-recalls-search-status-c-2026-10-23`, `ca-hc-2026-04-think-twice-peptides` |
| pt-141 | Australia: not on the ARTG, no application published, no TGA warning names it; not named in the Poisons Standard; not-ARTG goods may not be imported, supplied or advertised (limited exceptions); aphrodisiacs rule not settled; two Sydney studies (2015), no published results | `au-artg-search-status-c-2026-10-23`, `au-tga-search-status-c-2026-10-23`, `au-poisons-standard-2026-10`, `au-tga-how-we-regulate-peptides`, `au-tga-peptide-products-hub`, `au-customs-prohibited-imports-regs`, `anzctr-actrn12615001033538`, `anzctr-actrn12615001059550` |

### The four new sources (`src/data/sources/en-compounds-d.yaml`), re-verified 24 October 2026

All ids were searched in every `src/data/sources/*.yaml` first: none registered before (the existing `ema-epar-imcivree`
is the EU document and stays registered). Each URL was fetched with curl in this run (HTTP 200) and read:
- `fda-cosmetic-or-drug`: "Content current as of 09/11/2024"; intended-use test, FD&C Act definitions, "regenerate
  cells", "do not require FDA approval before they go on the market" all found in the page text.
- `fda-cosmetics-prohibited-restricted`: "Content current as of 02/25/2022"; "do not need FDA approval"; the list
  starts with bithionol; the page text has no "copper", "peptide" or "GHK" (0 matches); the therapeutic-purpose sentence.
- `fda-drugsatfda-imcivree`: Company RHYTHM; IMCIVREE setmelanotide acetate, subcutaneous, prescription; ORIG-1
  11/25/2020 (Type 1 NME, priority, orphan); SUPPL-7 12/20/2024 and SUPPL-9 03/19/2026, both "Efficacy-New Indication".
- `fda-label-imcivree-2026-03`: PDF (1.3 MB) read with pdftotext: "Initial U.S. Approval: 2020", "Revised: 03/2026",
  indications (acquired HO from 4 years, BBS from 2, POMC/PCSK1/LEPR deficiency from 2), warning 5.4 and the highlight
  "Generalized increased skin pigmentation, darkening of pre-existing nevi, and development of new nevi have occurred",
  12.1 "20-fold less activity at the melanocortin 3 (MC3) and melanocortin 1 (MC1) receptors", patient counselling
  "occurs in the majority of patients … reversible upon discontinuation", trial NCT05774756.

The four reporting pages were checked: MedWatch and Yellow Card with curl (200); the Canada Vigilance and TGA pages time
out to curl from this machine and were opened in the built-in browser in my own tab (titles "Report a side effect of a
health product, drug or medical device - Canada.ca" and "Report an adverse event or safety problem | Therapeutic Goods
Administration (TGA)").

## No-loss check (cite ids, `git show nl-source-2026-10-23:<path>` against the working copy)

Counted with a script over `<Cite id>`, `source=`, `extraSources=`, `sources: [...]`, `source:` and `label_source:`.

| Page | Ids before → after | Removed (all European framing, all in the manifest) |
|---|---|---|
| ghk-cu | 31 → 53 | cbg-geneesmiddeleninformatiebank, cosing-copper-tripeptide-1, ema-medicines-json, eu-regulation-1223-2009-cosmetics, nl-gmw-art-40-handelsvergunning |
| melanotan-ii | 83 → 108 | be-medicines-law-1964, bfarm-2010-melanotan-warning, cbg-geneesmiddeleninformatiebank, de-amg-21, ema-epar-imcivree, ema-medicines-json, ema-medicines-search, lareb-home, nl-geneesmiddelenwet |
| pt-141 | 71 → 83 | be-medicines-law-1964, be-medicines-law-1964-art-6quater, cbg-geneesmiddeleninformatiebank, de-amg-21, de-amg-73, ema-medicines-json, ema-under-evaluation-2026-10, igj-leveren-op-artsenverklaring, lareb-home, nl-gmw-art-40-handelsvergunning, nl-regeling-gnw-art-3-17 |
| data files (3) | no id removed | – |

`ema-epar-imcivree` carried two things: the EU authorisation (framing, cut) and the label's mole warning (science,
kept, now cited to the US label `fda-label-imcivree-2026-03`). `bfarm-2010-melanotan-warning` carried the 2010 German
warning and its list of risks (cut; the TGA's own list of reported harms, `au-tga-2025-01-melanotan-blog`, now sits in
that place). No `<Claim>`, study, number or caveat was removed: every study row, KeyNumber, IconArray, TimeStrip and
Claim of the nl-source pages is still there.

## Validation

- `npx tsx scripts/validate-content.ts --only ghk-cu`, `--only melanotan-ii`, `--only pt-141`, `--only en-compounds-d`:
  **0 errors** each. Warnings, read and explained:
  - 4 per page "inline outbound link … prefer <Cite id>": the four reporting-form links the brief asks for
    ("linked"); CONTENT-GUIDE §10 allows a link to a reporting form; each is also cited, and the same pattern is on the
    other refocused compound pages.
  - `ghk-cu.yaml` "no regulatory row for BE (shown on preview locale nl)": Dutch-site data; no Belgian research in this
    round, and EU/NL/DE/BE rows are not ours to add (also listed in merge.md section 9).
- Full validator run: the 11 remaining errors are in other groups' files (`about/funding`, `start-here`, …); none
  in ours.
- Residue grep from the brief on the six files (three MDX, two glossaries, the sources file): no unmarked hit. Its
  pattern also matches inside ordinary words: `nada\b` in "Canada", `epar` in "department", `nvic` in "convicted"
  (with word boundaries these give no hit). Marked hits only: `melanotan-ii.mdx` lines 181–182 and 288–289
  (`residue-ok: EMA evidence`, the Scenesse EPAR) and 483–484 (`residue-ok: European regulator evidence`, the FAGG
  insulin finding). The validator's own residue scan reports nothing for the three pages.

## Rendered check (dev server, 24 October 2026)

`astro build` into a private folder stopped at another group's page (`start-here`: unknown source id
`cpsa-cma-code-of-ethics`) before the compound pages were written, so the three pages were rendered with the dev server
and read as text instead. All three return 200; the At-a-glance tiles read "Only in the US. Approved in the US. Not
approved in the UK, Canada or Australia. Only with a prescription." (PT-141) and "No. Not approved as a medicine in the
US, the UK, Canada or Australia." (GHK-Cu, melanotan II), matching the page text; the four-row Compares render; all
eight `/en/legal-routes/` anchors exist on that page; `/en/legal/ireland-and-new-zealand/` returns 200; no emergency
number is printed. **Not ours, for the owner of `src/i18n/en/product-check.json`:** the shared `<ProductCheck />` still
renders "In the EU, a medicine must show all four, even on a small vial." and "In the Netherlands, your doctor must keep
what you say private." on every page that uses it (also its EU/IGJ sources in the reference list); and the status table
prints "Schedule S4" (merge.md section 10, UI string).

## Open questions for the medical and legal reviewers

1. **FAGG insulin finding (melanotan II).** Kept as product evidence with the marker ("A European medicines regulator
   found insulin in products sold as melanotan; insulin can cause a coma"), also in the unknowns list and the
   ProductCheck line, because it is the only source for a serious, country-independent product risk. The source is a
   Dutch-language Belgian page, so its Dutch title shows in the reference list (a residue warning in built pages, not
   an error). Keep, or cut to the manifest?
2. **Australia, Customs Schedule 8 item 4 ("aphrodisiacs")** for melanotan II and bremelanotide (merge.md legal
   question 5): both pages now say the rule's application "has not been settled, and we found no official statement".
   Please confirm that wording, or settle the point.
3. **GHK-Cu in Australia:** the COPPER COMPOUNDS entries (Schedules 4 and 6) and AICIS cosmetic use (merge.md question 4):
   the page says only "not named in the Poisons Standard" and "could not be confirmed from public records".
4. **Canada:** Health Canada's "peptides are generally regulated as prescription drugs" is quoted as its position; the
   legal explanation rests on C.01.014 (DIN) and C.08.002 (new drugs) (merge.md question 7). The NOC database could not
   be re-checked by the fact-check (DPD extracts and the submissions lists support the "never authorised" lines).
5. **NSW:** the Poisons and Therapeutic Goods Act is replaced on 5 November 2026; the melanotan II sentence (offence only
   for the S4D list; melanotan II not on it) holds for both laws on the NSW Health page of 7 July 2026, but should be
   re-checked after 5 November.
6. **PT-141 in the UK:** the nl-source sentence on "specials" (regulation 167) was kept in the UK fold. Whether a
   prescriber could import Vyleesi as an unlicensed medicine is not stated, on purpose; the harm-reduction route list
   only links the routes page. "Cannot get bremelanotide on a normal prescription" (Two sides fold) is meant as "no
   licensed product"; please check it reads that way.
7. **Melanotan II "No country has approved it" / "approved nowhere"** (summary, lede, Lead) is a worldwide claim kept
   from the nl-source page; the data covers eight jurisdictions and WADA. Keep, or narrow to "none of the countries we
   checked"?
8. **PT-141 Sydney study ACTRN12615001059550:** outcome UNRESOLVED in the research; the page says only "we found no
   published results" for both studies.
9. **Blood-pressure thresholds** (PT-141 monitoring fold) are the NHS's; US, Canadian and Australian guideline thresholds
   were not researched, so the page attributes them ("The NHS, for example …").
