# Final sweep input: what the 29 page groups left (workflow wf_38a349a5-a3c, 27 October 2026)

Generated from the step-2 results. Per group: items for the final sweep, remaining concerns, open questions. The group notes are research/nl-notes/<group>.md.

## legal-core (verdict: ready-after-fixes-made)

Files: src/content/pages/nl/legal/nl.mdx, src/content/pages/nl/legal/eu.mdx, src/content/pages/nl/legal/be.mdx, src/content/pages/nl/legal/index.mdx, src/i18n/nl/glossary/nl-legal-core.json, research/nl-notes/legal-core.md

### For the final sweep

- src/data/sources/legal-a.yaml eu-regulation-699-2014: the note says the logo applied 'by mid-2015'; art. 5 says it applies from 1 July 2015 (I read CELLAR 32014R0699 on 27 October 2026). Update the note.
- src/data/sources/legal-a.yaml cjeu-2009-hecht-pharma and cjeu-2015-abcur: the titles name companies. Give them neutral reader-facing titles before any Dutch page cites them.
- src/data/sources/legal-a.yaml rijksoverheid-online-aanbieder-controleren: the title vouches for sellers ('betrouwbaar'). Recommend no Dutch page cites it.
- src/data/sources/shared.yaml eu-directive-2001-83: point it at the 1 January 2025 consolidation (as merge notes §9 says).
- Glossary: my new ids (douane, inbeslagname, opiumwet, openbaar-ministerie, active-substance, vhb, antigifcentrum, dokter-van-wacht) were unique on 27 October. If a parallel group adds the same concept or alias later, merge them. 'werkzame stof' will autolink on compound pages too.
- Possible tracker/timeline item nl-advertising-case-law-2026 (RvS 25 Feb 2026, Rb Amsterdam 10 Apr 2026, Rb Noord-Nederland 21 Apr 2026, IGJ publishes fines since 1 Jan 2026), which legal/nl now describes.
- src/data/sources/nl-legal-core.yaml was not created: no new sources were needed, and no allowlist host was added.

### Remaining concerns

- Owner decision: the brief's publisher line is used word for word on legal/nl. The brief puts it on the about pages, and STYLE-NL §5.2 still has an older version
- Legal: art. 86(2) of the Directive is worded differently in Dutch and English (checked today). The pages do not rely on art. 83(d) Gnw. Whether the English condition binds is for the legal reviewer
- Legal: the parcel wording ('kan worden tegengehouden, gemeld of in beslag genomen') leaves out that Customs' flow chart releases some own-use parcels (nl-law §6.4)
- Legal: the plain 'Nee' TL;DR answers for passing a product on and for importing it for own use are our reading of art. 40(2) with the WED (nl-law fact 42)
- nl-law UNRESOLVED 5.13 (a traveller carrying a medicine authorised in another EU state but not in NL): the page now states only the art. 40 point
- Two cited sources name a business in their body text (douane-2026-08-..., nl-rbams-2026-5160-...); no name is quoted on the pages
- legal/be is still longer than one country's section on the English notes page
- For the final sweep (files I do not own): add 'Wij geven geen medisch advies' to the note of lareb-bijwerkingen-melden; expand the note of ema-2023-falsified-ozempic; plus the writer's list (eu-directive-2001-83 consolidation date, eu-regulation-699-2014 note, retitling hecht-pharma and abcur)

### Open questions

- Owner: the brief's publisher line is used word for word on legal/nl in 'Reclame en voorlichting' (it was meant for the about pages). Keep it there too?
- Legal: the Dutch-language version of Directive 2001/83 art. 86(2) (consolidation of 1 January 2025, which I checked today) leaves out the English text's condition 'provided that there is no reference, even indirect, to medicinal products', just as Gnw art. 83(d) does. The pages say only that the English text adds it, and do not rely on art. 83(d). Is that the right reading?
- Legal: the parcel wording 'kan worden tegengehouden, gemeld bij de IGJ of in beslag genomen' does not mention that parcels are sometimes released (nl-law §6.4). Fair?
- Legal: the TL;DR answer 'Nee… Met opzet is het een misdrijf' for passing a product on to others (art. 40(2) with the WED). Confirm.
- Legal: is the description of the Rb Amsterdam case (personal stories about using semaglutide to lose weight, labelled off-label, with a link to the compound page) neutral enough under the advertising test?
- Legal: is 'een stop opleggen' an acceptable B1 rendering of the IGJ's 'bevel' (art. 115)?
- Legal (BE): the TL;DR line on art. 16 §1 2° ('kan een geldboete krijgen'), whether to mention the KB of 1974, and the up-to-€ 25.000 fine for recreational athletes outside a federation under the Flemish decree (be-notes §6.1–6.3)?
- Legal (EU): may the agreed reform articles be described before they are published in the Official Journal? They are marked 'nog geen wet' (eu-status §6.1).
- Legal/medical (EU): is 'investigational' right for retatrutide and SS-31 ('alleen onderzocht in klinisch onderzoek')?
- Sources whose body text names a business are cited without quoting any name: douane-2026-08-illegale-online-handel-medicijnen and nl-rbams-2026-5160-publieksreclame-journalistiek (nl-law §6.12).

## legal-routes (verdict: ready-after-fixes-made)

Files: src/content/pages/nl/legal-routes.mdx, src/content/pages/nl/legal/research-use-only.mdx, src/i18n/nl/glossary/nl-legal-routes.json, research/nl-notes/legal-routes.md

### For the final sweep

- docs/STYLE-NL.md §2.4: add 'ontheffing' (IGJ named-patient exemption since 9 Sept 2025), 'vrijstelling' (shortage), 'machtiging' (insurer) vs 'artsenverklaring' (IGJ route only), 'medicijngeschiedenis' (B1 for medicatiehistorie), 'erkenningsakkoord (MRA)', 'farmaceutische vorm', 'werkzame stof' legal gloss, 'designerdrugs' (see notes §5)
- Glossary: dedupe if another group also adds 'ontheffing' or 'pharmaceutical-form' (added in src/i18n/nl/glossary/nl-legal-routes.json); an 'active-substance' (werkzame stof) entry was deliberately not added (would tooltip every compound page) — legal/nl owner's call
- src/data/sources/shared.yaml eu-directive-2001-83: point to CELEX:02001L0083-20250101 and accessed 2026-10-27 (articles 2(2), 3(1), 5(1), 46(f), 51, PV system, leaflet verified today via CELLAR)
- src/data/sources/legal-a.yaml cjeu-2015-abcur: retitle neutrally before any Dutch page uses the 'prescription before preparation' point (left out of /nl/legal-routes/)
- Source-note updates still open from nl-care §7: igj-leveren-op-artsenverklaring, igj-qa-zonder-handelsvergunning (legal-a.yaml), cbg-compassionate-use-list (retatrutide.yaml), ctgov-nct07531251 (stubs-b.yaml)
- No hero/caption change needed: legal-routes keeps pharmacy-mortar, research-use-only keeps lab-96-well-plate
- All /nl/legal-routes/#… links found in other Dutch files use the seven fixed anchors; no file links an anchor on /nl/legal/research-use-only/

### Remaining concerns

- Belgium appears in three one-line mentions on the routes page and one on the research-use-only page. The editor may want to keep only the opening pointer and the import line.
- '### Wat je wel kunt doen' sits inside '## Zelf invoeren', because no eighth ## heading is allowed, but its checklist covers every route. Editor decision.
- The machtiging sentence rests only on the NHG's mention of 'ZN-machtigingen (artsenverklaring)'. No Zorgverzekeraars Nederland page was read. Reviewer should confirm.
- The world-context line naming tesamorelin, bremelanotide and elamipretide as examples for the artsenverklaring route is kept, with qualifiers. Whether to name them at all is the writer's open question 4 for the legal reviewer.
- Customs' clearest public page on intra-EU parcels (31 August 2026) cannot be cited because its URL carries commerce tokens, so the pages state only the unknown.
- The added side-effect line (very common nausea and diarrhoea, pancreatitis warning) needs medical-reviewer confirmation as the right minimum.
- Applying Van Bennekom's 'external form as strong evidence' to injection vials is our reading (labelled as such). Legal reviewer should confirm.
- The Piatkowski 2026 full text was not readable by script. The Dutch text mirrors the English page.
- The English caveat 'a new treatment may turn out no better, or worse' had only a UK source and no Dutch source was found, so it is not restored.
- Shared-file items still open for the final sweep: eu-directive-2001-83 should point to the 2025 consolidation; cjeu-2015-abcur needs a neutral title; STYLE-NL rows for ontheffing, vrijstelling and machtiging.

### Open questions

- Legal: is 'de wet verbiedt het, maar sinds april 2023 treedt de minister daar niet tegen op als …' a fair B1 summary of Gnw art. 67 + the 2023 Beleidsregel? (telephone consultations not mentioned)
- Legal: a prescription from another EU/EEA state is stated as a valid Dutch recept (Gnw art. 1(1)(pp)); should the page add that the pharmacist checks it?
- Legal: is the artsenverklaring verdict 'no' for a peptide approved nowhere, qualified 'volgens ons in de praktijk niet', acceptable?
- Legal: the artsenverklaring fold names tesamorelin, bremelanotide and elamipretide (FDA-approved, not in NL/EU) as examples where this route exists — informative or a pointer?
- Legal: 'Nederland heeft geen apart medisch noodprogramma' is our reading of Gnw art. 40(3) — confirm
- Legal: the Zelf invoeren table says what Customs 'can' do and that the rest is not public; is the active-substance row (Customs ch. 13: parcel seized, recipient a suspect) right to include?
- Legal: douane-2026-08-illegale-online-handel-medicijnen is cited for two neutral sentences; its body names a webshop (never quoted) — acceptable?
- Medical: are 'Een huisarts hoeft die niet zelf voor te schrijven…' (NHG facultatief, Thuisarts) and 'Dan horen de controles bij die arts. Je huisarts let wel op bijwerkingen en problemen' (NHG praktijksituatie 6) fair and safe here?
- Legal: trials named by acronym (TRIUMPH-Outcomes, SYNERGY-Outcomes); the elamipretide trial described without acronym; no site organisations — acceptable?
- Legal: the inference that a pharmacy-made semaglutide for weight would not be reimbursed (nl-care fact 33, §6.3) was left out; the KNMP rule is stated only — agree?
- Medical/legal: 'machtiging van je zorgverzekeraar' (from NHG 'ZN-machtigingen (artsenverklaring)') is used to keep the two meanings of 'artsenverklaring' apart — agree?

## legal-sport-changing (verdict: ready-after-fixes-made)

Files: src/content/pages/nl/legal/sport-and-doping.mdx, src/content/pages/nl/legal/whats-changing.mdx, src/data/sources/nl-legal-sport-changing.yaml, src/i18n/nl/glossary/nl-legal-sport-changing.json, src/data/tracker.yaml, src/i18n/nl/tracker.json, research/nl-notes/legal-sport-changing.md

### For the final sweep

- docs/STYLE-NL.md: merge the style terms listed in research/nl-notes/legal-sport-changing.md (strict liability = risicoaansprakelijkheid, schorsing/berisping, vangnetregel, tuchtrecht/aanklager/voorlopige schorsing, veiligheidssignaal, periodiek veiligheidsrapport, PRAC wording, Publicatieblad van de EU, voorlopig akkoord, voorlopige datum voor de stemming, aanbestedingen instead of inkoop, FIOD expansion, tracker 'status' instead of 'label', B1 names of the PRAC signals)
- Glossary: dedupe if another group added publieksreclame, Raad van State, Nationaal Dopingreglement/NDR, PRAC or veiligheidssignaal (mine: public-advertising, raad-van-state, nationaal-dopingreglement, prac, safety-signal in src/i18n/nl/glossary/nl-legal-sport-changing.json)
- src/data/tracker.yaml wada-2027-prohibited-list: optional second NL local source dopingautoriteit-2026-07-reactie-concept-lijst-2027 (not my item)
- src/data/tracker.yaml eu-glp1-safety-reviews: update updated/text once the PRAC minutes and signal recommendations of 26-29 October 2026 are published
- Corrections log (src/data/corrections.yaml, src/i18n/nl/corrections.json): add an entry for the five new Dutch/EU tracker items of 27 October 2026 if the Dutch log records additions
- Sources owned by others: wada-2027-list-en / wada-2026-list-en accessed 2026-10-20 (re-read by nl-law today); ema-medicines-json accessed 2026-10-20 (already in merge §9)
- CONTENT-GUIDE §1 'The absence of commerce is what makes the content legal' contradicts the 2026 case law now described on /nl/legal/whats-changing/: owner decision (brief item 1)

### Remaining concerns

- The refusal sanction ('doorgaans 2 jaar, misschien 4') rests on the Dopingautoriteit's Belgian example. The Code's rule for refusing a test starts from 4 years (2 only if not intentional). The text is now attributed to the Dopingautoriteit; the legal reviewer may prefer the Code's wording (art. 10.3.1, not re-read)
- Retatrutide 'nergens goedgekeurd' / 'Geen medicijnautoriteit heeft het goedgekeurd' is kept as on English. It is supported by every data row and by media reports that no application has been filed, but there is no official worldwide source (nl-law 5.11)
- nl-ndr-2027 is now rulemaking: confirm, or set adopted if the ISR has adopted the 2027 NDR
- Rb Amsterdam text now names the second medicine's indication ('onder voorwaarden' for weight management, no brand). The reviewer may prefer only '2 semaglutide-medicijnen op recept'
- The writer's open questions stay open: NDR scope and our reading; the publisher-line sentence on whats-changing (owner decision); the world-context lines (Canadian case, USADA and SIA on TUEs, SIA on retatrutide); PRAC lines before PRAC concludes; the B1 medical wording of the signals
- Final sweep: merge.md §7 and nl-law 5.14 suggest the incorrect 'kan de IGJ niet zeggen' about peptide reports. Any other Dutch file that copied it should say 'is niet bekend'. eu-glp1-safety-reviews and the PRAC lines need an update once the minutes of the 26-29 October 2026 PRAC meeting are published

### Open questions

- Legal: is 'Meestal niet: het reglement geldt voor leden van een sportbond (onze lezing)' a fair B1 reading of Wuab art. 2(1) and NDR art. 71.10 for gym users who are not federation members?
- Legal: is 'Ben je lid van een sportbond? Dan kan een pakket dat de Douane tegenhoudt zo een dopingzaak worden' a fair inference from the Dopingautoriteit's data-exchange protocols?
- Legal: the Dopingautoriteit page says the rules apply to 'alle leden van de topsportbonden', the NDR 2025 art. 71.10 also to members practising sport outside competitions; the page follows the NDR — confirm
- Legal: may whats-changing list six points of the Council's first-reading position (caveated 'nog geen wet') before Official Journal publication?
- Legal: nl-ndr-2027 status 'adopted' (follows from the adopted Code 2027) or 'rulemaking' (2027 NDR text not yet published)?
- Legal: confirm citing nl-rbams-2026-5160 while naming neither the publisher nor the brand (only 'een semaglutide-medicijn dat voor diabetes is goedgekeurd')
- Owner: the brief's publisher-line test sentence ('Ook wie niets verkoopt, kan reclame maken: de rechter kijkt of een tekst een middel aanprijst') is used on whats-changing — confirm
- Editor: keep or drop the marked world-context lines on the sport page (Canadian BPC-157/TB-500 sanction; USADA and Sport Integrity Australia on TUEs; Sport Integrity Australia on retatrutide)?
- Medical: check the B1 descriptions of the open PRAC signals (cardioembolic stroke, lithium levels, peripheral neuropathy, ischaemic colitis, volvulus) and whether open signals belong on the Dutch site before PRAC concludes
- Medical/regulatory: retatrutide 'Geen medicijnautoriteit heeft het goedgekeurd' — confirm worldwide or narrow to EU and NL

## guides (verdict: ready-after-fixes-made)

Files: src/content/pages/nl/start-here.mdx, src/content/pages/nl/talking-to-your-doctor.mdx, src/content/pages/nl/index.mdx, src/content/pages/nl/compounds/index.mdx, src/i18n/nl/glossary/nl-guides.json, research/nl-notes/guides.md

### For the final sweep

- /nl/legal-routes/ must carry exactly the brief's headings: pages link #recept, #off-label, #artsenverklaring, #magistrale-bereiding, #klinisch-onderzoek, #compassionate-use, #zelf-invoeren
- /nl/safety/product-risk/ must have '## Wat een labrapport wel en niet zegt' (linked twice from start-here); the home page links product-risk without the English anchor #if-you-already-have-a-product — add the Dutch heading slug to src/content/pages/nl/index.mdx if that section exists
- Check that other groups' linked pages exist once all are written: legal/nl, legal/eu, legal/be, legal/research-use-only, legal/sport-and-doping, safety/* (before-you-consider, sterile-technique, injection-safety, monitoring, sharps-disposal, if-something-goes-wrong, warning-signs), evidence/the-translation-gap, evidence/evidence-grading, history/the-croatian-lab, about/editorial-policy, the-case-for-reform, news, compounds/bpc-157, tb-500, kpv, retatrutide
- docs/STYLE-NL.md: merge the 'Style terms' table of research/nl-notes/guides.md (ontheffing/vrijstelling/machtiging, verschoningsrecht, afgescheept, nepinjectie, 'studie met loting', Australische/Canadese medicijnautoriteit)
- Diagram artwork: Dutch start-here uses new id law-nl-eu (Netherlands + EU rows) instead of law-four-countries
- Glossary: verschoningsrecht is in src/i18n/nl/glossary/nl-guides.json; basispakket (used on start-here) is defined by nl-about.json — keep one entry each if others add them
- src/data/sources/semaglutide.yaml ema-epar-wegovy note says product information last updated 21 September 2026; eu-status and ema-pi-wegovy-nl say 26 October 2026 (21 September is the renewal) — owner may correct

