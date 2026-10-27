# TL;DR evidence table: group "guides" (27 October 2026)

Pages: the home page, start-here, legal-routes, talking-to-your-doctor, the-case-for-reform. In each file the `summary:`
block was replaced, in the same place, by a `tldr:` block. Nothing else in the files changed (checked with `git diff`).

Validator (`npx tsx scripts/validate-content.ts --only <file>`): 0 errors and 0 tldr warnings on all five pages. The one
remaining warning on the-case-for-reform is in the body (the `<Diagram>` caption "Our six ideas…", reading ease 59). It
is not a tldr warning, and it is the owner's wording (research/refocus-notes/finish.md, item 29), so I did not touch it.

| Page | Items | Total words (q + a) | Limit |
|---|---|---|---|
| src/content/pages/en/index.mdx | 4 | 86 | 120 |
| src/content/pages/en/start-here.mdx | 5 | 111 | 120 |
| src/content/pages/en/legal-routes.mdx | 5 | 114 | 120 |
| src/content/pages/en/talking-to-your-doctor.mdx | 6 | 118 | 120 |
| src/content/pages/en/the-case-for-reform.mdx | 6 | 119 | 120 |

Every answer is 18 words or fewer, with reading ease 60 or higher (the validator's numbers).

---

## 1. Home page (src/content/pages/en/index.mdx)

| # | TL;DR item | Supporting sentence(s) on the page, quoted | Where |
|---|---|---|---|
| 1 | **What is this site?** A non-commercial guide to peptides: what the evidence shows, what the law says, and how to reduce harm. | "An independent, non-commercial reference on therapeutic peptides: what they are, what the evidence shows, the law, and how to reduce harm." | Frontmatter `description` |
| 2 | **Same name, same product?** No. A ‘research’ vial sold online is not the medicine from a pharmacy. No regulator has checked it. | Lead: "Does the same name mean the same product? No. The same name can mean a checked medicine or an unchecked vial." Body: "**Semaglutide** from a pharmacy is an approved medicine: a regulator has checked its quality, its effects and its risks. A vial sold online as "research semaglutide" is not that medicine. No regulator has checked what is in it." | ## The most important distinction |
| 3 | **Is BPC-157 an approved medicine?** Not in the US, the UK, Canada or Australia. Nor are most others. Most evidence is from animals. | "Most of the other peptides people talk about, such as [BPC-157], are not approved medicines in the US, the UK, Canada or Australia. Their evidence comes mostly from animals." | ## The most important distinction |
| 4 | **Is something wrong right now?** Read the warning signs page. If it is severe, call your local emergency number. | Callout "Is something wrong right now?": "If something is wrong right now, go to the warning signs. If it is severe, call your local emergency number." | ## Where to start |

## 2. Start here (src/content/pages/en/start-here.mdx)

| # | TL;DR item | Supporting sentence(s) on the page, quoted | Where |
|---|---|---|---|
| 1 | **Have peptides been properly tested?** Most have not, so nobody knows what they do in people. A few, like semaglutide, have. | Heading: "1. Most have never been tested properly in people". Lead: "Have these peptides been tested in people? Most have not. Only a few, such as semaglutide, went through large trials." Body: ""Never tested properly" does not mean "certain to harm you". It means nobody knows. Nobody knows if it works in people. Nobody knows which side effects it causes, or how often." | ## 1. Most have never been tested properly in people |
| 2 | **Are online vials the real medicine?** No. No regulator has checked what is in them, how much, or whether they are free of germs. | Lead: "Is a vial from outside a pharmacy the same as the medicine? No. No regulator has checked what is in it, how much, or whether it is free of germs." Body: "But "research semaglutide" sold online is not that medicine: no regulator has checked it." | ## 2. The vial is not the molecule |
| 3 | **Is it legal?** In the US, the UK, Canada and Australia, a medicine must be approved before sale. BPC-157 is not. | Lead: "Is it legal? Selling an unapproved medicine is against the law in all four countries. BPC-157 is not approved." Diagram rows: "A new medicine may not be sold until the FDA approves it. BPC-157 is not approved…"; "A medicine needs a UK licence before it is sold or supplied. BPC-157 has none."; "A new drug may not be sold until Health Canada authorises it. Health Canada has not authorised BPC-157."; "A peptide sold for a health purpose must be on the national register (the ARTG). BPC-157 is not." | ## 3. The law in plain words |
| 4 | **Should I tell a doctor?** Yes. A doctor can check your risks, look for an approved option, and help if something goes wrong. | Lead: "Should I tell a doctor? Yes. A doctor can check your risks, look for an approved option, and help if something goes wrong." | ## 5. Bring a doctor into it |
| 5 | **What if I go ahead anyway?** Check the product, use clean steps, never share needles, know the warning signs, and get checked. | Lead: "What if I decide to go ahead? Check the product, use clean steps, never share, know the warning signs, and get checked." Body: "Never share needles, syringes, vials or pens." | ## 6. If you decide to go ahead |

## 3. Legal routes (src/content/pages/en/legal-routes.mdx)

| # | TL;DR item | Supporting sentence(s) on the page, quoted | Where |
|---|---|---|---|
| 1 | **Can I get a peptide legally?** Yes, if it is approved, like semaglutide: on prescription, from a pharmacy. Your doctor is the starting point. | Lead: "Is there a legal way to get a peptide treatment? For approved medicines, yes." Body: "For an approved medicine, such as semaglutide or tirzepatide, the first route works in all four countries: a prescription." "Your doctor is the starting point for every route." Prescription Lead: "How do I get an approved peptide medicine? From a prescriber who has assessed you, and a pharmacy. This is the same in all four countries." | Page opening; ## Prescription |
| 2 | **What about BPC-157?** In the US, the UK, Canada and Australia, almost no legal route fits. Almost no trial tests it. | Compare title: "For a peptide approved nowhere, almost no legal route fits in any of the four countries." Compare detail: "For a peptide approved nowhere, such as BPC-157. US federal law, the UK, Canada and Australia…". KeyNumber title: "Almost no trial tests BPC-157 in these four countries"; label: "planned trial of BPC-157 in the four countries; it had not yet started". | Page opening; ## Trials |
| 3 | **Did the FDA vote change that?** No. The July 2026 vote by FDA advisers was advice only. US pharmacies still may not use BPC-157. | Lead: "Can a US pharmacy make a peptide medicine for me? Only with allowed ingredients. BPC-157 and peptides like it are not on that list." Body: "In July 2026, FDA advisers voted to recommend BPC-157 and five other peptides for the list, as reported from the public meeting. The vote was advice only, against FDA staff's proposal. Compounding with them stays prohibited until the FDA completes a rule. On 23 October 2026 the Federal Register held no such rule." | ## US compounding |
| 4 | **What if I am seriously ill?** Each country has narrow special routes. Your doctor applies, not you, and the maker must agree. | "Each of these routes is narrow." (## What this means for you). Early access Lead: "Sometimes, if you are very ill, and only if the maker agrees to give it." US expanded access row: "Your doctor asks. The company, an ethics board (IRB) and the FDA must all agree." Canada SAP steps: "A serious or life-threatening condition."; "Your doctor makes the request."; "If the maker cannot supply it, the request is cancelled."; "You cannot apply yourself." Australia SAS: "Patients cannot apply." "A TGA approval does not oblige a company to supply the product. The doctor must find it." | ## Canada: special access; ## Australia: SAS; ## Early access in the US and the UK; ## What this means for you |
| 5 | **Can I import it for myself?** The rules differ by country. In all four, the border can stop a parcel and destroy it. | Lead: "Can I import a peptide medicine for myself? The rules differ by country. In all four, the border can stop a parcel and destroy it." | ## Personal import |

## 4. Talking to your doctor (src/content/pages/en/talking-to-your-doctor.mdx)

| # | TL;DR item | Supporting sentence(s) on the page, quoted | Where |
|---|---|---|---|
| 1 | **Will my doctor keep it private?** Yes, in the US, the UK, Canada and Australia, with a few exceptions. | Lead: "Will my doctor keep this private? Yes. In all four countries, doctors must keep what you say private, apart from a few exceptions." Intro: "…and explains your rights in the US, the UK, Canada and Australia." | ## Your rights: privacy and consent; page opening |
| 2 | **Will my employer find out?** Not without your permission, apart from a few cases the law sets out. | Diagram "who-can-find-out", row "Your employer, your family or anyone else": "Not without your permission, apart from the same legal exceptions." Row "The police": "A doctor may share information with the police only in cases the law sets out, for example a court order, or to prevent serious harm to someone." | ## Your rights: privacy and consent |
| 3 | **Will my doctor prescribe it?** Usually not. They can still check you, treat side effects and look for an approved option. | Lead: "What will the doctor do? Listen, explain the risks and other options, and maybe advise against it. They will usually not prescribe it." InDetail "What a doctor can do instead of prescribing": "**Suggest an approved medicine.**" and "**Do checks**, such as blood tests, and treat side effects." | ## What to expect |
| 4 | **What should I bring?** The product and its label, a list of everything you take, your goal, and your questions. | Lead: "What should I bring? The product and its label, a list of everything you take, your goal, and your questions." | ## What to bring |
| 5 | **How do I bring it up?** Say it early and plainly: ‘I want help to lower the risk.’ | Lead: "How do I bring it up? Say it early and plainly. Doctors are used to talking about difficult subjects." Body: "For example: "I am not asking you to approve. I want help to lower the risk."" | ## How to start the conversation |
| 6 | **What if I feel brushed off?** Ask about approved options and checks. You can ask for a referral or a second opinion. | Lead: "What if I feel brushed off? Be specific. Ask about approved options and checks. You can ask for a referral or a second opinion." | ## If you feel brushed off |

## 5. The case for reform (src/content/pages/en/the-case-for-reform.mdx), the owner's signed opinion

Written as opinion ("We think…", "We propose…", "We do not argue…"). The owner-approved line is kept word for word in
item 1. No other "we support" appears: commit cc87dee replaced "We support the rules on selling." with this line, and
"the only stated support is for longer, healthier human lives". The body was not touched.

| # | TL;DR item | Supporting sentence(s) on the page, quoted | Where |
|---|---|---|---|
| 1 | **What do you stand for?** What we support is longer, healthier human lives. We think better facts do more good than bans alone. | "What we support is longer, healthier human lives." (InDetail "4. Enforcement aimed at sellers and false claims", ## What we propose). Lead: "What is your position? Better facts and better access do more good than bans and poor facts." Title: "The case for reform: better information, not prohibition alone". | ## What we propose; ## Our position in brief; frontmatter `title` |
| 2 | **Does a ban stop people?** No, people use them anyway. We think hidden use means unknown products and unreported harm. | Lead: "Does the ban stop people using them? No. Seized goods, warnings and side-effect reports all show that people use them." Lead: "What goes wrong when use is hidden? People get unknown products, skip check-ups, and harms go unreported." | ## People are already using these products; ## What a ban without information does |
| 3 | **What do you propose?** We propose six legal steps, like public trials and testing services. Each gives people better facts. | Lead: "What should change? Six legal steps. Each gives people better facts. None makes it easier to sell bad products." Diagram "six-proposals": "1. Public, independent trials of widely used compounds"; "2. Testing services for peptides". | ## What we propose |
| 4 | **Do you want weaker rules?** No. Each idea keeps the ban on selling and advertising medicines that are not approved. | "None of this means weaker rules for sellers. Every proposal keeps the ban on selling and advertising unapproved medicines." Lead: "No. We do not argue for weaker rules, or that anyone should use anything." | ## Our position in brief; ## What we do not argue |
| 5 | **Are you saying they are harmless?** No. We do not argue that any product is risk-free, or that anyone should use one. | Lead: "Are you saying these products are harmless? No. We do not argue for weaker rules, or that anyone should use anything." Diagram "what-we-do-not-argue": "That any compound on this site is free of risk, or that it works"; "That anyone should use any product". | ## What we do not argue |
| 6 | **Could you be wrong?** Yes. We list the evidence that would change our mind. | Lead: "Could you be wrong? Yes. Here is the evidence that would make us change this page." Diagram id "what-would-change-our-mind". | ## What would change our mind |

---

## Checks against the hard rules

- No new facts: every line above is condensed from the quoted sentences. No new numbers. Hedges kept: "most",
  "almost no", "usually not", "with a few exceptions", "advice only", "nobody knows".
- No doses, no amounts, no seller names, no buying help. The validator's guardrail patterns (safe, proven, superlatives,
  seller words) find nothing in these TL;DRs.
- No emergency phone number. The home page says "call your local emergency number".
- Only the US, the UK, Canada and Australia are named. No EU, EMA, Netherlands, Belgium or Germany (the reform body
  cites EMA and EudraVigilance evidence; the TL;DR does not).
- "Safe" is not used. "GP" and "A&E" are not used.
