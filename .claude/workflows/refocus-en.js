export const meta = {
  name: 'refocus-en',
  description: 'English refocus on US/UK/Canada/Australia (+Ireland/NZ notes): merge the fact-checked research into the data, rewrite each content group, adversarially fact-check each group',
  whenToUse: 'After research/refocus/ is fact-checked and the per-locale jurisdiction data model is in place (research/refocus-spec/).',
  phases: [
    { title: 'Merge', detail: 'research/refocus → src/data (status rows, products, sources, jurisdictions)' },
    { title: 'Merge check', detail: 'independent check of the merged data' },
    { title: 'Write', detail: 'one writer per content group' },
    { title: 'Fact-check', detail: 'adversarial check per group' },
    { title: 'Sweep', detail: 'glossary, UI strings, photos; leftovers' },
  ],
}

const REPO = 'C:/dev/Peptides-explained'
const BRIEF = `${REPO}/research/refocus-spec/content-brief.md`

const PREAMBLE = `You are working on "Peptides Explained", an independent, non-commercial public-health reference on therapeutic peptides (live at https://peptidesexplained.net). Repo: ${REPO}. Today is 24 October 2026. Your training data ends around mid-2026, so every regulatory status, law and recent event MUST be looked up or taken from the fact-checked research files, never recalled.

THE ENGLISH REFOCUS (owner decision, 23 October 2026): the English site is for readers in the United States, the United Kingdom, Canada and Australia, with short notes for Ireland and New Zealand. All European framing (Netherlands, EU, Belgium, Germany) leaves the English site but is saved for the Dutch site. READ ${BRIEF} FIRST AND FOLLOW IT EXACTLY: audience, what leaves, what may stay (with the residue-ok marker), the residue grep, emergency/help rules, treatment-routes anchors, routes, words, the lab-report ladder, tesamorelin, "keep the science".

MACHINE: Windows. The Bash tool is Git Bash (POSIX syntax; cd ${REPO} && … works; curl is available); file tools take absolute paths. Write files as UTF-8 with LF line endings.

READ ALSO: ${REPO}/docs/CONTENT-GUIDE.md (the contract; where it still says Netherlands/EU, the content brief wins), ${REPO}/src/schemas/index.ts, ${REPO}/src/schemas/vocab.ts, ${REPO}/src/schemas/components.ts (allowed MDX components, incl. <JurisdictionCards which="full|notes|all" /> and <JurisdictionCard code="US" />), ${REPO}/src/data/sources/shared.yaml, and the fact-checked research in ${REPO}/research/refocus/ (canada-legal.md, australia-legal.md, ireland-nz.md, us-uk-routes.md, feeds-help-extras.md, status/*.yaml; each has an "## Fact-check (independent)" section — respect its corrections and UNRESOLVED notes: an unresolved point is stated as unknown or left out, never asserted). Style reference: ${REPO}/src/content/compounds/en/semaglutide.mdx and the current pages you own (keep their structure, depth and voice).

RESEARCH TOOLS (load with ToolSearch when needed): PubMed (mcp__plugin_bio-research_pubmed__*), ClinicalTrials.gov (mcp__plugin_bio-research_c-trials__*), WebSearch/WebFetch, curl. The built-in browser only in your OWN tab (tabs_create); never open PDF URLs in the browser (fetch PDFs with curl).

VERIFICATION IS MANDATORY: copy source metadata from the record, never from memory; every regulator/law URL must be fetched and say what you cite it for, and its host must be on ${REPO}/config/link-allowlist.json (official hosts may be added there with a one-line "why"). If you cannot verify something, leave it out or state it as unknown.

EDITORIAL: honest in both directions; cause and effect; species, n and design on every study claim; no dosing, protocols, stacks, cycles, reconstitution maths or seller help; British spelling without UK-only words (see the brief). Safety and legal pages at CEFR B1: short sentences, common words, terms defined on first use. Keep the page structure (Lead question + one-sentence answer, one figure per section, ≤ ~80 visible words, depth in <InDetail> folds; stop-now content never folded). Summary items ≤ 18 words, Flesch ≥ 60 (validator-enforced). PURPOSE: inform, do not discourage; never assume where a product came from ("if your product did not come from a pharmacy").

FILE OWNERSHIP: write ONLY the files listed in your assignment, plus: your own manifest research/for-nl-site/MANIFEST-<group>.md (what you cut, per the brief), your research notes research/refocus-notes/<group>.md, and — adding entries with the Edit tool, never rewriting — src/data/media.yaml, src/data/heroes.yaml, src/i18n/en/media.json, config/link-allowlist.json. Never edit src/data/sources/refocus-*.yaml (merged research; reuse its ids); put any NEW source in your group's own file src/data/sources/en-<group>.yaml (grep all source files first and reuse an existing id for the same document).

VALIDATE: cd ${REPO} && npx tsx scripts/validate-content.ts --only <part-of-your-paths> until 0 errors in your files; read every warning (fix it or explain it in your notes). Then run the residue grep from the brief on your files: 0 hits except allowed, marked ones. Ignore errors in files you do not own.

FACT-CHECK HANDOFF: write research/refocus-notes/<group>.md with: what you changed per page, every new fact with its source id, every removed section (also in the manifest), the no-loss check (cite ids before vs after, from git show nl-source-2026-10-23:<path>), open questions for the medical/legal reviewer.`

