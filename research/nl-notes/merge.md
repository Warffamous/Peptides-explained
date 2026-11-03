# Merge notes: Dutch research into the site data (27 October 2026)

Assignment "merge" of the Dutch site (owner's decisions of 27 October 2026; `research/nl-spec/content-brief.md`).
Input: the fact-checked research in `research/nl/` (nl-law, nl-care, nl-help, eu-status, be-notes), each read with its
"Fact-check (independent, 27 October 2026)" section (its corrections win; an UNRESOLVED point is never merged as a fact),
the 21 status files in `research/nl/status/` and the five source files in `research/nl/sources/`.

Result: `npx tsx scripts/validate-content.ts` → **0 errors**, 168 warnings (158 before the merge; the new ones are listed
in part 8). `npx tsx scripts/check-locale-residue.ts` → 0 error/frame hits on English and Dutch, 1 Dutch warning (part 5).
The commerce check's source scan (`scripts/check-no-commerce.ts` on a one-page scratch dist, since no build may run) finds
no URL in `src/` or `config/` that breaks the allowlist or the new Dutch tokens.

Nothing in `src/content/**/en/` or `src/i18n/en/` was touched. No build, commit or push. Files changed only within the
assignment: the five new `src/data/sources/nl-research-*.yaml`, the EU and NL rows of the 21 `src/data/compounds/*.yaml`,
the NL, BE and EU entries (and one header line) of `src/data/jurisdictions.yaml`, two EU/NL items of
`src/data/tracker.yaml`, `config/link-allowlist.json` (hosts added), `tokens.nl` of `config/commerce-tokens.json`, the new
`locales.nl` entry of `config/locale-residue.json`, this file, and a scratch test page
`research/nl-notes/residue-test/if-something-goes-wrong.mdx` (not a site page). `src/data/jurisdictions.yaml`,
`src/data/tracker.yaml` and four compound files (kpv, melanotan-ii, pt-141, retatrutide) were in CRLF in the working copy
and are now LF, as asked (git normalises line endings on this machine, so this shows no diff).

---

## 1. Sources: `src/data/sources/nl-research-<topic>.yaml`

| New file | From | Entries | Dropped (already registered) |
|---|---|---|---|
| `nl-research-be-notes.yaml` | `research/nl/sources/be-notes.yaml` | 26 | none |
| `nl-research-eu-status.yaml` | `research/nl/sources/eu-status.yaml` | 45 | none |
| `nl-research-nl-care.yaml` | `research/nl/sources/nl-care.yaml` | 34 | none |
| `nl-research-nl-help.yaml` | `research/nl/sources/nl-help.yaml` | 37 (of 39) | 2, below |
| `nl-research-nl-law.yaml` | `research/nl/sources/nl-law.yaml` | 40 | none |

182 entries in all (the validator now counts 1,893 sources, was 1,711). Each file starts with a header: where it comes
from, "DO NOT EDIT … put new sources in src/data/sources/nl-<group>.yaml", the dropped ids and what to cite instead, then
the research file's own header (verification method, reused ids, hosts). Entries and comments are copied as the research
recorded them; every entry passes `sourceSchema`.

**Duplicates found and how they were handled** (checked by id, URL with and without fragment, DOI and PMID against all
of `src/data/sources/`, and across the five research files):

- `igj-2026-10-gestolen-medicijnen` (nl-help) = `igj-2026-10-stolen-medicines` (safety-b.yaml), same IGJ news item and
  URL. **Not copied: cite `igj-2026-10-stolen-medicines`.** (nl-care's header, which named the nl-help id, now says so.)
  The existing entry's `accessed` is 22 October; the research re-read it on 27 October (owner of safety-b.yaml: update
  `accessed` if wanted).
- `nl-zvw-art-19-eigen-risico` (nl-help) and `nl-zvw-art-19-eigen-risico-2027` (nl-care): the same provision and URL
  (Zvw art. 19, text from 1 January 2027). **Kept the nl-care id** (fuller title, the Staatscourant reference in the
  container); not copied: `nl-zvw-art-19-eigen-risico` → cite `nl-zvw-art-19-eigen-risico-2027`. The note of
  `rijksoverheid-2026-09-vws-begroting` pointed at the dropped id and now points at the kept one (the only text change in
  an entry).
- **Kept on purpose, same URL as existing ids:** `nl-gnw-art-1-recept` (nl-care, art. 1(1) s and pp) and
  `nl-gnw-art-1-lidstaat-werkzame-stof` (nl-law, art. 1(1) s, x.1, cc, dd, ii, ll, lll) share the URL of
  `nl-gmw-art-1-geneesmiddel` (guides.yaml, art. 1(1)(b)) and `nl-gnw-art-1-reclame` (legal-a.yaml, art. 1(1) hh, xx,
  ijij): all four are the one anchor of Gnw art. 1 on wetten.overheid.nl. The repository already registers art. 1
  per definition (two ids with that URL), each title naming its sub-points; dropping the new two would make a citation
  of "recept" or "werkzame stof" print "definitie van geneesmiddel". Same practice, so kept. (Not a duplicate id; the
  validator does not warn.)
- Other same-page entries (Gnw arts. 38, 62, 83, 116; WGBO art. 7:460; Wet BIG art. 36) have their own article anchor:
  distinct sources.

**Format fixes:** none were needed beyond the allowlist (part 4): every entry already passed the schema, and every URL in
the files (notes and comments included, which the commerce check scans) is now on an allowlisted host. The one note URL
on a host the research did not propose, `https://www.fagg.be/nl/bijwerking` (where the FAGG's dead short address lands,
be-notes header and note), is covered by adding `www.fagg.be`, the FAGG's own Dutch-name host.

Validator warnings on these files: nine Dutch guidelines without DOI or PMID (`bcfi-2026-tirzepatide-pennen`,
`fk-liraglutide`, `knmg-wie-mogen-voorschrijven`, `nhg-2018-standpunt-offlabel`, `nhg-standaard-obesitas-2025`,
`knmp-richtlijn-bereiden-2016`, `knmp-faq-apotheekbereiding`, `lci-2019-prikaccidenten`,
`nhg-2025-gewichtsreducerende-medicatie`). They have none (professional guidance on the web); the same warning exists for
the English guideline sources. They stay.

---

## 2. Status: the EU and NL rows of `src/data/compounds/*.yaml`

Applied from `research/nl/status/<slug>.yaml` (fact-checked). No row was deleted; no US, UK, CA, AU, DE, BE or WADA row,
study, product or other field was touched. One comment line above each EU row records the check. Sources: the status
file's list first, then the data file's own sources that the research says "may stay" (the FDA PCAC briefings and
`chembl-ipamorelin` on EU rows, `cbg-geneesmiddeleninformatiebank` on NL rows); removed only where the research says the
source belongs elsewhere.

| Compound | Row | Before → after |
|---|---|---|
| all 21 | EU, NL | `as_of` 2026-10-20/22/23 → **2026-10-27** (EMA medicines and orphan JSON, under-evaluation list of 5 Oct 2026, CBG register searches of 27 Oct 2026; eu-status §1 A) |
| aod-9604, cjc-1295, hexarelin, ipamorelin, nad-precursors | EU | + `ema-orphan-designations-json`, `ema-under-evaluation-2026-10` |
| bpc-157, epitalon, kpv, melanotan-ii, mots-c, selank, semax | EU | + `ema-orphan-designations-json`, `ema-under-evaluation-2026-10` |
| ghk-cu, pt-141 | EU | + `ema-orphan-designations-json` |
| tb-500 | EU | + `ema-under-evaluation-2026-10` |
| aod-9604, cjc-1295, ghk-cu, hexarelin, ipamorelin, nad-precursors, pt-141, tesamorelin | NL | + `cbg-gib-search-status-2026-10-27` |
| bpc-157, epitalon, kpv, melanotan-ii, mots-c, selank, semax, tb-500, thymosin-alpha-1 | NL | + `cbg-gib-search-status-2026-10-27`, `nl-gmw-art-40-handelsvergunning` |
| semaglutide | EU | + `ema-epar-kayshild`, `ec-union-register-ozempic`, `ema-medicines-json` (status authorised since 2018-02-08, unchanged) |
| semaglutide | NL | sources `ema-epar-ozempic, fk-semaglutide, zin-wegovy-reassessment, cbg-ozempic-shortage` → `ema-epar-ozempic, eu-regulation-726-2004, cbg-gib-search-semaglutide-2026-10-27, cbg-afslankmedicijnen` (the three removed ids support reimbursement and shortage prose, not the authorisation: eu-status §2 item 10; they stay registered for the page's prose) |
| tirzepatide | EU | + `ec-union-register-mounjaro`, `ema-medicines-json` |
| tirzepatide | NL | sources `ema-epar-mounjaro, fk-tirzepatide, fk-regeling-zorgverzekering-bijlage-2-tirzepatide, zin-tirzepatide-obesity-assessment` → `ema-epar-mounjaro, eu-regulation-726-2004, cbg-gib-search-tirzepatide-2026-10-27, cbg-afslankmedicijnen` (same reason) |
| retatrutide | EU | `ema-2026-10-under-evaluation` → `ema-under-evaluation-2026-10` (two ids for one xlsx; eu-status §4 conflict 10); + `ctis-2024-511450-49-00`, `ctis-2025-522674-36-00` (status investigational, unchanged) |
| retatrutide | NL | `cbg-geneesmiddeleninformatiebank` → `cbg-gib-search-status-2026-10-27` (the search itself); + `ctis-2025-522674-36-00` (the Dutch arm of SYNERGY-Outcomes, authorised 4 Feb 2026, start of trial notified 22 Sep 2026) |
| **ss-31** | EU | **status not-authorised → investigational**; + `ctis-2024-511482-11-00` (ReNEW, phase 3), `ctis-2025-523837-25-00` (4TAZPower, phase 3b/4), `ctgov-nct06373731` (the fact-check: ReNEW on ClinicalTrials.gov, sites in five EU states) |
| **ss-31** | NL | **status not-authorised → investigational**; + `cbg-gib-search-status-2026-10-27`, `ctis-2025-523837-25-00` (4TAZPower authorised for the Netherlands on 27 July 2026, recruitment pending) |
| tesamorelin, thymosin-alpha-1 | EU | `as_of` only (tesamorelin stays **withdrawn** since 2012-06-21, not refused; thymosin alpha-1 stays not-authorised, the Italian national authorisation unchanged) |

**SS-31 (editorial choice, flagged by the research):** I applied the status file's proposal. It matches the vocabulary
("only available within registered clinical trials") and the UK and CA rows of the same file, which are investigational
for the same trials; the facts (two late-phase EU trials, one authorised for the Netherlands) are fact-checked. Nothing is
authorised, so the badge and the approval answer on Dutch pages do not change (the status file: `approvalFor` falls back
to the category); only the status-table word does. If the editor or the medical reviewer prefers not-authorised
(eu-status §6 questions 5 and 6), set `status: not-authorised` on both rows and keep the sources; nothing else depends on it.

**Not changed, on purpose:** thymosin alpha-1 NL stays not-authorised (the one WMO-approved Dutch study, NL-OMON51992,
shows "Werving nog niet gestart" and whether it ever started is UNRESOLVED; nl-care §5.6); retatrutide NL stays
investigational (started in the Netherlands; whether Dutch participants are enrolled is UNRESOLVED: CTIS shows no Dutch
start of recruitment, OMON and ClinicalTrials.gov disagree).

### EU products: Kayshild and Kyinsu NOT added (left unmerged)

The research found the semaglutide EU product list incomplete: **Kayshild** (EU/1/26/2019, conditional marketing
authorisation 26 March 2026, MASH; EPAR `ema-epar-kayshild`, Dutch SmPC `ema-pi-kayshild-nl`) and, at the editor's choice,
**Kyinsu** (EU/1/25/1992, 24 November 2025, with insulin icodec; `ema-epar-kyinsu`). I could not add them: the validator
requires an `indications` line for **every** product in `authorised_products` on **every** locale's page
(`scripts/validate-content.ts`, "indications: missing localised indication for product"), so a new product makes the live
English page `src/content/compounds/en/semaglutide.mdx` fail, and English content is out of bounds here. To add them, one
change by the English page's owner (or the owner's approval to touch it) must add the product to the data file and an
English `indications` line together; the Dutch page then needs a Dutch line. Ready-made data (from the status file):

```yaml
  - { id: kayshild, name: Kayshild, holder: Novo Nordisk A/S, jurisdiction: EU, authorised: 2026-03-26, route: subcutaneous, label_url: "https://www.ema.europa.eu/en/medicines/human/EPAR/kayshild", label_source: ema-epar-kayshild }
  - { id: kyinsu, name: Kyinsu (with insulin icodec), holder: Novo Nordisk A/S, jurisdiction: EU, authorised: 2025-11-24, route: subcutaneous, label_url: "https://www.ema.europa.eu/en/medicines/human/EPAR/kyinsu", label_source: ema-epar-kyinsu }
```

Dutch SmPC 4.1 wording for the writers is in `research/nl/status/semaglutide.yaml` (`indications_nl_from_smpc`). The
`names.brands` list (shown on the English page too) was not changed either. Until then, the Dutch semaglutide page can
name Kayshild in its prose (cite `ema-epar-kayshild`), and the EU row already cites it. The tirzepatide product (Mounjaro)
was confirmed; no other EU product of any compound exists.

The status files' suggested `regulatory_notes` (English one-liners) and the Dutch indications are for the compound
writers (`src/content/compounds/nl/`), not merged here.

---

## 3. `src/data/jurisdictions.yaml`

Header: one line added, "Dutch entries (NL, BE, EU) re-checked 27 October 2026 from the fact-checked research/nl/
(merge: research/nl-notes/merge.md)." Every card URL below was opened again on 27 October 2026: curl (HTTP 200 and the
wording the entry relies on), and the built-in browser for `www.health.belgium.be` (curl 403) and `www.fagg-afmps.be`
(curl gets a bot-check page): "Dokter van wacht | FOD Volksgezondheid", "Laatst bijgewerkt op 02/04/2026", "Bel 1733
als…"; "Melden van een bijwerking als patiënt | FAGG"; "FAGG | Uw geneesmiddelen en gezondheidsproducten".

