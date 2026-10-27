# TL;DR evidence table: group compounds-a (27 October 2026)

Pages: aod-9604, bpc-157, cjc-1295, epitalon, ghk-cu, hexarelin, ipamorelin (`src/content/compounds/en/`).
Each `summary:` block was replaced in place by a `tldr:` block; nothing else in the files changed.

The four At a glance tiles (approved?, tested in people?, sport?, biggest risk = `glance.main_risk`) sit above
these lines, so the lines below do not repeat them. Word counts are the validator's (`wordCount` of all q + a).
Quotes are copied from the page; `<Cite>` tags are left out. "Frontmatter" means the page's own frontmatter
(shown on the page as the study table, mechanism steps, fact sheet or status table); "data file" means
`src/data/compounds/<slug>.yaml`, which the page shows in its status table.

`npx tsx scripts/validate-content.ts --only <slug>`: 0 errors and no `tldr` warnings for all seven pages
(the remaining warnings are older ones: inline outbound links, a missing BE row for the nl preview).

---

## aod-9604 (85 words)

| # | TL;DR item | Supporting text on the page (section) |
|---|---|---|
| 1 | **What is it?** A lab-made piece of growth hormone. US clinics offer it for weight loss, joints and anti-ageing. | What it actually is, Lead: "A lab-made piece of growth hormone, first developed as a diet pill. It is not an approved medicine." Same section, body: "US clinics now market it, mostly as injections or pills, for weight loss, joints and anti-ageing." |
| 2 | **Does it work?** No. In 502 adults, weight loss was no better than a dummy pill. Full results were never published. | What the evidence actually shows, Lead: "No. In the largest trial, people did not lose clearly more weight than on a dummy pill." KeyNumber title: "In 502 adults, weight loss was no better than placebo". Frontmatter `studies.options-2007-obesity-trial.limitation` (study table): "Known only from the company's stock-exchange report, as quoted by the FDA; never published in a journal." Frontmatter `grade_rationale.human_clinical`: "the largest in 502 adults with obesity for 24 weeks, but published only a safety summary." |
| 3 | **For joints or ageing?** Only animal studies, at most. No study of shots in people was found. | What the evidence actually shows, body: "Claims about joints, bones or anti-ageing rest on, at most, animal studies." What it actually is, Compare row "Tested as an injection in people?": "No. The FDA found no such study." Fact sheet (`glance.facts`): "Injected use studied?" / "No study in people found". |
| 4 | **Can US pharmacies make it?** FDA advisers voted 12 to 0 against it in 2024. | Regulatory status, Compare, US row: "FDA advisers voted 12–0 against letting pharmacies make it." Fold "Status in each country, and in sport": "On 4 December 2024 the FDA's Pharmacy Compounding Advisory Committee voted 12 to 0 that neither form should go on the list of substances US pharmacies may compound, as FDA staff had proposed." |
| 5 | **Can I own it in Australia?** Only if a doctor has prescribed it. | Regulatory status, fold "The UK, Canada and Australia" > "Australia, where it began": "It is still there in the October 2026 edition, and also in Appendix D: medicines that must not be possessed without authority, such as a prescription." and "State and territory law gives this force. In Victoria, for example, having any Schedule 4 medicine without authority is an offence, and New South Wales lists AOD-9604 among its stricter "S4D" medicines." Data file, AU schedule note (status table): "Possessing it without authority, such as a prescription, is illegal (Appendix D)." |

---

## bpc-157 (76 words)