const WRITE_SCHEMA = {
  type: 'object',
  properties: {
    files: { type: 'array', items: { type: 'string' } },
    pages_changed: { type: 'number' },
    sources_added: { type: 'number' },
    removed_sections: { type: 'number' },
    cites_dropped_not_european: { type: 'array', items: { type: 'string' }, description: 'must be empty, or each entry explains why' },
    unverified_or_dropped: { type: 'array', items: { type: 'string' } },
    open_questions: { type: 'array', items: { type: 'string' } },
    validator_errors_remaining: { type: 'number' },
    residue_hits_remaining: { type: 'number' },
    notes: { type: 'string' },
  },
  required: ['files', 'pages_changed', 'sources_added', 'removed_sections', 'cites_dropped_not_european', 'unverified_or_dropped', 'open_questions', 'validator_errors_remaining', 'residue_hits_remaining', 'notes'],
}
const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    sources_checked: { type: 'number' },
    sources_wrong: { type: 'array', items: { type: 'string' } },
    claims_checked: { type: 'number' },
    claims_fixed: { type: 'array', items: { type: 'string' } },
    science_lost_restored: { type: 'array', items: { type: 'string' } },
    residue_fixed: { type: 'array', items: { type: 'string' } },
    guardrail_fixes: { type: 'array', items: { type: 'string' } },
    remaining_concerns: { type: 'array', items: { type: 'string' } },
    validator_errors_remaining: { type: 'number' },
    verdict: { type: 'string', enum: ['publishable', 'publishable-after-fixes-made', 'needs-rework'] },
  },
  required: ['sources_checked', 'sources_wrong', 'claims_checked', 'claims_fixed', 'science_lost_restored', 'residue_fixed', 'guardrail_fixes', 'remaining_concerns', 'validator_errors_remaining', 'verdict'],
}

const P = (...xs) => xs.map((x) => `src/content/pages/en/${x}.mdx`)
const C = (...xs) => xs.flatMap((x) => [`src/content/compounds/en/${x}.mdx`, `src/data/compounds/${x}.yaml`])

const compounds = (key, slugs, glossaries, extra = '') => ({
  key,
  files: [...C(...slugs), ...glossaries.map((g) => `src/i18n/en/glossary/${g}.json`), `src/data/sources/en-${key}.yaml`],
  brief: `ASSIGNMENT ${key}: the compound pages ${slugs.join(', ')}. For each page:
- frontmatter: regulatory_notes only for US, UK, CA, AU and WADA (move the NL/EU/DE/BE notes to your manifest with their text); description, summary (summary[0] is also the compounds-index card text), lede and glance.* rewritten without EU framing (the At-a-glance approval tile and the fact sheet's "Approved in" row are derived from data — keep the text consistent with them). glance.facts rows that name the EU (e.g. ghk-cu "Allowed in the EU", nad-precursors "EU food status", melanotan-ii "Afamelanotide (Scenesse, EU)") become four-country or neutral; drop any glance.facts row that duplicates the derived "Approved in" row (thymosin-alpha-1).
- the status comparison ("Netherlands and the EU vs United States" or similar) becomes one row per country (US, UK, Canada, Australia), each sourced from the data rows / research/refocus/status/<slug>.yaml;
- folds like "The European Union, the Netherlands, Germany, Belgium and the UK" become "The UK, Canada and Australia" (US stays where it is), using research/refocus/{canada-legal,australia-legal,us-uk-routes}.md and the status files (import rules, scheduling such as the Australian Poisons Standard, enforcement/warnings specific to this compound);
- the harm-reduction legal paragraph becomes country-neutral and links the treatment-route anchors on /en/legal-routes/ (#prescription, #off-label, #us-compounding, #uk-specials, #canada-special-access, #australia-sas, #personal-import, #trials);
- "report side effects" names MedWatch (US), Yellow Card (UK), Canada Vigilance (Canada) and the TGA (Australia), linked;
- PCAC/compounding framing (CONTENT-GUIDE §1 element 5) now reads: not an approved medicine in the US, the UK, Canada or Australia; a US compounding decision changes nothing outside the US;
- EMA assessment evidence may stay as evidence with the residue-ok marker; everything else European goes (manifest).
- Data files: the merged rows are already in src/data/compounds/<slug>.yaml; fix them only if you find an error (say so in notes). Never delete EU/NL/DE/BE rows.
${extra}`,
})

