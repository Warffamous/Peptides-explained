# Content guide

This is the contract every page is written against. The validator (`npm run validate`) enforces
the mechanical parts; this document explains them and covers what a validator cannot check:
voice, honesty and the editorial guardrails.

---

## 1. The non-negotiables

The site **sells nothing, links to no seller, recommends no vendor**. Under Dutch law
(Geneesmiddelenwet art. 84–85, implementing Directive 2001/83/EC) public advertising for a
medicine without marketing authorisation is prohibited, and courts read "advertising" broadly:
even objective information can be advertising if it carries a promotional purpose. A commercial
link is what supplies that purpose. **The absence of commerce is what makes the content legal.**

Therefore, in content:

- No outbound link except to hosts on `config/link-allowlist.json` (regulators, law databases,
  PubMed/DOI, universities, anti-doping bodies, patient and harm-reduction organisations).
  Cite through `<Cite id>` and the source registry rather than inline links.
- No link text or call to action containing commerce words (buy, shop, order, vendor, supplier,
  discount, kopen, bestellen, korting …, see `config/commerce-tokens.json`). The build fails.
- Never name a seller, a "reputable lab", a brand of research chemical, or a website that sells.
  Trade names of **authorised** medicines (Ozempic, Wegovy, Mounjaro, Egrifta, Vyleesi) are
  allowed for identification only, always neutral, never persuasive.

### Never write

- Anything that recommends, endorses or encourages use of an unapproved compound.
- "Safe", "proven", "clinically validated", "effective" about anything lacking human clinical
  evidence. For authorised medicines say what the label and trials show, for which indication.
- Dosing recommendations, protocols, stacks, cycles, titration schedules, reconstitution maths.
  No mg/kg, no "typical dose", no "users report taking". (See §6 for how to report studied doses.)
- Testimonials, before/afters, user-experience narratives, "many people find…".
- Any superlative comparison between compounds ("the best", "most effective", "safest").
  Head-to-head trial results may be reported descriptively with numbers, design and population.
- Hype vocabulary: miracle, breakthrough, game-changer, revolutionary, wonder drug.

### Always write

- Every study claim with **species, n and design** attached ("in a study of 12 rats …",
  "a randomised, placebo-controlled trial in 1,961 adults with obesity …").
- Uncertainty explicitly, **in both directions**. Where evidence is genuinely promising, say so
  plainly. Where the regulatory lag imposes real costs, say so. This site is not anti-peptide.
- Regulatory status with the date it was accurate ("as of 20 October 2026").
- The distinction between **authorised**, **under regulatory review** and **unapproved**.
- The authorised molecule is not the grey-market vial: "semaglutide" bought online as a research
  chemical is an unauthorised product of unknown quality even though Ozempic is authorised.

### The FDA PCAC vote (July 2026): the canonical framing

This is the most-misreported fact in the field. Every time it comes up, in every locale, state all
of the following (verify each element against fda.gov before first use and cite the FDA source):

1. On 23 July 2026 the FDA's Pharmacy Compounding Advisory Committee (PCAC) voted 8–6 with one
   abstention to recommend BPC-157 for the 503A bulk drug substances list.
2. The committee's recommendations covered six peptides in total (BPC-157, KPV, TB-500, MOTS-c,
   Semax, epitalon) — confirm the exact list and per-peptide votes from FDA materials; if a primary
   source contradicts this list, follow the primary source and flag it in your research notes.
3. The vote is **advisory and non-binding**, and went **against FDA staff's own recommendation**.
4. Legal compounding remains prohibited until the FDA formally adopts the recommendation and
   completes rulemaking.
5. **None of these is an approved medicine.** A 503A listing, if it ever happens, would allow
   pharmacy compounding on prescription in the US. It is not a marketing authorisation, says
   nothing about efficacy, and changes nothing in the EU or the Netherlands.

---

## 2. Voice

