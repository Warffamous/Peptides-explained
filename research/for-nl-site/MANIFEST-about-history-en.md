# Manifest: about-history-en (24 October 2026)

What the English refocus of the about, history, basics and evidence pages cut or reworded, and where the full
original text is. Every original is at the tag: `git show nl-source-2026-10-23:<path>`, and in
`research/for-nl-site/snapshot-2026-10-23/content/pages-en/<section>/<page>.mdx` (pages) or
`research/for-nl-site/snapshot-2026-10-23/i18n/en/glossary/<file>.json` (glossary). No EU or NL data was deleted:
the EU and NL timeline events (`src/data/timeline.yaml`, `src/i18n/en/timeline.json`) all stay and are hidden on
English by their `jurisdictions` tags. Notes for the fact-checker: `research/refocus-notes/about-history-en.md`.

## about/index.mdx (`src/content/pages/en/about/index.mdx`)

| Section | What it said | Now |
|---|---|---|
| Intro paragraph | "This site is for people in the Netherlands and the rest of Europe who want to understand peptides." | Audience: the US, the UK, Canada and Australia, with notes for Ireland and New Zealand |
| Fold "What we never do" | "In the Netherlands, any advertising for a medicine without a licence is forbidden" (`nl-gnw-art-84-85-advertising`) | Kept as the publisher line (published from the Netherlands, so Dutch law decides what it may say), plus the UK, Canadian and Australian rules |

## about/editorial-policy.mdx

| Section | What it said | Now |
|---|---|---|
| Fold "Why the line is where it is" | "Dutch law forbids any advertising ..." as the site's frame; link "See [Dutch law](/en/legal/nl/)" | Same law as the publisher's law (marked publisher line); the link to legal/nl is gone (the page left English); the readers' countries' rules added |
| Diagram "review-status" | "Independent medical review by a named doctor in the Dutch BIG register"; "Review of the Dutch translation by a professional translator" | "a named doctor on a public medical register"; "each translation" |
| Fold "What each review label means" | "For a doctor, we will show their registration in the BIG register, the Dutch public register of licensed health professionals" | Register named per country (state medical board, GMC, provincial college, Ahpra) |
| Section "Translations" | Lead "Is the Dutch page the same as the English one?"; rows "Legal pages: adapted ... each country's own legal terms" and "Dutch pages give the Dutch number" | Each language covers its own readers' countries; "a language read mainly in one country may give that country's number" |

## about/funding.mdx

| Section | What it said | Now |
|---|---|---|
| "Why it has to be this way", paragraph after the diagram | "Many peptides on this site, such as BPC-157, have no licence as a medicine in the EU" (`ema-medicines-search`); "Our page on [Dutch law](/en/legal/nl/) explains this in more detail" | Not approved in the US, the UK, Canada or Australia (status searches); publisher line; link to the legal index |
| Diagram "why-no-commerce", item 1 | "Dutch law counts any attempt ..." | "The law that applies to us counts ..." (same sources, cited under the diagram) |
| Frontmatter `related` | `legal/nl` | `legal` |
| Privacy | Dutch cookie law (Telecommunicatiewet 11.7a) | Kept, as the publisher's law ("We are published from the Netherlands, and ...") |

## history/how-we-got-here.mdx

