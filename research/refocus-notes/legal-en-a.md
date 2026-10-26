# Refocus notes: legal-en-a (the legal section's country pages), 24 October 2026

Group `legal-en-a`. Inputs: `research/refocus-spec/content-brief.md`, `docs/CONTENT-GUIDE.md`, the fact-checked research
(`research/refocus/canada-legal.md`, `australia-legal.md`, `ireland-nz.md`, `us-uk-routes.md`, `feeds-help-extras.md`,
each with its "Fact-check (independent)" section), `research/refocus-notes/merge.md` (dropped sources, lead decisions,
legal-review questions). This run finished an interrupted earlier run: the three new pages, the index rewrite, the four
photos and their registry entries were drafts from that run; each was re-read against the research and corrected
(section 2). Nothing in `src/data/sources/refocus-*.yaml` was edited.

## 1. Files

| File | What |
|---|---|
| `src/content/pages/en/legal/ca.mdx` | new: "Peptides and the law in Canada" (`jurisdiction: CA`, order 4) |
| `src/content/pages/en/legal/au.mdx` | new: "Peptides and the law in Australia" (`jurisdiction: AU`, order 5) |
| `src/content/pages/en/legal/ireland-and-new-zealand.mdx` | new: notes page, `<JurisdictionCards which="notes" />` (order 5; sorts after `legal/au` by key) |
| `src/content/pages/en/legal/index.mdx` | rewritten: four-country map plus the notes page, `<JurisdictionCards which="full" />`, no NL/EU contacts |
| `src/content/pages/en/legal/us.mdx`, `uk.mdx` | EU/NL comparisons removed; facts checked against us-uk-routes.md; a few fact-checked additions; order 2 and 3 |
| `src/content/pages/en/legal/{nl,eu,be,de}.mdx` | removed with `git rm` (staged); byte-identical to the snapshot and the tag |
| `src/i18n/en/glossary/legal-a.json` | 21 NL/EU/BE/DE terms moved out (manifest); `pharmacopoeia` aliases trimmed; `nado` made country-neutral |
| `src/i18n/en/glossary/legal-en.json` | new: 38 entries: Canadian, Australian, Irish and New Zealand legal terms, and a neutral `ethics-committee` |
| `src/data/heroes.yaml`, `src/data/media.yaml`, `src/i18n/en/media.json` | entries added (earlier run, checked this run): 4 photos (section 6) |
| `research/for-nl-site/MANIFEST-legal-en-a.md` | what left English and where it is |
| `src/data/sources/en-legal-en-a.yaml` | **not created**: every fact uses an existing id (refocus-*.yaml, us-uk-routes, en-merge-check, existing files) |
| `config/link-allowlist.json` | not changed by this group (no new external host is linked) |

## 2. What changed, per page