**NL** (research/nl/nl-help.md §7.1, as fact-checked): `help` added (was none); regulator, inspectorate, reporting,
anti-doping and medicines law unchanged (nl-law §7 and nl-care §7: all re-verified, no change).

| kind | name | url | source id |
|---|---|---|---|
| urgent-advice | Spoed: je huisarts of de huisartsenpost (Thuisarts) | thuisarts.nl/spoed-wie-bel-je | `thuisarts-spoed-wie-bellen` |
| urgent-advice | Huisartsenpost of spoedeisende hulp? (Rijksoverheid) | rijksoverheid.nl/…/huisartsenpost-spoedeisende-hulp ("Neem altijd eerst contact op met uw huisartsenpost voordat u naar de spoedeisende hulppost gaat") | `rijksoverheid-huisartsenpost-seh` |
| poisons | Vergiftiging: bel je huisarts of de huisartsenpost (NVIC) | nvic.umcutrecht.nl ("Vermoedt u een vergiftiging? Neem dan contact op met uw huisarts (of buiten kantooruren met de huisartsenpost)") | `nvic-umcutrecht` |
| drugs-advice | Drugs Infolijn (Trimbos-instituut) | drugsinfo.nl/contact/ | `drugsinfo-drugs-infolijn` |
| drugs-advice | Verslavingszorg bij jou in de buurt (DRUGSinfo) | drugsinfo.nl/hulpkaart/ ("Ga dan eerst naar je huisarts") | `drugsinfo-hulpkaart` |
| mental-health | 113 Zelfmoordpreventie | 113.nl/heb-je-nu-hulp-nodig/hulplijn ("Bel gratis 113") | `stichting-113-hulplijn` |
| mental-health | Psychische crisis: wat moet je doen? (Thuisarts) | thuisarts.nl/…/iemand-die-ik-goed-ken-heeft-psychische-crisis… ("crisisdienst van de geestelijke gezondheidszorg (ggz)") | `thuisarts-psychische-crisis` |