const ASSIGNMENTS = [
  {
    key: 'legal-en-a',
    files: [...P('legal/index', 'legal/us', 'legal/uk', 'legal/ca', 'legal/au', 'legal/ireland-and-new-zealand', 'legal/nl', 'legal/eu', 'legal/be', 'legal/de'), 'src/i18n/en/glossary/legal-a.json', 'src/i18n/en/glossary/legal-en.json', 'src/data/sources/en-legal-en-a.yaml'],
    brief: `ASSIGNMENT legal-en-a: the legal section's country pages.
- NEW legal/ca.mdx ("Peptides and the law in Canada") and legal/au.mdx ("… in Australia"), each as deep and as structured as legal/us.mdx (frontmatter jurisdiction: CA / AU; JurisdictionCard; sources from research/refocus/canada-legal.md and australia-legal.md). Cover: what the law is, who enforces it, what happens to a personal import, treatment routes (link /en/legal-routes/#canada-special-access or #australia-sas), advertising, enforcement examples, reporting side effects, sport. B1.
- NEW legal/ireland-and-new-zealand.mdx: short notes page (regulator, the one-sentence EU note for Ireland, key law in one paragraph each, personal import, reporting, help services named and linked, sport) from research/refocus/ireland-nz.md; <JurisdictionCards which="notes" />.
- legal/index.mdx: a country map for the US, UK, Canada and Australia (+ the notes page), <JurisdictionCards which="full" />, no NL/EU contacts.
- legal/us.mdx and legal/uk.mdx: remove EU/NL comparisons ("changes nothing in the Netherlands" etc.), keep everything else; check facts against research/refocus/us-uk-routes.md.
- legal/nl.mdx, eu.mdx, be.mdx, de.mdx: delete them (git rm) — they are in the snapshot; add them to your manifest with their new home on the Dutch site. Fix every inbound link you own; list inbound links in files you do not own in your notes (another group fixes them; the redirect for the live URLs is handled separately).
- Glossary: move NL/EU/BE/DE law terms out of legal-a.json (manifest), add Canadian/Australian/Irish/NZ legal terms (Health Canada, DIN, NOC, Food and Drugs Act, Prescription Drug List, TGA, ARTG, Poisons Standard, Schedule 4, Therapeutic Goods Act, HPRA, Medsafe, section 29 …) to a new legal-en.json.
- Page photos for the three new pages (open licence, MEDIA-GUIDE; use research/refocus/feeds-help-extras.md photo candidates).`,
  },
  {
    key: 'legal-en-b',
    files: [...P('legal-routes', 'legal/research-use-only', 'legal/sport-and-doping', 'legal/whats-changing'), 'src/data/tracker.yaml', 'src/i18n/en/tracker.json', 'src/i18n/en/glossary/legal-b.json', 'src/data/sources/en-legal-en-b.yaml'],
    brief: `ASSIGNMENT legal-en-b:
- legal-routes.mdx: rewrite as "Legal routes to treatment" in the US, the UK, Canada and Australia, with sections carrying EXACTLY these ids (use explicit heading ids or anchors): #prescription, #off-label, #us-compounding, #uk-specials, #canada-special-access, #australia-sas, #personal-import, #trials. Sources: research/refocus/us-uk-routes.md, canada-legal.md, australia-legal.md. The Dutch routes go to the manifest.
- legal/research-use-only.mdx: the comparison table becomes US / UK / Canada / Australia; remove NL/BE.
- legal/sport-and-doping.mdx: national anti-doping bodies USADA, UKAD, CCES, Sport Integrity Australia (+ Sport Ireland and Drug Free Sport NZ as notes); "who is tested" and "where to ask" for these countries; remove Dopingautoriteit/NL/BE.
- legal/whats-changing.mdx + tracker.yaml/tracker.json: open changes for the US, UK, Canada and Australia (research/refocus/feeds-help-extras.md tracker candidates, verified); EU/NL items stay in the data with their jurisdiction tags (they are hidden on English) — do not delete them; add new CA/AU/UK items with sources.
- legal-b.json glossary: move NL/EU terms to the manifest; add terms you introduce.
- Fix the headings that contain commerce words (e.g. "Is it legal for me to buy…" → a question without the word "buy").`,
  },
  {
    key: 'safety-en-a',
    files: [...P('safety/if-something-goes-wrong', 'safety/warning-signs', 'safety/index', 'safety/sharps-disposal'), 'src/i18n/en/warning-signs.json', 'src/i18n/en/glossary/safety-a.json', 'src/data/sources/en-safety-en-a.yaml'],
    brief: `ASSIGNMENT safety-en-a:
- safety/if-something-goes-wrong.mdx: rewrite country-neutral ("written for the Netherlands" goes): what to do now, then per-country help and reporting (cards for the US, UK, Canada, Australia; notes for Ireland and New Zealand), services named and linked, never an emergency number (call your local emergency number).
- safety/warning-signs.mdx + warning-signs.json: help levels become (1) emergency: call your local emergency number; (2) medical help today: your doctor, an urgent-care service or your country's health advice line (name the services per country in a compact table or JurisdictionCards); (3) stop and contact your doctor soon. The reporting table lists US, UK, Canada, Australia. Keep every warning sign and stop-now block exactly (never fold them).
- safety/index.mdx: remove "How Dutch harm-reduction services work" (manifest); add a country-neutral paragraph on finding harm-reduction/drug-checking services, with one official link per country if the research has one.
- safety/sharps-disposal.mdx: sections for the US, UK, Canada and Australia (official pages from research/refocus/feeds-help-extras.md), needle-stick steps country-neutral (see a doctor or emergency department promptly), the Dutch section to the manifest.
- Photos: replace the Dutch ambulance and huisartsenpost page photos for English (heroes.yaml supports per-locale values: keep the Dutch photo for nl, set a neutral photo as default/en).`,
  },
  {
    key: 'safety-en-b',
    files: [...P('safety/product-risk', 'safety/monitoring', 'safety/before-you-consider', 'safety/injection-safety', 'safety/sterile-technique'), 'src/data/product-check.yaml', 'src/i18n/en/product-check.json', 'src/i18n/en/glossary/safety-b.json', 'src/data/sources/en-safety-en-b.yaml'],
    brief: `ASSIGNMENT safety-en-b:
- safety/product-risk.mdx: add the LAB-REPORT LADDER exactly as specified in the brief (a figure/table "What a lab report can and cannot tell you", built with existing components such as <Diagram> or <Compare>, every rung with its "stays unknown" list, the closing pharmacy-supply-chain line, the "we know what's in the vial and that it is clean" answer). The current column "what EU guidance asks" becomes "what a medicine maker must test" (FDA 21 CFR 211, USP <71>/<85>, ICH). Remove Dutch case/IGJ framing (manifest) but keep the science.
- safety/monitoring.mdx: "Getting checks in the Netherlands" becomes getting checks in the US, UK, Canada and Australia (country-neutral: ask your doctor; how to ask; what each check costs/coverage only where sourced).
- safety/before-you-consider.mdx: fix the tesamorelin tumour row and the Claim near it per the brief (NCT01579695: check research/refocus/status/tesamorelin.yaml for the registry's primary outcome); replace "the EU label" defaults with the FDA/UK labels; remove Dutch medical-secrecy text (manifest) and add a country-neutral confidentiality sentence.
- safety/injection-safety.mdx, sterile-technique.mdx: remove Dutch GP/insulin/harm-reduction references (manifest); keep all technique content.
- product-check.yaml/.json: the doctor and label items lose their NL/EU wording and Dutch sources for English (the schema may support per-locale sources; if not, use country-neutral sources and record the Dutch ones in the manifest); align with the ladder.`,
  },
  {
    key: 'guides-en',
    files: [...P('start-here', 'talking-to-your-doctor', 'index', 'compounds/index', 'the-case-for-reform'), 'src/i18n/en/glossary/guides.json', 'src/data/sources/en-guides-en.yaml'],
    brief: `ASSIGNMENT guides-en:
- start-here.mdx: §3 "The law in plain words" becomes the four-country version (one short answer per country + link to each legal page); the Wegovy insurance FAQ goes (manifest) or becomes a country-neutral sourced line; the certificate checklist points to the lab-report ladder on /en/safety/product-risk/.
- talking-to-your-doctor.mdx: Dutch patient-rights law goes (manifest); write rights and confidentiality per country (US: HIPAA privacy rule basics; UK: GMC confidentiality guidance and NHS; Canada: provincial health-privacy laws and the CMA/college codes, in general terms; Australia: Privacy Act 1988 / Australian Privacy Principles and AHPRA codes) — only what you can source; how to ask for checks and prescriptions via the legal routes page.
- index.mdx (home): the comparison table and any "Authorised in the EU" framing become four-country; keep the page structure.
- compounds/index.mdx: "Can a Dutch doctor prescribe it?" and "a Dutch doctor cannot simply prescribe them" become country-neutral (the CompoundIndex component already groups by approval in the four countries).
- the-case-for-reform.mdx: this is the OWNER'S SIGNED OPINION. Rewrite its proposals country-neutral (principles that apply in the US, UK, Canada and Australia, with sourced examples from those countries), keep the owner's voice and every sourced fact that is not Dutch framing; move the Dutch proposals (Lareb, Zorginstituut, Dutch drug-checking, Dutch law) to the manifest. Mark the page for owner approval in your notes (list each proposal before → after). Replace the Tweede Kamer photo for English (per-locale hero).
- guides.json glossary: move the ~20 Dutch terms (CBG, IGJ, Lareb, Zorginstituut, Dopingautoriteit, WGBO, KNMG, Wet BIG, NHG …) to the manifest; rewrite generic terms (prescription-only medicine, off-label, named-patient route, informed consent, medical file, second opinion, medicines regulator) country-neutrally.`,
  },
  {
    key: 'about-history-en',
    files: [...P('about/index', 'about/editorial-policy', 'about/funding', 'about/corrections', 'history/how-we-got-here', 'history/timeline', 'history/index', 'basics/index', 'basics/what-is-a-peptide', 'basics/how-signalling-works', 'basics/pharmacokinetics', 'basics/why-not-a-pill', 'evidence/index', 'evidence/how-to-read-a-study', 'evidence/the-translation-gap', 'evidence/evidence-grading', 'evidence/conflicts-of-interest'), 'src/data/timeline.yaml', 'src/i18n/en/timeline.json', 'src/data/corrections.yaml', 'src/i18n/en/corrections.json', 'src/i18n/en/glossary/history.json', 'src/i18n/en/glossary/basics.json', 'src/i18n/en/glossary/evidence.json', 'src/data/sources/en-about-history-en.yaml'],
    brief: `ASSIGNMENT about-history-en:
- about/index.mdx: the audience statement becomes "for readers in the United States, the United Kingdom, Canada and Australia, with notes for Ireland and New Zealand"; add the publisher line (brief, "What may stay" 1).
- about/editorial-policy.mdx: the medical reviewer is "a registered physician (their register named, e.g. a state medical board licence, the GMC register, a provincial college, AHPRA)", not BIG-only; keep Dutch advertising law only as the publisher's law.
- about/funding.mdx: keep the Dutch advertising and cookie law as the PUBLISHER's law (the privacy section was just rewritten for the host's statistics consent banner — keep it accurate; remove "no licence in the EU" style reader framing).
- about/corrections.mdx + corrections.yaml/json: add one "clarification" entry dated 2026-10-24: the tesamorelin approval answer led with the EU and hid the US approval; it now shows each country, and Canada's 2014–2022 approval is added. (Routes: compounds/tesamorelin; locales [en].) Also a short "minor" or "clarification" entry is NOT needed for the refocus itself.
- history/how-we-got-here.mdx: the Dutch law folds, the NL timeline strip and the "Named-patient use (NL)" column go (manifest); "Europe's answer" becomes the UK, Canada and Australia responses (research/refocus/feeds-help-extras.md timeline candidates, verified); thalidomide and US history stay.
- history/timeline.mdx + timeline.yaml/json: events are tagged by jurisdiction (NL/EU events are hidden on English automatically); ADD the verified UK, Canada and Australia milestones (with jurisdictions tags) so the English timeline is balanced. Never delete NL/EU events.
- basics/* and evidence/*: light pass — "the EU label"/EMA as default reference becomes the FDA/UK label (EMA kept only as evidence with the marker); "Authorised in the EU?" rows become four-country; keep all science.
- Glossaries history/basics/evidence: Dutch terms to the manifest.`,
  },
  compounds('compounds-a', ['semaglutide', 'tirzepatide', 'retatrutide'], ['semaglutide', 'tirzepatide', 'retatrutide'],
    `- Semaglutide and tirzepatide: replace the Dutch insurance/reimbursement text (Bijlage 2, Zorginstituut, €) with a brief, sourced "cost and coverage" note per country (US, UK, Canada, Australia) from research/refocus/status/{semaglutide,tirzepatide}.yaml; the "legal route in the Netherlands" sections go (manifest); "Report side effects to Lareb" becomes the four reporting routes. The products tables come from data (US/UK/CA/AU products were merged).`),
  compounds('compounds-b', ['tesamorelin', 'cjc-1295', 'ipamorelin', 'hexarelin'], ['tesamorelin', 'cjc-1295', 'ipamorelin'],
    `- Tesamorelin: state the Canada approval history (approved 29 Apr 2014; sold from 2015; no longer sold — use exactly what research/refocus/status/tesamorelin.yaml verified, incl. its UNRESOLVED note on "business reasons") and that it is not approved in the UK or Australia; keep the EMA committee's doubts as evidence (marker); the artsenverklaring/IGJ route goes (manifest). Make sure no sentence could suggest tesamorelin was not tested in people.`),
  compounds('compounds-c', ['bpc-157', 'tb-500', 'kpv'], ['bpc-157', 'tb-500', 'kpv']),
  compounds('compounds-d', ['ghk-cu', 'melanotan-ii', 'pt-141'], ['melanotan-ii', 'pt-141'],
    `- PT-141: "A woman in the Netherlands…" example becomes country-neutral; the artsenverklaring/IGJ route goes (manifest). Melanotan II: TGA/Health Canada warnings from the research. GHK-Cu: cosmetic vs medicine per country.`),
  compounds('compounds-e', ['mots-c', 'epitalon', 'semax', 'selank', 'thymosin-alpha-1', 'aod-9604', 'ss-31', 'nad-precursors'], ['stubs-a', 'stubs-b'],
    `- These are shorter pages; keep their length. Thymosin alpha-1: description/summary/lede say "not in the Netherlands" — make them four-country; AOD-9604: Australian history from research. SS-31 (elamipretide): US status per research.`),
]

