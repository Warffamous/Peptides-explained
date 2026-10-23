# Research notes — refocus assignment `ireland-nz-notes`

For a new page **"Ireland and New Zealand: short notes"** on the English site (one compact section per
country). Written on **23 October 2026**.

Outputs:
- this file;
- `research/refocus/sources/ireland-nz.yaml` — **60 new sources** (67 after the independent fact-check, which added
  7; see the last section) (format checked with the `yaml` package:
  every entry has type, authors, title, year, url, accessed, verified, note; every type is in `SOURCE_TYPES`;
  no id or URL collides with `src/data/sources/*.yaml` or the other refocus files; every URL answered HTTP 200
  on 23 October 2026).

**Second run (same day).** The first run was cut off. Its draft was re-checked rather than rewritten: the key
figures were fetched again and matched (HPRA 2025 release, RTÉ, Medsafe advisory, Medsafe import page, NZ Herald,
Sports Tribunal decision PDF). legislation.govt.nz, which blocks curl, was read in a normal browser, so the
Therapeutic Products Act repeal is now confirmed (4.1 resolved) and the Medicines Act 1981 itself is cited.
Corrections are listed in section 6.

Nothing under `src/`, `config/`, `docs/` or `scripts/` was edited.

**Method.** Every live source was fetched on 23 October 2026 with curl or WebFetch (HTML read as text, PDFs with
`pdftotext`), and the figures quoted below were checked against the raw page text, not only against a summary.
Databases were queried directly: the HPRA XML product lists (downloaded, searched field by field), the HPRA news API
(all 110 items listed), the Medsafe classification database (one POST query per search term).