- **First principles, cause and effect.** Explain the mechanism that makes a thing true, then the
  consequence. "Peptides are digested in the gut *because* the same enzymes that break down food
  protein cut peptide bonds; *so* most peptides are injected."
- **Plain, adult, unsentimental.** Neither cheerleading nor scaremongering. The reader may already
  have the vials. Respect them; make them safer.
- **Second person is fine** for safety and practical pages ("If you notice …"). Use neutral third
  person for evidence and mechanism.
- **Short paragraphs.** Two to four sentences. Frequent `###` subheadings in long sections.
- **Reading level.** Safety and legal pages: CEFR **B1** throughout (short sentences, common
  words, one idea per sentence, define every technical term on first use). Mechanism and evidence
  pages may reach B2–C1, but open with the B1 `summary`.
- **British English spelling** in `en` (authorised, haemorrhage, oestrogen), metric units,
  24-hour time, day-month-year dates in prose ("20 October 2026").
- Be specific about what you do **not** know. "No human pharmacokinetic data have been
  published" is more useful than "more research is needed".

---

## 3. Where things live

| What | Where | Who edits |
|---|---|---|
| Compound facts (sequence, grades, regulatory codes, study codes, products) | `src/data/compounds/<slug>.yaml` | editors |
| Compound prose (one per locale) | `src/content/compounds/<locale>/<slug>.mdx` | writers, translators |
| Page prose (one per locale) | `src/content/pages/<locale>/<route>.mdx` | writers, translators |
| Bibliography | `src/data/sources/<group>.yaml` (one file per topic; ids are global) | writers |
| Glossary | `src/i18n/<locale>/glossary/<group>.json` | writers, translators |
| Timeline events / regulatory tracker / corrections | `src/data/{timeline,tracker,corrections}.yaml` + text in `src/i18n/<locale>/{timeline,tracker,corrections}.json` | editors |
| Warning signs (single source of truth) | `src/i18n/<locale>/warning-signs.json` | safety editor |
| People (reviewers, editors) | `src/data/people.yaml` | editors |

Routes come from file paths: `src/content/pages/en/safety/sterile-technique.mdx` →
`/en/safety/sterile-technique/`. `index.mdx` is the section landing. Slugs are English in
every locale (the route key is shared, so hreflang can pair translations).

Run `npm run validate -- --only <part-of-your-path>` while writing.

---

## 4. Generic page frontmatter

```yaml
---
title: "Why peptides are injected, not swallowed"
nav_title: "Why not a pill"            # optional, short label for menus
description: "The gut treats a peptide drug like food protein. Here is the physical reason most peptides are injected, and how oral semaglutide works around it."   # 50–170 chars, meta description
summary:                               # REQUIRED. "In short" box. B1. 2–6 short sentences.
  - "Your gut breaks down protein into small pieces. Peptide drugs are made of the same building blocks, so the gut breaks them down too."
  - "Peptides are also too large and too water-loving to pass easily through the gut wall."
  - "That is why most peptide medicines are injected under the skin."
section: basics                        # home|start|basics|history|compounds|evidence|legal|safety|guides|reform|reference|about|news
order: 4                               # position within the section
template: reference                    # reference|safety|opinion|landing|index
reading_level: B2                      # B1 required for section safety and legal
last_reviewed: 2026-10-20
reviewed_by: pending-medical-review    # person id; use pending-legal-review for legal pages
related:                               # optional "read next" route keys (no locale prefix)
  - basics/pharmacokinetics
  - compounds/semaglutide
further_reading: []                    # optional source ids not cited inline
---
```

Opinion pages (only `/the-case-for-reform`) add `template: opinion` and
`opinion: { signed_by: editorial-board, published: 2026-10-20 }`.

Legal jurisdiction pages add `jurisdiction: NL` (or DE, BE, UK, EU, US).

**Never** put a `# ` heading in the body; the layout renders the title. Start body sections at
`## `.

---

## 5. Compound pages

