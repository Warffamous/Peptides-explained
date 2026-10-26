# Refocus notes: group guides-en (24 to 26 October 2026)

Files: `src/content/pages/en/start-here.mdx`, `src/content/pages/en/talking-to-your-doctor.mdx`,
`src/content/pages/en/index.mdx` (home), `src/content/pages/en/compounds/index.mdx`,
`src/content/pages/en/the-case-for-reform.mdx`, `src/i18n/en/glossary/guides.json`,
`src/data/sources/en-guides-en.yaml`; the hero entry for the reform page (`src/data/heroes.yaml`, `src/data/media.yaml`,
`src/i18n/en/media.json`, entries added with Edit by the first run). Manifest of what left:
`research/for-nl-site/MANIFEST-guides-en.md`. Nothing in `src/data/sources/refocus-*.yaml`, `jurisdictions.yaml` or
another group's file was edited.

Runs: a first run (cut off, 24 October) drafted start-here, talking-to-your-doctor, most of the sources file and the
reform hero, and committed them in the checkpoint 1b7304f. This second run (26 October) reviewed that draft against the
content brief, re-verified every source in `en-guides-en.yaml` (section 6), fixed the claims that the sources did not
fully support (section 1), and wrote the home page, compounds/index, the-case-for-reform, the glossary, four new
sources, the manifest and these notes.

**OWNER APPROVAL NEEDED: `the-case-for-reform.mdx` is the owner's signed opinion.** Section 2 lists every proposal,
before and after. The voice, the structure, the arguments against, "what we do not argue" and "what would change our
mind" are unchanged; only Dutch and EU framing was replaced, with examples from the four countries.

## 1. What changed, per page

### start-here (first run's draft, reviewed)
- Summary item 3: "In the US, the UK, Canada and Australia, a medicine must be approved before it may be sold." Related:
  `legal/nl` → `legal-routes`.
- §1 Compare: side effects and benefit/risk now on the FDA Wegovy label and the four countries' approvals
  (`fda-drugsatfda-wegovy`, `uk-mhra-substance-index-status-a-2026-10-24`, `ca-pm-wegovy-2026-10-02`, `au-artg-wegovy-356286`);
  "not approved in these four countries" on the four status searches.
- §2: CBG → MHRA ("powder-in-vial products are not authorised"); BfArM fake pens → TGA 2024 counterfeit Ozempic pens with
  insulin (one life-threatening reaction); IGJ → Health Canada April 2026 advisory (too much, too little or none; solvents,
  heavy metals, glass and plastic). The checklist item says "lab report", and the fold ends by pointing to the lab-report
  ladder on `/en/safety/product-risk/` ("what a lab report can and cannot tell you, from the most useful kind to the
  least"); the FAQ on lab reports points there too and adds "on the sample that was tested". The ladder is not repeated.
- §3 "The law in plain words": the four-country version. Lead: "Selling an unapproved medicine is against the law in all
  four countries. BPC-157 is not approved." Figure `law-four-countries`: one short answer per country (US, UK, Canada,
  Australia, in that order) with a link to each legal page. The approved-vs-unapproved Compare moved into a fold and became
  four-country. Fold "What the law says in each country": US (new drug, 503A), UK (licence, prescription), Canada (new
  drug and DIN rules; "sell" includes giving away; "generally regulated as prescription drugs" presented as Health
  Canada's position), Australia (S4 named for BPC-157 and TB-500; possession as a state matter with Victoria and NSW as
  examples, the others not checked), then Ireland and New Zealand (the Ireland sentence marked `residue-ok`).
- §4: evidence ladder rows now say "approved in the US, the UK, Canada and Australia"; retatrutide "not approved in any of
  the four countries yet", "available almost only inside a trial" (`fda-expanded-access-patients`, `ctgov-nct07629401`).
  The Wegovy insurance passage (Zorginstituut) became a sourced UK example: an approved medicine is not always easy to get
  (NICE TA1026, up to 12 years to reach everyone eligible). Retatrutide: "its maker said it planned to ask the FDA for
  approval in early 2027" (`sec-lilly-2026-q2-results`) instead of the EU review list.
- §5: the doctor table (consent law per country, the four reporting routes); confidentiality per country, plus the GMC's
  advice to ask about medicines bought online.
- FAQ: legality per country (US personal import; UK own-use exemption, and the 2022 MHRA statement on seizures, now
  dated in the text; Canada GUI-0116; Australia written authority); FDA vote answer now names the four countries; police
  FAQ per country (second run: "They may share it if you agree, or in cases the law sets out. In the US, the UK and
  Australia, these include rare cases to protect someone from serious harm", because no Canadian source for a serious-harm
  exception was checked; the CMA code says only "as provided for by law"); side-effect reporting per country plus HPRA and
  Medsafe/CARM.

### talking-to-your-doctor (first run's draft, reviewed)
- All Dutch patient-rights law (WGBO, KNMG, Thuisarts, Lareb, IGJ, Wet BIG, Dutch Doping Authority) left (manifest).
- Rights per country, only what is sourced: US (HIPAA Privacy Rule: covered entities; written authorisation outside care
  and the listed cases; exceptions incl. law enforcement under set conditions and a serious and imminent threat; family
  or friends involved in care unless you object (second run, new `ecfr-45-164-510`); access within 30 days; informed
  consent by law, MedlinePlus); UK (GMC confidentiality duties and exceptions; GMC consent principles; NHS Constitution
  for England: records, information, confidentiality); Canada (provincial and territorial health-privacy laws, OPC; the
  CMA Code as adopted by Alberta's college, other provinces not checked); Australia (OAIC: Privacy Act rules, access,
  public hospitals under state law; Medical Board code: confidentiality, informed consent except in an emergency,
  options, second opinion, records).
