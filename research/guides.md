# Research notes: entry pages (group "guides")

Pages: `start-here`, `talking-to-your-doctor`, `compounds` (index). Sources: `src/data/sources/guides.yaml`.
Glossary: `src/i18n/en/glossary/guides.json`. Written 22 October 2026.

This run picked up an interrupted draft (all five content files existed, uncommitted; this notes file
did not). The draft validated, but it predated the PURPOSE rule (CONTENT-GUIDE §1a) and had several
factual slips against its own cited sources. Everything below was re-checked against the primary
source on 22 October 2026; the fixes are listed in section 4.

---

## 1. Key facts and their sources

### Evidence (start-here §1, §4; compounds index)

| Fact | Source id |
|---|---|
| 13.8% of industry drug development programmes (one drug, one indication; 41,040 paths, trials 2000 to October 2015) went from phase 1 to approval | `wong-2019-clinical-trial-success` (PMC full text, section 4.1, Tables 1 and 2) |
| STEP 1: 1,961 adults with obesity or overweight, no diabetes; −14.9% vs −2.4% at 68 weeks | `wilding-2021-step-1` (PubMed abstract) |
| SELECT: 17,604 adults; mean follow-up 39.8 months ("more than three years on average") | `lincoff-2023-select` (PubMed abstract) |
| TRIUMPH-1: 2,339 adults **with obesity, without diabetes**; −17.6/−23.7/−25.0% vs −3.9% at 80 weeks | `jastreboff-2026-triumph-1` (PubMed abstract) |
| BPC-157 in people: two controlled enema trials by the developer (PL 14736), phase 1 in 32 healthy men (Veljaca 2002/2003 abstracts) and phase 2 in 53 people with ulcerative colitis (Ruenzi 2005 abstract), known only as conference abstracts; four later uncontrolled reports, 16 + 12 + 2 + 3 = 33 people; Lee 2021 (4 of 16 also got "TB4") and Froum 2026 (five-drug mixture) involved other substances | `fda-pcac-2026-bpc157-briefing` (§II.C, Appendix 1), `lee-2021-knee`, `lee-2024-interstitial-cystitis`, `lee-2025-intravenous`, `froum-2026-nerve-cases` (PubMed) |
| BPC-157 repeat-dose toxicity: 28 days, intramuscular, rats and dogs; no repeat-dose studies by the nominated routes | `fda-pcac-2026-bpc157-briefing` (§II.D.d), `xu-2020-preclinical-safety` |
| FDA: the few human BPC-157 studies were "of short duration, had small sample sizes, evaluated doses that were likely exploratory in nature" | `fda-pcac-2026-bpc157-briefing` (§II.D, clinical studies assessing safety) |
| KPV: no human study by any route; TB-500: no human data (May 2026) | `fda-pcac-2026-kpv-briefing`, `fda-pcac-2026-tb500-briefing` |
| Lab results often fail on repetition: 6 of 53 landmark cancer studies confirmed; 46% of replications succeeded | `begley-2012-preclinical-standards`, `errington-2021-replicability` (PubMed) |

### Product (start-here §2)

| Fact | Source id |
|---|---|
| For an injection, sterility, bacterial endotoxins test and foreign particulates are critical quality attributes | `fda-pcac-2026-bpc157-briefing` (§II.A), `fda-pcac-2026-tb500-briefing` |
| Free-base certificates found in the literature "only contain purity testing results" (BPC-157, KPV); the TB-500 one only appearance, identity and purity; the acetate certificates had no bioburden or endotoxin (BPC-157), no assay, aggregates or endotoxin (TB-500), no microbiological tests (KPV) | the three FDA briefings (CoA passages read in the PDFs) |
| One common name can cover different salts and derivatives, including different active moieties | `fda-pcac-2026-tb500-briefing` |
| Three products sold as retatrutide held 51.3%, 165.0% and 190.0% of the labelled amount | `piatkowski-2026-retatrutide-product-testing` |
| Falsified Ozempic pens in Germany (2023) contained insulin | `bfarm-ozempic-falsification` |
| Fungal outbreak 2012: fungus in unopened vials; 749 cases and 61 deaths by 1 July 2013 | `smith-2013-fungal-methylprednisolone` |
| IGJ: online-ordered medicines get no check like via a doctor or pharmacist; too much, too little or no active substance; contamination can damage organs | `igj-online-medicijnen` |