### Remaining concerns

- The IGJ news item of 20 October 2026 (igj-2026-10-stolen-medicines) has a 'Meer over dit onderwerp' box linking a media item whose title names the manufacturer. The page's own title and URL name no company. Reviewer should confirm the citation may stay (CONTENT-GUIDE §11).
- fda-label-wegovy was restored next to the Dutch SmPC. The medical reviewer may prefer the SmPC alone in the start-here §1 'officiële productinformatie' cell.
- 'Wie Wegovy gebruikt, betaalt het dus zelf' rests on the basispakket facts and the NHG's 'op eigen kosten'. Whether a supplementary insurance (aanvullende verzekering) pays was not researched.
- The writer's legal and medical open questions still stand: TL;DR 'Zelf invoeren mag ook niet', the 'thuis hebben' unknown, the traveller-exemption reading, art. 67 in B1, WGBO 7:460, the advertising test, the trainers' advertising line, NHG wording, world evidence (TGA, Health Canada, Endocrine Society) on Dutch pages, and the Belgium pointers. The vitamins question is resolved.
- The PCAC FAQ sentence of 27 words is kept whole so that 'zoals gemeld vanuit de openbare vergadering' stays attached to the vote counts.
- Style term for the final sweep: 'GLP-1-middelen' (talking, used twice). STYLE-NL has only GLP-1-medicijnen and GLP-1-agonisten.
- src/i18n/nl/glossary/guides.json is untracked and outside this group. It defines informed-consent, medical-file and second-opinion, which these pages use. Its owner should confirm it ships.
- Diagram id law-nl-eu needs Dutch artwork (writer's note). The semaglutide.yaml ema-epar-wegovy note date (21 September 2026 is the renewal date) is for that file's owner.
- Housekeeping: one downloaded law page was saved to the repo root by mistake (C:/dev/Peptides-explained/gnw.html) and moved straight to the scratchpad. The repo has no stray file now.

### Open questions

- Legal: start-here TL;DR 'Zelf invoeren mag ook niet.' — acceptable condensation of art. 40(2) (assumes the product is a medicine in law)?
- Legal: start-here FAQ line that possession of a few vials is legally unsettled — acceptable, or could it read as a hint (CONTENT-GUIDE §1a)?
- Legal: 'Ook dan blijft een geneesmiddel zonder handelsvergunning verboden' — our reading of art. 18(6)(a) vs art. 40(2) for travellers; confirm
- Legal: B1 summary of art. 67 plus the 2023 Beleidsregel (start-here law fold, talking prescribing diagram) fair? (nl-care 6.1)
- Legal: keep the WGBO 7:460 line ('opzeggen mag alleen om gewichtige redenen') in the talking WGBO fold? (nl-care 6.2)
- Legal/owner: does the STEP 1 result with the Dutch SmPC indication, 'zeer vaak' side effects, pancreatitis and pregnancy contraindication, plus ZIN's 'werkt voor gewichtsverlies' with a pointer, pass the 2026 advertising test (RvS 25 Feb 2026, Rb Amsterdam 10 Apr 2026)?
- Legal: trainers fold 'Volgens de IGJ kan iedereen reclame maken, ook wie het middel zelf niet verkoopt' — consistent with the owner's publisher-line decision?
- Medical: quoting the NHG 'facultatief' reading and the NHG October 2025 text on medication obtained elsewhere on talking-to-your-doctor (nl-care 6.7, nl-help 6.7)
- Medical: keep world evidence on Dutch pages (Australian counterfeit Ozempic pens with insulin, TGA retatrutide statement, Health Canada contaminant list, Endocrine Society 2014)?
- Medical: 'vitamines of andere supplementen' in the bring-list is our illustration of Thuisarts's 'zelf gekocht'
- Owner: two one-line pointers to /nl/legal/be/ and the FAGG line (once per page) — within 'Belgium as short notes only'?

## safety-a (verdict: ready-after-fixes-made)

Files: src/content/pages/nl/safety/index.mdx, src/content/pages/nl/safety/warning-signs.mdx, src/content/pages/nl/safety/if-something-goes-wrong.mdx, src/content/pages/nl/safety/before-you-consider.mdx, src/i18n/nl/glossary/nl-safety-a.json, research/nl-notes/safety-a.md

### For the final sweep

- Verify anchors into other groups' pages still exist: /nl/safety/product-risk/#als-je-al-een-product-hebt (index, warning-signs) and /nl/talking-to-your-doctor/#je-rechten-geheimhouding-en-toestemming (before-you-consider); both headings checked in the Dutch files on 27 Oct. Other pages may link the contact cards at /nl/safety/if-something-goes-wrong/#hulp-en-melden-in-nederland
- Source registry notes (not mine, nl-help §7.3): thuisarts-verlamming (remove 'also if the symptoms have gone'), thuisarts-pijn-op-borst (last changed 27 Oct 2026); set accessed 2026-10-27 on rijksoverheid-urgent-medical-help, rijksoverheid-huisartsenpost-seh, lareb-bijwerkingen-melden, knmg-beroepsgeheim, knmg-beroepsgeheim-doorbreken, thuisarts-* (wondroos, sepsis, dikke-ogen-lippen, hiv-pep, naar-de-huisarts), rivm-hygiene-piercing, nvic-umcutrecht, lareb-2021-illegal-medicines, igj-online-medicijnen, igj-2025-illegal-online-medicines (re-read by nl-help that day)
- src/data/product-check.yaml: add local_sources.NL for 'stop' (thuisarts-wondroos, thuisarts-sepsis, thuisarts-dikke-ogen-lippen) as nl-help §7.4 proposes; the Dutch <ProductCheck /> on before-you-consider numbers its sources with the page's
- STYLE-NL §2: merge the style terms in research/nl-notes/safety-a.md (e.g. 'middel dat groeihormoon verhoogt' for growth hormone booster, 'GLP-1-achtig middel' for the class incl. unapproved products, 'schoon werken', 'jagend hart', 'bevruchte kippeneieren', 'eetlustremmers', 'wedstrijdsport', 'een verkoper waar je aan twijfelt', 'Geeft de arts mij aan?')
- Glossary: my file adds trimbos-instituut and jellinek; verschoningsrecht was removed from my file because nl-guides.json added the same id the same day; dims, antigifcentrum, dokter-van-wacht already exist in nl-about.json / nl-legal-core.json

### Remaining concerns

- Breastfeeding red line ('Alle') is stricter than the EU Mounjaro SmPC, which says use during breastfeeding 'kan worden overwogen'. The fold says so. Medical reviewer to decide (advertising test asks for SmPC consistency).
- MTC/MEN 2 red line ('niet gebruiken') although the EU SmPC lists no contraindication. The table says so openly. Medical reviewer.
- Levels faster than Thuisarts are kept: 112 for sepsis signs, very low blood sugar with confusion, pancreatitis, severe breathlessness or palpitations. Medical reviewer (nl-help §6.1).
- The English line 'Calling too often is better than calling too late' is left out of both Dutch pages because it has no source (nl-help §2.15).
- The Belgian note on if-something-goes-wrong is 4 sentences and prints 1733 and 070 245 245. It sits where English has its IE/NZ notes. The owner may want it cut to one line plus the link.
- 'Own use is not a KNMG exception' is our reading of the KNMG list. Legal reviewer.
- thuisarts-dikke-ogen-lippen supports 'never stop a prescribed medicine', but in the context of an allergic reaction. A more general source would be cleaner.
- Allergic reaction says '112' where Thuisarts names '112, huisarts of huisartsen-spoedpost'. The low-sugar first aid has no Thuisarts honey step. Medical reviewer.
- mhra-2026-02-semaglutide-naion was replaced by ema-prac-2025-06-naion in the provenance table. Both are evidence; the MHRA id can be added back with a marker if strict parity is wanted.
- In the if-something-goes-wrong TL;DR, Lareb and IGJ appear before their full names in the body (word limit).

### Open questions

- Medical: keep site levels faster than Thuisarts (sepsis signs, very low sugar with confusion, pancreatitis, severe breathlessness/palpitations at 112 vs Thuisarts 'bel direct de huisarts')? The provenance section says so for sepsis.
- Medical: severe allergy step 'use own adrenaline pen, then call 112 at once' (Thuisarts names 112, huisarts or spoedpost) - agree?
- Medical: low blood sugar keeps NHS/ADA steps; Thuisarts' honey/syrup-in-cheeks advice for helpers not added - agree?
- Medical: red line 'breastfeeding: all products' vs EU Mounjaro SmPC 4.6 'kan worden overwogen' (stated in the fold) - keep or soften for authorised medicines?
- Medical: MTC/MEN 2 red-line row kept although the EU SmPC does not contraindicate it (only the US label does); the page says this openly - keep?
- Medical: 'Rijd niet zelf ... of bel 112' while waiting, next to the Dutch rule 'SEH only via huisarts/huisartsenpost unless life is in danger' - clear enough?
- Legal: naming DIMS and Jellinek and saying they test no medicines or performance drugs (nl-help §6.10)
- Legal: 'Is zelf een middel gebruiken een van de uitzonderingen? Nee' is our reading of the KNMG list of five grounds
- Legal: pharmacist as the public's route for a suspected fake from a pharmacy (our reading of the CBG 24-hour duty)
- Legal: printing 0900-1995 with its price (Drugs Infolijn's own page) and Belgian 1733 and 070 245 245; the LMZ phone number is not printed (nl-help §6.8)

## safety-b (verdict: ready-after-fixes-made)

Files: src/content/pages/nl/safety/sterile-technique.mdx, src/content/pages/nl/safety/injection-safety.mdx, src/content/pages/nl/safety/sharps-disposal.mdx, src/i18n/nl/glossary/nl-safety-b.json, research/nl-notes/safety-b.md

### For the final sweep

- src/i18n/nl/explainers.json (contamination-infection) says 'rubberen dop', while the glossary vial-stopper entry and src/i18n/nl/product-check.json say 'rubberen stop'. Pick one word and add it to STYLE-NL §2.6
- docs/STYLE-NL.md: add the 'Style terms' rows from research/nl-notes/safety-b.md (rubberen stop, gebruiksruimte, vullijn, nepinjectie, the first mentions of WHO and CDC, and the nav labels veilig injecteren / naalden weggooien)
- src/data/sources/nl-research-eu-status.yaml, ema-pi-wegovy-nl (do not edit; for the merge list): the note does not yet mention SmPC 4.2 (injection places, not intravenous or intramuscular), 6.4 (fridge 2–8 °C, keep away from the cooling element, do not freeze, protect from light) or leaflet section 5 (direct sunlight). The pages cite it for these; all were read in the PDF on 27 October 2026
- src/data/sources/safety-a.yaml: the notes on rivm-hygiene-piercing (the live page answers now) and mainline-steroids-safe-injecting (Mainline closed in May 2026) are out of date, as nl-help §7.3 says. The pages do not cite Mainline
- Optional, for the owner: one Belgian line on sharps-disposal ('klein gevaarlijk afval (KGA)') once a Belgian source has been researched

### Remaining concerns

- Medical: the writer's 7 open questions still stand. The LCI disinfection step is now on both pages; if the reviewer drops it, drop it on both.
- Medical: 'minstens 30 seconden' and 'Knijp er niet in en wrijf er niet over' rest on the Australian healthdirect page, kept as a generic source because RIVM and LCI give no duration. LCI says 'goed doorbloeden (niet stelpen)'.
- Medical: the pus lump stays at the urgent level. That is faster than Thuisarts, whose steenpuist page advises an appointment unless there is fever; nl-help fact 17 keeps the site's level.
- Medical/legal: 'a closed or full needle container never goes in restafval in NL' is our reading of Milieu Centraal (needles are kca) and apotheek.nl. No Dutch source says it in those words.
- Style/owner: the title and nav label 'Veilig injecteren' use 'veilig' for a practice, not a compound. 'Veiliger injecteren' would be more cautious. Other groups link with these words, so any change belongs in the final sweep.
- Legal: the body text of lareb-2021-illegal-medicines names three illegal products; its title and URL name no seller. It is cited only for 'users of illegal medicines can report'.
- Minor: on sterile-technique, the TimeStrip labels '(WHO)' and '(CDC)' come before their full first mention.
- Final sweep (files I do not own): explainers.json says 'rubberen dop' where the glossary and product-check say 'rubberen stop'. The registry note of ema-pi-wegovy-nl lacks SmPC 4.2, 6.3/6.4 and the leaflet's sunlight line (all checked in the PDF today). The notes on rivm-hygiene-piercing and mainline-steroids-safe-injecting in safety-a.yaml are out of date.
- Two validator warnings in this folder belong to other groups' files (before-you-consider, if-something-goes-wrong). They are not touched.

### Open questions

- Medical: keep the LCI step 'Ontsmet de wond daarna (70% alcohol of jodiumoplossing)' in the needle-stick stop callout on sharps-disposal?
- Medical: does 'Knijp er niet in en wrijf er niet over' (from the English healthdirect steps) fit with LCI's 'goed doorbloeden (niet stelpen)'?
- Medical: after a prick the pages say huisarts or GGD, and the huisartsenpost when the practice is closed. RIVM also names 'het ziekenhuis', and the SEH appears only in Thuisarts's PEP line. Agree?
- Medical: should a pus lump stay at the urgent level ('Bel direct'), which is faster than Thuisarts, as on the warning-signs list?
- Medical: for a mild allergic reaction, add Thuisarts's 'Stop niet zomaar met je medicijnen' for people on a prescribed medicine?
- Medical: keep the new DRUGSinfo sentence on hitting an artery? It replaces the saved Mainline sentence on injecting into a vein
- Legal: may a peptide page name the spuitomruil, the Drugs Infolijn and Lareb? Wegovy is named for label facts only (injection places, storage): is that within the SmPC line?

## safety-c (verdict: ready-after-fixes-made)

Files: src/content/pages/nl/safety/product-risk.mdx, src/content/pages/nl/safety/monitoring.mdx, src/data/sources/nl-safety-c.yaml, src/i18n/nl/glossary/nl-safety-c.json, research/nl-notes/safety-c.md, config/link-allowlist.json (one host added: www.rva.nl)

### For the final sweep

- src/data/product-check.yaml: add local_sources.NL for 'stop' (thuisarts-wondroos, thuisarts-sepsis, thuisarts-dikke-ogen-lippen), as nl-help §7.4 and merge.md propose
- src/i18n/nl/product-check.json keep.text 'Een lab kan testen wat erin zat.': may suggest that a reader can have a vial tested, but no Dutch public service tests a peptide vial. Suggested wording: 'Een arts kan het dan laten onderzoeken.'
- src/data/sources/shared.yaml eu-directive-2001-83: point the url to the 1 January 2025 consolidation (CELEX:02001L0083-20250101). Arts. 40, 48, 51, 54 and 111 were read there today, same wording
- src/data/sources/safety-b.yaml igj-2026-10-stolen-medicines: accessed 2026-10-27 (re-read today)
- Glossary: no entries for 'Trimbos-instituut', 'Jellinek' or 'eigen bijdrage' (used on these pages, explained in context). nl-safety-c.json basisverzekering has see_also 'basispakket', an id in nl-about.json (another group's file): keep that id or update the see_also
- fda-considering-online-pharmacy stays for 2 cells of the product-risk warning-signs table (seal and packaging; no pharmacist to ask): swap it for a Dutch or EU source if one is registered
- Cross-group anchors to keep stable: /nl/safety/sterile-technique/#bewaren-en-de-koudeketen and /nl/talking-to-your-doctor/#je-rechten-geheimhouding-en-toestemming (headings checked in those Dutch files today). Other Dutch pages link /nl/safety/product-risk/#nep-pennen-met-insuline and #als-je-al-een-product-hebt: both headings exist

### Remaining concerns

- Medical reviewer: product-risk stop callout keeps 112 when drowsy or confused; Thuisarts (cited beside the NHS) gives 112 only when unconscious
- Legal reviewer: placement of the added Wegovy indication sentence on monitoring (blood-fats fold) under the advertising test; no indication line added for Mounjaro (only side effects and checks named)
- fda-considering-online-pharmacy (US consumer advice) still supports two warning-sign cells (seal/packaging; no pharmacist to ask): no Dutch or EU equivalent found
- Final sweep (files not owned): extend notes of ema-pi-wegovy-nl and ema-pi-mounjaro-nl (4.4 traceability, 4.5, 4.6, 4.8 heart rate, 5.1, 6.6 now cited), nl-wgbo-art-454-456-records (7:456 exception), igj-2025-illegal-online-medicines (modified 24 November 2025; its 'betrouwbare verkopers/logo' advice must never be repeated); eu-directive-2001-83 url still the 2022 consolidation
- Style terms for the final sweep: 'Qualified Person' and 'second opinion' (English terms kept, glossary ids exist); 'afvallen en op gewicht blijven' for the SmPC's 'gewichtsbeheersing'
- MedlinePlus (US NLM) remains the source for what each blood test measures; no Dutch equivalent registered
- Writer's open legal questions (naming DIMS/Jellinek, quoting the IGJ 'u' advice, seller-column signs, naming the RvA) stand for the legal reviewer
- Notes: research/nl-notes/safety-c.md section '## Check (independent, 27 October 2026)' lists every change; pages: C:/dev/Peptides-explained/src/content/pages/nl/safety/product-risk.mdx, C:/dev/Peptides-explained/src/content/pages/nl/safety/monitoring.mdx; glossary C:/dev/Peptides-explained/src/i18n/nl/glossary/nl-safety-c.json

### Open questions

- Medical: on product-risk the stop callout says 'Word je suf of verward? Dan moet iemand 112 bellen.' Thuisarts gives 112 only for unconsciousness (confused means spoed huisarts). Is keeping the faster English level right (nl-help §6.1)?
- Medical: is the NHG October 2025 sentence (the GP is not responsible for periodic checks of medication obtained elsewhere, but has a role in recognising side effects and complications) fair and safe to quote for unlicensed products, framed as 'go to your GP with complaints' (nl-care §6.7, nl-help §6.7)?
- Medical: the EU and US Mounjaro labels differ on the pill (EU: single-dose effect not clinically relevant, contraception advised; US: switch or add a barrier method for 4 weeks). Both are shown with 'Bespreek met je arts'. Is that enough?
- Medical: should both the EU and the US heart-rate numbers stay, or the EU ones only?
- Medical: should the MedlinePlus lab-test pages later give way to Dutch sources?
- Legal: may the page name DIMS and Jellinek's test service, to say they do not test peptides or medicines (nl-help §6.10)?
- Legal: is quoting the IGJ advice 'Hebt u medicatie online gekocht? Gebruik die niet ...' acceptable?
- Legal: the seller column ('Verkoopt een receptmedicijn zonder recept', 'Is geen apotheek') and the added line on IGJ/CBG logos used as false endorsements are negative-only signs. Are they acceptable under CONTENT-GUIDE §1a?
- Legal: does naming the Raad voor Accreditatie as the Dutch accreditation body risk reading as help in finding a lab? No register is linked and no lab is named
- Legal: on monitoring, does naming the lipid and body-composition effects of semaglutide (from the Dutch SmPC, next to the warnings) pass the 'in line with the SmPC' test without the SmPC indications on that page?

## basics-a (verdict: ready-after-fixes-made)

Files: src/content/pages/nl/basics/index.mdx, src/content/pages/nl/basics/what-is-a-peptide.mdx, src/content/pages/nl/basics/how-signalling-works.mdx, research/nl-notes/basics-a.md

### For the final sweep

- src/i18n/nl/glossary/safety-b.json deletion-sequence: aliases 'ingekorte sequentie(s)' mean truncated sequences, a different impurity; suggest removing them (page uses 'afgebroken sequenties')
- src/data/sources/nl-research-nl-help.yaml thuisarts-hypo-diabetes-type-2: note says 'cited only for the action levels'; basics-a also cites it for the symptoms (shaking, confusion, unconsciousness/coma mainly with insulin), verified 27 Oct; owner may widen the note
- src/data/sources/shared.yaml eu-directive-2001-83: no note; suggest adding art. 51(1)(a) Qualified Person batch responsibility, read 27 Oct 2026 via CELLAR (CELEX 02001L0083-20220101)
- src/data/sources/bpc-157.yaml ema-medicines-json: accessed 2026-10-20 while research re-downloaded it 27 Oct; owner may update
- src/i18n/nl/explainers.json glp1-action.summary/.caption name semaglutide effects without indication or side effects; UI owner to check against the advertising test (the how-signalling fold below carries SmPC indications, side effects, contraindication and off-label)
- English (not edited): src/content/pages/en/basics/how-signalling-works.mdx Compare row 'Binds the receptor?' renders 'Yes Yes' because <Verdict> prints the word and the cell repeats it
- STYLE-NL candidates listed in research/nl-notes/basics-a.md 'Style terms' (e.g. efficacy -> intrinsieke activiteit, EMA guideline -> wetenschappelijke richtlijn van het EMA, leuprolide -> leuproreline (Amerikaanse naam: leuprolide), 'the body pushes back' -> het lichaam stuurt tegen)

### Remaining concerns

- Medical/legal: the semaglutide SmPC paragraph in the GLP-1 fold of how-signalling-works (now all five EU products, Dutch 4.1 indications, 4.8 side effects, 4.3 contraindication, off-label framed as off-label) adds about 150 words that English lacks. I kept it because the fold names wanted effects. The reviewer may prefer a single link to /nl/compounds/semaglutide/.
- UI strings (not this group's file): src/i18n/nl/explainers.json glp1-action summary and caption name semaglutide's effects without indication or side effects, and the explainer shows on this page. Needs the UI owner's advertising-test check.
- how-signalling-works now prints the label strengths <Q>2,4 mg</Q> and <Q>7,2 mg</Q> (SmPC 4.5), as the Dutch semaglutide page does. A no-number fallback wording is in the notes if the reviewer wants none on basics pages.
- Regulatory: please confirm the reworded EU row and fold reading of the EMA synthetic-peptides guideline.
- Medical: B2 pharmacology terms 'intrinsieke activiteit' (efficacy), 'biased agonisme', 'potentie', 'desensitisatie'.
- Final sweep: src/content/compounds/nl/pt-141.mdx says '1.267 vrouwen' for the phase 3 trials, while this page says '1.247' (Vyleesi label 6.1). The two Dutch pages should agree on which count they give. eu-directive-2001-83 still points at the 2022-01-01 consolidation (art. 51 unchanged). The writer's sweep items stand (deletion-sequence aliases 'ingekorte sequentie(s)', the thuisarts-hypo note, the eu-directive note, the ema-medicines-json accessed date, the English 'Yes Yes' Compare cell).

### Open questions

- Medical/legal: is the added semaglutide SmPC paragraph (indications from the Dutch SmPCs, Wegovy 4.8 side effects, 4.3 contraindication, Ozempic-for-weight-loss as off-label) in the GLP-1 fold of how-signalling-works the right way to meet the advertising test on a mechanism page, or should the fold only link /nl/compounds/semaglutide/? (~110 words English lacks)
- Regulatory: the added EU row and fold paragraph on what-is-a-peptide read the EMA 2025 synthetic-peptides guideline as drawing the line by manufacture, not size ('chemically synthesised peptides fall outside the definition of a biological substance'; no amino-acid count). Confirm this is a fair summary
- Medical: check B2 pharmacology terms (intrinsieke activiteit for efficacy, potentie, partiële agonist, biased agonisme, desensitisatie, 'eilandjes van Langerhans uit dieren')
- Legal: index and what-is-a-peptide describe BPC-157, TB-500, KPV as 'buiten de apotheek verkocht' (body text, factual, no praise); confirm under the advertising test

## basics-b (verdict: ready-after-fixes-made)

Files: src/content/pages/nl/basics/pharmacokinetics.mdx, src/content/pages/nl/basics/why-not-a-pill.mdx, research/nl-notes/basics-b.md

### For the final sweep

- When the European Commission decides on Foundayo, update why-not-a-pill.mdx in three places: the Compare row 'Goedgekeurd in Nederland en de EU?', TL;DR item 5, and the last sentence of the 'Bewijs bij mensen' bullet
- src/data/sources/basics.yaml: ema-epar-foundayo-opinion has accessed 2026-10-22. It was re-read on 27 October 2026 (still 'Opinion'), so its owner may set accessed: 2026-10-27
- src/data/sources/bpc-157.yaml: the note of ema-medicines-json names only the BPC-157 searches of 20 October. These pages cite it, as the eu-status research did, for 'not authorised EU-wide' of TB-500, KPV and Semax. The merge may update its accessed date and note
- src/data/sources/legal-a.yaml: the note of eu-regulation-726-2004 does not mention art. 13(1), which why-not-a-pill cites it for. eu-status.md §7 suggests the note line
- Link texts to other groups' pages, written before those pages existed: /nl/evidence/the-translation-gap/, /nl/safety/product-risk/, /nl/safety/monitoring/, /nl/basics/how-signalling-works/, /nl/basics/what-is-a-peptide/. No anchors are used; align the wording with those pages' Dutch titles if wanted
- last_reviewed is 2026-10-24 on both pages, as on English (brief). The editor may set 2026-10-27, the date of the Dutch status check
- Semaglutide writers: the Dutch Rybelsus SmPC 5.2 as extracted reads 'ongeveer 12%' for the new tablets. The English EU SmPC says 'approximately 1-2%', so never quote 12%

### Remaining concerns

- Legal: why-not-a-pill gives orforglipron's phase 2 weight-change range (−9,4% to −14,7% against −2,3%) and its US/UK approvals (a marked world-context row). Orforglipron has no Dutch handelsvergunning and no Commission decision. Both are as on English and balanced (claim level, design, funding, dropouts, boxed warning). Is that acceptable under the 2026 advertising case law?
- Medical/legal: why-not-a-pill TL;DR 4 names one side effect in 18 words. The full SmPC indication, side effects, pancreatitis rule and contraindication are in the fold. Is that balanced enough?
- Legal: the SmPC intake rules (lege maag, 8 uur, 120 ml, 30 minuten) are stated as the product information's rules, now in the third person, followed by 'De arts die het voorschrijft, legt uit hoe dit in je dag past.' (writer's question 2)
- Wegovy tablets are named without their indication (Compare row, KeyNumber), because no effect is claimed there. If the brief means every EU product named gets its SmPC indication, add '(gewichtsbeheersing bij volwassenen)' from ema-pi-wegovy-nl 4.1
- pharmacokinetics, last sentence: 'veelbelovend' was left out ('een resultaat bij dieren'). That is slightly weaker than the English 'promising'; kept as the writer chose
- Semax 'als medicijn toegelaten' for the FDA's 'registered drug in Russia', and the desmopressin/ciclosporin US dates kept as history/world context (writer's questions 6 and 7)
- For the merge, not wrong but incomplete: the ema-medicines-json note covers only the BPC-157 searches of 20 October, yet the pages cite it for TB-500/KPV/Semax as eu-status does. The ema-pi-wegovy-nl note lacks the 5.2 89% and injection-site lines the pages now cite. eu-regulation-726-2004 lacks the art. 13(1) note. All are in the notes' final-sweep list
- Foundayo: when the European Commission decides, three places on why-not-a-pill must change (Compare NL/EU row, TL;DR 5, the 'Bewijs bij mensen' bullet)
- last_reviewed stays 2026-10-24 as on English (brief); the Dutch status lines carry their own date of 27 October 2026

### Open questions

- Advertising test: is TL;DR item 4 of why-not-a-pill balanced enough with only one side effect in 18 words ('Ja, bij diabetes type 2, vaak met misselijkheid als bijwerking. Slechts 1 tot 2% komt in het bloed.')? The full indication, side effects, pancreatitis stop rule and contraindication are in the fold below (medical/legal)
- May the tablet intake rules from the SmPC (empty stomach, 8 hours, 120 ml, 30 minutes) stand on the page as the product information's rules, followed by 'De arts die het voorschrijft, legt uit hoe dit in je dag past'? The English page states the US label's rules the same way (legal)
- The 89% subcutaneous bioavailability stays attributed to the US label only, because the Dutch Wegovy SmPC gives no absolute figure. Is that fine (medical)?
- '5 tot 7 weken' combines the Dutch Rybelsus SmPC (about 5 weeks), the Dutch Wegovy SmPC (about 7 weeks) and the US label (5 to 7 weeks). Is that fine (medical)?
- Semax: 'In Rusland is Semax als medicijn toegelaten' stands in for the FDA's 'registered drug', because STYLE-NL avoids 'geregistreerd'. Is that acceptable?
- Desmopressin (US 1978) and ciclosporin (US 1983 and 1990) stay as marked world context or history, as on English. Keep them, or should the writers research EU dates instead?

## evidence-a (verdict: ready-after-fixes-made)

Files: src/content/pages/nl/evidence/index.mdx, src/content/pages/nl/evidence/how-to-read-a-study.mdx, src/content/pages/nl/evidence/evidence-grading.mdx, research/nl-notes/evidence-a.md

### For the final sweep

- evidence/index and how-to-read-a-study use the link texts 'De kloof tussen dier en mens' (/nl/evidence/the-translation-gap/) and 'Belangenconflicten' (/nl/evidence/conflicts-of-interest/). They should match the nav_title those groups choose for their pages.
- Three validator warnings say a related route 'does not exist (yet) in nl': start-here, evidence/conflicts-of-interest and about/editorial-policy. They clear once those Dutch pages are written.
- No change is needed in shared files. The heroes (wooden-ladder, coin-toss, three-measuring-scales) already have Dutch captions in src/i18n/nl/media.json, and no allowlist host was added.

### Remaining concerns

- Legal: the SELECT worked example still uses an effect of an authorised medicine (20% fewer cardiovascular events) as the main example of the statistics page. The harms are in the visible section; the indication, contraindication and pregnancy/breastfeeding lines are in the fold. Is that placement enough for the 2026 advertising test (nl-law fact 17a)?
- Medical: the harms line puts SELECT's 'adverse events leading to permanent discontinuation' (not all caused by the medicine; explained in brackets) next to the SmPC's most reported side effects. Check the weight of this line.
- Medical and legal: Scott 2008 names riluzole (EU-authorised) as the only drug with corresponding clinical efficacy in ALS. The text gives this without its size or risks, as history from the source.
- Medical: the NAION frequency uses only the PRAC wording; the SmPC's 'about 1 extra case per 10.000 patiëntjaren' is not added (eu-status open question 8, left to the reviewer)
- Final sweep: conflicts-of-interest.mdx (another group's file) uses 'samenvatting' for an article's abstract, but this group now uses 'abstract'. The terms 'bewijsniveau' and 'krantenkop' should also be made the same across the evidence pages.
- The writer's notes still say there are 3 validator warnings. The appended '## Check (independent, 27 October 2026)' section in C:/dev/Peptides-explained/research/nl-notes/evidence-a.md records that there are now 0.

### Open questions

- Medical: is the side-effect line now shown under the SELECT worked example the right weight for a statistics page? It gives discontinuation for adverse events, 16,6 vs 8,2 in 100 (from the PubMed record), and the GI side effects from SmPC 4.8. Or should it stay only in the fold?
- Medical: the fold lists 'niet tijdens de zwangerschap', which comes from SmPC 4.6, next to the 4.3 contraindication (hypersensitivity only). Is that acceptable?
- Medical: the ALS fold keeps 'behalve riluzole had geen enkel middel bij patiënten gewerkt' (Scott 2008). This names an authorised medicine as having worked, without its risks. Keep it as it is?
- Legal: do the two semaglutide passages now pass the advertising test of nl-law fact 17a? They are the SELECT worked example and the independence bullet, and now carry the SmPC indications (Ozempic/Wegovy 4.1), the main side effects and the contraindication. No off-label use is mentioned.

## evidence-b (verdict: ready-after-fixes-made)

Files: src/content/pages/nl/evidence/the-translation-gap.mdx, src/content/pages/nl/evidence/conflicts-of-interest.mdx, src/i18n/nl/glossary/nl-evidence-b.json, research/nl-notes/evidence-b.md

### For the final sweep

- src/data/sources/nl-research-nl-law.yaml igj-geneesmiddelenreclame-wat-is: the note quotes only the advertising sections. Add the gunstbetoon sentences ('Gunstbetoon is verboden, op een paar uitzonderingen na', the mutual give/accept rule, paid lectures and advice within maximum hourly rates) and the Transparantieregister Zorg sentence, re-read 27 Oct 2026 (page modified 4 Nov 2025). The conflicts page cites it for these.
- Glossary: nl-evidence-b.json adds gunstbetoon and transparantieregister-zorg. A grep of all Dutch glossary files found neither. If a legal group adds the same concepts, keep one id.
- Glossary gap: no Dutch entry exists for publieksreclame or reclame. My pages avoid the word; the legal glossary owner may want to add one.
- docs/STYLE-NL.md: merge the 'Style terms' rows from research/nl-notes/evidence-b.md §5, above all 'de kloof tussen dier en mens' for the translation-gap page (the title now matches the evidence index and how-to-read-a-study link texts), plus dierdosis, ontwikkeltraject, beslissende studies, roofjournal, spookauteur/ere-auteur, impactmaat and gunstbetoon. Also 'de Amerikaanse overheidsverzekering voor ouderen' wherever Medicare (an error term) must be described.
- Optional: the translation-gap page cites ema-epar-wegovy for >99% albumin binding, as English does. The Dutch SmPC (ema-pi-wegovy-nl, section 5.2) says the same if a Dutch-language source is preferred.

### Remaining concerns

- Medical: the translation-gap semaglutide paragraph names only Ozempic and Wegovy. Rybelsus, Kayshild (MASH, conditional) and the Wegovy tablets are left out ('in verschillende producten' avoids claiming completeness). The reviewer may want Rybelsus named.
- Medical: 'kans (odds)' in two B1 labels simplifies odds as a kind of chance, as the Dutch odds-ratio glossary entry does. The exact odds ratios stay in the folds.
- Legal: the gunstbetoon and Transparantieregister Zorg lines rest on one IGJ page (fetched 27 Oct 2026). An initiative bill on the register is pending (Kamerstukken 35410, nl-law fact 1). The page does not say whether the register is statutory.
- Legal: the Rb Noord-Nederland 2026 case (a church minister, ivermectin, video channel) sits in the influencer fold as proof that the rules apply to anyone. It is not an influencer case in the narrow sense.
- Style sweep: 'umbrella review' is kept because it is the Dutch glossary term (umbrella-review), but it conflicts with STYLE-NL §2.8. New style rows for the final sweep: kenmerk (sign), goed opgezette studie (fair trial), de studies waarop de goedkeuring rustte (pivotal trials), kans (odds). They are listed in research/nl-notes/evidence-b.md, together with the writer's IGJ source-note addition for nl-research-nl-law.yaml.

### Open questions

- Medical: the semaglutide paragraph added under the translation-gap Compare (for the advertising test) gives B1 Ozempic and Wegovy 4.1 indications, the 4.8 most-reported side effects and a contraindications line. Is it in line with the SmPC? Should Rybelsus be named too?
- Medical: the Compare cell says semaglutide was shown to work 'voor de onderzochte toepassingen', cited to SELECT. Its cardiovascular result is in Wegovy SmPC 5.1, which 4.1 refers to. Is that acceptable as in line with the SmPC?
- Medical: are these terms acceptable on a B2 page? 'odds' and 'oddsratio' as statistical terms, 'eerlijke studies' for Hackam's 'fair trials', 'redelijke kwaliteit' for GRADE moderate, and 'een plotselinge beschadiging van de oogzenuw' as the bracketed NAION gloss.
- Legal: is the B1 summary of gunstbetoon and the Transparantieregister Zorg correct? Both come from the IGJ page, which does not say which relationships the register holds.
- Legal: is the Rb Noord-Nederland 2026 ruling fairly framed as an influencer-context example ('liet een boete in stand … verlaagde de boete wel')? The appeal succeeded only on the time limit.

## history-a (verdict: ready-after-fixes-made)

Files: src/content/pages/nl/history/index.mdx, src/content/pages/nl/history/timeline.mdx, src/content/pages/nl/history/how-we-got-here.mdx, src/data/timeline.yaml, src/i18n/nl/timeline.json, src/i18n/nl/glossary/nl-history-a.json, research/nl-notes/history-a.md

### For the final sweep

- src/i18n/nl/timeline.json: the existing entries nl-wog-1958 and nl-geneesmiddelenwet-2007 write 'Wet op de Geneesmiddelenvoorziening'. STYLE-NL §4.2 gives 'Wet op de geneesmiddelenvoorziening'. I left them unchanged because no existing event may be changed. nl-wog-1958 could also mention the 1963 registration duty
- src/data/sources/about.yaml ema-conditional-marketing-authorisation: add the scope I read on 27 October (seriously debilitating or life-threatening diseases, orphan medicines, public health emergencies) and accessed 2026-10-27
- src/data/sources/nl-research-nl-care.yaml nl-mvt-2003-geneesmiddelenwet: add the §4.3 sentence on the authorisation criteria and 'Het CBG bestaat al sinds 1963' to the note. Both are cited on history/index and how-we-got-here
- src/data/sources/history.yaml eu-directive-65-65: add art. 22 (eighteen months) and art. 10 (renewal by five-year periods) to the note, both read via CELLAR today. The nl-care note for nl-wog-1958 (1963) is still pending
- src/data/heroes.yaml: history/timeline uses fda-lab-1960s (a US lab) on Dutch too. An nl-only European photo is optional
- Notes already raised by the merge: ema-under-evaluation-2026-10 and ema-medicines-json notes are narrower than what they are cited for, and the eu-regulation-726-2004 note lacks art. 13(1)

### Remaining concerns

- Writer's open questions 1–5 stand: legal reading of the artsenverklaring 'Niet per se' cell; calling the 1963 college 'het CBG'; the length of the UK/CA/AU history section; last_reviewed 2026-10-27 vs English 2026-10-24; 'veilig' used only for historical legal requirements
- The UK/AU/CA thalidomide responses restored on the timeline page as history (brief: history stays where English has it); the owner may prefer the Dutch timeline page NL/EU only
- Not restored on purpose: TGA finding that a 'retatrutide' vial held semaglutide (au-tga-2026-09-retatrutide-counterfeit) and UK/CA/AU enforcement 2025–2026; the reviewer may want the TGA lab finding back as world context
- tesamorelin-withdrawal-eu has category 'approval' (as the merge proposed), so a withdrawn application shows under 'Goedkeuringen'; 'regulation' may fit better
- Source notes narrower than their use here (claims rest on the 27 October fact-checks): ema-medicines-json, ema-under-evaluation-2026-10, cbg-compassionate-use-list, cbg-ozempic-shortage (accessed 20 October; re-read today), ema-conditional-marketing-authorisation (scope sentence not in note)
- Accelerated-approval column of the routes Compare rests on the English check (FDA page re-fetched 26 October), not re-fetched today
- For the final sweep (not my files): the same 'Ja Ja'/'Nee Nee' verdict duplication on src/content/pages/nl/compounds/index.mdx:27, src/content/compounds/nl/nad-precursors.mdx:122, retatrutide.mdx:172, ss-31.mdx:116; capital 'Wet op de Geneesmiddelenvoorziening' in two existing timeline texts; eu-directive-65-65 note additions

### Open questions

- Legal: is 'Niet per se' (artsenverklaring not limited to serious illness, only when authorised medicines do not fit for medical reasons; IGJ 'uiterste gevallen') the right reading of Regeling Gnw art. 3.17?
- Legal: the memorandum says 'Het CBG bestaat al sinds 1963' while the 1958 act names the 'College ter beoordeling van verpakte geneesmiddelen'. Is it right to call that college 'het CBG' from 1963?
- Owner/editorial: how-we-got-here keeps the UK, Canada and Australia section in full as law history, as the brief says. Shorten it on the Dutch site?
- Editorial: last_reviewed is set to 2026-10-27 on all three pages, the day the Dutch facts were checked (English has 2026-10-24). Change it if 'as on English' was meant literally
- Medical: 'veilig' appears only for what the 1906/1938 US laws required ('laten zien dat een nieuw medicijn veilig was', in the three-checks figure), never as a claim about a compound. Acceptable?

## history-b (verdict: ready-after-fixes-made)

Files: src/content/pages/nl/history/the-croatian-lab.mdx, src/content/pages/nl/about/index.mdx, src/content/pages/nl/about/corrections.mdx, src/i18n/nl/glossary/nl-history-b.json, research/nl-notes/history-b.md

### For the final sweep

- src/data/corrections.yaml + src/i18n/nl/corrections.json: when the owner says yes to publishing, add a Dutch publication entry (e.g. nl-v1-publication, kind publication, routes ['*'], locales [nl]) with its Dutch text. Keep v1-publication and tesamorelin-approval-answer at locales [en]. The Dutch corrections Lead needs no change after that.
- docs/STYLE-NL.md §5.2 still has the older publisher-line draft. The brief's 'Added after step 1' item 1 replaces it, and /nl/about/ uses the brief's text. Align §5.2 so the editorial-policy and funding writers use the same line.
- docs/CONTENT-GUIDE.md §1 'The absence of commerce is what makes the content legal' is an owner decision (nl-law §6.2). Not edited.
- Validator warnings 'related … does not exist (yet) in nl' for about/editorial-policy, about/funding, the-case-for-reform, legal/whats-changing and evidence/evidence-grading. They clear once the other groups' pages land.
- Style terms that STYLE-NL lacks are listed in research/nl-notes/history-b.md under 'Style terms' (publicatie for PubMed record, oorspronkelijke studie, vertekening (bias), toonaangevend/spraakmakend, moleculair doelwit, tikfout, werkdag, overzicht van correcties/bericht, and others).

### Remaining concerns

- Owner decision (legal): the about-page publisher line is the brief's draft, and 'handelsvergunning' is not explained in the sentence itself on this B1 page; only the glossary tooltip explains it. If the owner wants '(goedkeuring als medicijn)' added, it should go into all three pages that carry the line at once (about/index, about/editorial-policy, legal/nl)
- Legal: is 'Ook wie niets verkoopt, kan reclame maken: de rechter kijkt of een tekst een middel aanprijst' a fair B1 summary of ECLI:NL:RVS:2026:1072 para. 6.3?
- Legal: the Croatian-lab page names PLIVA (the developer) and Parke-Davis (the lab of the 1995 rat study) as study affiliations, as the English page does. Is that acceptable on a Dutch page?
- Medical: please confirm the qualifier 'Die resultaten komen vooral uit studies bij ratten en muizen'. It rests on the page's own count and the FDA briefing
- When the Dutch site is published, src/data/corrections.yaml needs a Dutch publication entry (locales [nl]). Until then the Dutch corrections log stays empty and gives the reader no start date. This is a final-sweep item; I did not edit that shared file
- Translator: the choices 'publicaties' (PubMed records), 'oorspronkelijke studies' (primary studies), 'spraakmakende' (high-profile) and 'toonaangevende' (landmark) still need the medical translator's check

### Open questions

- Legal (owner decision, nl-law §6.2/6.8): is the publisher line's B1 summary 'Ook wie niets verkoopt, kan reclame maken: de rechter kijkt of een tekst een middel aanprijst' a fair reading of ECLI:NL:RVS:2026:1072 para. 6.3? Should the about page also name the SmPC test for authorised medicines (Rb Amsterdam para. 10.1), or does that belong on the editorial-policy page?
- Legal: the Croatian-lab page names PLIVA (the developer) and Parke-Davis (the lab of the 1995 rat study) as study affiliations, as the English page does. Is a neutral affiliation in a study description acceptable on a Dutch page? CONTENT-GUIDE §11 bars only source titles and URLs.
- Medical: confirm the qualifier added for the advertising test: 'vooral in studies bij ratten en muizen' on the group's reported benefits across many conditions.
- Translator: confirm 'publicaties' for PubMed records (these include reviews, letters and errata) and 'oorspronkelijke studies' for primary studies.

## about (verdict: ready-after-fixes-made)

Files: src/content/pages/nl/about/editorial-policy.mdx, src/content/pages/nl/about/funding.mdx, src/content/pages/nl/the-case-for-reform.mdx, src/i18n/nl/glossary/nl-about.json, research/nl-notes/about.md

### For the final sweep

- docs/STYLE-NL.md §5.2 still has the older publisher line; the about pages use the brief's 'Added after step 1' item 1 draft word for word — align §5.2 so about/index uses the same text
- docs/CONTENT-GUIDE.md §1 'The absence of commerce is what makes the content legal' is contradicted by the 2026 rulings (nl-law §4 conflict 1) — owner decision, not edited
- Merge src/i18n/nl/glossary/nl-about.json (eudravigilance, basispakket, dims); public-advertising and raad-van-state already exist in nl-legal-sport-changing.json, so not duplicated
- eu-directive-2001-83 (shared.yaml) still points to the 2022-01-01 consolidation; art. 10 was read in the 2025-01-01 consolidation (same text) — owner of shared.yaml may update url/accessed
- ema-under-evaluation-2026-10 (pt-141.yaml) and ema-2026-10-under-evaluation (retatrutide.yaml) are the same document; the reform page uses the latter
- accessed dates of ema-medicines-json, lareb-bijwerkingen-melden, knmg-beroepsgeheim, igj-2025-illegal-online-medicines are 20–22 Oct although research re-read them on 27 Oct — owners may update
- last_reviewed set to 2026-10-27 on the two about pages (English: 2026-10-24) because the Dutch publisher line and case law were checked today; revert if the sweep wants English dates
- Nothing needed in config/link-allowlist.json, heroes.yaml, media.json (kelsey-kennedy-1962, book-and-magnifier, pharmacy-balance, tweede-kamer-plenary-hall captions exist) or locale-residue.json

### Remaining concerns

- last_reviewed 2026-10-27 on the two about pages vs 2026-10-24 on English (brief says 'as on English'); kept, sweep decides
- advertising test: RECOVERY (dexamethasone/hydroxychloroquine), thalidomide's uses and the Wegovy indication name an authorised medicine's effect/indication without side effects; kept for science parity, legal reviewer to judge
- funding page does not repeat the brief's publisher line verbatim (keeps 'Dutch law decides' plus 'ook zonder geld kan een tekst reclame zijn'); owner to confirm
- Rb Amsterdam 10 April 2026 possibly under appeal (nl-law 5.15); about pages state only what the court decided
- reform fold 4 lists 'in voorraad te hebben' (law text) while private possession is UNRESOLVED (nl-law 5.1); legal reviewer
- NHG quote on periodic checks belonging to the prescriber (nl-care 6.7): medical reviewer
- 'Testen maakt een product niet veilig' is now the site's own sentence where English quotes the ACT Government; owner decision
- two source ids for one EMA document (ema-2026-10-under-evaluation, ema-under-evaluation-2026-10); for the sweep
- accessed dates 2026-10-20 on zin-2024-wegovy-not-reimbursed and cbg-glp1-position (re-read today, unchanged); file owner may update
- douane-2026-08 and nl-rbams-2026-5160 bodies name businesses; cited without quoting names (nl-law 6.12)
- STYLE-NL §5.2 still has the older publisher line and CONTENT-GUIDE §1 'absence of commerce' contradicts the 2026 rulings (writer's final-sweep items, owner decision)
- Notes: C:/dev/Peptides-explained/research/nl-notes/about.md, section '## Check (independent, 27 October 2026)' (change table, owner additions 23-26, 11 reviewer concerns)

### Open questions

- Legal: is the five-point 'what this means for our pages' list (advertising test) a fair reading of Gnw art. 84–85, the IGJ page and the RvS 25 Feb 2026 / Rb Amsterdam 10 Apr 2026 rulings, and may an about page name those rulings (the Amsterdam text names a publisher and brands, never quoted)?
- Legal: B1 rendering 'in wervende woorden de beweerde goede kanten … benadrukten' for RvS para. 6.3 ('gestelde positieve eigenschappen')
- Legal: reform fold 4 'Gebruiken staat niet als overtreding in de wet. Invoeren wel, en voor eigen gebruik geldt geen uitzondering' (art. 40(2); art. 18(6)(a) lifts only the art. 18 licence)
- Legal: douane-2026-08-illegale-online-handel-medicijnen is cited for 'other peptides are popular'; its body names a webshop (nl-law 6.12) — acceptable without quoting?
- Legal/medical: reform names Wegovy with its SmPC indication but no effect; does the advertising test also need the main side effects there?
- Legal/medical: retatrutide (investigational, art. 84(1)) weight result kept with Claim level; TRIUMPH-2 side effects, stopping rate and the 80-week limit were added — sufficient?
- Legal: fair to present the artsenverklaring as access that 'niet in handen van de patiënt' lies (only a Dutch manufacturer, wholesaler or pharmacist may apply)?
- Editorial policy: 'Alleen wie daarin staat, mag een beschermde titel als arts voeren' (BIG-register page) — correct?
- Owner: approve every listed difference of the Dutch reform page (22 items in research/nl-notes/about.md §3), the replaced publisher line on editorial-policy, and funding's adapted diagram item 4 ('Without money from sales, our information stays information' replaced)

## semaglutide (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/semaglutide.mdx, src/data/compounds/semaglutide.yaml, src/data/sources/nl-semaglutide.yaml, src/i18n/nl/glossary/nl-semaglutide.json, src/i18n/nl/glossary/semaglutide.json, research/nl-notes/semaglutide.md

### For the final sweep

- src/data/compounds/semaglutide.yaml EU row: consider adding ema-epar-kyinsu, ec-union-register-kayshild, ec-union-register-kyinsu to its sources (we only appended the two authorised_products rows)
- EU product names in data are English and render on the Dutch products table ('Wegovy (injection)', 'Wegovy (tablets)', 'Kyinsu (with insulin icodec)'): suggest a localised product name (schema or i18n map) or neutral names
- names.brands lacks Kayshild and Kyinsu (left unchanged because English shows the list); add per locale if brands become localisable
- src/i18n/nl/glossary/tirzepatide.json insulin-glargine: generic alias 'langwerkende insuline' should be dropped or moved to basal-insulin (nl-semaglutide.json)
- Source notes/dates to refresh: zin-2024-wegovy-not-reimbursed, ema-2023-falsified-ozempic, igj-2023-falsified-ozempic (re-read 27 Oct; EMA 2023 names no insulin), cbg-glp1-position, zin-wegovy-reassessment, fk-semaglutide (re-read by research/nl, accessed still 2026-10-20) in semaglutide.yaml
- ema-under-evaluation-2026-10 (pt-141.yaml): note covers bremelanotide only; add the three generic semaglutide rows EMEA/H/C/006847, 006902, 006910
- ema-epar-kayshild (refocus-ireland-nz.yaml): note speaks of the HPRA list; add CHMP opinion 29 Jan 2026 and conditional status for Dutch use; ema-medicines-json (bpc-157.yaml) note mentions only the BPC-157 search
- docs/STYLE-NL.md: add the style terms listed in research/nl-notes/semaglutide.md §6 (monitoringprogramma van WADA, aanvullende monitoring, aanloopfase, tussentijdse analyse, op kenmerken gekoppeld, leverbiopt/fibrose/cirrose, zware waarschuwing (boxed warning), productregel, technische consultatie, veiligheidscomité van het EMA (PRAC), generieke semaglutide …)
- Insurance research needed for Kayshild and Kyinsu (GVS status or hospital route); the Regeling of 6 Oct 2026 has no hit for either name
- research/nl/status/semaglutide.yaml NL note placeholder '[Reimbursement clause from the insurance research]' is now filled on the Dutch page (regulatory_notes.NL)

### Remaining concerns

- Legal reviewer: the rewritten 'real costs' paragraph in the Vergoeding fold still argues that the reimbursement gap has costs. Keep it, or reduce it to the Zorginstituut's reasons only?
- Medical reviewer: the open PRAC signal on ischaemic colitis (EPITT 20309, information due 1 Dec 2026) was removed per eu-status §6.10. If the reviewer wants open signals on compound pages, restore it as one dated line.
- nl-care §5.2 says to say nothing about 2027 reimbursement of Wegovy. The same file's fact-check (fact 62) reports that the published 2027 text of the Regeling leaves item 146 unchanged and does not name Wegovy. I confirmed that text today and the page states it with 'kan nog veranderen' and 'Een besluit … vonden we niet'. The reviewer should confirm this wording is acceptable.
- The registered German regulator source says the falsified EU pens contained insulin and reached patients in Austria. The page cannot name that regulator ('bfarm' is an error-level residue term on nl) and has no neutral EU source for it, so the point is left out. The page no longer implies the opposite.
- Zelf invoeren: the page gives only Customs' general rules. Whether to add that a product without a handelsvergunning may not be imported at all (Gnw art. 40(2)) is open, because whether a 'research' vial counts as a medicine for Customs is unresolved (nl-law §5.4). This is the writer's legal question 3.
- The lede says 'voor diabetes type 2 en afvallen', but the Wegovy SmPC indication is 'gewichtsbeheersing'. The full STYLE phrase does not fit the 25-word limit, so the lede was kept; the TL;DR uses the full phrase.
- Whether Kayshild and Kyinsu are reimbursed was not researched, so the page says 'hebben we niet uitgezocht'. The products table shows English data names ('Kyinsu (with insulin icodec)', 'Wegovy (injection)/(tablets)'); this is a final-sweep item.
- Source notes to refresh in files owned by others (listed in the notes): ema-epar-kayshild (annual review, no long-term safety data), fda-unapproved-glp1-concerns, igj-online-medicijnen, ema-2023-falsified-ozempic, and ema-under-evaluation-2026-10, whose note covers bremelanotide only.
- The writer's reviewer questions 1–9 still stand. Question 4 (generics) is now answered on the page with the minister's reason.

### Open questions

- Legal: does the kept 'Dit gat heeft echte gevolgen' paragraph (SELECT heart result in a reimbursement context, balanced by the Zorginstituut's reasons) pass the 2026 advertising test, or should it go?
- Legal: is the CBG-worded statement that Ozempic for weight is off-label, advised against, and only allowed with a professional guideline sufficient (nl-care open question 6)?
- Legal: is the 'Zelf invoeren' paragraph (import needs a licence; traveller exemption not for parcels) enough, or should it cite Gnw art. 40(2) for products without a handelsvergunning?
- Legal: is 'Generieke semaglutide mag nu niet legaal in Nederland op de markt komen' an accurate paraphrase of the minister's answer of 5 Oct 2026?
- Medical: help levels in the stop callout — pancreatitis, NAION and dehydration at 'Bel direct je huisarts / huisartsenpost'; low blood sugar after a non-pharmacy product and allergic swelling at 'Bel direct 112' (site level faster than Thuisarts for hypo). Agree?
- Medical: keep the added 113 Zelfmoordpreventie line in the mood paragraph (not on English)?
- Medical: MTC/MEN2 written as 'no EU contraindication, but a contraindication on US and Canadian labels; discuss with the prescriber' — agree?
- Medical: NHG obesity criteria and 'some GPs prescribe, some do not' (Thuisarts wording instead of 'facultatief', nl-care open question 7) — fair?
- Medical: Kayshild described as approved on the basis of ESSENCE (SmPC 4.8/5.1 name ESSENCE; EPAR says 'an ongoing study') — fine?

## tirzepatide (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/tirzepatide.mdx, src/i18n/nl/glossary/nl-tirzepatide.json, src/i18n/nl/glossary/tirzepatide.json, research/nl-notes/tirzepatide.md

### For the final sweep

- src/data/sources/tirzepatide.yaml: zin-tirzepatide-obesity-assessment accessed 2026-10-20 -> 2026-10-27 (page re-read; modified 27 Oct 08:26, planning unchanged); fk-tirzepatide accessed -> 2026-10-27 (re-fetched by nl-care); its note's NHG diabetes-standard line was not re-checked
- src/data/sources/semaglutide.yaml: cbg-glp1-position accessed 2026-10-20 -> 2026-10-27 (fetched today, quoted wording unchanged)
- src/data/compounds/tirzepatide.yaml names.brands includes Zepbound, which does not exist in the EU: consider a per-locale brand list or leave as world context
- src/data/compounds/tirzepatide.yaml product mounjaro label_url is the English EPAR page; the Dutch product information PDF (ema-pi-mounjaro-nl) may suit Dutch readers better (shared field, data owner's call)
- docs/STYLE-NL.md: merge the Style terms of research/nl-notes/tirzepatide.md §6 (aanvullende monitoring, slagaderverkalking, narcose, combinatiepil/barrièremethode, doseerknop, generiek middel, PRAC wording, 95%-BI form, etc.)
- check:html after the other groups write their pages: links /nl/legal-routes/ fixed anchors and /nl/safety/sterile-technique/#wanneer-je-een-flacon-weggooit; plain links to /nl/safety/product-risk/, /nl/talking-to-your-doctor/, /nl/legal/sport-and-doping/, /nl/legal/be/
- glossary: additional-monitoring and basal-insulin were added by the semaglutide group (nl-semaglutide.json); I did not duplicate them

### Remaining concerns

- Legal reviewer: the comparisons with semaglutide and dulaglutide (SURPASS-2, SURMOUNT-5, the receptor table) give design and funding, but for a prescription medicine they are what a court would look at first under the 2026 advertising case law
- World context appears more than 'once and short': the US date in grade_rationale, the US cardiovascular indication of August 2026, Canada's withdrawn HFpEF request and the US compounding shortage. All are on the English page as evidence and are marked residue-ok
- SYNERGY-Outcomes sentence (it includes unauthorised retatrutide) and the online-prescribing sentence: neutral, but flagged for the legal reviewer (writer's questions 5 and 6)
- Pill advice: if the EMA adopts EMA/VR/0000340438 (SmPC 4.5/4.6), the TL;DR, the bullet and the fold must be rewritten from the new SmPC
- Low blood sugar with confusion -> 112 is faster than Thuisarts (112 only when unconscious); kept per nl-help fact 17, for the medical reviewer
- The digits rule is now applied here, but peer Dutch compound pages mix words and digits; the final sweep should make the site consistent
- Final sweep (in notes section 8 and the check section): update the accessed dates and notes of ema-medicines-json, cbg-glp1-position and zin-tirzepatide-obesity-assessment; settle the duplicate ids igj-2026-10-stolen-medicines and igj-2026-10-gestolen-medicijnen; Zepbound in names.brands; label_url of the EU product

### Open questions

- Legal (advertising): is the TL;DR 'Werkt het? Ja, voor bloedsuiker en gewicht. Na stoppen kwam veel gewicht terug.' balanced enough for a prescription medicine (main-risk tile in the same box; percentage left to the key numbers)?
- Legal (advertising): is the reimbursement-gap paragraph ('wie het niet zelf kan betalen, krijgt het niet', balanced with Zorginstituut cost figures) purely informative under the 2026 case law?
- Medical: the pill - Dutch SmPC 4.5 says not clinically relevant, US label/MHRA advise a barrier method for four weeks; TL;DR says 'Vraag je arts naar extra bescherming. Het advies verschilt per land.' Right while the EMA reviews the text?
- Medical: the low-blood-sugar stop item keeps the faster site level ('Wordt iemand suf of verward? Bel dan 112.') rather than Thuisarts's 112-only-if-unconscious
- Legal: online prescribing only under strict conditions plus the NHG line that the GP still helps with side effects (nl-care §6 q1, q7): fair and appropriate here?
- Legal: naming the company-sponsored trial acronym SYNERGY-Outcomes (nl-care §6 q8)
- Legal: 'Denk je dat een pen van de apotheek nep is? Vertel het je apotheker.' is our reading of the pharmacist's reporting duty (nl-help fact 28)
- Legal: 'Een pakket uit een land buiten de EU valt niet onder die regel' rests on Rb Den Haag 2019 and Customs pages; confirm wording
- Medical: artsenverklaring and magistrale bereiding said not to fit because Mounjaro is authorised and a pharmacist first checks for an authorised product (KNMP guideline)

## retatrutide (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/retatrutide.mdx, research/nl-notes/retatrutide.md

### For the final sweep

- src/data/organ-cards/retatrutide.yaml: status_local_sources.EU uses the retired duplicate id ema-2026-10-under-evaluation; switch it to ema-under-evaluation-2026-10 (also src/data/explainers.yaml line 234) and consider adding NL: [cbg-gib-search-status-2026-10-27]. Then replace the 3 ema-2026-10-under-evaluation cites in src/content/compounds/nl/retatrutide.mdx. Until then the page must cite the old id, so the source list shows the EMA spreadsheet twice
- English owner: src/content/compounds/en/retatrutide.mdx and the US row of src/data/compounds/retatrutide.yaml still cite sec-lilly-2026-q2-results and sec-lilly-2025-q4-results, whose titles name the developer (CONTENT-GUIDE §11)
- src/data/sources/legal-a.yaml eu-regulation-536-2014: add art. 4, 61 and 63(1) to the note (read 27 Oct 2026 via publications.europa.eu CELEX 32014R0536)
- src/data/sources/shared.yaml eu-directive-2001-83: point the id at the 2025-01-01 consolidation (art. 6(1) re-read today, same wording)
- src/data/sources/retatrutide.yaml cbg-compassionate-use-list: set accessed to 2026-10-27 (re-read today: no retatrutide or LY3437943)
- cbg-bijwerking-melden: the CBG page now also points readers to www.mijnbijwerking.nl as well as www.lareb.nl; note it in the source entry and check the NL contact card's reporting link
- src/i18n/nl/warning-signs.json: pancreatitis is at the emergency level, but Thuisarts names no 112 for belly pain; align the GLP-1 compound stop callouts once the medical reviewer has answered
- STYLE-NL §2: merge the 'Style terms' table from research/nl-notes/retatrutide.md

### Remaining concerns

- 'Geen enkel land heeft het goedgekeurd' (what-it-is Lead) and 'nergens goedgekeurd' (lede and description) are kept for English parity and rest on the TGA statement. But eu-status §5 item 7 says national authorisations in other member states were not searched. The editor may soften this to 'voor zover bekend'
- Science-parity gap: English says the company announced (positive) results for TRIUMPH-3 and TRIUMPH-4, citing SEC filings whose titles name the company. Dutch keeps only the TRIUMPH-4 company figures (kaczynski review). That TRIUMPH-3 results were announced is missing because no citable source without a company name was found
- The pancreatitis line in the stop callout (urgent level plus 'Is het ernstig? Bel 112.') differs from warning-signs.json (emergency level), which renders just below it. Medical reviewer question
- The FAGG warning sentence (Belgian regulator) appears outside the BE notes as evidence. Legal reviewer question
- The source list shows the same EMA October list twice (ema-2026-10-under-evaluation in the page text and organ cards, ema-under-evaluation-2026-10 in the EU row). Final-sweep item 1 in the notes
- Eli Lilly, LY3437943 and its expanded-access programme are named, as on English. Legal reviewer question
- 'Het bewijs is niet zwak.' is kept (CONTENT-GUIDE §1) with risks now in the same paragraph. The legal reviewer should read it against the 2026 Dutch advertising case law
- The nl glossary entry expanded-access (src/i18n/nl/glossary/retatrutide.json, not this group's file) defines it as a US route. Final sweep could make it neutral
- Stale source notes, already in the writer's sweep list: eu-regulation-536-2014 note lists only art. 28–29 (art. 4, 61 and 63(1) were confirmed today via CELLAR); eu-directive-2001-83 still points at the 2022 consolidation

### Open questions

- Medical: pancreatitis in the stop callout is written as 'bel direct je huisarts / huisartsenpost; Is het ernstig? Bel 112.' (Thuisarts level), while warning-signs.json puts it at 112. Which level is right?
- Medical: ketoacidosis in type 1 diabetes is written as 'Bel direct 112' (English: emergency care); no Dutch page was checked for it
- Medical: on contraception, should the EU label (pill effect 'niet klinisch relevant') come before the US four-week advice, for a compound whose own pill study is unpublished?
- Medical/legal: do the added balance sentence in the evidence section and the rewritten 'real prospect' sentence pass the Dutch advertising test while keeping uncertainty in both directions?
- Legal: is 'in de praktijk alleen legaal binnen een studie' right, given that the artsenverklaring route exists and the IGJ accepts an IB or IMPD for medicines with no authorisation anywhere?
- Legal: does naming tirzepatide's weight effect, with its SmPC indication, most frequent side effects and only contraindication, meet the Rb Amsterdam 'in line with the SmPC' standard?
- Legal: may the page name the developer (Eli Lilly, LY3437943) and its expanded-access programme as world context?
- Legal: is one Belgian regulator sentence (the FAGG warning of 19 Oct 2026 that names retatrutide) acceptable outside the BE notes?
- Legal: the what-it-is Lead says 'Geen enkel land heeft het goedgekeurd', resting on the TGA statement, while eu-status 5.7 says other member states' national registers were not searched. Acceptable?

## tesamorelin (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/tesamorelin.mdx, src/data/sources/nl-tesamorelin.yaml, src/i18n/nl/glossary/nl-tesamorelin.json, src/i18n/nl/glossary/tesamorelin.json, research/nl-notes/tesamorelin.md

### For the final sweep

- src/i18n/nl/compound.json authorised.noProducts ('De officiële productinformatie staat hier nog niet.') is misleading for tesamorelin/PT-141/SS-31 on Dutch (no EU product is coming); add an 'elsewhere' string in AuthorisedProducts.astro, e.g. 'In Nederland en de EU is er geen goedgekeurd product, en dus ook geen Nederlandse productinformatie.'
- src/components/mdx/Section.astro picks 'Hoe het werkt' / 'Veilig en legaal gebruiken' and hides compound.harmReductionIntro from category: authorised; on Dutch tesamorelin/PT-141/SS-31 nothing is approved in NL/EU, so use approvalFor(data, locale) (all/some/former → authorised titles; elsewhere → ordinary titles plus the intro)
- Source notes (merge owner): cbg-compassionate-use-list accessed 2026-10-27 and note 'none of the site's compounds, tesamorelin included'; ema-egrifta-withdrawal accessed → 2026-10-27; ema-under-evaluation-2026-10 note: add tesamorelin; eu-regulation-726-2004 note: add art. 13(1); eu-directive-2001-83 → 2025-01-01 consolidation
- docs/STYLE-NL.md: add the terms in research/nl-notes/tesamorelin.md 'Style terms' (senior auteur, clamptest, tussenmeting, buikobesitas, vetophoping, verlenging, gepoolde analyse, door loting verdelen, groeisignaal, 'Groeihormoon Releasing Factors' for S2.2.4, tesamoreline, 'een groot veiligheidsrisico' for EMA's 'major safety concern', ingetrokken vs geweigerd)

### Remaining concerns

- Section.astro (shared, not edited): the Dutch harm-reduction title is 'Veilig en legaal gebruiken' and the intro is hidden, because category is authorised, although nothing is approved in NL or the EU. This is the riskiest line under the advertising test. Once the component uses approvalFor, remove the page sentence 'Dit deel is er om schade te beperken. Het is geen advies ...', or it appears twice
- compound.json authorised.noProducts ('De officiële productinformatie staat hier nog niet.') misleads for tesamorelin on Dutch (writer's sweep item 1)
- Legal reviewer: is neutral reporting of unregistered uses (fatty liver, obesity, cognition) 'informatie' under Gnw art. 84(1)? The liver KeyNumber could move into the liver fold
- Legal reviewer: the US approval still appears in about 9 marked places. The brief asks for world context 'once and short'; a stricter reading would cut the US fold further
- Legal reviewer: the artsenverklaring route for a named medicine authorised abroad (IGJ restraint and refusal now stated each time), and citing the FDA warning-letters index
- Medical reviewer: nhs-high-blood-sugar (a UK page) stays as symptom evidence for blurred vision with high blood sugar, because no Thuisarts page lists it for a hyper. Hives or flushing are mapped to the urgent huisarts level; 'controles op kanker die bij je leeftijd passen' does not name the Dutch bevolkingsonderzoek
- Source hygiene for the merge owner: eu-directive-2001-83 has no note and points to the 2022 consolidation; eu-regulation-726-2004 note lacks art. 13(1); cbg-compassionate-use-list and ema-under-evaluation-2026-10 notes do not mention tesamorelin (the research confirms both claims)
- Left out as unresolved: national authorisations in other member states, a traveller with US-prescribed Egrifta, how Customs classes a vial, intra-EU parcels, whether an ontheffing would be granted, a pharmacopoeia monograph

### Open questions

- Legal: is neutral reporting of trials in unregistered uses (fatty liver, obesity without HIV, cognition), with evidence levels, 'geen goedgekeurd gebruik' and risks, 'informatie' under Gnw art. 84(1) for a medicine without Dutch handelsvergunning? Deliberate wording changes vs English (no 'Yes' in TL;DR/Lead, 'most promising' removed, 'powerful testimonies' neutralised) are listed in the notes for owner/legal approval
- Legal: is describing the artsenverklaring route for one named medicine authorised abroad neutral information rather than encouragement?
- Legal: the FDA warning-letters index (letters name sellers; the index does not) is cited as world context, as on English and Dutch tirzepatide: acceptable?
- Medical: help levels in the stop list — hives/flushing after injection kept at the site's faster 'bel direct' level; very high blood sugar with vomiting/fast breathing/drowsiness mapped to 'bel direct je huisarts of de huisartsenpost' (Thuisarts diabetes page); worse eyesight with diabetes → 'bel direct je huisarts'
- Medical: checklist item 'De controles op kanker die bij je leeftijd passen' replaces 'cancer screening due for your age' — name the Dutch bevolkingsonderzoek (not verified here)?
- Medical: is the Dutch stop sign 'Bultjes, dik gezicht of keel, moeilijk ademen' the right condensation of 'Hives, swollen face or throat, hard to breathe'?

## bpc-157 (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/bpc-157.mdx, research/nl-notes/bpc-157.md

### For the final sweep

- Dutch pages linked without an anchor that did not exist on 27 Oct: /nl/talking-to-your-doctor/, /nl/legal/be/, /nl/legal/research-use-only/ (confirm they exist before publishing)
- src/data/sources/bpc-157.yaml ema-medicines-json: re-downloaded 27 Oct 2026 (2,754 records; 0 hits for BPC-157 names; Regranex withdrawn 16/07/2012) - owner may set accessed: 2026-10-27
- fda-pcac-2026-07-meeting: FDA page still 'Content current as of 08/06/2026' on 27 Oct 2026, no minutes; if accessed is updated, English and Dutch 'by 20 October 2026' sentences can say 27 October
- STYLE-NL: add the style terms in research/nl-notes/bpc-157.md (vrije base/acetaatzout, klysma, labpeptide, breekkracht, regressie naar het gemiddelde, hamstringblessure, risicosignalen, indieners, 'Onderzoek in de registers' etc.)
- STYLE-NL / legal/sport-and-doping: pick one wording for Semax's Russian status ('goedgekeurd' on this page, 'geregistreerd' on the sport page)
- src/i18n/nl/glossary/bpc-157.json checked against English and the page: correct, no duplicates, no change made

### Remaining concerns

- Legal: TL;DR and Lead say 'Verkopen en invoeren zijn verboden'; holds as a geneesmiddel (art. 1, 40(2)) or as a werkzame stof (art. 38(1)), but which class a vial falls in is UNRESOLVED (nl-law 5.4): legal reviewer to confirm the short form
- Advertising test: 'Dit onderzoek is niet waardeloos', attributed 'veelbelovend' and 'Een goed geteste stof die herstel versnelt, zou daarom waardevol zijn' are balanced and on English, but praise is the 2026 test; legal reader to look
- Medical: stop callout gives 'bel direct je huisarts / huisartsenpost' for one painful swollen leg and for darker skin/gums; no Thuisarts page was checked for either sign
- Source accessed dates older than the 27 October re-checks (owners' files, not edited): ema-medicines-json (20 Oct), cbg-compassionate-use-list (20 Oct; re-checked today, no BPC-157), fda-pcac-2026-07-meeting (20 Oct; re-checked today, still 08/06/2026, no minutes); ema-under-evaluation-2026-10 note speaks only of bremelanotide
- douane-2026-08-illegale-online-handel-medicijnen cited twice; its body names a webshop (not quoted)
- US fold keeps the FDA 'categorie 2' history and 14 May 2026 category list as PCAC context; reviewer may judge it more than 'once and short'
- Belgium line uses the fixed STYLE-NL 5.1 sentence without the FAGG's full name (STYLE-NL 2.7 first-mention rule)
- Number style is mixed across the 21 Dutch compound pages; this page now follows STYLE-NL 3; final sweep may want one pass
- Canadian 2025 sanction kept as a foreign example, as on the Dutch sport page

### Open questions

- Medical: stop callout uses 'Bel direct 112' for breathing problems/throat swelling and 'bel direct je huisarts / huisartsenpost' for the other signs; is 'bel direct' right for one painful swollen leg and for darker skin/gums (no Thuisarts page checked for either)?
- Medical: are 'jeukende bulten' (hives) and 'bloedingen of blauwe plekken zonder reden' plain and correct?
- Medical/insurance: 'Voor de huisarts zelf betaal je niets, maar bloedonderzoek in een lab gaat van je eigen risico af' (Zorginstituut) - correct for all checklist tests?
- Legal: TL;DR 'Verkopen en invoeren zijn in Nederland verboden' and the Compare row rest on BPC-157 being a geneesmiddel under Gnw art. 1 (body explains the tests) - acceptable in the TL;DR?
- Legal: douane-2026-08-illegale-online-handel-medicijnen cited twice; its body names a webshop (never quoted) - confirm (nl-law open question 12)
- Legal/advertising test: please read the 'Dit onderzoek is niet waardeloos' paragraph and the fold 'Waar het onderzoek sterker is, en wat het gat betekent' ('veelbelovend' attributed to reviewers; 'zou waardevol zijn' for a hypothetical tested agent)
- Legal: keeping the 2025 Canadian athlete sanction as a foreign example on a Dutch compound page - fine?

## tb-500 (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/tb-500.mdx, src/i18n/nl/glossary/nl-tb-500.json, src/i18n/nl/glossary/tb-500.json, research/nl-notes/tb-500.md

### For the final sweep

- STYLE-NL.md §2: add the style terms listed in research/nl-notes/tb-500.md (status als weesgeneesmiddel, het stukje/het hele eiwit, kraswondtest, stellaatcel, belasting tot breuk, hoofduitkomst/bijkomende uitkomst, uitkomsten in het register gezet, afgeleide stoffen, preparaat voor dieren, mengsel, nepinjectie, verzonnen studie, studentsporter, tumormerker, fibrosarcoom, ACE-remmer, Cochrane-review)
- Link /nl/compounds/bpc-157/ is used without an anchor; the Dutch BPC-157 page (another group) did not exist when this page was finished
- All Dutch glossary files: check short code aliases that are Dutch words in lowercase (I removed 'ILK' from integrin-linked-kinase in tb-500.json because 'ilk' is a Dutch word; STYLE-NL §6)
- src/data/sources/pt-141.yaml, ema-under-evaluation-2026-10: note says only bremelanotide was searched (22 Oct); eu-status fact 9 (27 Oct) checked the 5 October list for all compounds and the TB-500 EU row cites it — the note could say so
- src/data/compounds/tb-500.yaml: BE row is as_of 2026-10-20 (not re-checked 27 October); no change needed for the Dutch page

### Remaining concerns

- Legal: the TL;DR ('Leveren en invoeren is verboden') and the regulatory Compare state the art. 40 ban plainly for a vial sold 'for research' (art. 1(1)(b) plus Customs' 'Onderzoeksdoeleinden spelen dan geen rol'); whether Customs treats such a vial as a medicine or as a werkzame stof is UNRESOLVED (nl-law §5.4)
- Legal: confirm the labelled reading 'Volgens ons heeft een flacon voor onderzoek die papieren niet' and the Compare row 'Volgens ons passen ook de andere wegen niet'
- Medical: confirm the stop-list levels (hives or swollen face with normal breathing -> appointment; throat swelling or hard breathing -> 112); Thuisarts' other urgent allergy signs are in <WarningSigns /> below the callout, not in it
- Medical: nhs-cancer-symptoms still has no Dutch equivalent on the page
- Two evidence points left with the Canadian and Australian framing folds (Health Canada notices using 'TB-500' for the whole protein; the TGA's reports of severe allergic reactions to unapproved peptides as a group); the owner may want a world-context line for the TGA reports
- The FDA's list of countries without an approved product names Belgium (and Norway); it is attributed FDA evidence; drop 'België' if the owner wants no Belgian status outside /nl/legal/be/
- Developer names RegeneRx, ReGenTree and the code NL005 are kept for identification (writer's question 6)
- The writer's notes said 28 study ids; the data file and both pages have 26 (recorded in the notes)

### Open questions

- Legal: is it right to state plainly (TL;DR, regulatory Compare) that supplying and importing TB-500 is forbidden because it is a geneesmiddel without handelsvergunning (art. 1(1)(b) presentation/function test), for a vial sold 'for research'?
- Legal: confirm our per-route reading in the routes fold and the Compare row 'Volgens ons passen ook de andere wegen niet' (artsenverklaring needs IB/IMPD and GMP proof; magistrale bereiding: not in Ph. Eur., USP or JP per the FDA; compassionate use needs an application or trials)
- Medical: stop-list levels — hives or swollen face without throat/breathing problems: 'Stop met het product en bel je huisarts' (slightly faster than Thuisarts' appointment); lump/changing mole/weight loss: appointment with the huisarts
- Medical: nhs-cancer-symptoms has no registered Dutch equivalent; a Thuisarts or KWF page on general cancer signs could replace it
- Editorial: keep or drop the Canadian athlete's four-year sanction (ca-sic-2025-04-bpc157-tb500-sanction) kept as world context in the sport fold?
- Advertising test: confirm naming the developers RegeneRx, ReGenTree and the code NL005 (identification only, as on English) is acceptable on a Dutch page
- Evidence that left with the AU/CA folds: TGA reports of severe allergic reactions linked to unapproved peptides as a group, and Health Canada notices using 'TB-500' for the whole protein — is a Dutch equivalent wanted (none found in research/nl)?

## kpv (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/kpv.mdx, src/data/sources/nl-kpv.yaml, src/i18n/nl/glossary/nl-kpv.json, src/i18n/nl/glossary/kpv.json, research/nl-notes/kpv.md

### For the final sweep

- src/data/compounds/kpv.yaml WADA row is prohibited/S0 while nl-law §5.10 and merge §9 list KPV's S0 status as UNRESOLVED ('ask the Dopingautoriteit'): editor to decide whether the row or a sourced glance.sport override on the Dutch page should change; the page currently follows the data and /nl/legal/sport-and-doping/
- src/data/sources/shared.yaml eu-directive-2001-83 still points at the 2022-01-01 consolidation (cited here for art. 6(1), same in the 2025 consolidation); already in merge §9
- Semax wording across Dutch pages: 'in Rusland als medicijn toegelaten' (kpv) vs 'als medicijn geregistreerd' (/nl/legal/sport-and-doping/); STYLE-NL §2.4 advises against 'geregistreerd'
- Removed the alias 'ziekte van Crohn' from inflammatory-bowel-disease in src/i18n/nl/glossary/kpv.json; if a tooltip is wanted, add a separate 'crohns-disease' entry in a shared glossary file
- Before publishing, re-check fda.gov for posted PCAC minutes or vote results (the page keeps 'Op 20 oktober 2026 had de FDA geen schriftelijk verslag gepubliceerd')
- English page owner: mechanism step 6 says 'rodent colitis and wounds' but the wound study is in rabbits (Dutch title fixed to 'bij dieren')
- Style terms STYLE-NL lacks (vrije base/acetaatzout, aangeprezen, bindingsproef, macrofaag, MAP-kinase, technieken voor afgifte, tumorlast, huid van overleden donoren, verhandelen of doorgeven as table head, etc.) are listed in research/nl-notes/kpv.md 'Style terms' for merging into STYLE-NL

### Remaining concerns

- WADA S0: nl-law §5.10 and merge §9 list KPV's S0 status as UNRESOLVED ('ask the Dopingautoriteit'), but the data row is prohibited/S0 and drives the glance tile. The page follows the data and adds 'WADA zegt niet apart iets over KPV. Twijfel je? Vraag het de Dopingautoriteit.' The editor must decide, and if it changes, the row (or a sourced glance.sport override) and four page lines must change together
- TL;DR 3 ('Zonder goedkeuring als medicijn mag niemand het verkopen, doorgeven of invoeren') assumes a KPV product is a geneesmiddel. The Gnw decides per product by presentation or function (nl-law facts 2, 31; §5.4). Question for the legal reviewer
- 'Nergens goedgekeurd' rests on the English reasoning (no human data). Other member states' national registers were not searched (eu-status §5.7), and the page says so
- Stop callout item 3 combines hives, face or lip swelling and breathing trouble. On Thuisarts, swelling alone gets an appointment, not 112. Question for the medical reviewer (the writer's question 1)
- douane-2026-08-illegale-online-handel-medicijnen names a webshop in its body text. It is never quoted on the page (nl-law §6.12)
- STYLE-NL §3 asks for digits from 2 up, but this page, like all Dutch pages, writes counts in words. Left for the final sweep
- The source records ema-medicines-json and ema-under-evaluation-2026-10 carry notes about other compounds' searches. The KPV searches of 27 October are documented only in research/nl/status/kpv.yaml. eu-directive-2001-83 still points at the 2022 consolidation
- Before publishing: re-check fda.gov for the PCAC minutes. Semax wording differs across the Dutch pages (goedgekeurd / toegelaten / geregistreerd). English mechanism step 6 says 'rodent … wounds' but the wound study is in rabbits (for the English page's owner)

### Open questions

- Medical: stop callout item 3 gives no separate level for hives or swollen lips with normal breathing beyond 'Is het ernstig? Bel 112.' Should it add 'Stop dan met het product en maak een afspraak met je huisarts'?
- Medical: is 'Bel direct je huisarts / huisartsenpost' right for fever after an injection, given Thuisarts sepsis's 'Wanneer bellen' list omits 'direct'?
- Medical: please confirm mechanism step 6 title 'Sneller herstel bij dieren met colitis of een wond' (the English says rodents; the wound result is in rabbits)
- Legal: is the TL;DR 'Zonder handelsvergunning mag niemand het verkopen, doorgeven of invoeren' an acceptable summary, given that the Gnw art. 1 presentation and function tests decide per product?
- Legal: may douane-2026-08-illegale-online-handel-medicijnen be cited (its body text names a webshop, never quoted; nl-law §6.12)?
- Legal/owner: is the S0 handling (S0 text says it is prohibited, plus 'Vraag het de Dopingautoriteit') acceptable given the UNRESOLVED note?
- Legal: please confirm the reworded evaluative lines (no 'veelbelovend', no 'sterkste', no 'betrouwbaar') pass the 2026 advertising test (RvS 25 February 2026; Rb Amsterdam 10 April 2026)

## pt-141 (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/pt-141.mdx, src/data/sources/nl-pt-141.yaml, src/i18n/nl/glossary/nl-pt-141.json, research/nl-notes/pt-141.md

### For the final sweep

- src/data/sources/retatrutide.yaml -> cbg-compassionate-use-list: add to the note that the list (sort date 10 July 2026) has no bremelanotide either (eu-status.md verification log); the Dutch PT-141 page cites it for that
- src/data/sources/bpc-157.yaml -> ema-medicines-json: the note records only the 20 October BPC-157 search; add the 27 October result of 0 hits for bremelanotide, PT-141, PT 141 and Vyleesi (eu-status fact-check)
- src/data/sources/pt-141.yaml -> ema-under-evaluation-2026-10: widen the note to cover all the site's compounds, as merge.md already says
- English pt-141 page (English owners): it says FDA warning letters went to 'several online sellers' in August 2026, but the fda-warning-letters-index note confirms one letter naming PT-141 (MARCS-CMS 735067); the Dutch page says 'een online verkoper'
- docs/STYLE-NL.md: merge the 'Style terms' table in research/nl-notes/pt-141.md (HSDD and weinig zin in seks, voor/na de overgang, blozen, licentiehouder, open vervolgstudie, studie om de dosis te bepalen, heranalyse, bovendruk/onderdruk, pen voor een keer, kinderwens, and others)
- No change needed in src/i18n/nl/glossary/pt-141.json, src/data/heroes.yaml (the hero already has a Dutch caption) or config/link-allowlist.json

### Remaining concerns

- Legal: the US label limits '1 dosis per 24 uur' and 'vaker dan 8 keer per maand', and the fact 'Vyleesi: als het nodig is, vóór verwachte seks', stay as label risk information for parity (CONTENT-GUIDE §6). On a page for a medicine with no Dutch handelsvergunning they could read as a schedule. The legal reviewer decides.
- Legal: the KeyNumber '58 op 100 zeiden dat het hielp' (the developer's responder analysis) is balanced by the null result and the reanalysis. It is still the most positive line under the 'wervende bewoordingen' test.
- Medical: priapism is set to 'Bel direct 112' (emergency in warning-signs.json). No Dutch public source exists; the cited NHS page says go to A&E. Jaundice is at the urgent level, faster than English. Needs medical review.
- Editor: the US approval still appears in about ten marked lines (TL;DR, lede, Leads, Compare, product fold, callout, US fold, harm-reduction opening, fact sheet). Each sits next to the NL/EU answer, but whether this counts as 'once and short' is the editor's call.
- Legal: the 'Is er een legale weg?' cell for NL has a 'yes' verdict ('Alleen een smalle'). Whether the IGJ would grant an ontheffing for bremelanotide is unknown; 'unknown' is the alternative.
- fda-warning-letters-index is cited for statements that appear in the letters, not on the index page. This is the same as on English; the editor decision is pending in research/legal-b.md.
- Final sweep (STYLE-NL): WADA 'groep/onderdeel/klasse S0' differs across Dutch pages. 'Slecht geregelde hoge bloeddruk' (pt-141) differs from 'hoge bloeddruk die niet onder controle is' (melanotan-ii).
- The writer's for_final_sweep items stay open: the source notes of cbg-compassionate-use-list, ema-medicines-json and ema-under-evaluation-2026-10 should record the bremelanotide searches; the English page says 'several online sellers', but one letter was verified.

### Open questions

- Medical: priapism is 'Bel direct 112' (the level warning-signs.json gives it; STYLE-NL never sends readers to the SEH on their own) where English says 'go to an emergency department now'. There is no Thuisarts priapism page (404). Is 112 right, or the huisarts or huisartsenpost?
- Medical: jaundice is 'Bel direct je huisarts / huisartsenpost' (the urgent level), faster than English 'same day'. Please confirm.
- Legal: the page keeps two US label limits as risk information, attributed to the label: '1 dosis per 24 uur' and not more than 8 times a month. Bremelanotide has no Dutch handelsvergunning and the 2026 advertising case law applies. May these stay, or should they become a general 'the label limits how often'?
- Legal: the KeyNumber '58 op 100 zeiden dat het hielp' (the developer's responder analysis) stays, framed by the null result on satisfying sex and by the reanalysis. Does it pass the 'wervende bewoordingen' test?
- Editor: the US approval appears in several marked lines because it is the only approval: the Lead, the Compare, one sentence, the product fold, the callout, the US fold, the harm-reduction opening and the fact sheet. Is that acceptable under 'world context, once and short', or should the US fold shrink to one sentence?
- Editor: 'Dat is een afweging die elke vrouw met haar arts kan maken' when a Dutch doctor cannot prescribe it normally: keep it, or change it to 'kan bespreken'?
- Editor: NHS and MedlinePlus pages are kept as medical sources in the stop list beside Thuisarts, as /nl/safety/warning-signs/ does. Is that fine?

## melanotan-ii (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/melanotan-ii.mdx, src/data/sources/nl-melanotan-ii.yaml, src/i18n/nl/glossary/nl-melanotan-ii.json, research/nl-notes/melanotan-ii.md

### For the final sweep

- nl-research-eu-status.yaml, cbg-gib-search-status-2026-10-27: the link opens the 'tesamorelin' search, but this page cites it for 'melanotan returns only Scenesse'. A separate id for the melanotan search would let the link show the claim
- shared.yaml, eu-directive-2001-83: still points at the 2022 consolidation. Repoint it to CELEX:02001L0083-20250101, as the eu-status fact-check says (art. 6(1) and 87(1) are unchanged)
- nl-pt-141.yaml, thuisarts-hoge-bloeddruk: this page cites it too, so keep it registered
- legal-a.yaml, eu-regulation-726-2004: the note lacks art. 13(1) (an EU-wide authorisation is valid in every member state), which this page cites it for. Add it if wanted
- No Dutch patient page on priapism or sudden severe headache is registered. If one is found, it can replace nhs-priapism and nhs-headaches here and on /nl/safety/warning-signs/
- src/data/compounds/melanotan-ii.yaml: no change needed. The WADA row (prohibited, S0) is an editor's call (nl-law 5.10)
- STYLE-NL candidates (listed under 'Style terms' in the notes): bruine kleur / bruin worden (tan), zonnebank, hoogtezon, dermatoloog (huidarts), in een schaaltje, erkend porfyriecentrum, fototoxiciteit, online verkopers, doorgeven

### Remaining concerns

- The page qualifies the geneesmiddel status, and so the sale and import ban, as 'volgens onze lezing'. Other Dutch compound pages (bpc-157, epitalon, kpv) state the ban plainly. The final sweep or the legal reviewer should make them consistent
- Priapism is 'Bel direct 112', following the shared warning sign and pt-141. Thuisarts has no priapism page (checked today), so the medical reviewer must confirm 112 against huisarts/huisartsenpost
- nhs-priapism, nhs-headaches, nhs-moles and medlineplus-rhabdomyolysis are kept as evidence of what a sign means, not as help routes. Replace them if Dutch patient pages get registered
- The world-context paragraph on the UK, Canada and Australia (five sentences) could be cut to one
- cbg-gib-search-status-2026-10-27 (owned by others) links the tesamorelin search while this page cites the 'melanotan' result. eu-directive-2001-83 still points at the 2022 consolidation. Both are listed for the final sweep
- The 2027 PCAC sentence is dated 22 October. The FDA page was unchanged on 27 October; re-check before publishing
- Writer's open questions 1, 3, 4, 6, 7 and 8 stay open for legal and medical review: function-test reading, quoting the Douane article, the English quote from the trial registry, how much Scenesse SmPC detail to keep, the WADA row prohibited vs unclear, and balance in the 'promising' fold
- The 5 validator warnings for melanotan-ii are all on the English page, which is not owned by this group

### Open questions

- Legal: is 'a melanotan II product is a geneesmiddel, also with "alleen voor onderzoek" on it' the right reading, and can the Compare's 'verboden' rest on it?
- Legal: the Compare cell says 'verkopen, doorgeven en invoeren verboden, ook voor eigen gebruik'. The own-use point applies to import (art. 40(2)). Is the wording acceptable?
- Legal: we quote one sentence of the Douane article whose body names a webshop. Only the neutral-title page is registered, as nl-law did. Is that acceptable?
- Legal: is it fine to quote the trial registry's English self-description ('This example interventional study record') on a Dutch page?
- Medical: for priapism the page says 'Bel direct 112', following the shared warning-signs level (emergency). Should it be 'bel direct je huisarts of de huisartsenpost'? Thuisarts was not checked for priapism
- Medical: is the detail on Scenesse side effects and contraindications in the what-it-is fold right for a page about another compound? It was added for the advertising test
- Medical/editor: keep the WADA row 'prohibited' (S0, our reading) or change it to 'unclear', given that WADA does not settle it?
- Advertising test: is the fold 'Wat de biologie wel opleverde' balanced enough under the 2026 case law? It keeps the English 'not fantasy / could have value', which is about a tested product, not melanotan II

## cjc-1295 (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/cjc-1295.mdx, src/data/sources/nl-cjc-1295.yaml, src/i18n/nl/glossary/cjc-1295.json, research/nl-notes/cjc-1295.md

### For the final sweep

- src/data/compounds/cjc-1295.yaml EU row: consider adding ctis-cjc-1295-search-2026-10-27 to sources (shows no EU trial, so not-authorised rather than investigational); BE row still as_of 2026-10-22
- src/data/sources/shared.yaml eu-directive-2001-83: point to the 2025-01-01 consolidation (already flagged by the eu-status fact-check); page cites it for art. 6(1), unchanged between versions
- thuisarts-diabetes-type-2 is registered in src/data/sources/nl-tesamorelin.yaml (tesamorelin group) and cited by the Dutch CJC-1295 page; if renamed or removed, update the cite in the 'Wanneer je stopt' fold
- Cross-page anchor /nl/safety/monitoring/#controles-via-je-huisarts depends on the heading '## Controles via je huisarts' in the Dutch monitoring page (another group's); /nl/compounds/bpc-157/ linked without anchor
- docs/STYLE-NL.md: add the 'Style terms' rows from research/nl-notes/cjc-1295.md (GHRH-analoog (de), tekort aan groeihormoon, pieken/golven, galbulten (netelroos), hartfilmpje (ecg), kransslagaders, onderzoek naar giftigheid, productbeschrijving for 'listing', mengsel for 'blend', bevolkingsonderzoek naar kanker, Federal Register as 'het Amerikaanse staatsblad')
- src/content/compounds/en/cjc-1295.mdx: the validator's 4 'inline outbound link' warnings (MedWatch, Yellow Card, Canada Vigilance, TGA) are on the English page; not touched
- src/i18n/nl/media.json: Dutch caption of hero human-serum-albumin exists and fits; no change needed

### Remaining concerns

- Medical: stop-callout headline 'heel erge hoofdpijn ... met overgeven of wazig zien' is 'bel direct je huisarts/huisartsenpost' while the page's WarningSigns (very-high-blood-pressure) shows a similar sudden headache at 112; English says 'Get medical help now'. Reviewer to pick one level
- Legal: the FDA fold ('Wat de FDA in 2024 concludeerde') is longer than the brief's 'world context, once and short'; marked and ends with the 'Amerikaanse besluiten gelden niet in Nederland' callout
- Legal: the page never states in words that CJC-1295 is a geneesmiddel under the Gnw; the TL;DR 'mag niemand het verkopen, doorgeven of invoeren' rests on that and omits the narrow art. 40(3) exceptions (as sibling pages do)
- Legal: douane-2026-08-illegale-online-handel-medicijnen names a webshop in its body (not quoted); nl-law §6.12 asks whether it may be cited
- Advertising test: English 'shows that this route can work' (tesamorelin) kept toned down to the bare US-approval fact plus the CHMP's doubt; owner to confirm
- Medical: 'Het bevolkingsonderzoek naar kanker dat bij je leeftijd hoort' for 'cancer screening due for your age' kept
- Final sweep (files not owned): data EU row could add ctis-cjc-1295-search-2026-10-27; BE row still as_of 2026-10-22; eu-directive-2001-83 should point to the 2025-01-01 consolidation; thuisarts-diabetes-type-2 lives in the tesamorelin group's source file; monitoring anchor depends on another group's heading; STYLE-NL style terms to add (writer's list plus regelkring, komeettest, laatste auteur)

### Open questions

- Legal: the FDA fold ('Wat de FDA in 2024 concludeerde': FDA's reasons, the 0–13 PCAC vote, category-2 page) is longer than the brief's 'world context, once and short'; keep as a fold or cut to two sentences?
- Legal: is 'Een geneesmiddel zonder handelsvergunning mag niemand verkopen, leveren, in voorraad hebben of invoeren' a fair B1 summary of Gnw art. 40(2) on a page read by private persons, given that 'in voorraad hebben' for a few vials is unresolved?
- Legal: the page gives the Gnw definition and the ban without stating in words that CJC-1295 is a geneesmiddel; enough, or should the classification be stated or explicitly left to the Douane/IGJ?
- Legal: douane-2026-08-illegale-online-handel-medicijnen names a webshop in its body (not quoted); may it be cited (same as nl-law §6.12)?
- Medical: severe headache with vomiting or blurred vision is mapped to 'Bel direct je huisarts / huisartsenpost' (English 'Get medical help now'); the warning-signs list treats sudden very bad headache with blurred vision or vomiting as an emergency (112). Should this line say 112?
- Medical/legal: keep the developer's quote 'safe and relatively well tolerated' with the Dutch gloss 'veilig en redelijk goed te verdragen' (attributed, followed at once by 'Toch kwamen bijwerkingen vaak voor'), or drop the gloss under the advertising test?
- Medical: 'Het bevolkingsonderzoek naar kanker dat bij je leeftijd hoort' for 'cancer screening that is due for your age': acceptable?

## ipamorelin (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/ipamorelin.mdx, src/data/sources/nl-ipamorelin.yaml, src/i18n/nl/glossary/ipamorelin.json, research/nl-notes/ipamorelin.md

### For the final sweep

- src/data/sources/ipamorelin.yaml → ema-epar-ghryvelin: its title 'Ghryvelin (previously Macimorelin Aeterna Zentaris)' names a company. Retitle it neutrally before any Dutch page cites it. The Dutch page cites the new ema-pi-ghryvelin-nl instead
- src/data/sources/nl-tesamorelin.yaml → thuisarts-diabetes-type-2 is cited by the Dutch ipamorelin page too (stop-now list): keep the id stable
- The ids in src/data/sources/nl-ipamorelin.yaml must stay stable: the hexarelin page (group stubs-b1) reuses thuisarts-hartkloppingen. Merge any later duplicate registrations of the same Thuisarts URLs (hartfalen, hartkloppingen, flauwvallen) into these ids
- Optional glossary entry for 'hartfalen' (heart failure), which has no Dutch or English entry; the page explains it inline. If added, make sure it does not take over 'hartfalen met behouden ejectiefractie' (tirzepatide.json, hfpef)
- src/data/compounds/ipamorelin.yaml: no change needed (the EU and NL rows match research/nl/status/ipamorelin.yaml)

### Remaining concerns

- douane-2026-08-illegale-online-handel-medicijnen: its title and URL name no business, but its body names a webshop. Brief item 5 bars 'any page naming a seller or company'; the nl-law fact-check says pages can cite it. I kept it because it is cited the same way across the Dutch site. The owner should decide whether it stays site-wide; replacements: igj-2026-04-nps-websites-offline and douane-hvgem-geneesmiddelen-h7
- Medical: the fainting item's 1-minute 112 threshold comes from the site's shared warning sign fainting-serious (English basis, NHS); Thuisarts says to call the GP or out-of-hours post after more than 3 minutes. The palpitations or fainting with chest pain items say 112 where Thuisarts says to call the GP straight away. The site's faster levels are kept (nl-help fact 17); this needs medical review
- Legal: the writer's open questions stand: (3) whether the legal/nl line 'Gebruiken staat niet in dat verbod ... Of bezit voor eigen gebruik mag, is niet duidelijk.' may stand on a compound page; (5) whether to keep the US 2024 advisory-vote fold as world context
- For the final sweep (not my file): the WADA row in src/data/compounds/ipamorelin.yaml has as_of 2026-10-22; nl-law fact 48 compared the 2026 and 2027 lists on 27 October 2026, so the row could move to 2026-10-27
- For the final sweep: ema-epar-ghryvelin's title names a company (the writer's note). The Dutch page cites ema-pi-ghryvelin-nl instead
- English words kept with a Dutch explanation (outsourcing facility, proof of concept, Investigator's Brochure/IMPD, 'groeihormoon-releasing peptiden') are not in STYLE-NL 2.8; they should go on the final sweep's style list
- The NL/EU fold puts the EU before the Netherlands; the locale order is NL, EU. Swap them if the reviewer wants the reader's country first

### Open questions

- Medical: for palpitations or fainting together with chest pain or breathlessness, the stop-now list says 112, where Thuisarts says 'bel direct huisarts/huisartsenpost'. This keeps the site's faster level (nl-help fact 17). Confirm?
- Medical: the very-high-blood-sugar sign now follows Thuisarts' signs (thirst and peeing a lot, plus vomiting, drowsiness or fast/deep breathing → bel direct) instead of the NHS wording. Check the wording
- Legal: may a compound page repeat the legal/nl line 'Gebruiken staat niet in dat verbod … Of bezit voor eigen gebruik mag, is niet duidelijk.' (CONTENT-GUIDE §1a, no hints)?
- Legal: douane-2026-08-illegale-online-handel-medicijnen names a webshop in its body text (nl-law 6.12). It is cited for one quoted sentence only and the name is never used. Acceptable?
- Legal: the US 2024 vote fold (FDA review, 0–12 votes, 503A/503B categories) is kept as world context or evidence, never as a route. It opens with 'Voor Nederland verandert het niets'. Keep it or shorten it?
- Advertising test: the page names Ghryvelin, an EU diagnostic, with its Dutch SmPC indication, most common side effect, contraindication and QT warning. The TL;DR describes 'Amerikaanse klinieken … prijzen het aan voor afvallen, spieren en slaap' and answers at once that no study in people tested those uses. Confirm neither reads as praise

## stubs-a1 (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/mots-c.mdx, src/content/compounds/nl/epitalon.mdx, src/content/compounds/nl/thymosin-alpha-1.mdx, src/i18n/nl/glossary/nl-stubs-a1.json, research/nl-notes/stubs-a1.md

### For the final sweep

- src/i18n/nl/vocab.json jurisdictionInSentence.EU 'de EU' -> suggest 'de hele EU': the derived thymosin alpha-1 tile reads 'Goedgekeurd in Italië, India en Hongkong ... Niet goedgekeurd in Nederland of de EU', which contradicts Italy (an EU state); fact sheet 'Niet in {list}' likewise
- src/i18n/nl/glossary/stubs-a.json (group stubs-a): pineal-gland lacks the plural alias 'pijnappelklieren' (epitalon uses <Term id="pineal-gland"> once as a workaround)
- src/data/compounds/epitalon.yaml WADA row prohibited S0: nl-law §5.10 says whether S0 applies to epitalon is unresolved ('write ask'); if the editor sets unclear, English and Dutch sport sentences must change together
- src/data/sources/shared.yaml eu-directive-2001-83: repoint to the 2025-01-01 consolidation (eu-status fact-check); the three pages cite it for art. 6(1)
- config/link-allowlist.json (owner decision): aifa.gov.it would let the thymosin page cite AIFA's current Zadaxin record; not added (not an NL/BE/EU body)
- STYLE-NL merge: the 'Style terms' table in research/nl-notes/stubs-a1.md §5 (thymosine alfa-1 / bèta-4, vrije base / acetaatzout, aanwijzing als weesgeneesmiddel, aangeprezen, resusaap, pijnappelklieren, taaislijmziekte, hepatocellulair carcinoom, primaire antistofdeficiëntie, 'Wat zegt de wet in Nederland?' as the compound regulatory Lead)

### Remaining concerns

- Epitalon in sport: nl-law §5.10 marks S0 for epitalon UNRESOLVED ('write ask'), but the data file, the derived tile, the English page and /nl/legal/sport-and-doping/ say prohibited under S0. The page keeps the data's reading, presented as ours plus 'Vraag het de Dopingautoriteit'. The line under the figure is categorical. Editor decision for the data and both languages
- Thymosin derived tile 'Niet goedgekeurd in Nederland of de EU' beside 'Goedgekeurd in Italië' reads as a contradiction. Fix in src/i18n/nl/vocab.json (final sweep)
- Thymosin TL;DR names the artsenverklaring route. The legal reviewer should confirm it is not read as a hint
- Whether the Italian Zadaxin authorisation is current is cited only via the FDA 2024 briefing and the EMA 2003 text. AIFA is not allowlisted (owner decision)
- SEC filings naming CohBar (developer) stay as on English. Owner's call under CONTENT-GUIDE §11
- eu-directive-2001-83 should be repointed to the 2025-01-01 consolidation; stubs-a.json lacks the plural alias 'pijnappelklieren'; the allergic stop-sign wording varies across Dutch compound pages (final sweep, not my files)

### Open questions

- Legal (advertising test): is 'online aangeprezen voor afvallen / tegen veroudering' neutral enough to describe others' promotion, or should it read 'aangeboden met claims over'?
- Legal: thymosin TL;DR and routes say 'In zeldzame gevallen kan het via een artsenverklaring; de inspectie beslist' (Zadaxin is authorised in Italy). Fair, or could it read as a hint? The body adds the IGJ's restraint.
- Legal: is the B1 line 'Recept en off-label: die wegen gaan over goedgekeurde medicijnen' accurate enough?
- Legal: EU row 'Zonder handelsvergunning mag een medicijn in geen enkele lidstaat in de handel komen' (Directive 2001/83 art. 6(1)), OK as worded?
- Owner/legal: the mots-c page keeps the English page's CohBar SEC filings (authors 'CohBar, Inc.', URLs contain 'cohbar'); CohBar was the developer, not a seller, but CONTENT-GUIDE §11 bars sources naming a company. Keep (science identical) or replace?
- Medical: stop levels: tongue/throat swelling or hard breathing -> 112 and sepsis signs -> 112 (both faster than Thuisarts, as warning-signs.json); low sugar -> bel direct huisarts/huisartsenpost, 112 only when unconscious (Thuisarts level). Agree?
- Medical: epitalon 'De controles op kanker die bij je leeftijd horen' — name the Dutch bevolkingsonderzoek? Not added because no source on the page supports it.
- Medical/editor: keep the restored 'een Belgisch lab voor volksgezondheid' for Vanhee 2015 (English says 'a national laboratory')?

## stubs-a2 (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/semax.mdx, src/content/compounds/nl/selank.mdx, src/i18n/nl/glossary/nl-stubs-a2.json, research/nl-notes/stubs-a2.md

### For the final sweep

- Russia wording differs across Dutch pages (toegelaten: why-not-a-pill, timeline, reform, these pages; geregistreerd: sport-and-doping, whats-changing, legal-routes; goedgekeurd: start-here): pick one, add to STYLE-NL §2.4
- src/data/compounds/semax.yaml and selank.yaml WADA row as_of 2026-10-22: may move to 2026-10-27 (nl-law fact 48 compared 2026/2027 lists); then update 'de sport op 22 oktober 2026' in both pages' status fold
- cbg-compassionate-use-list (src/data/sources/retatrutide.yaml): note records only the 20 Oct retatrutide check; add the 27 Oct text search incl. semax/selank (nl-care fact 39)
- src/i18n/nl/glossary/stubs-a.json (shared): no change needed; nl-stubs-a2.json terms (antiplatelet, generalised-anxiety-disorder) could be merged into it
- STYLE-NL: merge the 'Style terms' table of research/nl-notes/stubs-a2.md (toegelaten, plaatjesremmer, netelroos, stollingsstoornis, vangnetregel S0, voordrachten ingetrokken, indeling, 'in omloop', 'Legaal te leveren als medicijn?')

### Remaining concerns

- Medical reviewer: help level for unusual bleeding or bruising (Semax) and eye pain after nose drops. Both are 'bel direct je huisarts/huisartsenpost', with no Thuisarts page checked for these two signs. Hives without breathing trouble is also at 'bel direct' in the callout, but at 'maak een afspraak' in the site's warning-signs list (Thuisarts says an appointment).
- Legal/owner: the TL;DR line and the what-it-is paragraph name US-marketed uses (memory, anxiety, stroke), as the English does, now worded as 'claims'. The artsenverklaring line gives only the IGJ's own cautions. Both are our reading of the advertising test.
- Final sweep, data owner: fda-pcac-2026-07-meeting (src/data/sources/shared.yaml) still has accessed 2026-10-20. The Semax page now states that no minutes were posted on 27 October 2026 (checked today): update the note and the accessed date.
- Final sweep, carried from the writer: Russia wording differs across the Dutch site (toegelaten / geregistreerd / goedgekeurd). WADA row as_of 2026-10-22 in semax.yaml and selank.yaml; if it moves to 2026-10-27, the pages' 'de sport op 22 oktober 2026' must move with it. The cbg-compassionate-use-list note records only the 20 October retatrutide check. Glossary nl-stubs-a2.json could merge into stubs-a.json. Style terms to merge into STYLE-NL.
- Unresolved and not stated as fact on the pages: the Russian registrations were not re-checked on 27 October; whether WADA S0 covers Semax and Selank; possession for own use; what happens to parcels from inside the EU.
- Not this group's file: --only compounds/nl/se also shows a TL;DR word-count warning for semaglutide.mdx.

### Open questions

- Medical: stop-callout help levels: 112 for breathing trouble or throat/tongue swelling; 'bel direct je huisarts / huisartsenpost' for the other signs, including unusual bleeding/bruising and eye pain after nose drops (no Thuisarts page cited for those two). Right level, or 'maak een afspraak'?
- Medical: 'plaatjesremmers' added beside 'bloedverdunners' for 'antiplatelet medicines'; 'stollingsstoornis' for 'bleeding disorder'
- Legal: 'Een toelating buiten de EU telt niet. In Nederland telt alleen een handelsvergunning van de EU of van het CBG' as a reading of Gnw art. 40(1); NVWA supplement sentence is the general rule, not a Semax ruling
- Legal: is the artsenverklaring line (only the IGJ's own cautions, never presented as a route to these compounds) neutral enough under the 2026 advertising case law?
- Owner/legal: TL;DR 'In de VS verkocht voor geheugen, angst, beroerte en meer' names marketed uses (as English does), attributed to the US market and followed by 'Werkt het? Onbekend'

## stubs-b1 (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/ghk-cu.mdx, src/content/compounds/nl/aod-9604.mdx, src/content/compounds/nl/hexarelin.mdx, src/data/sources/nl-stubs-b1.yaml, src/i18n/nl/glossary/nl-stubs-b1.json, research/nl-notes/stubs-b1.md

### For the final sweep

- stubs-b.yaml, cosing-copper-tripeptide-1: set accessed to 2026-10-27 and add a note on the re-read (INCI name COPPER TRIPEPTIDE-1, skin conditioning, no Cosmetics Regulation provision, no other restriction)
- stubs-b.yaml, eu-regulation-178-2002-food-law: set accessed to 2026-10-27 and add a note that the Dutch text of art. 2 was re-read ('bestemd … om door de mens te worden geconsumeerd'; excluded 'd) geneesmiddelen')
- research/nl-notes/merge.md and the comment on the EU row of src/data/compounds/ghk-cu.yaml: the GHK-Cu cosmetics clause is now re-checked
- bpc-157.yaml ema-medicines-json and tb-500.yaml ema-orphan-designations-json: the notes and accessed dates (20 Oct) describe only the BPC-157 and TB-500 searches. The EU rows of GHK-Cu, AOD-9604, hexarelin and others cite them for the 27 Oct searches. Update the notes or register those searches
- Duplicate ids for the same EMA spreadsheet: ema-under-evaluation-2026-10 (pt-141.yaml) and ema-2026-10-under-evaluation (retatrutide.yaml). Merge them
- nl glossary stubs-b.json lacks medical-device-clearance (510(k)); it was added in nl-stubs-b1.json, and the sweep may move it. Do not add a bare 'GRAS' alias to the gras entry, because it would match the Dutch word 'gras'
- nl glossary stubs-b.json, dermis (lederhuid): the aliases 'opperhuid' and 'epidermis' send the outer skin layer to the lederhuid entry. A separate epidermis entry is optional
- thuisarts-hartkloppingen is registered by the ipamorelin group (nl-ipamorelin.yaml), and the hexarelin page reuses it
- Stop callout titles on Dutch compound pages are not all the same: 16 'Stop en zoek hulp als je dit merkt', 2 'Stop en zoek hulp', 2 'Zoek direct medische hulp', 1 'Zoek nu medische hulp'. Harmonise them
- check-locale-residue --only i18n/nl/glossary reports 0 files, so the residue scan may not read the Dutch glossary or i18n files. Check this

### Remaining concerns

- Legal: on GHK-Cu, 'Toegestaan als cosmetisch ingrediënt? Ja' rests on CosIng (no annex entry, no restriction), which I re-read today through the CosIng API. The reviewer should confirm that 'toegestaan' is not stronger than 'niet verboden of beperkt'.
- Legal: three 'volgens onze lezing' readings need the legal reviewer: Gnw art. 1 applied to a cream; Regulation 178/2002 'geconsumeerd' as excluding injection; 'aangeprezen voor afvallen … meestal een geneesmiddel'.
- Medical: hexarelin palpitations are now at 112 (the site's level). Thuisarts says 'bel direct je huisarts' for palpitations alone.
- NHS symptom pages stay as medical sources in the stop lists, next to Thuisarts, as on other Dutch compound pages. A Dutch reviewer may prefer Thuisarts alone.
- GHK-Cu: the FDA world-context paragraph (category 1/2, PCAC by February 2027, point 5) is longer than one sentence. It could be cut to the category-2 safety sentence.
- Inconsistent rule: GHK-Cu keeps the TGA/CMO and Health Canada warnings as marked evidence, while AOD-9604 and hexarelin dropped the Canadian seizure lines. The editor may want one rule.
- Other owners' files: the ema-medicines-json and ema-orphan-designations-json notes and accessed dates (20 October) describe only the BPC-157 and TB-500 searches, but the EU rows cite them for the 27 October searches. The cosing-copper-tripeptide-1 and eu-regulation-1223-2009-cosmetics accessed dates can move to 27 October. Both are listed for the final sweep.
- Final sweep: check every Dutch compound stop callout that sends hives alone to 112, and harmonise the stop-callout titles.

### Open questions

- Legal (GHK-Cu): is it right to say that a cream can fall under the Geneesmiddelenwet when it is presented as a remedy for a disease? This is our reading of the art. 1 presentation test
- Legal (GHK-Cu): is 'Toegestaan als cosmetisch ingrediënt? Ja' right for an ingredient that is on no annex in CosIng? The research did not read the annexes
- Legal (AOD-9604): is it right that an injectable product is not food under Regulation 178/2002 art. 2? The Dutch text says 'geconsumeerd', the English text says 'ingested'
- Legal (AOD-9604): 'Wordt een product aangeprezen voor afvallen of herstel? Dan valt het volgens onze lezing meestal al onder de omschrijving van een geneesmiddel.' This mirrors /nl/legal/nl/
- Medical: please confirm the help level for each stop sign: chest pain that stays goes to 112; palpitations that do not settle, a hot injection site or fever go to the huisarts or huisartsenpost; a swelling throat or breathing trouble goes to 112. The callouts close with 'Twijfel je? Bel je huisarts of de huisartsenpost.'
- Medical (hexarelin): the risks of growth-hormone medicines rest on the FDA's CJC-1295 briefing, which is US evidence. Should an EU somatropin SmPC be cited instead?
- Advertising test (GHK-Cu): is the positive gel KeyNumber balanced enough next to the two null results?

## stubs-b2 (verdict: ready-after-fixes-made)

Files: src/content/compounds/nl/ss-31.mdx, src/content/compounds/nl/nad-precursors.mdx, src/data/sources/nl-stubs-b2.yaml, src/i18n/nl/glossary/nl-stubs-b2.json, research/nl-notes/stubs-b2.md

### For the final sweep

- src/i18n/nl/compound.json authorised.noProducts ('De officiële productinformatie staat hier nog niet.') shows on Dutch SS-31 (approval 'elsewhere') and reads as if a product will come; suggest a separate string for approval.key 'elsewhere' (AuthorisedProducts.astro)
- src/components/mdx/Section.astro titles harm-reduction 'Veilig en legaal gebruiken' for every category authorised; on Dutch SS-31 (and tesamorelin, PT-141) approved only in the US this overpromises; choose title from approvalFor (all/some) instead of category
- src/i18n/nl/glossary/stubs-b.json: nicotinamide-mononucleotide definition add 'In de EU is het niet toegelaten als nieuw voedingsmiddel (gecontroleerd op 27 oktober 2026)'; nicotinamide-riboside add EU 2020 novel-food authorisation; barth-syndrome term 'barthsyndroom' -> 'syndroom van Barth' (keep alias); novel-food see_also add union-list-novel-foods
- src/i18n/nl/glossary/history.json accelerated-approval: English term 'accelerated approval' -> Dutch term 'versnelde goedkeuring' with English aliases
- src/data/sources/nl-legal-sport-changing.yaml dopingautoriteit-vertaling-dopinglijst-2026: add the M2.2 quote to the note (read in PDF 27 Oct 2026)
- src/data/compounds/nad-precursors.yaml EU row: add eu-op-novel-food-acts-search-2026-10-27 and update comment (Union list 10 Aug 2026 still latest on 27 Oct 2026)
- src/data/sources/stubs-b.yaml: ctgov-nct07531251 and fda-drugsatfda-forzinity notes could record the 27 Oct 2026 re-check (still recruiting; only original approval)
- STYLE-NL candidate terms listed in research/nl-notes/stubs-b2.md §5 (voorlopers, infuus/infusen, versnelde goedkeuring, hoofddoelen, plek, werving, Unielijst, droge maculadegeneratie, netelroos, merknaam, hartfilmpje (ECG))

### Remaining concerns

- SS-31 keeps the US approval story (advisory vote with 'aanzienlijke onzekerheid', the May 2025 letter, accelerated approval, TimeStrip) as evidence that the approval is weak. This is more than the brief's 'world context once and short'. Reviewer decides whether to keep it or cut it.
- Advertising test: the SS-31 harm-reduction Lead 'Het Amerikaanse medicijn heeft de minste onzekerheden' is faithful to the English, but on a Dutch page it may read as pointing to a product that cannot legally be imported. Legal reviewer.
- SS-31 stop callout: for hives alone it says 'Stop met het middel en bel direct je huisarts', which is faster than Thuisarts (an appointment). This follows the label's serious hypersensitivity warning, as on the Dutch tesamorelin page. Medical reviewer.
- 'Een infuus of injectie is dus geen voedingsmiddel' is our reading of 178/2002 art. 2 (Dutch 'geconsumeerd', English 'ingested'). Legal reviewer.
- NAD what-it-is: 'Klinieken bieden NAD+-infusen aan' names no country (the review is international). No Dutch source was found either way (writer's M5).
- SS-31 NL row is investigational although Dutch recruitment has not started. This is a data decision (merge open question 2) and stays as the data say.
- CTIS 2025-523837-25-00 lists Spain in its trial events but not among the member states concerned. The pages say four member states; re-check before publishing.
- Registry notes in files I do not own lack the facts these pages cite them for: ctgov-nct05162768 (Dutch site; confirmed by API today), ema-orphan-designations-json (EU/3/23/2786; confirmed today), cbg-compassionate-use-list (27 October elamipretide search), dopingautoriteit-vertaling-dopinglijst-2026 (M2.2; text confirmed today). Logged in the notes' 'For the final sweep'.
- Writer's sweep items stand: the compound.json authorised.noProducts string shows on an 'elsewhere' page, and Section.astro gives SS-31, tesamorelin and PT-141 the harm-reduction title 'Veilig en legaal gebruiken'. Shared glossary stubs-b.json updates (NMN and NR EU novel-food status, the barth-syndrome term) are still open.

### Open questions

- Medical: are the stop-now help levels right (allergic throat swelling/breathing -> 112; spreading redness and fever after injecting -> huisarts/huisartsenpost, 112 if drowsy or confused)?
- Medical: keep NHS sources beside Thuisarts for symptom descriptions, or Thuisarts only?
- Medical: NAD TL;DR 'Bij muizen hielpen ze tumoren' (English simplification) acceptable?
- Medical: SS-31 tested override 'Deels' text acceptable (18 words, colon form)?
- Medical: should the NAD page say anything about NAD+ infusions in Dutch clinics (no Dutch source found)?
- Legal: SS-31 artsenverklaring described neutrally as route for a medicine authorised elsewhere — passes the advertising test?
- Legal: SS-31 vial row 'Een geneesmiddel zonder handelsvergunning mag niemand in Nederland verkopen of invoeren' written conditionally — OK?
- Legal: NAD 'De EU-toelating geldt ook hier' / 'NMN niet toegelaten in de EU, dus ook niet hier' — OK as plain wording?
- Legal: keep foreign-regulator evidence lines (FDA warning letters on research SS-31, Health Canada naming SS-31 among seized peptides, USADA note on IV infusions) or cite only Dutch/WADA texts?
- Owner: SS-31 EU/NL rows investigational vs not-authorised (merge open question 2) — page works either way