| # | TL;DR item | Supporting text on the page (section) |
|---|---|---|
| 1 | **What is it?** A lab-made peptide. It is sold online for tendon, ligament, muscle and gut problems. | What it actually is, Lead: "A lab-made chain of 15 amino acids." Same section, body: "BPC-157 is promoted online for tendon, ligament, muscle and gut problems, with record search interest in 2024." Compare row "One substance under that name?": "Different substances are sold under it, such as a free base or an acetate salt." |
| 2 | **Does it work?** Nobody knows in people. Most studies are in rats, and most come from one Zagreb group. | What the evidence actually shows, Lead: "Unknown in people. Rat studies mostly show faster healing, but most come from one group." KeyNumber: "Most lab and animal studies come from one group in Zagreb" / "about 140 of 160" / "lab and animal papers have authors from one group in Zagreb". Evidence map (fold "Every study in one table…"), row "Animal injury models": "Most of the roughly 160 primary papers" … "Mostly rats". |
| 3 | **Can a US pharmacy make it?** No. Reports say FDA advisers backed it in July 2026, but that was only advice. | Regulatory status, Compare, US row: "Pharmacies may not legally make it until the FDA makes a rule adding it to the 503A list. The July 2026 vote was only advice." Fold "The United States, and the July 2026 vote point by point": "On 23 July 2026 the FDA's Pharmacy Compounding Advisory Committee (PCAC) voted 8–6 with one abstention to recommend BPC-157 for the 503A bulk drug substances list (count as reported from the public meeting; see below)." and "The FDA had not posted written minutes by 20 October 2026, so the vote counts and the six-of-seven outcome are as reported from the public meeting". |
| 4 | **Using it anyway?** Talk to a doctor first. A torn tendon may need a scan or surgery within weeks. | If someone is going to do this anyway, "Talk to a doctor first": "A doctor can also make sure the injury itself is properly diagnosed. A torn tendon or ligament may need a scan or surgery within weeks. Using a peptide instead of a diagnosis can delay care that works." |

---

## cjc-1295 (84 words)

| # | TL;DR item | Supporting text on the page (section) |
|---|---|---|
| 1 | **What does it do?** It raises growth hormone for days in healthy adults. No study tested any health benefit. | Proposed mechanism, body: "In healthy adults, one injection kept growth hormone higher for 6 days or more and IGF-1 higher for 9 to 11 days." What the evidence actually shows, Lead: "It raises growth hormone and IGF-1 in healthy adults. No study tested any health benefit." |
| 2 | **With or without DAC?** They differ. Only the ‘with DAC’ peptide was tested in people. | What it actually is, Compare title: "Two different peptides are sold as CJC-1295. Only one was ever tested in people." Compare row "Tested in people?": with DAC "Three small studies in healthy adults"; without DAC "No published study". Fold "Why the name is a problem": "This matters because the two are different molecules, and the evidence belongs to only one of them." |
| 3 | **Did a trial patient die?** The FDA, citing online reports, says one died in 2006. The drug's role is unknown. | Frontmatter `studies.conjuchem-2006-hiv-phase-2.finding` (study table): "It was stopped in 2006; the FDA, citing online reports, says a participant had a heart attack and died." Fold "Who made it, and why development stopped": "According to the FDA's 2024 review, ConjuChem withdrew CJC-1295 from clinical trials in 2006 after a participant in that trial died". Risk profile, fold "The 2006 trial that was stopped": "But no one outside the company has seen the trial's data, so whether CJC-1295 played any part cannot be settled." What is genuinely unknown: "The 2006 death. Whether CJC-1295 played any part cannot be judged, because no data from the trial were published." |
| 4 | **Can a US pharmacy make it?** No. In 2024 FDA advisers voted to keep it that way. | Regulatory status, Compare, US row: "Pharmacies may not compound with it. In December 2024 FDA advisers voted against changing that: 0–13, or 1–12 for one salt." |
| 5 | **Using it anyway?** Have a doctor test your blood sugar and IGF-1 first. | If someone is going to do this anyway, Lead: "Check the vial and its label, get key blood tests with a doctor, and know when to stop." "Talk to a doctor first": "A doctor can also measure IGF-1 and blood sugar before and during use." |

---

## epitalon (81 words)