- Second-run fixes: off-label is no longer "allowed in all four countries" (the sources support "under each country's own
  rules", as on legal-routes); the off-label route row "Often" → "Sometimes, under each country's own rules"; the
  pharmacy-made row no longer implies an "allowed ingredients" rule in every country (US only); the Australian SAS row no
  longer says "the TGA must approve" (Category A and C are notifications) but quotes the TGA's practitioner page on human
  studies; Lead and diagram caption shortened (validator warnings).
- How to ask for checks and prescriptions: the prescribing-routes figure links `#prescription`, `#off-label`,
  `#us-compounding`, `#uk-specials`, `#trials`; the paragraph after it sends the reader to `/en/legal-routes/` for their
  country. The Canadian SAP is not mentioned (content brief, Canada).
- The tip "ask for a longer appointment when you book" (Thuisarts) left: no four-country source found.

### index (home)
- Compare: "Approved in the US, the UK, Canada and Australia; only on prescription"; benefit/risk weighed before approval
  (Canada C.08.004, the TGA's prescription-medicines overview, the FDA label); "every batch is tested before release, and
  injections are tested for germs" (US CGMP, 21 CFR 211.165 and 211.167) instead of the EU regulator; the research product:
  MHRA, FDA ("for research purposes" products of unknown quality), Health Canada and MHRA seizures.
- "No authorisation anywhere" (EMA search) → "not approved medicines in the US, the UK, Canada or Australia" (four status
  searches).
- New row in "Who this is for": readers in the four countries → `/en/legal/` and the Ireland/New Zealand notes page.

### compounds/index
- "Can a Dutch doctor prescribe it?" → "Can a doctor prescribe it in the normal way?" with US, UK, Canada and Australia
  sources; the EU review list → the TGA's statement that retatrutide is not approved by the TGA or any comparable regulator
  (and no MHRA substance entry); EPARs → STEP 1, SURMOUNT-1, Drugs@FDA, Canada C.08.004, the TGA overview.
- "a Dutch doctor cannot simply prescribe them" → "Each country decides for itself: an approval in one country does not let
  a doctor in another prescribe it in the normal way." The paragraph now matches the `CompoundIndex` groups (approved in at
  least one of the four; approved only in other countries; in clinical development; experimental; other).

### the-case-for-reform (owner's opinion; written by this run)
See section 2 for each proposal. Also: thalidomide history now four-country (McBride's Lancet letter, Australia; 115 Canadian
children, Webb 1963; Kelsey; the 1962 Kefauver-Harris amendments; Australia's 1963 expert committee) instead of the 1965
EU directive; the EU myeloma authorisation date left; Gyawali 2019 (FDA accelerated approvals) added beside Davis 2017
(EMA, kept as evidence, marked); the EudraVigilance KeyNumber kept as evidence (marked); the Belgian laboratory study kept
without the country name ("a national public laboratory ... Europe", marked); confidentiality per country; fake pens with
insulin now the TGA's 2024 alert; data protection now US (5 years) and Canada (8 years) instead of EU law; costs now NICE
TA1026 and the MHRA's 5,680 seized pens instead of the Zorginstituut; retatrutide status now the TGA's September 2026
statement instead of the EMA list; "We found no reliable count ... in the Netherlands" → a 2026 review says prevalence
studies are lacking (`coutinho-2026-doping-review`, reused id); the BPC-157 vote fold names the four countries. Related:
`legal/nl` → `legal`. Hero: `wooden-gavel` on English (first run; licence re-checked through the Commons API on 26 October:
CC BY-SA 4.0, Santeri Viinamäki), the Tweede Kamer photo stays for `nl`.

### src/i18n/en/glossary/guides.json
- Removed (manifest, full JSON): `ema`, `cbg`, `igj`, `lareb`, `zorginstituut`, `dopingautoriteit`, `wgbo`, `knmg`,
  `wet-big`, `reserved-procedure`, `nhg` (11 entries; the file had no other Dutch terms). No English page uses
  `<Term id>` for any of them; `see_also` links to them from other groups' files (`safety-b.json` → `igj`,
  `final-qa.json` → `nhg`) are filtered out by `GlossaryIndex` and need no change here.
- Rewritten country-neutrally: `medicines-regulator` (FDA, MHRA, Health Canada, TGA), `prescription-only-medicine`,
  `off-label`, `named-patient-route` (see_also expanded access, UK specials, SAP, SAS), `informed-consent` (apart from
  emergencies), `medical-file`, `second-opinion`; Dutch aliases removed from `marketing-authorisation` ("handelsvergunning")
  and `anabolic-steroids` ("anabolen").

## 2. the-case-for-reform: each proposal, before → after (for the owner)

| # | Proposal (unchanged) | "Something like it already exists": before | After |
|---|---|---|---|
| 1 | Public, independent trials of widely used compounds | The EMA's 2021 pilot giving scientific advice to universities and non-profits on older medicines (`ema-2021-repurposing-pilot`) | The UK's publicly funded RECOVERY trial in 176 NHS hospital organisations: dexamethasone lowered 28-day deaths (6,425 patients), hydroxychloroquine did not (4,716 patients); "a clear negative result protects people too" (`recovery-2021-dexamethasone`, `recovery-2020-hydroxychloroquine`). The fold's proposal: the same idea, publicly funded, for the few most widely used unapproved compounds, chosen openly; fair trials, every result published |
| 2 | Testing services for peptides | The Dutch drug-checking service DIMS (Trimbos), possible since the 1990s, 100,000+ samples by 2011 (`brunt-2011-dims`) | Canberra's publicly funded fixed-site drug-checking service (July 2022, funded to June 2027, free and confidential, publishes warnings; "drug checking does not make drugs safe") and WEDINOS (Public Health Wales) (`au-act-drug-checking`, `uk-wales-wedinos-about`). Unchanged: the systematic review, public laboratories testing peptides, and "report problems, never approval" |
| 3 | Side-effect reporting that welcomes every product | Lareb accepts reports about products bought online, does not tell your doctor, welcomes users of illegal medicines (`lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`) | Anyone can report in all four countries (MedWatch, Yellow Card, Canada Vigilance, TGA); the FDA asks for reports on "these or any medications"; the TGA's page covers unapproved goods, and one report led it to test a vial sold as retatrutide (semaglutide, no retatrutide). The proposal wording changed from "welcome and confidential" to "welcome, explaining what happens to the reporter's details", because confidentiality of reporters was not checked in the four countries |
| 4 | Enforcement aimed at sellers and false claims | Dutch medicines law is written around trade and advertising; using is not an offence, importing is (`nl-gmw-art-40-handelsvergunning`, `nl-gnw-art-84-85-advertising`, `nl-gnw-art-101-fines`) | Selling or supplying an unapproved medicine is against the law in all four countries; own-use rules differ (links to the four law pages); regulators already act against sellers: FDA warnings about "for research purposes" products, MHRA 1,500+ websites and accounts disrupted in 2025, Health Canada with the border agency, the TGA's September 2026 Federal Court proceedings over peptide advertising (no business named) |
| 5 | Guidance for doctors whose patients use these products | The first Dutch clinic for steroid users (2010) and the Doping Authority's work (`dopingautoriteit-2025-harm-reduction-chair`) | Alberta's college (April 2026: ask about non-prescribed injectables, watch for complications, report); GMC (ask about medicines bought online); Ahpra/National Boards (September 2026: patient demand alone is not a reason to prescribe). Proposal: "the next step", practical guidance on which checks make sense, and why. The Endocrine Society 2014 statement is unchanged |
| 6 | Faster conditional routes, open to non-commercial sponsors | EU conditional marketing authorisation; Dutch compassionate use only started by a manufacturer (`ema-conditional-marketing-authorisation`, `cbg-compassionate-use-criteria`) | FDA accelerated approval, UK conditional marketing authorisation, Health Canada NOC/c, TGA provisional registration (each sourced); all assume an applicant who will deliver full data, usually a company; single-patient access depends on companies too (US expanded access, Australian SAS). Evidence of lasting uncertainty: Gyawali 2019 (FDA) and Davis 2017 (EMA, marked) |

Other owner-visible changes on that page: the intro adds one sentence ("Our proposals are principles, not one country's
law: the problems look much the same in the United States, the United Kingdom, Canada and Australia, and for each
proposal we name something like it that already exists in one of them"); "unlicensed" → "unapproved" in a few places;
the `opinion.published` date (2026-10-20) is unchanged and `last_reviewed` is 2026-10-24.

Added by the second finishing pass (26 October 2026; `research/refocus-notes/finish.md`, part 2), two owner-visible
changes this table did not list:
- **Proposal 4, the owner's stated support narrows.** Before: "We support those rules.", after a paragraph saying that
  Dutch medicines law forbids stocking, offering, selling, supplying *and importing* a medicine without a licence, with no
  exception for own use. After (line 229): "We support the rules on selling.", after a paragraph saying that own-use
  rules differ by country. The owner's signed support no longer covers the rules on importing for one's own use. The
  text was not changed back: the owner decides which sentence to sign.
- **Costs for people now (line 174).** Before: "Those are real concerns" (about the Zorginstituut's reasons). After:
  "Those are real limits of money and capacity" (about NICE TA1026). It follows from the new example, but it is new
  wording in the owner's voice.
- **The diagram caption** had become "Each one already exists in some form in the US, the UK, Canada or Australia"
  (before: "Something like each one is already in place."), stronger than the table's own column head and than
  proposal 6's argument that a route open to non-commercial sponsors does not exist yet. The finishing pass restored
  the hedge: "Our six ideas. Something like each one already exists in the US, the UK, Canada or Australia." The owner
  may prefer other words.

## 3. New facts and their sources

New sources in `src/data/sources/en-guides-en.yaml` (first run, re-verified; second run marked *):
`medlineplus-informed-consent-adults`, `ecfr-45-164-506`, `ecfr-45-164-508`, `ecfr-45-164-510`*, `ecfr-45-164-512`,
`ecfr-45-164-524`, `gmc-2020-consent-seven-principles`, `gmc-2020-consent-paras-48-49`, `nhs-constitution-england`,
`cpsa-cma-code-of-ethics`, `oaic-handling-health-information`, `oaic-access-health-information`,
`mba-good-medical-practice-2020`, `au-healthdirect-questions-to-ask-your-doctor`, `recovery-2021-dexamethasone`,
`recovery-2020-hydroxychloroquine`, `au-act-drug-checking`, `ecfr-21-314-108`, `ca-fdr-c08-004-1-data-protection`,
`mhra-conditional-marketing-authorisation`*, `ca-hc-noc-c-fact-sheet`*, `au-tga-provisional-registration`* (22 in all).

New facts and the ids they rest on (reused ids in other groups' files are marked R):
- US privacy: HIPAA limits who can see health information, covers most doctors, clinics, hospitals, pharmacies
  (`hhs-hipaa-your-rights` R); written authorisation outside care and the listed cases (`ecfr-45-164-506`, `-508`);
  exceptions: required by law, law enforcement under conditions (e.g. a court order), serious and imminent threat
  (`ecfr-45-164-512`); family or friends involved in care unless you object (`ecfr-45-164-510`); access within 30 days
  (`ecfr-45-164-524`); informed consent by law, refusal, emergencies (`medlineplus-informed-consent-adults`).
- UK: duties and exceptions of confidentiality (`gmc-confidentiality-duties`, `gmc-confidentiality-framework` R); right to
  take part in decisions, benefits and harms of options incl. doing nothing (`gmc-2020-consent-seven-principles`); a
  doctor need not provide a treatment that would not serve you, must explain and mention a second opinion
  (`gmc-2020-consent-paras-48-49`); NHS Constitution for England: records, information, confidentiality, accept or refuse
  (`nhs-constitution-england`); ask about medicines bought online (`gmc-2021-deciding-safe-to-prescribe` R); a prescription
  only medicine may be injected into another person only by or on the directions of an appropriate practitioner
  (`uk-hmr-2012-reg-214` R, reg. 214(2)).
- Canada: provincial and territorial health-privacy laws (`opc-privacy-laws-summary` R); CMA Code paras 11, 12, 17, 18, 19,
  binding in Alberta (`cpsa-cma-code-of-ethics`); Alberta advisory (`ca-cpsa-2026-04-injectable-peptides` R); data
  protection 8 years (`ca-fdr-c08-004-1-data-protection`); NOC/c (`ca-hc-noc-c-fact-sheet`).
- Australia: privacy law rules, exceptions, access (`oaic-health-information` R, `oaic-handling-health-information`,
  `oaic-access-health-information`); Medical Board code 3.2.6, 3.2.10, 4.4, 4.5, 4.5.1, 4.5.2, 10.5.7
  (`mba-good-medical-practice-2020`); Ahpra guidance and news (`au-ahpra-prescribing-unapproved-guidance`,
  `au-ahpra-2026-09-peptide-prescribing` R); appointment preparation (`au-healthdirect-questions-to-ask-your-doctor`);
  Canberra drug checking (`au-act-drug-checking`); provisional registration (`au-tga-provisional-registration`); TGA
  retatrutide vial test and "not approved by the TGA or any comparable international regulator"
  (`au-tga-2026-09-retatrutide-counterfeit` R); counterfeit Ozempic pens with insulin (`au-tga-2024-09-counterfeit-ozempic-pens` R);
  adverse events reported to the TGA (`au-tga-2026-04-peptide-responsibilities` R); Federal Court proceedings
  (`au-tga-media-releases-peptide-log-2026-10-24` R); McBride 1961 and the 1963 committee (`mcbride-1961-thalidomide-letter`,
  `au-tga-mcewen-2007-history` R).
- Reform page, other: RECOVERY (both ids); 5-year US exclusivity (`ecfr-21-314-108`); Kefauver-Harris (`fda-history-milestones` R);
  Webb 1963, 115 Canadian children (`webb-1963-canadian-thalidomide` R); FDA accelerated approval and Gyawali 2019
  (`fda-accelerated-approval-program`, `gyawali-2019-accelerated-approval` R); UK CMA (`mhra-conditional-marketing-authorisation`);
  prevalence studies lacking (`coutinho-2026-doping-review` R: abstract "Beyond elite sport, the extent of peptide use in
  the general population is unknown ... prevalence studies are lacking", read in PubMed on 26 October 2026; its registry
  note in kpv.yaml does not mention this, an editor may add it); expanded access depends on the company
  (`fda-expanded-access-patients` R); SAS sponsors under no obligation (`au-tga-sas-individual-patients` R); WEDINOS
  (`uk-wales-wedinos-about` R); NICE TA1026 (`nice-ta1026-tirzepatide` R).
- Home and compounds/index: US CGMP batch testing (`ecfr-21-211-165`, `ecfr-21-211-167` R); Canada notice of compliance
  (`ca-fdr-c08-004-notice-of-compliance` R); the TGA overview (`au-tga-prescription-medicines-overview` R).

## 4. Removed sections

All listed with their cite ids in `research/for-nl-site/MANIFEST-guides-en.md` (rows: start-here 20,
talking-to-your-doctor 18, home 3, compounds/index 3, the-case-for-reform 19; glossary: 11 entries removed, 9 rewritten).
No whole page left; the sections that left entirely (rather than being rewritten in place) are: start-here's fold "What
Dutch law says, in more detail" and its Dutch FAQ; talking-to-your-doctor's fold "Informed consent, and the law behind
it" (WGBO) and the Dutch Doping Authority paragraph; the reform page's Dutch and EU passages in the folds "Why some
compounds may never get a sponsor" (EU data exclusivity and reform) and "Costs for people now" (Zorginstituut).

## 5. No-loss check (cite ids, `git show nl-source-2026-10-23:<path>` against the current file)

| Page | Ids before → after | Ids that left (all European framing, all in the manifest) |
|---|---|---|
| start-here | 55 → 99 | `bfarm-ozempic-falsification`, `cbg-compassionate-use-list`, `cbg-glp1-position`, `ema-2026-10-under-evaluation`, `ema-epar-mounjaro`, `ema-epar-wegovy`, `ema-medicines-search`, `igj-online-medicijnen`, `knmg-beroepsgeheim`, `knmg-beroepsgeheim-doorbreken`, `lareb-bijwerkingen-melden`, `nl-geneesmiddelenwet`, `nl-gmw-art-1-geneesmiddel`, `nl-gmw-art-40-handelsvergunning`, `nl-gmw-art-61-prescription`, `nl-gmw-art-67-internet-prescribing`, `nl-wgbo-art-448-information`, `nl-wgbo-art-457-confidentiality`, `thuisarts-naar-de-huisarts`, `zin-2024-wegovy-not-reimbursed`, `zin-wegovy-reassessment` |
| talking-to-your-doctor | 28 → 59 | `cbg-compassionate-use-criteria`, `cbg-compassionate-use-list`, `dopingautoriteit-2025-harm-reduction-chair`, `ema-epar-wegovy`, `ema-medicines-search`, `igj-leveren-op-artsenverklaring`, `igj-online-medicijnen`, `knmg-2024-second-opinion`, `knmg-beroepsgeheim`, `knmg-beroepsgeheim-doorbreken`, `lareb-bijwerkingen-melden`, `nl-gmw-art-40-handelsvergunning`, `nl-gmw-art-61-prescription`, `nl-gmw-art-67-internet-prescribing`, `nl-gmw-art-68-off-label`, `nl-wet-big-art-35-36`, `nl-wgbo-art-448-information`, `nl-wgbo-art-450-consent`, `nl-wgbo-art-452-patient-information`, `nl-wgbo-art-453-good-care`, `nl-wgbo-art-454-456-records`, `nl-wgbo-art-457-confidentiality`, `thuisarts-naar-de-huisarts` |
| index | 9 → 19 | `cbg-glp1-position`, `ema-epar-ozempic`, `ema-epar-rybelsus`, `ema-epar-wegovy`, `ema-medicines-search` |
| compounds/index | 12 → 26 | `cbg-compassionate-use-list`, `cbg-glp1-position`, `ema-2026-10-under-evaluation`, `ema-epar-mounjaro`, `ema-epar-wegovy`, `ema-medicines-search`, `nl-gmw-art-40-handelsvergunning`, `nl-gmw-art-61-prescription` |
| the-case-for-reform | 50 → 74 | `bfarm-ozempic-falsification`, `brunt-2011-dims`, `cbg-compassionate-use-criteria`, `cbg-glp1-position`, `dopingautoriteit-2025-harm-reduction-chair`, `ec-pharma-legislation-timeline`, `ema-2026-10-under-evaluation`, `ema-conditional-marketing-authorisation`, `ema-epar-wegovy`, `ema-medicines-search`, `ema-pharma-reform-page`, `eu-directive-2001-83`, `igj-2025-illegal-online-medicines`, `knmg-beroepsgeheim`, `lareb-2021-illegal-medicines`, `lareb-bijwerkingen-melden`, `nl-geneesmiddelenwet`, `nl-gmw-art-40-handelsvergunning`, `nl-gnw-art-101-fines`, `nl-gnw-art-84-85-advertising`, `zin-2024-wegovy-not-reimbursed`, `zin-wegovy-reassessment` |

Judgement calls for the fact-checker: `ec-pharma-legislation-timeline` (the 1965 EU directive and the 2008 EU myeloma
authorisation) was treated as EU regulatory history and replaced with the four countries' own responses to thalidomide;
`bfarm-ozempic-falsification` and `brunt-2011-dims` are German and Dutch examples replaced by Australian/UK equivalents;
`ema-2021-repurposing-pilot` stays on the reform page for the EMA's own statement about incentives (marked), only its use
as a policy precedent left. Every study, number and caveat that is not European framing stayed (Wong, Begley, Davis,
Hazell, Pope 2004 and 2014, Weber, Ashraf, Piatkowski, Janvier, Maghsoudi, Wouters, Zinzi, Jastreboff, the PCAC framing,
the BPC-157 phase 2 note).

## 6. Verification log (26 October 2026)

- Re-fetched with curl and read: MedlinePlus 000445 (review date 19 October 2025; quotes confirmed); GMC seven principles
  and paras 48–49 (curl with browser headers; quotes confirmed); NHS Constitution (GOV.UK content API; first published
  8 August 2016, updated 17 August 2023; four quotes confirmed); CPSA standard page and the CMA Code PDF (pdftotext;
  paras 11, 12, 17, 18, 19 and "Approved by the CMA Board of Directors Dec 2018" confirmed; the 18 September 2026 CMA update
  and "remains in effect in Alberta" confirmed); OAIC handling and access pages (quotes confirmed); ACT drug checking (last
  updated 14 July 2026; quotes and the interim/final evaluation reports confirmed); Justice Laws C.08.004.1 (current to
  30 September 2026, amended 17 June 2026; 6 and 8 years confirmed); FDA GLP-1 concerns page (content current 1 October
  2026; "FDA has warned companies ... falsely labeled 'for research purposes' ... sold directly to consumers for human use
  with dosing instructions"; "these or any medications"; under-reporting of compounded products).
- eCFR versioner API (with compression): 45 CFR 164.506, 508, 510, 512, 524 (text as of 15 October 2026) and 21 CFR
  314.108 (as of 21 October 2026; last substantive version 23 December 2016); quotes confirmed.
- PubMed: RECOVERY 32678530 (NEJM 384(8):693-704, PMC7383595) and 33031652 (NEJM 383(21):2030-2040, PMC7556338); n,
  percentages, rate ratios, funding and design confirmed; "176 NHS hospital organizations" from the PMC full text (Europe
  PMC REST). Coutinho 2026 (41880199) abstract read.
- WebFetch: the Medical Board code page (items 3.2.6, 3.2.10, 4.4, 4.5, 4.5.1, 4.5.2 "except in an emergency", 10.5.7); the
  code PDF saved through WebFetch and read with pdftotext ("October 2020"). The Health Canada NOC/c fact sheet (page details
  2017-05-04).
- Built-in browser, own tab, closed afterwards: healthdirect "Questions to ask your doctor" (last reviewed December 2024;
  quotes confirmed); the Health Canada NOC/c fact sheet (canada.ca did not answer curl from this machine); the TGA
  provisional registration page (last updated 1 May 2025).
- Commons API: `wooden-gavel` licence and author.
- Hosts: all on `config/link-allowlist.json` through its suffixes (.gov, .gov.uk, .gov.au, .gc.ca, .canada.ca) or hosts
  (gmc-uk.org, cpsa.ca, doi.org); no allowlist entry was needed in this run.

## 7. Validator and residue check

- `npx tsx scripts/validate-content.ts --only <each file>`: 0 errors in every owned file. One warning left:
  `cpsa-cma-code-of-ethics` (type guideline) "has no DOI or PMID": the CMA Code is a professional code published as a PDF by
  Alberta's college; it has no DOI. The GMC and Medical Board entries are now `type: regulator` (statutory regulators, as
  in `en-safety-en-a.yaml`) and the NHS Constitution `type: web`, which cleared four such warnings.
- The MDX of the five pages compiles with `@mdx-js/mdx` + `remark-gfm` (checked with a throwaway script, removed).
- The brief's residue grep (with the two known false positives removed: "Canada" for `nada\b`, "separate" for `epar`):
  0 unmarked hits in the six text files. Marked lines: start-here (the Ireland sentence and its marker line);
  the-case-for-reform (Davis/EMA, the EudraVigilance KeyNumber and its marker line, the "Europe" public laboratory, the EMA
  incentive quote). Cite ids that contain a pattern (`janvier-2018-falsified-peptides-belgium`, `ema-…`, `davis-2017-ema-…`)
  are ids, which the residue script does not read.

## 8. Open questions for the medical and legal reviewers, and the editor

1. **Owner approval** of the-case-for-reform (section 2), and whether the rewrite needs a corrections-log entry
   (`src/data/corrections.yaml` is not this group's file) and an "updated" date beside `published: 2026-10-20`.
2. `sec-lilly-2026-q2-results` (start-here, retatrutide paragraph, kept from the first draft and the original page) has the
   maker's name in its title. The rule on sources that name a business targets sellers and enforcement releases; the editor
   should confirm that a maker's own filing about its investigational medicine is acceptable, or swap it for
   `au-tga-2026-09-retatrutide-counterfeit` (as on the reform page).
3. The EMA glossary entry left the English glossary (its definition needs "European"/"EU", and JSON cannot carry the
   marker). If the editor wants an EMA tooltip for the evidence mentions, it needs an `allowStrings` entry in
   `config/locale-residue.json` (not this group's file).
4. Canada: only the CMA Code as adopted in Alberta was checked; the other provinces' colleges and the provincial
   health-privacy statutes were not read one by one. No Canadian source was checked for a "serious harm" exception to
   confidentiality, so the pages name it only for the US, the UK and Australia.
5. US: HIPAA is the federal floor; state laws (some stricter, for example on substance-use or minors' records) were not
   checked. The police row says "only in cases the law sets out, for example a court order, or to prevent serious harm".
6. UK: the NHS Constitution covers England only; patients' rights documents for Scotland, Wales and Northern Ireland were
   not checked (the page says "In England"). The injecting rule (HMR reg. 214(2)) was not checked in the other countries,
   and the page says so.
7. Data exclusivity on the reform page: only the US (5 years, 4 with a patent challenge) and Canada (8 years) are given;
   the UK (regulation 51A-type rules after EU exit) and Australia (Therapeutic Goods Act s 25A) were not checked.
8. Legal review of the personal-import FAQ in start-here: Canada (GUI-0116 says residents generally may not import
   prescription drugs; it does not say how an unauthorised drug that is not on the Prescription Drug List, such as BPC-157,
   is treated; the page leans on Health Canada's own position that peptides are generally prescription drugs, as the
   brief asks) and the UK (the MHRA FOI statement is from 2022 and is dated in the text).
9. Medical review: the doctor-facing wording (Ahpra "patient demand alone is not a reason to prescribe"; the GMC on medicines
   bought online; Alberta's advisory) and the start-here line that semaglutide with insulin can make blood sugar fall too low
   (FDA label 5.4).

## 9. Adversarial fact-check (26 October 2026)

Scope: the five pages, the glossary and `en-guides-en.yaml`, against the content brief, the cited sources, the
refocus status files and `git show nl-source-2026-10-23:<path>`. Every new or changed sentence was compared with its
sources' registry notes (109 newly cited ids). The group's own sources, and every reused source whose note did not fully
carry the sentence, were opened live: curl (MedlinePlus 000445, ACT drug checking, both OAIC pages, Justice Laws
C.08.004.1, the GMC seven principles, the FDA GLP-1 concerns page, the Health Canada advisory RA-81874, the Yellow Card
home page, the FDA Wegovy label PDF 218316s007, the CMA Code PDF via pdftotext), the GOV.UK content API (NHS
Constitution, MHRA conditional marketing authorisation), the eCFR versioner API (45 CFR 164.508, 164.510, 164.524),
PubMed (41880199 Coutinho 2026; 32678530 and 33031652 RECOVERY), Europe PMC full text (PMC7383595, "176 NHS hospital
organizations"), and the built-in browser in an own tab, closed afterwards (the TGA counterfeit Ozempic alert, GMC
decision-making paras 48-49, GMC confidentiality paras 1-7, the Medical Board of Australia code page section 4,
healthdirect "Questions to ask your doctor", the TGA provisional registration page).

### Confirmed as written

RECOVERY numbers (2,104 + 4,321 = 6,425; 22.9% vs 25.7%; 1,561 + 3,155 = 4,716; 27.0% vs 25.0%; funding; 176 NHS
hospital organisations); Coutinho 2026 abstract ("the extent of peptide use in the general population is unknown ...
prevalence studies are lacking"); 21 CFR 314.108 (5 years, 4 with a patent challenge); C.08.004.1 (6 years to file, 8 to
approve); MHRA CMA (unmet need, data not yet complete, valid one year, specific obligations); NOC/c; TGA provisional
registration (2 years, 2 extensions, at most 6); FDA accelerated approval; FDA expanded access ("no law or policy");
SAS ("Sponsors are under no obligation to supply"); Gyawali 2019 (19 of 93); McBride 1961, ADEC 1963, Webb 1963 (115
children); Kefauver-Harris ("For the first time ... prove to FDA the effectiveness"); the FDA's "these or any
medications", "falsely labeled 'for research purposes' ... with dosing instructions", "unknown quality" and the
under-reporting sentence; HIPAA 164.508 (authorisation), 164.510 (family or friends, opportunity to object), 164.512,
164.524 (30 days); MedlinePlus ("By law ...", other options, refusal, emergencies); GMC principles one, three and four
and paras 48-49; GMC confidentiality paras 1-2; the NHS Constitution (four rights); the CMA Code paras 11, 12, 17, 18
("circle of care") and 19; the Medical Board code 3.2.6, 3.2.10, 4.4, 4.5, 4.5.1, 4.5.2, 10.5.7; OAIC (strict rules,
disclosure situations, general right of access, public hospitals, 30 days); healthdirect (written questions, a list of
medicines and supplements, someone to come, "repeat ... say it in a different way ... write it down", "Is it OK if I take
some time to decide?"); NICE TA1026 (12 years, clinical need); MHRA seizures (5,680 pens, 1,500+ websites); FDA Wegovy
label 5.4 (hypoglycaemia with insulin or an insulin secretagogue). Status claims ("not approved in the US, the UK, Canada
or Australia") for BPC-157, TB-500, KPV, MOTS-c, Semax and epitalon match `research/refocus/status/*.yaml` (all
not-authorised in CA and AU; UK rows from the MHRA searches); retatrutide "not approved in any of the four countries yet"
matches retatrutide.yaml (investigational). Links: every route is on the brief's list; `#prescription`, `#off-label`,
`#us-compounding`, `#uk-specials` and `#trials` exist on legal-routes, `#if-you-already-have-a-product` and
`#what-a-lab-report-can-and-cannot-tell-you` on product-risk.

### Fixed in place

1. **start-here, fake Ozempic pens.** "held insulin, not semaglutide": the TGA alert says laboratory testing found the
   undeclared substance insulin glulisine and that the pens "appear to be relabelled insulin pens"; it reports no test
   for semaglutide. Now: "Tests found insulin in them. They seemed to be insulin pens with a new label." Same fix on the
   reform page ("contained insulin and appeared to be relabelled insulin pens").
2. **start-here, `sec-lilly-2026-q2-results` removed** (diagram row and fold): its title and URL name a company, which
   the content brief and CONTENT-GUIDE §11 forbid ("never cite or quote a document whose title or URL names a seller or
   company"). The fold sentence now rests on the TGA's September 2026 statement that no comparable regulator has approved
   retatrutide (`au-tga-2026-09-retatrutide-counterfeit`); the maker's planned FDA submission left the page. Listed in
   the manifest under "Removed for another reason". This settles open question 2 of section 8.
3. **start-here, Canada personal import (FAQ).** The bullet joined "residents may not bring in prescription drugs" to
   "peptides are generally prescription drugs" and so implied a legal conclusion that the research marks UNRESOLVED
   (GUI-0116 does not say how an unauthorised drug that is not on the Prescription Drug List is treated; legal/ca says
   so too). It now quotes Health Canada's position as its position and adds: "Its guidance does not say how this applies
   to a peptide it has not authorised, such as BPC-157." "such parcels" became "shipments of unauthorised peptides"
   (the advisory's words).
4. **start-here, Australia.** "Schedule 4 means 'prescription only medicine'" was not the instrument's wording; now:
   Schedule 4 is the list of "prescription only medicines". The country row "It is also a prescription-only medicine"
   (which could read as "available on prescription") now says "on the national list of prescription-only medicines
   (Schedule 4)".
5. **start-here, lab-report ladder links** now go to the ladder itself
   (`/en/safety/product-risk/#what-a-lab-report-can-and-cannot-tell-you`), in the fold and in the FAQ.
6. **talking-to-your-doctor, "Who can find out" table.** "Your employer, your family or anyone else: not without your
   permission" contradicted the page's own US fold (45 CFR 164.510: a family member or friend involved in your care may
   be told what they need unless you object). The row now adds that US exception, cited to `ecfr-45-164-510`.
7. **talking-to-your-doctor, records.** "In all four countries you can ask to see it and get a copy" overreached: the UK
   source covers England only, the Canadian one Alberta's college only. Now: "You can usually ask to see it and get a
   copy, with a few exceptions. The rules differ by country (see your rights below)", where the fold gives each
   country's limits.
8. **talking-to-your-doctor, "wanting a medicine is not enough reason to prescribe it" in the UK and Australia.** Only
   Ahpra says that; the GMC says a doctor should not provide a treatment they think would not serve the patient's needs
   (para 49). The page now quotes Ahpra and states the GMC rule separately.
9. **talking-to-your-doctor, second opinions.** "In the UK, Canada and Australia, the rules ... ask them to respect your
   wish for one": the GMC only says to mention the right to seek one (para 49). Now "In Canada and Australia, the rules
   for doctors ask them to respect or support your wish for one", followed by the unchanged UK sentence.
10. **talking-to-your-doctor, Canada privacy.** "Each province and territory has its own laws": the OPC page says four
    provinces have substantially similar health laws and "other provinces and territories have also passed their own";
    it does not say all. Now "Provinces and territories have their own laws".
11. **talking-to-your-doctor, doctors' fold, reporting "also for products from outside a pharmacy".** No source carried
    this for the UK (the Yellow Card home page says only "Anyone can report an issue with a medicine"). Now: the four
    routes, then "The FDA, Health Canada, Alberta's medical regulator and the TGA also ask for reports about unapproved
    products" (FDA GLP-1 page "these or any medications"; Health Canada advisory RA-81874 "Report any health
    product-related side effects or complaints to Health Canada", read 26 October; the CPSA advisory; the TGA page).
12. **the-case-for-reform, RECOVERY.** Hydroxychloroquine was proposed "on the basis of in vitro activity and data from
    uncontrolled studies and small, randomized trials" (abstract); the page had left out the small trials. Fixed, and the
    source note corrected.
13. **the-case-for-reform, drug checking.** "Publicly funded ... in Canberra" and "Some governments already pay for":
    the ACT Government page says the service "is funded" but not by whom. Now "Government-backed" and "already support".
    "The Canberra service says it plainly" became "The ACT Government says it plainly: drug checking does not make drugs
    safe" (the sentence is on the ACT Government's page, not the service's). Source note updated.
14. **the-case-for-reform, Federal Court.** "the TGA started Federal Court proceedings" in September 2026: the source is
    the TGA's release of 28 September 2026 saying it "has commenced" them; now "announced Federal Court proceedings".
15. **Source notes** (`en-guides-en.yaml`): `mba-good-medical-practice-2020` now records 4.4.2 ("Appropriately sharing
    information about patients for their healthcare"), which carries the "other health workers who treat you" row;
    `recovery-2020-hydroxychloroquine` and `au-act-drug-checking` corrected as above.

### Checked and left as is (judgement calls)

- Residue markers: start-here 142 (Ireland, EU-wide approvals: brief rule 4); reform 69 (Davis 2017, an EMA approvals
  study as evidence), 99 (EudraVigilance KeyNumber as evidence), 132 (a public laboratory's tests; the country is not
  named), 160 (the EMA's own statement on missing incentives, used as evidence). All are evidence or the Ireland note;
  none is reader framing. The end-of-line markers (69, 132, 160) are accepted by `scripts/lib/residue.ts` ("on the line
  before the text or at the end of the same line"); they were not moved, because a marker line inside the list at
  130-132 could break the list.
- `ec-pharma-legislation-timeline` (the 1965 EU directive, the 2008 EU myeloma authorisation): EU regulatory history,
  rightly treated as European framing; the global thalidomide history (Kelsey, Kefauver-Harris, McBride, Webb) stays.
- The Thuisarts tip "ask for a longer appointment when you book" stays out: healthdirect, MedlinePlus and the GMC pages
  do not give it; only individual NHS practice websites do, which are not sources of the right standing.
- Home page "In the US, every batch is tested before release": US only by design (CGMP is the cited standard); the
  approval and "not that medicine" rows are four-country.
- `fda-unapproved-glp1-concerns` (semaglutide.yaml, another group's file) has a short registry note that does not quote
  "unknown quality" or "these or any medications"; both were confirmed on the live page (content current 1 October
  2026). The semaglutide group may want to extend its note.
- Glossary: 11 Dutch/EU entries removed (all in the manifest as JSON); the 9 rewritten entries contain no country
  default; every `see_also` target exists (`mhra`, `health-canada`, `tga`, `expanded-access`,
  `special-medicinal-product`, `special-access-program`, `special-access-scheme`, `compassionate-use`,
  `medical-confidentiality`). The file was re-formatted with one array item per line (harmless).
- Guardrails: no doses, units, protocols or emergency numbers in the six text files; no commerce words in headings,
  labels or link texts; the Canadian text says plainly that Health Canada has not authorised the peptides and never
  points to the SAP; Australian schedules are stated only where the Poisons Standard names the peptide (BPC-157,
  TB-500).
- No-loss check repeated after the fixes: start-here 55 → 99 ids, talking-to-your-doctor 28 → 60, index 9 → 19,
  compounds/index 12 → 26, the-case-for-reform 50 → 74; every id that left is in the manifest (all European framing,
  plus `sec-lilly-2026-q2-results` under "Removed for another reason"). Every `<Claim>`, KeyNumber and study of the
  original pages is still present.

### Validator and residue after the fixes

`npx tsx scripts/validate-content.ts --only <file>`: 0 errors in all seven files; the one warning is unchanged
(`cpsa-cma-code-of-ethics` has no DOI: a professional code, explained in section 7). The five pages compile with
`@mdx-js/mdx` + `remark-gfm`; `guides.json` parses. The brief's residue grep: 0 unmarked hits (the rest are cite ids,
"Canada" for `nada\b` and "separate" for `epar`); `scripts/check-locale-residue.ts` reports no hit in these files.

### Still open (for the reviewers)

- Owner approval of the-case-for-reform (section 2) is still needed; this check changed its wording in items 1, 12, 13
  and 14 above (facts only, not the proposals).
- Canada: no source for a "serious harm" exception to doctors' confidentiality was checked; the CMA Code says only "as
  provided for by law". Provinces other than Alberta were not checked.
- UK access to records is sourced for England only (NHS Constitution); a UK-wide source (the data-protection right of
  access) was not added.
- The MHRA statement on destroyed personal-import seizures is from a 2022 FOI reply and is dated in the text.
