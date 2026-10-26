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
10. **GHK-Cu, US category 1** (added in the review run, below): the page now says that the FDA "does not intend to act
   against pharmacies that make medicines with it" for non-injectable GHK-Cu while it evaluates it. Please confirm the
   wording reads as the FDA's enforcement policy (not a legal permission), and that naming it is not read as pointing
   readers to a source.

## Review run (third run of this assignment)

The workflow re-ran this assignment ("Try again"). `git status` showed no uncommitted change in the owned files: the
draft above had been committed in `1b7304f`. It was reviewed again, line by line, against the content brief,
CONTENT-GUIDE §1, §1a, §1b and §5, the three status files (rows, notes, page facts, fact-check blocks) and merge.md.
It was kept, with these corrections:

| Page | Change | Why | Source ids |
|---|---|---|---|
| ghk-cu | Harm-reduction "Legal routes": "No medicine with GHK-Cu is approved …, so a doctor cannot prescribe one" → "No approved medicine with GHK-Cu exists …", plus two sentences: in the US, non-injectable GHK-Cu is in the FDA's category 1, so while the FDA evaluates it, it does not intend to act against pharmacies that make medicines with it if its guidance's conditions are met; that is not an approval and does not cover injections | the old sentence implied there is no prescription route at all, which is wrong for compounded non-injectable GHK-Cu in the US (FDA categories list of 14 May 2026: "GHK-Cu (except for injectable routes of administration)" in category 1; the bulks page: "FDA does not intend to take action against a compounder for compounding drugs using bulk drug substances listed in category 1, provided that the conditions described in the guidance document are met"). The routes page already says GHK-Cu for other routes is the one exception in category 1 | `fda-503a-categories-2026-05`, `fda-503a-bulks-page` (both re-fetched with curl in this run, HTTP 200; the PDF read with pdftotext) |
| ghk-cu | US fold: the same meaning of category 1 added after "GHK-Cu for other routes is in category 1, still under evaluation" | same | same |
| ghk-cu, melanotan-ii | Canada fold: "In law, a drug may not be sold in Canada without a drug identification number (DIN) … A new drug also needs Health Canada's approval before it is sold or advertised." (the PT-141 page already had it) | brief, Canada caution: present "generally regulated as prescription drugs" as Health Canada's position and rest the legal explanation on the DIN and new-drug rules | `ca-food-and-drug-regulations` (C.01.014(1), C.08.002(1)), `ca-hc-2026-04-think-twice-peptides` (eight-digit DIN) |
| melanotan-ii | Regulatory Compare, Canada, "Has the regulator warned about it?": "It lists melanotan I and II among seized unauthorised peptides (2026)" → "Its 2026 warning about unauthorised peptides names melanotan I and II among seized products" | the status file: no melanotan-specific Health Canada advisory was found and the page should not say Health Canada issued a tanning warning; RA-81874 is a general peptide warning that names melanotan I and II as examples | `ca-hc-2026-04-think-twice-peptides` |
| melanotan-ii | Regulatory Compare, Australia: "fines for a supplier" → "fines for supplying it" | avoids a commerce word in a figure cell (not a validator error; house style) | unchanged |

Checked again in this run, no change needed:
- **Facts against the research.** Every UK, Canada and Australia sentence of the three pages against
  `research/refocus/status/{ghk-cu,melanotan-ii,pt-141}.yaml` (rows, notes, page facts, fact-check): the PT-141
  submissions-list coverage ("since April 2015"), the 2011–2017 Canadian trial sites, the London study (2019–2020),
  the two Sydney studies (2015, no published results), "unscheduled" in Australia and never "prescription-only"; the
  melanotan II schedule (S4 from 1 June 2018, not Appendix D), ACMS quotation, infringement notices (27, A$101,412, a
  NSW individual), the nasal-spray test, Victoria and NSW possession, personal import; the GHK-Cu two categories, the
  AICIS unknown and "not named in the Poisons Standard" only. The UNRESOLVED points (COPPER COMPOUNDS, "aphrodisiacs",
  the LNHPD, ACTRN12615001059550) are stated as unknown or left out.
- **Seller rule.** `fr-2016-melanotan-debarment` has a descriptive title and the Federal Register short link (the
  official title names the person); `au-tga-2026-05-melanotan-ii-infringement-notices` names no one; the Canadian
  seizure and recall advisories are cited through `ca-hc-recalls-database` / `ca-hc-recalls-search-status-c-2026-10-23`,
  the FDA warning letters through `fda-warning-letters-index`.