| # | TL;DR item | Supporting text on the page (section) |
|---|---|---|
| 1 | **What is it?** A lab-made peptide. It is sold online as an anti-ageing product. | What it actually is, Lead: "A lab-made chain of four amino acids, sold for anti-ageing." Same section, body: "It is promoted online as an anti-ageing substance, as injections, capsules and an oral spray, some labelled for research use only." |
| 2 | **Does it slow ageing?** Unknown in people. In mice, average life span did not change. | Frontmatter mechanism step "Slower ageing or longer life in people: not shown": "In mice, average life span did not change, although the longest-lived tenth lived longer. No study has measured ageing, sleep or life span in people." What the evidence actually shows, fold "Every study in one table": "In mice, average life span did not change." KeyNumber: "Only the oldest mice lived longer" / "average life span did not change". |
| 3 | **Who studied it?** Mostly one group in St Petersburg, Russia: about two in three papers. | What the evidence actually shows, KeyNumber: "About two in three papers come from one group" / "100 of 146" / "papers have an author from the St Petersburg group". Same section, Lead: "Animal studies are many but come almost all from one group." |
| 4 | **Can a US pharmacy make it?** No. Reports say FDA advisers backed it in July 2026, but that was only advice. | Regulatory status, Compare, US row: "Pharmacies may not make it until the FDA makes a rule adding it to the 503A list." Lead: "The 2026 US vote was only advice." Fold "The July 2026 US vote, point by point": "As reported from the meeting, it recommended six: BPC-157, KPV, TB-500, MOTS-c, Semax and epitalon" and "The vote is advisory and non-binding, and it went against FDA staff's own recommendation not to list epitalon." and "The FDA had posted no minutes by 23 October 2026, so the counts and outcome above are as reported from the public meeting." |
| 5 | **Who should avoid it?** People who have or had cancer. They have the most to lose. | If someone is going to do this anyway, fold "Checks that make sense, and who should not use it": "People with cancer or a history of cancer have the most to lose from the telomerase concern." |

---

## ghk-cu (85 words)

| # | TL;DR item | Supporting text on the page (section) |
|---|---|---|
| 1 | **What is it?** A copper-carrying peptide found in blood, sold in skin creams and as injections. | What it actually is, Lead: "A copper-carrying peptide found in blood. It is sold in skin creams and as injections." |
| 2 | **Do the creams work?** Mixed, in small trials. One gel trial on diabetic foot sores was positive. | What the evidence actually shows, Lead: "For skin and wounds, small trials gave mixed results." KeyNumber title: "One gel trial on foot sores was positive". Frontmatter `studies.mulder-1994-diabetic-ulcers.finding`: "a GHK-Cu gel closed plantar diabetic foot ulcers further than a dummy gel". |
| 3 | **Is it allowed in creams?** Yes in the US, UK and Canada. Australia: not confirmed. | Regulatory status, Compare title: "Allowed in skin creams in three of the four countries." What it actually is, Compare row "Can it be a cosmetic?": "It is not a banned or restricted cosmetic ingredient in the US, the UK or Canada. For Australia, this could not be confirmed." |
| 4 | **Is the FDA reviewing it?** Yes. It plans to ask its advisers by the end of February 2027. Advice is not approval. | Regulatory status, fold "The United States: cosmetic or drug, and pharmacy compounding": "GHK-Cu for other routes is in category 1, still under evaluation." and "The FDA plans to ask its Pharmacy Compounding Advisory Committee about GHK-Cu before the end of February 2027. Such a vote is advice only." and "It would not be an approval". |
| 5 | **Using it anyway?** Keep creams on the skin. Cosmetic GHK-Cu is made for the skin. | If someone is going to do this anyway, Lead: "Check the product first, keep creams on the skin, and know when to stop." ProductCheck extra: "Cosmetic GHK-Cu is made for the skin. In the UK and Canada, nothing meant for injection is a cosmetic." |

---

## hexarelin (83 words)

| # | TL;DR item | Supporting text on the page (section) |
|---|---|---|
| 1 | **What does it do?** It makes the body release growth hormone. No controlled trial has shown a lasting benefit. | What it actually is, Lead: "A lab-made chain of six amino acids that makes the body release growth hormone." What the evidence actually shows, Lead: "It does release growth hormone. No controlled trial has shown a lasting benefit." |
| 2 | **Does the effect fade?** Yes. In 12 older people it fell by about half in 16 weeks. | What the evidence actually shows, KeyNumber: "With weeks of use, the effect fell by almost half" / "Rahim 1998: 12 healthy elderly people, injections twice a day, no placebo group". Frontmatter `studies.rahim-1998-sixteen-weeks.finding`: "In 12 healthy elderly people injected twice a day for 16 weeks, the growth hormone response to a test dose fell by about half and recovered 4 weeks after stopping". |
| 3 | **What about the heart?** One dose made healthy hearts pump harder for up to an hour. Longer-term effects are unknown. | Frontmatter mechanism step "Stronger heartbeat for an hour; long-term benefit unknown": "In 7 healthy men one dose made the heart pump harder for up to an hour, which growth hormone itself did not. Whether repeated use helps or harms the heart is unknown." What the evidence actually shows, body: "The heart findings in people are short-term changes after a single dose." |
| 4 | **Using it anyway?** Ask a doctor which blood sugar or heart checks fit you. | If someone is going to do this anyway, fold "Checks that make sense, and who should be careful": "A doctor can help you decide which checks fit you" … "Blood sugar, especially with diabetes, because too much growth hormone can raise it." … "Your heart, if you have heart disease, because of the heart effects seen in studies." |
| 5 | **Can I own it in Australia?** Only if a doctor has prescribed it. | Regulatory status, fold "The UK, Canada and Australia" > Australia: "Since 1 June 2015 the Poisons Standard, Australia's national list of scheduled medicines, has named hexarelin as prescription only (Schedule 4) and on the list of medicines that are illegal to possess without authority (Appendix D)." and "Possession rules are set by each state and territory." Frontmatter `regulatory_notes.AU`: "Named in the Poisons Standard as prescription only (Schedule 4) and illegal to possess without authority (Appendix D)." Data file, AU schedule note: "Possessing it without authority, such as a prescription, is illegal (Appendix D)." |

