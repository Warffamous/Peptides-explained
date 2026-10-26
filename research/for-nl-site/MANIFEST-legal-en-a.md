# Manifest: legal-en-a (24 October 2026)

Group `legal-en-a` (the legal section's country pages) for the English refocus. Everything below left the English site
and is kept for the Dutch site. Full texts: the snapshot (`research/for-nl-site/snapshot-2026-10-23/…`) or
`git show nl-source-2026-10-23:<path>` (tag at commit a8a259d). **Re-check every legal fact before reuse** (last checked
20 to 23 October 2026).

## 1. Whole pages removed from English (`git rm`)

| English page (route) | What it held | Full text | New home on the Dutch site |
|---|---|---|---|
| `legal/nl` (`/en/legal/nl/`) | "Peptides and Dutch law: what the Geneesmiddelenwet says": what counts as a medicine, selling, importing, advertising, IGJ enforcement and fines, NL contacts and reporting (41 `<Cite>` tags) | `snapshot-2026-10-23/content/pages-en/legal/nl.mdx`; `git show nl-source-2026-10-23:src/content/pages/en/legal/nl.mdx` | The core Dutch legal page (`/nl/legal/nl/`, written in Dutch) |
| `legal/eu` (`/en/legal/eu/`) | "Peptides and EU law: the rules behind every national law": Directive 2001/83/EC, the licence rule and its exceptions, advertising, falsified medicines, trials, the EU pharma reform (37 `<Cite>` tags) | `snapshot-2026-10-23/content/pages-en/legal/eu.mdx`; `git show nl-source-2026-10-23:src/content/pages/en/legal/eu.mdx` | Dutch site, EU page (`/nl/legal/eu/`) |
| `legal/be` (`/en/legal/be/`) | "Peptides and Belgian law: the 1964 medicines law and the FAMHP": ordering by post, access routes, advertising, doping, reporting (31 `<Cite>` tags) | `snapshot-2026-10-23/content/pages-en/legal/be.mdx`; `git show nl-source-2026-10-23:src/content/pages/en/legal/be.mdx` | Dutch site, Belgium page for Flemish readers (`/nl/legal/be/`) |
| `legal/de` (`/en/legal/de/`) | "Peptides and German law: what the Arzneimittelgesetz says": medicine definition, selling, bringing in, advertising, the anti-doping law, reporting (51 `<Cite>` tags) | `snapshot-2026-10-23/content/pages-en/legal/de.mdx`; `git show nl-source-2026-10-23:src/content/pages/en/legal/de.mdx` | A future German site (`/de/legal/de/`); the Dutch site may link it |

Each file was confirmed byte-identical to its snapshot copy and to the tag before removal. Their sources stay registered
(`src/data/sources/legal-a.yaml`, `legal-b.yaml`, `shared.yaml`), and their heroes stay mapped for `nl`/`de` in
`src/data/heroes.yaml` (`legal/nl`, `legal/be`, `legal/eu`: `{ nl: … }`; `legal/de`: `{ de: … }`). The validator now warns
"hero for legal/nl … no such page (yet)": expected until the Dutch pages exist.

## 2. Sections cut from pages that stay

| Page | Section | What it said | Cite ids removed (European framing) | Full text |
|---|---|---|---|---|
| `legal/index` | frontmatter `description` and `summary` items 2–3 | The section covered "the Netherlands, Belgium, Germany, the UK, the EU and the US"; "In the EU, a product sold to heal or change the body likely counts as a medicine"; "In every EU country, you may not sell or advertise a medicine with no licence" | – | `git show nl-source-2026-10-23:src/content/pages/en/legal/index.mdx` (lines 4–9) |
| `legal/index` | "Which page answers which question" map | Rows for Dutch, Belgian and German law and "What are the EU rules behind it?" (links to the four removed pages) | – | same file, lines 29–34 |
| `legal/index` | body paragraph after the map | "Every EU country follows the same basic rules": the medicine definition, the licence rule and the advertising ban, from Directive 2001/83/EC | `eu-directive-2001-83` | same file, line 42 |
| `legal/index` | "Contacts in the Netherlands and the EU" | Lead "In the Netherlands: Lareb for side effects, the IGJ for illegal sellers. The EMA covers the EU." and the NL and EU contact cards (`<JurisdictionCard code="NL" />`, `code="EU"`) | – | same file, lines 48–54 |
| `legal/us` | intro paragraph | "Nothing the FDA decides changes the law in the Netherlands or the rest of the EU." | `nl-geneesmiddelenwet` | `git show nl-source-2026-10-23:src/content/pages/en/legal/us.mdx` (line 43) |
| `legal/us` | "The five points to keep in mind about this vote", point 5 | "None of these is an approved medicine in the EU, the UK or the US … it would change nothing in the EU or the Netherlands." (now: the US, the UK, Canada and Australia; "nothing outside the US") | `ema-medicines-search`, `nl-geneesmiddelenwet` | same file, line 160 |
| `legal/uk` | "What counts as a medicine" | "They are the same two tests as in EU law." | `eu-directive-2001-83` | `git show nl-source-2026-10-23:src/content/pages/en/legal/uk.mdx` (line 57) |

No other sentence, cite, claim, number or caveat was removed from `legal/index`, `legal/us` or `legal/uk` (no-loss check
in `research/refocus-notes/legal-en-a.md`).

## 3. Glossary terms moved out of `src/i18n/en/glossary/legal-a.json`

Full entries (term, aliases, definition, see_also): `snapshot-2026-10-23/i18n/en/glossary/legal-a.json` or
`git show nl-source-2026-10-23:src/i18n/en/glossary/legal-a.json`. For the Dutch glossary (translate from the snapshot).

| Id | Term | Why it left English |
|---|---|---|
| `geneesmiddelenwet` | Geneesmiddelenwet (Dutch Medicines Act) | Dutch law |
| `cjeu` | Court of Justice of the European Union | EU law |
| `eu-directive` | directive (EU directive) | EU law |
| `eu-regulation` | EU regulation | EU law |
| `centralised-procedure` | centralised procedure | EU approval route |
| `magistral-preparation` | magistral preparation (magistrale bereiding, apotheekbereiding) | Dutch/Belgian pharmacy route |
| `administrative-fine` | administrative fine (bestuurlijke boete; "such as the IGJ") | Dutch enforcement |
| `economic-offences-act` | Economic Offences Act (WED) | Dutch law |
| `nvwa` | NVWA | Dutch authority |
| `eu-common-logo` | EU common logo | EU online-pharmacy rule |
| `safety-features` | safety features (unique identifier, "in the EU") | EU falsified-medicines rule |
| `clinical-trials-regulation` | Clinical Trials Regulation (EU 536/2014) | EU law |
| `ctis` | CTIS | EU trials system |
| `ccmo` | CCMO | Dutch ethics body |
| `metc` | METC (medisch-ethische toetsingscommissie) | Dutch ethics committee; English now has a neutral `ethics-committee` entry in `legal-en.json` |
| `famhp` | FAMHP (FAGG, AFMPS) | Belgian agency |
| `medical-need-programme` | medical need programme | Belgian route |
| `out-of-court-settlement` | out-of-court settlement (minnelijke schikking, transactie) | Dutch/Belgian procedure |
| `eea` | EEA | EU framing |
| `mra-country` | MRA country | EU framing |
| `big-register` | BIG register | Dutch register |

Changed in place (kept on English):
- `pharmacopoeia`: aliases "European Pharmacopoeia" and "Ph. Eur." removed (European framing); term and definition
  unchanged.
- `nado`: the definition ended "Belgium has four." and `see_also` included `dopingautoriteit`; it now names UK Anti-Doping,
  Sport Integrity Canada and Sport Integrity Australia, with `see_also: [wada, ukad]`. Old text in the snapshot file.

Ids elsewhere that still point at a moved term in `see_also` (files of other groups; the glossary index drops a dangling
link, so nothing breaks): `history.json` (`centralised-procedure`, `eu-directive`, `geneesmiddelenwet`), `legal-b.json`
(`administrative-fine`, `eu-directive`, `eu-regulation`), `stubs-a.json` (`centralised-procedure`), `final-qa.json`
(`ctis`).