| Section | What it said | Full text |
|---|---|---|
| Diagram "three-checks-and-when" | A "European Community 1965" entry in each row (Directive 65/65/EEC; `eu-directive-65-65`) | tag / snapshot `pages-en/history/how-we-got-here.mdx`, lines 27–37 |
| Intro | "authorised in the EU or approved in the US" | lines 39 |
| Fold "The Netherlands in 1958: a register for packaged medicines" | The Wet op de Geneesmiddelenvoorziening of 28 July 1958 (`nl-wog-1958`), its registration test, article 37 and the unknown start date | lines 57–61 |
| Section "Europe's answer" (Lead, TimeStrip of NL and EU laws and the EMA, the European Commission's thalidomide-impetus paragraph) | `nl-wog-1958`, `nl-geneesmiddelenwet-2007-version`, `eu-directive-65-65`, `eu-directive-2001-83-original`, `eu-regulation-2309-93`, `ema-history`, `ec-legal-framework-medicines` | lines 131–143 |
| Fold "What Directive 65/65 required" | Proprietary medicines, 18 months to transpose, test results, grounds for refusal, 120 days, five-year licence; the directive's own balance; Directive 2001/83/EC repealing it | lines 145–151 |
| Fold "The Dutch line: from 1958 to today" | The Geneesmiddelenwet of 2007, article 40 (`nl-gmw-art-40-handelsvergunning`), link to legal/nl | lines 153–157 |
| Fold "One agency for Europe" | The EMA (1993/1995), the central route (`eu-regulation-726-2004`), semaglutide and tirzepatide authorised EU-wide (`ema-epar-ozempic`, `ema-epar-mounjaro`) | lines 159–163 |
| "What the checks give you" | Diagram row "refusal if harmful in normal use" and cites `eu-directive-65-65`, `ema-history` | lines 175–182 |
| Compare "Four routes in the EU, the Netherlands and the US" | Columns Conditional authorisation (EU), Compassionate use (EU), Named-patient use (NL) (`ema-conditional-marketing-authorisation`, `ema-compassionate-use`, `cbg-compassionate-use-criteria`, `igj-leveren-op-artsenverklaring`); "legal routes ... for a patient in the Netherlands" | lines 231–241 |
| Fold "The routes in more detail" | Bullets: accelerated assessment (EU, `ema-accelerated-assessment`), PRIME (`ema-prime`), conditional marketing authorisation (EU, 2006), exceptional circumstances with afamelanotide (`ema-epar-scenesse`, `eu-directive-2001-83-original`), compassionate use (EU/NL), named-patient use (artsenverklaring) | lines 243–253 |
| Fold "Why these routes rarely help" | "the EMA has no record of an EU authorisation or application, and none has an approved Dutch compassionate-use programme" (`ema-medicines-search`, `cbg-compassionate-use-list`) | lines 263–267 |
| Frontmatter | `further_reading: [ec-pharma-legislation-timeline]` | line 22 |

Kept as marked history or evidence: thalidomide in Germany and Europe (history), the 1992 drug-lag review naming West
Germany (history), the EMA's review times (Downing 2012), the EMA's 2021 repurposing pilot, the EMA cancer-approval
study (Davis 2017) and the EMA's ten-year review of conditional authorisation (evidence).

## history/timeline.mdx

| Section | What it said | Full text |
|---|---|---|
| Diagram "timeline-four-threads", Rules row | "a licence before sale (European Community, 1965)" (`eu-directive-65-65`); cite `ema-2023-falsified-ozempic` | tag lines 26–35 |
| Intro | "and Europe a licence before sale in 1965" | line 38 |
| Fold "How to read the dates" | "the date the European Commission granted the EU marketing authorisation" (`ema-epar-ozempic`) | line 42 |
| Fold "What this timeline leaves out" | "most national laws outside the Netherlands, the EU and the US" | line 51 |
| Diagram "timeline-cause-and-effect" | "a licence before sale (European Community, 1965)"; "conditional authorisation (EU, 2006)" (`ec-legal-framework-medicines`, `ema-conditional-marketing-authorisation`) | lines 66–76 |
| Fold "The pattern, event by event" | The European Commission's thalidomide-impetus sentence; "The EU added conditional marketing authorisation in 2006 and the PRIME scheme in 2016" (`ema-prime`); the EMA's falsified-Ozempic warning as a cite; the PCAC paragraph's "in the EU" and "changes nothing in the EU or the Netherlands" (`ema-medicines-search`, `nl-geneesmiddelenwet`) | lines 79–89 |

## history/index.mdx

| Section | What it said | Full text |
|---|---|---|
| Intro | "the US and Europe began to require proof that a medicine works, and a licence before sale" (`eu-directive-65-65`); cite `ema-epar-ozempic`; "an authorised medicine ... has passed checks" cited to `eu-directive-2001-83-original` | tag lines 32–38 |

## basics/pharmacokinetics.mdx

| Section | What it said | Now |
|---|---|---|
| Throughout | "the EU label" / "EU product information" for semaglutide facts (`ema-epar-wegovy`, `ema-epar-rybelsus`) | The US labels (`fda-label-wegovy`, `fda-label-rybelsus-ozempic-tablets`); same numbers. Facts only the European product information gives stay, marked as evidence (neutral endopeptidase; native GLP-1 half-life; liraglutide 55%; dulaglutide absorption; "no specific antidote") |
| Kidney filter fold; GLP-1 ladder | "Exenatide (Byetta, authorised in the EU until 1 January 2026)"; "(no longer authorised in the EU)" (`ema-epar-byetta`) | Byetta's US label (`dailymed-byetta-label`) for the same facts (renal filtration then breakdown; 2.4 hours; twice a day) |

## basics/why-not-a-pill.mdx

| Section | What it said | Now |
|---|---|---|
| Compare (semaglutide tablet vs orforglipron) | Row "Authorised in the EU?": Rybelsus since 2020 (`ema-epar-rybelsus`); orforglipron "Not yet. The EMA's medicines committee recommended it on 15 October 2026; the European Commission had not yet decided" (`ema-epar-foundayo-opinion`, `ema-2026-foundayo-chmp`) | Rows for the UK, Canada and Australia |
| Fold "The rules on the label" | "the EU label for Rybelsus asks people to take the tablet on an empty stomach after fasting for at least eight hours, with no more than half a glass of water ..." | The US label's instruction |
| Key numbers, fold texts | "EU product information" / "the EU label" | US labels; the EU-only facts (laboratory basis of SNAC; 100% variation; 2 to 4 in 100 with no exposure; the EMA's study counts) stay, marked as evidence |

## basics/how-signalling-works.mdx, basics/what-is-a-peptide.mdx

| Page | What it said | Now |
|---|---|---|
| how-signalling-works | "the EU label reports no clinically relevant effect on how fast the stomach empties" | Kept, attributed to the European product information and marked; the US label line added |
| what-is-a-peptide | "its EU label credits ..." (dulaglutide); "EU guidance lists the impurities"; "The EU and US labels for semaglutide state ... yeast"; "A Dutch case report" (Stammers 2026, a Dutch-language journal); `ema-epar-byetta` as a cite | Attributed and marked as evidence; the US label for the yeast; "A 2026 case report" (the paper, its hospitals and the national-regulator point are in `stammers-2026-insulin-falsified-semaglutide`); Byetta's US label |

## evidence pages

| Page | What it said | Now |
|---|---|---|
| evidence-grading | "Semaglutide was authorised in the EU in 2018 after large trials" (`ema-epar-ozempic`) | US approval 2017 (`fda-drugsatfda-ozempic`); the EMA safety committee's NAION conclusion kept (marked) with the MHRA's 2026 warning |
| the-translation-gap | "In Europe, the first dose for healthy volunteers should stay below ..." | "European guidance says ..." (marked); every EMA guideline sentence kept, marked |
| conflicts-of-interest | "The EU safety committee concluded ..." | The European Medicines Agency's safety committee (marked), plus the MHRA |

## Glossary (`src/i18n/en/glossary/history.json`, `evidence.json`)

Full entries: `git show nl-source-2026-10-23:src/i18n/en/glossary/history.json` (and the snapshot copy).

| Entry | What it said | Now |
|---|---|---|
| `wet-op-de-geneesmiddelenvoorziening` | The Dutch medicines law of 1958; replaced by the Geneesmiddelenwet on 1 July 2007 | Removed from English |
| `directive-65-65` | The first medicines law of the European Economic Community, 26 January 1965 | Removed from English (no English page uses it) |
| `accelerated-assessment` | A faster EU review, up to 150 days instead of 210 | Removed from English (unused) |
| `prime-scheme` | The EU's PRIME programme (2016) | Removed from English (unused) |
| `conditional-marketing-authorisation` | "An EU licence for a medicine that meets an unmet need ..." | Same definition without "EU" |
| `exceptional-circumstances-authorisation` | "An EU licence for a medicine whose full benefits ..." | Same definition without "EU" (kept: melanotan-ii.json links to it) |
| `orphan-medicine` | "Special laws in the US (since 1983) and the EU (since 2000) ..." | US law only |
| `mabel` (evidence.json) | "European guidance asks for it when the first dose for people is chosen" | "Some regulators ask for it ..." |

`basics.json`: no European term found; unchanged.
