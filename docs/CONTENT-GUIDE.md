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
- **The emergency number, by locale** (owner's decision, 20 October 2026). The English site is read
  in many countries, so it **never prints 112** (or any other emergency number): write "call your
  local emergency number" ("If it is severe, call your local emergency number."). Only the Dutch
  pages say 112 ("Bel 112"). Components never hard-code a number: they use the locale's
  `common.emergency.*` strings (`call`, `now`, `ifSevere`, `jurisdiction`), and
  `src/data/jurisdictions.yaml` keeps each country's number as data for the Dutch strings only. The
  validator fails an English content or i18n file that prints 112 as a phone number (112 near a
  calling word such as call, phone, dial, emergency or ambulance, or any 112 in stop-now content);
  other numbers such as "week 112", "1,112", "volume 112" or a count or measurement ("112 participants",
  "112 mg/dL") are left alone.

### The FDA PCAC vote (July 2026): the canonical framing

This is the most-misreported fact in the field. Every time it comes up, in every locale, state all
of the following (verify each element against fda.gov before first use and cite the FDA source):

1. On 23 July 2026 the FDA's Pharmacy Compounding Advisory Committee (PCAC) voted 8–6 with one
   abstention to recommend BPC-157 for the 503A bulk drug substances list.
2. The committee considered **seven** peptides (the six below plus emideltide, also called DSIP)
   and recommended **six** (BPC-157, KPV, TB-500, MOTS-c, Semax, epitalon). Confirm per-peptide
   votes from FDA materials; if a primary source contradicts this, follow the primary source and
   flag it in your research notes.
   *Status of the sources (checked 20 October 2026):* FDA documents (meeting page, briefing
   documents, voting questions) support "considered seven". The vote counts and the six-of-seven
   outcome are not yet on any fda.gov page (no minutes posted). Until they are, cite the FDA
   meeting page and voting questions, and write the counts as "as reported from the public
   meeting". Each substance had separate votes for its salt forms (e.g. free base and acetate).
3. The vote is **advisory and non-binding**, and went **against FDA staff's own recommendation**.
4. Legal compounding remains prohibited until the FDA formally adopts the recommendation and
   completes rulemaking.
5. **None of these is an approved medicine.** A 503A listing, if it ever happens, would allow
   pharmacy compounding on prescription in the US. It is not a marketing authorisation, says
   nothing about efficacy, and changes nothing in the EU or the Netherlands.

---

## 1a. The purpose: inform, do not discourage (owner, 22 October 2026)

The site exists to inform people as well as possible, including people who have already decided to
use something. It does not try to talk anyone out of a decision; it makes the decision better
informed and the use safer. Harm reduction is the core, not an afterthought.

- **Never assume where a product came from.** Write "if your product did not come from a pharmacy"
  or "a product bought outside the legal supply chain", not "if you bought it on the grey market".
  Never imply the reader is doing something shameful.
- **Give practical, sourced safety information** for people who already have a product: what to
  check on the vial and label, what a certificate of analysis does and does not show, storage,
  sterile preparation, clean injecting, which checks and blood tests matter and why, warning signs
  and when to stop. Use the shared `<ProductCheck />` checklist where it fits (§9).
- **No lecturing, no scare words, no repeated "don't do it".** State risks plainly, once, with the
  reason. A doctor is presented as an ally for monitoring and help, not as a gatekeeper.
- **The legal line stays** (§1): no amounts, schedules, protocols, "start low", reconstitution
  maths, stacks or cycles, and no help finding or choosing a seller. Warning signs of a dangerous
  product, practice or actor are allowed (the brief asks for them) when they are negative-only,
  sourced to regulators, and the page says plainly that no sign proves a product is good. Never
  a list of positive signs, a 'how to find a reliable source' or anything that ranks sellers.
  That line is what keeps practical safety information legal (Geneesmiddelenwet art. 84–85).

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
| Images: files, licence registry, page heroes, infographic plates | `src/assets/media/`, `src/data/media.yaml`, `src/data/heroes.yaml`, `src/data/infographics/<id>.yaml`; alt text and captions in `src/i18n/<locale>/media.json`, plate text in `src/i18n/<locale>/infographics.json` (see `docs/MEDIA-GUIDE.md`) | writers, editors |

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
summary:                               # REQUIRED. "In short" box, the beginner entry point. 2–5 items, ≤18 words each (§4.1).
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

### 4.1 The summary is the beginner layer

The `summary` is the first text on every page, in a box set larger than the body ("In short";
"The 30-second version" on compound pages). Many readers stop there. **Write it for a reader with
low health literacy: everyday words, short sentences, the most important fact first.**

- **One idea per item, one or two short sentences, at most 18 words.** The validator warns above
  18 words and **fails above 30**. Aim for 3–5 items; it warns above 5.
- **The most important fact first.** On a compound page that is usually "what it is and whether it
  is an approved medicine".
- **Everyday words.** "Feel sick" rather than "nausea", "lab" rather than "in vitro", "three in four"
  rather than "74.6%". If a technical word is unavoidable, say what it does ("a switch called
  NF-κB"). Names are fine: the compound's own names and trade names do not count as hard words.
- **Reading ease.** English items should score 60 or more on the Flesch Reading Ease scale
  (`src/lib/readability.ts`; the validator warns below 60). Other locales get the word limits only.
- **No new claims.** The summary condenses what the page says and cites below; never add a fact,
  a number or a nuance that the body does not support. Shorter must not mean stronger: keep
  "in mice", "in some groups", "only advice".
- The same limits apply to every **caption**: `<Diagram caption>`, explainer step captions
  (`src/i18n/<locale>/explainers.json`) and image captions (`src/i18n/<locale>/media.json`).
- The box also shows **how long the whole page takes to read**. It is computed from the body at
  build time (200 words a minute); do not write it.

Before a page goes out: `npm run validate -- --only <your-file>` and fix every summary warning you
can without losing meaning. `config/readability-waivers.json` holds time-boxed waivers for files
another workstream had in flight when the 30-word limit arrived; never add one for your own text.

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
summary:                       # "The 30-second version". 3–5 items, ≤18 words each (§4.1). Right after the glance strip.
  - "BPC-157 is a lab-made chain of 15 amino acids. It is not an approved medicine anywhere."
  - "Most research is in rats and mice, and most of it comes from one group in Zagreb."
  - "No controlled human trial results have been published, so its effects and risks in people are unknown."
lede: "…"                      # optional: one sentence under the title (22–24 px), ≤25 words, B1 (§9.1)
glance:
  main_risk: "…"               # "Biggest risk" tile: ≤12 words, B1, condensed from YOUR risks section (§5.2 rules)
  stop_signs:                  # optional: the "Stop and get help" strip after At a glance (§9.1). Exactly 3.
    - { icon: sign-belly-pain, text: "Severe belly pain, often spreading to your back", sources: [ema-epar-wegovy] }
  facts:                       # optional: up to 4 label/value rows for the fact sheet beside the title (§9.1)
    - { label: "How it is taken", value: "Injection under the skin, or a tablet", sources: [ema-epar-ozempic] }
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

**The beginner layer comes first.** Every compound page opens in this order: title and status
badge → **At a glance** → **The 30-second version** (`summary`) → review line → page photo →
evidence profile, sequence and technical details (INN, other names, formula, mass) → the sections.
On wide screens the photo and the review line sit beside and under the title instead. The
technical facts deliberately come after the plain answers.

*At a glance* is four tiles. Three are written for you from the data file, so every compound with
the same facts gets the same words, in every language:

| Tile | Comes from | Example answers |
|---|---|---|
| Is it an approved medicine? | `category` (for `not-a-peptide`: the EU and other regulatory rows) | "Yes. Approved in the EU. Only with a doctor's prescription." · "No. Not approved as a medicine anywhere." |
| Has it been tested in people? | `evidence.human_clinical` | none → "No" · case-reports → "Very little" · phase-1 → "A little" · phase-2 → "Some" · phase-3 / authorised → "Yes, large trials" |
| Is it allowed in sport? | the `WADA` regulatory row | prohibited → "No. Banned in sport at all times" + the section (S0, S2 …) · not-listed → "Not banned" · anything else → "see the status table" (never a guess) |
| What is the biggest risk? | `glance.main_risk` in the MDX frontmatter | without it, the tile links to the warning-signs page |

So keep the data honest and the tiles stay honest. Change the words only in
`src/i18n/<locale>/beginner.json`, never per page.

`glance.main_risk` rules: **at most 12 words** (the schema fails above 12), B1, condensed from this
page's own `risks` section with no new claim, the most important risk for most readers. Prefer the
risk a reader can recognise or act on. Examples: "Many feel sick at first. Gallstones and an
inflamed pancreas are rarer." (semaglutide) · "No reliable checks: vials may contain germs or the
wrong substance." (KPV). The validator warns when a complete Tier 1 page has none. Never use alarm
words or stop-now advice here: stop-now content belongs in `<WarningSigns />`.

### 5.3 The harm-reduction section

Title rendered by the layout: *"If someone is going to do this anyway"*. Content allowed:
why a physician conversation is the safest route (link `/en/talking-to-your-doctor/`), product
risk (link `/en/safety/product-risk/`), sterile technique (link `/en/safety/sterile-technique/`),
which **bloodwork or checks** are mechanistically relevant **and why**, compound-specific warning
signs and when to stop, known or plausible interactions, who should not use it at all
(pregnancy, cancer history, etc. — with the mechanistic reason). Put `<ProductCheck />` near the top,
right after the section lead and before the folds, with a compound-specific `extra` line only where
the page's own sources support one (§9). Close with `<WarningSigns />`.
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
| `<Cite id="src-id" />` | Reference marker. Multiple: `id="a,b"`. Every factual claim needs one. On its own line (a blank line before and after), it cites the block above it (a list, a callout) and shows as a small "Sources 3, 46, 7" line under that block. | `…in 1977.<Cite id="nobel-1977" />` |
| `<Claim level="animal">…</Claim>` | Wraps an assertion and badges its evidence level. Use on every efficacy or mechanism claim. Levels: `hypothesis`, `in-vitro`, `animal`, `human-limited` (case reports, small uncontrolled), `human-controlled` (controlled trials), `established` (authorised use / consistent phase III). | `<Claim level="animal">BPC-157 accelerated tendon healing in rats</Claim>` |
| `<Q>…</Q>` | A measured quantity (dose-as-studied, concentration, half-life, mass, n). Monospace, bidi-isolated. | `<Q>t½ ≈ 165 h</Q>` |
| `<Seq>…</Seq>` | An amino-acid sequence inline. Always LTR. | `<Seq>Lys-Pro-Val</Seq>` |
| `<Term id="glossary-id">…</Term>` | Force a glossary link where auto-linking would miss (auto-linking handles the first plain-text use of every glossary term). | `<Term id="half-life">t½</Term>` |

## 9. Block components

| Component | Use |
|---|---|
| `<Callout type="note\|tip\|warning\|stop\|legal\|uncertain" title="…">…</Callout>` | `stop` is **reserved for stop-now safety content** (seek care now). `uncertain` flags a genuinely open question. `legal` for jurisdiction-specific notes. |
| `<Diagram id="kebab-id" caption="…">full text equivalent</Diagram>` | A diagram. The children are the **equivalent** of the diagram in words (a list or table that conveys the same information), not a label. Designers draw the SVG later from your description; until then the text renders as the figure. |
| `<Explainer id="kebab-id" />` | A 10–15 second animated explainer (4–6 steps) of a mechanism or an interaction. Self-closing, `id` only: timing, the evidence level of each step and the **sources** live in `src/data/explainers.yaml`; the title, one B1 caption per step (≤ 18 words), the summary and any words shown on the picture live in `src/i18n/<locale>/explainers.json`; the artwork is `src/components/explainers/<id>.astro`. **No text inside the SVG** — not even numbers — so every word translates. Links are drawn by evidence: solid = shown in people, long dashes = animals or cells, short dashes = hypothesis (demonstrated links are drawn cyan, a hypothesis amber). The step list is always visible as the text equivalent, and the "Based on" sources are numbered with the page's citations. Lead in with one sentence saying what the animation shows. How to add one: `docs/EXPLAINERS.md`. |
| `<Photo id="lab-mouse" />` | A registered image (photo, illustration or figure) with its alt text, caption and credit line, responsive and lazy-loaded. Register it first (`npm run media:commons` / `media:generate`, `src/data/media.yaml`), then write alt text and an optional caption (≤ 30 words, sourced via the registry `sources:`) in `src/i18n/<locale>/media.json`. Rules: `docs/MEDIA-GUIDE.md`. |
| `<Infographic id="glp1-body-map" />` | A labelled atlas plate: text-free artwork with numbered markers and a key in real text. Markers and sources in `src/data/infographics/<id>.yaml`; title, one label per marker and a full text equivalent in `src/i18n/<locale>/infographics.json`. AI art must be reviewed (`ai.review: ok`) before the page ships. |
| `<MediaCredits />` | The full image credits (what each image shows, author, licence, source, AI model and review status). Already on `/sources/`. |
| `<OrganCards id="tirzepatide" />` | Organ-by-organ cards (owner, 22 October 2026: a mechanism figure that keeps WHERE a medicine acts apart from WHAT happens there; the all-organs-in-one receptor animations were too busy). Static, no motion. First "How it works in a cell": the cell surface with the medicine's receptor types side by side, the molecule docking in each, the cAMP signal inside and "the cell responds"; every part has its word, and receptor types differ by **shape and word** (GLP-1 receptor = round cup, GIP receptor = square cup, glucagon receptor = V), never colour alone; numbered steps beside it are the text equivalent. Then one card per organ or tissue (3 columns on wide screens, 1 on phones): the organ picture (a crop of registered text-free art, set once for every page in `src/data/organ-cards/_organs.yaml`), a small cell close-up with the receptors on that cell and their words, **one** plain effect line (B1, ≤ 18 words) and its evidence level as a word plus the site's line style (solid = shown in people, long dashes = animals or cells, short amber dashes = an idea, short grey dashes = not known). A card may add one note line with its own level ("Shown in animals: which brain cells it reaches."). Receptors, organs, cells, levels and sources in `src/data/organ-cards/<id>.yaml`; every word in `src/i18n/<locale>/organ-cards.json`. A medicine that is not approved says so in the figure head (`approved: false`, with `status_sources`). Compound pages only, self-closing, `id` only; the marks on each line are numbered from the page's own source list, so **every source a figure uses must also be cited in the page text** (the validator fails otherwise, and checks the words, their plainness and the placement). Never a dose. Placed on `compounds/semaglutide` (a fold in the mechanism section), `compounds/tirzepatide` and `compounds/retatrutide` (the mechanism figure). |
| Page hero (no component) | One line in `src/data/heroes.yaml`: `compounds/semaglutide: gila-monster`. Rendered after the summary on phones and beside the title on wide screens. Every page should have one. |
| `<Checklist>` + markdown list + `</Checklist>` | A scannable checklist (what to bring to your doctor, aseptic steps). |
| `<Faq>` `<FaqItem q="Question?">answer</FaqItem>` `</Faq>` | Real question-and-answer sections only. Emits FAQPage structured data. |
| `<WarningSigns />` | The canonical stop-now list. `<WarningSigns only="injection" />` for a subset: `general`, `injection`, `allergic`, `cardiovascular`, `metabolic`, `neurological`. |
| `<ProductCheck />` | "If your product did not come from a pharmacy: check before you use it" (§1a): the shared, sourced checklist for people who already have a product. Nine checks, each a pictogram plus words: the seal, the label (name, amount, batch number, expiry), how it looks, what a lab report does not prove, storage, clean steps with a new needle and syringe, keeping the vial and label, a doctor for checks, and the warning signs with the locale's emergency line. Negative signs only; the intro says no check shows a product is good. Order, pictograms, sources and links in `src/data/product-check.yaml`, words in `src/i18n/<locale>/product-check.json`; its sources are numbered with the page's citations. Optional compound-specific line: `<ProductCheck extra="Check which form the label names. …" extraSources="id,id" />` (sources required and taken from the page's own sources; `extraAfter="certificate"` moves it, default after the label check). Self-closing, once per page, never inside an `<InDetail>` fold (the validator checks all three). Place it near the top of a compound page's harm-reduction section, and on safety pages where use is discussed. No amounts, volumes, schedules or mixing sums in an extra line, and nothing about where to get a product or how to judge a seller. |
| `<EvidenceGrade compound="bpc-157" />` | The four-axis grade card for a compound, usable outside its own page. |
| `<PageList section="safety" />` | Auto-generated list of pages in a section (for index pages). |
| `<CompoundIndex />` | Compound cards (for `/compounds`). |
| `<Timeline />`, `<GradeRubric />`, `<GradeMatrix />`, `<CorrectionsLog />`, `<ChangeTracker />`, `<NewsList />`, `<GlossaryIndex />`, `<SourcesIndex />`, `<JurisdictionCard code="NL" />` | Page-specific widgets driven by data. Place where the page needs them. |

Markdown tables are fine for small comparisons. Use them instead of inventing components.

**Where blocks land.** The site has one design ("Mechanism"; docs/design/DESIGN-DIRECTIONS-2026-10.md,
"Decision"), with one left edge: body text, headings, leads and most figures sit in the reading
column; tables, comparison figures, rows of key numbers, explainers, the mechanism stage, plates
and study and regulatory tables take the full width on wide screens (also inside an "In detail"
fold). Authors do not choose widths; write the component and the layout places it.

### 9.1 Less text, more visuals

The rules and the page blueprint are in `docs/design/DESIGN-DIRECTIONS-2026-10.md` §3.2–3.3. The
first page built this way is semaglutide; use it as the worked example. In short: **every section
opens with a question and a one-sentence answer, then ONE figure, at most about 80 words of prose,
and the existing depth folded under "In detail"**. Nothing is deleted: every sentence, citation,
claim badge, study, table and source stays on the page, inside a fold if it is depth.

| Component | Use |
|---|---|
| `<Lead question="Does it work?">One-sentence answer.</Lead>` | The section opener, first thing inside a `<Section>`. The fixed section title stays (the layout renders it); the question is the reader's, the answer condenses what the section shows and cites below it. B1, at most 18 words (the validator warns above 18 and checks reading ease). No new claims. |
| `<InDetail title="Who paid for the evidence">…markdown…</InDetail>` | The fold for depth. A native `<details>`: it opens by click, keyboard, find-in-page and links to anything inside it; it prints open; the page gets an "Open all details" control (with a no-JavaScript fallback) as soon as one fold exists. Title: what the fold holds, in plain words, often the old `###` heading. A fold may contain `###` subheadings, tables, explainers and plates. **Never** put stop-now content (`<Callout type="stop">`, `<WarningSigns />`) in a fold, and never nest folds (the validator fails both). Prefer a few folds per section over many: a run of folds reads as one list. |
| `<KeyNumber title="Weight fell by about 15% on average" value="14.9%" label="average weight lost in 68 weeks, against 2.4% with placebo" who="STEP 1: 1,961 adults with obesity or overweight, without diabetes" source="wilding-2021-step-1" level="established" />` | One of the two to four numbers that matter in a section. `title` is the takeaway, `value` the quantity exactly as the source gives it (mono), `label` one plain line saying what it counts (natural frequencies help: "6.5 in 100"), `who` the trial and who took part (shown in the data card; keep the population qualifiers, never generalise beyond them) — or, for a number that is not about people (papers, studies, records), `counted` saying what was counted, `source` is numbered with the page's citations, `level` is a claim level. Two or more in a row are laid out side by side automatically. Never a dose. |
| `<Compare title="…takeaway…" detail="…">` + a markdown table + `</Compare>` | A comparison table as a figure: option names as column heads, one plain question per row, and every answer cell starting with `<Verdict is="yes\|no\|unknown" />` (the word plus a glyph), then a short reason with its `<Cite>`. No colour coding. Below 38 rem each row becomes a card. |
| `<IconArray title="…" detail="…" a="Semaglutide" b="Placebo" source="…" level="…" rows={[{ label: "Feeling sick (nausea)", a: 43.9, b: 16.1 }]} />` | "x in 100" side by side for medicine and placebo, one 10 × 10 grid per group, the count written beside it ("44 in 100"). Values are rounded to whole people; keep the exact percentages in the text (in a fold). |
| `<TimeStrip title="…" detail="…" min={2017} max={2027} step={2} axis="Year" source="…" checked="2026-10-20" rows={[{ label: "…", spans: [{ from: "2018-02-08", to: "2026-10-20", text: "since 8 February 2018" }] }]} />` | A duration or timeline strip: one row per thing, spans as bars, `unknown: true` for a labelled hatched "Not known" block (never a gap). Every bar has its words on the line under it. Time axes mirror in RTL. |

Figures (`Compare`, `IconArray`, `TimeStrip`) carry a takeaway `title` (one sentence that states the
finding, B1) and a data card with the sources; key numbers carry the same card. The validator checks
required props, plain-language titles, labels and answers, and that every `source` id exists.

**Page-level parts written in the frontmatter** (compound pages):

- `lede`: one sentence under the title: what it is and the one thing to know. At most 25 words.
- `glance.stop_signs`: exactly three signs, each at most 8 words, B1, each with a pictogram (`sign-belly-pain`, `sign-low-sugar`, `sign-allergic`, `sign-vision`; the word always carries the meaning) and its `sources`. Condense them from this page's own stop-now list and the label; no new advice. The strip adds the locale's emergency line (English: "If it is severe, call your local emergency number."; Dutch: "Is het ernstig? Bel 112."; see §1), a link to the full stop-now list (give the stop callout `id="stop-now"`; the validator checks it) and to the warning-signs page. It is rendered directly after At a glance and is never folded.
- `glance.facts`: up to four label/value rows for the fact sheet beside the title (label ≤ 4 words, value ≤ 10 words, sources required): how it is taken, how often, how long it lasts. Class, status in the EU and testing in people come from the data file. Label facts only, never a dose.

With at least one fold on the page, the summary box says how long the short version takes and how
long everything takes, and the source list is folded too (its numbers still link both ways).

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
