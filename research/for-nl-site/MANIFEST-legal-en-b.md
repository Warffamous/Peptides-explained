# Cut for the Dutch site: group legal-en-b (24 October 2026)

What group legal-en-b removed from English pages that stay on the English site, under the English refocus
(research/refocus-spec/content-brief.md). Every item below is European framing (the Netherlands, the EU, Belgium,
Germany as the reader's frame). The full text of each page as it was is in two places:

- the snapshot: `research/for-nl-site/snapshot-2026-10-23/content/pages-en/<path>` (pages) and
  `research/for-nl-site/snapshot-2026-10-23/i18n/en/glossary/legal-b.json` (glossary);
- git: `git show nl-source-2026-10-23:src/content/pages/en/<path>` and
  `git show nl-source-2026-10-23:src/i18n/en/glossary/legal-b.json`.

Nothing was deleted from `src/data/`: the EU, DE and NL tracker items (`eu-pharma-reform`, `de-doping-list-gazette`,
`nl-igj-online-sellers`) and the NL local source of `wada-2027-prohibited-list` stay in `src/data/tracker.yaml` with
their jurisdiction tags (English hides them), and their English text stays in `src/i18n/en/tracker.json` (a published
locale needs text for every item; the residue scan skips hidden items). Every cited source stays registered.

Re-check every legal fact before reuse: these were last checked on 22 October 2026.

## legal-routes.mdx (was "Legal routes to a peptide treatment in the Netherlands")

Snapshot: `snapshot-2026-10-23/content/pages-en/legal-routes.mdx`. The whole page was Dutch-framed; it became
"Legal routes to treatment in the US, the UK, Canada and Australia" with the brief's fixed anchors.

| Section (before) | What it said | Cite ids removed with it |
|---|---|---|
| Frontmatter | Title, description and summary for the Netherlands; `related: legal/nl, legal/eu`; `further_reading: cbg-geneesmiddeleninformatiebank` | cbg-geneesmiddeleninformatiebank |
| Opening `<Compare>` (approved medicine vs peptide approved nowhere, six Dutch routes) | Prescription (Gmw art. 61, 40), off-label (IGJ 2026 position, Gmw art. 68), artsenverklaring (IGJ Q&A), magistrale bereiding (IGJ), trial (CCMO, no NL/BE trial of BPC-157), compassionate use (CBG criteria and list) | nl-gmw-art-61-prescription, nl-gmw-art-40-handelsvergunning, igj-2026-off-label-standpunt, nl-gmw-art-68-off-label, igj-qa-zonder-handelsvergunning, igj-eigen-bereidingen-apotheek, ccmo-achtergrond-meedoen, ctgov-nl-be-peptide-search-2026-10-22, cbg-compassionate-use-criteria, cbg-compassionate-use-list |
| 1. A prescription for an approved medicine (figure `route-prescription`) | CBG database; no online prescribing to someone the doctor does not know (Gmw art. 67); good-care duty (WGBO art. 453); pharmacist or dispensing GP hands over; Wegovy and Mounjaro approved in the EU | cbg-geneesmiddeleninformatiebank, nl-gmw-art-67-internet-prescribing, nl-wgbo-art-453-good-care, nl-gmw-art-61-prescription, ema-epar-wegovy, ema-epar-mounjaro |
| 2. Off-label prescribing (figure `off-label-four-situations`, fold "The extra care the IGJ expects") | The four situations of the IGJ position (February 2026, adjusted May 2026); extra information, explicit consent and monitoring | igj-2026-off-label-standpunt, nl-gmw-art-68-off-label |
| 3. A doctor's declaration (artsenverklaring) (figure `artsenverklaring-steps`, folds "What the application must contain", "Why this route does not fit BPC-157 and similar peptides") | The three steps, the IGJ's 8-week limit, Gmw art. 40(3)(c) and Regeling art. 3.17, the BIG-register declaration, Investigator's Brochure / IMPD and GMP certificate, Lareb reporting by the supplier | igj-leveren-op-artsenverklaring, igj-qa-zonder-handelsvergunning, nl-gmw-art-40-handelsvergunning, nl-regeling-gnw-art-3-17 |
| 4. A pharmacy preparation (magistrale bereiding) (figure `pharmacy-preparation-checks`) | Prescription first (CJEU Abcur), small scale, European Pharmacopoeia raw material, the pharmacist's own judgement; "cannot simply be used" (IGJ) | cjeu-2015-abcur, nl-gmw-art-40-handelsvergunning, igj-eigen-bereidingen-apotheek |
| 5. A clinical trial (two KeyNumbers, fold "How to look for a trial, and what to expect") | No BPC-157 trial in the Netherlands; two retatrutide trials with Dutch sites; METC approval, insurance, Onderzoekmetmensen.nl, the EU trial website, CCMO, rights under Regulation 536/2014 | ctgov-nl-be-peptide-search-2026-10-22, ccmo-ivo-meedoen, ccmo-achtergrond-meedoen, ema-clinical-trials-regulation, eu-regulation-536-2014 (ctgov-nct06383390 and ctgov-nct07165028 are still cited on the new page) |
| 6. A compassionate use programme (figure `compassionate-use-criteria`) | The CBG's three criteria; the manufacturer applies; no peptide on the CBG list | cbg-compassionate-use-criteria, cbg-compassionate-use-list, eu-regulation-726-2004 |
| What this means for you | Checklist with the Dutch routes; WGBO art. 448 information duty; "kept narrow on purpose" (CJEU Commission v Poland) | nl-wgbo-art-448-information, igj-2026-off-label-standpunt, igj-leveren-op-artsenverklaring, ccmo-achtergrond-meedoen, cjeu-2012-commission-v-poland |

## legal/research-use-only.mdx

Snapshot: `snapshot-2026-10-23/content/pages-en/legal/research-use-only.mdx`.

| Section (before) | What it said | Cite ids removed with it |
|---|---|---|
| Frontmatter | Description and summary "In EU law, what decides is how a product is sold and what it does"; `related: legal/eu, legal/nl` | – |
| Opening figure, row "What it does not mean"; the paragraph under it | No regulator approval (Directive 2001/83/EC); licence number, leaflet, maker (Directive, IGJ Q&A) | eu-directive-2001-83, igj-qa-zonder-handelsvergunning |
| "Why the label does not decide what a product is" (figure `ruo-eu-reasoning`) | The EU two-limb test (Directive 2001/83/EC), presentation as a whole and form as a clue (CJEU Van Bennekom), function (CJEU Hecht-Pharma), "in doubt, medicines law wins"; the FAMHP's "not a valid argument" | eu-directive-2001-83, cjeu-1983-van-bennekom, cjeu-2009-hecht-pharma, famhp-postal-seizure-qa |
| Fold "Where the law is less clear" | No EU ruling on RUO labels; the function test's limits (CJEU D and G); presentation often decides | cjeu-2014-d-and-g, cjeu-2009-hecht-pharma, cjeu-1983-van-bennekom |
| "What the label changes in each country": NL and BE columns, link line | NL: licence needed (Gmw art. 40), customs and IGJ seize (IGJ 2025 Shield, Gnw art. 115), fine for a first parcel unknown (IGJ); BE: licence (1964 law), FAMHP seizes, a warning the first time; "See the Netherlands and Belgium" | nl-gmw-art-40-handelsvergunning, be-medicines-law-1964, igj-2025-shield-seizures, nl-gnw-art-115-seizure, famhp-postal-seizure-qa, igj-toezicht-online-medicijnen, igj-2025-online-nepapotheken |
| "What the label means for you" (the licensed-vs-RUO `<Compare>`), EU-law cells | GMP and GMP active substances, EU sterile rules (EudraLex Vol. 4), batch release, pharmacovigilance system and leaflet under Directive 2001/83/EC; "no one has to" (IGJ); report to Lareb or the FAMHP | eu-directive-2001-83, eudralex-volume-4-gmp, igj-online-medicijnen, lareb-bijwerkingen-melden, famhp-adverse-reaction-qa |
| Practical steps list, its source line | Cited the IGJ and FAMHP pages | igj-online-medicijnen, famhp-adverse-reaction-qa |

The US section, the Piatkowski lab test, the Belcourt editorial and the steps themselves stay; the licensed-vs-RUO
comparison is now sourced to US, UK, Canadian and Australian rules (notes, research/refocus-notes/legal-en-b.md).

## legal/sport-and-doping.mdx

Snapshot: `snapshot-2026-10-23/content/pages-en/legal/sport-and-doping.mdx`.

| Section (before) | What it said | Cite ids removed with it |
|---|---|---|
| Frontmatter | `related: legal/nl, legal/de` | – |
| Intro paragraph | "Criminal law on doping ... see the Netherlands, Germany and the UK" | – |
| "Who the rules cover": Lead, figure `who-is-tested-nl-be`, paragraph under it | Dutch gyms have hardly any tests; top athletes and federation members in NL; more tests at lower levels and in gyms in Belgium; refusing a test two to four years; a Belgian ban applies in NL; the German self-doping offence covers only elite and high-earning athletes | dopingautoriteit-controles-belgie, dopingautoriteit-eigen-kracht, de-antidopg-4 |
| Fold "How long a ban can be", last sentence | In NL a first violation brings anything from a warning to four years | dopingautoriteit-positieve-test |
| Fold "What changed for 2027", Dutch paragraph | The Dopingautoriteit calls the 2027 changes mostly clarifications; Dutch translation from 1 January 2027 | dopingautoriteit-2027-list-news |
| Fold "Why a label rarely helps you", two Dutch paragraphs | Report a suspected contaminated supplement to the Dopingautoriteit at once and keep the product; during a ban no competing, training or coaching, other federations adopt the ban | dopingautoriteit-positieve-test |
| "Where to ask": Lead, `<JurisdictionCard code="NL" />`, Dutch sentence | "In the Netherlands, that is the Dopingautoriteit"; the Dopingwaaier app with the Dutch 2027 list | dopingautoriteit-2027-list-news |

## legal/whats-changing.mdx

Snapshot: `snapshot-2026-10-23/content/pages-en/legal/whats-changing.mdx`.

| Section (before) | What it said | Cite ids removed with it |
|---|---|---|
| Frontmatter | Description "the EU medicines reform ... enforcement in Europe"; summary "Nothing that happens in the US changes the law in the Netherlands or the EU"; `related: legal/eu, legal/nl` | – |
| Paragraph under the tracker | "see the pages on the Netherlands, the EU, Germany, the UK and the US" | – |
| US fold, point 5 | "None of these is an approved medicine in the EU, the UK or the US"; "changes nothing in the EU or the Netherlands" | ema-medicines-search, nl-geneesmiddelenwet |
| "The European Union" section (figure `eu-reform-steps`, fold "Why the EU reform matters for peptides") | The EU pharmaceutical reform: agreement 11 December 2025, committee 18 March 2026, Council position 1 October 2026, Parliament second reading indicated for 23 November 2026, transition to 2028; the Directive as the basis of NL, DE and BE law | ema-pharma-reform-page, ep-oeil-2023-0132-cod, ep-oeil-2023-0131-cod, eu-directive-2001-83 |
| Sport fold, Dutch paragraph | The Dopingautoriteit on the 2027 changes; check medicines again | dopingautoriteit-2027-list-news |
| "Enforcement in the UK, Germany and the Netherlands" (figure `europe-enforcement-watch`, fold) | Germany: the yearly doping list in the Bundesgesetzblatt (23 December 2025), AntiDopG §§ 2 and 6 and its annex (TB-500 named, BPC-157 not); NL: IGJ reports about illegal web shops (114 in 2024, 187 to early October 2025), IGJ powers. The UK row stays, in the new UK/Canada/Australia section | de-bgbl-2025-ii-312, de-antidopg-2, de-antidopg-anlage, de-antidopg-6, igj-2025-online-nepapotheken, igj-toezicht-online-medicijnen |
| Checklist | "the European Parliament's register" among the sources we check | – |

## src/i18n/en/glossary/legal-b.json

Snapshot: `snapshot-2026-10-23/i18n/en/glossary/legal-b.json`. Ten entries removed (German law terms and one EU
law-making term), with their definitions as they were there:

| Id | Term | What it defined |
|---|---|---|
| arzneimittelgesetz | Arzneimittelgesetz (AMG, German Medicines Act) | The German Medicines Act |
| fertigarzneimittel | Fertigarzneimittel | German legal term for a ready-made medicine needing a licence |
| inverkehrbringen | Inverkehrbringen | German legal term for putting a product on the market |
| heilmittelwerbegesetz | Heilmittelwerbegesetz (HWG) | The German law on advertising for medicines |
| anti-doping-gesetz | Anti-Doping-Gesetz (AntiDopG) | The German anti-doping law |
| nicht-geringe-menge | nicht geringe Menge | "Not a small amount" under the German anti-doping law |
| ordnungswidrigkeit | Ordnungswidrigkeit | German administrative offence |
| bundesgesetzblatt | Bundesgesetzblatt (BGBl) | The German federal law gazette |
| paul-ehrlich-institut | Paul-Ehrlich-Institut (PEI) | German federal institute for vaccines and biomedicines; side-effect portal with the BfArM |
| second-reading | second reading | A late stage in making an EU law |

No other glossary file pointed to these ids (checked: their `see_also` links were only inside legal-b.json).

## src/i18n/en/tracker.json and src/data/tracker.yaml (items English shows)

No item was deleted. Two texts of items English shows lost a European sentence; their old values are saved in
`research/for-nl-site/i18n-replaced-en.json` under `"tracker.json"` (written there by the data group on 24 October
2026; checked by this group against `git show nl-source-2026-10-23:src/i18n/en/tracker.json`):

| Item | What it said | Where now |
|---|---|---|
| `us-pcac-2026-peptide-vote` (summary, next) | "None of them is an approved medicine in the EU, the UK or the US"; "Nothing changes in the EU or the Netherlands"; Federal Register date 22 October 2026 | now the US, UK, Canada and Australia, and "nothing outside the US" |
| `wada-2027-prohibited-list` (summary) | "The Dutch Doping Authority will publish its Dutch translation from 1 January 2027" | replaced by UK Anti-Doping's note; the Dutch source stays in `local_sources: { NL: [dopingautoriteit-2027-list-news] }` |

Two source ids left the `sources` lists of US items English shows: `ema-medicines-search` and `nl-geneesmiddelenwet`
(item `us-pcac-2026-peptide-vote`; they supported "not approved in the EU" and "changes nothing in the Netherlands").
Both stay registered in `src/data/sources/`. The text of the hidden items `eu-pharma-reform`, `de-doping-list-gazette`
and `nl-igj-online-sellers` is unchanged.
