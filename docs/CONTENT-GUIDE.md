# Content guide

This is the contract every page is written against. The validator (`npm run validate`) enforces
the mechanical parts; this document explains them and covers what a validator cannot check:
voice, honesty and the editorial guardrails.

---

## 1. The non-negotiables

The site **sells nothing, links to no seller, recommends no seller**. It is **published from the
Netherlands, so Dutch law is the publisher's law**: it governs what the site may say, wherever the
reader lives. Under the Geneesmiddelenwet (art. 84–85, implementing Directive 2001/83/EC) public
advertising for a medicine without marketing authorisation is prohibited, and courts read
"advertising" broadly: even objective information can be advertising if it carries a promotional
purpose. A commercial link is what supplies that purpose. **The absence of commerce is what makes
the content legal.** The readers' countries (§1b) have similar rules on advertising medicines. Health
Canada's advertising guidance (2023), for example, says that a message about an unauthorised health
product, even in an educational setting, may be considered promotional if it does not caution that
Health Canada has not authorised the product and that its safety and effectiveness are still under
investigation, or if it suggests the product is available through the Special Access Program (source
`ca-hc-advertising-distinction-2023`; research/refocus/canada-legal.md §11.3; a question for the legal
reviewer). The pages say this once, in the publisher line on the about pages (§1b), and never frame
Dutch law as the reader's law.

Therefore, in content:

- No outbound link except to hosts on `config/link-allowlist.json` (regulators, law databases,
  PubMed/DOI, universities, anti-doping bodies, patient and harm-reduction organisations).
  Cite through `<Cite id>` and the source registry rather than inline links.
- No link text, call to action, **page title, heading, section question, fold title, figure title,
  diagram caption or label** containing commerce words (buy, shop, order, vendor, supplier, price,
  deal, for sale, discount, kopen, bestellen, korting …, see `config/commerce-tokens.json`). The build
  fails: the validator checks the frontmatter `title` and `nav_title`, `##`–`######` headings,
  `<Lead question>`, `<InDetail title>`, the `title` of `<Compare>`, `<KeyNumber>`, `<IconArray>`,
  `<TimeStrip>` and `<Callout>`, `<KeyNumber label>`, `<Diagram caption>` and `<FaqItem q>`;
  `npm run check:commerce` checks the same in the built pages (`h1`–`h6` and the components' title
  elements), plus every `aria-label`, and (since 26 October 2026) every table head (`th`: a `<Compare>` or
  diagram row label or column head), figure caption and fold summary. Ask the question without the word: "Is a research-labelled
  peptide legal to have?", not "Is it legal for me to buy …"; "When may a doctor ask for a
  'special'?", not "… order a 'special'". Not commerce, and passing: "in order to", "the order of
  the amino acids", "why order matters", "deal with", and an order as a legal instrument ("an executive
  order", "a court order", "the … (Amendment) Order 2026"); `stripNonCommerce` in `scripts/lib/load.ts`.
- Never name a seller, a "reputable lab", a brand of research chemical, or a website that sells,
  and never vouch for one. The validator warns on "reputable", "trusted lab/source/seller", "legit",
  "third-party tested", "uses it himself/themselves", "where to buy", "reliable source" and "vendor",
  in the MDX body, the frontmatter text and the English UI strings and glossary (a claim quoted in
  order to say it is not evidence, as in the lab-report ladder, §1a, is not reported). Where the role
  must be named, write "seller", and give no help choosing one.
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
- The distinction between **authorised**, **under regulatory review** and **unapproved**, and, where
  it applies, **approved but no longer sold** (`discontinued`: tesamorelin in Canada, approved 29 April
  2014, no longer sold since 30 September 2022). Never write "not approved" for a country whose status
  is unknown.
- The authorised molecule is not the grey-market vial: "semaglutide" bought online as a research
  chemical is an unauthorised product of unknown quality even though Ozempic is authorised.
- **The emergency number, by locale** (owner's decisions, 20 and 23 October 2026). The English site is
  read in several countries, so it **never prints an emergency number**: not 911 (US, Canada; also
  written 9-1-1), 999 (UK, also Ireland), 000 or "triple zero" (Australia), 112 (Australia from a
  mobile, Ireland, and across Europe) or 111 (New Zealand). Write "call your local emergency number"
  ("If it is severe, call your local emergency number."). Only the Dutch pages say 112 ("Bel 112").
  - Help services are **named and linked, never numbered**: "your country's health advice line
    (NHS 111 in England, healthdirect in Australia …)", using the help entries of the contact cards
    (`<JurisdictionCards />`, `<JurisdictionCard code>`). A service whose **name** contains a number may
    be named as the service: "NHS 111", "NHS 111 Wales", "988 Suicide & Crisis Lifeline", "Health811".
  - Components never hard-code a number: they use the locale's `common.emergency.*` strings (`call`,
    `now`, `ifSevere`, `jurisdiction`), and `src/data/jurisdictions.yaml` keeps each country's numbers
    as data (`emergency: ["000", "112"]`), passed only to a locale with `printsEmergencyNumbers: true`
    in `config/locales.json` (the Dutch strings).
  - The validator (`scripts/lib/emergency.ts`) fails a content or i18n file of a locale with
    `printsEmergencyNumbers: false` that prints one of these numbers as a phone number. The numbers are
    112 plus the `emergency` numbers of the locale's full and notes jurisdictions (on English: 911,
    999, 000, 112, 111), and the words "triple zero" and "nine-one-one". A phone number is one with a
    calling word near it (call, phone, dial, emergency, ambulance …), or any of them in stop-now
    content (a stop callout, the stop signs, the warning signs, the emergency strings). Left alone:
    part of a bigger number or an amount ("1,000", "10 000", "£1000", "1999", "99.9%"), a count or a
    measurement ("111 participants", "112 vials", "112 mg/dL"), a position in a study, a publication
    or a law ("week 112", "volume 999", "pages 111–112", "section 112", "21 CFR part 111", "s 111",
    "§ 112"), a range ("100–112") and a service name ("NHS 111"). Checked against the whole English
    corpus on 24 October 2026 (the pages as they were on 23 October and during the rewrite): no number
    was printed.