No national huisartsenpost number exists; none is printed (the existing `pages.jurisdiction.helpNote.NL` says where to
find it). The inspectorate entry stays the IGJ online-medicines page (it leads to the Landelijk Meldpunt Zorg); the schema
has no field for the LMZ itself. Not linked on the card: InEen's finder `www.huisartsenspoedposten.nl` (allowlisted for
the source `ineen-huisartsenspoedposten`; its list may be incomplete, nl-help §5.13) and moetiknaardedokter.nl (a
company's tool: never).

**BE** (research/nl/be-notes.md §7.1, as fact-checked), before → after:

- regulator: "Federal Agency for Medicines and Health Products (FAMHP / FAGG / AFMPS)", famhp.be/en → **"Federaal
  Agentschap voor Geneesmiddelen en Gezondheidsproducten (FAGG)", https://www.fagg-afmps.be/nl**
- reporting: "FAMHP — report a side effect", famhp.be/en/side_effect → **"FAGG: een bijwerking melden als patiënt",
  https://www.fagg-afmps.be/nl/melden_van_een_bijwerking_als_patient** (`fagg-melden-bijwerking-patient`; the FAGG's short
  address www.eenbijwerkingmelden.be ends on "Pagina niet gevonden": not linked)
- anti_doping: (none) → **NADO Vlaanderen, https://www.dopingvrij.vlaanderen/** (`be-nado-vlaanderen-over`)
- help: (none) → urgent-advice "Dokter van wacht: 1733 (FOD Volksgezondheid)" (`be-fod-1733-dokter-van-wacht`), poisons
  "Antigifcentrum" (`be-antigifcentrum-wanneer-bellen`, `be-antigifcentrum-over-ons`), drugs-advice "De DrugLijn (VAD)"
  (`be-druglijn-over-ons`, `be-druglijn-bel`), mental-health "Zelfmoordlijn 1813" (`be-zelfmoordlijn-1813`)
- medicines_law: unchanged (Wet van 25 maart 1964, Justel "tekstbijwerking tot 04-06-2026").
- No inspectorate entry (the research calls it optional; the FAGG is also the enforcement body, and its parcel-seizure
  Q&A belongs on the notes page). Emergency 112 (police 101; 100 is not on the official list).

BE is listed only by the Dutch locale (notes), so the Dutch (Flemish) names are safe.

**EU:** unchanged (eu-status §7: EMA; Directive 2001/83/EC consolidated 1 January 2025 is still the latest consolidation
and the law). A comment records the check and what to change when the new directive is published (24 months after entry
into force; not in the Official Journal on 27 October 2026). No reporting entry (reports go to the national centre).

---

## 4. `config/link-allowlist.json`: hosts added (25)

Each is an official regulator, legislation or court database, health service or public-health body, and each is used by a
merged source or a card entry: `euclinicaltrials.eu` (CTIS public portal; not under .europa.eu), `onderzoekmetmensen.nl`
(OMON), `richtlijnen.nhg.org` (NHG guidelines), `www.bigregister.nl` (BIG-register), `farmanco.knmp.nl` (KNMP shortage
list; `www.knmp.nl` was already listed), `www.113.nl`, `www.drugs-test.nl` (DIMS), `lci.rivm.nl` (RIVM LCI guidelines),
`www.milieucentraal.nl` (household-waste information: needles as kca), `www.huisartsenspoedposten.nl` (InEen's finder of
out-of-hours posts), `www.douane.nl`, `kennisbank.douane.nl`, `uitspraken.rechtspraak.nl`,
`zoek.officielebekendmakingen.nl`, `www.nvwa.nl`, `www.fagg.be`, `112.be`, `www.antigifcentrum.be`, `www.druglijn.be`,
`www.zelfmoord1813.be`, `www.dopingvrij.vlaanderen`, `codex.vlaanderen.be`, `www.riziv.fgov.be`,
`vandenbroucke.belgium.be`, `www.bcfi.be`. Each has its one-line "why" in the file.

Not added (the research advised against it, or nothing cites it): `www.aanbiedersmedicijnen.nl` (the official register of
online sellers: linking it can read as help finding a seller; legal reviewer), `moetiknaardedokter.nl` (a company),
`meldformulier.lareb.nl` (link the lareb.nl page), `landelijkmeldpuntzorg.nl` (redirects to igj.nl), `vergiftigingen.info`
(professionals only), the parked `huisartsenpost.nl` and `huisartsenspoedpost.nl`, `www.aifa.gov.it` (no merged source uses
it), `keuringsraad.nl`, `www.cgr.nl`.

---

## 5. `config/commerce-tokens.json`, `tokens.nl`

Before (10): bestellen, bestel, kopen, koop, korting, kortingscode, winkel, winkelwagen, leverancier, aanbieding.
After (31): + bestelt, bestelling, bestellingen, koopt, te koop, uitverkoop, kortingen, kortingscodes, promotiecode,
winkels, winkelmandje, webshop, webshops, webwinkel, webwinkels, afrekenen, leveranciers, aanbiedingen, prijs, prijzen,
gratis verzending.