- **The four new sources** (`en-compounds-d.yaml`) were fetched again with curl in this run (HTTP 200 each) and their
  quotations found in the text: "Content current as of" 09/11/2024 and 02/25/2022; "regenerate cells"; "do not require
  FDA approval before they go on the market"; no copper, peptide or GHK entry on the prohibited-and-restricted page;
  Drugs@FDA 213793 (Rhythm, 11/25/2020, SUPPL-9 "Efficacy-New Indication"); the label PDF ("Initial U.S. Approval:
  2020", "Revised: 03/2026", "20-fold less activity at the melanocortin 3 (MC3) and melanocortin 1 (MC1) receptors",
  warning 5.4, "occurs in the majority of patients", "hypothalamic injury or dysfunction"). No other source file holds
  these URLs.
- **Reporting links.** MedWatch and Yellow Card: curl, HTTP 200. Canada.ca reporting page: WebFetch (title "Report a
  side effect of a health product, drug or medical device - Canada.ca"). TGA reporting page: curl times out from this
  machine; opened in the built-in browser in its own tab (title "Report an adverse event or safety problem |
  Therapeutic Goods Administration (TGA)", last updated 2 September 2026).
- **No-loss check** re-run with a Node script over `<Cite id>`, `source=`, `extraSources=`, `sources: [...]` and
  `source:`, against `git show nl-source-2026-10-23:<path>`: the draft's counts above hold (ghk-cu 31 → 53,
  melanotan-ii 83 → 108, pt-141 71 → 83), and after this run's edits ghk-cu has 54 (`ca-food-and-drug-regulations`
  added; melanotan II and PT-141 unchanged). The removed ids are exactly the ones in the table above and in the
  manifest, all European framing; none was removed in this run.
- **FAGG insulin finding.** PubMed ("melanotan AND insulin", 25 records) has no paper reporting insulin in products
  sold as melanotan (the hits are metabolic animal studies and a general review of falsified biotech drugs), so the
  FAGG page stays the only source and is kept, marked, as product evidence (open question 1). Note for the reviewer:
  its reference-list entry prints the Belgian agency's Dutch name and title ("Federaal Agentschap voor Geneesmiddelen en
  Gezondheidsproducten (FAGG)"), which `check:residue` reports on the built page as a cited-title warning.
- **Manifest** `research/for-nl-site/MANIFEST-compounds-d.md`: nothing new was cut in this run.
- **Validation:** `npx tsx scripts/validate-content.ts --only ghk-cu|melanotan-ii|pt-141|en-compounds-d`: 0 errors;
  the same 5 / 4 / 4 / 0 warnings as above (reporting-form links; the BE row on the Dutch preview). Residue grep from
  the brief on the six owned text files: only the known false positives (`nada\b` in "Canada", `epar` in
  "department", `nvic` in "convicted") and the three marked lines.
- **Rendered check** (dev server, this run): the three pages return 200; GHK-Cu's tile reads "No. Not approved as a
  medicine in the US, the UK, Canada or Australia.", its fact sheet "Approved in: Not in the US, the UK, Canada or
  Australia", and its status table shows the US, UK, CA and AU rows and WADA only; the new sentences render. No
  emergency number printed (the only 111/112/999 strings are citation numbers and journal page ranges). Still not
  ours: the shared `<ProductCheck />` prints "In the EU, a medicine must show all four, even on a small vial." and "In
  the Netherlands, your doctor must keep what you say private." on all three pages, with EU and IGJ sources in their
  reference lists; and the status table's "Schedule S4" string (merge.md section 10).

## Adversarial fact-check (26 October 2026)

Independent check of the three pages, the data rows, the two glossaries and `en-compounds-d.yaml` against the content
brief, CONTENT-GUIDE §1/§1a/§1b/§5, the three status files (rows, notes, page facts, fact-check blocks), the source
records' notes and, where a claim was new or changed, the source itself.