Two files per compound: locale-independent **data** and localised **prose**.

### 5.1 Data — `src/data/compounds/<slug>.yaml`

```yaml
slug: bpc-157
tier: 1                       # 1 = full page in v1, 2 = stub until v1.1
status: complete              # complete | stub
category: experimental        # authorised | authorised-elsewhere | investigational | experimental | not-a-peptide
class: tissue-repair          # incretin|gh-axis|melanocortin|tissue-repair|immunomodulatory|mitochondrial|neuroactive|dermal|metabolic|longevity-claimed|non-peptide
body_systems: [musculoskeletal, gastrointestinal]
names:
  common: BPC-157
  full: Body Protection Compound-157
  inn: null                   # INN if one exists (e.g. semaglutide)
  other: [PL 14736, bepecin]
  brands: []                  # trade names of AUTHORISED products only
identifiers: { pubchem_cid: 9941957, chembl: CHEMBL..., cas: 137525-51-0, unii: ... }
molecular:
  formula: C62H98N16O22
  mass_da: 1419.5
  smiles: "…"                 # isomeric SMILES copied from PubChem (optional, used for the 2D structure figure)
  smiles_source: pubchem-bpc-157
sequence:
  display: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val"
  residues: [Gly, Glu, Pro, Pro, Pro, Gly, Lys, Pro, Ala, Asp, Asp, Ala, Gly, Leu, Val]
  n_terminus: H               # H | Ac | short label
  c_terminus: OH              # OH | NH2 | short label
  modifications: []           # [{ position: 20, label: "Lys: C20 fatty diacid via γGlu–2×OEG linker" }]
  bridges: []                 # [{ from: 2, to: 7, kind: lactam }]
  source: pubchem-bpc-157     # source id that supports the sequence
evidence:                     # REQUIRED — the four axes, see §7
  human_clinical: none
  preclinical_volume: extensive
  independence: single-group-dominant
  safety: uncharacterised
regulatory:                   # REQUIRED: at least EU, NL, US, WADA. Add DE, BE, UK where known.
  - { jurisdiction: EU, status: not-authorised, as_of: 2026-10-20, sources: [ema-medicines-search] }
  - { jurisdiction: WADA, status: prohibited, wada_section: S0, wada_scope: at-all-times, since: 2022-01-01, as_of: 2026-10-20, sources: [wada-2026-list] }
studies:                      # structured, locale-independent. ≥3 for complete Tier 1 pages.
  - id: chang-2011-tendon     # kebab-case, unique within the compound
    source: chang-2011        # source id
    year: 2011
    species: rat              # human|rat|mouse|rabbit|dog|pig|sheep|horse|primate|zebrafish|other-animal|in-vitro|in-silico|mixed|not-applicable
    n: 40                     # subjects actually studied; null if not reported/not applicable
    design: animal            # in-vitro|animal|case-report|case-series|open-label|phase-1|phase-2|phase-3|rct|pk|observational|post-marketing|systematic-review|meta-analysis|narrative-review|regulatory-assessment|analytical
    funding: academic         # academic|government|industry|mixed|undisclosed|not-applicable
    group: independent        # originating|independent|mixed|not-applicable (relative to the dominant group)
    blinded: null             # true|false|null (not reported)
    controlled: true
authorised_products: []       # REQUIRED for authorised / authorised-elsewhere, see §5.4
related: [tb-500]
last_reviewed: 2026-10-20
reviewed_by: pending-medical-review
```

### 5.2 Prose — `src/content/compounds/en/<slug>.mdx`