How tokens match (`commerceRegex` in `scripts/lib/load.ts`): every locale's tokens apply on every page, case-insensitive,
whole words with Unicode boundaries, in headings, `<Lead question>`, fold, figure and callout titles, labels, aria-labels,
link texts and every URL path in `src/`, `config/` and the built HTML. So compounds never match ("Nobelprijs",
"Laskerprijs", "Wet geneesmiddelenprijzen", "verkoper", "aanbieder"), and a hyphenated form does ("prijs-kwaliteit").

Checked before adding: (a) no URL anywhere in `src/`, `config/` or the merged research sources contains a new token
(scripted scan); (b) no string in `src/i18n/nl/` and no fixed term in `docs/STYLE-NL.md` uses one outside its own list of
words to avoid (§5.6, §7); (c) 23 ordinary Dutch headings pass (among them "Verkoop zonder vergunning is verboden", "Een
bevel en een last onder dwangsom", "Een verkoper melden bij het Landelijk Meldpunt Zorg", "Wordt het vergoed?", the seven
route headings of `/nl/legal-routes/`) and 12 commerce headings are caught; (d) the validator still has 0 errors on the
English pages.

**Does Dutch need a non-commerce exception (`stripNonCommerce`)?** Decided: **no**. English needs one because "order" is
also a legal instrument ("court order"); in Dutch an order of a court or the IGJ is a "bevel", "last (onder dwangsom)",
"beschikking" or "vonnis", never a "bestelling", so "bestelling" only ever means a purchase order and is a token. The
only non-commerce uses of the new tokens are idioms that do not belong in headings: "op de koop toe (nemen)" (to accept a
downside), "op prijs stellen" (to appreciate), "afrekenen met" (to do away with). Writers rephrase those ("erbij nemen",
"we waarderen …"); no code change is needed. Not added on purpose: "verkoop", "verkopen", "aanbieder" (a legal heading may
name the ban on selling, and the IGJ's word for a seller is needed in reporting headings; English does not ban "sell" or
"seller" either), "kosten", "kost", "duur" and "actie" (also "costs" as in the eigen risico, "duration", "action";
STYLE-NL §7 asks writers to keep the commerce senses out by hand).

---

## 6. `config/locale-residue.json`, new `locales.nl` entry

Format and levels as `locales.en` (`scripts/lib/residue.ts`; STRICT_RESIDUE is true, so error and frame hits fail the
validator). 24 patterns:

- **error** (never on a Dutch page; only `allowFiles` exempts): other countries' reporting routes (MedWatch, Yellow Card,
  Canada Vigilance, MedEffect, Medsafe; HPRA, CARM); help lines (healthdirect, Healthline, HealthLink, Health811,
  Nurse-on-Call, 13 HEALTH, SAMHSA, FindTreatment, Samaritans, Talk to FRANK, Poison Help, Poisons Information Centre or
  Service, National Poisons Centre or Information Service, NHS 111/24/inform, 988 Suicide/Lifeline, 9-8-8); routes (Special
  Access Program/Programme/Scheme, Personal Importation Scheme, Authorised Prescriber, "specials"); funding (Medicare,
  Medicaid, PHARMAC, NICE, PBS, Pharmaceutical Benefits Scheme); "local emergency number" and its Dutch forms ("het lokale
  alarmnummer", "alarmnummer van je land"); 911, 999, 000 and 111 after a calling word (bel, bellen, call, dial …), "triple
  zero", 9-1-1; German law and bodies (Arzneimittel…, AMG but not a drug code such as AMG 133, BfArM, NADA, Bundes…,
  AntiDopG, Anti-Doping-Gesetz, Heilmittelwerbegesetz, HWG).