### Re-fetched in this check
- FDA 503A categories PDF (fda.gov/media/94155/download, curl, HTTP 200, pdftotext): "Updated May 14, 2026";
  "GHK-Cu (except for injectable routes of administration)" added back to category 1, with the May 5, 2026
  clarification and the PCAC plan "before the end of February 2027"; no "melanotan" anywhere in the PDF (so "in none of
  the FDA's three 503A categories" holds).
- FDA 503A bulks page (curl, HTTP 200, "Content current as of: 05/14/2026"): "FDA does not intend to take action against
  a compounder for compounding drugs using bulk drug substances listed in category 1, provided that the conditions
  described in the guidance document are met" (the GHK-Cu legal-routes and US-fold sentences match).
- `fda-cosmetic-or-drug` and `fda-cosmetics-prohibited-restricted` (curl, HTTP 200): "regenerate cells", "with the
  exception of color additives, do not require FDA approval", "other than color additives, do not need FDA approval";
  0 matches for copper, GHK or peptide on the prohibited-and-restricted page. Dates 09/11/2024 and 02/25/2022.
- `fda-drugsatfda-imcivree` (curl, HTTP 200) and the SUPPL-9 approval letter linked from it (pdftotext): SUPPL-9
  (19 March 2026) "provides for ... addition of an indication ... with acquired hypothalamic obesity". The label PDF
  (`fda-label-imcivree-2026-03`): "Initial U.S. Approval: 2020", "Revised: 03/2026", warning 5.4, "20-fold less
  activity at the melanocortin 3 (MC3) and melanocortin 1 (MC1) receptors", "occurs in the majority of patients".
- Reporting links: MedWatch and Yellow Card by curl (HTTP 200); the Canada.ca reporting page by WebFetch ("Anyone can
  report a side effect ...", "even if you are not sure", page details 2023-09-08). tga.gov.au timed out to curl and
  WebFetch from this machine; the TGA reporting page and the TGA melanotan releases rest on the earlier browser reads
  recorded above and in the source notes.
- `/en/legal-routes/` headings: "Prescription", "Off-label", "US compounding", "UK specials", "Canada: special access",
  "Australia: SAS", "Personal import", "Trials" are present, so all eight anchors exist.

### Errors found and fixed

| Page | Was | Now | Why | Source ids |
|---|---|---|---|---|
| melanotan-ii | "Setmelanotide ... approved in the US since 25 November 2020 to reduce excess weight in some rare genetic conditions, and in obesity caused by injury to, or a disorder of, the hypothalamus" | the hypothalamic-obesity indication is dated separately: "Since March 2026 it is also approved for ..." | the sentence dated the 2026 indication to 2020; Drugs@FDA SUPPL-9 (19 March 2026) is the acquired-HO indication (approval letter read). The source note of `fda-drugsatfda-imcivree` now records the letter | `fda-drugsatfda-imcivree`, `fda-label-imcivree-2026-03` |
| melanotan-ii | "a person in New South Wales paid 27 infringement notices ... for supplying melanotan II"; Compare cell "fines for supplying it" | "for allegedly supplying"; "fines in 2026 for alleged supply" | the TGA release is titled "Individual issued 27 infringement notices for allegedly supplying Melanotan II" and describes "alleged unlawful supply"; paying an infringement notice is not a finding of guilt, so the page must not state the supply as fact | `au-tga-2026-05-melanotan-ii-infringement-notices` |
| melanotan-ii | NSW: "melanotan II is not on the list NSW Health publishes" cited only to the list for the law from 5 November 2026 | adds "now or under the new NSW laws that apply from 5 November 2026" and cites the current S4D list as well | the offence today is under the 1966 Act and the current Appendix D (NSW Health page of 9 July 2026); both NSW Health lists omit melanotan II | `au-nsw-ptg-act-1966`, `au-nsw-health-s4d` (added), `au-nsw-health-s4d-2026` |
| melanotan-ii | what-it-is Compare detail "checked on 22 October 2026" | "checked on 22 and 23 October 2026" | its UK, Canada and Australia row was checked on 23 October | – |
| ghk-cu | "In May 2026 it [Health Canada] recalled GHK-Cu powder ..." | "In May 2026 Health Canada published a recall of GHK-Cu powder ..." | RA-82047 is a recall notice that Health Canada publishes (depth: compounding and community pharmacies); the record does not say Health Canada itself recalled the product | `ca-hc-recalls-database` |
| ghk-cu | what-it-is Compare "Can it be a cosmetic?": US, UK and Canada only, with a "yes" | adds "For Australia, this could not be confirmed." with the AICIS sources | brief: each of the four countries finds its own answer; the status file leaves Australia UNRESOLVED | `au-aicis-inventory-search-ghk-cu-2026-10-23`, `au-aicis-cant-find-chemical` |
| ghk-cu | `glance.facts` "Injected use": "No published studies in people" (the nl-source caveat "Not a cosmetic" was dropped with the EU law) | "No published studies in people; not a cosmetic (UK, Canada)" (10 words, the schema limit) | keep the caveat; the same rule exists in UK and Canadian law (the US cosmetics definition was not checked for injections, so the US is not named) | `pubmed-ghk-cu-count-2026-10-23`, `uk-cosmetic-products-reg-gb-art-2`, `ca-hc-cosmetic-drug-interface-guidance` |
| pt-141 | lede "A US medicine for low desire in women. The UK, Canada and Australia have not approved it." (the nl-source's "It briefly raises blood pressure." had been dropped) | "A US medicine for low desire in women. Not approved in the UK, Canada or Australia. It briefly raises blood pressure." | the blood-pressure rise is the page's main safety point and was in the nl-source lede; restored. 21 words: within the 25-word rule (CONTENT-GUIDE §9.1), above the validator's 18-word aim (warning accepted, see below) | `dailymed-vyleesi-label` (page body) |
| pt-141 | Sydney studies "gave single injections of PT-141 to men" | "to male volunteers" | ACTRN12615001059550 enrolled "males with autism"; the record read does not show that all were adults | `anzctr-actrn12615001033538`, `anzctr-actrn12615001059550` |
| pt-141 | "In a separate study, 38% ..." | "In another study, 38% ..." | wording only: "separate" matched the brief's residue pattern `epar` (false positive), so the grep is now clean | – |

### Checked, no change needed
- **Every not-authorised claim** against the status files: GHK-Cu (US, UK, CA, AU: no approved medicine; cosmetic
  status US/UK/CA not banned or restricted, AU unknown; "not named in the Poisons Standard" only), melanotan II (none
  of the four; AU Schedule 4 from 1 June 2018, not Appendix D, no ARTG product; HC: no melanotan-specific advisory,
  named in RA-81874 and four 2025 seizure notices), PT-141 (UK, CA, AU not approved; CA "never authorised", the
  submissions lists "since April 2015"; AU unscheduled, never "prescription-only"). Afamelanotide approved in the UK
  (MHRA substance index: SCENESSE), Canada (NOC 9 July 2026; PDL 27 August 2026) and Australia (ARTG 327947).
- **UNRESOLVED points** stay unknown or out: COPPER COMPOUNDS, AICIS, the "aphrodisiacs" rule (both pages: "has not
  been settled"), LNHPD (not mentioned), ACTRN12615001059550 ("we found no published results").
- **Canada caution:** every Canadian paragraph says Health Canada has not authorised the product; "generally regulated
  as prescription drugs" is presented as Health Canada's position, with the DIN and new-drug rules as the law; the SAP is
  only linked in the neutral list of routes (as the assignment asks), never offered as a way to get the product.
- **Seller rule:** the Canadian seizure and recall notices are cited through the index records; the FDA warning
  letters through `fda-warning-letters-index`; the infringement-notice release names no one.
- **No-loss check** (script over `<Cite id>`, `source=`, `extraSources=`, `sources: [...]`, against
  `git show nl-source-2026-10-23:<path>`): ghk-cu 31 → 54, melanotan-ii 83 → 109 (`au-nsw-health-s4d` added in this
  check), pt-141 71 → 83. Removed ids: exactly the European ones in the table above and in the manifest. Every
  `<Claim>`, study row, KeyNumber, IconArray and TimeStrip of the nl-source pages is still there. PT-141's dropped US
  Compare row "Can a doctor prescribe it? Yes: on prescription" is carried by the US row's "on prescription" cell.
  Data files: unchanged in this check; the two renamed melanotan II study ids are used only by the English MDX
  (no other locale MDX exists).
- **Residue:** the brief's grep on the six owned text files now gives only `nada\b` in "Canada", `epar` in
  "department", `nvic` in "convicted", and the two marked EMA lines (melanotan-ii.mdx 181–182 and 288–289). Markers sit
  only on genuine evidence: the Scenesse EPAR's account of how afamelanotide works (EMA evidence), and the FAGG
  laboratory finding of insulin in products sold as melanotan (regulator product evidence, open question 1).
- **Guardrails:** no doses (the PT-141 label limits "one dose in 24 hours" and "more than 8 doses a month" are label
  safety limits carried over from the nl-source), no seller help, no emergency number ("call your local emergency
  number" only), no commerce token in a title, heading, Lead, fold title or figure title, no lab-report-ladder
  wording, "your doctor" instead of GP, products never assumed to come from a seller.
- **Validation:** `npx tsx scripts/validate-content.ts --only ghk-cu|melanotan-ii|pt-141|en-compounds-d`: 0 errors.
  Warnings: the four reporting-form links per page (asked for by the brief), the Dutch-preview BE row on ghk-cu.yaml,
  and on pt-141 "lede: 21 words (aim for 18 or fewer)": kept on purpose to restore the blood-pressure caveat; the hard
  limit is 25 words and the reading-ease warning is gone with the three short sentences.

### Open for the reviewers (in addition to questions 1–10 above)
11. The TGA pages could not be re-opened from this machine in this check (timeouts); the melanotan II Australian
    figures (27 notices, A$101,412, five sprays) rest on the browser reads recorded in the source notes.
12. Melanotan II, Australian personal import: the page states the written-authority and packaging conditions of the
    Personal Importation Scheme as law. Please confirm this reads as a legal limit, not as a route to obtain it.
