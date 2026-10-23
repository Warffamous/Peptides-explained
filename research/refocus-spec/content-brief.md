# Content brief: the English refocus (23 October 2026)

## Who the English site is for
Readers in the **United States, the United Kingdom, Canada and Australia** (full coverage: law, status, treatment routes,
reporting, help), with **short notes for Ireland and New Zealand** (regulator, reporting, help services; one notes page
`/en/legal/ireland-and-new-zealand/`). Write so that a reader in any of the four countries finds their own country's answer
on every page where the answer depends on the country — usually as one parallel row/card per country (US, UK, Canada,
Australia, in that order), never with one country as "the default".

## What leaves the English site (and is saved)
All **European framing**: the Netherlands, the EU, Belgium, Germany — their law, status rows, help services, insurance,
treatment routes, reporting routes, photos, glossary terms, and "Approved/Not in the EU" phrasing.
- Before you cut anything from a page that stays, record it in `research/for-nl-site/MANIFEST-<your-group>.md`: page,
  section heading, one line on what it said, and where the full text is (`snapshot-2026-10-23/...` or
  `git show nl-source-2026-10-23:<path>`). Whole pages that leave (legal/nl, eu, be, de) are already in the snapshot.
- The EU/NL/DE/BE **data** stays in `src/data/` (components hide it on English). Never delete EU/NL rows from data files.

## What may stay (keep it small)
1. **Publisher line** (about pages only): the site is published from the Netherlands, so Dutch law governs what it may say;
   that is why it sells nothing, links to no seller and gives no doses. Readers' countries have similar advertising rules.
2. **European regulators as scientific evidence**: an EMA assessment report's trial data, or a regulator committee's doubts
   about a benefit (e.g. tesamorelin: the EMA committee doubted the benefit was clinically meaningful; the applicant
   withdrew in 2012). Cite it as evidence, never as the reader's legal frame. Put `{/* residue-ok: EMA evidence */}` on the
   line before such a sentence.
3. **History**: global events (thalidomide, the 1962 Kefauver-Harris amendments, etc.) stay. Dutch law history goes.
4. **Ireland**: one sentence that EU-wide approvals apply in Ireland (on the notes page and where Ireland is mentioned).

## Residue check (until the script exists, grep your files)
These must not appear in English text you own (case-insensitive), except under the rules above:
`netherlands|dutch|\bnl\b|lareb|\bigj\b|\bcbg\b|meb\b|geneesmiddelenwet|huisarts|thuisarts|knmg|\bnhg\b|wgbo|wet big|big[- ]regist|artsenverklaring|zorginstituut|eigen risico|\bggd\b|rivm|nvic|\bseh\b|dopingautoriteit|belgi|famhp|\bafmps\b|german|bfarm|\bamg\b|nada\b|in the eu\b|outside the eu|eu-wide|status in the eu|approved in the eu|european union|\bema\b|epar|chmp|€`
(EMA/EPAR/CHMP only with the residue-ok marker; "European" only in history/evidence context.)

## Emergency and help
- Never print an emergency number. Write "call your local emergency number" (components use `common.emergency.*`).
- Help services are **named and linked**, never numbered (a service whose name contains a number, e.g. "NHS 111", may be
  named). Use the per-country help/reporting data and the `<JurisdictionCards>` / `<JurisdictionCard>` components.
- Side-effect reporting: FDA MedWatch (US), Yellow Card (UK), Canada Vigilance (Canada), TGA adverse event reporting
  (Australia); notes: HPRA (Ireland), CARM (New Zealand).

## Treatment-routes anchors (fixed; compound pages link to these on `/en/legal-routes/`)
`#prescription`, `#off-label`, `#us-compounding`, `#uk-specials`, `#canada-special-access`, `#australia-sas`,
`#personal-import`, `#trials`.