### Dutch law and professional rules (start-here §3, §5; talking-to-your-doctor)

| Fact | Source id |
|---|---|
| Definition of a medicine | `nl-gmw-art-1-geneesmiddel` |
| No marketing, stock, offer, sale, supply, hand-over or import without a marketing authorisation; exceptions (pharmacy preparation, research medicines, IGJ exemption under art. 5 Directive 2001/83, compassionate use when an application is filed or trials run) | `nl-gmw-art-40-handelsvergunning` |
| Only pharmacists/dispensing GPs hand over UR medicines; no UR medicine without a prescription (lid 9) | `nl-gmw-art-61-prescription` |
| No internet prescribing to people never met, unknown, or without medication history | `nl-gmw-art-67-internet-prescribing` |
| Off-label only with professional protocols/standards; doctor–pharmacist consultation is required while those are still being developed (not a free alternative; corrected by the fact-checker) | `nl-gmw-art-68-off-label` |
| WGBO: information duty (risks, risks of no treatment, alternatives; invite questions; in writing on request), consent (12–15: parents too), patient's duty to inform, good-care standard, file (keep, add patient's statement, destroy on request, access and copy), confidentiality | `nl-wgbo-art-448-information`, `-450-consent`, `-452-patient-information`, `-453-good-care`, `-454-456-records`, `-457-confidentiality` |
| Giving injections professionally is a reserved act (Wet BIG art. 36(5)); others only on instruction (art. 35) | `nl-wet-big-art-35-36` (new this run) |
| Named-patient route: doctor's declaration (no Dutch-authorised alternative for medical reasons; doctor responsible; product not assessed; patient told); IGJ exemption, may be refused; legal term 8 weeks, about 4 on average | `igj-leveren-op-artsenverklaring` |
| CBG approves compassionate-use programmes for a specific patient group ("schrijnende gevallen"); retatrutide is not on the list | `cbg-compassionate-use-list` |
| Professional secrecy = duty of silence + right to refuse police/justice (verschoningsrecht); breaking it: consent, presumed consent (referral letter, patient may object), legal duty (infectious diseases), legal right (child abuse, domestic violence), conflict of duties | `knmg-beroepsgeheim-doorbreken`, `knmg-beroepsgeheim` |
| Second opinion: referral request must in principle be honoured (KNMG code, core rule 3), refusal only for weighty reasons; most insurers pay only with a referral | `knmg-2024-second-opinion` |
| Thuisarts (NHG): you can see your GP about a self-treatment idea; write questions down; list all medicines including self-bought; bring someone; ask for a longer (20-minute) appointment; GPs are used to difficult subjects; all Dutch doctors have professional secrecy; tell what you expect and what you thought of yourself | `thuisarts-naar-de-huisarts` |
| Dopingautoriteit: prefers no use, but calls prevention indispensable for those who use; value-free information programme with VWS for strength and combat sports outside the federations; first "anabolenpoli" 2010 | `dopingautoriteit-2025-harm-reduction-chair` |

---

## 2. Verification log (22 October 2026)