const SWEEP = {
  key: 'glossary-ui-media-en',
  files: ['src/i18n/en/glossary/shared.json', 'src/i18n/en/glossary/final-qa.json', 'src/i18n/en/media.json', 'src/data/heroes.yaml', 'src/i18n/en/common.json', 'src/i18n/en/pages.json', 'src/i18n/en/compound.json', 'src/i18n/en/vocab.json', 'src/i18n/en/beginner.json', 'src/i18n/en/organ-cards.json', 'src/i18n/en/explainers.json', 'src/i18n/en/infographics.json', 'src/data/sources/en-glossary-ui-media-en.yaml'],
  brief: `ASSIGNMENT glossary-ui-media-en (runs AFTER all other groups):
- Run the brief's residue grep over ALL of src/content/**/en/**, src/i18n/en/** and the English-visible data notes. Fix every hit in the files you own; for hits in files owned by other groups, list them precisely in your notes (file:line, text) — do not edit those files.
- Glossaries you own (shared.json, final-qa.json): Dutch terms (RIVM, Thuisarts, …) to the manifest; rewrite generic ones country-neutrally.
- media.json captions/alt text for the Dutch photos: keep them (they are used on nl) but make sure no English page still shows a Dutch photo (heroes.yaml per-locale values: a neutral open-licensed default/en photo for every route that had a Dutch one; the Dutch photo stays for nl). Check the built English pages for photos whose caption names Dutch places.
- UI strings (common.json footer etc., pages.json, compound.json, vocab.json, beginner.json, organ-cards.json, explainers.json, infographics.json): remove any remaining NL/EU wording for English (archive old values in research/for-nl-site/i18n-replaced-en.json).
- Build and check: npm run build; grep dist/en for the residue patterns and report what remains (file, context).`,
}