## Routes (link only to these)
start-here · basics (index), basics/what-is-a-peptide, basics/how-signalling-works, basics/pharmacokinetics,
basics/why-not-a-pill · history (index), history/timeline, history/how-we-got-here, history/the-croatian-lab · compounds
(index), compounds/<slug> (21 slugs) · evidence (index), evidence/how-to-read-a-study, evidence/the-translation-gap,
evidence/evidence-grading, evidence/conflicts-of-interest · legal (index), **legal/us, legal/uk, legal/ca, legal/au,
legal/ireland-and-new-zealand**, legal/research-use-only, legal/sport-and-doping, legal/whats-changing · safety (index),
safety/before-you-consider, safety/sterile-technique, safety/injection-safety, safety/sharps-disposal,
safety/product-risk, safety/monitoring, safety/warning-signs, safety/if-something-goes-wrong · talking-to-your-doctor ·
legal-routes · the-case-for-reform · glossary · sources · news · search · about (index), about/editorial-policy,
about/funding, about/corrections. (legal/nl, legal/eu, legal/be, legal/de no longer exist on English.)

## Words
British spelling, but no UK-only words: "your doctor" (not GP, except when explaining the UK system), "emergency
department" (not A&E), "pharmacy" (not chemist), "medicine" (not drug, where natural). Explain each country's own terms
once (e.g. DIN, ARTG, Schedule 4, "specials", 503A).

## Lab-report ladder (product-risk; also how start-here and ProductCheck refer to it)
A table/figure "What a lab report can and cannot tell you", rungs from most to least informative:
1. A report from an **independent laboratory accredited to ISO/IEC 17025**, for **that exact batch** (batch number on the
   report matches your label), testing identity (mass spectrometry), amount per vial (assay), purity (HPLC), and ideally
   endotoxin and sterility.
2. The **seller's own report** (or a report without a lab you can identify, check or verify).
3. **No report.**
4. **Not evidence at all**: "the seller uses it himself", reviews, "third-party tested" without a report you can read.
Every rung lists what **stays unknown**: whether it is sterile (most reports test endotoxin at best, not sterility); the
real amount in *your* vial; whether your vial is from the tested batch (a report with an empty batch field cannot be
linked to any vial); whether the report is genuine; how it was stored and shipped. "Analysis results relate only to the
samples tested" — a report covers one sample. Close with: only the pharmacy supply chain has these checks built in (GMP,
every batch tested and released by a responsible person, inspected by the regulator), and no report replaces that.
It answers the reader's claim "we know what's in the vial and that it is clean": a report can show what was in the sample
tested; "clean" needs sterility and endotoxin results for that batch, and neither covers what happens after.
Rules: no seller or lab names; no "trusted", "reputable", "legit", "reliable source"; no ranking of sellers; no headings,
link texts or labels containing commerce words (buy, order, shop, vendor, supplier, price, deal, sale…). Sources: FDA
21 CFR 211 (CGMP), USP <71> sterility and <85> endotoxin, ICH Q6B, ISO/IEC 17025 (the standard's scope page), existing
product-risk sources. The existing CONTENT-GUIDE §1a rule is updated to allow exactly this form.

## Tesamorelin
- Status: US approved (Egrifta 2010; Egrifta SV 2018/2019 naming; Egrifta WR 2025); **Canada approved 29 Apr 2014, marketed
  from 2015, cancelled 30 Sep 2022 for business reasons (no longer sold)**; not approved in the UK or Australia (per the
  research files). The At-a-glance tile is derived from data; keep page text consistent with it.
- `safety/before-you-consider.mdx`: the tumour row "Never studied" is wrong for tesamorelin: its 10-year US safety study,
  meant to look at cancer, was stopped in 2018 with no results posted (check research/refocus/status/tesamorelin.yaml for
  the exact NCT01579695 primary outcome); the other boosters were never studied.

## Keep the science
Never drop a `<Cite>`, `<Claim>`, study, number or caveat that is not European framing. Fact-checkers diff each page against
`git show nl-source-2026-10-23:<path>` and confirm every removed cite id is listed in the group's manifest as European
framing.

## Research inputs (fact-checked)
`research/refocus/` — canada-legal.md, australia-legal.md, ireland-nz.md, us-uk-routes.md, feeds-help-extras.md,
status/<slug>.yaml; their sources are merged into `src/data/sources/refocus-*.yaml` (reuse those ids; add new sources to
your group's own sources file only if you need more).