**Sites that could not be read automatically** (bot challenges; I did not try to get round them):
health.govt.nz and sportintegrity.nz (Cloudflare challenge; sportintegrity.nz also showed a "verify you are
not a bot" page in a normal browser, so it was left alone), nzlii.org (Cloudflare), beehive.govt.nz (Incapsula),
parliament.nz (Radware). The Internet Archive refused this machine (HTTP 429). legislation.govt.nz blocks curl
(AWS WAF) but opened normally in the app's built-in browser (no CAPTCHA), and was read there in the second run.
What the blocked sites would have supported is either sourced elsewhere (stated per fact) or left UNRESOLVED.

**House rules applied:** no doses or vial strengths (the Sports Tribunal decision lists them; they are not copied),
no sellers named, no athlete named on the site, no emergency numbers, and **no telephone numbers recorded at all**
(the task did not ask for them; several pages print them). British spelling, dates in prose.

---

## 0. Reused source ids (already in `src/data/sources/`; not repeated in the new YAML)

| id | used for | re-checked today |
|---|---|---|
| `wada-2026-list-en` | BPC-157 named in S0 (non-approved substances), in force 1 January 2026 | yes: PDF re-fetched, S0 names BPC-157 |
| `wada-2027-list-en` | S0 still names BPC-157 from 1 January 2027 | no (fetched 20 October 2026) |
| `wada-code-2021` / `wada-code-2027` | strict liability (Art. 2.1.1); 2027 Code from 1 January 2027 | no (fetched 22 October 2026) |
| `eu-directive-2001-83` | the EU definition of a medicinal product, which Irish law adopts | no |
| `eu-regulation-726-2004` | the centralised (EU-wide) authorisation route | no |
| `ema-medicines-search` | EU-level "not authorised" findings already on the compound pages | no |

---

## 1. Ireland

### 1.1 Draft section (B1, for the page; every sentence sourced)

> **Ireland**
>
> <Lead question="Who controls medicines in Ireland?">The Health Products Regulatory Authority (HPRA). Medicines approved for the whole EU are approved in Ireland too.</Lead>
>
> The HPRA licenses medicines, inspects the companies that make or distribute them, and checks their safety.<Cite id="ie-hpra-what-we-regulate" /> It used to be called the Irish Medicines Board.<Cite id="ie-imb-act-1995" /> A medicine approved through the European Medicines Agency has one licence that is valid in every EU country, Ireland included.<Cite id="ie-hpra-licensing-procedures,ie-si-2007-540-placing-on-market" />
>
> **The law.** Irish law uses the EU definition of a medicine.<Cite id="ie-imb-act-1995,eu-directive-2001-83" /> The Medicinal Products (Control of Placing on the Market) Regulations 2007 say a medicine needs an Irish or EU licence before it is sold. A business may not sell, supply or keep a medicine unless it has reason to believe it is licensed.<Cite id="ie-si-2007-540-placing-on-market" /> Under the Medicinal Products (Prescription and Control of Supply) Regulations 2003, medicines for injection are, as a rule, prescription-only.<Cite id="ie-si-2003-540-prescription-supply" /> It is illegal to sell prescription medicines online in Ireland.<Cite id="ie-hpra-buying-prescription-medicines-online" /> Advertising a medicine that has no licence is also banned.<Cite id="ie-si-2007-541-advertising" /> Breaking these rules is a crime under the Irish Medicines Board Acts 1995 and 2006. The most serious cases can lead to up to 10 years in prison.<Cite id="ie-imb-act-1995,ie-imb-misc-provisions-act-2006" />
>
> **Bringing medicines in.** Revenue, which runs Irish customs, says a traveller may carry a reasonable amount of a medicine for their own use. This does not apply to medicines sent by post or courier.<Cite id="ie-revenue-tdm-medicinal-products-2026" /> If Customs stops a parcel, the HPRA writes to you. It cannot send the parcel on or back to the seller.<Cite id="ie-hpra-buying-prescription-medicines-online" />
>
> **What the HPRA finds.** In 2025 the HPRA stopped 763,027 units of illegal medicines (single tablets, capsules, vials and the like). They included 13,898 parcels, each bought by a member of the public. It closed or changed 4,762 websites and social media pages.<Cite id="ie-hpra-2026-03-enforcement-2025" /> Illegal GLP-1 weight-loss products rose from 1,582 units in 2024 to 48,752 in 2025. Patches it tested did not contain semaglutide.<Cite id="ie-hpra-2026-03-enforcement-2025,ie-hpra-2025-09-enforcement-h1-2025" /> In 2025 it found pens sold as tirzepatide that contained insulin.<Cite id="ie-hpra-2025-10-counterfeit-tirzepatide" /> Since 2022 it has stopped about 1,000 units of melanotan II each year.<Cite id="ie-hpra-2026-03-enforcement-2025" /> Figures the HPRA gave to RTÉ show more than 1,300 units of BPC-157 stopped in the first half of 2026.<Cite id="ie-rte-2026-10-15-peptides" />
>
> **Side effects.** Anyone can report a side effect to the HPRA online, even if you are not sure the product caused it.<Cite id="ie-hpra-report-side-effect,ie-hpra-reporting-as-patient" /> The HPRA does not give medical advice, so talk to a doctor, pharmacist or nurse about your health.<Cite id="ie-hpra-reporting-as-patient" /> You can also report illegal selling, in confidence.<Cite id="ie-hpra-report-illegal-activity" />
>
> **Sport.** Sport Ireland is the national anti-doping organisation.<Cite id="ie-sport-ireland-act-2015,ie-sport-ireland-anti-doping" /> The WADA list applies, and BPC-157 is banned at all times.<Cite id="ie-sport-ireland-2026-list-advisory,wada-2026-list-en" /> Athletes must check every medicine; medicines bought in Ireland are checked on Medcheck Sport Ireland.<Cite id="ie-sport-ireland-medcheck" />
>
> **Help.** The HSE website shows where to get urgent care: GP out-of-hours services, injury units and emergency departments.<Cite id="ie-hse-urgent-emergency-care" /> HSE needle exchange services give sterile injecting equipment free and in confidence.<Cite id="ie-hse-anabolic-steroids-reducing-harm" /> The National Poisons Information Centre at Beaumont Hospital runs a public poisons line from 08:00 to 22:00.<Cite id="ie-npic-poisons" /> If it is severe, call your local emergency number.

Writer's notes:
- The RTÉ sentence must stay attributed ("figures the HPRA gave to RTÉ"): the HPRA has not published the 2026 peptide
  figures on hpra.ie (see 3.1). Delete it if the editor wants primary sources only.
- "Since 2022 ... about 1,000 units of melanotan II each year" condenses the HPRA tables: 950 (2022), 1,329 (2023),
  1,099 (2024), 1,146 (2025); before that 6 (2020) and 790 (2021), hence "since 2022" (fact-check). The HPRA calls
  it "Melanotan 2".
- The HSE needle-exchange sentence comes from the HSE page on **anabolic steroids**; it is about injecting equipment in
  general, so it is fair for peptides, but do not say the HSE page mentions peptides (it does not).
- "Fake weight-loss products" = the HPRA's "GLP-1 type medicines". Keep the word "units" (the HPRA counts dosage units).

### 1.2 Facts, with source ids

| Fact | Source id |
|---|---|
| HPRA: licenses companies to make, distribute and market medicines; inspects; monitors medicines and other health products; remit includes controlled substances and cosmetics | `ie-hpra-what-we-regulate` |
| IMB renamed Health Products Regulatory Authority: s. 3(4) IMB Act 1995, inserted by s. 36 Health (Pricing and Supply of Medical Goods) Act 2013, in force 1 July 2014 (S.I. No. 205 of 2014) | `ie-imb-act-1995`, `ie-health-pricing-supply-medical-goods-act-2013` |
| Centralised EMA procedure: "a single marketing authorisation that is valid in all EU Member States plus Iceland, Liechtenstein, and Norway"; national route via the HPRA for Ireland only | `ie-hpra-licensing-procedures` |
| Reg. 6(1) 2007 Regs: no placing on the market without a marketing authorisation or a **Community** marketing authorisation (Commission, Reg. 726/2004) or registration; reg. 6(2): no business sale, supply or possession without reasonable cause to believe it is lawfully on the market (Ireland or another EEA state) | `ie-si-2007-540-placing-on-market` |
| Reg. 4(2) 2007 Regs: in doubt, a product that may be a medicine and something else is treated under the medicines rules | `ie-si-2007-540-placing-on-market` |
| Sch. 1 para. 1(c) 2007 Regs (as made): personal import from a non-EEA country exempt, **unless** it results directly from a mail-order advertisement to the public; paras 2–3: special-needs supply on a practitioner's unsolicited order | `ie-si-2007-540-placing-on-market` |
| Reg. 5(1) 2003 Regs: prescription-only = First Schedule substances, (b) **any medicine for parenteral administration**, (c) any new chemical molecule (read as made; later exemptions not checked, hence "as a rule" in the draft) | `ie-si-2003-540-prescription-supply` |
| Collective citation: "the Irish Medicines Board Acts 1995 and 2006" (2006 Act, s. 1(3): the 1995 Act and **Part 3** of the 2006 Act; still given in the LRC revised Act, updated to 30 June 2026) | `ie-imb-misc-provisions-act-2006`, `ie-imb-act-1995` |
| Reg. 19 2003 Regs (as made): no supply of any medicine by mail order; now: "It is illegal to sell prescription medicines online in Ireland"; non-prescription online sale only by PSI-registered sellers with the EU common logo | `ie-si-2003-540-prescription-supply`, `ie-hpra-buying-prescription-medicines-online` |
| Reg. 6(1) Advertising Regs 2007: no advertisement for a medicine without a marketing authorisation or traditional-use registration; HPRA (6 May 2026): the rules apply "to anyone who advertises a medicine in Ireland, including on social media" | `ie-si-2007-541-advertising`, `ie-hpra-2026-05-social-media-advertising` |
| IMB Act 1995 s. 1: "medicinal product" = Directive 2001/83/EC definition; s. 4(1): licensing functions, competent authority under 2001/83/EC | `ie-imb-act-1995`, `eu-directive-2001-83` |
| Penalties, s. 32(4) (as substituted 2006): summary: a fine (now class C, max €2,500) or up to 1 year or both; indictment: first offence up to €120,000 or 10 years or both; subsequent offence up to €300,000 or 10 years or both | `ie-imb-act-1995` (s. 32 revised), `ie-imb-misc-provisions-act-2006` |
| IMB (Misc. Provisions) Act 2006 s. 17: authorised officers (ss. 32A–32F); s. 32A(b) defines "authorised officer" to include an officer of customs and excise (Revenue's manual says "under section 32B") | `ie-imb-misc-provisions-act-2006`, `ie-revenue-tdm-medicinal-products-2026` |
| Revenue (manual updated February 2026): traveller may carry "a reasonable amount ... for personal use without an authorisation"; exemption "does not apply to products imported by other means, for example by post, by courier"; "Most medicinal products encountered by Revenue are ... small quantities consigned to private individuals for their own personal use" | `ie-revenue-tdm-medicinal-products-2026` |
| HPRA: detained parcels "may be destroyed"; HPRA writes to the buyer; "we cannot send it to you or return it to the supplier" | `ie-hpra-buying-prescription-medicines-online` |
| Side effects: "Anyone can report"; online form (forms.hpra.ie, linked from the landing page); report "even if you suspect ... but are unsure"; the HPRA "cannot provide clinical advice" | `ie-hpra-report-side-effect`, `ie-hpra-reporting-as-patient` |
| Illegal activity can be reported through the HPRA contact form, "in the strictest confidence" | `ie-hpra-report-illegal-activity` |
| Sport Ireland Act 2015 s. 41: Sport Ireland is the national anti-doping organisation; s. 42: it makes the Irish Anti-Doping Rules | `ie-sport-ireland-act-2015` |
| Sport Ireland: 2026 WADA list in effect 1 January 2026; check every medicine (Medcheck Sport Ireland for medicines bought in the Republic; Global DRO for NI/UK) | `ie-sport-ireland-2026-list-advisory`, `ie-sport-ireland-medcheck` |
| HSE: GP out-of-hours, injury units, emergency departments; HSE steroid harm-reduction page (reviewed 24 July 2026): needle exchange free and confidential; ask your GP about blood tests | `ie-hse-urgent-emergency-care`, `ie-hse-anabolic-steroids-reducing-harm` |
| National Poisons Information Centre, Beaumont Hospital: 24-hour service for professionals; public line 08:00–22:00 | `ie-npic-poisons` |

### 1.3 HPRA enforcement, 2023–2026 (all from hpra.ie press releases unless marked)

| Period | Total dosage units detained | Melanotan 2 units | GLP-1 type units | Online removals | Prosecutions / cautions | Source |
|---|---|---|---|---|---|---|
| 2023 | 874,945 | 1,329 | 568 (286 semaglutide, 253 liraglutide) | 2,348 | 2 (steroids) / 14 | `ie-hpra-2024-03-enforcement-2023` (the 568 total: `ie-hpra-2025-04-enforcement-2024`) |
| Jan–Jun 2024 | 706,881 | 708 | 783 semaglutide | 1,603 | 1 / 4 | `ie-hpra-2024-07-enforcement-h1-2024` |
| 2024 | 1,000,984 | 1,099 | 1,582 | 2,553 | 2 (steroids; Saxenda) | `ie-hpra-2025-04-enforcement-2024` |
| Jan–Jun 2025 | 382,395 | 573 | 11,350 (10,817 patches) | 2,820 | — | `ie-hpra-2025-09-enforcement-h1-2025` |
| 2025 | 763,027 in 13,898 consignments | 1,146 | 48,752 (47,514 presented as semaglutide or tirzepatide: 27,329 drops, 17,170 patches) | 4,762 (2,755 linked to its 2025 warnings) | 1 (GLP-1 manufacture and distribution) / 14 | `ie-hpra-2026-03-enforcement-2025` |
| Jan–Jun 2026, **news only** | — | about 500 | — | — | — | `ie-rte-2026-10-15-peptides`: BPC-157 >1,300 units ("a 400% increase in just four years"); TB-500 from "a handful in 2023" to >200; GHK-Cu from 5 to >500; HPRA does not record route, so counts "may also include oral, nasal spray or transdermal form" |

Warnings in the window: 25 October 2023 (falsified semaglutide sold online: 254 units in January–September 2023
against 32 in 2022; "no authorised version of Semaglutide in powder form") `ie-hpra-2023-10-semaglutide-detentions`
(added by the fact-check); 28 March 2024 (the 2023 enforcement release warns of "a concerning upward trend in
detentions of Melanotan 2, an unregulated substance promoted as a self-tanning aid") `ie-hpra-2024-03-enforcement-2023`;
26 November 2024 (GLP-1 products sold online: "No authorised version of semaglutide exists in
powder form", some vials found in beauty settings) `ie-hpra-2024-11-glp1-warning`; 29 May 2025 (fake HPRA
endorsements, patches with the Irish flag; 155 Shopify listings, 124 Facebook profiles, 414 Facebook adverts)
`ie-hpra-2025-05-fraudulent-websites`; 4 September 2025 (joint HMA/EMA warning on illegal GLP-1 products, with
negative-only warning signs) `ie-hpra-2025-09-hma-ema-glp1-warning`; 10 October 2025 (counterfeit tirzepatide pens
containing insulin, intercepted with Revenue's Customs Service; risk of severe hypoglycaemia)
`ie-hpra-2025-10-counterfeit-tirzepatide`; 6 May 2026 (advertising rules apply on social media)
`ie-hpra-2026-05-social-media-advertising`.

**No HPRA warning about "peptides" as such (BPC-157, TB-500, research peptides) exists on hpra.ie** in its news
listing, which runs from 1 June 2021 to 23 October 2026 (see 3.1). The HPRA does warn by name about Melanotan 2 (a
peptide) in its enforcement releases. The only HPRA words on peptides are those RTÉ reports (paraphrase: peptides "are not
licensed medicines" but "may still be considered medical products" depending on composition, purpose and claims).

### 1.4 Status check in Ireland (HPRA product lists, 23 October 2026)

Authorised in Ireland (all through EU-wide authorisations): semaglutide (Ozempic, Wegovy, Rybelsus; also Kayshild,
EU/1/26/2019, authorised 26 March 2026, for MASH; and Kyinsu, insulin icodec with semaglutide, EU/1/25/1992,
24 November 2025), tirzepatide (Mounjaro), afamelanotide (Scenesse; not a site compound but
the melanocortin relative of melanotan II). Not in the authorised or withdrawn lists: every experimental peptide on
the site, bremelanotide (Vyleesi), tesamorelin (Egrifta), elamipretide (Forzinity), thymalfasin, retatrutide. Search
terms in `ie-hpra-human-medicines-list-2026-10-23`. *Kayshild*: checked against its EPAR in the fact-check
(`ema-epar-kayshild`: semaglutide, Novo Nordisk, EU authorisation 26 March 2026), so the name may be printed.

---

## 2. New Zealand

### 2.1 Draft section (B1, for the page; every sentence sourced)

> **New Zealand**
>
> <Lead question="Who controls medicines in New Zealand?">Medsafe, part of the Ministry of Health. The Medicines Act 1981 still applies.</Lead>
>
> Medsafe approves new medicines, watches their safety once they are used, and has a team that investigates illegal supply.<Cite id="nz-medsafe-about" /> A new medicine needs the Minister's consent, given by Medsafe, before it can be sold, supplied or advertised.<Cite id="nz-medicines-act-1981,nz-medsafe-unapproved-medicines" /> A new law, the Therapeutic Products Act 2023, was meant to replace the Medicines Act.<Cite id="nz-moh-2024-tpa-repeal-bill-disclosure" /> It was repealed on 18 December 2024, before most of it had come into force, so the Medicines Act 1981 is still the law.<Cite id="nz-therapeutic-products-act-2023,nz-therapeutic-products-act-repeal-act-2024,nz-medicines-act-1981" /> The Ministry of Health is now preparing a Medical Products Bill to replace it; no such bill had been put before Parliament by 24 October 2026.<Cite id="nz-moh-medical-products-bill,nz-legislation-bills-search-2026-10-23" />
>
> **Peptides are prescription medicines.** In December 2025 Medsafe added whole groups of peptides to the list of prescription medicines. The groups include BPC-157 and similar peptides, thymic peptides, peptides made in mitochondria such as MOTS-c, and pineal peptides such as epitalon.<Cite id="nz-gazette-2025-go7397-classification,nz-medsafe-2025-06-peptides-mcc-submission" /> Such a notice lasts six months unless it is replaced sooner; the current notice, published on 3 August 2026, lists the same groups.<Cite id="nz-medicines-act-1981,nz-gazette-2026-sl4278-classification" /> Ipamorelin, CJC-1295, tesamorelin and retatrutide are prescription medicines too, and Medsafe's database lists TB-500 as one.<Cite id="nz-medicines-regulations-1984,nz-gazette-2026-sl4278-classification,nz-medsafe-classification-database-2026-10-23" /> It is against the law to import, get, keep or use a prescription medicine without a reasonable excuse, such as a prescription.<Cite id="nz-medicines-act-1981" /> A "research use only" label changes nothing.<Cite id="nz-medsafe-2026-05-peptide-advisory" /> Prescription-only does not mean approved: Medsafe has not approved any of these products.<Cite id="nz-medsafe-2026-05-peptide-advisory" />
>
> **Through a prescriber.** Under section 29 of the Medicines Act, an unapproved medicine can be supplied to a doctor, nurse practitioner or pharmacist prescriber to treat their own patient.<Cite id="nz-medicines-act-1981,nz-medsafe-unapproved-medicines" /> Nurse practitioners and pharmacist prescribers can do this since 19 November 2025.<Cite id="nz-medsafe-pu-2026-03-medicines-amendment-act" /> You must agree to the treatment first, and the supplier reports the supply to Medsafe.<Cite id="nz-medsafe-unapproved-medicines,nz-medicines-act-1981" />
>
> **Importing for yourself.** You may import a prescription medicine only with an original prescription or letter from a New Zealand prescriber. The limit is three months' supply, for you or your close family only.<Cite id="nz-medsafe-personal-importation" /> Customs can hold the parcel until the prescriber's authorisation is checked.<Cite id="nz-medsafe-personal-importation" />
>
> **What Medsafe finds.** Until December 2025, Medsafe released peptides that were not on the list to the buyer with a warning letter, because the law gave it no grounds to seize them.<Cite id="nz-medsafe-2025-06-peptides-mcc-submission" /> Medsafe now says it continues to seize these products.<Cite id="nz-medsafe-2026-05-peptide-advisory" /> Medsafe told the NZ Herald it stopped more than 370 parcels of peptides and similar drugs in 2025, against 15 in 2022.<Cite id="nz-nzherald-2026-07-02-peptide-seizures" />
>
> **Side effects.** Patients and health professionals can report a side effect online, through a CARM report on Medsafe's website.<Cite id="nz-medsafe-report-a-problem,nz-otago-nzphvc-carm" />
>
> **Sport.** The Sport Integrity Commission Te Kahu Raunui runs anti-doping in New Zealand. It took over from Drug Free Sport New Zealand on 1 July 2024.<Cite id="nz-sportnz-integrity-path" /> New Zealand's Sports Anti-Doping Rules follow the WADA Code, and BPC-157 is banned at all times.<Cite id="nz-sic-sports-anti-doping-rules,wada-2026-list-en" /> Buying or having a banned peptide can lead to a ban from all sport, even without a test, and Customs finds do lead to bans.<Cite id="nz-sic-2026-06-peptides-trend" /> In one case, Customs stopped a parcel of peptides sent to an athlete and passed the case to the Commission. The athlete admitted having them and supplying another person, and was banned from sport for three years.<Cite id="nz-sports-tribunal-2025-foster" /> Athletes can check their medicines on Global DRO.<Cite id="nz-sic-checking-medications" />
>
> **Help.** Healthline gives free health advice by phone, 24 hours a day.<Cite id="nz-healthnz-healthline" /> The National Poisons Centre is free and open 24 hours a day.<Cite id="nz-national-poisons-centre" /> If you feel unwell after injecting an unapproved product, get medical advice straight away. Take leftover products to a pharmacy, and used needles in a sharps container to a needle exchange or pharmacy.<Cite id="nz-medsafe-2026-05-peptide-advisory" /> If it is severe, call your local emergency number.

Writer's notes:
- **"Repealed on 18 December 2024, before most of it had come into force"**: now read on legislation.govt.nz (second
  run). The TPA 2023 (assent 26 July 2023) shows "repealed, on 18 December 2024, by section 3 of the Therapeutic
  Products Act Repeal Act 2024 (2024 No 55)"; only subpart 2 of Part 11 (contingent Food Act amendments) had
  commenced, and no commencement Order in Council was ever made, so "before most of it had come into force" is the
  exact wording; do not write "before it took effect" without "most of". The repeal Act (assent 17 December 2024,
  in force the next day) later repealed itself (s 10, close of 14 January 2025); that does not revive the TPA.
- **Six-month notices.** Section 106(3) of the Medicines Act makes every classification notice lapse after six
  months unless revoked sooner; Medsafe publishes a fresh consolidated notice from time to time (the Gazette shows
  a series). Cite the current notice
  (2026-sl4278, published 3 August 2026) for "is a prescription medicine", and the December 2025 notice only for
  when the groups were first listed. Do not write "since December 2025" as if continuous for BPC-157 (see 4.3).
  *Fact-check:* neither notice states a start date, so under Legislation Act 2019 s 26(2) each came into force the
  day after publication: 2025-go7397 on 20 December 2025 (lapsed around 19–20 June 2026), 2026-sl4278 on 4 August
  2026 (lapses around 3–4 February 2027 unless replaced). No notice listed the peptide groups between those two, so
  "still lists" was wrong and is now "the current notice ... lists the same groups". **Re-check the Gazette before
  4 February 2027** and update the citation (or the sentence) then.
- *Fact-check:* the Medical Products Bill sentence is new. Its sources are the Ministry of Health's own page (read in
  a normal browser; "the Ministry is developing a new Medical Products Bill to replace the Medicines Act 1981") and
  the bill search on legislation.govt.nz (repeated 24 October 2026: no such bill). Delete it if the editor wants the
  note shorter.
- The thymic, mitochondrial and pineal groups do not name thymosin alpha-1, MOTS-c or epitalon. That they are meant to
  cover them comes from Medsafe's own submission (it names them as members). Semax (ACTH analogues) and Selank
  (tuftsin analogues) are in the same position. Keep the sentence as "peptides such as", with both sources.
- Do **not** claim melanotan II, PT-141, GHK-Cu or KPV are prescription medicines in New Zealand: none has its own
  entry (see 3.3). "Melanocyte stimulating compounds" is a prescription group, but whether it covers melanotan II or
  bremelanotide is Medsafe's call and is not stated anywhere I could read.
- The NZ Herald figure must stay attributed ("Medsafe told the NZ Herald"). The article's "15-fold rise" is wrong
  (370 is about 25 times 15): print the counts only.
- Medsafe's advisory also says "Do not use them". Per CONTENT-GUIDE §1a the page gives the practical steps, not the
  instruction; quoting Medsafe once is acceptable if the editor wants it.
- The Sports Tribunal case is about a named athlete: cite it, never name him. *Fact-check:* the three-year ban rests
  on trafficking (supplying another person; four years minimum, less one year for early admission), not on
  possession alone, so the sentence now says "admitted having them and supplying another person". The Commission's
  own pages (read in a normal browser on 24 October 2026) now source the sport paragraph directly.

### 2.2 Facts, with source ids

| Fact | Source id |
|---|---|
| Medsafe = New Zealand Medicines and Medical Devices Safety Authority, "a business unit of the Ministry of Health"; administers the Medicines Act 1981 and Medicines Regulations 1984; pre-market approval, post-market surveillance, Investigation and Enforcement Team | `nz-medsafe-about` |
| Ministerial consent (delegated to Medsafe) is needed before any medicine is sold, supplied, distributed or advertised | `nz-medsafe-unapproved-medicines` |
| TPA 2023 had a commencement date of 1 September 2026 and was to replace the Medicines Act 1981; repeal Bill (Government Bill 67 of 2024, disclosure dated 11 June 2024): "In the interim, the Medicines Act 1981 ... will continue in force" | `nz-moh-2024-tpa-repeal-bill-disclosure` |
| TPA 2023 (2023 No 37, assent 26 July 2023) repealed on 18 December 2024 by s 3 of the Therapeutic Products Act Repeal Act 2024 (2024 No 55, assent 17 December 2024, in force the day after assent); only subpart 2 of Part 11 of the TPA had commenced; no commencement Order in Council on the site | `nz-therapeutic-products-act-2023`, `nz-therapeutic-products-act-repeal-act-2024` |
| Medicines Act 1981 (version as at 10 July 2026): s 20(2) no sale, distribution or advertising of a new medicine before consent; s 20(4) individual up to 6 months or $20,000; s 29 (replaced 19 November 2025) supply to a medical practitioner, nurse practitioner or pharmacist prescriber for a patient under their care; s 29B monthly reporting by the importer or manufacturer; s 43(1) "No person shall, without reasonable excuse, import, procure, receive, store, use, or otherwise have in his possession, any prescription medicine"; s 43(4) not knowing is not by itself a reasonable excuse; s 106(3) a classification notice lasts 6 months unless revoked sooner | `nz-medicines-act-1981` |
| Medicines Regulations 1984, Schedule 1 Part 1 (replaced 1 September 2021; version as at 10 July 2026): prescription entries include afamelanotide, AOD-9604, CJC-1295, GHRH/GHRP groups, hexarelin, ipamorelin, "melanocyte stimulating compounds", semaglutide, sermorelin, tesamorelin, thymosin beta-4; not BPC-157, TB-500, tirzepatide, retatrutide, elamipretide or the 2025 groups | `nz-medicines-regulations-1984` |
| Current classification notice 2026-sl4278 (dated 29 July 2026, published 3 August 2026, s 106(1)): prescription Schedule still lists the ten 2025 peptide groups, elamipretide, "Retratrutide" (sic), tirzepatide, GLP-1 receptor agonists, AICAR, B7-33, larazotide, PNC-27, PTD-DBM | `nz-gazette-2026-sl4278-classification` |
| No "Medical Products Bill" on legislation.govt.nz (bills, title search, 23 October 2026; repeated 24 October 2026) | `nz-legislation-bills-search-2026-10-23` |
| Ministry of Health: "the Ministry is developing a new Medical Products Bill to replace the Medicines Act 1981" (page last updated 14 October 2025); Cabinet policy decisions released 19 August 2025, 14 October 2025 and 28 May 2026 (decisions of 7 April 2026) | `nz-moh-medical-products-bill` |
| Legislation Act 2019 s 26(2): secondary legislation with no stated start date comes into force the day after publication; so 2025-go7397 from 20 December 2025, 2026-sl4278 from 4 August 2026 | `nz-legislation-act-2019`, `nz-medicines-act-1981` (s 106(4)) |
| Medicines Amendment Act 2025 in force 19 November 2025; amends the Medicines Act 1981: s 29 now also nurse practitioners and pharmacist prescribers; s 29A (Pharmac-funded alternative in a shortage); verification pathway; s 34AA (conference advertising) | `nz-medsafe-pu-2026-03-medicines-amendment-act` |
| s 29: sale or supply of an unapproved medicine "to a medical practitioner, nurse practitioner or pharmacist prescriber for the treatment of a patient under their care"; supplier notifies Medsafe monthly; patient consent required; s 25: a prescriber may procure any medicine for a known patient, not in bulk | `nz-medsafe-unapproved-medicines` |
| Personal import: "illegal to import a prescription medicine without reasonable excuse"; reasonable excuse = original prescription or letter from a NZ authorised prescriber; max three months' supply (six for oral contraceptives; one for controlled-drug medicines, which cannot be imported this way by post); for self or immediate family, no supply to others; Customs may detain until authorisation verified; travellers declare and carry with prescription | `nz-medsafe-import-faqs`, `nz-medsafe-personal-importation` |
| Medsafe border data: 56 parcels with peptides or SARMs, 1 April – 19 May 2025; unscheduled peptides were released with a "high-risk medicine letter" because Medsafe had no grounds to seize them; BPC-157 already prescription since the 70th MCC meeting (25 May 2023); TB-500 and thymosin beta-4 already prescription | `nz-medsafe-2025-06-peptides-mcc-submission` |
| MCC 74th meeting (23 July 2025): decision deferred pending information on cosmetic uses; secretariat then recommended classification after the cosmetics industry raised no issues | `nz-mcc-74-minutes-2025-07-23` |
| Gazette notice 2025-go7397 (signed 17 December 2025, published 19 December 2025, s 106(1) Medicines Act): prescription medicines include the ten peptide groups (thymic peptide hormones; BPC-157 and analogues; ACTH analogues; pineal gland peptides; antimicrobial peptides; myostatin modulators; mitochondria-derived peptides; erythropoietin analogues; tuftsin analogues; kisspeptins) and AICAR, B7-33, elamipretide, larazotide, PNC-27, PTD-DBM, "Retratrutide" (sic), tirzepatide, GLP-1 receptor agonists. Lapsed after six months (s 106(3)); superseded by 2026-sl4278 | `nz-gazette-2025-go7397-classification` |
| Classification database (searched 23 October 2026; "Database updated: 25 September 2026"; Medsafe says to check the Regulations and Gazette notices for the legal record): prescription entries for TB-500, thymosin beta-4, ipamorelin, hexarelin, tesamorelin, CJC-1295, AOD-9604, sermorelin, GHRH/GHRP/GH-secretagogue groups, afamelanotide, "melanocyte stimulating compounds", elamipretide, semaglutide, tirzepatide, retatrutide, and the peptide groups | `nz-medsafe-classification-database-2026-10-23` |
| Medsafe advisory (21 May 2026): increasing imports and sales, Medsafe continues to seize; products advertised include BPC-157, CJC-1295, GHRP-6, ipamorelin, kisspeptin, KLOW, melanotan II, retatrutide, "sealank, seamax" (sic), TB-500, thymosin; "It is unlawful to import, supply, possess or procure prescription medicines unless this is authorised"; "for research purposes only" "has no legal effect"; no NZ trials approved for these products; retatrutide not approved by any trusted regulator; disposal and sharps advice | `nz-medsafe-2026-05-peptide-advisory` |
| News (NZ Herald, 2 July 2026 NZ time, Medsafe figures): >370 peptide parcels intercepted in 2025, 15 in 2022, >200 in January–April 2026; 22 NZ websites contacted and taken down | `nz-nzherald-2026-07-02-peptide-seizures` |
| Sports Tribunal, SIC v Foster (ST 20/24, 21 May 2025): Customs intercepted a parcel with ipamorelin, tesamorelin, TB-500 and BPC-157 on 30 September 2024 and referred it to the Commission; possession and trafficking; three years' ineligibility | `nz-sports-tribunal-2025-foster` |
| Drug Free Sport NZ became part of the Sport Integrity Commission Te Kahu Raunui on 1 July 2024; the Commission does anti-doping testing, services and education; the Sports Anti-Doping Act 2006 became the Sports Tribunal Act 2006 on 1 July 2024 | `nz-sportnz-integrity-path`, `nz-sports-tribunal-history` |
| Sports Anti-Doping Rules "give effect to the World Anti-Doping Code in NZ"; 2026 Rules in effect 1 January–31 December 2026; 2027 Rules published, in effect 1 January–31 December 2027 | `nz-sic-sports-anti-doping-rules` |
| Commission (10 June 2026): you can be banned from all sport "for using, possessing or buying experimental peptides"; "Customs interceptions can and do lead to anti-doping sanctions"; medicines can be checked on Global DRO | `nz-sic-2026-06-peptides-trend`, `nz-sic-checking-medications` |
| CARM: consumers and professionals encouraged to report; online CARM form linked from Medsafe; CARM is part of the NZ Pharmacovigilance Centre (University of Otago); since 1 October 2023 Medsafe receives and first-processes reports; overall responsibility lies with Medsafe | `nz-medsafe-report-a-problem`, `nz-medsafe-adr-report-processing`, `nz-otago-nzphvc-carm` |
| Healthline: free, 24/7 phone health service, funded by Health NZ, provided by Whakarongorau Aotearoa (updated 22 July 2026) | `nz-healthnz-healthline` |
| National Poisons Centre: "A free 24/7 service for all New Zealanders" (University of Otago) | `nz-national-poisons-centre` |

---

## 3. Search records (what was searched, where, when)

### 3.1 HPRA news (Ireland), 23 October 2026
The news page loads from the site's own API; all **110** items were listed by title. *Fact-check correction:* they
run from **1 June 2021** to 23 October 2026, not from January 2024 (1 item from 2021, 2 from 2022, 7 from 2023, then
22, 51 and 27). None names peptides, BPC-157, TB-500, GHK-Cu, retatrutide, melanotan or "research use" in its title or
summary, but the 2023 items include a semaglutide warning of 25 October 2023 (now `ie-hpra-2023-10-semaglutide-detentions`),
and the text of the 28 March 2024 release warns about Melanotan 2. The HPRA 2025 annual report
(PDF, published 11 September 2026) was searched with pdftotext for peptide, melanotan, BPC, GLP-1, retatrutide,
tirzepatide: no peptide-specific figures. A 2022 HPRA warning on Melanotan 2 is reported by Irish news sites but is
not in the HPRA's current news listing (which holds only two 2022 items, neither on melanotan) and was not found on
hpra.ie; it is not used. → `ie-hpra-news-list-2026-10-23`.

### 3.2 HPRA product lists (Ireland), 23 October 2026
`latestHumanlist.xml` (10,281 products, 3,909 with EU/ licence numbers) and `withdrawnHumanlist.xml` (19,790),
both datePublished 2026-10-23T02:30:14; ProductName and ActiveSubstance searched case-insensitively. Terms (INN,
synonyms, brands, codes from `src/data/compounds/*.yaml`): semaglutide, Ozempic, Wegovy, Rybelsus, tirzepatide,
Mounjaro, Zepbound, liraglutide, thymalfasin, thymosin, thymosin beta, Zadaxin, tesamorelin, TH9507, TH-9507, Egrifta,
bremelanotide, Vyleesi, PT-141, PT 141, PT141, afamelanotide, Scenesse, elamipretide, MTP-131, Bendavia, Forzinity,
BPC, body protect, PL 14736, PL-10, bepecin, ipamorelin, NNC 26-0161, hexarelin, examorelin, EP-23905, CJC, AOD,
retatrutide, LY3437943, melanotan, Melanotan II, melanotan-2, MT-II, MT2, TB-500, TB500, Ac-LKKTETQ, epitalon,
Epithalon, semax, MEHFPGP, selank, TP-7, MOTS, MOTs-c, GHK, prezatide, copper, KPV, Lys-Pro-Val, nicotinamide riboside,
nicotinamide mononucleotide, nadide, sermorelin, somatropin. Results in 1.4 and in `ie-hpra-human-medicines-list-2026-10-23`.

### 3.3 Medsafe classification database (New Zealand), 23 October 2026
One query per term, "Any classification". Found and not found are listed in full in
`nz-medsafe-classification-database-2026-10-23`. Summary of the site's compounds:

Legal instrument (second run): "Regs" = Schedule 1 Part 1 of the Medicines Regulations 1984 (as at 10 July 2026);
"Notice" = Gazette notice 2026-sl4278 (published 3 August 2026).

| Compound (site) | NZ classification found | How |
|---|---|---|
| BPC-157 | Prescription | group "Body protective compound 157 and its analogues" (Notice) |
| TB-500 | Prescription | own database entry (thymosin beta-4: Regs); TB-500 itself in neither the Regs nor the Notice (UNRESOLVED 4.14) |
| Thymosin alpha-1 | Prescription, by group | "Thymic peptide hormones and their analogues"; named as a member in Medsafe's submission |
| MOTS-c | Prescription, by group | "Mitochondria-derived peptides and their analogues"; named in the submission |
| Epitalon | Prescription, by group | "Pineal gland peptides and their analogues"; named in the submission |
| Semax | Prescription, by group | "Adrenocorticotropic hormone analogues"; named in the submission |
| Selank | Prescription, by group | "Tuftsin and its analogues"; named in the submission |
| SS-31 | Prescription | own entry "Elamipretide" (Notice) |
| Ipamorelin, hexarelin, tesamorelin, CJC-1295, AOD-9604 | Prescription | own entries (Regs) |
| Semaglutide, tirzepatide, retatrutide | Prescription | semaglutide (Regs); tirzepatide and "Retratrutide" (Notice); also the GLP-1 receptor agonist group (Notice) |
| Melanotan II, PT-141 (bremelanotide) | **not established** | no own entry; a group "Melanocyte stimulating compounds" exists (prescription) but nothing read says it covers them |
| GHK-Cu, KPV | **not established** | no entry under any name tried |
| NAD+ precursors | not a prescription entry | nicotinamide: general sale; NR, NMN, nadide: no entry |

Classification is not approval. Which peptide medicines have Medsafe **consent** (approval) was not checked: the
product search redirects to a separate application session that I could not query reliably (UNRESOLVED, 4.6).

### 3.4 Other searches
- NZ Customs news and media releases (customs.govt.nz), 23 October 2026: nothing on peptides.
- Sport Ireland advisory notes, 23 October 2026: CBD and hay-fever notes only; nothing on peptides.
- Medsafe media releases page, 23 October 2026: no peptide release (the 21 May 2026 advisory is under Safety
  Information, not media releases).

---

## 4. Unresolved, and flags for the editor

4.1 **RESOLVED (second run): the repeal of the Therapeutic Products Act 2023.** Both Acts were read on
legislation.govt.nz in a normal browser: TPA 2023 repealed on 18 December 2024 by s 3 of the Therapeutic Products
Act Repeal Act 2024 (2024 No 55; assent 17 December 2024; in force the day after assent; itself repealed at the
close of 14 January 2025 by its own s 10). Entries `nz-therapeutic-products-act-2023` and
`nz-therapeutic-products-act-repeal-act-2024` are now live; the date may be printed.

4.2 **UNRESOLVED (narrowed): the Medical Products Bill** (the planned replacement for the Medicines Act). Ministry
of Health pages are blocked; search results show Cabinet policy decisions up to April 2026 (released 28 May 2026)
and an intention to introduce a Bill in 2026. A title search for bills on legislation.govt.nz on 23 October 2026
found no "Medical Products" bill (only a terminated 2006 bill) → `nz-legislation-bills-search-2026-10-23`. So no
such Bill had been introduced by then. Do not mention it on the page, or say only "the government plans a new law"
once a primary source for the plan is read. **Fact-check: RESOLVED.** The Ministry's pages opened in a normal
browser on 24 October 2026 (`nz-moh-medical-products-bill`): "the Ministry is developing a new Medical Products Bill
to replace the Medicines Act 1981", with Cabinet decisions up to 7 April 2026 (released 28 May 2026). The bill search
was repeated (no such bill). The draft now has one sentence on the plan; no introduction date is given anywhere.

4.3 **UNRESOLVED (narrowed): continuity of the NZ classification notices.** Section 106(3) of the Medicines Act
makes each classification notice lapse six months after it comes into force, unless revoked sooner. The peptide
groups are listed in 2025-go7397 (published 19 December 2025) and again in 2026-sl4278 (dated 29 July 2026,
published 3 August 2026). Neither states its own commencement date, and the Legislation Act 2019 default was not
checked, so the exact in-force days are not established. Two consequences for wording: (a) six months from
19 December 2025 ends in mid-June 2026, before the August 2026 notice, so a gap of some weeks may exist; (b) the
Gazette search finds BPC-157 ("Body Protective Compound –157") in notices dated 31 August 2023, 30 October 2023,
16 April 2024 and 23 September 2024, then nothing until 17 December 2025. Whether BPC-157 was a prescription
medicine without a break from 2023 is therefore not established, even though Medsafe's June 2025 submission says it
was classified at the 70th MCC meeting. On the page write the present tense with the current notice ("is a
prescription medicine"), never "since 2023" or "since December 2025".
**Fact-check: narrowed further.** Commencement is now established: a classification notice is secondary
legislation (s 106(4)), and with no stated date it comes into force the day after publication (Legislation Act 2019
s 26(2), `nz-legislation-act-2019`). So 2025-go7397 ran from 20 December 2025 to about 19–20 June 2026 and 2026-sl4278
runs from 4 August 2026 to about 3–4 February 2027. All 26 "Classification of Medicines" notices of 2023–2026 were
opened: only six carry the running list (2023-go4130, 2023-go5107, 2024-go1837, 2024-go4813, 2025-go7397,
2026-sl4278); the other 20 name neither BPC-157, tirzepatide nor the peptide groups. So the gaps are real on the
Gazette record: no notice naming BPC-157 from about early April 2025 to 19 December 2025, and none naming the peptide
groups from about 20 June to 3 August 2026. Still UNRESOLVED: whether something outside the Gazette search (or an
error in it) covers those gaps; Medsafe's June 2025 paper speaks of BPC-157 as classified. The page wording stays in
the present tense and must be re-checked before 4 February 2027.

4.4 **UNRESOLVED: melanotan II, PT-141, GHK-Cu and KPV in New Zealand** (see 3.3).

4.5 **UNRESOLVED (narrowed): Ireland, later amendments to the 2003 and 2007 Regulations.** Both read "as made"; the
Irish Statute Book has no consolidated text of S.I.s. For the 2007 Regulations, the amending S.I.s 3/2009,
553/2009, 287/2010, 272/2012, 151/2014 and 218/2019 were read in the second run: none touches the personal-import
exemption in Schedule 1 para. 1(c) (they amend paras 3 and 5 and other parts). Amending S.I.s after 2019, and the
amendments to the 2003 Regulations (reg. 5 exemptions, reg. 19 mail order), were not read. The HPRA states the
current position on online sale; Revenue states the current border practice; the draft attributes both and says
"as a rule" for the injection rule. **Fact-check:** the six S.I.s were re-read and four more amending S.I.s were
found and read (722/2011, 162/2013, 529/2018, 416/2022); none touches Schedule 1 para. 1(c). Still UNRESOLVED
whether any later amendment exists, and the 2003 Regulations' amendments remain unread.

4.6 **UNRESOLVED: which peptide medicines Medsafe has approved** (e.g. semaglutide, tirzepatide products). Not needed
for the short note; needed if the page says "approved medicines such as ... are available on prescription".

4.7 **UNRESOLVED: Irish Anti-Doping Rules for the 2027 Code.** Sport Ireland's rules page still describes the 2021
Code (checked 23 October 2026; `ie-sport-ireland-anti-doping-rules`). New Zealand's equivalent (Sports Anti-Doping
Rules for 2027) was not checked, because the Commission's site could not be read. **Fact-check:** New Zealand
RESOLVED: the Commission's site (read in a normal browser, 24 October 2026) says the 2027 Sports Anti-Doping Rules
"have been published and are in effect from 1 January 2027 to 31 December 2027" (`nz-sic-sports-anti-doping-rules`).
Ireland still UNRESOLVED (re-checked; a web search found no Irish Anti-Doping Rules 2027 either).

4.8 **News-only figures.** Ireland's 2026 peptide seizure figures (RTÉ) and New Zealand's 2022/2025/2026 parcel counts
and website take-downs (NZ Herald) come from news reports quoting the regulators; neither regulator has published them.
A Stuff report of "12,000 illegal peptide drug vials worth $3m seized at NZ border" could not be read (only the
headline loaded) and is not used.

4.9 **FLAG (brief wording): "Drug Free Sport NZ"** no longer exists as a separate body: it became part of the Sport
Integrity Commission Te Kahu Raunui on 1 July 2024, and drugfreesport.org.nz redirects to sportintegrity.nz. The page
should name the Commission (sources: Sport NZ and the Sports Tribunal; the Commission's own site could not be read).
*Fact-check:* the Commission's own site has now been read (see 4.7) and is cited in the draft.

4.10 **FLAG (brief wording): "section 29 ... by a doctor"**. Since 19 November 2025 section 29 also covers nurse
practitioners and pharmacist prescribers, and section 29A was added.

4.11 **FLAG: an error in a Medsafe document.** Medsafe's June 2025 submission says SS-31 "does not appear to have been
studied in human clinical trials". That is wrong (the site's SS-31 page cites human trials and the FDA approval). Cite
the submission only for Medsafe's classification reasoning and border data.

4.12 **FLAG: official typos to keep in mind.** Both Gazette notices (2025 and 2026) spell "Retratrutide" (the
database: "Retatrutide"); Medsafe's advisory spells "sealank, seamax". Quote them with (sic) or do not quote them.

4.13 **FLAG: the NZ Herald date.** The article's metadata gives 2026-07-01T17:00Z, which is 2 July 2026 in New
Zealand. The first run's id said 1 July; it is now `nz-nzherald-2026-07-02-peptide-seizures`.

4.14 **UNRESOLVED: which legal instrument classifies TB-500 in New Zealand.** Medsafe's database (updated
25 September 2026) lists "TB-500 ... Prescription", and Medsafe's June 2025 submission says TB-500 was already a
prescription medicine. But TB-500 is not named in Schedule 1 of the Medicines Regulations (as at 10 July 2026; it
names thymosin beta-4) or in the 2023–2026 classification notices found. It may fall under "Thymic peptide hormones
and their analogues" or the thymosin beta-4 entry; that is Medsafe's call. The draft therefore says "Medsafe's
database lists TB-500 as one", not "the law lists".

---

## 5. Hosts to add to `config/link-allowlist.json` (none is on it today)

Regulators and government: `www.hpra.ie` (and `forms.hpra.ie` only if the form is linked directly; better to link the
landing page), `www.irishstatutebook.ie`, `revisedacts.lawreform.ie`, `www.revenue.ie`, `www.medsafe.govt.nz`,
`gazette.govt.nz`, `disclosure.legislation.govt.nz`, `www.legislation.govt.nz` (now used: 4.1 resolved),
`www.healthnz.govt.nz`. Anti-doping and sport: `www.sportireland.ie`, `medcheck.sportireland.ie`, `sportnz.org.nz`,
`sportstribunal.org.nz`, `sportintegrity.nz`. Health services: `www2.hse.ie`, `www.poisons.ie`, `poisons.co.nz`,
`nzphvc-carm.otago.ac.nz` (or the suffix `.ac.nz`). News (cite only, do not link if the editor prefers): `www.rte.ie`,
`www.nzherald.co.nz`. Not recommended: `pophealth.my.site.com` (the CARM form host; link Medsafe's page instead).
A `.govt.nz` suffix entry would cover most New Zealand government hosts in one line; `.gov.ie` covers none of the
Irish ones above. *Fact-check additions:* `www.health.govt.nz` (Ministry of Health, `nz-moh-medical-products-bill`);
`sportintegrity.nz` is now cited directly (it is not the allowlisted `www.sportintegrity.gov.au`, which is
Australia's). `www.ema.europa.eu` (for `ema-epar-kayshild`) is already on the allowlist.

---

## 6. Corrections made in the second run (23 October 2026)

1. **TPA repeal now sourced and dated.** The first run had the repeal date only from a search index and left two
   entries commented out. Both Acts were read on legislation.govt.nz; the entries are live and the page may say
   "repealed on 18 December 2024, before most of it had come into force". The first run's draft sentence "It was
   repealed before it took effect" was too absolute: subpart 2 of Part 11 of the TPA had commenced.
2. **Current NZ classification notice.** The first run cited only the December 2025 Gazette notice. Under s 106(3)
   of the Medicines Act a notice lapses after six months; the current notice is 2026-sl4278 (dated 29 July 2026,
   published 3 August 2026) and is now cited, with the six-month rule and the open continuity question (4.3).
3. **Primary law for the NZ rules.** Sections 20, 29, 29B, 43 and 106 of the Medicines Act 1981 and Schedule 1 of
   the Medicines Regulations 1984 are now cited directly, not only through Medsafe's web pages. The draft's
   "against the law to import, supply, have or get" is now the statutory wording of s 43 ("import, get, keep or
   use ... without a reasonable excuse"); sale and supply are covered by s 20 in the first paragraph.
4. **TB-500 wording.** The first run listed TB-500 with ipamorelin and CJC-1295 as prescription medicines on the
   strength of the database alone. Ipamorelin, CJC-1295 and tesamorelin are in the Regulations and retatrutide is in
   the Notice, but TB-500 is in neither, so the draft now says "Medsafe's database lists TB-500" (4.14).
5. **NZ Herald date and id.** 1 July → 2 July 2026 (NZ time); id renamed to `nz-nzherald-2026-07-02-peptide-seizures`.
6. **Ireland, injection rule.** "every medicine for injection is prescription-only" → "as a rule" (the 2003
   Regulations were read as made; later exemptions were not checked).
7. **Ireland, the Acts' name.** "Irish Medicines Board Acts" → "Irish Medicines Board Acts 1995 and 2006" (the
   statutory collective citation, s. 1(3) of the 2006 Act), with the 2006 Act cited.
8. **Ireland, Revenue attributed.** The traveller and post rule is Revenue's guidance; the sentence now says so.
9. **Ireland, HPRA counts.** "763,027 doses ... in 13,898 parcels" → "763,027 units (single tablets, capsules,
   vials and the like). They included 13,898 parcels, each bought by a member of the public". The HPRA counts
   "dosage units" (its footnote: individual tablets, capsules, vials), not doses, and says the total "included" the
   parcels, not that every unit came in them.
10. **Search records extended.** Six amending S.I.s to the 2007 Regulations were read (4.5); a bill search on
   legislation.govt.nz shows no Medical Products Bill (4.2); the Medsafe database date (25 September 2026) is recorded.

---

## Fact-check (independent)

Independent fact-check of this file and `research/refocus/sources/ireland-nz.yaml`, done on **24 October 2026**
(just after midnight, Irish time; the workflow date is 23 October 2026, so new or re-read entries carry
`accessed: 2026-10-24`). Nothing under `src/`, `config/`, `docs/` or `scripts/` was edited.

**How.** Every source URL was fetched again with curl (HTML read as text, PDFs with `pdftotext`) and each quoted
figure, date and section number was compared with the raw text. legislation.govt.nz, health.govt.nz and
sportintegrity.nz block curl; they were read in a normal Chrome browser (sportintegrity.nz showed Cloudflare's
automatic check, which passed by itself; nothing was clicked or solved). The "not found" searches were repeated
against the databases themselves: the HPRA XML product lists (both files downloaded again and searched field by
field with more synonyms), the HPRA news API (all 110 items), the Medsafe classification database (24 single queries
and the full 3,741-row listing), the NZ Gazette search, and the legislation.govt.nz bill search. House format was
checked with the `yaml` package against the source schema (types, kebab ids, year, verified, accessed). No id
collides with `src/data/sources/*.yaml` or the other refocus files, no URL duplicates an existing entry, and every
id cited in the drafts exists. Reused ids (section 0) all exist.

**Confirmed without change of substance.** HPRA role and licensing pages; the IMB Act 1995 as revised (ss. 1, 3(4),
4(1), 32(4)–(5), the €2,000 → class C annotation, the collective citation); S.I. 540/2007 (regs 4(2), 6(1)–(2),
Schedule 1 paras 1–3); S.I. 540/2003 (reg. 5(1)(a)–(c), reg. 19, the definitions); S.I. 541/2007 (reg. 6(1));
Revenue's manual (February 2026); HPRA buying-online page; every HPRA enforcement figure in 1.3 (874,945; 706,881;
1,000,984; 382,395; 763,027; 13,898 consignments; 4,762 and 2,755 removals; all Melanotan 2 and GLP-1 rows; dates of
all releases); the HPRA reporting pages and form URL; Sport Ireland Act ss. 41–42 and the three Sport Ireland pages;
HSE and NPIC pages; RTÉ figures and quotes. Medsafe about, unapproved-medicines, Prescriber Update, import FAQ,
personal-importation and report-a-problem pages; Medsafe's 21 May 2026 advisory (every quote); the June 2025 MCC
submission and 74th-meeting minutes; both Gazette notices; Medicines Act 1981 ss 20, 29, 29A, 29B, 43, 106;
Medicines Regulations 1984 reg 3(1) and Schedule 1; TPA 2023 (status line, s 2) and its Repeal Act (ss 2, 3, 10);
the disclosure statement; the classification database (date and every entry); NZ Herald (figures, byline, date);
Sport NZ; Sports Tribunal history and decision; CARM and Otago pages; Healthline; National Poisons Centre.

**Changed, and why.**
1. *HPRA news archive range (3.1, 1.3, YAML).* The listing runs from 1 June 2021, not January 2024, and includes a
   2023 HPRA warning (25 October 2023, falsified semaglutide) that the first runs said did not exist on hpra.ie. New
   entry `ie-hpra-2023-10-semaglutide-detentions`; the 28 March 2024 release's warning about Melanotan 2 is now
   recorded. The "no peptide warning" finding is narrowed to warnings about "peptides" as such.
2. *HPRA product list (1.4, YAML).* Search repeated with more synonyms; findings confirmed. Kyinsu (insulin icodec +
   semaglutide) was missing from the list of semaglutide entries. Kayshild was checked against its EPAR (new entry
   `ema-epar-kayshild`), so the editor's "do not print" flag is lifted.
3. *Collective citation (1.2, YAML).* s. 1(3) of the 2006 Act names the 1995 Act and **Part 3** of the 2006 Act, not
   the whole Act; an unsupported remark about the 2013 Act was removed. The citation itself is confirmed as current.
4. *Customs officers (1.2).* The definition is in s. 32A(b); Revenue's manual says "under section 32B". Both noted.
5. *Ireland draft wording.* "inspects the companies that make and sell them" → "make or distribute them" (HPRA's
   words); melanotan "about 1,000 each year" → "since 2022" (2020 and 2021 were 6 and 790); the HSE sentence now
   says what the page lists (GP out-of-hours, injury units, emergency departments), not "GPs".
6. *NZ notice commencement (2.1, 4.3, YAML).* Settled with Legislation Act 2019 s 26(2) (new entry
   `nz-legislation-act-2019`): 2025-go7397 in force 20 December 2025 to about 19–20 June 2026; 2026-sl4278 from
   4 August 2026 to about 3–4 February 2027. All 26 classification notices of 2023–2026 were opened; the gaps are real
   on the Gazette record. Draft: "still lists these groups" → "the current notice ... lists the same groups"; editor
   note to re-check before 4 February 2027.
7. *Medical Products Bill (2.1, 4.2).* Now sourced from the Ministry of Health's own pages (new entry
   `nz-moh-medical-products-bill`) and one sentence added to the draft; the bill search was repeated (none).
8. *Sport, New Zealand (2.1, 4.7, 4.9).* The Commission's own pages were read (new entries
   `nz-sic-sports-anti-doping-rules`, `nz-sic-2026-06-peptides-trend`, `nz-sic-checking-medications`): the 2027 Sports
   Anti-Doping Rules are published and in effect from 1 January 2027. The case sentence now says the athlete admitted
   possession **and supplying another person**: the three-year ban rests on trafficking, not on possession alone.
9. *NZ draft wording.* NZ Herald: "peptide parcels" → "parcels of peptides and similar drugs" (the article's words);
   CARM: "Anyone can report" → "Patients and health professionals can report" (Medsafe: "Healthcare professionals and
   consumers are encouraged to report"); "get medical advice" → "straight away" (Medsafe: "immediately").
10. *TPA 2023 (YAML).* Traced where it would have changed the Medicines Act: Part 11 subpart 4 (s 413 onwards) amends
    it, repealing most sections; it does not repeal it outright. "Meant to replace" stays attributed to the Ministry.
11. *Irish S.I. amendments (4.5, YAML).* Four further amending S.I.s found and read (722/2011, 162/2013, 529/2018,
    416/2022); none touches the personal-import exemption.
12. *Format.* `nz-sports-tribunal-history` URL updated to the address it redirects to (`/history/`); new sources
    added in house format (67 entries in all); allowlist hosts updated in section 5.

**Still UNRESOLVED.**
- NZ: whether anything outside the Gazette search covers the gaps in the classification notices (about April–December
  2025 for BPC-157; about 20 June – 3 August 2026 for the peptide groups). Medsafe's June 2025 paper speaks of
  BPC-157 as already classified. The page must not say "since".
- NZ: which instrument classifies TB-500 (database says prescription; it is in neither the Regulations nor any
  notice). Melanotan II, PT-141, GHK-Cu and KPV: no own entry; whether "Melanocyte stimulating compounds" covers
  melanotan II or bremelanotide is not stated in any source read.
- NZ: which peptide medicines hold Medsafe consent (not checked; not needed for the short note).
- Ireland: amendments to S.I. 540/2007 after 2022, and all amendments to S.I. 540/2003, not established.
- Ireland: whether Irish Anti-Doping Rules for the 2027 Code have been published (Sport Ireland's page still
  describes 2021; no 2027 edition found by search).
- Ireland and NZ: the 2026 peptide seizure figures (RTÉ) and the parcel and website counts (NZ Herald) remain
  news-only and must stay attributed. The Stuff report remains unread and unused.