---

## ipamorelin (85 words)

| # | TL;DR item | Supporting text on the page (section) |
|---|---|---|
| 1 | **What is it?** A lab-made peptide that releases growth hormone. US clinics promote it for weight loss, muscle and sleep. | What it actually is, Lead: "A lab-made peptide that makes the body release growth hormone." Same section, body: "US wellness clinics and websites promote ipamorelin for weight loss, muscle, sleep and anti-ageing, often mixed with CJC-1295 or sermorelin." |
| 2 | **Does it work?** No study in people tested those uses. The one published patient trial found no clear benefit. | What the evidence actually shows, Lead: "It releases growth hormone in people. But the only published patient trial found no clear benefit." Same section, body: "But no study in people has tested the uses it is promoted for, and the only published patient trial missed its goal." |
| 3 | **Can a US pharmacy make it?** No. FDA advisers voted 0 to 12 against it in 2024. | Regulatory status, Compare, US row: "Pharmacies may not make it from raw powder. In October 2024 FDA advisers voted 0–12, with one abstention, against changing that." |
| 4 | **Using it anyway?** Ask a doctor to check your blood sugar, blood pressure and ankle swelling. | If someone is going to do this anyway, "How a doctor can help": "A doctor can check what ipamorelin may change: blood sugar, fluid and blood pressure, and hormone levels." Checklist: "Blood pressure, weight and your ankles, because fluid retention was a common side effect of a related drug." |
| 5 | **Can I own it in Australia?** Only if a doctor has prescribed it. | Regulatory status, fold "The UK, Canada and Australia" > Australia: "Since 1 June 2015 the Poisons Standard, Australia's national list of scheduled medicines, has named ipamorelin as prescription only (Schedule 4) and on the list of medicines that are illegal to possess without authority (Appendix D)." and "Possession without a prescription is a matter for each state and territory." Frontmatter `regulatory_notes.AU`: "Named in the Poisons Standard as prescription only (Schedule 4) and illegal to possess without authority (Appendix D)." Data file, AU schedule note: "Possessing it without authority, such as a prescription, is illegal (Appendix D)." |

---

## Points for the checker

- **Australia possession lines** (aod-9604, hexarelin, ipamorelin): "Only if a doctor has prescribed it" condenses the
  national Appendix D wording ("illegal to possess without authority, such as a prescription"). "A doctor" narrows
  "authority" (another prescriber or a licence would also count), and the pages add that possession is enforced
  through state and territory law (Victoria and NSW checked, the others not). The short wording was chosen because
  "Not without a prescription" fails the reading-ease check (55).
- **July 2026 vote** (bpc-157, epitalon): "Reports say" keeps the pages' hedge that the outcome is "as reported from
  the public meeting" (no minutes posted).
- **CJC-1295 death**: "citing online reports" keeps the page's hedge (the FDA's "anecdotal reports on the
  internet"); "The drug's role is unknown" keeps "whether CJC-1295 played any part cannot be settled".
- **BPC-157 "sold online"**: the page says "promoted online"; "sold" is also on the page ("Different substances
  are sold under it"). Chosen for reading ease.
- No doses, no seller names, no emergency numbers, no EU/Netherlands/EMA mentions in any line.
