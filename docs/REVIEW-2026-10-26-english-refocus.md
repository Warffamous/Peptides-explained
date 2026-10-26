# Review: the English site for the US, UK, Canada and Australia (26 October 2026)

The English site now speaks to readers in the United States, the United Kingdom, Canada and Australia, with short notes
for Ireland and New Zealand. All Dutch, EU, Belgian and German material is off the English site and saved for the Dutch
site (`research/for-nl-site/`, git tag `nl-source-2026-10-23`). Nothing is published yet: the live site still shows the
old version until you approve this one.

Open the local site in the Browser pane (it is running at http://localhost:4321/en/).

## 1. Pages to look at (about 20 minutes)

| Page | What to look for |
|---|---|
| /en/compounds/tesamorelin/ | "Approved medicine?": *Only in the US* — Canada approved it but it is no longer sold; "Tested in people?": *Yes* |
| /en/compounds/semaglutide/ | Approval in all four countries; products per country; reporting routes |
| /en/compounds/bpc-157/ | "Not approved as a medicine in the US, the UK, Canada or Australia"; the country fold |
| /en/compounds/ | Groups by approval in the four countries |
| /en/safety/product-risk/ | The lab-report ladder ("What a lab report can and cannot tell you") |
| /en/legal/ | Country map; links to the US, UK, Canada, Australia and Ireland/New Zealand pages |
| /en/legal/ca/ and /en/legal/au/ | The two new country pages |
| /en/legal/ireland-and-new-zealand/ | The short notes page |
| /en/legal-routes/ | Treatment routes in the four countries |
| /en/safety/warning-signs/ and /en/safety/if-something-goes-wrong/ | Help per country (services named, no emergency numbers) |
| /en/about/ | Who the site is for, and the publisher line (Dutch law governs what the site may say) |
| /en/the-case-for-reform/ | **Your signed opinion** — see section 2 |

## 2. Your decisions

### 2.1 The case for reform (your signed opinion)
The six proposals are unchanged. What changed is the "something like it already exists" example for each, which used to
be Dutch:

| # | Proposal | Was (Dutch/EU example) | Now |
|---|---|---|---|
| 1 | Public, independent trials | EMA pilot for universities and non-profits | The UK's publicly funded RECOVERY trial (dexamethasone helped; hydroxychloroquine did not) |
| 2 | Testing services for peptides | Dutch drug-checking (DIMS, Trimbos) | Canberra's public drug-checking service and WEDINOS (Wales); still "report problems, never approval" |
| 3 | Side-effect reporting that welcomes every product | Lareb | Reporting in all four countries (MedWatch, Yellow Card, Canada Vigilance, TGA); "confidential" became "explaining what happens to the reporter's details" (confidentiality was not checked in the four countries) |
| 4 | Enforcement aimed at sellers and false claims | Dutch medicines law | Selling an unapproved medicine is against the law in all four countries; examples from the FDA, MHRA, Health Canada and the TGA |
| 5 | Guidance for doctors | First Dutch clinic for steroid users; Doping Authority | Alberta's college, the GMC, Ahpra |
| 6 | Faster conditional routes | EU conditional authorisation; Dutch compassionate use | FDA accelerated approval, UK conditional authorisation, Health Canada NOC/c, TGA provisional registration |

Also: a new intro sentence ("Our proposals are principles, not one country's law…").

Two wording points to confirm:
- Proposal 4 now says "We support the rules on selling." The earlier text also supported the import rules.
- One line now reads "Those are real limits of money and capacity."

You may also want a short "revised 26 October 2026" note on the page, because it is a signed opinion.

### 2.2 Smaller choices
- **UK product information (emc, medicines.org.uk):** it is the UK's standard source for medicine leaflets, run by
  Datapharm for the industry. It is not on the link allowlist, so UK labels now point to the MHRA's product pages instead.
  Allow emc? (Recommendation: yes; it sells nothing.)
- **News feeds from the MHRA, Health Canada and the TGA:** they exist, but their headlines sometimes name sellers.
  Recommendation: leave them out for now.

## 3. One small task for you (optional)
Four Canadian health-line pages block automated checks. Open them in a normal browser and tell me if they load:
Alberta Health Link, New Brunswick Tele-Care 811, PEI 811, Yukon 811 (links in `research/refocus/canada-legal.md` §14.1).
Until then the Canada help card names the national and provincial services that were checked.

## 4. For a lawyer and a doctor later (not blocking)
The pages state these as "unknown" or "our reading" until checked:
- **Canada:** the legal basis of Health Canada's "injectable peptides are generally prescription drugs"; personal import
  of an unlisted peptide such as BPC-157; whether the site's neutral wording satisfies Health Canada's 2023 advertising
  guidance.
- **Australia:** schedules that rest on group entries (tesamorelin, CJC-1295 with DAC, retatrutide); BPC-157 possession
  in NSW; the other states; whether neutral naming of Schedule 4 peptides counts as advertising.
- **US:** whether only receiving an unapproved peptide for own use breaks federal law (21 U.S.C. 331(c)); state law.
- **UK:** current Border Force practice on personal imports.
- **Medical:** whether fever after an injection belongs under "get help today" or "emergency"; the injection-safety
  sentence about injecting into a vein was left out because no source from the four countries was found.

Full list: `research/refocus-notes/legal-en-a.md` §9 and `research/refocus-notes/finish.md`.

## 5. Publishing (after your OK)
Build the English copy, copy it into the Lovable project, add permanent redirects from the removed pages
(/en/legal/nl/, /eu/, /be/, /de/) to /en/legal/, publish, and check the live site (including the cookie banner).