// A first run (24 Oct) was cut off by a usage limit after the merge: writers may find their own half-finished files.
const RESUMED = `\n\nINTERRUPTED RUN: an earlier run of this assignment was cut off part-way. Run git status and git diff on the files you own (and git status for new files such as new pages, your sources file, manifest and notes): what is there is YOUR OWN unverified draft. Review it against this brief, keep what is right, fix and finish the rest; do not start over unless it is unusable. The data merge (src/data/compounds, src/data/sources/refocus-*.yaml, jurisdictions.yaml) is finished and checked — see research/refocus-notes/merge.md, including its legal-review questions and the UI-string note on schedules. A stray file c.json in the repo root is a leftover download: delete it if you are the sweep group.`
const runGroup = (a, phaseW, phaseV) =>
  agent(`${PREAMBLE}\n\n${a.brief}\n\nFILES YOU OWN: ${a.files.join(', ')}${RESUMED}`, { label: `write:${a.key}`, phase: phaseW, schema: WRITE_SCHEMA })
    .then((w) => agent(`${PREAMBLE}\n\nYou are the ADVERSARIAL FACT-CHECKER for group "${a.key}". The writer's brief was:\n${a.brief}\nFILES: ${a.files.join(', ')}\nWriter's report: ${JSON.stringify(w)}\n\nAssume errors exist. (1) Every new or changed fact: open its cited source and confirm it says exactly that (dates, numbers, section numbers, names); every not-authorised claim must match research/refocus status files and their fact-check notes. (2) No science lost: for each page, compare <Cite> ids, <Claim>s, studies and numbers with git show nl-source-2026-10-23:<path>; every removed one must be European framing listed in the manifest — otherwise restore it. (3) Residue: run the brief's grep on the group's files; fix unmarked hits; check that residue-ok markers are only on genuine EMA/regulator evidence. (4) Guardrails: no doses, no seller help, no emergency numbers, no commerce words in headings/labels, B1 on safety/legal pages, the lab-report ladder rules. (5) Links: only routes in the brief; legal-routes anchors exist. (6) npx tsx scripts/validate-content.ts --only <paths>: 0 errors. Fix everything IN PLACE and append your log to research/refocus-notes/${a.key}.md.`,
      { label: `check:${a.key}`, phase: phaseV, schema: VERIFY_SCHEMA }).then((v) => ({ key: a.key, write: w, verify: v })))