- **PubMed (MCP get_article_metadata / get_full_text_article):** PMIDs 29394327 (Wong; PMC6409418 full text read for 13.8% and 41,040), 37952131 (SELECT), 33567185 (STEP 1), 34324435, 39325560, 40131143 (the three Lee reports: n = 16 of 17, 12, 2), 32334036 (Xu 2020), 42814954 (TRIUMPH-1: "adults with obesity without diabetes"), 22460880 and 34874005 (Begley, Errington). Titles, journals, years and DOIs match the registered entries.
- **FDA briefing PDFs** (media/193343 BPC-157, 193346 KPV, 193349 TB-500) downloaded with curl and converted with pdftotext; the certificate-of-analysis passages, the critical-quality-attribute sentence, the 28-day repeat-dose section and the human-exposure list were read in full.
- **wetten.overheid.nl**, fetched with curl and converted to text: Geneesmiddelenwet (BWBR0021505, "Geldend van 09-09-2025 t/m heden") arts. 1, 40, 61 (incl. lid 9), 67, 68; Burgerlijk Wetboek Boek 7 (BWBR0005290, "Geldend van 08-10-2026 t/m heden") arts. 448–457; Wet BIG (BWBR0006251, "Geldend van 05-07-2025 t/m heden") arts. 35, 36, 38. Every anchor in the source URLs was found in the fetched HTML.
- **igj.nl** (online-medicijnen, modified 23 March 2026; leveren-op-artsenverklaring, modified 6 February 2026), **knmg.nl** (wanneer-doorbreken; second-opinion dilemma dated 1 October 2024), **thuisarts.nl** (last changed 19 April 2024), **dopingautoriteit.nl** (4 July 2025), **cbg-meb.nl** (compassionate-use overview): fetched with curl, text read; each says what it is cited for.
- **FDA status check** (PCAC framing): Federal Register API searched for "BPC-157" (one hit: the April 2026 meeting notice) and for 503A bulk-substance documents since 1 July 2026 (none). A web search found no FDA action after the July vote. So the canonical framing still holds on 22 October 2026: advisory, non-binding, no rulemaking.
- **Dutch professional guidance:** web searches (NHG, KNMG, "peptiden", "anabolen", "doping") found no NHG or KNMG guideline on patients who use unlicensed peptides. The page says so, with the search date. This is an absence-of-evidence statement from searches, not from a statement by either body.
- **Images:** the three heroes registered by the earlier run were opened and checked against MEDIA-GUIDE (no product, vial, needle, person or brand-like text; the consulting-room sign and the Welsh signpost text are incidental signage). Commons descriptions re-read through the API; the amino-acid caption was reworded to match "dissolved and re-crystallized … captured by a polarizing microscope" and to pass the caption readability check. Licences: CC BY-SA 2.0, CC BY 4.0, CC BY 4.0.
- **Glossary:** no duplicate ids, no term or alias clashes across all glossary files, every `see_also` resolves (checked by script).

---

## 3. Conflicts between sources and how they were resolved