```mdx
---
slug: bpc-157
title: "BPC-157"
description: "BPC-157 is an experimental peptide studied almost entirely in animals, mostly by one research group. What it is, what the evidence shows, and what is unknown."
summary:                       # "The 30-second version". B1. 3–5 sentences. First thing on the page.
  - "BPC-157 is a lab-made chain of 15 amino acids. It is not an approved medicine anywhere."
  - "Most research is in rats and mice, and most of it comes from one group in Zagreb."
  - "No controlled human trial results have been published, so its effects and risks in people are unknown."
grade_rationale:               # one or two sentences per axis explaining the grade
  human_clinical: "…"
  preclinical_volume: "…"
  independence: "…"
  safety: "…"
mechanism:                     # the causal chain, 3–7 steps, in order. Drives the diagram.
  - kind: binding              # binding|signal|cellular|tissue|effect  (where it happens)
    level: hypothesis          # hypothesis|in-vitro|animal|human  (how well the link INTO this step is shown)
    title: "No receptor has been identified"
    detail: "…"
studies:                       # one entry per study id in the data file
  chang-2011-tendon:
    finding: "Tendon fibroblasts from rats grew out faster and survived oxidative stress better when BPC-157 was added."
    limitation: "Cells in a dish, from one species; no living animal, no clinical outcome."
regulatory_notes:              # optional one-line notes per jurisdiction shown in the table
  US: "Not FDA-approved. …"
indications: {}                # authorised products only: { ozempic: "Type 2 diabetes in adults" }
---

<Section id="what-it-is">
…chemistry, origin, how it's made…
</Section>

<Section id="mechanism">
…intro to the causal chain…

<Mechanism />

…what each inferential step rests on…
</Section>

<Section id="evidence">
<StudyTable />

…study-by-study discussion: species, n, design, funding, independence; what each did and did not test…
</Section>

<Section id="unknowns">
- …explicit list: long-term safety, oncological signal, human dose–response, interactions, human PK…
</Section>

<Section id="regulatory">
<RegulatoryTable />

…prose per jurisdiction, dated, with the PCAC framing where relevant…
</Section>

<Section id="risks">
…reported adverse events; theoretical risks and WHY they are theorised (the mechanism)…
</Section>

<Section id="harm-reduction">
…If someone is going to do this anyway: hygiene, monitoring, warning signs, interactions, when to stop. No protocol, no mg.
</Section>
```

Rules:

- The **section order is fixed** and validated. Section 1 (30-second version) is the `summary`;
  section 9 (Sources) is generated from your `<Cite>`s. Do not write them.
- Use `###` for sub-headings inside a section. Never `#` or `##` in compound bodies.
- Section headings are rendered from the UI strings; do not write them.
- `<Mechanism />`, `<StudyTable />`, `<RegulatoryTable />` read the compound from the page —
  no props needed.
- Tier 2 stubs need only `what-it-is`, `evidence`, `regulatory`, `risks` (others optional),
  a full data file and summary. Stubs still need honest evidence grades.

### 5.3 The harm-reduction section

Title rendered by the layout: *"If someone is going to do this anyway"*. Content allowed:
why a physician conversation is the safest route (link `/en/talking-to-your-doctor/`), product
risk (link `/en/safety/product-risk/`), sterile technique (link `/en/safety/sterile-technique/`),
which **bloodwork or checks** are mechanistically relevant **and why**, compound-specific warning
signs and when to stop, known or plausible interactions, who should not use it at all
(pregnancy, cancer history, etc. — with the mechanistic reason). Close with `<WarningSigns />`.
Content **not** allowed: amounts, frequencies, durations, "start low", reconstitution volumes,
sourcing advice, cycling, stacking.

### 5.4 Authorised medicines (semaglutide, tirzepatide; tesamorelin and bremelanotide outside the EU)

These get a visibly different treatment. This is a core editorial contribution of the site.

- Data: `category: authorised` (EU) or `authorised-elsewhere` (e.g. FDA only), and
  `authorised_products`:

```yaml
authorised_products:
  - id: wegovy
    name: Wegovy
    holder: Novo Nordisk A/S
    jurisdiction: EU
    authorised: 2022-01-06
    route: subcutaneous
    label_url: https://www.ema.europa.eu/en/medicines/human/EPAR/wegovy   # EMA EPAR / CBG / FDA label — never a seller
    label_source: ema-epar-wegovy
```

