/* Everything that names the exams this trainer studies for: the EPA Section
   608 technician certification (Core, Type I, Type II, Type III, Universal)
   and the Section 609 MVAC certification, the pass marks, the eCFR sources
   the questions cite, and the prose that mentions the programs. The engine
   under js/ reads only this file and data/questions.js, so a trainer for a
   different exam is built by replacing the data/ directory and the page
   shell (index.html, manifest.webmanifest, icons, CNAME); js/ carries no
   knowledge of any particular exam.
   Loads after data/questions.js and data/cfr-anchors.js and may read both. */

// Section numbers are exam topics, not chapters of one book: a topic can
// hold questions citing any of the three CFR sources, and `manual` says only
// where a citation points. Topics 1-11 are the Core exam, 12-13 Type I,
// 14-16 Type II, 17-19 Type III, and 20-22 the Section 609 MVAC program.
const CORE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const TYPE1 = [12, 13];
const TYPE2 = [14, 15, 16];
const TYPE3 = [17, 18, 19];
const MVAC = [20, 21, 22];

const BANK_SIZE = QUESTION_BANK.length;

const EXAM_CONFIG = {
  storageKey: 'epa-trainer-v1',      // localStorage; changing it orphans saved progress
  sessionKey: 'epa-trainer-session', // sessionStorage mirror of the active session
  exportPrefix: 'epa-progress',      // backup filename: <prefix>-YYYY-MM-DD.json
  repo: 'https://github.com/ullbergm/epa-trainer',
  // Appendix D to 40 CFR 82 subpart F sets the closed-book passing score at
  // 70% per section (18 of 25 in practice). The open-book formats — mail-in
  // Type I, and the common 609 home-study test — pass at 84%; that stricter
  // bar is noted in the prose rather than modeled here.
  passMark: 0.7,

  flatSections: true,
  sectionWord: 'topic',

  // The sources the questions cite. All three are the regulations themselves
  // on eCFR, which renders a subpart as one page with an anchor per section,
  // so a citation deep-links to the current text of the section it names.
  // General refrigeration and safety questions have no official manual to
  // cite and carry no citation, so citations stay optional.
  manuals: {
    cfr608: {
      title: '40 CFR Part 82, Subpart F — Recycling and Emissions Reduction (Section 608)',
      cite: '40 CFR',      // citations read "40 CFR § 82.156"
      short: 'Subpart F',
      url: 'https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-82/subpart-F',
      pages: CFR608_ANCHORS,
      web: true,
      citeByRef: true,
    },
    cfr609: {
      title: '40 CFR Part 82, Subpart B — Servicing of Motor Vehicle Air Conditioners (Section 609)',
      cite: '40 CFR',
      short: 'Subpart B',
      url: 'https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-82/subpart-B',
      pages: CFR609_ANCHORS,
      web: true,
      citeByRef: true,
    },
    aim: {
      title: '40 CFR Part 84, Subpart C — Management of Regulated Substances (AIM Act)',
      cite: '40 CFR',
      short: 'Part 84',
      url: 'https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-84/subpart-C',
      pages: AIM_ANCHORS,
      web: true,
      citeByRef: true,
    },
  },

  // Mock exams sized like the real sittings: every 608 certification test is
  // 25 questions per element, so a Type sitting is 50 (Core + the Type) and
  // Universal is 100. The 609 programs run about 25 questions.
  exams: [
    { key: 'core', name: '608 Core Element', sections: CORE, count: 25 },
    { key: 'type1', name: '608 Type I (Core + Small Appliances)', sections: [...CORE, ...TYPE1], count: 50 },
    { key: 'type2', name: '608 Type II (Core + High-Pressure)', sections: [...CORE, ...TYPE2], count: 50 },
    { key: 'type3', name: '608 Type III (Core + Low-Pressure)', sections: [...CORE, ...TYPE3], count: 50 },
    { key: 'universal', name: '608 Universal (all four elements)', sections: [...CORE, ...TYPE1, ...TYPE2, ...TYPE3], count: 100 },
    { key: 'mvac', name: 'Section 609 MVAC', sections: MVAC, count: 25 },
  ],

  // Certifications -> the topics that cover them. The Settings picker offers
  // these, grouped by testGroups.
  tests: [
    { key: 'core', group: 'g608', name: '608 Core', note: 'the 25-question regulatory element included in every Section 608 sitting', sections: CORE },
    { key: 'type1', group: 'g608', name: '608 Type I — Small Appliances', note: 'servicing factory-sealed appliances of 5 lbs or less; sat as Core + Type I', sections: [...CORE, ...TYPE1] },
    { key: 'type2', group: 'g608', name: '608 Type II — High-Pressure Appliances', note: 'the bulk of commercial AC and refrigeration; sat as Core + Type II', sections: [...CORE, ...TYPE2] },
    { key: 'type3', group: 'g608', name: '608 Type III — Low-Pressure Appliances', note: 'centrifugal chillers; sat as Core + Type III', sections: [...CORE, ...TYPE3] },
    { key: 'universal', group: 'g608', name: '608 Universal', note: 'all four elements in one 100-question sitting', sections: [...CORE, ...TYPE1, ...TYPE2, ...TYPE3] },
    { key: 'mvac', group: 'g609', name: '609 MVAC', note: 'motor vehicle air conditioning, from any EPA-approved program (MACS, ASE, ESCO)', sections: MVAC },
  ],
  testGroups: [
    ['g608', 'Section 608 — stationary refrigeration'],
    ['g609', 'Section 609 — motor vehicle A/C'],
  ],

  // The certifications these exams lead to, shown as a reference table in
  // About. EPA-approved certifying organizations issue the cards; this is a
  // summary, so `source` is linked next to it.
  licenses: {
    title: 'EPA refrigerant certifications',
    source: 'https://www.epa.gov/section608/section-608-technician-certification-requirements',
    sourceName: 'EPA Section 608 Technician Certification',
    intro: `Every Section 608 certification is earned by passing the 25-question Core
      element plus the 25-question element for each equipment type, at 70% per section,
      proctored and closed-book (the mail-in, open-book Type I format passes at 84%).
      Certification is issued by an EPA-approved organization and does not expire.`,
    groups: [
      {
        name: 'Section 608 — stationary equipment',
        items: [
          { code: 'I', name: 'Type I', who: 'servicing small appliances: factory-sealed units charged with 5 lbs or less (refrigerators, window units, vending machines)', exams: 'Core + Type I', term: 'no expiration' },
          { code: 'II', name: 'Type II', who: 'servicing medium-, high-, and very high-pressure appliances: split systems, rooftop units, supermarket racks', exams: 'Core + Type II', term: 'no expiration' },
          { code: 'III', name: 'Type III', who: 'servicing low-pressure appliances: centrifugal chillers running R-123, R-1233zd, and the like', exams: 'Core + Type III', term: 'no expiration' },
          { code: 'U', name: 'Universal', who: 'servicing any stationary appliance', exams: 'Core + Types I, II, and III (100 questions)', term: 'no expiration' },
        ],
      },
      {
        name: 'Section 609 — motor vehicles',
        items: [
          { code: '609', name: 'MVAC Technician', who: 'repairing or servicing motor vehicle air conditioning for payment; also one path to servicing MVAC-like off-road equipment', exams: 'an approved program’s test, commonly open-book at 84%', term: 'no expiration' },
        ],
      },
    ],
  },

  // Prose that names the exam, injected as HTML into the matching views.
  homeSubtitle: `${BANK_SIZE} questions for the EPA Section 608 refrigerant certification exams and the Section 609 MVAC certification`,
  disclaimerHTML: `Questions were written from the current federal regulations —
    <a href="https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-82/subpart-F"
       target="_blank" rel="noopener">40 CFR Part 82, Subpart F</a> (Section 608),
    <a href="https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-82/subpart-B"
       target="_blank" rel="noopener">Subpart B</a> (Section 609), and
    <a href="https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-84/subpart-C"
       target="_blank" rel="noopener">40 CFR Part 84</a> (the AIM Act rules) — and from
    EPA's program pages; accuracy is not guaranteed. Regulatory questions link to the
    section they came from, so verify anything important against the source: these rules
    are actively changing, and thresholds, dates, and exemptions move first. The actual
    certification exam questions are not public, and no claim is made that these match or
    resemble them. All progress is stored locally in your browser and never sent to a server.`,
  aboutIntroHTML: `<p>EPA Trainer is a free, open-source study tool for the EPA Section 608
    technician certification exams — Core, Type I, Type II, Type III, and so Universal —
    and the Section 609 MVAC certification. Its ${BANK_SIZE} questions were written from
    the regulations the exams test:
    <a href="https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-82/subpart-F"
       target="_blank" rel="noopener">40 CFR Part 82, Subpart F</a>, the stationary
    refrigerant-management rule behind Section 608;
    <a href="https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-82/subpart-B"
       target="_blank" rel="noopener">Subpart B</a>, the motor vehicle A/C rule behind
    Section 609; and
    <a href="https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-84/subpart-C"
       target="_blank" rel="noopener">40 CFR Part 84</a>, the AIM Act rules that now carry
    the HFC leak-repair, reclamation, and cylinder requirements. Regulatory questions cite
    the CFR section they came from, and the citation is a link that opens the current text
    of that section on eCFR.</p>
    <p>The general refrigeration, recovery, and safety material every certifying body
    tests — the physics of the vapor-compression cycle, recovery technique, cylinder
    handling — has no single official manual, so those questions carry no citation; they
    were written to the published exam topic outline in appendix D to Subpart F.</p>`,
  aboutCaveatHTML: `<p><strong>Refrigerant regulation is moving fast.</strong> The AIM Act
    phasedown, the 2024 refrigerant-management rule, and the 2026 revisions to the
    Technology Transitions program have changed thresholds, dates, and answers that older
    study materials still state with confidence — and some questions on the real exams may
    themselves lag the current text. This bank was written from the regulations as of
    August 2026 and takes the current text as correct; where an old rule is a classic exam
    point (the 50-pound ozone-era leak threshold, say) the question says which regime it
    belongs to.</p>
    <p>Questions were written from the sources by a language model and reviewed for
    accuracy, but mistakes are possible and accuracy is not guaranteed. A citation that no
    longer matches the linked section is a question to report. The actual exam questions
    are not public, and no claim is made that these match or resemble them. The real
    proctored exams pass at 70% per 25-question section; the open-book formats (mail-in
    Type I and most 609 programs) pass at 84%, so aim higher than the pass mark here.</p>`,
};