// ---- 1. Merge the fact-checked research into the data (one agent), then an independent check.
phase('Merge')
const MERGE_FILES = 'src/data/compounds/*.yaml (regulatory rows, schedules, authorised_products only), src/data/sources/refocus-*.yaml (new files), src/data/jurisdictions.yaml, src/data/feeds.yaml, config/link-allowlist.json, scripts/validate-content.ts (only the STRICT_LOCALE_ROWS constant)'
const merge = await agent(`${PREAMBLE}

ASSIGNMENT merge: move the FACT-CHECKED research into the site data. Files you own: ${MERGE_FILES}.
1. Sources: for each research/refocus/sources/<name>.yaml create src/data/sources/refocus-<name>.yaml with the same entries (drop any whose id or DOI/URL already exists in src/data/sources — use the existing id and rewrite references in the status files you merge); fix format to pass the validator; add official hosts to config/link-allowlist.json with a one-line "why" (official regulators, legislation sites, health services only).
2. Status: for each research/refocus/status/<slug>.yaml, add its rows (CA, AU, and UK where missing) to src/data/compounds/<slug>.yaml (as_of as recorded), its schedule entries (schedule: {code, note, sources}), and its products (authorised_products with marketed_until where set). Respect each file's fact-check section: a corrected value wins; an UNRESOLVED status is merged as the most conservative verified status with a note in research/refocus-notes/merge.md. Never touch EU/NL/DE/BE rows.
3. jurisdictions.yaml: add CA, AU, IE, NZ entries (regulator, reporting route with official URL, anti-doping body, medicines law, emergency numbers, help services by kind/name/url) from canada-legal.md, australia-legal.md, ireland-nz.md and feeds-help-extras.md; update US and UK help services likewise.
4. feeds.yaml: do NOT add new feeds in this round (regulator headlines often name sellers; follow-up decision). Leave a note in merge.md with the confirmed feed URLs for later.
5. When every compound has US, UK, CA, AU and WADA rows and every authorised visible row has a product, set STRICT_LOCALE_ROWS = true in scripts/validate-content.ts.
EDITORIAL DECISIONS (lead, 24 Oct) — apply them:
- Never register a source whose title, URL or required citation names a seller, clinic, compounding pharmacy or other business selling peptides (e.g. Health Canada injunction statements or recall pages naming a business, TGA releases naming a company). Use a neutral official page instead (a database search page, a policy page, the regulator's general advisory), or leave the fact out.
- URLs containing commerce tokens (buy, buying, order, price(s), sale, shop …) fail check-no-commerce: use the regulator's neutral URL (many redirect) or drop the source. check-no-commerce also scans URLs written inside notes — keep notes free of non-allowlisted hosts or add those official hosts to the allowlist.
- Schedules (schedule field): only where the instrument NAMES the substance explicitly. Where coverage rests on our reading of a group entry or a CAS mismatch (Australian GHRH group entry for tesamorelin/CJC-1295, Customs Sch 7A items, COPPER COMPOUNDS for GHK-Cu, "aphrodisiacs"), add no schedule field; put the point in merge.md as a legal-review question.
- Tesamorelin CA row: status discontinued, authorised_since 2014-04-29, since 2022-09-30 (end of marketing of the only marketed DIN); product marketed_until 2022-09-30; note that the never-marketed 2 mg DIN was cancelled 2023-07-13. Do not state "business reasons" (unverified); "the manufacturer stopped selling it" is verified.
- Health Canada databases (DPD/NOC/LNHPD) were down during the checks: try them once more now; where a not-found still rests only on the first run, keep the row (as_of 2026-10-23) and record it in merge.md for a re-check before publishing.
- NAD+ precursors: rows stay not-authorised in the drug sense (the page explains Canadian NHP licences and Australian AUST L listings).
6. npm run validate (0 errors) and npm run build must pass. Write research/refocus-notes/merge.md: what was merged per compound, every conflict and how it was resolved.`,
  { label: 'merge:data', phase: 'Merge', schema: WRITE_SCHEMA })