- Prose: put `<AuthorisedProducts />` near the top of `what-it-is`. It renders the
  "Authorised medicine" badge, the prescription-route box and official label links.
- The harm-reduction section for authorised medicines focuses on: the legal prescription route,
  why grey-market "research" versions are a different (unauthorised) product, counterfeit pens,
  and label-based safety (contraindications, interactions, warning signs).

---

## 6. Reporting doses that were studied

The literature contains doses. Reporting what a study did is descriptive science; presenting it
as guidance is not. Rules:

- Only inside a study description, with species, route and design attached, framed as study
  design: "Rats received <Q>10 µg/kg</Q> intraperitoneally once daily for 14 days."
- Always wrap the quantity in `<Q>…</Q>` (renders as a measured quantity, isolated for RTL).
- Never convert an animal dose to a human dose, never mention a human-equivalent dose figure,
  never give a range "people use". The translation-gap page explains why animal doses do not
  scale, in principle, without numbers a reader could act on.
- For authorised medicines you may state the authorised dose range **as written in the SmPC**,
  attributed to the SmPC, with "your prescriber decides the dose".

---

## 7. Evidence grading (summary — full rubric at `/evidence/evidence-grading`)

Four independent axes. Never collapse into one score, never add them up.

| Axis | Values | Assign by |
|---|---|---|
| `human_clinical` | none · case-reports · phase-1 · phase-2 · phase-3 · authorised | the **highest completed and published** human evidence. Registered-but-unpublished trials do not count. "authorised" = a regulator has granted marketing authorisation somewhere for some indication. |
| `preclinical_volume` | minimal (<10 published animal/in-vitro studies) · moderate (10–50) · extensive (>50) | count of primary preclinical publications (not reviews) |
| `independence` | single-group-dominant (>~70% of primary studies from one group) · few-groups (2–4 groups account for most) · broadly-replicated (many independent groups, key findings replicated) | authorship and affiliations of primary studies |
| `safety` | uncharacterised (no systematic human safety data) · partial (some human exposure data, short-term or small) · well-characterised (large trials plus post-marketing surveillance) | human data only |

## 8. Inline components

| Component | Use | Example |
|---|---|---|
| `<Cite id="src-id" />` | Reference marker. Multiple: `id="a,b"`. Every factual claim needs one. | `…in 1977.<Cite id="nobel-1977" />` |
| `<Claim level="animal">…</Claim>` | Wraps an assertion and badges its evidence level. Use on every efficacy or mechanism claim. Levels: `hypothesis`, `in-vitro`, `animal`, `human-limited` (case reports, small uncontrolled), `human-controlled` (controlled trials), `established` (authorised use / consistent phase III). | `<Claim level="animal">BPC-157 accelerated tendon healing in rats</Claim>` |
| `<Q>…</Q>` | A measured quantity (dose-as-studied, concentration, half-life, mass, n). Monospace, bidi-isolated. | `<Q>t½ ≈ 165 h</Q>` |
| `<Seq>…</Seq>` | An amino-acid sequence inline. Always LTR. | `<Seq>Lys-Pro-Val</Seq>` |
| `<Term id="glossary-id">…</Term>` | Force a glossary link where auto-linking would miss (auto-linking handles the first plain-text use of every glossary term). | `<Term id="half-life">t½</Term>` |

## 9. Block components