- **BPC-157 human trials.** The draft said "one small trial, known only from a short conference report" and "tested as an enema for bowel inflammation in the 1990s and 2000s". The FDA appendix lists two controlled studies (phase 1 in healthy men, 2002/2003 abstracts; phase 2 in ulcerative colitis, 2005 abstract). The page now says two trials, in the 2000s, one in healthy men and one in ulcerative colitis, matching the BPC-157 page.
- **TB-500 "no study in people".** The FDA (May 2026) found no human data, but two small reports involved TB-500 or "TB4" with other substances (Lee 2021, Froum 2026). The page says "no study of TB-500 alone", as the TB-500 page does.
- **Certificates.** The draft said certificates "mostly gave only the purity". Only the free-base certificates found in the literature were purity-only; the acetate ones submitted with the nominations listed more (identity, impurities, acetate) but no germ or endotoxin tests. Now: "several gave little more than a purity result; none showed a test for germs".
- **TRIUMPH-1 population.** The draft said "obesity or overweight"; the abstract says "adults with obesity without diabetes". Fixed.
- **"Nobody has checked what is inside."** False as a general claim (the FDA saw certificates; sellers' labs test some things). Replaced everywhere by "no regulator has checked".

---

## 4. Changes made in this run

- PURPOSE (§1a): summary, leads and FAQ no longer assume the product came from online; "If you go ahead anyway" became "If you decide to go ahead"; the doctor script says "I got it from [where]"; the trainers' list no longer reads as a row of "don't"s.
- start-here §2 gained the practical fold "What you can check yourself, and what you cannot" (certificate tests to look for, purity vs content, exact name), because `<ProductCheck />` does not exist (see contract issues). The certificate bullet in the examples fold was removed to avoid repeating it.
- Unsourced sentences removed or sourced: "The rest stopped because they did not work well enough …" (not in Wong 2019); "Rats differ from us in size …" (replaced by the replication evidence); "a harm that happens to 1 in 100 people can stay hidden" (no source; replaced by the logic of a comparison group); "nobody knows which amount does what" (replaced by the FDA's own wording, made B1).
- The two zero-study KeyNumbers in start-here §1 were folded into one sourced sentence to bring the page nearer its word budget.
- talking-to-your-doctor: compassionate-use row added to the prescribing routes; Wet BIG reserved-procedure point for trainers (new source, new glossary terms); the Doping Authority description made precise (strength and combat sports outside the federations).
- compounds index: the "in clinical development" column no longer says every such compound has large trials; the "authorised elsewhere" sub-case and the "Other" group are explained.

---

## 5. Validator warnings (false positives or pending work)

- `start-here`: related `legal/nl` does not exist yet (legal group). Keep: the landing page and the brief both put Dutch law first.
- `talking-to-your-doctor`: related `legal-routes` does not exist yet. Keep: required by the brief.
- Links to pages not yet written (product-risk, monitoring, if-something-goes-wrong, legal/*, legal-routes, evidence/*, the-case-for-reform, about/editorial-policy) are planned routes; the validator does not flag them.

Word counts (tags stripped, figure titles and table text included): start-here about 2,600 (about 1,700 visible with folds closed), talking-to-your-doctor about 2,230 (about 1,480 visible), compounds index about 360. start-here is slightly above the 2,500 target because the canonical PCAC framing in the FAQ and the two-sided "real costs" fold cannot be shortened without dropping required elements.

---

## 6. Open questions for the medical and legal reviewers

1. **IGJ enforcement, August 2026 (not cited).** The IGJ ordered a Dutch webshop to stop trading retatrutide, tirzepatide and semaglutide (bevel 24 August 2026, last onder dwangsom 31 August 2026). It reports "meerdere meldingen" of harm in consumers after retatrutide, and harm after falsified tirzepatide and semaglutide. It is the strongest Dutch, peptide-specific regulator signal we found, but the page title and text name the seller and its websites, so citing it would put a seller's name in the source list (CONTENT-GUIDE §1). Editor to decide whether a source title may name a seller in an enforcement context; if yes, it belongs on start-here §2 and the retatrutide page.
2. **"Selling or handing over a medicine without a licence is against Dutch law, also to clients"** (trainers). Art. 40(2) covers "ter hand stellen" without any commercial element. Legal reviewer: is "handing over" to a client correctly read as covered, and should the page mention the Wet BIG point for injecting at all (it applies to professional ("beroepsmatig") acts only)?
3. **Personal import.** start-here and the FAQ deliberately leave "what this means for someone who orders for their own use" to `legal/nl`. Legal reviewer to confirm that page will answer it (art. 40(2) names "invoeren").
4. **Compassionate use row.** Worded from Gnw art. 40(3)(f) and the CBG overview. Reviewer: is "for one group of patients" the right B1 rendering of the CBG wording ("voor een specifieke patiëntengroep")?
5. **"Your doctor will probably write this in your medical file."** Derived from WGBO art. 454 (record what is needed for good care). Medical reviewer: acceptable as a plain expectation?
6. **Confidentiality exceptions in the FAQ** list serious danger to others, child abuse or domestic violence, and reportable infectious diseases; the KNMG also lists consent and presumed consent, which are not "exceptions" from the patient's point of view. Reviewer to confirm the B1 simplification.
7. **No NHG/KNMG guidance found.** Please confirm with the NHG and KNMG directly before publication; if any guidance exists, the professionals' section should cite it instead of the anti-doping model.
8. **IGJ August 2026 enforcement notice (question 1).** The independent fact-checker could not re-confirm it (igj.nl search is script-rendered; a web search found nothing). It is not cited on any page, so nothing on the site depends on it, but the editor should re-open the notice before deciding.
9. **Pharmacy preparation (Gnw art. 40(3)(a)).** The new row in talking-to-your-doctor states only the statutory exception. Legal reviewer: do the professional rules for pharmacy preparation (KNMP, IGJ policy) make this route realistic for unlicensed peptides, and should `legal-routes` explain it?
10. **Named-patient route scope.** The IGJ page describes the route for medicines without a Dutch authorisation; whether it can apply to a substance authorised nowhere (BPC-157) is not stated. The pages do not claim it can. Legal reviewer to confirm.

---

## 7. Fact-check log (independent fact-checker, 22 October 2026)

Scope: `start-here`, `talking-to-your-doctor`, `compounds/index`, `src/data/sources/guides.yaml`, `src/i18n/en/glossary/guides.json`, this file. Every claim on the three pages was checked against its cited source, including sources owned by other groups (their metadata is those groups' job; whether they support *this* page's wording is ours).

### What was checked, and how

- **PubMed records** (get_article_metadata): 29394327 Wong 2019, 33567185 STEP 1, 37952131 SELECT, 42814954 TRIUMPH-1, 22460880 Begley, 34874005 Errington, 32334036 Xu, 23252499 Smith, 34324435 / 39325560 / 40131143 Lee, 42876687 Froum. Authors, title, journal, year, volume, pages and DOI in `wong-2019-clinical-trial-success` match the record exactly. **PMC full text of Wong 2019** read: 13.8% (Table 1; Table 2 "Overall"), 41,040 industry development paths (section 2), window 1 January 2000 to 31 October 2015, a "programme" is one drug for one indication (section 3).
- **FDA briefing PDFs** (media/193343, 193346, 193349, 193342, 193711, 193773) re-downloaded and converted: critical quality attributes for injections (sterility, BET, foreign particulates); certificate passages for all three peptides; Appendix 1 (Veljaca 2002/2003: N=32 randomised, title "Healthy Male Volunteers"; Ruenzi 2005: N=53 UC; Lee 2021: 17 identified, 16 contacted, 4 with TB4); the 28-day intramuscular repeat-dose studies in rats and dogs; "short duration, had small sample sizes, evaluated doses that were likely exploratory"; TB-500 "absence of human data"; KPV "none were studies of KPV administered in humans".
- **FDA PCAC status:** meeting page re-fetched (content current as of 6 August 2026; materials list has no minutes or vote summary). Federal Register API: one BPC-157 document (16 April 2026 meeting notice); no 503A bulk-substance document since 1 July 2026. All five canonical elements are present in the start-here FAQ, with the vote counts attributed to reports from the public meeting.
- **Dutch statutes** fetched from wetten.overheid.nl and read: Geneesmiddelenwet (geldend van 09-09-2025) arts. 1(1)(b) and (e), 40, 61 (leden 1, 9), 67, 68; BW Boek 7 (geldend van 08-10-2026) arts. 448, 450, 452–457; Wet BIG (geldend van 05-07-2025) arts. 35, 36(5). All URL anchors resolve.
- **Web pages fetched and read:** igj.nl online-medicijnen (modified 23 March 2026) and leveren-op-artsenverklaring (modified 6 February 2026); knmg.nl wanneer-doorbreken and the second-opinion dilemma (1 October 2024); thuisarts.nl (last changed 19 April 2024); dopingautoriteit.nl (4 July 2025); cbg-meb.nl compassionate-use overview (no retatrutide, no LY3437943) and the CUP criteria page; lareb.nl (anyone can report; internet purchases included; reports not shared with your doctor or pharmacist); zorginstituutnederland.nl (2024 advice; 2026 reassessment planning: WAR 5 October 2026, consultation expected early November 2026).
- **Retatrutide "not approved anywhere":** no regulator states this directly. Supported by the EMA list (not under evaluation, 5 October 2026) and Lilly's 5 August 2026 8-K (BLA to the FDA planned for Q1 2027); `sec-lilly-2026-q2-results` (retatrutide group) added to that table cell.
- **Images:** Commons API re-queried for all three heroes: CC BY-SA 2.0 (Eirian Evans / Geograph), CC BY 4.0 (Beendy234), CC BY 4.0 (Aw1792300). Files viewed: no product, vial, needle, person or brand. Alt texts describe what is shown; the amino-acid caption matches the Commons description.
- **Glossary:** re-checked by script: no duplicate ids or terms across glossary files; every `see_also` resolves.
- **Guardrails:** no doses, protocols, sellers, superlatives, "safe/proven" for unapproved use, testimonials or commerce words in link text; no 112/999/911; no `# ` heading in the bodies; every internal link is a planned route.

### What was changed

start-here:
1. **Wong 2019 overstated.** "Only about 1 in 7 of them [medicines] is approved" counted medicines; the paper counts drug-for-one-illness programmes. Prose and KeyNumber title now say "attempts" (one medicine for one illness).
2. **Certificates understated.** The FDA says *most* certificates it found for BPC-157 and KPV contained only purity results, and a "representative" TB-500 certificate only appearance, identity and purity. "Several ... gave little more than a purity result" became "Most of the ones it found ..." (fold and FAQ). "None showed a test for germs" holds for every certificate the FDA discussed.
3. **Unsourced "most come from one lab"** for BPC-157 (the FDA briefing does not say it): now also cites `pubmed-bpc157-count-2026-10-20` (BPC-157 group) and names the Zagreb group. Rat results wrapped in `<Claim level="animal">`.
4. **Study claims without n, population or badge:** the STEP 1 sentence now gives 1,961 adults with obesity or overweight, without diabetes, 68 weeks, `<Claim level="human-controlled">`; the TRIUMPH-1 sentence gets the same badge.
5. **"the company developing it ran two ... trials"** is not in the cited FDA briefing; removed (the BPC-157 page carries the developer detail with its own sources).
6. **"The formal safety tests ... lasted 28 days"** made precise: the 28 days are the repeat-dose studies; "with daily doses" added.
7. **"only a lab can measure that"** was attributed to the IGJ, which does not say it. Rewritten to the IGJ's actual point (without the checks of a doctor or pharmacist you cannot know what you get).
8. **Summary item 1** "Most peptides sold outside pharmacies were never tested" was a quantity the page does not support; now "Many".
9. **Compare title** "Three peptides sold online" described the products by sales channel (PURPOSE rule); now "Three others, not approved".
10. **Wegovy reimbursement:** "So people have to pay for it themselves" became "people who use it for weight loss usually pay for it themselves" (the 2024 advice is about obesity; reassessment pending).
11. **Doctor table:** the unsourced "much riskier" became a sourced example (semaglutide with insulin, EPAR); the cellulitis line no longer generalises one infection to every skin infection.
12. **Thuisarts attribution:** "Dutch GPs invite you" became "the Dutch GPs' website for patients says you can come".
13. **Confidentiality exceptions:** the KNMG lists five grounds (including conflict of duties and *zwaarwegend belang*), so "the rare exceptions are about" became "include".

talking-to-your-doctor:
1. **Off-label (Gnw art. 68) misstated in three places** (fold, prescribing table, professionals fold) and in the glossary: consultation with the pharmacist is required only *while* protocols are being developed; it is not an alternative to them. Fixed everywhere.
2. **Missing statutory route:** Gnw art. 40(3)(a) (pharmacy preparation on a small scale) was absent from a table titled "the ways a Dutch doctor can get a medicine to you". Row added, worded from the statute only. The `prescribing-routes` diagram request should add this row.
3. **"Only inside an approved trial":** art. 40 says "geneesmiddelen voor onderzoek"; "approved" is not in it. Now "Only as part of a clinical trial".
4. **Compassionate use:** added the CBG's own criteria (serious illness, no satisfactory authorised treatment) with a new source `cbg-compassionate-use-criteria`.
5. **Police row:** "No" now carries "apart from the rare exceptions below" (a conflict of duties can involve the police); the exceptions sentence says "include".
6. **Summary item 1** "Telling a doctor makes any choice less risky" was absolute and unsourced; now "can make your choice less risky".
7. **"Say it at the start of the appointment"** sat before a Thuisarts citation that does not say it; moved after the citation and marked as a tip.
8. **Doping Authority:** "calls prevention without judgement essential" merged two separate points; now: prefers no use; calls such prevention essential for those who choose to use; works on value-free information.
9. WGBO art. 448(3): "in writing" became "in writing, on paper or digitally" ("schriftelijk of elektronisch").

compounds/index:
1. Summary item 4 "Nobody knows what they do in people" overstated for the experimental group, which the vocabulary defines as "little or no formal human development". Now "had little or no testing in people ... not well known".
2. The experimental column of the Compare table now matches that definition and scopes "mostly cells and animals" to the three named examples.

guides.yaml: new `cbg-compassionate-use-criteria`; notes for `nl-gmw-art-68-off-label`, `nl-gmw-art-40-handelsvergunning` (sub a and b) and `knmg-beroepsgeheim-doorbreken` (fifth ground) corrected or extended. No source had wrong metadata.

### Checked and left as is

- BPC-157 human evidence (32 healthy men and 53 people with UC, abstracts only; four later uncontrolled reports on 16 + 12 + 2 + 3 = 33 people, two with other substances); TB-500 no human data; KPV no human study.
- Fungal outbreak (749 cases, 61 deaths by 1 July 2013; fungus in unopened vials); STEP 1, SELECT and TRIUMPH-1 numbers and populations; the PCAC FAQ; the Wet BIG point; the WGBO rights table and fold.
- Validator after the changes: 0 errors in the owned files; the only warnings are related routes not written yet (`legal/nl`, `legal-routes`; `evidence/evidence-grading` in the full run).
