# Research notes — refocus assignment `australia-legal`

For a new page **"Peptides and the law in Australia"** (`/en/legal/au/`, as deep as `legal/us.mdx`), for the
`#australia-sas` block on `/en/legal-routes/`, and for the Australian part of `#personal-import`. Written on
**24 October 2026** (the brief's date is 23 October; the work ran just after midnight and on the morning of 24 October,
so sources carry `accessed: 2026-10-24`).

Outputs:
- this file;
- `research/refocus/sources/australia.yaml` — **73 entries** as written (77 after the independent fact-check, which
  added 4; see "Fact-check (independent)" at the end): 70 documents registered only here, plus 3 shared entries
  that keep the id and URL that status-b, status-c and status-d use (`au-poisons-standard-2026-10`,
  `au-tg-regulations-1990-sch-5-item-1`, `au-customs-prohibited-imports-regs`; when the files are merged, keep one
  entry per id and join the notes). Checked by script: the file parses with the project's `yaml` package with unique
  keys; every entry has type, title, year, url, accessed and verified; every type is in `SOURCE_TYPES`; every key is
  kebab-case; one entry (flagged in its note) has a commerce token in URL and title; no note contains a telephone
  number (the script's only hits were "4,000 penalty units"-style numbers, an archive timestamp and "112 results").

Nothing under `src/`, `config/`, `docs/` or `scripts/` was edited.

**Two runs.** A first run of this assignment wrote the sources file and was cut off before this file. A second run
(24 October 2026, morning) treated that file as an unverified draft: it checked every quotation in the notes against
the official texts the first run had saved the same night (legislation HTML and PDF, TGA, ABF, Sport Integrity
Australia, NSW Health and help-service pages), re-opened the live TGA, ABF, SIA and Ahpra pages in its own browser tab,
corrected what was wrong (section 13), added 16 entries, and wrote this file.

**Method.** Commonwealth laws: the official text of the latest compilation on legislation.gov.au (HTML; the penalty
unit instrument from the authorised PDF), searched in full. Victoria: the authorised PDFs. Queensland: the official
HTML. NSW: `legislation.nsw.gov.au` and AustLII show a bot check (Cloudflare "Just a moment"); nothing was done to get
round it. The NSW Acts were read from Internet Archive snapshots of the official pages, and the current NSW position
from NSW Health's own pages. TGA pages: read as text in the first run; in the second run tga.gov.au stopped answering
curl from this machine (TLS renegotiation loop), so TGA pages were opened in the built-in browser; the TGA site search,
which showed a bot-verification page in the first run, worked normally and was used. ABF item details load by script
and were read in the browser.

**House rules applied:** no doses or strengths (several TGA pages print them; not copied); no seller, clinic, brand of
research chemical, influencer or private person named (company names in TGA releases are summarised by date, without
names); no emergency number; **no telephone numbers recorded at all** (the assignment did not ask for them); British
spelling outside quotations; dates in prose. The words of Australian law ("authorised", "Schedule 4", "S4D") are
explained once.

---

## 0. Reused source ids (not repeated in australia.yaml)

| id | where | used for | re-checked in the second run |
|---|---|---|---|
| `wada-2026-list-en`, `wada-2027-list-en` | src/data/sources/bpc-157.yaml | BPC-157 named in S0, prohibited at all times | no (SIA's BPC-157 page repeats it) |
| `wada-code-2021`, `wada-code-2027` | src/data/sources/legal-b.yaml | strict liability; 2027 Code from 1 January 2027 | no |
| `vic-health-2026-retatrutide-liver` | src/data/sources/safety-b.yaml | Victorian health alert, liver injury after a product labelled retatrutide (19 June 2026) | no |
| `piatkowski-2026-retatrutide-product-testing` | src/data/sources/retatrutide.yaml | testing of products sold as retatrutide | no |
| `au-poisons-standard-2024-06`, `-2024-02`, `-2018-06`, `-2018-03`, `-2016-06`, `-2016-03` | status-c.yaml | first editions naming BPC-157 (1 June 2024), melanotan II (1 June 2018), TB-500 and thymosin beta-4 (1 June 2016) | no |
| `au-poisons-standard-2015-06`, `-2015-02`, `au-tga-2014-09-scheduling-consultation` | status-b.yaml, status-d.yaml | the growth-hormone peptides, AOD-9604 and CJC-1295 scheduled from 1 June 2015, as performance and image enhancing drugs | no |
| `au-tga-2018-02-melanotan-ii-interim-decision`, `au-tga-2018-04-scheduling-final-decisions` | status-c.yaml | why melanotan II went into Schedule 4, not Schedule 10 | no |
| `au-tga-2024-05-scheduling-final-decisions`, `au-tga-2024-05-final-decisions-notice` | status-c.yaml | why BPC-157 was scheduled (48 import referrals since 1 July 2022; "align ... with other performance- and image-enhancing substances") | yes, from the TGA's DOCX of the same notice (first run) |
| `au-odc-growth-hormones-import-permit` | status-b.yaml | Office of Drug Control: growth hormones and GHRHs need an import permit | yes (first run) |
| `au-tga-peptide-products-hub` | status-c.yaml | TGA peptide hub (last updated 23 September 2026) | yes, in the browser: unchanged |
| `au-tga-2026-04-peptide-responsibilities` | status-b/c.yaml | TGA advisory, 13 April 2026 | yes: quotes confirmed |
| `au-tga-2026-05-peptide-import-warning` | status-c.yaml | TGA advisory, 7 May 2026: unlabelled vials not released | yes: quotes confirmed |
| `au-tga-2026-06-peptide-compliance-priority` | status-d.yaml | peptides made a TGA compliance priority, 10 June 2026 | yes |
| `au-tga-2026-06-cmo-peptide-statement` | status-b/c.yaml | TGA and Chief Medical Officer, 19 June 2026 | yes |
| `au-tga-2026-08-peptide-seizure` | status-b/c.yaml | NSW seizure linked to an influencer, 17 August 2026 | yes |
| `au-tga-2025-01-melanotan-blog`, `au-tga-2026-05-melanotan-ii-infringement-notices`, `au-tga-2026-08-melanotan-ii-safety-alert` | status-c.yaml | melanotan II enforcement | yes (infringement notices also in the TGA list) |
| `au-artg-search-status-b/c/d-2026-10-23`, `au-tga-search-status-b/c/d-2026-10-23`, `au-anzctr-search-status-b/c/d-2026-10-23` | status files | "not in the ARTG" searches per compound; Australian trial registry searches | no |
| `au-permissible-ingredients-determination-2026-3`, `au-tga-2025-04-nad-nmn-safety-alert` | status-d.yaml | NR and NMN as listed-medicine ingredients; NAD+ not permitted | no |
| `au-fca-2014-1019-essendon-v-asada` | status-d.yaml | the 2013 AFL supplements investigation (history) | no |
| `au-healthdirect-helpline`, `au-healthdirect-poisoning`, `au-health-aod-hotline`, `au-healthdirect-mental-health-helplines`, `au-tga-report-adverse-events-consumers`, `au-vic-needle-syringe-program`, `au-qld-needle-syringe-program`, `au-nsw-community-sharps`, `au-qld-13health`, `au-vic-nurse-on-call` | extras.yaml | help services and reporting | consumer reporting page re-opened in the browser: same date (2 September 2026) |

---

## 1. The Australian picture in brief (every line sourced below)

1. **One national medicines law, eight state and territory poisons laws.** The Therapeutic Goods Act 1989 (Cwlth),
   run by the TGA, decides what may be imported, made, supplied and advertised. Who may *possess* a prescription
   medicine is decided by state and territory law (`au-tg-act-s19b-19d-offences`, `au-poisons-standard-2026-10`).
2. **A peptide sold for a health purpose is a "therapeutic good".** That includes products used to
   "influenc[e], inhibit[] or modify[] a physiological process" (`au-tg-act-s3-definitions`). The TGA says peptide
   products regulated as therapeutic goods "must be included in the Australian Register of Therapeutic Goods (ARTG)
   before they can be imported, manufactured, supplied, exported or advertised" (`au-tga-how-we-regulate-peptides`).
3. **Not in the ARTG = unapproved.** Importing, making or supplying such goods without an exemption, approval or
   authority is a crime (up to 5 years or 4,000 penalty units if harm is likely) and a civil penalty contravention (up
   to 5,000 penalty units, $1.82 million, for an individual) (`au-tg-act-s19b-19d-offences`,
   `au-crimes-penalty-unit-2026`). None of the experimental peptides on this site is in the ARTG (status files; this
   file's searches).
4. **Many peptides are named prescription-only medicines (Schedule 4).** The Poisons Standard names BPC-157, TB-500,
   thymosin beta-4, AOD-9604, CJC-1295, ipamorelin, hexarelin, GHRP-6, pralmorelin, capromorelin, ibutamoren,
   follistatin, melanotan II, sermorelin, the growth hormone releasing hormone, peptide and secretagogue groups, and
   the medicines authorised in Australia semaglutide, tirzepatide and afamelanotide (`au-poisons-standard-2026-10`,
   `au-artg-search-australia-legal-2026-10-24`; sermorelin is not in the ARTG).
5. **Most of those are also on the national "possession without authority is illegal" list** (Appendix D, clause 5):
   BPC-157, TB-500, thymosin beta-4, AOD-9604, CJC-1295, ipamorelin, hexarelin, GHRP-6, pralmorelin, capromorelin,
   ibutamoren, follistatin, somatropin and the growth-hormone groups. Melanotan II is **not** (`au-poisons-standard-2026-10`).
6. **Possession without a prescription: state law decides.** Victoria makes possession of *any* Schedule 4 poison
   without authority an offence (`au-vic-dpcs-act-1981`, s 36B(2)); Queensland too (`au-qld-medicines-poisons-act-2019`,
   s 34); NSW only for its listed "S4D" substances (`au-nsw-ptg-act-1966`, s 16; from 5 November 2026 the new Act:
   `au-nsw-mptg-act-2022`, `au-nsw-health-s4d-2026`). NSW's published S4D list includes TB-500, CJC-1295, ipamorelin
   and AOD-9604 but not BPC-157 or melanotan II (section 5; UNRESOLVED for BPC-157).
7. **Importing for yourself** is allowed only under the Personal Importation Scheme's conditions: own or immediate
   family use, at most 3 months' supply, packaging that identifies the medicine, and for a Schedule 4 medicine a
   doctor's **written authority** (`au-tg-regulations-1990-sch-5-item-1`, `au-tga-personal-importation-scheme`). Since
   8 September 2026 the packaging rule is in the law and travellers need the authority too (`au-tg-amendment-2026-measures-1`).
   Unlabelled vials "will not be released"; the ABF seizes and destroys them (`au-tga-2026-05-peptide-import-warning`).
8. **Growth hormones and growth hormone releasing hormones** (somatorelin "and synthetic analogues") need an import
   permit; they are also "tier 1 goods" under the Customs Act (up to 5 years) (`au-customs-prohibited-imports-regs`,
   `au-customs-regulation-2015-sch-7`, `au-customs-act-1901-s233baa`).
9. **Legal routes are narrow:** the Special Access Scheme (A: seriously ill; B: TGA approval; C: listed goods only — no
   peptide on the lists), the Authorised Prescriber scheme, clinical trials, and pharmacist compounding on a
   prescription (`au-tga-sas-individual-patients`, `au-tga-established-history-lists-2026-10-24`,
   `au-tg-regs-sch-5-item-6-compounding`). Compounded GLP-1 medicines are excluded since 1 October 2024.
10. **Advertising** any Schedule 4 substance, or any unapproved or compounded medicine, to the public is an offence
    (`au-tg-act-advertising`, `au-tg-regs-reg-7-advertising-prescribed-goods`, `au-tga-compounded-medicines-guidance`).
11. **Enforcement is active.** Infringement notices to people importing a peptide (2024) and supplying melanotan II
    (2026), seizures with Police and the ABF, criminal charges for importing performance and image enhancing drugs, a
    Federal Court case over peptide advertising (September 2026), and Ahpra action against doctors who prescribe
    peptides carelessly (September 2026) (section 10).
12. **Report** side effects to the TGA; **sport**: Sport Integrity Australia; **help**: healthdirect, the Poisons
    Information Centre (section 11).

---

## 2. Draft page material (B1; every sentence sourced; for the writer)

### 2.1 Frontmatter and summary (suggestion)

```yaml
title: "Peptides and Australian law: what the Therapeutic Goods Act says"
nav_title: "Australia"
description: "What Australian law says about peptides: the ARTG, Schedule 4, possession by state, importing for yourself, the Special Access Scheme, compounding, enforcement and reporting."
summary:
  - "In Australia, a peptide sold for health or muscle is a therapeutic good. It must be in the ARTG."
  - "None of the experimental peptides on this site is in the ARTG. Selling them is against the law."
  - "Many, such as BPC-157 and TB-500, are prescription-only medicines (Schedule 4)."
  - "Importing one for yourself needs a doctor's written authority and a clearly labelled pack."
  - "Report side effects to the TGA. Having one without a prescription can be an offence in your state."
section: legal
template: reference
reading_level: B1
jurisdiction: AU
reviewed_by: pending-legal-review
```

(Check each summary item against the 18-word limit and reading ease with the validator.)

### 2.2 Lead and Compare grid

> <Lead question="What does Australian law say about peptides?">A peptide sold for a health purpose must be in the ARTG. Most peptides sold online are not.</Lead>
>
> <Compare title="Selling a peptide that is not in the ARTG is against the law. Many are prescription-only medicines." detail="Therapeutic Goods Act 1989, Therapeutic Goods Regulations 1990, Poisons Standard (October 2026) and state law, checked on 24 October 2026. States decide who may possess a prescription medicine.">
>
> | | Under Australian law |
> |---|---|
> | Is importing, making or supplying an unapproved peptide forbidden? | <Verdict is="yes" /> Goods not in the ARTG may not be imported, made or supplied without an exemption, approval or authority.<Cite id="au-tg-act-s19b-19d-offences,au-tga-how-we-regulate-peptides" /> |
> | Are BPC-157, TB-500 and CJC-1295 prescription-only? | <Verdict is="yes" /> All three are in Schedule 4 of the Poisons Standard.<Cite id="au-poisons-standard-2026-10" /> |
> | Can you import one for yourself without a prescription? | <Verdict is="no" /> A Schedule 4 medicine needs a doctor's written authority, and the pack must be clearly labelled.<Cite id="au-tg-regulations-1990-sch-5-item-1,au-tga-personal-importation-scheme" /> |
> | In Victoria or Queensland, is having one without a prescription an offence? | <Verdict is="yes" /> Both states forbid having any Schedule 4 medicine without authority.<Cite id="au-vic-dpcs-act-1981,au-qld-medicines-poisons-act-2019" /> |
> | Does a "research use only" label change anything? | <Verdict is="no" /> The TGA says such labels do not change how a product is regulated.<Cite id="au-tga-how-we-regulate-peptides" /> |
> | May anyone advertise these peptides to the public? | <Verdict is="no" /> Advertising Schedule 4 substances or unapproved goods to the public is an offence.<Cite id="au-tg-act-advertising,au-tg-regs-reg-7-advertising-prescribed-goods" /> |
> | Can a doctor get an unapproved peptide for a patient? | Sometimes. Through the Special Access Scheme or as an Authorised Prescriber, with TGA approval for these peptides.<Cite id="au-tga-sas-individual-patients,au-tga-established-history-lists-2026-10-24" /> |
>
> </Compare>

(The last row has no Verdict, as in the Canada draft; the writer chooses the component form. NSW is left out of the
grid on purpose: its rule depends on the substance; see 2.3.)

### 2.3 Draft sections (short, for adaptation)

**What counts as a therapeutic good.** Australian law calls a product a therapeutic good if it is presented for, or
likely to be used for, a health purpose. That includes changing how the body works ("influencing, inhibiting or
modifying a physiological process").<Cite id="au-tg-act-s3-definitions" /> The TGA says a peptide product promoted
for weight loss, muscle growth, recovery or performance may be a therapeutic good.<Cite id="au-tga-peptide-products-hub" />
A label saying "research use only" or "not for human use" does not change that.<Cite id="au-tga-how-we-regulate-peptides" />

**The ARTG.** The Australian Register of Therapeutic Goods (ARTG) is the public list of therapeutic goods that can be
legally supplied in Australia.<Cite id="au-tga-about-artg" /> Prescription medicines are *registered*: the TGA checks
evidence of quality, safety and efficacy first, and the label shows an AUST R number.<Cite id="au-tg-act-artg-registration-listing,au-tga-prescription-medicines-overview" />
Low-risk medicines such as vitamins are *listed*: the company certifies them, they may contain only permitted
ingredients and make only low-level claims.<Cite id="au-tg-act-artg-registration-listing,au-tga-listed-medicines" />
Approved peptide medicines include insulin, semaglutide, oxytocin, desmopressin and octreotide.<Cite id="au-tga-how-we-regulate-peptides" />
None of the experimental peptides on this site is in the ARTG.<Cite id="au-artg-search-status-c-2026-10-23,au-artg-search-status-d-2026-10-23,au-artg-search-australia-legal-2026-10-24" />

**The core rule and the penalties.** Importing, making or supplying a therapeutic good that is not in the ARTG is an
offence unless an exemption, approval or authority applies. The maximum is 5 years in prison if use is likely to cause
harm.<Cite id="au-tg-act-s19b-19d-offences" /> The TGA can also seek civil penalties of up to $1.82 million for a
person and $18.2 million for a company, for each breach.<Cite id="au-tg-act-s19b-19d-offences,au-crimes-penalty-unit-2026" />
For smaller breaches it can issue an infringement notice instead of going to court.<Cite id="au-tg-act-s42yk-infringement-notices" />
Dealing in counterfeit therapeutic goods carries up to 7 years.<Cite id="au-tg-act-s42e-counterfeit" />

**Schedule 4 and the Poisons Standard.** The Poisons Standard sorts medicines into schedules. Schedule 4 means
"prescription only medicine".<Cite id="au-poisons-standard-2026-10" /> The schedules take effect through state and
territory law.<Cite id="au-poisons-standard-2026-10,au-tga-poisons-standard-page" /> BPC-157, TB-500, thymosin beta-4,
AOD-9604, CJC-1295, ipamorelin, hexarelin, GHRP-6 and melanotan II are all named in Schedule 4. Being in a schedule
does not mean a medicine is approved or available.<Cite id="au-poisons-standard-2026-10" />

**Having one without a prescription.** Most of these peptides are also on a national list of medicines that "must not
be possessed by a person without authority", for example without a prescription. Melanotan II is not on that list.<Cite id="au-poisons-standard-2026-10" />
Each state turns this into law in its own way:

- In **Victoria**, having any Schedule 4 medicine without authority is an offence.<Cite id="au-vic-dpcs-act-1981" />
- In **Queensland**, the same.<Cite id="au-qld-medicines-poisons-act-2019" />
- In **New South Wales**, it is an offence only for medicines on the state's "S4D" list, unless they were prescribed for
  you. TB-500, CJC-1295, ipamorelin and AOD-9604 are on the list NSW Health publishes.<Cite id="au-nsw-ptg-act-1966,au-nsw-health-s4d-2026" />
  New laws apply in NSW from 5 November 2026.<Cite id="au-nsw-health-s4d-2026" />

(Writer: do not say whether BPC-157 is S4D in NSW until the UNRESOLVED item 1 is settled. Other states and territories
were not checked: say "Check your own state or territory's law" rather than implying the rule is the same everywhere.)

**Importing for yourself.** The Personal Importation Scheme lets you import some unapproved medicines for yourself or
your immediate family. The conditions: no more than 3 months' supply at a time, packaging that shows what the medicine
is, and for a prescription-only medicine a written authority from an Australian doctor that you hold when it is
imported.<Cite id="au-tg-regulations-1990-sch-5-item-1,au-tga-personal-importation-scheme" /> Electronic prescriptions
are not accepted for this.<Cite id="au-tga-personal-importation-scheme" /> Unlabelled vials, or vials marked only
with a code, are not released; the TGA asks the Australian Border Force to seize and destroy them.<Cite id="au-tga-2026-05-peptide-import-warning,au-tga-2026-04-peptide-responsibilities" />
If goods are seized, no money is paid back.<Cite id="au-tga-personal-importation-scheme" /> The TGA has fined people
for importing a peptide without authority.<Cite id="au-tga-2024-04-peptide-import-infringement" />

**Growth hormones.** Growth hormone and growth hormone releasing hormones need an import permit from the health
department. Travellers can bring prescribed growth hormone in their own luggage with a doctor's letter, up to 3 months'
supply, but athletes and their staff need a permit.<Cite id="au-customs-prohibited-imports-regs,au-abf-medicines-and-substances" />

**Legal routes.** See `/en/legal-routes/#australia-sas` (2.4).

**Compounding.** A pharmacist may make up a medicine for one patient, after receiving a prescription. The TGA does not
check compounded medicines before they are supplied.<Cite id="au-tga-compounded-medicines-guidance" /> Making medicines
in advance of prescriptions is not allowed outside hospitals.<Cite id="au-tga-compounded-medicines-guidance" /> Since
1 October 2024, pharmacists may not compound GLP-1 medicines such as semaglutide.<Cite id="au-tg-regs-sch-5-item-6-compounding,au-tga-2024-06-glp1-compounding-update" />
Compounded medicines may not be advertised to the public.<Cite id="au-tga-compounded-medicines-guidance,au-tg-amendment-2026-measures-1" />

**Advertising.** Advertising a Schedule 4 substance to the public is an offence.<Cite id="au-tg-act-advertising,au-tga-advertising-legal-framework" />
So is advertising an unapproved product.<Cite id="au-tg-regs-reg-7-advertising-prescribed-goods" /> The TGA says
influencers, affiliates and online sellers can be held responsible.<Cite id="au-tga-how-we-regulate-peptides" />

**How the law is enforced.** Since June 2026, unapproved peptides are a TGA compliance priority.<Cite id="au-tga-2026-06-peptide-compliance-priority" />
Recent actions include fines for supplying melanotan II, seizures with police and the Border Force, criminal charges
for importing performance drugs, and a Federal Court case about peptide advertising.<Cite id="au-tga-2026-05-melanotan-ii-infringement-notices,au-tga-2026-08-peptide-seizure,au-abf-2026-08-pied-charges,au-tga-court-action-list" />
The health practitioner regulator, Ahpra, has acted against doctors who prescribed peptides without proper care.<Cite id="au-ahpra-2026-09-peptide-prescribing" />

**Sport.** Sport Integrity Australia runs anti-doping in Australia. Many unapproved peptides are banned in sport, and
athletes are responsible for anything found in their body.<Cite id="au-sia-peptides,au-sia-2026-05-peptides-statement" />

**Where to report.** Anyone can report a side effect to the TGA online.<Cite id="au-tga-report-adverse-event,au-tga-report-adverse-events-consumers" />
Suspected illegal selling or advertising can be reported to the TGA too.<Cite id="au-tga-report-breach" />

### 2.4 Draft for `/en/legal-routes/#australia-sas`

> ## Australia: the Special Access Scheme and Authorised Prescribers {#australia-sas}
>
> <Lead question="Can an Australian doctor get an unapproved peptide for me?">Only in narrow cases. The doctor applies, takes responsibility, and must arrange the supply.</Lead>
>
> | Route | Who | What it needs | For the peptides on this site |
> |---|---|---|---|
> | SAS Category A | A medical practitioner, for a patient who is seriously ill: death "reasonably likely ... within a matter of months" or early death without early treatment | Notify the TGA within 28 days | Possible in principle; rare |
> | SAS Category B | A registered health practitioner | TGA approval first, with a clinical reason | The usual route; the TGA wants human studies for that peptide, form, route and use |
> | SAS Category C | Listed practitioners, for goods on a TGA list | Notify within 28 days | Not possible: no peptide on this site is on the list |
> | Authorised Prescriber | A medical practitioner, for a group of patients | Ethics committee approval or a specialist college's endorsement | Possible in principle |
>
> <Cite id="au-tg-regs-reg-12a-sas-category-a,au-tg-act-s19-access-approvals,au-tga-sas-individual-patients,au-tga-authorised-prescriber,au-tga-established-history-lists-2026-10-24,au-tga-peptides-health-practitioners" />
>
> The doctor is responsible for the product and its outcomes, and may say no.<Cite id="au-tga-access-unapproved-goods-practitioners" />
> TGA approval does not mean a company must supply it, and it does not override state law.<Cite id="au-tga-sas-individual-patients" />
> Patients cannot apply themselves.<Cite id="au-tga-access-unapproved-goods-practitioners" /> Ahpra says patient
> demand alone is not a reason to prescribe an unapproved medicine, and a brief online consultation is not enough.<Cite id="au-ahpra-prescribing-unapproved-guidance" />

### 2.5 Draft for the Australian part of `#personal-import`

> **Australia.** You may import some unapproved medicines for yourself or your immediate family, up to 3 months'
> supply at a time. For a prescription-only medicine, which includes many peptides, you need a written authority from an
> Australian doctor when it arrives, and the pack must show what it is. Unlabelled vials are seized and destroyed, and
> the money is lost. Having the medicine may also be an offence under your state's law.
> <Cite id="au-tg-regulations-1990-sch-5-item-1,au-tga-personal-importation-scheme,au-tga-2026-05-peptide-import-warning,au-vic-dpcs-act-1981" />

---

## 3. The Therapeutic Goods Act and Regulations

### 3.1 Definitions (s 3; `au-tg-act-s3-definitions`)

- **Therapeutic goods** are, among other limbs, goods represented in any way to be, or likely to be taken to be, for
  therapeutic use. **Therapeutic use** includes "(a) preventing, diagnosing, curing or alleviating a disease, ailment,
  defect or injury in persons; or (b) influencing, inhibiting or modifying a physiological process in persons".
- **Medicine**: therapeutic goods (other than biologicals) that achieve their principal intended action by
  "pharmacological, chemical, immunological or metabolic means".
- **Supply** includes sale, exchange, gift, lease, loan, hire, samples, advertisement, and "administration to, or
  application in the treatment of, a person".
- **Advertise** includes any statement, picture or design "intended, whether directly or indirectly, to promote the use
  or supply of the goods", including on the label.
- **Sponsor**: the person who imports, exports or manufactures the goods (or arranges it). Our reading: a person who
  imports for themselves is the sponsor, so the "not the sponsor" defence does not help them.

### 3.2 The ARTG (ss 9A, 25, 26A; `au-tg-act-artg-registration-listing`)

| | Registered (AUST R) | Listed (AUST L) |
|---|---|---|
| What | Prescription medicines and higher-risk medicines | Low-risk, non-prescription medicines (vitamins, minerals, herbal) |
| Checked before supply? | Yes: quality, safety and efficacy evaluated (s 25) | No: "The applicant must certify that" the medicine is eligible, safe and contains only permitted ingredients (s 26A(2)), and the Secretary "must list the medicine" once the conditions are met (s 26A(1)) (fact-check: the draft cited s 26A(1A), which concerns the patent certificate) |
| Ingredients | Any, with evidence | Only those in the Permissible Ingredients Determination (s 26BB) |
| Peptides on this site | semaglutide (Ozempic, Wegovy), tirzepatide (Mounjaro), afamelanotide (SCENESSE implant, ARTG 327947) | oral nicotinamide riboside and NMN products (NAD+ precursors); NAD+ itself is not a permitted ingredient |

Sources: `au-tga-prescription-medicines-overview`, `au-tga-listed-medicines`, `au-artg-search-australia-legal-2026-10-24`
(ARTG entry pages show licence category "RE" for a Mounjaro pen, ARTG 439430, and "LI" for an NR product, ARTG 450569),
`au-permissible-ingredients-determination-2026-3`, `au-tga-2025-04-nad-nmn-safety-alert`.

### 3.3 Offences and penalties (Commonwealth; penalty unit $364 for conduct from 1 July 2026, `au-crimes-penalty-unit-2026`)

| Provision | Conduct | Maximum | In dollars (from 1 July 2026) |
|---|---|---|---|
| TG Act s 19B(1) | import, export, make or supply unapproved goods, harm likely | 5 years or 4,000 PU, or both | $1,456,000 |
| s 19B(4) | the same, no harm element | 12 months or 1,000 PU | $364,000 |
| s 19B(4A) | the same, strict liability | 100 PU | $36,400 |
| s 19D(1) | civil penalty, the same conduct | 5,000 PU (individual) / 50,000 PU (company) | $1.82 million / $18.2 million |
| s 42DL | advertising in breach (incl. Schedule 4, unapproved goods) | 5 years or 4,000 PU; 12 months or 1,000 PU; strict liability 100 PU; each day a continuing contravention is a separate offence, with a daily maximum of 10% of the maximum fine (s 42DL(13)-(14)) | as above |
| s 42DLB | civil penalty, advertising | 5,000 / 50,000 PU | $1.82 million / $18.2 million |
| s 42E | counterfeit goods (knowing or reckless) | 7 years or 2,000 PU | $728,000 |
| s 42EA | counterfeit goods, civil | 5,000 / 50,000 PU | $1.82 million / $18.2 million |
| s 42YKA | infringement notice per contravention | lesser of 1/5 of the court maximum and 12 PU (individual) or 60 PU (company) | $4,368 / $21,840 |
| Customs Act s 233BAA(4) | importing tier 1 goods without the required permission (growth hormones, GHRHs, steroids) | 5 years or 1,000 PU | $364,000 |

Sources: `au-tg-act-s19b-19d-offences`, `au-tg-act-advertising`, `au-tg-act-s42e-counterfeit`,
`au-tg-act-s42yk-infringement-notices`, `au-customs-act-1901-s233baa`, `au-customs-regulation-2015-sch-7`. The TGA's own
2026 releases give "$1.82 million per breach for individuals or $18.2 million per breach for corporations, and criminal
penalties of up to 7 years imprisonment" (`au-tga-2026-09-retatrutide-counterfeit`); the 7 years is the counterfeit
offence, the general offence is 5 years. Infringement notices paid by individuals in July to September 2026 were
$3,960 each (12 PU at the earlier $330; a company's notices were $19,800 each, 60 PU), and the 2024 peptide import
notice $3,756 (12 PU at $313)
(`au-tga-2026-10-prescription-import-infringements`, `au-tga-2024-04-peptide-import-infringement`).

**No Commonwealth possession offence.** The TG Act's possession offences concern quantities of vaping goods only;
possession of a medicine is a state matter (`au-tg-act-s19b-19d-offences`, second-run note).

### 3.4 Exemptions in the Regulations (`au-tg-regulations-1990-sch-5-item-1`, `au-tg-regs-*`)

- Schedule 5 item 1: personal importation (section 6).
- Schedule 5 item 6: medicines dispensed or extemporaneously compounded for a particular person, except gene therapy,
  medicinal cannabis, GLP-1 receptor agonist analogues and nicotine pouches; item 6A: hospital anticipatory compounding.
- Regulation 12A: SAS Category A. Regulation 12B: Authorised Prescribers. Schedule 5A item 3: clinical trial
  notification scheme. Schedule 8: who may manufacture without a licence (doctors for their own patients; pharmacists
  in a pharmacy open to the public).
- Regulation 7: the goods whose advertising to the public is forbidden (goods under SAS/AP approvals, personally
  imported and compounded goods, and any unapproved goods with no exemption, approval or authority).

---

## 4. The Poisons Standard and the peptides on this site

Instrument: Therapeutic Goods (Poisons Standard – October 2026) Instrument 2026 (F2026L01327), in force from
1 October 2026 (`au-poisons-standard-2026-10`). Key sections: s 60 (Schedule 4 supply only by doctors, dentists and vets
in practice, or pharmacists on a prescription); s 64(4) (Appendix D clause 5 poisons "must not be possessed by a person
without authority under the law of the jurisdiction in which the possession occurs"). The Reader's guide: schedules
are "recommendations to Australian States and Territories" and inclusion does not mean a substance is available or
approved. The Act's s 52D gives the Secretary power to amend it (`au-tg-act-s52d-poisons-standard`).

### 4.1 Status table (Australia, 24 October 2026)

| Compound | In the ARTG? | Poisons Standard | Appendix D cl. 5 (possession without authority illegal) | Since | Sources |
|---|---|---|---|---|---|
| BPC-157 | No | Schedule 4 ("# BPC-157") | Yes, item 5 | 1 June 2024 | `au-poisons-standard-2026-10`, `au-poisons-standard-2024-06`, `au-tga-2024-05-final-decisions-notice`, `au-artg-search-status-c-2026-10-23` |
| TB-500 | No | Schedule 4 | Yes, item 38 | 1 June 2016 | `au-poisons-standard-2016-06`, status-c |
| Thymosin beta-4 | No | Schedule 4 | Yes, item 39 | 1 June 2016 | same |
| AOD-9604 | No | Schedule 4 (CAS 221231-10-3) | Yes, item 3 | 1 June 2015 | status-d |
| CJC-1295 | No | Schedule 4 (CAS 863288-34-0) | Yes, item 7 | 1 June 2015 | status-b |
| Ipamorelin | No | Schedule 4 | Yes, item 25 | 1 June 2015 | status-b |
| Hexarelin | No | Schedule 4 | Yes, item 22 | 1 June 2015 | status-b |
| GHRP-6, pralmorelin (GHRP-2) | No | Schedule 4 | Yes, items 20, 31 | 1 June 2015 | status-b |
| GHRHs, GHRPs, GH secretagogues (groups) | — | Schedule 4 | Yes, items 18, 19, 21 ("including those separately specified in Schedule 4") | 1 June 2015 | status-b |
| Ibutamoren (MK-677; not a peptide) | No | Schedule 4 | Yes, item 23 | not dated here | `au-poisons-standard-2026-10`, `au-tga-2026-06-ibutamoren-capsules-alert` |
| Melanotan II | No | Schedule 4 | **No** | 1 June 2018 | status-c |
| Tesamorelin | No | Not named (our reading: within the GHRH group entry) | (group entry, our reading) | — | status-b; UNRESOLVED 5 |
| Sermorelin | No | Schedule 4 (no #) | (group entry item 18, our reading) | — | `au-poisons-standard-2026-10`, `au-artg-search-australia-legal-2026-10-24` |
| Semaglutide | Yes (Ozempic, Wegovy) | Schedule 4 | No | — | `au-artg-search-australia-legal-2026-10-24` |
| Tirzepatide | Yes (Mounjaro) | Schedule 4 | No | — | same |
| Afamelanotide | Yes (SCENESSE implant) | Schedule 4 | No | — | same |
| Retatrutide | No | Not named; the TGA says it is regulated as prescription-only, as a derivative of semaglutide or dulaglutide (fact-check) | No | — | `au-tga-2026-09-retatrutide-counterfeit`, `au-artg-search-australia-legal-2026-10-24`, `au-tga-advertising-glp1-prohibited` (status-a) |
| Bremelanotide (PT-141) | No | Not named | No | — | status-c |
| Elamipretide (SS-31) | No | Not named | No | — | status-d |
| Thymosin alpha-1 | No | Not named | No | — | status-d |
| KPV, GHK-Cu | No | Not named (GHK-Cu: the "copper compounds" entries' application unclear; may be a cosmetic) | No | — | status-c |
| MOTS-c, epitalon, Semax, Selank | No | Not named | No | — | status-d |
| NR, NMN (NAD+ precursors) | Listed medicines (oral) | Not scheduled | No | — | status-d |

Why many were scheduled: as performance and image enhancing drugs (2014 consultation; 2023-2024 BPC-157 decision after
"48 referrals for importation" since 1 July 2022) (`au-tga-2014-09-scheduling-consultation`,
`au-tga-2024-05-final-decisions-notice`). Melanotan II went to Schedule 4 rather than Schedule 10 (prohibited) in 2018
(`au-tga-2018-02-melanotan-ii-interim-decision`).

**Not named = not "legal".** An unscheduled peptide sold for a health purpose is still an unapproved therapeutic good:
supply, import and advertising rules apply whether or not it is scheduled (`au-tg-act-s19b-19d-offences`,
`au-tg-amendment-2026-measures-1` ES: "regardless of their scheduling status" for compounded goods). For
retatrutide the TGA has said it: GLP-1 receptor agonists "are regulated as prescription-only medicines. This includes
derivatives of semaglutide or dulaglutide such as retatrutide" (`au-tga-advertising-glp1-prohibited`, status-a; fact-check
correction: the draft said the TGA had not said this). That is the TGA's reading of the Poisons Standard's s 7
("every ... derivative"), not a named entry (UNRESOLVED 8, narrowed).

---

## 5. State and territory law on possession

**The principle.** The Poisons Standard's schedules and Appendix D are given legal force by state and territory
legislation (`au-poisons-standard-2026-10`, `au-tga-poisons-standard-page`). The TGA: "State and territory laws may
impose additional controls on the sale, supply and possession of unapproved peptide products"
(`au-tga-2026-04-peptide-responsibilities`), and possession of a performance and image enhancing drug without a
prescription "may also be illegal", depending on the drug and the state (`au-tga-pieds-article`). Supplying a
Schedule 4 medicine other than by a prescriber or a pharmacist on a prescription is restricted by the Poisons Standard
(s 60) and is an offence under the NSW and Queensland sections checked; the Victorian supply provisions were not read
in this run.

| | NSW (to 4 Nov 2026) | NSW (from 5 Nov 2026) | Victoria | Queensland |
|---|---|---|---|---|
| Law | Poisons and Therapeutic Goods Act 1966 | Medicines, Poisons and Therapeutic Goods Act 2022 (inserting s 18B into the Drug Misuse and Trafficking Act 1985) | Drugs, Poisons and Controlled Substances Act 1981 | Medicines and Poisons Act 2019 |
| How S4 is defined | NSW Poisons List adopts the national Schedules | NSW Poisons Schedules | "Schedule 4 Poison means a substance in Schedule 4 of the Poisons Standard" (s 4(1)) | S4 medicine: Poisons Standard Schedule 4 applies (s 11(1)(c)) |
| Possession offence | s 16(1): only "prescribed restricted substances" (NSW Appendix D, "S4D") | s 18B(2): "prohibited scheduled substance" (S4D, S8, S9) | s 36B(2): any Schedule 4 poison without authority | s 34(1): any S4 medicine unless in the authorised way or with a reasonable excuse |
| Exception for patients | possession "on and in accordance with the prescription" (s 16(1)(b)); carers (d1) | "lawfully prescribed for, or supplied to, the person" (s 18B(4)(g)) | Regulations 2017, reg 7 item 5: the person for whom it is supplied | s 34(2): lawfully supplied for own treatment |
| Maximum | 20 PU or 6 months (non-steroid); 2 years for anabolic steroids | 20 PU or 12 months | 10 PU | 200 PU |
| Supply offence | s 10(3) (restricted substance, non-wholesale) | s 28 (Part 2.4, unauthorised non-wholesale supply) and s 44 (Part 2.7, unregistered or unlisted goods) | not checked in this run | s 35 (500 PU) |
| Peptides affected | S4D list (NSW Health): AOD-9604, CJC-1295, follistatin, GHRH/GHRP/GHS groups, GHRP-6, hexarelin, ibutamoren, IGFs, ipamorelin, pralmorelin, somatropin, TB-500, thymosin beta-4. **Not listed: BPC-157, melanotan II** | same list (NSW Health, current as at 7 July 2026) | every Schedule 4 peptide, incl. BPC-157 and melanotan II | every S4 peptide |

Sources: `au-nsw-ptg-act-1966`, `au-nsw-mptg-act-2022`, `au-nsw-health-s4d`, `au-nsw-health-s4d-2026`,
`au-vic-dpcs-act-1981`, `au-vic-dpcs-regs-2017`, `au-qld-medicines-poisons-act-2019`. Penalty unit values differ by state
and were not checked; do not convert state penalty units to dollars.

Notes:
- NSW Health says NSW "does not automatically adopt the National Appendix D" yet "To date, NSW has included all entries
  in section 5 of the National Appendix D", while its list omits BPC-157 (in national clause 5 since 1 June 2024),
  capromorelin, lonapegsomatropin, somapacitan and somatrogon. UNRESOLVED 1.
- Victoria: s 36B(3) excludes drugs of dependence, which are dealt with elsewhere; no peptide hormone appears in the
  Act's text (second-run search), so the S4 possession offence is the relevant one.
- The other jurisdictions (WA, SA, Tasmania, ACT, NT) were **not checked**. UNRESOLVED 3.
- NSW S4D prescriptions will be valid for 12 months from 5 November 2026 (previously 6) (`au-nsw-health-s4d-2026`).

---

## 6. Importing: the Personal Importation Scheme, the border, permits

### 6.1 The scheme (Regulations Schedule 5 item 1; `au-tg-regulations-1990-sch-5-item-1`, `au-tga-personal-importation-scheme`)

Conditions, as in force since 8 September 2026:
1. "imported for therapeutic use in the treatment of the importer or the importer's immediate family" (spouse, de facto
   partner, child, parent, grandparent, grandchild, sibling, and those relatives of a spouse or partner);
2. no substance whose importation is prohibited under the Customs Act (our reading: growth hormone or a GHRH, whose
   import is prohibited without an ODC permit, fails this condition; for CJC-1295 and tesamorelin see UNRESOLVED 4);
3. not vaping goods or nicotine pouches;
4. for medicines: one importation not more than 3 months' supply at the manufacturer's maximum dose, not more than
   15 months' supply in 12 months, and "in packaging that enables the medicine to be accurately identified";
5. for Schedule 4 or 8 goods: "the subject of a written authority" from a medical practitioner (or, for a passenger, an
   overseas medical practitioner treating them).

TGA guidance adds: the authority must be held at the time of importation, from an Australian registered medical
practitioner, with listed details; eScripts are not accepted; an authority obtained after the goods are held does not
comply; goods cannot be sold, supplied or given away; counterfeit goods are prohibited in all cases; non-compliant goods
"may be seized" and "No compensation is provided"; "You may also face significant fines, or civil or criminal
proceedings" (`au-tga-personal-importation-scheme`).

What changed on 8 September 2026 (`au-tg-amendment-2026-measures-1`, `au-tga-2026-09-personal-import-packaging`):
the packaging requirement; passengers carrying Schedule 4 or 8 goods now also need a written authority (before, they
did not); a wider definition of immediate family.

For peptides specifically: products "identified only by codes", or not stating active ingredient and strength, "cannot
be assessed for lawful importation" and "will not be considered for release" (`au-tga-2026-04-peptide-responsibilities`);
"these vials will not be released"; the TGA will notify the ABF "to seize and destroy these products when they are
intercepted at the border" (`au-tga-2026-05-peptide-import-warning`); the TGA "is increasingly intercepting unlabelled
vials at the border" (`au-tga-2026-07-peptide-promoters-notice`, DO NOT LINK; same point in
`au-tga-how-we-regulate-peptides`: goods "may be seized and destroyed. You may lose the products and the money you
paid").

**The scheme does not help a Schedule 4 peptide bought without a prescription**, and no Australian doctor can lawfully
give a written authority for a product that is not in the ARTG except within an access pathway (our reading of the
Regulations and the SAS rules; the TGA has not said this in these words). The 2024 infringement notice was for exactly
this: importing "the prescription-only medicine" without "approval or authority" (`au-tga-2024-04-peptide-import-infringement`).

### 6.2 Prohibited imports and tier 1 goods

- Customs (Prohibited Imports) Regulations 1956, reg 5G and Schedule 7A: item 3, "Natural and manufactured growth
  hormones, including somatropin, somatrem, somatomedins and insulin-like growth factors (not insulins) and growth
  hormone releasing hormones (somatorelin and synthetic analogues)", may be imported only with the Department's written
  permission; exception for a ship or aircraft passenger's own prescribed supply, which does not apply to athletes and
  support staff (`au-customs-prohibited-imports-regs`; CORRECTION carried over: item 3, not item 4).
- The Office of Drug Control issues the permit (5G/5H) (`au-odc-growth-hormones-import-permit`).
- The same substances are "tier 1 goods" (Customs Regulation 2015, Sch 7 Part 1 item 13); importing them without the
  required permission: up to 5 years or 1,000 PU (`au-customs-regulation-2015-sch-7`, `au-customs-act-1901-s233baa`).
  The ABF and TGA charged people in 2026 with "importing Tier 1 Goods (PIEDs)" after seizures that included peptide
  products (`au-tga-2026-04-vic-pied-arrests`, `au-abf-2026-08-pied-charges`).
- GHRPs and secretagogues (ipamorelin, hexarelin, GHRP-6), BPC-157, TB-500 and melanotan II are **not** in Schedule 7A;
  their import is controlled through the therapeutic goods rules (status-b, status-c).

### 6.3 The Australian Border Force

The ABF stops and seizes goods at the border on the TGA's notification (TG Act s 19B(7) and s 42F treat unlawful
imports as forfeited prohibited imports) (`au-tg-act-s19b-19d-offences`, `au-tg-act-s42e-counterfeit`). The TGA "work[s]
with the Australian Border Force (ABF) to identify and stop unlawful imports" (`au-tga-how-we-regulate-peptides`); in
2025 it asked the ABF to seize imported "GLP-1 peptide" drops (`au-tga-2025-09-imported-glp1-products`). For travellers,
the ABF's own page says prescribed growth hormone may come in accompanied baggage with a doctor's letter or prescription
(English), up to 3 months, and that "Athletes and sporting staff travelling with hormones and peptides" need Office of
Drug Control permission (`au-abf-medicines-and-substances`).

---

## 7. Legal access routes (anchor `#australia-sas`)

| Route | Legal basis | Key rules | Sources |
|---|---|---|---|
| SAS Category A | Regs reg 12A | "Category A patient means a person who is seriously ill with a condition from which death is reasonably likely to occur within a matter of months, or from which premature death is reasonably likely to occur in the absence of early treatment"; medical practitioners only; informed consent; notify within 28 days | `au-tg-regs-reg-12a-sas-category-a`, `au-tga-sas-individual-patients` |
| SAS Category B | Act s 19(1)(a) | apply first; clinical justification incl. why ARTG goods are unsuitable; usually 2 to 5 days; assessed by a TGA officer who is a doctor or pharmacist | `au-tg-act-s19-access-approvals`, `au-tga-sas-individual-patients` |
| SAS Category C | Act s 19(7A) rules | only goods on the TGA list; notify within 28 days. **No peptide on this site is on the list** (138 medicine rows, last updated 23 January 2026) | `au-tga-established-history-lists-2026-10-24` |
| Authorised Prescriber | Act s 19(5); Regs reg 12B | a class of patients; ethics committee approval or specialist college endorsement unless on the established-history list (no peptide on this site is on it; the list does include two peptide radiopharmaceuticals for neuroendocrine tumours); report patient numbers every 6 months | `au-tg-regs-reg-12b-authorised-prescriber`, `au-tga-authorised-prescriber`, `au-tga-established-history-lists-2026-10-24` |
| Clinical trial | Regs Sch 5A item 3 (notification) or Act s 19(1)(b) (approval) | ethics committee, Good Clinical Practice | `au-tg-regs-sch-5a-item-3-clinical-trials`; registry searches in status files (no current Australian trials of these peptides) |

Shared conditions: only Ahpra-registered practitioners can apply (not patients or sponsors); "You are responsible for
the use of an unapproved therapeutic good and all outcomes"; the practitioner can refuse
(`au-tga-access-unapproved-goods-practitioners`); "it is your responsibility to source the unapproved therapeutic
good"; "Sponsors are under no obligation to supply"; "TGA approval does not override any State or Territory
requirements"; adverse events within 15 days (`au-tga-sas-individual-patients`). For peptides, the TGA says applications
"should be supported by human studies that are relevant to the specific peptide, dosage form, route of administration
and indication", and that "the responsibility for determining the quality and safety of the product rests with the
practitioner" (`au-tga-peptides-health-practitioners`).

Ahpra's September 2026 guidance for all prescribers (`au-ahpra-prescribing-unapproved-guidance`): prescribe unapproved
or compounded medicines only when ARTG medicines are unavailable or inappropriate and evidence supports the use;
"Patient demand alone is not a valid reason"; "A thorough assessment cannot be adequately completed in a brief, online
consultation"; tell the patient the medicine has not been assessed by the TGA; document; manage conflicts of interest;
report side effects to the TGA. Its first case study is a doctor who prescribed unapproved peptides on request.

---

## 8. Compounding

Rules (`au-tg-regs-sch-5-item-6-compounding`, `au-tg-regs-sch-8-manufacturing-exemptions`, `au-tga-compounded-medicines-guidance`):
- Exempt from the ARTG: medicines "dispensed, or extemporaneously compounded, for a particular person for therapeutic
  application to that person", except gene therapy, medicinal cannabis, GLP-1 receptor agonist analogues (since
  1 October 2024) and nicotine pouches.
- For a prescription-only medicine, the pharmacist needs the prescription and the patient's request *before*
  compounding; "compounding in anticipation of demand" is permitted only for hospital pharmacists (item 6A).
- Licence exemptions: pharmacists in a pharmacy open to the public supplying from those premises; doctors for their own
  patients.
- "We do not evaluate the safety, quality or efficacy of compounded medicines before they are supplied".
- Advertising compounded medicines to the public is prohibited (ss 42DL(12), 42DLB(9)); since 8 September 2026 the
  Regulations say so expressly, "regardless of their scheduling status" (`au-tg-amendment-2026-measures-1`). A pharmacy
  may advertise a compounding service without naming products.
- Compounded peptides "may be therapeutic goods and may be subject to manufacturing, supply, prescribing and advertising
  controls" (`au-tga-peptides-health-practitioners`); compounding exemptions apply only to goods compounded for a
  particular person (`au-tga-2026-04-peptide-responsibilities`).

The GLP-1 exclusion: made by the 2024 Measures No. 2 Regulations after the TGA found online clinics supplying compounded
GLP-1 medicines "on a commercial-like scale" to "at least 20,000 patients" (`au-tg-amendment-2024-measures-2-glp1`,
`au-tga-2024-06-glp1-compounding-update`). UNRESOLVED 6: whether it covers tirzepatide and retatrutide.

TGA and other action on compounded products:
- 1 March 2024: search warrant at a Melbourne pharmacy; seized items included "semaglutide, peptides, and human growth
  hormones" allegedly unlawfully manufactured; pharmacists "are most likely breaking the law if they are manufacturing or
  supplying medicines prior to receiving a prescription" (`au-tga-2024-03-south-yarra-pharmacy-warrant`).
- 7 April 2025: court-enforceable undertaking from a compounding pharmacy company over online order forms for compounded
  semaglutide and tirzepatide (`au-tga-media-releases-peptide-log-2026-10-24`, item 3).
- 13 April 2026: TGA advisory on importing, compounding and supplying unapproved peptides (`au-tga-2026-04-peptide-responsibilities`).
- 16 September 2026: Ahpra guidance on prescribing compounded and unapproved medicines (`au-ahpra-2026-09-peptide-prescribing`).
- 28 September 2026: the TGA head, on the Federal Court case: the TGA "will take legal action against all entities
  unlawfully operating in the peptide industry. This includes health practitioners, compounding pharmacies, social media
  influencers and telehealth clinics" (`au-tga-media-releases-peptide-log-2026-10-24`, item 1).
- No TGA release found that reports action against a compounding pharmacy specifically for compounding BPC-157 or
  another experimental peptide (search of 24 October 2026: `au-tga-search-australia-legal-2026-10-24`).

---

## 9. Advertising

- Act s 42DL(10) and s 42DLB(7): an advertisement must not refer to substances in Schedule 3, 4 or 8 (other than
  Appendix H) unless authorised or required by government (`au-tg-act-advertising`).
- s 42DL(12) and s 42DLB(9) with reg 7: no advertising to the public of goods not in the ARTG that are prescribed,
  including any unapproved goods with no exemption, approval or authority, and (expressly since 8 September 2026)
  compounded goods (`au-tg-regs-reg-7-advertising-prescribed-goods`, `au-tg-amendment-2026-measures-1`).
- The Advertising Code (F2021L01661): no claims that goods are "safe, or without harm or side-effects" or "a guaranteed
  cure"; no testimonials from people paid to give them, including influencers (`au-advertising-code-2021`).
- Not covered: advertising directed only at health professionals (s 42AA); information shared between practitioner and
  patient in a consultation (`au-tga-advertising-legal-framework`).
- The TGA: influencers, affiliates, online sellers and health services "may be held accountable"
  (`au-tga-how-we-regulate-peptides`).

**For the editor (this site in Australia):** whether content is "advertising" depends on whether it "on its face appears
to be designed or calculated to promote the supply or use" of goods, not on intention; a peer-reviewed-style balanced
account with no commercial availability is the TGA's example of non-promotional material; calls to action, benefit-only
framing, prices and links to sellers are indicators of promotion (`au-tga-advertising-determining-content`). This
supports the site's existing rules (no seller links, no doses, balanced evidence). Naming Schedule 4 peptides in neutral
educational content is not, on the TGA's guidance, advertising by itself; that is our reading, not a TGA ruling.
A 2019 Federal Court judgment penalised a clinic company $10 million for advertising, among other things,
"advertisements using the word \"peptides\"" (log item 2): that was a seller's promotional site, not neutral education.

---

## 10. Enforcement and warnings, 2023–2026 (TGA, ABF, Ahpra; sellers and people not named)

| Date | What | Source |
|---|---|---|
| 25 May 2023 | Safety alert: counterfeit semaglutide vials imported into Australia and sold online; testing found no semaglutide (added by the fact-check) | `au-tga-2023-05-counterfeit-semaglutide-vials` |
| Nov 2023 – May 2024 | BPC-157 scheduling: proposal (48 import referrals since July 2022), interim decision 3 April 2024, final decision, in force 1 June 2024 | `au-tga-2024-05-final-decisions-notice` |
| 1 Mar 2024 | Search warrant at a Melbourne pharmacy (semaglutide, peptides, growth hormone seized) | `au-tga-2024-03-south-yarra-pharmacy-warrant` |
| 29 Apr 2024 | Infringement notice ($3,756) to a Victorian for importing a peptide without authority, after warnings; s 19D(1) | `au-tga-2024-04-peptide-import-infringement`, `au-tga-infringement-notices-list` |
| 18 Jun 2024 | Compounded GLP-1 medicines barred from 1 October 2024 | `au-tga-2024-06-glp1-compounding-update` |
| 30 Sep 2024 | Safety alert: counterfeit Ozempic-labelled pens, imported, contained insulin; one life-threatening adverse event (added by the fact-check) | `au-tga-2024-09-counterfeit-ozempic-pens` |
| 24 Jan 2025 | TGA blog: melanotan "not approved for sale or use as a tanning agent"; illegal to supply without a prescription or to advertise | `au-tga-2025-01-melanotan-blog` |
| 7 Apr 2025 | Enforceable undertaking, compounding pharmacy, advertising compounded GLP-1 medicines | log item 3 |
| 29 Sep 2025 | Advisory: imported "GLP-1 peptide" drops; ABF to seize and destroy | `au-tga-2025-09-imported-glp1-products` |
| 2 Mar 2026 | Safety advisory: imported products labelled GLP-1 contained none; counterfeit under the Act (added by the fact-check) | `au-tga-2026-03-counterfeit-glp1-products` |
| 26 Mar – 17 Apr 2026 | ABF and TGA warrants in Melbourne; over 10,000 vials seized; three people charged with importing tier 1 goods | `au-tga-2026-04-vic-pied-arrests` |
| 13 Apr 2026 | Advisory: responsibilities when importing, compounding and supplying unapproved peptides | `au-tga-2026-04-peptide-responsibilities` |
| 7 May 2026 | Advisory: unlabelled peptide vials not released at the border | `au-tga-2026-05-peptide-import-warning` |
| 13 May 2026 | Sport Integrity Australia warns athletes about peptides | `au-sia-2026-05-peptides-statement` |
| 21 May 2026 | 27 infringement notices ($101,412) to a NSW individual for supplying melanotan II; s 19D(1) | `au-tga-2026-05-melanotan-ii-infringement-notices`, `au-tga-infringement-notices-list` |
| 4 Jun 2026 | Advisory: ibutamoren capsules found to contain an undeclared anabolic steroid | `au-tga-2026-06-ibutamoren-capsules-alert` |
| 10 Jun 2026 | Unapproved peptides made a TGA compliance priority | `au-tga-2026-06-peptide-compliance-priority` |
| 18 Jun 2026 | New TGA guidance on advertising prescription medicines; compliance action names services that prescribe or supply peptides (added by the fact-check) | `au-tga-2026-06-prescription-advertising-guidance` |
| 19 Jun 2026 | TGA and Chief Medical Officer joint statement: liver damage, severe allergic reactions, inflammation | `au-tga-2026-06-cmo-peptide-statement` |
| 19 Jun 2026 | Victorian health alert: liver injury after a product labelled retatrutide | `vic-health-2026-retatrutide-liver` |
| 20 Jul 2026 | TGA puts promoters on notice; labelling a blank vial counts as manufacture | `au-tga-2026-07-peptide-promoters-notice` (DO NOT LINK) |
| 4–17 Aug 2026 | TGA and NSW Police seize over $120,000 of peptides and steroids linked to an influencer | `au-tga-2026-08-peptide-seizure` |
| 12 Aug 2026 | Two Victorians charged with further counts of importing tier 1 goods | `au-abf-2026-08-pied-charges` |
| 17 Aug 2026 | Melanotan II nasal sprays found inconsistently dosed | `au-tga-2026-08-melanotan-ii-safety-alert` |
| 8 Sep 2026 | New personal-import packaging and authority rules in force | `au-tga-2026-09-personal-import-packaging` |
| 14 Sep 2026 | Product sold as retatrutide contained semaglutide and no retatrutide; serious adverse event | `au-tga-2026-09-retatrutide-counterfeit` |
| 16 Sep 2026 | Ahpra: crackdown on reckless prescribing of peptides; new guidance | `au-ahpra-2026-09-peptide-prescribing` |
| 23 Sep 2026 | TGA peptide pages for consumers and practitioners | `au-tga-how-we-regulate-peptides`, `au-tga-peptides-health-practitioners` |
| 28 Sep 2026 | Federal Court proceedings against a former company (in liquidation) and its directors for advertising peptides (BPC-157, CJC-1295, GHRP-6), incl. claims about cancer, HIV/AIDS and mental illness | log item 1, `au-tga-court-action-list` |
| 6 Oct 2026 | 12 infringement notices ($126,720), incl. individuals importing prescription-only medicines | `au-tga-2026-10-prescription-import-infringements` |

2023: no peptide enforcement action (infringement notice, warrant or court case) was found (TGA site search, 24 October
2026), but there is a 2023 warning: the 25 May 2023 safety alert on counterfeit semaglutide vials (fact-check
correction: the draft said there was no 2023 item other than the BPC-157 scheduling proposal). Older context: 2018–2019 Federal Court case ending in a $10 million penalty against a peptide
clinic company (log item 2); 2020 infringement notices to a pharmacist for advertising peptides
(`au-tga-2020-06-pharmacist-peptide-advertising`).

**What the warnings say to people who already have a product** (for harm-reduction wording): stop using melanotan II
tanning products and return them to a pharmacy for disposal (`au-tga-2026-08-melanotan-ii-safety-alert`); stop using the
ibutamoren capsules and take them to a pharmacy (`au-tga-2026-06-ibutamoren-capsules-alert`); performance and image
enhancing drugs can be disposed of at a pharmacy, and needle and syringe programs give sterile equipment
(`au-tga-pieds-article`); report side effects (`au-tga-report-adverse-event`).

---

## 11. Reporting, sport and help services (names and URLs only)

### 11.1 Reporting

| What | Where | Source |
|---|---|---|
| Side effects (consumers and practitioners) | TGA: Report an adverse event or safety problem, https://www.tga.gov.au/safety/report-problem/report-adverse-event-or-safety-problem; online system https://aems.tga.gov.au/ | `au-tga-report-adverse-event`, `au-tga-report-adverse-events-consumers` |
| Illegal selling, counterfeit products, questionable practices | TGA: Report a breach, https://www.tga.gov.au/safety/report-problem/report-breach | `au-tga-report-breach` |
| Advertising that breaks the rules | TGA advertising complaint portal, https://compliance.health.gov.au/ac-report/ | `au-tga-report-adverse-event` (second-run note) |
| Concerns about a practitioner's prescribing | Ahpra (https://www.ahpra.gov.au/) | `au-ahpra-2026-09-peptide-prescribing` |
| Doping in sport | Sport Integrity Australia (confidential reporting) | `au-sia-2026-05-peptides-statement` |

### 11.2 Anti-doping

- Sport Integrity Australia (established by the Sport Integrity Australia Act 2020, s 20A; formerly ASADA) runs the
  National Anti-Doping scheme (`au-sia-act-2020`).
- "Many unapproved peptides are prohibited in sport" (BPC-157, CJC-1295, ibutamoren, ipamorelin, MOTS-c, TB-500 named);
  possession or use can be an anti-doping rule violation; a compounded medicine "may not be approved by the TGA" and "A
  TUE is unlikely to be granted for an unregistered medicine" (`au-sia-peptides`).
- "Under Australia's strict-liability anti-doping rules, athletes are accountable for any prohibited substance in their
  system, no matter the source" (`au-sia-2026-05-peptides-statement`).
- BPC-157: S0, prohibited at all times, specified substance (`au-sia-bpc-157`, `wada-2026-list-en`).
- **Retatrutide: SIA says "Retatrutide is not listed on the Prohibited List"** (2026) and "GLP-1 agonists are currently
  not prohibited in sport" (`au-sia-retatrutide`). The site's data marks retatrutide "prohibited, S0". CONFLICT;
  UNRESOLVED 7.
- Athletes and support staff cannot use the passenger exception for growth hormones and GHRHs
  (`au-customs-prohibited-imports-regs`, reg 5G(3); `au-abf-medicines-and-substances`).

### 11.3 Help services (no telephone numbers recorded)

| Kind | Service | Official URL | Source |
|---|---|---|---|
| urgent-advice | healthdirect (24-hour nurse advice; known as NURSE-ON-CALL in Victoria) | https://www.healthdirect.gov.au/how-healthdirect-can-help-you | `au-healthdirect-helpline` |
| urgent-advice (Vic) | Nurse-on-Call | https://www.health.vic.gov.au/primary-care/nurse-on-call | `au-vic-nurse-on-call` |
| urgent-advice (Qld) | 13 HEALTH (the name is itself a dialling word, so naming it effectively prints a number; editor decides; whether healthdirect's helpline serves Queensland callers was not checked) | https://www.qld.gov.au/health/contacts/advice/13health | `au-qld-13health` |
| poisons | Poisons Information Centre (one national line, answered by the state centres; healthdirect page explains) | https://www.healthdirect.gov.au/healthy-living/toxins-and-poisoning/poisoning | `au-healthdirect-poisoning` |
| poisons | NSW Poisons Information Centre | https://www.poisonsinfo.nsw.gov.au/ | `au-nsw-poisons-information-centre` |
| drugs-advice | National Alcohol and Other Drug Hotline | https://www.health.gov.au/contacts/national-alcohol-and-other-drug-hotline | `au-health-aod-hotline` |
| mental-health | Mental health helplines (healthdirect) | https://www.healthdirect.gov.au/healthcare-and-services/mental-health/mental-health-helplines | `au-healthdirect-mental-health-helplines` |
| harm reduction | Needle and syringe programs (Victoria, Queensland); NSW community sharps | see extras.yaml | `au-vic-needle-syringe-program`, `au-qld-needle-syringe-program`, `au-nsw-community-sharps` |

### 11.4 Proposed entry for `src/data/jurisdictions.yaml` (for the editor; not written there)

```yaml
- code: AU
  emergency: []   # not recorded: this assignment records no telephone numbers; the editor fills it from an official source
  regulator: { name: "Therapeutic Goods Administration (TGA)", url: "https://www.tga.gov.au/" }
  reporting: { name: "TGA: report an adverse event or safety problem", url: "https://www.tga.gov.au/safety/report-problem/report-adverse-event-or-safety-problem" }
  anti_doping: { name: "Sport Integrity Australia", url: "https://www.sportintegrity.gov.au/" }
  medicines_law: { name: "Therapeutic Goods Act 1989", url: "https://www.legislation.gov.au/C2004A03952/latest/text" }
  help:
    - { kind: urgent-advice, name: "healthdirect", url: "https://www.healthdirect.gov.au/how-healthdirect-can-help-you" }
    - { kind: poisons, name: "Poisons Information Centre (healthdirect: poisoning)", url: "https://www.healthdirect.gov.au/healthy-living/toxins-and-poisoning/poisoning" }
    - { kind: drugs-advice, name: "National Alcohol and Other Drug Hotline", url: "https://www.health.gov.au/contacts/national-alcohol-and-other-drug-hotline" }
    - { kind: mental-health, name: "Mental health helplines (healthdirect)", url: "https://www.healthdirect.gov.au/healthcare-and-services/mental-health/mental-health-helplines" }
```

The TGA and SIA home pages are on allowlisted hosts but were not registered as sources. Whether `emergency: []` passes
the schema was not checked.

---

## 12. Hosts for `config/link-allowlist.json`

On it today: www.tga.gov.au, www.sportintegrity.gov.au, www.health.vic.gov.au. Not on it: www.legislation.gov.au,
www.abf.gov.au, www.odc.gov.au, www.ahpra.gov.au, aems.tga.gov.au, compliance.health.gov.au, legislation.nsw.gov.au,
www.health.nsw.gov.au, www.poisonsinfo.nsw.gov.au, www.legislation.vic.gov.au (and content.legislation.vic.gov.au for the
PDFs), www.legislation.qld.gov.au, www.qld.gov.au, www.health.qld.gov.au, www.healthdirect.gov.au, www.health.gov.au,
www.anzctr.org.au (status files), www.judgments.fedcourt.gov.au (status-d), www.industrialchemicals.gov.au and
services.industrialchemicals.gov.au (status-c). Suggestion: a suffix entry `.gov.au` ("Australian Commonwealth, state and
territory government") would cover all but anzctr.org.au. Note `check-no-commerce.ts` scans every URL in `src/data`
files, so the hosts must be added before australia.yaml is merged.

---

## 13. Verification log and corrections (second run, 24 October 2026)

**Re-checked against the official text** (quotations compared with the saved text by script and by hand): TG Act
Compilation No. 89 (ss 3, 9A, 19, 19B, 19D, 25, 26A, 42AA, 42DL, 42DLB, 42E, 42EA, 42F, 42YK, 42YKA, 52A, 52D; the version
list confirms C89 is the latest); TG Regulations Compilation No. 131 (reg 7, 12A, 12B, Sch 5 items 1, 6, 6A, 9, Sch 5A
item 3, Sch 8; searched for every peptide name, none present); Poisons Standard October 2026 (ss 60, 64; Schedule 4
entries; Appendix D clause 5 items 1–41; every name searched); Customs (Prohibited Imports) Regulations Compilation 147
(reg 5G, Sch 7A); Customs Act Compilation 194 (s 233BAA); Customs Regulation 2015 Compilation 38 (Sch 7 Part 1);
Crimes (Amount of a Penalty Unit) Instrument 2026 and Crimes Act s 4AA; NSW 1966 Act ss 10, 16 (archive copy); NSW 2022
Act s 18B (archive copy); Victorian Act s 4(1), 36B and Regulations reg 7 (authorised PDFs); Queensland Act ss 11, 34, 35;
both NSW Health S4D pages; every TGA page in the file (saved copies; peptide hub, media releases, safety alerts, report
pages re-opened live); ABF release; SIA pages.

**New in the second run (16 entries):** `au-tg-act-s42e-counterfeit`, `au-tga-advertising-legal-framework`,
`au-tga-established-history-lists-2026-10-24`, `au-tga-2024-04-peptide-import-infringement`,
`au-tga-2020-06-pharmacist-peptide-advertising`, `au-tga-2024-06-glp1-compounding-update`,
`au-tga-2025-09-imported-glp1-products`, `au-tga-2026-06-ibutamoren-capsules-alert`, `au-tga-infringement-notices-list`,
`au-tga-court-action-list`, `au-abf-medicines-and-substances`, `au-sia-retatrutide`, `au-sia-bpc-157`,
`au-ahpra-2026-09-peptide-prescribing`, `au-ahpra-prescribing-unapproved-guidance`, `au-tga-search-australia-legal-2026-10-24`.

**Corrections to the first-run draft:**
1. `au-poisons-standard-2026-10`: the list of Schedule 4 entries marked # (Appendix D) omitted **capromorelin** and
   **ibutamoren**; both added (both are also in Appendix D clause 5, items 6 and 23).
2. `au-poisons-standard-2026-10`: the Reader's guide was quoted as "that it has been approved or is efficacious"; the
   text reads "indicate that it is has been approved or is efficacious for any use" (sic); corrected.
3. `au-tg-act-s3-definitions`: paraphrases were set in quotation marks and two limbs were missing ("hire or
   hire-purchase"; supply "by way of administration to, or application in the treatment of, a person"); rewritten with
   exact quotations.
4. `au-qld-medicines-poisons-act-2019`: the title contained the commerce token "buy" (from the section heading); title
   paraphrased; s 11(1)(c) added.
5. `au-tga-2026-07-peptide-promoters-notice`: the draft flagged only the URL; the title also contains "suppliers". Note
   updated; prefer `au-tga-how-we-regulate-peptides`.
6. File header: said the TGA site search could not be used; it worked in the second run and was used. Updated.
7. `au-tg-act-s19b-19d-offences`: the "no possession offence" statement is now backed by a check of every "possess" in
   the Act (only vaping-goods offences); the TGA's "up to 7 years" is explained by s 42E (new entry).
8. `au-vic-dpcs-act-1981`: added s 36B(3) (drugs of dependence excluded) and the search showing no peptide hormone is a
   drug of dependence.
9. `au-nsw-health-s4d-2026`: page date ("Current as at 7 July 2026") added.
10. `au-tga-access-unapproved-goods-practitioners`: wording on Schedule 9 goods aligned with the page (they "can't be
    accessed", with a note to seek state approval first).
11. `au-tga-report-adverse-event`: added the breach form and advertising complaint URLs from the live page.

Confirmed from the first run: Customs Schedule 7A growth hormone entry is **item 3** (status-b said item 4; item 4 is
darbepoetin alfa). Penalty unit $364 from 1 July 2026.

**Not done / could not be read:** legislation.nsw.gov.au and AustLII (bot checks; left alone); the Victorian penalty unit
value; WA, SA, Tasmanian, ACT and NT poisons laws; the Federal Court originating application in the September 2026
case; Ahpra's Spring 2026 community newsletter (PDF; seen only as a search snippet).

---

## 14. UNRESOLVED (for the editor and the legal reviewer)

1. **BPC-157 in NSW.** National Appendix D clause 5 has listed BPC-157 since 1 June 2024, and NSW Health says NSW "has
   included all entries in section 5", but both NSW Health S4D lists (the current one and the one for the 2026
   Regulation) omit BPC-157 (and capromorelin, lonapegsomatropin, somapacitan, somatrogon). Whether possession of
   BPC-157 without a prescription is an offence in NSW cannot be established without the Regulation's text
   (legislation.nsw.gov.au blocked by a bot check). Do not state it either way.
2. **NSW from 5 November 2026:** the 2022 Act was read from a July 2025 archive copy; the text as commenced, and the
   Medicines, Poisons and Therapeutic Goods Regulation 2026, were not read.
3. **Other states and territories** (WA, SA, Tasmania, ACT, NT): not checked. The page should not imply that the
   Victorian/Queensland rule applies everywhere.
4. **CJC-1295, tesamorelin, sermorelin at the border:** whether they are "synthetic analogues" of somatorelin under
   Customs Schedule 7A item 3 (import permit; tier 1 goods) is our chemical reading only; no official document names them.
5. **Tesamorelin and sermorelin in Appendix D:** whether the GHRH group entry (item 18) covers them is our reading; the
   Poisons Standard names neither in Appendix D (sermorelin is in Schedule 4 without #).
6. **Compounding exclusion scope:** whether "GLP-1 receptor agonist analogues" covers tirzepatide (dual) and retatrutide
   (triple) is not stated in the instrument or explanatory statement (the ES speaks of "semaglutide-like medicines").
   A hint, not an answer: the TGA's advertising page calls Mounjaro (tirzepatide) a GLP-1 receptor agonist and counts
   retatrutide among the derivatives (`au-tga-advertising-glp1-prohibited`, status-a).
7. **Retatrutide in sport:** Sport Integrity Australia says it "is not listed on the Prohibited List"; the site's data
   says "prohibited, S0". Ask SIA or WADA; until then the Australian page should not state a sport status for
   retatrutide, and the editor should review the WADA row.
8. **Retatrutide's schedule (narrowed by the fact-check):** it is not named in the Poisons Standard, but the TGA says
   GLP-1 receptor agonists "are regulated as prescription-only medicines. This includes derivatives of semaglutide or
   dulaglutide such as retatrutide" (`au-tga-advertising-glp1-prohibited`, status-a). Still open: that is the TGA's
   reading of s 7 ("derivative"), not a named entry, and whether each state's possession offence follows it was not
   established. It is in any case an unapproved therapeutic good (`au-tga-2026-09-retatrutide-counterfeit`).
9. **GHK-Cu:** whether the Schedule 4 and 6 "copper compounds" entries apply to a copper-peptide complex, and whether it
   may be used in cosmetics (AICIS search inconclusive) — carried over from status-c.
10. **State penalty units:** values for NSW, Victoria and Queensland not checked; do not convert to dollars.
11. **Personal-import authority for an unapproved peptide:** whether any Australian doctor's written authority can make
    the personal import of an unapproved Schedule 4 peptide lawful outside the SAS/AP pathways is our reading (no), not a
    TGA statement; the TGA's 2024 infringement notice and its guidance point the same way.
12. **"Advertising" and neutral education:** that neutral, non-promotional naming of Schedule 4 peptides on this site is
    not advertising is our reading of TGA guidance, not a ruling; a legal reviewer should confirm.

---

## Fact-check (independent)

Independent fact-check of this file and `sources/australia.yaml`, 24 October 2026, by a separate agent that assumed
errors existed. Every source was opened again by the fact-checker, not taken from the writer's notes or saved copies
(except where stated for NSW). Nothing under `src/`, `config/`, `docs/` or `scripts/` was edited.

### How the sources were read

- **legislation.gov.au** (curl, official epub HTML, converted to text and searched): Poisons Standard October 2026
  (F2026L01327); TG Act Compilation No. 89 (both volumes; the version list confirms C89 is the latest); TG Regulations
  Compilation No. 131 (F2026C01012); F2024L00686 and F2026L01167 with both explanatory statements; Customs (Prohibited
  Imports) Regulations Compilation 147; Customs Act Compilation 194 (volume 3); Customs Regulation 2015 Compilation 38;
  Crimes (Amount of a Penalty Unit) Instrument 2026; Crimes Act Compilation 167; SIA Act Compilation 18; Advertising Code
  Compilation 1; and, for the "since" column, the Poisons Standard editions of March/June 2016, March/June 2018 and
  February/June 2024.
- **Victoria**: the authorised PDFs (Act v146, as at 30 September 2026; Regulations v024, as at 14 October 2026).
  **Queensland**: the official whole-Act HTML (version from 23 September 2025). **NSW Health**: both S4D pages, live.
- **tga.gov.au**: does not answer curl or the fetch tool from this machine, so every TGA page was read in the
  built-in browser (page text and page metadata; other TGA pages fetched from inside a tga.gov.au tab). The SAS
  Category C and Authorised Prescriber tables were read from the tables' own data (all rows). ARTG, TGA site search
  ("peptide", all 5 pages) and the infringement-notice and court-action lists were repeated.
- **abf.gov.au** (release by curl; traveller page in the browser, collapsed items read from the page DOM),
  **sportintegrity.gov.au** and **ahpra.gov.au** (browser), **poisonsinfo.nsw.gov.au** (curl).
- **Not opened live:** the two NSW Acts. legislation.nsw.gov.au returned HTTP 403 to the fetch tool, and the Internet
  Archive refused the fact-checker's request as suspected bot traffic (its headers confirm the 21 December 2025
  snapshot exists). Neither block was worked around. The NSW Act notes were checked only against the writer's saved
  copies of those snapshots: they match word for word, except the Part number below.

### Confirmed (no change needed)

- **Poisons Standard**: dated 28 September 2026, commences 1 October 2026, made under s 52D(2)(b); Reader's guide quotes
  (including the "(sic)" "it is has been approved"); ss 5, 7, 60, 64(4); every Appendix D clause 5 item number cited
  (3, 5, 6, 7, 16, 18–25, 31, 33, 36, 38, 39; items 26, 34, 35 are lonapegsomatropin, somapacitan, somatrogon); every
  Schedule 4 entry and # mark in section 4 (afamelanotide, melanotan II, semaglutide, sermorelin, tirzepatide without #);
  the not-named list (repeated with extra terms: somatorelin, LY3437943, bepecin, pentadecapeptide, "modified GRF").
  First editions naming BPC-157 (June 2024, commencing 1 June 2024), melanotan II (June 2018), TB-500 and thymosin
  beta-4 (June 2016): reproduced.
- **TG Act**: s 3 definitions (therapeutic goods, therapeutic use, medicine, supply incl. (d), advertise, sponsor);
  ss 9A, 19, 19B (all penalties, (5), (7)), 19D, 25(1)(c), 42AA, 42BAA, 42DL ((1)–(4), (10), (12), (13)–(14)),
  42DLB, 42E, 42EA, 42F, 42YK, 42YKA, 52A, 52D; every "possess" in the Act (only vaping-goods offences, Part 4A-2).
- **Penalty unit** $364 from 1 July 2026 (instrument dated 15 June 2026, registered 16 June); Crimes Act s 4AA quotes.
  All dollar conversions in section 3.3 recalculated and correct.
- **TG Regulations**: Sch 5 item 1 (all conditions as quoted), the immediate-family definition, reg 7 ((a), (c), (d),
  (e), (i)), regs 12A (incl. the Category A definition), 12B, 12BB, Sch 5 items 6, 6A, 9, Sch 5A item 3, Sch 8; no
  peptide name anywhere in the Regulations (the only "NAD" hit is nadolol). 2024 and 2026 amending instruments: dates,
  item numbers (8–12, 29–31) and every quoted ES sentence confirmed.
- **Customs**: reg 5G(1)–(3); Schedule 7A item 3 (growth hormones and GHRHs; item 4 is darbepoetin alfa); no peptide on
  this site named anywhere in those Regulations; Customs Act s 233BAA(4) (5 years or 1,000 PU; (4A)–(4B));
  Customs Regulation 2015 s 130 and Sch 7 Part 1 items 2, 7, 12, 13.
- **Victoria** s 4(1), s 36B(1)–(3) (10 PU) and no peptide hormone in the Act's text; Regulations reg 7 item 5.
  **Queensland** ss 11(1)(c), 34 (200 PU), 35 (500 PU). **NSW Health**: page dates (9 July and 7 July 2026), every
  quoted sentence, both lists (include TB-500, CJC-1295, ipamorelin, AOD-9604 and the others named; omit BPC-157,
  melanotan II, capromorelin, lonapegsomatropin, somapacitan, somatrogon), 12-month S4D prescriptions.
- **TGA pages**: for every TGA page registered in the YAML, the page date and the main quoted sentences of the note
  (2 to 12 per page, by exact-text search after normalising quotation marks) matched the live page, including the peptide
  hub (last updated 23 September 2026), how-we-regulate and practitioner pages (modified 23 September 2026), the
  Personal Importation Scheme (last updated 8 September 2026), SAS (3 December 2025), Authorised Prescriber
  (23 December 2025), access page (7 October 2026), compounding guidance (14 May, 8 September 2026), all media releases
  and safety alerts (dates and figures), the Federal Court release of 28 September 2026 (all 12 checked points), the
  2019 $10 million release, the 7 April 2025 undertaking (3 years), and the reused status-file items the timeline relies
  on (13 April, 7 May, 21 May — 27 notices, $101,412 —, 10 June, 19 June, 17 August 2026 and 24 January 2025).
- **Lists and searches**: SAS Category C 138/3/32 rows (70 distinct ingredients), last updated 23 January 2026;
  Authorised Prescriber lists 145/18 rows, last updated 15 September 2026; no peptide on this site on either. ARTG:
  every "no matching results" term reproduced, plus thymosin beta, ipamorelin, CJC-1295, hexarelin, GHRP, ibutamoren,
  capromorelin, vyleesi, egrifta, copper peptide (all none); every count reproduced (semaglutide 35, tirzepatide 18,
  somatropin 30, afamelanotide 1, LY3437943 146, MTP-131 2, AOD9604 1,180, MOTS-c 14, Semax 33, Selank 49). The BPC-157
  split search shows a listed product with "BPC" in its name (ARTG 530014, entered 12 August 2026) whose ingredients are
  13 single amino acids, not BPC-157; status-c already records this. Do not name it on the site.
- **ABF** release dated 12/08/2026 and traveller page (last updated 9 October 2026; hormones, personal-use and steroid
  items as quoted). **SIA**: peptides page, 13 May 2026 statement, retatrutide page (quotes, "Accessed: 6 May 2026").
  **Ahpra**: news of 16 September 2026, guidance ("First published September 2026"), case study (two patients had
  adverse reactions). **NSW Poisons Information Centre**: as described (no numbers recorded).
- **Ids and format**: the file parses with unique keys; every type is in `SOURCE_TYPES`; every key is kebab-case; every
  entry has type, authors, title, container, year, url, accessed and verified. No id duplicates one in
  `src/data/sources/*.yaml`, and none of these documents (URL check) is already registered there under another id. The
  only commerce-token hit is the flagged `au-tga-2026-07-peptide-promoters-notice` ("suppliers", title and URL).

### Changed, and why

1. **s 26A (ARTG table, section 3.2; `au-tg-act-artg-registration-listing`)**: the quotation "must list the medicine ...
   without inquiring into the correctness of the certificate" (s 26A(1A)) is about the **patent** certificate under
   s 26B(1), not the safety and eligibility certification. Replaced by s 26A(1) and (2) ("The applicant must certify
   that ...").
2. **NSW 2022 Act (`au-nsw-mptg-act-2022`; section 5 table)**: s 28 is in Part 2.4 (Non-wholesale supply), not Part 2.7;
   only s 44 is in Part 2.7 (which starts at s 40).
3. **2023 warnings (section 10; `au-tga-search-australia-legal-2026-10-24`)**: the draft said no 2023 peptide item existed
   besides the BPC-157 scheduling proposal. The same TGA search returns a 25 May 2023 safety alert on counterfeit
   semaglutide vials imported and sold online. Added, with three more items the search returns:
   `au-tga-2023-05-counterfeit-semaglutide-vials`, `au-tga-2024-09-counterfeit-ozempic-pens` (same id and URL as
   status-a.yaml, written in parallel; keep one when merging), `au-tga-2026-03-counterfeit-glp1-products`,
   `au-tga-2026-06-prescription-advertising-guidance` (names peptides among the services targeted). No 2023
   enforcement **action** about peptides was found.
4. **Retatrutide's schedule (section 4 table and note; UNRESOLVED 8)**: the draft said the TGA had not said whether
   retatrutide is prescription-only. A TGA page (last updated 11 March 2025, re-read live) says GLP-1 receptor
   agonists "are regulated as prescription-only medicines. This includes derivatives of semaglutide or dulaglutide such
   as retatrutide". Cited by reusing status-a's id `au-tga-advertising-glp1-prohibited` (not re-registered).
   UNRESOLVED 8 narrowed; UNRESOLVED 6 given the same pointer.
5. **Infringement amounts (section 3.3; `au-tga-2026-10-prescription-import-infringements`)**: "$3,960 each" applies to
   the individuals' notices; a company's notices were $19,800 each (60 PU).
6. **Authorised Prescriber list (section 7)**: "no peptide on it" was too broad: the list contains two radiolabelled
   somatostatin-analogue peptides (gallium-68 DOTA-octreotate, lutetium-177 dotatate). Now "no peptide on this site".
   In `au-tga-established-history-lists-2026-10-24`, the listed search terms in fact matched only nadolol; the note now
   says so.
7. **Misquotations fixed** in the YAML: `au-tga-2025-09-imported-glp1-products` ('GLP-1 peptide' in its own quotation
   marks); `au-tga-infringement-notices-list` (the page says "We may issue an infringement notice to a business or
   individual as an alternative to undertaking formal court action"); `au-sia-bpc-157` (the sentence "BPC-157 is a
   non-approved substance - prohibited at all times - and a specified substance on the ... 2025" list is not on the
   live page and was removed; the code name is "PL14736", and "PL-10" and "Body Protective Compound 157" are added);
   `au-ahpra-prescribing-unapproved-guidance` (inner quotation marks around 'anti-ageing' and 'faster muscle repair').
8. **Wording made exact**: `au-customs-prohibited-imports-regs` (permission "granted in writing by the Secretary or an
   authorised person"); `au-poisons-standard-2026-10` (Schedule 4 heading in full: "Prescription only medicines and
   prescription animal remedies"); `au-sia-2026-05-peptides-statement` (title as on the page, with the colon).
9. **Personal import (section 6.1, condition 2)**: "growth hormone or a GHRH without an ODC permit fails this condition"
   is now marked as our reading (a conditionally prohibited import read as "prohibited under the Customs Act").
10. **ABF release (`au-abf-2026-08-pied-charges`)**: the same joint release is on the allowlisted TGA site (dated
    13 August 2026); its URL is added to the note for the editor.
11. **NSW Act notes**: a fact-check line records that they were checked only against the writer's saved archive copies.

### Still UNRESOLVED (after the fact-check)

- Items 1 (BPC-157 in NSW), 2 (NSW text from 5 November 2026), 3 (WA, SA, Tasmania, ACT, NT not checked), 4 and 5
  (CJC-1295, tesamorelin, sermorelin under the GHRH entries), 7 (retatrutide in sport: SIA's page, re-read, still says
  "Retatrutide is not listed on the Prohibited List" under "World Anti-Doping Code Prohibited List 2026"), 9 (GHK-Cu),
  10 (state penalty unit values), 11 and 12 (our readings) stand as written.
- Item 6 (compounding exclusion scope) and item 8 (retatrutide's schedule) are narrowed, not closed (see 4 above).
- **The two NSW Acts were not opened live by the fact-checker** (blocked); a legal reviewer must read the official
  NSW text, including the Medicines, Poisons and Therapeutic Goods Regulation 2026 Appendix or Schedule 4D list.
- Not re-checked by the fact-checker (they belong to the status and extras files, which have their own checks): the
  2014 and 2015 scheduling documents, the 2018 melanotan II and 2024 BPC-157 decision notices, the ODC permit page,
  the help-service pages registered in extras.yaml, and WADA documents. The 18 June 2026 advertising guidance itself
  (as opposed to its release) was not opened.
- `au-tga-2026-07-peptide-promoters-notice` still contains the commerce token "suppliers" in its title and URL; do not
  link it.