### The FDA PCAC vote (July 2026): the canonical framing

This is the most-misreported fact in the field. Every time it comes up, in every locale, state all
of the following (verify each element against fda.gov before first use and cite the FDA source):

1. On 23 July 2026 the FDA's Pharmacy Compounding Advisory Committee (PCAC) voted 8–6 with one
   abstention to recommend BPC-157 for the 503A bulk drug substances list.
2. The committee considered **seven** peptides (the six below plus emideltide, also called DSIP)
   and recommended **six** (BPC-157, KPV, TB-500, MOTS-c, Semax, epitalon). Confirm per-peptide
   votes from FDA materials; if a primary source contradicts this, follow the primary source and
   flag it in your research notes.
   *Status of the sources (checked 20 October 2026; re-checked by the refocus research,
   research/refocus/us-uk-routes.md, US-20):* FDA documents (meeting page, briefing
   documents, voting questions) support "considered seven". The vote counts and the six-of-seven
   outcome are not yet on any fda.gov page (no minutes or vote results posted; the meeting page was
   unchanged since 6 August 2026). Until they are, cite the FDA
   meeting page and voting questions, and write the counts as "as reported from the public
   meeting". Each substance had separate votes for its salt forms (e.g. free base and acetate).
3. The vote is **advisory and non-binding**, and went **against FDA staff's own recommendation**.
4. Legal compounding remains prohibited until the FDA formally adopts the recommendation and
   completes rulemaking.
5. **None of these is an approved medicine in the US, the UK, Canada or Australia** (the four rows of
   each compound's data file, checked 20–23 October 2026; Semax is registered as a medicine in
   Russia, as the FDA's own briefing notes; say so where Semax is discussed). A 503A listing, if it
   ever happens, would allow pharmacy compounding on prescription in the US. It is not a marketing
   authorisation, says nothing about efficacy, and **changes nothing outside the US**.

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
  The one exception is the lab-report ladder below, in exactly that form. That line is what keeps
  practical safety information legal under the publisher's law (Geneesmiddelenwet art. 84–85) and the
  readers' countries' similar rules (§1).

### The lab-report ladder (owner, 23 October 2026)

Readers say "we know what's in the vial and that it is clean". The answer is one figure on
`/en/safety/product-risk/`, **"What a lab report can and cannot tell you"** (a table or figure built
from existing components such as `<Compare>` or `<Diagram>`). It ranks **kinds of evidence about a
vial**, never sellers or labs. Rungs, from most to least informative:

1. A report from an **independent laboratory accredited to ISO/IEC 17025**, for **that exact batch**
   (the batch number on the report matches your label), testing identity (mass spectrometry), the
   amount per vial (assay), purity (HPLC), and ideally endotoxin and sterility.
2. The **seller's own report** (or a report from a lab you cannot identify, check or verify).
3. **No report.**
4. **Not evidence at all**: "the seller uses it himself", reviews, "third-party tested" without a
   report you can read.

Every rung lists what **stays unknown**: whether it is sterile (most reports test endotoxin at best,
not sterility); the real amount in *your* vial; whether your vial is from the tested batch (a report
with an empty batch field cannot be linked to any vial); whether the report is genuine; how it was
stored and shipped. "Analysis results relate only to the samples tested": a report covers one
sample. A report can show what was in the sample tested; "clean" needs sterility and endotoxin
results for that batch, and neither covers what happens after. The figure closes with: only the
pharmacy supply chain has these checks built in (GMP, every batch tested and released by a
responsible person, inspected by the regulator), and no report replaces that.

Rules: no seller or lab names; no "trusted", "reputable", "legit", "reliable source" (the validator
warns, §1); no ranking of sellers; no commerce words in its headings, link texts or labels (the build
fails, §1). Sources: FDA 21 CFR 211 (CGMP), USP <71> (sterility) and <85> (endotoxin), ICH Q6B,
ISO/IEC 17025 (the standard's scope page), and the page's existing product-risk sources.
`start-here` and `<ProductCheck />` (its lab-report item) point to the ladder; they do not repeat it.

## 1b. Audience and jurisdictions (owner, 23 October 2026)

**Who each locale is for comes from `config/locales.json`**, never from a page: `jurisdictions.full`
are the countries (or the EU) covered in full, in display order (regulatory rows, products, the
"approved?" answers, contact cards, timeline and tracker items, regulator news), and
`jurisdictions.notes` get short notes (a contact card and a notes page). WADA is shown everywhere and
never listed. Data of every other jurisdiction stays in `src/data/` (never delete a row) and the
components leave it out (`src/lib/jurisdictions.ts`).

| Locale | Full | Notes | Emergency numbers printed |
|---|---|---|---|
| English (`en`, published) | US, UK, CA, AU | IE, NZ | never (§1) |
| Dutch (`nl`, preview) | NL, EU, BE | none | yes ("Bel 112") |

**English is written for readers in the United States, the United Kingdom, Canada and Australia**, with
short notes for Ireland and New Zealand (`/en/legal/ireland-and-new-zealand/`). Wherever the answer
depends on the country, a reader in each of the four finds their own: one parallel row or card per
country, in the order US, UK, Canada, Australia, and never one country as "the default". Side effects
are reported to FDA MedWatch (US), the Yellow Card scheme (UK), the Canada Vigilance Program (Canada)
and the TGA (Australia); notes: the HPRA (Ireland) and Medsafe, through CARM (New Zealand). Compound
pages link the treatment routes on `/en/legal-routes/` by these fixed anchors: `#prescription`,
`#off-label`, `#us-compounding`, `#uk-specials`, `#canada-special-access`, `#australia-sas`,
`#personal-import`, `#trials`.

**What leaves the English site** (and is saved for the Dutch site): all European framing, that is the
Netherlands, the EU, Belgium and Germany as the reader's frame: their law, status rows, help services,
insurance, treatment routes, reporting routes, photos, glossary terms, and "approved / not in the EU"
phrasing. Before you cut anything from a page that stays, record it in
`research/for-nl-site/MANIFEST-<group>.md` (page, section heading, one line on what it said, and where
the full text is: `research/for-nl-site/snapshot-2026-10-23/…` or `git show nl-source-2026-10-23:<path>`).
Replaced English UI strings go to `research/for-nl-site/i18n-replaced-en.json`. The European legal
pages (`legal/nl`, `legal/eu`, `legal/be`, `legal/de`) no longer exist on English.

**What may stay** (keep it small):

1. **The publisher line**, on the about pages only: the site is published from the Netherlands, so
   Dutch law governs what it may say; that is why it sells nothing, links to no seller and gives no
   doses. Readers' countries have similar advertising rules (§1).
2. **European regulators as scientific evidence**: an EMA assessment report's trial data, or a
   committee's doubts about a benefit (tesamorelin: the EMA committee doubted the benefit was
   clinically meaningful; the applicant withdrew in 2012). Cite it as evidence, never as the reader's
   legal frame, with the marker on the line before:
   `{/* residue-ok: EMA evidence */}`.
3. **History**: global events (thalidomide, the 1962 Kefauver-Harris amendments) stay; Dutch law
   history goes. Mark a European mention: `{/* residue-ok: history */}`.
4. **Ireland**: one sentence that EU-wide (central) approvals also apply in Ireland, on the notes page
   and where Ireland is mentioned (marked).

**Words.** British spelling, but no UK-only words: "your doctor" (not GP, except when explaining the UK
system), "emergency department" (not A&E), "pharmacy" (not chemist), "medicine" (not drug, where
natural). Explain each country's own terms once (DIN, ARTG, Schedule 4, "specials", 503A).

**Country cautions** (from the fact-checked research, `research/refocus/`):

- *Canada:* say plainly that Health Canada has not authorised the product, and never suggest it is
  available through the Special Access Program (describe the SAP neutrally, on the routes page only).
  "Injectable peptides are generally regulated as prescription drugs" is Health Canada's position:
  present it as such, and rest the legal explanation on the new-drug and DIN rules.
- *Australia:* state a peptide's schedule only where the Poisons Standard names it (the data's
  `schedule` field); a group entry is written as "may be covered by … (not named)". State and territory
  possession law: the principle, with NSW and Victoria as examples.