- **frame** (kept small): "in/uit/naar/van je (eigen) land", "het land waar je woont", "in your country" (another country
  as the reader's place; the marker allows it where a reader abroad is addressed, e.g. Lareb takes only Dutch reports);
  dollar and pound amounts ($, £, dollar, USD, GBP, CAD, AUD).
- **warn** (the marker silences it as evidence, the PCAC framing or world context): FDA, MHRA, Health Canada, TGA, NHS,
  "in de VS / Verenigde Staten / in Amerika", "in het VK / Verenigd Koninkrijk / in Groot-Brittannië, Engeland, Schotland,
  Wales, Noord-Ierland", "in Canada / Australië / Ierland / Nieuw-Zeeland", 503A/503B.

Design against false hits: brand names are case-sensitive in their own spelling and phrases use spaces, because the
scanner reads every JSON string, glossary `see_also` ids included ("yellow-card", "uk-specials", lowercase "medwatch",
"nice" do not match); "healthdirect" and "specials" do not match a bare id; emergency numbers count only after a calling
word, so Dutch thousands ("10.000"), "bel 0900-1995", "bel gratis 113" and "1733" never match; `\b` is never placed after
a non-ASCII letter (it would fail after "ë").

`allowStrings` (JSON has no marker): the warn patterns in `src/i18n/nl/glossary/` (definitions name foreign bodies and the
country on purpose, STYLE-NL §6), and five history or evidence strings: timeline `thalidomide-withdrawn`, `gnrh-sequence`
(FDA, "in de VS"), `falsified-ozempic-alerts` ("in het VK": the UK hospital cases are evidence), the media captions of
`fda-lab-1960s`, `fda-white-oak-building`, `kelsey-kennedy-1962`, and the infographic `online-vial-risks` (the FDA's
review of certificates of analysis). `allowFiles` and `allowPhrases`: none needed yet.

**Tests.** `npx tsx scripts/check-locale-residue.ts --only nl` on the Dutch strings that exist today (no Dutch pages yet):
0 error, 0 frame. One warning stays on purpose: `src/i18n/nl/media.json` `hospital-emergency-entrance.caption` ("in de
Verenigde Staten"), a US emergency-department photo. If a Dutch safety page shows it, the media owner should use a Dutch
photo (the brief names the huisartsenpost in Oss and the ambulance in Haaglanden); I did not silence it. The script reads
only `src/content/**/nl/`, so I ran the scanner's own `scanMdx` with the nl config on a scratch page
(`research/nl-notes/residue-test/if-something-goes-wrong.mdx`: my Dutch rendering of the start of the English page with
deliberate leftovers): all 15 planted error terms, both frame terms and all 9 warn terms were found; the CLEAN lines
(Dutch numbers, 0900-1995, 113, 1733, "in de EU", Nobelprijs, "nice-to-have", lowercase "nada", "AMG 133", a marked
world-context line) and 13 id-like strings produced no hit; the marker silenced the marked frame line.

Note for the script owner (not my file): the validator's warn message for residue (`scripts/validate-content.ts`, "European
name(s) (EU, EMA, EPAR, CHMP, Europe)") is written for English; on Dutch it lists FDA, MHRA and the like. Suggest a
locale-neutral text ("names that may stay only as evidence or history").

---

## 7. `src/data/timeline.yaml` and `src/data/tracker.yaml`

**Timeline: no change.** The research re-checked every EU and NL event (`semaglutide-approval-eu` 2018-02-08,
`wegovy-approval-eu` 2022-01-06, `tirzepatide-approval-eu` 2022-09-15, `afamelanotide-approval` 2014-12-22,
`falsified-ozempic-alerts` 2023-10-18, `nl-wog-1958` 1958-07-28, `nl-geneesmiddelenwet-2007` 2007-07-01): all correct.
New events were **not added**, though the schema allows them: the validator requires a text in every published locale for
every item ("missing text for timeline item"), and English is published, so a new id would fail without an entry in
`src/i18n/en/timeline.json`, which is out of bounds. Proposed, with their sources (all merged), for when the owner allows
the English text (it is hidden on English, as the existing EU events are) and the Dutch text (`src/i18n/nl/timeline.json`,
same key):

| id | date | category | jurisdictions | compounds | sources |
|---|---|---|---|---|---|
| `tesamorelin-withdrawal-eu` | 2012-06-21 | approval | [EU] | [tesamorelin] | `ema-egrifta-withdrawal` |
| `eu-falsified-medicines-directive` | 2013-01-02 | regulation | [EU] | [] | `eu-directive-2011-62` |
| `eu-safety-features` | 2019-02-09 | regulation | [EU] | [] | `eu-regulation-2016-161` |
| `eu-clinical-trials-regulation` | 2022-01-31 | regulation | [EU] | [] | `ema-clinical-trials-regulation`, `eu-regulation-536-2014` |
| `semaglutide-naion-eu` | 2025-06-06 | safety | [EU] | [semaglutide] | `ema-prac-2025-06-naion` |
| `eu-pharma-reform-agreement` | 2025-12-11 | regulation | [EU] | [] | `ema-pharma-reform-page` |
| `kayshild-approval-eu` | 2026-03-26 | approval | [EU] | [semaglutide] | `ema-epar-kayshild`, `ec-union-register-kayshild` |
| `wegovy-tablets-eu` | 2026-07-14 | approval | [EU] | [semaglutide] | `ema-wegovy-procedural-steps`, `ec-union-register-wegovy` |
| `eu-council-pharma-position` | 2026-09-28 | regulation | [EU] | [] | `council-st-7106-2026-rev2`, `council-st-7105-2026-rev2` |
| `ozempic-shortage-end-nl` | 2024-12-02 | market | [NL] | [semaglutide] | `cbg-ozempic-shortage` |
| `nl-wog-registration-1963` | year 1963, no date (the day is UNRESOLVED) | regulation | [NL] | [] | `nl-mvt-2003-geneesmiddelenwet` |

**Tracker: two items changed.**

- `eu-pharma-reform` (EU): sources + `council-st-7105-2026-rev2`, `council-st-7106-2026-rev2` (the Council's first-reading
  positions, adopted 28 September 2026, published 1 October 2026; eu-status §1 E fact 28, §7). Status rulemaking,
  `updated` 2026-10-12 and `next_milestone` 2026-11-23 (indicative) unchanged. **Text key for the translators:**
  `src/i18n/nl/tracker.json` `eu-pharma-reform.summary` says "De Raad publiceerde zijn standpunt op 1 oktober 2026"; the
  research's wording: "De Raad stelde zijn standpunt vast op 28 september 2026 (gepubliceerd op 1 oktober); het Europees
  Parlement moet het nog goedkeuren (indicatieve datum 23 november 2026). Daarna gelden de nieuwe regels 24 maanden na de
  inwerkingtreding." The current text's "Het EMA verwacht dat die periode tot 2028 duurt" is still what the EMA's page
  says, but the Council text ties application to 24 months after entry into force (eu-status §4 conflict 1): attribute
  2028 to the EMA as an expectation, or drop it.
- `nl-igj-online-sellers` (NL): `updated` 2025-10-30 → **2026-10-05**; sources + `tk-2026-ah-249-antwoord-afslankmedicatie`
  (the Minister of VWS's answers to Kamervragen, Aanhangsel Handelingen II 2026-2027 nr. 249, received and published
  5 October 2026: "Waar mogelijk treedt de IGJ als toezichthouder van de Geneesmiddelenwet stevig op, bijvoorbeeld door het
  uit de lucht laten halen van websites en het opleggen van boetes"; the IGJ "kan … geen betrouwbare uitsplitsing geven";
  nl-law §1 fact 29, §7). **Text key for the translators:** `src/i18n/nl/tracker.json` `nl-igj-online-sellers.summary`
  should add, for example: "Op 5 oktober 2026 schreef de minister van VWS aan de Tweede Kamer dat de IGJ waar mogelijk
  stevig optreedt, bijvoorbeeld door websites uit de lucht te laten halen en boetes op te leggen. Hoeveel meldingen over
  peptiden gaan, kan de IGJ niet zeggen." (The English text of this item is hidden on English and needs no change.) The
  August 2026 IGJ order and penalty against a peptide webshop are not citable (the pages name the seller; nl-law §6.1).

Proposed new tracker items, **not added** for the same reason as the timeline (published English needs a text): 
`nl-advertising-case-law-2026` (NL, in-force or watching; updated 2026-04-21; sources
`nl-rvs-2026-1072-publieksreclame-website`, `nl-rbams-2026-5160-publieksreclame-journalistiek`,
`nl-rbnne-2026-1471-publieksreclame-natuurlijk-persoon`, `igj-2025-12-boetes-openbaar`); `nl-ndr-2027` (NL, adopted,
next 2027-01-01; `dopingautoriteit-code-2027`, `isr-2025-nationaal-dopingreglement`); `eu-critical-medicines-act` (EU,
rulemaking, updated 2026-07-14, next 2026-11-23; `ep-oeil-2025-0102-cod`, `ec-2026-ip-26-1017-cma`);
`eu-biotech-act-clinical-trials` (EU, proposed, next 2026-12-14; `ep-oeil-2025-0406-cod`); `eu-glp1-safety-reviews` (EU,
watching; open: cardioembolic stroke, lithium EPITT 20275, peripheral neuropathies EPITT 20270, ischaemic colitis EPITT
20309; volvulus closed; `ema-prac-2026-10-agenda`, `ema-prac-2026-05-minutes`, `ema-prac-signals-2026-09-28`). The WADA
item `wada-2027-prohibited-list` was not touched (a WADA item; its NL local source is already there).

---

## 8. Validator warnings that are new, and why they stay

158 → 168 warnings. Mine: the three source files with guideline sources without DOI (part 1) and the Dutch residue warns
(part 6; now one, the hospital photo caption). The rest come from files other assignments are writing in parallel (for
example `src/i18n/nl/pages.json` intro lengths); none is in a file of this assignment. No warning on
`src/data/jurisdictions.yaml`, `src/data/tracker.yaml` or the compound data files.

---

## 9. Left unmerged, and why

- **Kayshild and Kyinsu** as EU products of semaglutide: blocked by the English indications rule (part 2).
- **New timeline events and tracker items**: blocked by the published-English text rule (part 7).
- **Notes of existing sources in other files** (their owners'; this assignment may only add `nl-research-*` files):
  `eu-directive-2001-83` (shared.yaml) still points to the 2022-01-01 consolidation: point it at
  `CELEX:02001L0083-20250101` and set `accessed: 2026-10-27` (eu-status fact-check, "For the merge"; the quoted articles are
  the same); `eu-regulation-726-2004`: add art. 13(1) ("shall be valid throughout the Union") to its note, now that NL rows
  cite it for that; `ema-medicines-json`, `ema-orphan-designations-json` and the EPAR ids: `accessed` 2026-10-27 with today's
  counts (2,754 and 3,310 records); `ema-2026-10-under-evaluation` (retatrutide.yaml) duplicates `ema-under-evaluation-2026-10`
  (pt-141.yaml) and is still used by `src/data/explainers.yaml` and `src/data/organ-cards/retatrutide.yaml`; nl-care §7 notes
  for `igj-leveren-op-artsenverklaring`, `igj-qa-zonder-handelsvergunning`, `nl-wog-1958`, `ctgov-nl-be-peptide-search-2026-10-22`
  (superseded for NL by `ctgov-nl-peptide-search-2026-10-27`), `cbg-compassionate-use-list`, `ctgov-nct07531251`;
  `cjeu-2015-abcur` (legal-a.yaml) must be retitled neutrally before a Dutch page cites it (its title names two
  companies); nl-help §7.3 notes for `thuisarts-verlamming`, `thuisarts-pijn-op-borst`, `mainline-steroids-safe-injecting`
  (Mainline stopped needle exchange and drug checking by 14 May 2026), `rivm-hygiene-piercing`; be-notes: the note of
  `be-flemish-antidoping-decree-2012` uses the old numbering (art. 2, 6° and 9°; now 55° and 56°);
  `igj-2026-10-stolen-medicines`: `accessed` 2026-10-27.
- **Strings and data of other assignments** (suggestions from the research, for their owners):
  `pages.jurisdiction.helpNote.BE` in `src/i18n/nl/pages.json`: "1733 werkt nog niet overal in België. Werkt het in jouw
  regio niet, dan hoor je dat aan de telefoon. Kijk dan op de website van je wachtpost of vraag het je huisarts."
  (`be-fod-1733-dokter-van-wacht`; note: "in jouw regio" is fine, the residue frame pattern matches only "je/jouw land");
  `src/i18n/nl/vocab.json` `warningAction.urgent` "Bel direct je huisarts of de huisartsenpost" and `stop` "Stop en maak een
  afspraak met je huisarts" (nl-help §7.4; medical reviewer §6.2); `src/i18n/nl/warning-signs.json` "call your local
  emergency number" → "bel 112"; `src/data/product-check.yaml` `local_sources.NL` (`thuisarts-wondroos`,
  `thuisarts-sepsis`, `thuisarts-dikke-ogen-lippen`); `docs/STYLE-NL.md` §7 still says the validator knows only ten Dutch
  tokens: it now knows 31 (part 5).
- **Not merged as facts (UNRESOLVED in the fact-checks; write as unknown or leave out):** whether "in voorraad hebben"
  covers a few vials kept for own use; any fine or prosecution of a private person for a small own-use import (none found;
  natural persons have been fined only for advertising); which parcels Customs reports to the IGJ; whether a "research"
  vial is a medicine or an active substance for Customs; what happens to intra-EU parcels; the IGJ's February 2026 peptide
  statements (media only); a Dutch court ruling on the unauthorised peptides (none found); the next fine indexation; the
  NDR 2027 text; WADA S0 status of unnamed compounds ("ask the Dopingautoriteit"); whether the KOAG/KAG and CGR codes bind
  a non-commercial publisher; appeal of the Amsterdam judgment of 10 April 2026; the reasons of the IGJ's fine of
  28 September 2026; travellers with a medicine authorised only in another EU state; IGJ figures for peptides alone;
  the 2027 basispakket and any 2027 decision on obesity medicines; the Zorginstituut's Wegovy and Mounjaro advice;
  answers to Kamervragen 2026Z15019; European Pharmacopoeia monographs; NL-OMON51992; whether and when 4TAZPower recruits
  in the Netherlands; whether SYNERGY-Outcomes recruits Dutch participants; the WOG registration day in 1963; NHG or KNMG
  guidance on unlicensed peptides; the artsenverklaring for a substance authorised nowhere; Parliament's vote and the
  Official Journal dates of the EU package (no deadline under TFEU art. 294(7)); outcomes of the open PRAC signals and of
  the Mounjaro, Rybelsus and Kyinsu procedures; whether Kayshild, Kyinsu, the Wegovy tablets and the 7.2 mg pen are on the
  Dutch market; national authorisations in other member states ("no EU-wide authorisation", never "in no EU country");
  NMN novel-food status after 10 August 2026, the GHK-Cu cosmetics clause (the EU rows of nad-precursors and ghk-cu keep
  their 23 October food and cosmetics sources, not re-checked by this research); the Drugs Infolijn on peptides; needle
  exchanges serving people who inject peptides; free needle containers; 0800-0113's end date; 116 117; the
  hospital steroid consultation; Belgium: which peptides count as "hormonale" or "anabole" under the KB of 1974 and its
  enforcement, art. 16 fine amounts, NADO Vlaanderen's legal basis for a lone gym user, needle exchange in Flanders, the
  French and German-speaking communities' NADO names, Mounjaro reimbursement for obesity after May 2026, 1733 coverage.

---

## 10. Open questions (for the owner and the reviewers)

1. **The publisher line (owner; most important).** nl-law's fact-check (fact 17a) found 2026 case law that contradicts
   CONTENT-GUIDE §1's "The absence of commerce is what makes the content legal": the Raad van State (25 February 2026,
   ECLI:NL:RVS:2026:1072) fined a website with no commercial aim, Rb Amsterdam (10 April 2026) fined journalism about
   off-label semaglutide, Rb Noord-Nederland (21 April 2026) fined a natural person; what decides is praise and one-sided
   wording ("wervende bewoordingen"), and for authorised medicines whether the text stays in line with the SmPC. Gnw art.
   84(1) bans all advertising of a medicine without a handelsvergunning (not only public advertising). The Dutch about
   pages, and possibly CONTENT-GUIDE §1, need the owner's decision (nl-law §6.2, §6.6).
2. **SS-31 rows:** investigational (applied) or not-authorised (part 2)?
3. **Kayshild and Kyinsu:** add both, or Kayshild only, together with an English indications line (part 2)?
4. **Timeline and tracker additions:** may the English texts (hidden on English) be added so the proposed EU and NL items
   can go in (part 7)?
5. **`www.huisartsenspoedposten.nl`** is allowlisted for its source; should the NL card or helpNote link it ("de lijst is
   misschien niet compleet")?
6. **`www.aanbiedersmedicijnen.nl`** (the official list of registered online sellers): stays unlinked unless the legal
   reviewer allows it (nl-law §6.10, eu-status §6.3).
7. **Customs' page "medicijnen online bestellen" (31 August 2026)** cannot be linked (its URL carries the tokens "kopen" and
   "bestellen"; now also checked by the build): rest the "zelf invoeren" points on the handbook chapters, or an owner
   exception (nl-law §6.11). Using its shortlink to get past the token rule is not recommended.
8. **Sources whose text names a business** (`douane-2026-08-illegale-online-handel-medicijnen`,
   `nl-rbams-2026-5160-publieksreclame-journalistiek`; title and URL are neutral): may they be cited without ever quoting
   the names (nl-law §6.12)?
9. **The US emergency-department photo** (`hospital-emergency-entrance`) on Dutch pages (part 6)?

---

## Merge check (independent, 27 October 2026)

Adversarial check of this merge by a second agent, assuming errors. Everything below was read on 27 October 2026 (curl with
a browser user agent; pdftotext for PDFs; the CTIS public API; the ClinicalTrials.gov API; my own built-in browser tab for
www.health.belgium.be, www.fagg-afmps.be and www.fagg.be, which refuse scripts; no CAPTCHA was shown or answered). Files
edited, all within the merge's ownership: `config/locale-residue.json` (`locales.nl` only), `src/data/jurisdictions.yaml`
(BE help name and comment), `config/link-allowlist.json` (one "why"), `src/data/sources/nl-research-be-notes.yaml` (two
`authors` fields and one header comment), `src/data/compounds/ss-31.yaml` (one comment) and this section. No English
content, no build, commit or push. Result: `npx tsx scripts/validate-content.ts` → 0 errors, 168 warnings (unchanged by
this check); `npx tsx scripts/check-locale-residue.ts` → 0 error/frame hits, 1 Dutch warning (the US photo caption, part 6).

### 1. Data diff: rows, products, dates, contact entries

- **Nothing else changed.** HEAD and the working copy of every compound file were parsed and compared field by field:
  only the EU and NL rows differ (as_of, sources, and status for SS-31); no row deleted, row order unchanged, no US, UK,
  CA, AU, DE, BE or WADA row, product, study or other field changed. `timeline.yaml` unchanged (74 items);
  `jurisdictions.yaml` only NL and BE (10 entries before and after); `tracker.yaml` only `eu-pharma-reform` and
  `nl-igj-online-sellers`; `link-allowlist.json` additions only; `commerce-tokens.json` only `tokens.nl`.
- **Every changed row matches its fact-checked status file** (`research/nl/status/*.yaml`, read with eu-status.md's
  fact-check); extra sources kept are the ones the status files say "may stay" (FDA PCAC briefings, `chembl-ipamorelin`,
  `cbg-geneesmiddeleninformatiebank`, `nl-geneesmiddelenwet`), plus `ctgov-nct06373731` on the SS-31 EU row (fact-check 16).
- **Re-verified at the source today:** EMA medicines JSON (2,754 records, timestamp 2026-10-27T18:19:10Z) and orphan JSON
  (3,310 records): 0 records for every unauthorised compound's names and codes; elamipretide orphan EU/3/21/2430 and
  EU/3/22/2614, thymalfasin EU/3/02/110, NMN EU/3/23/2786; Egrifta "Application withdrawn", 21/06/2012; semaglutide five
  records (Ozempic 08/02/2018, Rybelsus 03/04/2020, Wegovy 06/01/2022, Kayshild 26/03/2026 conditional, Kyinsu
  24/11/2025), Mounjaro 15/09/2022 (Eli Lilly Nederland B.V.). Under-evaluation list (EMA/222468/2026, "Data extracted
  5 October 2026"): of the site's substances only "Semaglutide" (and orforglipron). Geneesmiddeleninformatiebank (the
  registered URL template): semaglutide 33 lines (4 × EU/1/17/1251, 8 × EU/1/20/1430, 15 × EU/1/21/1608, 1 ×
  EU/1/25/1992, 5 × EU/1/26/2019), tirzepatide 18 × EU/1/22/1685, "Geen producten gevonden" for BPC-157, elamipretide,
  retatrutide, thymalfasin, tesamorelin, bremelanotide, ipamorelin, selank and TB-500; "melanotan" only EU/1/14/969
  (Scenesse). CTIS API: 2025-523837-25-00 (4TAZPower) Netherlands first decision 2026-07-27, and no start-of-trial
  notification in any member state; 2025-522674-36-00 (SYNERGY-Outcomes) Netherlands decision 2026-02-04, START_OF_TRIAL
  2026-09-22, no start of recruitment; 2024-511482-11-00 (ReNEW) five member states, recruitment ended in 2025;
  2024-511450-49-00 (TRIUMPH-5) Germany and Poland. ClinicalTrials.gov NCT06373731: sites in Czechia, Germany, Hungary,
  Italy and Spain. Kayshild EPAR: "received a conditional marketing authorisation valid throughout the EU on 26 March
  2026". Union Register h1251 and h1685: ACTIVE, 2018-02-08 and 2022-09-15. CBG "Afslankmedicijnen": "Er zijn in Nederland
  verschillende soorten afslankmedicijnen geregistreerd" (Wegovy, Mounjaro listed). Regulation 726/2004 art. 13(1)
  (original text, Publications Office): an authorisation "shall be valid throughout the Community". Council ST 7105/2/26
  and 7106/2/26 REV 2: "Adopted by the Council on 28 September 2026"; application "[24 months from the date of entry into
  force …]". AH 249 (2026Z15019): "ontvangen 5 oktober 2026"; "Waar mogelijk treedt de IGJ als toezichthouder van de
  Geneesmiddelenwet stevig op, bijvoorbeeld door het uit de lucht laten halen van websites en het opleggen van boetes";
  "kan de IGJ geen betrouwbare uitsplitsing geven". 112.be: 112, 101, 1733, 070 245 245, 1813 (no 100).