### legal/index
- Description, summary (four countries), country map (US, UK, Canada, Australia, the notes page; then research use only,
  treatment routes, sport, what's changing), the "same basic pattern" paragraph now cites each country's definition and
  approval rule (`usc-21-321`, `uk-hmr-2012-reg-2`, `ca-fda-s2-definitions`, `au-tg-act-s3-definitions`; `usc-21-355`,
  `uk-hmr-2012-reg-46`, `ca-food-and-drug-regulations`, `au-tg-act-s19b-19d-offences`).
- "Contacts in the Netherlands and the EU" replaced by "Who to contact" with `<JurisdictionCards which="full" />` and a
  link to the notes page; "call your local emergency number".
- This run: summary item 2 cut to 16 words, item 3 and the Lead answer rewritten for reading ease (84 and 80).

### legal/us
- Removed: "Nothing the FDA decides changes the law in the Netherlands or the rest of the EU" (`nl-geneesmiddelenwet`) →
  "US rules apply in the US only", with a link to the law section.
- PCAC fold, point 5 (canonical framing, CONTENT-GUIDE §1): "None of the six is an approved medicine in the US, the UK,
  Canada or Australia (Semax is registered as a medicine in Russia)" and "it would change nothing outside the US".
  Removed cites `ema-medicines-search`, `nl-geneesmiddelenwet`; added the status records that back the four rows of the
  six data files: `fr-2026-07361-pcac-notice` (US), `uk-mhra-substance-index-status-c-2026-10-23` (BPC-157, KPV, TB-500),
  `mhra-products-search-status-d-2026-10-23` (MOTS-c, Semax, epitalon), `ca-dpd-search-status-c-2026-10-23`,
  `ca-dpd-extract-search-merge-2026-10-24`, `au-artg-search-status-c-2026-10-23`, `au-artg-search-status-d-2026-10-23`.
  "Six" instead of "these": emideltide, the seventh, is not a site compound and has no data rows.
- Added (fact-checked research, us-uk-routes.md): US-41a, the FDA staff manual's definition of commercial shipments
  (outside the lenient personal-import approach) as a new row of the import table (`fda-rpm-ch9-personal-importations`);
  US-51, retatrutide "cannot be used in compounding under federal law" (`fda-unapproved-glp1-concerns`, already on the page);
  US-23, the Federal Register re-check of 23 October (`federalregister-fda-search-2026-10-23`); a link to
  `/en/legal-routes/#us-compounding`; Compare detail "checked on 22 October and again on 24 October 2026".
- Checked and unchanged: every other statement matches us-uk-routes.md rows US-01 to US-55 (fact-check: "us.mdx and uk.mdx
  statements ... still match"). The $2,500 destruction sentence quotes the statute (`usc-21-381`), not the staff manual,
  so the fact-check's US-42 caution ("examples, not a rule") does not apply to it.

### legal/uk
- Removed: "They are the same two tests as in EU law" (`eu-directive-2001-83`).
- Added UK-30 (MHRA FOI 22/431, March 2022): Border Force seizes unlicensed medicines at entry and tells the MHRA; about
  6.3 million doses March 2021 to February 2022; seizures above personal-use amounts destroyed, some released on review
  (`mhra-foi-22-431-personal-import-seizures`), in a fold "What happens at the border". The "What we could not find" callout
  now says the figures are from 2022 and that current practice is unknown (us-uk-routes UNRESOLVED: "UK seizure practice
  today").
- Added UK-13/UK-17 (MHRA GN14): a special should not be supplied when a licensed medicine can meet the need; products not
  licensed and not classed as medicines in their country of origin "should be avoided whenever possible"
  (`mhra-gn14-specials`). Link now `/en/legal-routes/#uk-specials`.
- Two Diagram captions reworded after the validator began checking captions for commerce words ("when you buy" → "when
  you bring in"; "may order a 'special'" → "may ask for a 'special'").
- "NHS 111" is kept as a service name (UK page; CONTENT-GUIDE §1 allows it).

### legal/ca (new; drafted by the earlier run, corrected this run)
Structure as legal/us: Compare grid; what counts as a drug (two tests; folds on NOC/DIN, the Prescription Drug List and
Health Canada's position, natural health products and cosmetics); the core rule and penalties (fold on powers); "research
use only" and Health Canada's actions 2023–2026 (fold on what Health Canada tells people who have a product); pharmacy
compounding (fold on compounded GLP-1s and the Alberta physicians' notice); importing; advertising (fold on why the page
keeps saying "not authorised"); treatment routes (status table); reporting (`<JurisdictionCard code="CA" />`); sport.
Corrections this run:
- Treatment routes: the sentence that named the Special Access Program next to "other legal routes" for these peptides
  was replaced by a neutral link ("The other legal routes in Canada, and who each one is for, are explained on …
  #canada-special-access"), after a plain statement that Health Canada has not authorised the experimental peptides or
  assessed their safety (brief, Canada caution; canada-legal 11.3).
- Summary item 4: "may not get prescription drugs by mail" → "may not bring in prescription drugs by mail" (the rule is
  about importing; Canadian pharmacies may mail prescriptions).
- Status table: retatrutide and SS-31 moved to their own row "Not authorised, still being tested in trials" (data CA rows
  `investigational`; `ca-ctgov-canada-peptide-search-2026-10-23` added).
- Checked and kept: Health Canada's "injectable peptides are generally regulated as prescription drugs" is attributed, and
  the page says we found no legal provision for it and rests on the new-drug and DIN rules (UNRESOLVED 1); tesamorelin
  "approved in 2014, no longer sold, last DIN cancelled in September 2022" without "business reasons" (lead decision,
  merge.md 3.2); dropped sources not used (injunction statement, RA-76830 and RA-82047 pages): those events cite the
  `ca-hc-recalls-database` index; the June 2026 injunction is left out (its only source names the seller).

### legal/au (new; drafted by the earlier run, corrected this run)
Structure as legal/us: Compare grid; what counts as a therapeutic good (fold on the ARTG); the core rule and penalties
(fold on infringement notices and counterfeits); Schedule 4 and the Poisons Standard (fold "Not named does not mean
legal"); possession by state (Compare: Victoria, Queensland, New South Wales; fold on penalties); importing (fold on growth
hormones and the September 2026 changes); advertising (fold on the code); compounding; treatment routes (SAS A/B/C,
Authorised Prescriber; link `#australia-sas`); enforcement 2024–2026 (fold on what the TGA tells people who have a
product); reporting (`<JurisdictionCard code="AU" />`); sport.
Corrections this run:
- CJC-1295 (merge.md 7.2): no longer stated flatly as Schedule 4 in the Compare grid or the state table. The schedule table
  lists it as "named, but see the note below", and the fold says it is named with the CAS number of the form without DAC,
  that which entry covers the DAC form is for the legal reviewer, and that both entries are Schedule 4
  (`au-poisons-standard-2026-10`, whose note records the CAS numbers and the PubChem and FDA confirmations). The state
  Compare row now names TB-500, ipamorelin, hexarelin and AOD-9604 (all on NSW's S4D list and in Schedule 4).
- Infringement notice: "at most 12 penalty units" (s 42YKA: the lesser of one fifth of the court maximum and 12 PU).
- Checked and kept: BPC-157 in NSW stated as unknown (UNRESOLVED 1; "Do not state it either way" → the cell says it is
  not on NSW Health's list but the national list names it); other states and territories "not checked"; Queensland is
  included beside the brief's NSW and Victoria examples because the fact-check confirmed its sections; schedules stated
  only where named (tesamorelin "may be covered by a group entry … which does not name it"); retatrutide not named, with
  the TGA's own reading quoted; no sport status for retatrutide (SIA conflict, UNRESOLVED 7); no state penalty units
  converted to dollars.

### legal/ireland-and-new-zealand (new; drafted by the earlier run, checked this run)
Side-by-side table; Ireland (HPRA, the one marked EU sentence, prescription rule, online-sale ban; folds: the law, bringing
medicines in, HPRA findings, side effects/sport/help); New Zealand (classification table; folds: the law incl. section 29
and the Medical Products Bill, bringing medicines in, side effects/sport/help); `<JurisdictionCards which="notes" />`.
Checked against ireland-nz.md and its fact-check: "make or distribute them"; melanotan "since 2022"; HSE urgent care as
listed; NZ notice wording "the current notice, published on 3 August 2026, lists the same groups" (not "since");
"Patients and health professionals can report"; no named athlete and no Sports Tribunal citation (source dropped); news-only
figures (RTÉ, NZ Herald) left out (hosts not allowlisted, merge.md 1.3).

## 3. New facts and their source ids

No new source was registered. The three new pages use 52 (ca), 67 (au) and 50 (ireland-and-new-zealand) cite ids, all
from `src/data/sources/refocus-{canada,australia,ireland-nz,status-b,status-c,status-d,extras}.yaml`, `bpc-157.yaml`
(`wada-2026-list-en`) and `en-merge-check.yaml`; each sentence carries its id inline. Key facts by page:

| Page | Fact | Source id(s) |
|---|---|---|
| ca | "drug" = for treating disease or "restoring, correcting or modifying organic functions"; "sell" includes giving away | `ca-fda-s2-definitions` |
| ca | no sale or advertising of a new drug without a NOC; DIN needed to sell in dosage form | `ca-food-and-drug-regulations`, `ca-fdr-c08-001-new-drug`, `ca-fdr-c08-004-notice-of-compliance` |
| ca | Health Canada: "peptides are generally regulated as prescription drugs"; "research use" label "does not make these products legal"; works with CBSA | `ca-hc-2026-04-think-twice-peptides` |
| ca | "injectable peptides are regulated as prescription drugs in Canada" (RA-77275, RA-77807) | `ca-hc-recalls-database` |
| ca | PDL names semaglutide, tirzepatide, tesamorelin; no experimental peptide, no general entry | `ca-pdl-human`, `ca-hc-pdl-overview`, `ca-fda-s29-1-prescription-drug-list` |
| ca | penalties: $5,000,000 / 2 years (indictment); 5 years for knowingly or recklessly causing serious risk | `ca-fda-s31-2-therapeutic-products-penalty`, `ca-fda-s31-4-serious-risk-penalty` |
| ca | enforcement timeline Dec 2023 to May 2026 (no seller named), Type I recall of BPC-157 and GHK-Cu powder | `ca-hc-recalls-database`, `ca-hc-gui-0039-recall-types` |
| ca | personal import: residents may not import prescription drugs by mail or courier; 90-day rule; CBSA referral; costs | `ca-cbsa-d19-9-1`, `ca-hc-gui-0116-personal-import`, `ca-customs-act-s101`, `ca-fda-s27-2-removal-destruction`, `ca-fda-s30-7-cost-recovery` |
| ca | advertising: Schedule A.1 (29 conditions), Rx adverts name/price/quantity only, s 9, 2023 guidance on educational messages | `ca-fda-s3-advertising`, `ca-fda-schedule-a1`, `ca-fdr-c01-044-rx-advertising`, `ca-fda-s9-deception`, `ca-hc-advertising-distinction-2023` |
| ca | compounding policy; GLP-1 position (June 2025); Alberta physicians (April 2026) | `ca-hc-pol-0051-compounding`, `ca-hc-2025-glp1-compounding-position`, `ca-cpsa-2026-04-injectable-peptides` |
| ca | status table (semaglutide incl. generics, tirzepatide; tesamorelin 2014, last DIN cancelled Sept 2022; the rest not authorised) | `ca-dpd-*` search records, `ca-pdl-human`, `ca-hc-2026-08-generic-semaglutide-recall`, `ca-noc-egrifta`, `ca-dpd-egrifta-din-02438712`, `ca-ctgov-canada-peptide-search-2026-10-23` |
| ca | reporting (MedEffect, Canada Vigilance, complaints); sport (Sport Integrity Canada, CADP, the 2025 four-year ban) | `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `ca-hc-complaints`, `ca-sic-our-brand`, `ca-sic-cadp`, `ca-sic-2026-04-peptides-reminder`, `ca-sic-2025-04-bpc157-tb500-sanction` |
| au | therapeutic good definition; ARTG before import, supply, advertising; "research use" labels change nothing | `au-tg-act-s3-definitions`, `au-tga-how-we-regulate-peptides`, `au-tga-peptide-products-hub`, `au-tga-about-artg` |
| au | offences and penalties (5 years; $1.82m / $18.2m civil; infringement notice 12 PU = $4,368; counterfeit 7 years) | `au-tg-act-s19b-19d-offences`, `au-crimes-penalty-unit-2026`, `au-tg-act-s42yk-infringement-notices`, `au-tg-act-s42e-counterfeit` |
| au | Poisons Standard schedule table; Appendix D; why scheduled (48 import referrals for BPC-157) | `au-poisons-standard-2026-10`, `au-tga-poisons-standard-page`, `au-tga-2014-09-scheduling-consultation`, `au-tga-2024-05-final-decisions-notice`, `au-tga-advertising-glp1-prohibited` |
| au | possession: Victoria s 36B, Queensland s 34, NSW S4D (list and 5 Nov 2026 change) | `au-vic-dpcs-act-1981`, `au-vic-dpcs-regs-2017`, `au-qld-medicines-poisons-act-2019`, `au-nsw-ptg-act-1966`, `au-nsw-health-s4d`, `au-nsw-health-s4d-2026`, `au-tga-pieds-article` |
| au | Personal Importation Scheme (3 months, 15 months in 12, packaging, written authority, no eScripts, seizure); growth hormone permits; 8 September 2026 changes | `au-tg-regulations-1990-sch-5-item-1`, `au-tga-personal-importation-scheme`, `au-tga-2026-05-peptide-import-warning`, `au-customs-prohibited-imports-regs`, `au-odc-growth-hormones-import-permit`, `au-abf-medicines-and-substances`, `au-tg-amendment-2026-measures-1`, `au-tga-2026-09-personal-import-packaging` |
| au | advertising (s 42DL, reg 7, code, what counts as an advert) | `au-tg-act-advertising`, `au-tg-regs-reg-7-advertising-prescribed-goods`, `au-tga-advertising-legal-framework`, `au-tga-advertising-determining-content`, `au-advertising-code-2021` |
| au | compounding (one person, prescription first, no anticipatory compounding outside hospitals, GLP-1 ban since 1 Oct 2024) | `au-tg-regs-sch-5-item-6-compounding`, `au-tga-compounded-medicines-guidance`, `au-tga-2024-06-glp1-compounding-update`, `au-tga-peptides-health-practitioners` |
| au | access routes (SAS A/B/C, Authorised Prescriber; practitioner responsible) | `au-tga-sas-individual-patients`, `au-tg-regs-reg-12a-sas-category-a`, `au-tga-authorised-prescriber`, `au-tga-established-history-lists-2026-10-24`, `au-tga-access-unapproved-goods-practitioners` |
| au | enforcement 2024–2026 (no seller, influencer or person named) | the ten ids in the Cite under the enforcement table, `au-ahpra-2026-09-peptide-prescribing` |
| au | reporting; sport | `au-tga-report-adverse-event`, `au-tga-report-adverse-events-consumers`, `au-tga-report-breach`, `au-sia-act-2020`, `au-sia-peptides`, `au-sia-2026-05-peptides-statement` |
| ie/nz | all facts | the `ie-*` and `nz-*` ids listed in the page's Cites (see ireland-nz.md 1.2 and 2.2 for each fact's row) |
| us | commercial-shipment definition (RPM 9-2-5) | `fda-rpm-ch9-personal-importations` |
| us | Federal Register re-check, 23 October 2026 | `federalregister-fda-search-2026-10-23` |
| us | status of the six PCAC peptides in the UK, Canada, Australia | status search ids in section 2 |
| uk | Border Force seizures and their handling (2022) | `mhra-foi-22-431-personal-import-seizures` |
| uk | GN14 hierarchy for specials | `mhra-gn14-specials` |

Sources whose title names a company (not a grey-market seller), kept as the merge decided: `ca-hc-2026-08-generic-semaglutide-recall`
(title "Apo-Semaglutide injection …", an authorised generic) and `au-artg-search-status-b-2026-10-23` (title lists the
search term "Theratechnologies", Egrifta's holder). Neither names a seller; flag for the editor if the seller rule is
read as covering any company.

## 4. Removed sections

All in `research/for-nl-site/MANIFEST-legal-en-a.md`: the four European pages (whole), from legal/index the EU summary
items, the NL/BE/DE/EU map rows, the "Every EU country" paragraph and the NL/EU contacts; from legal/us the two NL/EU
sentences; from legal/uk the "same two tests as in EU law" sentence; 21 glossary terms.

## 5. No-loss check (cite and `source=` ids, `git show nl-source-2026-10-23:<path>` vs now)

| Page | Removed ids | Why | Added ids |
|---|---|---|---|
| legal/index | `eu-directive-2001-83` | European framing (manifest) | `usc-21-321`, `usc-21-355`, `uk-hmr-2012-reg-2`, `uk-hmr-2012-reg-46`, `ca-fda-s2-definitions`, `ca-food-and-drug-regulations`, `au-tg-act-s3-definitions`, `au-tg-act-s19b-19d-offences` |
| legal/us | `nl-geneesmiddelenwet`, `ema-medicines-search` | European framing (manifest) | `fda-rpm-ch9-personal-importations`, `federalregister-fda-search-2026-10-23`, `uk-mhra-substance-index-status-c-2026-10-23`, `mhra-products-search-status-d-2026-10-23`, `ca-dpd-search-status-c-2026-10-23`, `ca-dpd-extract-search-merge-2026-10-24`, `au-artg-search-status-c-2026-10-23`, `au-artg-search-status-d-2026-10-23` |
| legal/uk | `eu-directive-2001-83` | European framing (manifest) | `mhra-foi-22-431-personal-import-seizures`, `mhra-gn14-specials` |

`further_reading` unchanged on all three. No claim badge, KeyNumber, TimeStrip, table row, number or caveat was removed
from legal/us or legal/uk. The four deleted pages are whole-page removals (manifest, section 1).

## 6. Photos (checked this run)

Licence, author and description re-read from the Commons API on 24 October 2026; previews viewed to check the alt text.

| Media id | Use | Licence | Author | Commons file |
|---|---|---|---|---|
| `parliament-hill-centre-block` | hero of legal/ca | CC BY-SA 3.0 | Saffron Blaze | File:Centre_Block_-_Parliament_Hill.jpg |
| `parliament-house-canberra-dusk` | hero of legal/au | CC BY-SA 4.0 | Thennicke | File:Parliament_House_at_dusk,_Canberra_ACT.jpg |
| `beehive-parliament-wellington` | hero of legal/ireland-and-new-zealand | CC0 | Daderot | File:Beehive_and_Parliament_House_-_Wellington_-_New_Zealand_-_DSC00165.jpg |
| `leinster-house-dublin` | body photo, Ireland section | CC BY-SA 3.0 | Jean Housen | File:20130810_dublin214.JPG ("View of Leinster House, Dublin") |

No people recognisable, no products. The Canberra dusk view was chosen over daytime views that show the forecourt mosaic
(artwork; freedom-of-panorama status not established).

## 7. Validation

- `npx tsx scripts/validate-content.ts --only <file>`: 0 errors, 0 warnings for each of `legal/us`, `legal/uk`, `legal/ca`,
  `legal/au`, `legal/ireland-and-new-zealand`, `legal/index`, `glossary/legal-a.json`, `glossary/legal-en.json`.
- Full run: the remaining errors are in files of other groups (semaglutide, about/funding, research-use-only,
  safety/if-something-goes-wrong, start-here: unknown source ids in progress and commerce words). Related warnings caused
  by this group's deletions: `src/data/heroes.yaml` "hero for legal/nl|be|eu|de: no such page (yet)" (expected: those
  heroes are mapped for `nl`/`de` and wait for the Dutch pages; left as they are).
- Full `astro build` (to a scratch folder) stops on another group's page (`start-here`, unknown source
  `cpsa-cma-code-of-ethics`). The six owned pages and the glossary were rendered with `astro dev` instead: all HTTP 200,
  no error, no emergency number (only amounts such as "10,000"), glossary links to the new terms work (e.g. DIN, NOC,
  Prescription Drug List, Type I recall on legal/ca).
- Residue grep from the brief on all owned files: 0 real hits. Pattern false positives: `nada\b` in "Canada", `epar` in
  "separate(ly)", `nvic` in "conviction". The only European word is the marked Ireland sentence
  (`{/* residue-ok: Ireland EU note … */}`, ireland-and-new-zealand.mdx). The validator's residue scan reports nothing in
  the owned files.

## 8. Inbound links to the removed pages, in files this group does not own

| File | Line(s) | Link |
|---|---|---|
| `src/content/compounds/en/retatrutide.mdx` | 427 | `/en/legal/nl/` |
| `src/content/pages/en/legal/sport-and-doping.mdx` | 18–19 (related), 43 | `legal/nl`, `legal/de` |
| `src/content/pages/en/legal/whats-changing.mdx` | 19, 21 (related), 32, 109, 160 | `legal/eu`, `legal/nl`, `legal/de` |
| `src/content/pages/en/the-case-for-reform.mdx` | 23 (related), 220 | `legal/nl` |

(`legal/research-use-only` had links at the start of this run; they were gone by the end.) Redirects for the live URLs
are handled separately. Glossary `see_also` entries in other groups' files that now point at moved terms are listed in
the manifest (harmless: the glossary index drops them).

## 9. Open questions for the medical/legal reviewer

Canada
1. Legal basis of Health Canada's "injectable peptides are (generally) regulated as prescription drugs" for peptides not
   on the PDL (canada-legal 17.1; merge 7.7). The page attributes it and rests on the new-drug/DIN rules.
2. Personal import and possession of an unlisted peptide such as BPC-157 (17.2): the page says the guidance does not say,
   in an "uncertain" callout.
3. Health Canada's 2023 advertising guidance and an educational site (11.3): the page states plainly that Health Canada has
   not authorised the products and links the SAP only neutrally. Confirm this is enough.
4. DPD, NOC and LNHPD were down during the research; the status table and "no product … appears in its Drug Product
   Database" rest on the first-run DPD searches (status-b, status-c) and the merge's DPD data extract (batch d). Re-run
   before publishing (merge.md 8).
5. The June 2026 injunction is left out (its only source names the seller); decide whether to describe it.

Australia
6. CJC-1295 (CAS of the form without DAC): which entry covers the DAC form (merge 7.2). Tesamorelin and the GHRH group
   entry (7.1). Retatrutide's schedule rests on the TGA's reading of "derivative" (7.3).
7. BPC-157 possession in NSW (stated as unknown); the NSW 2022 Act and 2026 Regulation as commenced were not read; WA, SA,
   Tasmania, ACT and NT not checked; state penalty unit values not checked.
8. Whether any Australian doctor's written authority can make a personal import of an unapproved Schedule 4 peptide lawful
   outside the SAS/AP pathways (our reading: no; the page states only the legal requirement).
9. That neutral naming of Schedule 4 peptides on this site is not "advertising" (our reading of the TGA guidance).
10. Retatrutide in sport: SIA says it is not listed; the page gives no sport status for it (data WADA row says S0).

Ireland and New Zealand
11. Amendments to S.I. 540/2007 after 2022 and to S.I. 540/2003 not established ("as made", said on the page).
12. NZ classification notices lapse after six months: re-check the Gazette before 4 February 2027 and update the sentence
    "The current notice, published on 3 August 2026, lists the same groups". Which instrument classifies TB-500 is unknown
    (the page says "listed as prescription in Medsafe's database").

United States and United Kingdom
13. US border figures for peptide parcels (none found; callout on the page). PCAC per-peptide vote counts (not printed).
14. UK: how Border Force handles personal-import seizures today (the page gives the 2022 FOI and says current practice is
    unknown).