- *Sources that name a business:* never cite or quote a document whose title or URL names a seller or
  company (regulators' enforcement releases often do); describe the enforcement in general terms, with
  a neutral official source.
- *Unresolved points* in the research are written as unknown ("No official figures were found …") or
  left out.

### The residue check

`config/locale-residue.json` lists, per locale, the words that belong to another locale's readers;
`scripts/lib/residue.ts` finds them. On English it reads the MDX (body and frontmatter text, not ids,
codes, URLs or link targets), the i18n JSON (UI strings, glossary, media captions, and the timeline,
tracker and corrections text of the items English shows), and the data text English shows (contact
cards of its own jurisdictions, schedule notes of its rows, its products' names and holders, its news
feeds). Three levels:

| Level | What | Example | Exempted by |
|---|---|---|---|
| `error` | Dutch, Belgian and German terms that never belong on English | Netherlands, Dutch, Lareb, IGJ, CBG, huisarts, Zorginstituut, eigen risico, Belgium, FAMHP, BfArM, AMG, NADA … | only `allowFiles` / `allowStrings` (the publisher line) |
| `frame` | EU reader framing | "in the EU", "outside the EU", "EU-wide", "European Union", "the EU label", "in Europe", a euro amount, Germany (thalidomide history may stay) | the marker (evidence, history, the Ireland sentence) |
| `warn` | European names that may stay as evidence | EU, EMA, EPAR, CHMP, Europe, European | the marker |

The marker is `{/* residue-ok: <why> */}` in MDX, or `# residue-ok: <why>` in YAML frontmatter, on the
line before the text or at the end of the same line. In a table row, put it inside the row's last
cell, before the closing `|` (a line between two rows would end the table). It exempts `frame` and
`warn` hits only, on that one line; an `error` term is never exempted by a marker.

```mdx
{/* residue-ok: EMA evidence */}
The EMA's medicines committee doubted that the benefit was clinically meaningful, and the company withdrew its application in 2012.<Cite id="…" />
```

JSON has no comments, so the config holds the exceptions, each with its reason (use them sparingly):

- `allowFiles`: the publisher line's pages (`about/index`, `about/editorial-policy`, `about/funding`),
  where "Netherlands" and "Dutch" may stand.
- `allowStrings`: one i18n or data string (file, key regex, pattern ids); a `file` ending in `/`
  covers a folder. Examples: the thalidomide timeline text ("German", history), the corrections log
  entry that records what a page said before the refocus, the EFSA glossary alias "European Food
  Safety Authority" (the agency's proper name; EFSA is cited as evidence).
- `allowPhrases`: a proper name that contains a pattern but is not reader framing, skipped
  everywhere, the built pages included, together with any match that touches it ("indexed in Europe
  PMC" is not the frame "in Europe"): "Europe PMC" (a literature database), "Eli Lilly Nederland
  B.V." (the UK licence holder of Mounjaro, shown in the products table).

How to run it:

- `npm run validate -- --only <file>` lists every hit in your file, with its line.
- `npm run check:residue` runs the same scan, then the built pages (`dist/en/`), where a word that
  reached a page another way (a component, data, a glossary tooltip) shows up. Markers do not survive
  the build, so there only `error` hits count; cited titles and names (reference lists, the sources
  page, "Based on" lists, a figure card's "Source" line, image credits) and the news list's
  headlines are warnings. It then lists, once each, the cited sources whose entry carries a Dutch,
  Belgian or German name, with the number of pages that cite them: a source cited only through data
  (a component's source list, such as `src/data/product-check.yaml`) never shows up in the source
  scan. A study in a Belgian or Dutch journal may stay (evidence); a Dutch help page, law or
  regulator's notice cited for the reader's own situation goes. `-- --details` lists every hit;
  `-- --strict` fails on error and frame hits; `-- --only <part-of-path>` filters.
- Before the script existed, writers ran the brief's grep
  (`research/refocus-spec/content-brief.md`, "Residue check"); the config holds the same terms
  (Dutch, Belgian and German terms as `error`, "German"/"Germany" as `frame` so that thalidomide
  history can stay with the marker, EU framing as `frame`, EU/EMA/EPAR/CHMP/Europe as `warn`), as
  whole words and, for codes such as NL, CBG, EU and EMA, in capitals only (the brief's raw `epar`
  also matched "separate").
- `STRICT_RESIDUE` (`scripts/lib/residue.ts`, read by the validator and the check) is `true` since
  26 October 2026, when the sources and the built pages had no error or frame hit left: error and
  frame hits fail the validator (and so the build), `npm run check` and CI (`npm run check:residue`);
  warn hits stay warnings. (During the content rewrite of 24 October 2026 it was `false` and every hit
  was a warning.)

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
- **British English spelling** in `en` (authorised, haemorrhage, oestrogen), but **no UK-only words**
  (your doctor, emergency department, pharmacy, medicine; §1b), metric units, 24-hour time,
  day-month-year dates in prose ("20 October 2026").
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
| Who each locale is for (full and notes jurisdictions, emergency numbers printed or not) | `config/locales.json` (§1b) | editor |
| Contact cards: regulator, reporting, anti-doping body, medicines law, help services, emergency numbers (as data) | `src/data/jurisdictions.yaml` | editors |
| Words that belong to another locale's readers | `config/locale-residue.json` (§1b) | editor |
| European material saved for the Dutch site | `research/for-nl-site/` (snapshot, `MANIFEST-<group>.md`, `i18n-replaced-en.json`) | writers |

Timeline events (`jurisdictions`, `[]` = global) and tracker items (`jurisdiction`) are shown only in the
locales that cover them (WADA everywhere), so their words name only those jurisdictions. An event is one
jurisdiction's action: the FDA approval and the EU authorisation of a medicine are two events, each with its
own date and sources. A national body's source on a WADA tracker item goes in
`local_sources: { NL: [<id>] }` and is listed only in a locale that covers that jurisdiction.

**Country sources in shared data** (26 October 2026). Data that every locale shows but whose words rest on
the reader's own country (a label, a help page, a privacy law) keeps those sources per jurisdiction in the
same way: `sources` are cited in every locale, `local_sources: { US: [...], NL: [...], EU: [...] }` only in a
locale that shows that jurisdiction (`visibleSources` in `src/lib/jurisdictions.ts`; the remark plugins use
`src/plugins/locale-sources.mjs`, by the content file's locale). It is used by the product check
(`src/data/product-check.yaml`, also `intro_local_sources`), explainers (`src/data/explainers.yaml`), image
captions (`src/data/media.yaml`) and the organ cards' "not approved" line (`status_local_sources`). So a Dutch
help page or an EU label stays in the data for the Dutch pages and never reaches an English reference list;
never delete such an id to make English clean, move it under its jurisdiction.

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

Legal jurisdiction pages add `jurisdiction: US` (or another code). It must be one of the locale's
jurisdictions (`config/locales.json`, `jurisdictions.full` and `.notes`; English: US, UK, CA, AU, IE,
NZ), as must every `<JurisdictionCard code>`. `<JurisdictionCards which="full|notes|all" />` renders
the contact cards of the locale's full jurisdictions, its notes jurisdictions, or both, in the
locale's order (§9). English country pages: `legal/us`, `legal/uk`, `legal/ca`, `legal/au` and the notes
page `legal/ireland-and-new-zealand` (no `jurisdiction`; it uses `<JurisdictionCards which="notes" />`).
The European pages (`legal/nl`, `eu`, `be`, `de`) left the English site in the refocus. While
`STRICT_PAGE_JURISDICTIONS` (`src/lib/jurisdictions.ts`) is false, a card or page `jurisdiction` outside
the locale's set is left out of the page with a warning; after the content rewrite it fails the build.
A card whose jurisdiction has no entry in `src/data/jurisdictions.yaml` is left out too (an error on a
published locale: `STRICT_LOCALE_ROWS` in `scripts/validate-content.ts`).

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
category: experimental        # authorised | authorised-nationally | investigational | experimental | not-a-peptide (§5.4)
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
regulatory:                   # REQUIRED: WADA, and every full jurisdiction of a published locale (English: US, UK, CA, AU).
                              # Keep EU, NL, DE, BE rows for the Dutch site (never delete them). A missing row is shown as unknown, never "not approved".
  # (shortened from src/data/compounds/bpc-157.yaml: the real rows list more sources)
  - { jurisdiction: UK, status: not-authorised, as_of: 2026-10-23, sources: [uk-hmr-2012-reg-46, uk-mhra-substance-index-status-c-2026-10-23] }
  - { jurisdiction: US, status: not-authorised, as_of: 2026-10-20, sources: [fda-pcac-2026-bpc157-briefing, fda-pcac-2026-07-meeting] }
  - { jurisdiction: CA, status: not-authorised, as_of: 2026-10-23, sources: [ca-dpd-search-status-c-2026-10-23, ca-noc-search-status-c-2026-10-23] }
  - jurisdiction: AU
    status: not-authorised
    as_of: 2026-10-23
    sources: [au-artg-search-status-c-2026-10-23, au-tga-2026-04-peptide-responsibilities]
    schedule: { code: "S4", note: "Prescription only medicine from 1 June 2024. …", sources: [au-poisons-standard-2026-10, au-poisons-standard-2024-06] }
  - { jurisdiction: EU, status: not-authorised, as_of: 2026-10-20, sources: [ema-medicines-search] }   # a row for the Dutch site
  - { jurisdiction: WADA, status: prohibited, wada_section: S0, wada_scope: at-all-times, since: 2022-01-01, as_of: 2026-10-20, sources: [wada-2022-list-modifications, wada-2026-list-en] }
  # status: authorised | discontinued | not-authorised | refused | withdrawn | under-review | investigational;
  # the WADA row is prohibited | not-listed | unclear (and only it can be). discontinued = authorised and marketed,
  # then cancelled for non-safety reasons: give authorised_since (the approval) and since (the cancellation);
  # e.g. tesamorelin CA: authorised_since 2014-04-29, since 2022-09-30.
  # A national schedule goes in schedule: { code, note, sources }: Australia's Poisons Standard (S4) and Canada's
  # Prescription Drug List (PDL), ONLY where the instrument names the substance. Codes are SCHEDULE_CODES
  # (src/schemas/vocab.ts); the table shows the name from vocab.schedule ("Schedule 4 (S4)", "Prescription Drug List"). A group entry that may cover it
  # (GHRHs, "copper compounds") is not a schedule field: the page says "may be covered by … (not named)".
  # Use unclear (WADA row only) when the substance is not named on the
  # List and the sources leave open whether a catch-all section (S0, S2 …) covers it, with no ruling from an
  # anti-doping body: e.g. Semax and Selank (registered in Russia, so S0 may not apply), or SS-31 and PT-141
  # (FDA-approved, so outside S0, but WADA says unnamed peptides may fall under other classes). Never
  # not-authorised as a stand-in, and never not-listed unless the sources say it is allowed.
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
authorised_products: []       # REQUIRED for authorised (jurisdiction US, UK, CA, AU, EU, NL, DE or BE; marketed_until once no longer sold), see §5.4
national_authorisations: []   # REQUIRED for authorised-nationally only: [{ country: IT, as_of: 2026-10-22, sources: [...] }], see §5.4
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
  tested:                      # optional, rare: sourced override of the derived "tested in people?" answer (§5.2)
    { short: "Some", text: "…", tone: partial, sources: [reid-thompson-2021-tazpower] }
  sport:                       # optional, rare: the same for the "allowed in sport?" words (no tone)
    { short: "Unclear", text: "…", sources: [wada-2026-list-en] }
  stop_signs:                  # optional: the "Stop and get help" strip after At a glance (§9.1). Exactly 3.
    - { icon: sign-belly-pain, text: "Severe belly pain, often spreading to your back", sources: [fda-label-wegovy] }
  facts:                       # optional: up to 4 label/value rows for the fact sheet beside the title (§9.1)
    - { label: "How it is taken", value: "Injection under the skin, or a tablet", sources: [fda-label-ozempic] }
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
regulatory_notes:              # optional one-line notes per jurisdiction shown in the table: only the locale's own rows and WADA
  US: "Not FDA-approved. …"    # (English: US, UK, CA, AU, WADA; a note for EU, NL, DE or BE is never rendered on English)
  CA: "Health Canada has not authorised it: no DIN. …"
  AU: "Not on the ARTG. Schedule 4 since 1 June 2024. …"
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

…prose per country, dated, one parallel paragraph or row each (US, UK, Canada, Australia), with the PCAC framing where relevant…
…the legal routes to a treatment: link /en/legal-routes/#prescription, #off-label, #us-compounding, #uk-specials, #canada-special-access, #australia-sas, #personal-import or #trials…
</Section>

<Section id="risks">
…reported adverse events; theoretical risks and WHY they are theorised (the mechanism)…
</Section>

<Section id="harm-reduction">
…If someone is going to do this anyway: hygiene, monitoring, warning signs, interactions, when to stop. No protocol, no mg.
…report a side effect: <JurisdictionCards which="full" /> (MedWatch, Yellow Card, Canada Vigilance, TGA), or name and link each…
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
- **The regulatory section answers for each of the locale's countries** (§1b): on English, a reader
  in the US, the UK, Canada and Australia each finds their own status, date and route, in that order,
  and no country is "the default". Say "Health Canada has not authorised it" on Canadian content
  (§1b, Canada); state an Australian schedule only where the Poisons Standard names the substance. An
  EMA document may be cited as evidence (trial data, a committee's doubts), marked (§1b), never as the
  reader's status.
- **The prose agrees with the derived answers.** The badge, *At a glance* and the fact sheet are
  computed from the data rows (below); the text must say the same (tesamorelin: approved in the US;
  approved in Canada in 2014 but no longer sold there since 2022; not approved in the UK or
  Australia). If the text and the tile disagree, fix the data or the text, never the words in
  `beginner.json`.

**The beginner layer comes first.** Every compound page opens in this order: title and status
badge → **At a glance** → **The 30-second version** (`summary`) → review line → page photo →
evidence profile, sequence and technical details (INN, other names, formula, mass) → the sections.
On wide screens the photo and the review line sit beside and under the title instead. The
technical facts deliberately come after the plain answers.

*At a glance* is four tiles. Three are written for you from the data file, so every compound with
the same facts gets the same words, in every language:

| Tile | Comes from | Example answers |
|---|---|---|
| Is it an approved medicine? | the regulatory rows of the locale's own jurisdictions (`config/locales.json`; `approvalFor` in `src/lib/jurisdictions.ts`), plus `national_authorisations` and `category` when none of them approved it. A jurisdiction without a row is left out, never "not approved". | "Yes. Approved in the US, the UK, Canada and Australia. Only with a prescription." · "Only in the US. Approved in the US. Canada approved it, but it is no longer sold there. Not approved in the UK or Australia. Only with a prescription." · "Only in other countries. Approved in Italy, India and Hong Kong for some uses. Not approved in the US, the UK, Canada or Australia." · "No. Not approved as a medicine in the US, the UK, Canada or Australia." · "No. Not approved. It is still being tested in trials." |
| Has it been tested in people? | `evidence.human_clinical` (or a sourced `glance.tested`, below) | none → "No" · case-reports → "Very little" · phase-1 → "A little" · phase-2 → "Some" · phase-3 / authorised → "Yes, large trials" |
| Is it allowed in sport? | the `WADA` regulatory row (words: or a sourced `glance.sport`, below) | prohibited → "No. Banned in sport at all times" + the section (S0, S2 …) · not-listed → "Not banned" · unclear → "Unclear. Not named on the anti-doping list. Ask your anti-doping organisation before using it in sport." · anything else → "see the status table" (never a guess) |
| What is the biggest risk? | `glance.main_risk` in the MDX frontmatter | without it, the tile links to the warning-signs page |

So keep the data honest and the tiles stay honest. Change the words only in
`src/i18n/<locale>/beginner.json`, never per page, with one exception below.

**A sourced override, when the generic words would mislead** (`glance.tested`, `glance.sport`). The
derived words fit most compounds, but not every one: SS-31 is `authorised` (FDA accelerated approval), yet
the approval rests on a 12-patient trial that missed both main goals, so "Large trials in many people,
checked by regulators" overstates it; NAD+ precursors are `phase-3`, but their one large trial found no
benefit, so "Large trials in many people have been published" reads as a positive result. Then, and only
then, the page may replace the words:

```yaml
glance:
  tested:
    short: "Some"                      # the answer, at most 4 words; also the fact sheet's "Tested in people"
    text: "Approved on a 12-patient trial that missed its main goals. Bigger trials in other diseases found no benefit."
    tone: partial                      # optional: yes | partial | no, the ring; default: derived from the data
    sources: [reid-thompson-2021-tazpower, fda-2025-forzinity-approval, karaa-2023-mmpower-3]
  sport:                               # same shape, without tone
    short: "Unclear"
    text: "Not named on the anti-doping list. Drips over 100 mL in 12 hours are banned."
    sources: [wada-2026-list-en, usada-iv-infusions]
```

- **Fix the data first.** An override is never a way around a wrong grade or status: if the words are
  wrong because `human_clinical` or the WADA row is wrong, change the data. The override is for a fact the
  categories cannot express (what the trials found, a rule outside the substance list).
- `short` at most 4 words and `text` at most 18 (the schema fails above), B1, reading ease 60 or more in
  English (the validator warns). Same tone as the derived answers: plain, no alarm words, no advice.
- **No new claim.** Condense what the page already says and cites: every source must be registered and
  cited elsewhere on the page or in its data file (the validator fails otherwise). Keep the qualifiers
  ("in other diseases", "in 410 people with Parkinson's disease").
- Only the words change. The pictogram, the WADA section code, the "status checked" date and the link to
  the status table still come from the data. The override carries its own citation numbers, because it is
  a page-specific claim; its sources join the page's source list.
- Choose `tone` to match the words: the ring echoes the answer ("Some" with a grey ring, not a cyan "yes").
- Translators translate the override with the page; it is per locale, like `main_risk`.
- Write a comment above it saying why the derived words would mislead (see `ss-31.mdx`, `nad-precursors.mdx`).

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

### 5.4 Authorised medicines (semaglutide, tirzepatide, tesamorelin, bremelanotide, SS-31; thymosin alpha-1 nationally)

These get a visibly different treatment. This is a core editorial contribution of the site.

- Data: `category: authorised` when an official product label exists from at least one regulator the
  site tracks (a row `authorised` or `discontinued`, and `human_clinical: authorised`), and
  `authorised_products` (each product's jurisdiction needs its row `authorised` or `discontinued`):

```yaml
authorised_products:
  - id: wegovy-us
    name: Wegovy (injection)
    holder: Novo Nordisk Inc.
    jurisdiction: US
    authorised: 2021-06-04
    route: subcutaneous
    label_url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/218316s007lbl.pdf"
    label_source: fda-label-wegovy
  - id: egrifta-ca               # approved, then no longer sold: the row is discontinued
    name: Egrifta
    holder: Theratechnologies Inc.
    jurisdiction: CA
    authorised: 2014-04-29
    marketed_until: 2022-09-30   # shown as "No longer sold"
    route: subcutaneous
    label_url: https://pdf.hres.ca/dpd_pm/00029988.PDF
    label_source: ca-pm-egrifta-2015
```

`label_url` is the official product information, never a seller: the FDA label (US), the product's
SmPC on emc (UK, `www.medicines.org.uk`, allowed by the owner on 27 October 2026; the MHRA Products
page for the substance where emc has no SmPC for the product, and as a source of the UK row), the Health
Canada product monograph (`pdf.hres.ca`) and the ARTG entry (Australia). An EU product (EMA EPAR) is
kept for the Dutch site and is not shown on English. Every product needs a localised `indications`
line in each page's frontmatter, written from that label (the validator fails without it).

- Prose: put `<AuthorisedProducts />` near the top of `what-it-is`. It renders the badge ("Authorised
  medicine" when every one of the locale's jurisdictions approved it, otherwise "Authorised in the US"
  and so on), the prescription-route box and the official labels of the locale's own jurisdictions
  ("No longer sold" with `marketed_until`). The badge under the title and the *At a glance* tile say
  the same, from the same rows (`approvalFor` in `src/lib/jurisdictions.ts`: all, some, former,
  elsewhere, trials, none); nothing names a jurisdiction the locale does not cover. A medicine approved
  only in some of the four reads, for example, "Only in the US. Approved in the US. Canada approved it,
  but it is no longer sold there. Not approved in the UK or Australia." (tesamorelin), and the page
  text says the same.
- The harm-reduction section for authorised medicines focuses on: the legal prescription route,
  why grey-market "research" versions are a different (unauthorised) product, counterfeit pens,
  and label-based safety (contraindications, interactions, warning signs).

**Authorised only by some countries' own regulators** (thymosin alpha-1: Italy, India, Hong Kong).
Use `category: authorised-nationally` when only national regulators outside every tracked
jurisdiction have granted a marketing authorisation, so no row is authorised and there is no label on
an allowlisted host to link. A member state's national authorisation is not an EU row (the EU row says
`not-authorised`; the country goes here). `investigational` means "no authorisation"; `authorised`
needs a tracked row and a label (see above). List each country in the data file, with its own
sources, as far as an official source supports it:

```yaml
national_authorisations:      # ISO 3166-1 alpha-2 codes; names are rendered per locale ("Italy", "Italië")
  - { country: IT, as_of: 2026-10-22, sources: [ema-orphan-thymalfasin-eu-3-02-110, fda-pcac-2024-thymosin-alpha-1-briefing] }
  - { country: IN, as_of: 2026-10-22, sources: [fda-pcac-2024-thymosin-alpha-1-briefing] }
```

- The *At a glance* tile then reads "Only in other countries. Approved in Italy, India and Hong Kong
  for some uses. Not approved in the US, the UK, Canada or Australia." (words in `beginner.json`,
  countries from the data). Name only countries a regulator or regulator-cited database confirms; a maker's list of
  approvals that nobody verified stays in the prose, attributed, and never goes into the tile.
- The badge says "Authorised only in other countries" (solid grey outline: partly); the compounds
  index lists it under "Approved only in other countries"; the fact sheet's "Approved in" names the
  countries.
- The validator requires at least one country, `human_clinical: authorised`, no row `authorised` or
  `discontinued` and no `authorised_products` (those make it `authorised`), and real region codes with
  registered sources. `national_authorisations` is rejected on any other category.
- The prose is written as for an unapproved compound (harm-reduction section, no `<AuthorisedProducts />`),
  and says where it is approved, for what, and that the approval does not apply in the reader's own countries.

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
- For authorised medicines you may state the authorised dose range **as written in the label**
  (the FDA prescribing information, the UK SmPC, the Canadian product monograph or the Australian
  product information), attributed to that label, with "your prescriber decides the dose".

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
| Page hero (no component) | One line in `src/data/heroes.yaml`: `compounds/semaglutide: gila-monster`. Rendered after the summary on phones and beside the title on wide screens. Every page should have one. A photo for one locale only: `{ nl: id }` (shown only on the Dutch page) or `{ default: id, nl: id }` (swapped there); a European photo (a Dutch ambulance, a parliament in The Hague) never heads an English page, and its captions in `src/i18n/en/media.json` are then not checked by the residue check. |
| `<Checklist>` + markdown list + `</Checklist>` | A scannable checklist (what to bring to your doctor, aseptic steps). |
| `<Faq>` `<FaqItem q="Question?">answer</FaqItem>` `</Faq>` | Real question-and-answer sections only. Emits FAQPage structured data. |
| `<WarningSigns />` | The canonical stop-now list. `<WarningSigns only="injection" />` for a subset: `general`, `injection`, `allergic`, `cardiovascular`, `metabolic`, `neurological`. |
| `<ProductCheck />` | "If your product did not come from a pharmacy: check before you use it" (§1a): the shared, sourced checklist for people who already have a product. Nine checks, each a pictogram plus words: the seal, the label (name, amount, batch number, expiry), how it looks, what a lab report does not prove (it points to the lab-report ladder on `/en/safety/product-risk/`, §1a), storage, clean steps with a new needle and syringe, keeping the vial and label, a doctor for checks, and the warning signs with the locale's emergency line. Negative signs only; the intro says no check shows a product is good. Order, pictograms, sources and links in `src/data/product-check.yaml`, words in `src/i18n/<locale>/product-check.json`; its sources are numbered with the page's citations. Optional compound-specific line: `<ProductCheck extra="Check which form the label names. …" extraSources="id,id" />` (sources required and taken from the page's own sources; `extraAfter="certificate"` moves it, default after the label check). Self-closing, once per page, never inside an `<InDetail>` fold (the validator checks all three). Place it near the top of a compound page's harm-reduction section, and on safety pages where use is discussed. No amounts, volumes, schedules or mixing sums in an extra line, and nothing about where to get a product or how to judge a seller. |
| `<EvidenceGrade compound="bpc-157" />` | The four-axis grade card for a compound, usable outside its own page. |
| `<PageList section="safety" />` | Auto-generated list of pages in a section (for index pages). |
| `<CompoundIndex />` | Compound cards (for `/compounds`). |
| `<Timeline />`, `<GradeRubric />`, `<GradeMatrix />`, `<CorrectionsLog />`, `<ChangeTracker />`, `<NewsList />`, `<GlossaryIndex />`, `<SourcesIndex />` | Page-specific widgets driven by data. Place where the page needs them. |
| `<JurisdictionCards which="full" />`, `<JurisdictionCard code="US" />` | The contact cards of the locale's own jurisdictions (§1b), from `src/data/jurisdictions.yaml`: regulator, side-effect reporting, anti-doping body, medicines law and help services, named and linked (never a phone number on English, §1). `which`: `full` (English: US, UK, Canada, Australia), `notes` (Ireland, New Zealand) or `all` (both, full first). One card: `code` must be one of the locale's jurisdictions (the validator checks it; a card outside the set is left out of the page). Use them wherever the reader needs "where do I report this, who can help" for their own country, instead of writing the services out. A card shows an optional line under its list when `pages.jurisdiction.helpNote.<code>` exists in the locale's strings, for help services it cannot link yet (Canada: the provincial advice lines whose pages could not be read). On a whole-UK card, every entry that is not UK-wide names its nation ("NHS 111 (England)", "NHS 24 (Scotland)"); nhs.uk pages are NHS England's. |

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
- `glance.facts`: up to four label/value rows for the fact sheet beside the title (label ≤ 4 words, value ≤ 10 words, sources required): how it is taken, how often, how long it lasts. Class, "Approved in" (the locale's own jurisdictions, the same answer as *At a glance*) and testing in people come from the data file (testing in people: or the page's `glance.tested`, §5.2). Label facts only, never a dose.

With at least one fold on the page, the summary box says how long the short version takes and how
long everything takes, and the source list is folded too (its numbers still link both ways).

## 10. Links

- Internal: absolute with locale — `[sterile technique](/en/safety/sterile-technique/)`.
  Link text must say where it goes. Never "click here".
- External: avoid in prose. Put the source in the registry and `<Cite>` it. If a link is
  genuinely needed (e.g. to a reporting form), it must be on the allowlist.
- Never put commerce words in link text, headings, questions, titles or labels (see §1).
- **Link only to routes that exist** (on English: the route list in
  `research/refocus-spec/content-brief.md`, "Routes"). The European legal pages (`/en/legal/nl/`,
  `/en/legal/eu/`, `/en/legal/be/`, `/en/legal/de/`) no longer exist on English: link the country
  pages `/en/legal/us/`, `/en/legal/uk/`, `/en/legal/ca/`, `/en/legal/au/` and the notes page
  `/en/legal/ireland-and-new-zealand/` instead. (The live host redirects the old addresses; see
  README, Deployment.)
- **Treatment routes** have fixed anchors on `/en/legal-routes/`: `#prescription`, `#off-label`,
  `#us-compounding`, `#uk-specials`, `#canada-special-access`, `#australia-sas`, `#personal-import`,
  `#trials` (§1b). Link those, never a heading's generated id.
- **Cross-page anchors are checked** after the build (`npm run check:html`): a link to a source
  (`/en/sources/#source-<id>`) or an image credit (`/en/sources/#image-<id>`) whose target does not
  exist fails; any other missing cross-page anchor (a glossary term, another page's section) is a
  warning.

## 11. Sources — `src/data/sources/<group>.yaml`

```yaml
sikiric-2011-gi-review:         # id: firstauthor-year-keyword, kebab-case, globally unique
  type: review                  # article|review|meta-analysis|trial|preprint|book|chapter|regulator|law|guideline|label|registry|dataset|report|web
  authors: "Sikiric P, Seiwerth S, Rucman R, et al."
  title: "Stable gastric pentadecapeptide BPC 157: novel therapy in gastrointestinal tract"
  container: "Current Pharmaceutical Design"
  year: 2011
  doi: 10.2174/138161211796196954
  pmid: "21548867"
  verified: pubmed              # pubmed | doi | url | registry — HOW you confirmed it exists and says what you cite it for
fda-label-wegovy:
  type: label
  authors: "U.S. Food and Drug Administration / Novo Nordisk"
  title: "WEGOVY (semaglutide) injection and tablets — prescribing information (revised 06/2026)"
  year: 2026
  url: https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/218316s007lbl.pdf
  accessed: 2026-10-20
  verified: url
```

**Verification is mandatory.** Every scholarly source must be looked up (PubMed tools, or by
resolving the DOI) and the metadata copied from the record — never from memory. A fabricated
or mismatched DOI is the most damaging error this site can make. Every regulator/law URL must
have been fetched and must say what you cite it for. If you cannot verify a source, do not use
the claim.

- **Reuse ids.** Search every file in `src/data/sources/` for the DOI, PMID or URL before adding an
  entry, and reuse the existing id for the same document (ids are global). The fact-checked refocus
  research is merged into `src/data/sources/refocus-*.yaml`: reuse those ids, never edit those files;
  a group adds new sources to its own file (`src/data/sources/en-<group>.yaml`). A reader-facing title for one of
  those ids (the research's own titles sometimes used internal words) is given by repeating the id, with the same
  `url` and dates, in `src/data/sources/en-finish.yaml`: that file sorts first and `src/lib/data.ts` keeps the first
  entry, and the validator reports the expected "duplicate source id … will be merged" warning.
- **The link must show the claim.** A dataset source that records several searches links one of them: cite it only
  for the claim its link shows, or say in its title that the link opens one of several searches. For a claim about
  another compound, register that search (`au-artg-search-tirzepatide-2026-10-26`, not the semaglutide search).
- **No source that names a business.** Never cite or quote a document whose title or URL names a
  seller or a company (regulators' enforcement releases often do): describe the enforcement in
  general terms, with a neutral official source (§1b, "Country cautions").
- **The reader's frame is their own regulator.** On English, status, law and routes rest on the FDA,
  the MHRA and UK legislation, Health Canada and Canadian law, the TGA and Australian law (and the HPRA
  and Medsafe for the notes). An EMA document (EPAR, a committee's assessment) may be cited as
  scientific evidence, with the marker (§1b), never as the reader's status.

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

- **Each country's own terms** are defined once, plainly, with the country named: DIN (Canada), ARTG
  and Schedule 4 (Australia), "specials" (UK), 503A and 503B (US), the Special Access Program and the
  Special Access Scheme. Never define a term as if it applied everywhere.
- **No Dutch, Belgian or German terms on English** (huisarts, Lareb, Zorginstituut, eigen risico …).
  The residue check (§1b) reads the English glossary, and a glossary definition appears on every page
  that uses the term (as its tooltip), so one Dutch example in a definition reaches many pages.
  Replaced or removed English entries are kept for the Dutch site in
  `research/for-nl-site/i18n-replaced-en.json`. JSON has no comments: a definition that must keep a
  European name (EMA as evidence) needs an `allowStrings` entry in `config/locale-residue.json`.

Auto-linking matches the term and every alias **case-insensitively, on whole words**, after the page
text has been given typographic quotes. So:

- Write an apostrophe in a term or alias as `’` ("Crohn’s disease"): a straight `'` never matches the
  rendered text, so that alias never links.
- Never use an alias that is an everyday word in another sense: "WHO" would link every "who", a bare
  "pilot" would also catch "a pilot programme", and a bare "steroids" for corticosteroids would also
  catch a later "steroids" that means anabolic steroids. Prefer the longer phrase ("pilot study",
  "steroid injections").
- One spelling per id: the same alias in two entries links to whichever loads last.

## 13. Reviews, dates, translation

- `last_reviewed: 2026-10-20` and `reviewed_by: pending-medical-review` (or
  `pending-legal-review` for legal pages) until a named reviewer signs off. The site shows an
  honest "review pending" notice; it never pretends a review happened.
- Non-English files add `translation: { method: translated, from: en, review: pending }`
  (or `method: adapted` for jurisdiction-rewritten legal content, `native` if written directly
  in that language).