| Component | Use |
|---|---|
| `<Callout type="note\|tip\|warning\|stop\|legal\|uncertain" title="…">…</Callout>` | `stop` is **reserved for stop-now safety content** (seek care now). `uncertain` flags a genuinely open question. `legal` for jurisdiction-specific notes. |
| `<Diagram id="kebab-id" caption="…">full text equivalent</Diagram>` | A diagram. The children are the **equivalent** of the diagram in words (a list or table that conveys the same information), not a label. Designers draw the SVG later from your description; until then the text renders as the figure. |
| `<Checklist>` + markdown list + `</Checklist>` | A scannable checklist (what to bring to your doctor, aseptic steps). |
| `<Faq>` `<FaqItem q="Question?">answer</FaqItem>` `</Faq>` | Real question-and-answer sections only. Emits FAQPage structured data. |
| `<WarningSigns />` | The canonical stop-now list. `<WarningSigns only="injection" />` for a subset: `general`, `injection`, `allergic`, `cardiovascular`, `metabolic`, `neurological`. |
| `<EvidenceGrade compound="bpc-157" />` | The four-axis grade card for a compound, usable outside its own page. |
| `<PageList section="safety" />` | Auto-generated list of pages in a section (for index pages). |
| `<CompoundIndex />` | Compound cards (for `/compounds`). |
| `<Timeline />`, `<GradeRubric />`, `<GradeMatrix />`, `<CorrectionsLog />`, `<ChangeTracker />`, `<NewsList />`, `<GlossaryIndex />`, `<SourcesIndex />`, `<JurisdictionCard code="NL" />` | Page-specific widgets driven by data. Place where the page needs them. |

Markdown tables are fine for small comparisons. Use them instead of inventing components.

## 10. Links

- Internal: absolute with locale — `[sterile technique](/en/safety/sterile-technique/)`.
  Link text must say where it goes. Never "click here".
- External: avoid in prose. Put the source in the registry and `<Cite>` it. If a link is
  genuinely needed (e.g. to a reporting form), it must be on the allowlist.
- Never put commerce words in link text (see §1).

## 11. Sources — `src/data/sources/<group>.yaml`

```yaml
sikiric-2018-review:            # id: firstauthor-year-keyword, kebab-case, globally unique
  type: review                  # article|review|meta-analysis|trial|preprint|book|chapter|regulator|law|guideline|label|registry|dataset|report|web
  authors: "Sikiric P, Seiwerth S, Rucman R, et al."
  title: "Stable gastric pentadecapeptide BPC 157: novel therapy in gastrointestinal tract"
  container: "Current Pharmaceutical Design"
  year: 2011
  doi: 10.2174/138161211796196954
  pmid: "21548867"
  verified: pubmed              # pubmed | doi | url | registry — HOW you confirmed it exists and says what you cite it for
ema-epar-wegovy:
  type: label
  authors: "European Medicines Agency"
  title: "Wegovy: EPAR – Product information"
  year: 2025
  url: https://www.ema.europa.eu/en/medicines/human/EPAR/wegovy
  accessed: 2026-10-20
  verified: url
```

**Verification is mandatory.** Every scholarly source must be looked up (PubMed tools, or by
resolving the DOI) and the metadata copied from the record — never from memory. A fabricated
or mismatched DOI is the most damaging error this site can make. Every regulator/law URL must
have been fetched and must say what you cite it for. If you cannot verify a source, do not use
the claim.

## 12. Glossary — `src/i18n/<locale>/glossary/<group>.json`

```json
{
  "half-life": {
    "term": "half-life",
    "aliases": ["half-lives", "elimination half-life"],
    "definition": "The time it takes for the amount of a drug in the blood to fall by half.",
    "category": "pharmacology",
    "see_also": ["pharmacokinetics"]
  }
}
```

Add every technical term you use that a B1 reader would not know. The first plain-text use on
each page is auto-linked. Check other glossary files first; do not duplicate ids.

## 13. Reviews, dates, translation

- `last_reviewed: 2026-10-20` and `reviewed_by: pending-medical-review` (or
  `pending-legal-review` for legal pages) until a named reviewer signs off. The site shows an
  honest "review pending" notice; it never pretends a review happened.
- Non-English files add `translation: { method: translated, from: en, review: pending }`
  (or `method: adapted` for jurisdiction-rewritten legal content, `native` if written directly
  in that language).
