/* Anchor maps for the eCFR sources the questions cite. eCFR renders a whole
   subpart as one page whose section headings carry element ids equal to the
   bare section number ("82.156"), and appendices ids in the long form below,
   so a citation deep-links as <subpart url>#<anchor>. A question's `page` is
   the key here; the value is the anchor on that source's page. Keys and the
   anchor inventory were verified against the live pages in August 2026. */

// 40 CFR Part 82, Subpart F — stationary refrigerant management (Section 608)
const CFR608_ANCHORS = {
  "82.150": "82.150",
  "82.152": "82.152",
  "82.154": "82.154",
  "82.155": "82.155",
  "82.156": "82.156",
  "82.157": "82.157",
  "82.158": "82.158",
  "82.161": "82.161",
  "82.164": "82.164",
  "82.166": "82.166",
  "app. D": "Appendix-D-to-Subpart-F-of-Part-82",
};

// 40 CFR Part 82, Subpart B — motor vehicle air conditioning (Section 609)
const CFR609_ANCHORS = {
  "82.30": "82.30",
  "82.32": "82.32",
  "82.34": "82.34",
  "82.36": "82.36",
  "82.40": "82.40",
  "82.42": "82.42",
};

// 40 CFR Part 84, Subpart C — AIM Act refrigerant management (ER&R rule)
const AIM_ANCHORS = {
  "84.104": "84.104",
  "84.106": "84.106",
  "84.108": "84.108",
  "84.112": "84.112",
  "84.116": "84.116",
};