- **SS-31 comment corrected** (`ss-31.yaml`): "two late-phase trials run in the EU" → two are authorised in the EU; ReNEW
  runs in five member states (recruitment ended); 4TAZPower is authorised (NL 27 July 2026) but no member state has a
  start-of-trial notification. The `investigational` rows stay (consistent with the vocabulary, "in formal clinical
  development (registered trials)", and with the CA row); open question 2 stays with the owner, who should know that no
  SS-31 trial has started in the Netherlands.
- **English renders as before.** A baseline copy (the merge's data and config files at HEAD, the five `nl-research-*`
  files removed, everything else as now) validates with 0 errors and 158 warnings; the working copy has 168. The 10 new
  warnings are the nine Dutch guideline sources without DOI (part 1) and the Dutch photo caption (part 6); the English
  warnings are identical. English shows only US/UK/CA/AU rows and cards (`visibleRows`, `cardCodes`; no English page
  renders an NL, BE or EU card). No URL in `src/` or `config/` and no string in English content, `src/i18n/en/`,
  components or `src/data/*.yaml` contains one of the 21 new Dutch tokens (the build's commerce check applies every
  locale's tokens on every page).

### 2. New sources (`src/data/sources/nl-research-*.yaml`)

- **Copy fidelity:** all 182 entries are identical to `research/nl/sources/*.yaml` except the documented note of
  `rijksoverheid-2026-09-vws-begroting` and the two documented duplicates not copied. Ids unique (the only duplicate ids
  in `src/data/sources/` are eight English `en-finish.yaml` ids, an existing, intended mechanism).
- **Hosts:** all 268 URLs in the five files, `jurisdictions.yaml` and `tracker.yaml` (notes and comments included) pass
  `hostAllowed`. Each of the 25 new hosts is used and official; `www.fagg.be` serves the FAGG site ("FAGG | Uw
  geneesmiddelen en gezondheidsproducten", built-in browser).
- **Records:** all 182 URLs fetched: 176 HTTP 200; health.belgium.be and vandenbroucke.belgium.be 403, NHG 401
  ("Beveiligingscontrole wordt uitgevoerd"), EUR-Lex 202 (bot checks; the FOD 1733 page was read in the browser:
  "Dokter van wacht | FOD Volksgezondheid", "Laatst bijgewerkt op 02/04/2026"). 80 titles appear as the page's title,
  h1 or text; the 21 PDFs match on their first page (document numbers, dates); the rest are descriptive titles of
  database searches, law articles and script pages (CTIS, Union Register, wetten.nl, rechtspraak.nl), as the repository
  does elsewhere. No title, URL or author names a seller or company.
- **Corrected:** `be-druglijn-bel` and `be-druglijn-over-ons` authors "De DrugLijn (VAD)" → **"De Druglijn (VAD)"**, and
  the file's header comment: the service writes "De Druglijn" everywhere (page title "Bel De Druglijn - De Druglijn";
  "De Druglijn is de publieksservice van VAD"; 25 and 23 occurrences on the two pages, never "DrugLijn"). The file says
  "DO NOT EDIT" to writers; this is a metadata fix under the merge's ownership.

### 3. Help and contact entries (`jurisdictions.yaml`)

Every URL opened today and is the official page of the service named: Thuisarts "Spoed: wie moet je bellen?" ("Bij
levensgevaar: bel 112"); Rijksoverheid "Wanneer moet ik naar de huisartsenpost of de spoedeisende hulppost?" ("Neem altijd
eerst contact op met uw huisartsenpost …"); NVIC (redirects to /nvic/nl/: "Neem dan contact op met uw huisarts (of buiten
kantooruren met de huisartsenpost)"); DRUGSinfo "Contact met De Drugs Infolijn" (a Trimbos-instituut site); DRUGSinfo
"Hulpkaart" ("Ga dan eerst naar je huisarts"); "Hulplijn | 113 Zelfmoordpreventie" ("Bel gratis 113"); Thuisarts on a
psychische crisis ("Bel direct 112 als iemands leven in gevaar is"); FOD Volksgezondheid "Dokter van wacht"; "Wanneer
bellen? - Antigifcentrum"; De Druglijn (VAD); zelfmoord1813.be ("Bij de Zelfmoordlijn1813 …"; its about page and 112.be
write "Zelfmoordlijn 1813"); "Melden van een bijwerking als patiënt | FAGG"; the FAGG home page ("Federaal Agentschap voor
Geneesmiddelen en Gezondheidsproducten"); NADO Vlaanderen. The unchanged NL and EU entries (CBG, IGJ, Lareb,
Dopingautoriteit, Geneesmiddelenwet, EMA) answer 200 with their own titles. **Corrected:** BE drugs-advice name
"De DrugLijn (VAD)" → **"De Druglijn (VAD)"** (and the BE comment, and the allowlist "why" for www.druglijn.be).

### 4. `tokens.nl` and `locales.nl` on ordinary Dutch text

Test (scratch files under `research/nl-notes/residue-test/`, deleted afterwards): 817 Dutch terms and fixed phrases from
`docs/STYLE-NL.md` §2 and §5; 2,033 lines of real Dutch health and legal text from about 60 official pages fetched today
(Thuisarts, Rijksoverheid, CBG, IGJ, Douane, NVWA, DRUGSinfo, 113, Milieu Centraal, Dopingautoriteit, NVIC, the
Minister's answers AH 249); 34 targeted sentences. Residue: the scanner's own `scanMdx` with the nl config; tokens:
`commerceRegex` of all locales after `stripNonCommerce`, every line tested as if it were a heading.

- **Residue, false positives found and fixed** (all at `error` level): "De controlegroep kreeg PBS" and "opgelost in PBS"
  (the lab buffer) and "De stichting NICE" (the Dutch intensive-care registry) hit `other-funding`; "De specials van de NOS"
  hit `other-routes`. Now `other-funding` matches PBS only with an article or in its funding compounds ("de PBS",
  "PBS-lijst", the full name; never before "-buffer", "-oplossing", "-groep") and NICE not after "Stichting"; the UK
  "specials" moved to a new case-sensitive pattern `uk-specials` (UK-specials, in quotes or brackets, after "zogenaamde",
  "zogeheten", "Britse", "Engelse"), so the glossary id `uk-specials` still never matches. Re-test: the merge's planted
  page finds all 15 error terms ("de PBS" included), 2 frame and 9 warn; every targeted positive (op or door de PBS, the
  full name, NICE, UK-specials, "specials" in quotes, NHS 111, Yellow Card, lokale alarmnummer, Medicare) is caught; on
  the 2,850 lines of ordinary Dutch only STYLE-NL's own foreign terms hit (FDA, in de VS, in het VK, 503A as warn; the
  quoted English "call your local emergency number" as error). `locales.nl` now has 25 patterns (24 in part 6).
- **Residue, accepted:** `tga` (warn only) also matches the Dutch medical abbreviation TGA (transiënte globale amnesie);
  the marker silences it. "het land waar je woont" (frame) on a Lareb line for readers abroad is by design (marker).
- **Tokens:** 35 of 2,850 lines contain a token; every one is a commerce sense (kopen, bestellen, webshops, winkels,
  leveranciers, korting, te koop aanbieden) except four idioms: "op prijs stellen", "op de koop toe" (tokens.nl) and "tot
  nader order", "een order van de rechter" (the English token "order", which also applies to Dutch pages;
  `stripNonCommerce` knows only English phrases). None belongs in a heading; writers rephrase. For the script owner (not
  this assignment's file): Dutch phrases could be added to `NON_COMMERCE_PHRASES` in `scripts/lib/load.ts`. No false
  positive in STYLE-NL's term list (only its lists of words to avoid hit).
- The merge's own scratch page `research/nl-notes/residue-test/if-something-goes-wrong.mdx` is left in place (its file).

### 5. Corrections to this file and notes for other owners

- Part 9 lists "answers to Kamervragen 2026Z15019" as UNRESOLVED (from nl-care §5 item 4). **Resolved:** the answers are
  Aanhangsel Handelingen II 2026–2027, nr. 249 (2026Z15019), received 5 October 2026, registered as
  `tk-2026-ah-249-antwoord-afslankmedicatie` (nl-law) and already cited by the tracker. Writers cite that id; nl-care's
  "not found" is out of date.
- Part 3 and `docs/STYLE-NL.md` §2.7 write "De DrugLijn": the service's own spelling is **De Druglijn** (STYLE-NL owner).
- `ema-under-evaluation-2026-10` (pt-141.yaml) now supports 15 EU rows, but its note says "Cited for: no EU application
  for bremelanotide" (accessed 22 October): its owner should widen the note (no initial application for any of the site's
  substances except generic semaglutide; list EMA/222468/2026, "Data extracted 5 October 2026", re-read today) and set
  `accessed: 2026-10-27`. The same goes for `ema-medicines-json` (a note about BPC-157 only, accessed 20 October).
- Optional, not added (a WADA item): nl-law §7 suggests `dopingautoriteit-2026-07-reactie-concept-lijst-2027` as a second
  NL local source of `wada-2027-prohibited-list`; it would show only on Dutch pages.