phase('Merge check')
const mergeCheck = await agent(`${PREAMBLE}

You are the INDEPENDENT CHECKER of the data merge. Merge report: ${JSON.stringify(merge)}
For every compound: compare its new CA/AU/UK rows, schedules and products in src/data/compounds/<slug>.yaml with research/refocus/status/<slug>.yaml (including its fact-check section) — statuses, dates, source ids, product label URLs (fetch each label URL: it must be the official product information). Check jurisdictions.yaml CA/AU/IE/NZ entries against the research and fetch every URL. Check source files for duplicates and format. Check the built English pages for tesamorelin, semaglutide, tirzepatide, pt-141, ss-31, thymosin-alpha-1, bpc-157 (tile, fact sheet, badge, status table, products). Fix errors IN PLACE (same files) and append your log to research/refocus-notes/merge.md. npm run validate must end with 0 errors.`,
  { label: 'check:merge', phase: 'Merge check', schema: VERIFY_SCHEMA })

// ---- 2. Content groups in parallel, each write → adversarial fact-check; the checks/docs code job alongside.
const CODE_SCHEMA = {
  type: 'object',
  properties: {
    summary: { type: 'string' },
    files_changed: { type: 'array', items: { type: 'string' } },
    checks: { type: 'string', description: 'validate/build/check results' },
    open_issues: { type: 'array', items: { type: 'string' } },
  },
  required: ['summary', 'files_changed', 'checks', 'open_issues'],
}
const CODE_BRIEF = `ASSIGNMENT checks-docs-en (code and docs; other agents are rewriting src/content and src/i18n at the same time — do NOT edit those; you own scripts/**, config/locale-residue.json (new), package.json, docs/CONTENT-GUIDE.md, README.md):
1. Residue check: new scripts/lib/residue.ts + config/locale-residue.json + scripts/check-locale-residue.ts + "check:residue" in package.json (and in "check"). Patterns per locale (for en): error = Dutch/Belgian/German terms and EU reader framing (see the grep list in ${BRIEF}); warn = EU/EMA/EPAR/CHMP/Europe. Inline marker {/* residue-ok: … */} on the preceding line exempts warn/frame patterns only. allowFiles: about/index, about/editorial-policy, about/funding (publisher line). It scans English MDX (body + frontmatter), English i18n JSON (incl. glossary and media captions) and visible data notes; plus a dist mode (built HTML). In validate-content.ts run it as WARNINGS behind const STRICT_RESIDUE = false (to be flipped after the content rewrite).
2. Emergency numbers: generalise the English 112 rule to the numbers in jurisdictions.yaml emergency arrays for the locale's full+notes countries plus 112 (911, 999, 000, 111, 112), controlled by locales.json printsEmergencyNumbers; each number with lookarounds so counts and money ("1,000", "10 000", "£1000", "111 participants") do not match; also "triple zero"; keep the existing "count, not a phone number" heuristics; allow service names that contain a number when written as the service name ("NHS 111"). Test against the whole English corpus before enabling; report any hit.
3. Commerce words in MDX headings (##, ###), <Lead question>, <InDetail title> and figure titles → validator errors; check-no-commerce.ts also checks h1-h6 and every [aria-label] in dist. List current offenders (other groups fix the text).
4. New guardrail warnings in validate-content.ts: "reputable", "trusted (lab|source|seller)", "legit", "third-party tested", "uses it (himself|themselves)", and "vendor" anywhere in prose.
5. check-html.ts: cross-page anchors /en/sources/#source-* and #image-* must exist.
6. Docs: docs/CONTENT-GUIDE.md — §1 (Dutch law is the PUBLISHER's law; readers' countries have similar advertising rules; PCAC element 5 now "not an approved medicine in the US, the UK, Canada or Australia … changes nothing outside the US"), a new §1b "Audience and jurisdictions" (full/notes sets from config/locales.json, allowed EU evidence + marker, the residue check), §1a the lab-report ladder rule (from ${BRIEF}), the emergency-number rule for English, §4/§5.1/§5.2/§5.4/§9/§10/§12 updates for jurisdictions, discontinued, derived approval, new components; README.md — state line, "What this site is" (audience + publisher), how to add a compound (rows from locales), how to add a locale (jurisdictions.full/notes; printsEmergencyNumbers), commands (check:residue), project structure (research/for-nl-site/), Deployment (residue check; redirects for removed /en/legal/{nl,eu,be,de}/ handled in the Lovable app's server.ts).
Run npm run validate (0 errors), npm run build and npm run check at the end (residue may report warnings while content is mid-rewrite; that is expected).`
const codeJob = () => agent(`${PREAMBLE}\n\n${CODE_BRIEF}${RESUMED}`, { label: 'code:checks-docs-en', phase: 'Write', schema: CODE_SCHEMA })
  .then((c) => agent(`${PREAMBLE}\n\nYou are the INDEPENDENT CODE REVIEWER of this change:\n${CODE_BRIEF}\nImplementer report: ${JSON.stringify(c)}\nCheck each item with evidence (run the scripts, try false-positive inputs for the emergency regex: "1,000 people", "10 000", "£1000", "111 participants", "Call 911", "dial 000", "triple zero"; try residue on a sample text with and without the marker). Fix real problems IN PLACE in the same files and report.`,
    { label: 'review:checks-docs-en', phase: 'Fact-check', schema: CODE_SCHEMA }).then((r) => ({ key: 'checks-docs-en', impl: c, review: r })))

const [groups, code] = await Promise.all([
  pipeline(ASSIGNMENTS, (a) => runGroup(a, 'Write', 'Fact-check')),
  codeJob(),
])

// ---- 3. The sweep runs last.
phase('Sweep')
const sweep = await runGroup(SWEEP, 'Sweep', 'Sweep')

return { merge, mergeCheck, groups, code, sweep }
