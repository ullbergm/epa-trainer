/* Question bank for the EPA Section 608 technician certification exams
   (Core, Type I, Type II, Type III, and so Universal) and the Section 609
   MVAC certification. Written from free, citable sources: the regulations
   themselves — 40 CFR Part 82 Subpart F (stationary refrigerant management),
   Subpart B (motor vehicle air conditioning), and 40 CFR Part 84 (the AIM
   Act HFC rules) on eCFR — and EPA's own program pages. The general
   refrigeration, recovery, and safety material every certifying body tests
   has no single official manual, so those questions carry no citation; the
   regulatory ones cite the CFR section they came from, and the citation is
   a link that opens eCFR at that section.

   Sections are exam topics rather than chapters of one book
   (EXAM_CONFIG.flatSections): 1-11 are the Core exam, 12-13 Type I small
   appliances, 14-16 Type II high-pressure, 17-19 Type III low-pressure, and
   20-22 the Section 609 MVAC program. A question's `manual` field says only
   where its citation points (cfr608, cfr609, aim). Ids are s<section>-NNN.

   The real 608 exams draw 25 questions per element and the wording of the
   actual items is not public; no claim is made that these match them. */
const QUESTION_BANK = [

  /* ── Topic 1: Ozone Depletion (Core) ─────────────────────────────── */
  {
    "id": "s1-001",
    "section": 1,
    "sectionName": "Ozone Depletion",
    "question": "Where is the stratospheric ozone layer that CFC and HCFC refrigerants damage?",
    "choices": [
      "In the atmosphere's lowest layer, mixed with ground-level smog",
      "In the stratosphere, roughly 9 to 30 miles above the Earth's surface",
      "Just above the cloud tops, roughly 3 to 5 miles above the Earth's surface",
      "Beyond the atmosphere, in the ionosphere"
    ],
    "answer": 1,
    "explanation": "The protective ozone layer sits in the stratosphere, roughly 9 to 30 miles up, where it screens out harmful ultraviolet radiation. Ground-level (tropospheric) ozone is a different thing entirely: there it is a pollutant and a component of smog, not a shield."
  },
  {
    "id": "s1-002",
    "section": 1,
    "sectionName": "Ozone Depletion",
    "question": "What in a CFC or HCFC molecule actually destroys stratospheric ozone?",
    "choices": [
      "The fluorine atoms",
      "The carbon backbone",
      "The chlorine atoms",
      "The hydrogen atoms"
    ],
    "answer": 2,
    "explanation": "Ultraviolet radiation in the stratosphere breaks chlorine free from CFC and HCFC molecules, and each chlorine atom then destroys ozone molecules catalytically — over and over, tens of thousands of times. Fluorine and hydrogen do not attack ozone, which is why chlorine-free HFCs have zero ozone depletion potential."
  },
  {
    "id": "s1-003",
    "section": 1,
    "sectionName": "Ozone Depletion",
    "question": "Why do CFCs reach the stratosphere at all when they are heavier than air?",
    "choices": [
      "They are carried up bound to water vapor in thunderstorms",
      "Atmospheric winds mix gases thoroughly regardless of their molecular weight",
      "Only the fraction that breaks down at ground level rises as lighter fragments",
      "They do not; ozone depletion happens at ground level"
    ],
    "answer": 1,
    "explanation": "Wind and atmospheric turbulence mix the air thoroughly, so even heavy, stable molecules like CFCs are lofted into the stratosphere over time. Their stability is exactly the problem: nothing removes them on the way up, so they survive the years-long trip and release chlorine only when hard ultraviolet finally splits them."
  },
  {
    "id": "s1-004",
    "section": 1,
    "sectionName": "Ozone Depletion",
    "question": "Which of these is an effect of increased ultraviolet radiation reaching the ground through a thinned ozone layer?",
    "choices": [
      "More skin cancers and cataracts, and reduced crop yields",
      "Higher levels of ground-level smog in cities",
      "Acid rain over industrial regions downwind of power plants",
      "A weakening of the Earth's magnetic field"
    ],
    "answer": 0,
    "explanation": "Ozone depletion lets more UV-B radiation through, which raises rates of skin cancer and cataracts, suppresses immune systems, and damages crops and marine plankton. Smog and acid rain are real pollution problems, but they are caused by other emissions, not by ozone loss."
  },
  {
    "id": "s1-005",
    "section": 1,
    "sectionName": "Ozone Depletion",
    "question": "How do the ozone depletion potentials (ODP) of CFCs, HCFCs, and HFCs compare?",
    "choices": [
      "CFCs highest, HCFCs lower, HFCs zero",
      "HCFCs highest, CFCs lower, HFCs zero",
      "All three deplete ozone about equally",
      "CFCs highest, HFCs lower, HCFCs zero"
    ],
    "answer": 0,
    "explanation": "CFCs are fully halogenated and very stable, so their chlorine reliably reaches the stratosphere: ODP near 1. The hydrogen in HCFCs makes them break down mostly in the lower atmosphere, so much less of their chlorine arrives: ODP a few percent of CFC-11's. HFCs contain no chlorine at all, so their ODP is zero."
  },
  {
    "id": "s1-006",
    "section": 1,
    "sectionName": "Ozone Depletion",
    "question": "R-12 is a CFC and R-22 is an HCFC. What is the chemical difference the letters describe?",
    "choices": [
      "An HCFC contains hydrogen in place of some halogen atoms",
      "An HCFC contains no chlorine at all",
      "A CFC contains hydrogen atoms and an HCFC contains none at all",
      "An HCFC is simply a CFC blended with mineral oil"
    ],
    "answer": 0,
    "explanation": "Chlorofluorocarbons are carbon with only chlorine and fluorine attached. Hydrochlorofluorocarbons keep some hydrogen, which makes the molecule reactive enough that most of it breaks apart in the lower atmosphere before its chlorine can reach the ozone layer — that is why HCFC ozone depletion potentials are far lower. Chlorine-free molecules are HFCs, not HCFCs."
  },
  {
    "id": "s1-007",
    "section": 1,
    "sectionName": "Ozone Depletion",
    "question": "What evidence links CFCs to stratospheric ozone loss?",
    "choices": [
      "Laboratory tests alone; no atmospheric measurements exist",
      "Air samples showing elevated chlorine monoxide in the stratosphere where ozone is depleted",
      "The correlation between refrigerant sales and city smog levels",
      "Satellite images showing visible green CFC clouds drifting over the polar ice caps each winter"
    ],
    "answer": 1,
    "explanation": "Measurements over Antarctica found chlorine monoxide — the fingerprint of chlorine actively destroying ozone — rising exactly where ozone was collapsing, tying the loss to chlorine chemistry rather than to weather alone. The chlorine's isotopic and chemical signature matches man-made CFCs, not volcanoes or sea salt, which rain out of the lower atmosphere long before reaching the stratosphere."
  },

  /* ── Topic 2: Clean Air Act and Montreal Protocol (Core) ─────────── */
  {
    "id": "s2-001",
    "section": 2,
    "sectionName": "Clean Air Act and Montreal Protocol",
    "question": "What is the Montreal Protocol?",
    "choices": [
      "A U.S. federal law regulating refrigerant venting",
      "An international treaty phasing out the production of ozone-depleting substances",
      "A Canadian standard for refrigerant recovery equipment",
      "An EPA rule under Section 609 listing acceptable substitute refrigerants for each end use"
    ],
    "answer": 1,
    "explanation": "The Montreal Protocol, signed in 1987, is the international agreement under which nations committed to phase out production of CFCs, HCFCs, halons, and other ozone-depleting substances on a schedule. The United States implements its obligations domestically through the Clean Air Act, which is where EPA's refrigerant rules come from."
  },
  {
    "id": "s2-002",
    "section": 2,
    "sectionName": "Clean Air Act and Montreal Protocol",
    "question": "Which law gives EPA its authority to regulate refrigerant handling in the United States?",
    "choices": [
      "The Clean Water Act",
      "The Montreal Protocol, which applies directly to technicians",
      "The Clean Air Act",
      "The Resource Conservation and Recovery Act"
    ],
    "answer": 2,
    "explanation": "Title VI of the Clean Air Act, added in the 1990 amendments, is the domestic law behind EPA's stratospheric ozone protection program: Section 608 covers stationary refrigeration and Section 609 covers motor vehicle air conditioning. The Montreal Protocol is the treaty the Act implements; it binds nations, not individual technicians."
  },
  {
    "id": "s2-003",
    "section": 2,
    "sectionName": "Clean Air Act and Montreal Protocol",
    "question": "When did production of CFC refrigerants such as R-12 end in the United States?",
    "choices": [
      "December 31, 1995",
      "January 1, 2020",
      "January 1, 2010",
      "It continues today under a quota system"
    ],
    "answer": 0,
    "explanation": "U.S. production and import of CFCs ended December 31, 1995 under the accelerated Montreal Protocol schedule. Equipment using R-12 and other CFCs may still be serviced with recovered or reclaimed refrigerant, which is why recovery matters: the only supply left is what technicians keep out of the air."
  },
  {
    "id": "s2-004",
    "section": 2,
    "sectionName": "Clean Air Act and Montreal Protocol",
    "question": "What happened to HCFC-22 (R-22) on January 1, 2020?",
    "choices": [
      "Its use in existing equipment became illegal",
      "All R-22 systems had to be retrofitted to an approved HFC refrigerant or permanently retired from service by December 31",
      "It was reclassified as an acceptable substitute refrigerant",
      "U.S. production and import ended; only recovered, recycled, or reclaimed R-22 may service existing equipment"
    ],
    "answer": 3,
    "explanation": "The HCFC phaseout ended new production and import of R-22 on January 1, 2020. Running existing R-22 equipment remains perfectly legal, and servicing it is too — but the refrigerant must come from recovered, recycled, or reclaimed stock, which keeps prices high and makes careful recovery valuable."
  },
  {
    "id": "s2-005",
    "section": 2,
    "sectionName": "Clean Air Act and Montreal Protocol",
    "question": "A technician who knowingly vents CFC refrigerant can face what consequences under the Clean Air Act?",
    "choices": [
      "Only the loss of their Section 608 certification",
      "Civil penalties of tens of thousands of dollars per day per violation, and possible criminal prosecution",
      "A warning letter for a first offense, with no fines possible",
      "Penalties assessed against their employer only, since the Act makes the certificate holder's company solely liable"
    ],
    "answer": 1,
    "explanation": "The Clean Air Act authorizes substantial civil penalties — up to $37,500 per day per violation, adjusted over time for inflation — plus criminal fines and imprisonment for knowing violations, and EPA can revoke a technician's certification. Penalties reach the individual technician as well as the employer, and EPA has paid bounties to informants whose tips led to convictions."
  },
  {
    "id": "s2-006",
    "section": 2,
    "sectionName": "Clean Air Act and Montreal Protocol",
    "question": "Under the Clean Air Act's venting prohibition, when may a technician knowingly release a regulated refrigerant while servicing equipment?",
    "choices": [
      "Whenever the charge is under one pound",
      "When the owner of the equipment consents in writing and the release is logged in the service record within 30 days",
      "Never intentionally; only de minimis releases while making a good-faith effort to recover and recycle are allowed",
      "When outdoor temperatures make recovery impractical"
    ],
    "answer": 2,
    "explanation": "Since 1993 it has been illegal to knowingly vent regulated refrigerants while maintaining, servicing, repairing, or disposing of equipment. The rule tolerates only de minimis releases — the little that escapes despite a good-faith effort to recover, such as what is in a disconnected hose with low-loss fittings. Neither a small charge nor an owner's permission makes venting legal.",
    "manual": "cfr608",
    "ref": "§ 82.154",
    "page": "82.154"
  },
  {
    "id": "s2-007",
    "section": 2,
    "sectionName": "Clean Air Act and Montreal Protocol",
    "question": "Releases of which of these are NOT violations of the venting prohibition?",
    "choices": [
      "Nitrogen used as a trace gas mixed with R-22 for leak checking",
      "Non-exempt refrigerant released while topping off a system",
      "Pure hydrofluorocarbon refrigerant vented from a supermarket rack",
      "Mixed refrigerant vented because it was too contaminated to reuse"
    ],
    "answer": 0,
    "explanation": "Releasing nitrogen used as a holding charge or as a trace-gas leak-check mixture is not venting refrigerant, provided the system was first evacuated to the required level — the release is essentially nitrogen. Contamination never excuses venting: contaminated refrigerant must still be recovered and sent for reclamation or destruction."
  },

  /* ── Topic 3: Section 608 Regulations (Core) ─────────────────────── */
  {
    "id": "s3-001",
    "section": 3,
    "sectionName": "Section 608 Regulations",
    "question": "Which activities make a person a 'technician' who must hold Section 608 certification?",
    "choices": [
      "Attaching or detaching hoses and gauges, adding or removing refrigerant, adding or removing components, or cutting the refrigerant line of an appliance",
      "Painting an appliance's cabinet or replacing its pipe insulation",
      "Rewiring an external electrical circuit on a condensing unit, replacing a wall thermostat, cleaning condenser coils, or swapping a blower-motor run capacitor",
      "Delivering sealed appliances to a job site"
    ],
    "answer": 0,
    "explanation": "Certification attaches to anyone who could reasonably be expected to violate the integrity of the refrigerant circuit while maintaining, servicing, or repairing an appliance — which the rule spells out as connecting gauges, moving refrigerant, swapping components, or cutting lines. Work that never approaches the sealed circuit, like painting, insulating, or external wiring, does not require it.",
    "manual": "cfr608",
    "ref": "§ 82.152",
    "page": "82.152"
  },
  {
    "id": "s3-002",
    "section": 3,
    "sectionName": "Section 608 Regulations",
    "question": "What equipment does Type II certification cover?",
    "choices": [
      "Only appliances charged with more than 50 pounds of refrigerant, since anything with a smaller charge is handled under the Section 609 motor vehicle program instead",
      "Small appliances of 5 pounds or less",
      "High-pressure, very high-pressure, and medium-pressure appliances — everything except small appliances, low-pressure appliances, and motor vehicle systems",
      "Low-pressure centrifugal chillers"
    ],
    "answer": 2,
    "explanation": "Type I covers small appliances, Type III covers low-pressure appliances, and Type II covers the medium-, high-, and very high-pressure appliances in between — the bulk of commercial refrigeration and air conditioning. Universal certification is all three plus Core. Motor vehicle air conditioners belong to the separate Section 609 program.",
    "manual": "cfr608",
    "ref": "§ 82.161",
    "page": "82.161"
  },
  {
    "id": "s3-003",
    "section": 3,
    "sectionName": "Section 608 Regulations",
    "question": "What score passes a proctored Section 608 certification exam, and how is the mail-in Type I option different?",
    "choices": [
      "70% on each proctored section; the open-book mail-in Type I test requires 84%",
      "50% on every format",
      "90% on each proctored section; the closed-book mail-in Type I test requires 95%",
      "There is no fixed score; each certifying organization chooses"
    ],
    "answer": 0,
    "explanation": "The rule sets the closed-book passing score at 70 percent per section — 18 of the 25 questions in practice — while the mail-in, open-book Type I format demands 84 percent to offset the open book. Only Type I may be taken by mail, and a mail-in Core cannot be combined toward Universal certification, which requires proctored testing.",
    "manual": "cfr608",
    "ref": "appendix D to subpart F",
    "page": "app. D"
  },
  {
    "id": "s3-004",
    "section": 3,
    "sectionName": "Section 608 Regulations",
    "question": "When does a Section 608 technician certification expire?",
    "choices": [
      "Every 5 years",
      "It does not expire, though EPA can revoke it for violations and reserves the right to require recertification in the future",
      "Every 2 years, renewable through eight hours of EPA-approved continuing education and a proctored refresher exam on venting rules",
      "When the technician changes employers"
    ],
    "answer": 1,
    "explanation": "Section 608 credentials are issued for life: the rule reserves recertification 'at some future date' but imposes none now. The certificate can be suspended or revoked for cause, and a revoked technician must test again. Technicians keep a copy of their certificate at their place of business and for three years after leaving the trade.",
    "manual": "cfr608",
    "ref": "§ 82.161",
    "page": "82.161"
  },
  {
    "id": "s3-005",
    "section": 3,
    "sectionName": "Section 608 Regulations",
    "question": "May an uncertified apprentice work on refrigerant circuits?",
    "choices": [
      "Never, under any circumstances",
      "Yes, while closely and continually supervised by a certified technician and registered as an apprentice",
      "Yes, unsupervised, for up to five years",
      "Only on systems containing less than one pound, and only after filing a written exemption with the EPA regional office"
    ],
    "answer": 1,
    "explanation": "An apprentice registered with the Department of Labor's Office of Apprenticeship is exempt from the certification requirement while closely and continually supervised by a certified technician. The apprenticeship window runs at most two years from first registering; after that, the exam awaits.",
    "manual": "cfr608",
    "ref": "§ 82.161",
    "page": "82.161"
  },
  {
    "id": "s3-006",
    "section": 3,
    "sectionName": "Section 608 Regulations",
    "question": "A supply house may sell a 25-pound cylinder of R-410A to which buyer?",
    "choices": [
      "Anyone with a business card from an HVAC company, provided the wholesaler photocopies it, logs the sale, and files a quarterly report with EPA",
      "Any adult, since R-410A contains no chlorine",
      "A Section 608 certified technician, an employer who provides proof of employing one, or a buyer purchasing for resale to certified persons",
      "Only government agencies"
    ],
    "answer": 2,
    "explanation": "Since January 1, 2018 the refrigerant sales restriction covers HFCs and other non-exempt substitutes as well as ozone-depleting refrigerants. Wholesalers verify certification or employer proof and keep invoice records — purchaser, date, quantity — for three years. Exempt substitutes such as propane and CO2 fall outside the restriction.",
    "manual": "cfr608",
    "ref": "§ 82.154",
    "page": "82.154"
  },
  {
    "id": "s3-007",
    "section": 3,
    "sectionName": "Section 608 Regulations",
    "question": "Which refrigerant release is legal under the venting prohibition?",
    "choices": [
      "R-290 (propane) from a stand-alone retail food refrigerator, where it is listed as an exempt substitute for that end use",
      "R-410A from a rooftop unit being scrapped, because zero-ODP HFC blends were removed from the venting prohibition in 2020",
      "R-22 from a system too leaky to evacuate",
      "R-134a from a water chiller during a repair"
    ],
    "answer": 0,
    "explanation": "The venting prohibition covers ozone-depleting refrigerants and non-exempt substitutes such as HFCs, in every case. Exempt substitutes — CO2, nitrogen, water in any application, and hydrocarbons like propane and isobutane in the specific end uses EPA has listed — may be released, because their impact is negligible. The exemption is per end use: propane is exempt in a stand-alone food case, not in whatever system happens to contain it.",
    "manual": "cfr608",
    "ref": "§ 82.154",
    "page": "82.154"
  },
  {
    "id": "s3-008",
    "section": 3,
    "sectionName": "Section 608 Regulations",
    "question": "Before a scrap recycler or landfill — the final processor — accepts an appliance for disposal, what does the safe-disposal rule require?",
    "choices": [
      "That the refrigerant has been recovered, or a signed statement verifies recovery — naming who recovered it and when",
      "Nothing; disposal facilities are exempt from Section 608",
      "That the appliance be crushed within 24 hours",
      "That an EPA inspector examine each appliance individually and attach a dated disposal permit tag before it is crushed"
    ],
    "answer": 0,
    "explanation": "The last person in the disposal chain must either recover the remaining refrigerant themselves or obtain a signed statement (or contract) that it was recovered — with the name and address of who did it and the date. Knowingly accepting a false statement is itself a violation, and the statements are kept for three years. The duty exists because an abandoned appliance's charge otherwise vents in the crusher.",
    "manual": "cfr608",
    "ref": "§ 82.155",
    "page": "82.155"
  },
  {
    "id": "s3-009",
    "section": 3,
    "sectionName": "Section 608 Regulations",
    "question": "A technician evacuates refrigerant from appliances holding between 5 and 50 pounds in the course of disposing of them. What records must be kept?",
    "choices": [
      "None; records begin at 50 pounds",
      "For three years: the company, location, date, and refrigerant type for each appliance, monthly totals recovered, and the quantities transferred for reclamation or destruction",
      "A photograph of each appliance's nameplate",
      "Only the scrap yard's receipt, retained for one year and showing appliance count and total scrap weight; refrigerant quantities are tracked solely by the reclaimer under its own EPA certification"
    ],
    "answer": 1,
    "explanation": "Since 2018, technicians recovering from appliances with charges above 5 and below 50 pounds for disposal keep three years of records: per-appliance company/location/date/refrigerant type, monthly recovery totals by type, and what was sent where for reclamation or destruction. It is the paper trail that proves disposal charges are being captured rather than vented.",
    "manual": "cfr608",
    "ref": "§ 82.156",
    "page": "82.156"
  },
  {
    "id": "s3-010",
    "section": 3,
    "sectionName": "Section 608 Regulations",
    "question": "A contractor wants to sell surplus used R-22 recovered from customers' systems. What must happen first?",
    "choices": [
      "Nothing, if the refrigerant looks clean",
      "It must be filtered through a suction-line filter-drier twice and pass a field acid test",
      "It generally must be reclaimed by an EPA-certified reclaimer before sale to a new owner",
      "It must be dyed to mark it as used"
    ],
    "answer": 2,
    "explanation": "Used class I/II or non-exempt substitute refrigerant cannot be sold to a new owner until an EPA-certified reclaimer has brought it to the AHRI 700 specification — the exceptions being refrigerant that stays with the same owner's equipment, MVAC-to-MVAC recycling, and transfers within a company. The rule protects buyers from someone else's contamination.",
    "manual": "cfr608",
    "ref": "§ 82.154",
    "page": "82.154"
  },
  {
    "id": "s3-011",
    "section": 3,
    "sectionName": "Section 608 Regulations",
    "question": "An open-drive air conditioner with a 15-pound charge cools the cab of a combine harvester. What certification does servicing it require?",
    "choices": [
      "Type II certification, or Section 609 MVAC certification",
      "Type III certification only",
      "No certification, since off-road farm equipment is exempt",
      "A commercial driver's license"
    ],
    "answer": 0,
    "explanation": "That is an MVAC-like appliance: an open-drive compressor system of 20 pounds or less cooling the operator's compartment of off-road vehicles such as agricultural and construction equipment. Servicing one takes either Type II certification or certification under the Section 609 program, and recovery follows the MVAC practices.",
    "manual": "cfr608",
    "ref": "§ 82.152",
    "page": "82.152"
  },

  /* ── Topic 4: Refrigerants, Substitutes, and Oils (Core) ─────────── */
  {
    "id": "s4-001",
    "section": 4,
    "sectionName": "Refrigerants, Substitutes, and Oils",
    "question": "R-410A, long the standard in residential air conditioning, is what kind of refrigerant?",
    "choices": [
      "An azeotropic 500-series blend of the CFCs R-12 and R-115",
      "A near-azeotropic blend of two HFCs, R-32 and R-125",
      "A pure HFC compound",
      "A blend of an HCFC and a hydrocarbon"
    ],
    "answer": 1,
    "explanation": "R-410A is a 50/50 blend of the HFCs R-32 and R-125. As a 400-series blend it is zeotropic — its components can separate — though its temperature glide is small enough that it behaves nearly as a single compound. It contains no chlorine, so its ozone depletion potential is zero, but its high global warming potential is why it is now being replaced."
  },
  {
    "id": "s4-002",
    "section": 4,
    "sectionName": "Refrigerants, Substitutes, and Oils",
    "question": "Why must a zeotropic blend such as R-407C be charged into a system as a liquid?",
    "choices": [
      "Liquid charging is faster and gentler on the compressor",
      "Vapor charged from the tank would fractionate — the components boil off at different rates, changing the blend's composition",
      "The blend is flammable in vapor form",
      "Liquid charging keeps the oil dissolved in the refrigerant, preventing it from foaming out of the compressor crankcase at startup"
    ],
    "answer": 1,
    "explanation": "A zeotropic blend's components have different boiling points, so vapor drawn off the top of a cylinder is richer in the more volatile component than the liquid below it. Charging vapor therefore changes the composition of what enters the system and what remains in the tank. Drawing liquid keeps the components in their designed proportions; it is then flashed or metered carefully into the suction side."
  },
  {
    "id": "s4-003",
    "section": 4,
    "sectionName": "Refrigerants, Substitutes, and Oils",
    "question": "What does 'temperature glide' mean for a zeotropic refrigerant blend?",
    "choices": [
      "The blend evaporates and condenses over a range of temperatures rather than at one fixed temperature",
      "The refrigerant's boiling point drifts as the cylinder ages",
      "The compressor discharge temperature rises slowly during operation",
      "The blend's pressure falls gradually after shutoff as the heavier component settles into the receiver"
    ],
    "answer": 0,
    "explanation": "Because the components of a zeotropic blend boil at different temperatures, the mixture changes temperature as it evaporates or condenses at constant pressure — that span is the glide. It complicates superheat and subcooling measurement: technicians must use the dew-point values for superheat and bubble-point values for subcooling from the blend's pressure-temperature chart."
  },
  {
    "id": "s4-004",
    "section": 4,
    "sectionName": "Refrigerants, Substitutes, and Oils",
    "question": "Which lubricant is used with most HFC refrigerants such as R-134a and R-410A?",
    "choices": [
      "Mineral oil",
      "Alkylbenzene (AB) oil",
      "Polyolester (POE) oil",
      "Silicone oil"
    ],
    "answer": 2,
    "explanation": "HFCs do not mix well with the mineral oil used with CFCs and HCFCs, so systems running them use synthetic polyolester (POE) lubricant, which HFC refrigerant can dissolve and carry back to the compressor. POE is strongly hygroscopic — it absorbs moisture from the air — so it is kept sealed and exposed to atmosphere as briefly as possible."
  },
  {
    "id": "s4-005",
    "section": 4,
    "sectionName": "Refrigerants, Substitutes, and Oils",
    "question": "Why is polyolester (POE) oil handled with special care around open air?",
    "choices": [
      "It is highly flammable",
      "It is strongly hygroscopic, absorbing moisture that then forms acids in the system",
      "It evaporates within minutes of exposure",
      "Ultraviolet light in ordinary daylight breaks it down into a waxy sludge that clogs metering devices"
    ],
    "answer": 1,
    "explanation": "POE oil pulls moisture straight out of the air, and holds it far more tightly than mineral oil does — vacuum alone will not remove all of it. Moisture in a running system reacts with the oil and refrigerant to form acids that attack motor windings and metal. So POE containers stay sealed until use, and systems are opened only as long as the work demands."
  },
  {
    "id": "s4-006",
    "section": 4,
    "sectionName": "Refrigerants, Substitutes, and Oils",
    "question": "What does a refrigerant's global warming potential (GWP) express?",
    "choices": [
      "Its capacity to destroy stratospheric ozone in the upper atmosphere, measured relative to an equal mass of CFC-11",
      "How much heat it traps in the atmosphere over a period, relative to the same mass of carbon dioxide",
      "The temperature rise it causes in a condenser",
      "Its flammability on the ASHRAE scale"
    ],
    "answer": 1,
    "explanation": "GWP compares a substance's heat-trapping effect to that of carbon dioxide, which is defined as 1, over a set horizon (usually 100 years). R-410A's GWP is about 2,088 — a pound released warms the climate about as much as a ton of CO2. Ozone depletion is measured by the separate ODP scale, referenced to CFC-11."
  },
  {
    "id": "s4-007",
    "section": 4,
    "sectionName": "Refrigerants, Substitutes, and Oils",
    "question": "Under what EPA program are substitute refrigerants reviewed and listed as acceptable or unacceptable for each end use?",
    "choices": [
      "The Significant New Alternatives Policy (SNAP) program",
      "The AHRI 700 standard",
      "The Energy Star program",
      "The Alternative Refrigerants Evaluation Program (AREP)"
    ],
    "answer": 0,
    "explanation": "Section 612 of the Clean Air Act created the SNAP program, under which EPA evaluates substitutes for ozone-depleting substances end use by end use and lists them as acceptable, acceptable with conditions, or unacceptable. Using a substitute in an application where SNAP prohibits it is a violation — acceptability is not a blanket property of the chemical."
  },
  {
    "id": "s4-008",
    "section": 4,
    "sectionName": "Refrigerants, Substitutes, and Oils",
    "question": "Is there any 'drop-in' substitute EPA recognizes for simply replacing the refrigerant in a system without other changes?",
    "choices": [
      "Yes, R-134a is a drop-in for R-12 in all systems",
      "Yes, any SNAP-listed substitute is by definition a drop-in, since the listing certifies compatibility with existing lubricants and seals",
      "No; EPA regards no substitute as a true drop-in, since lubricants, seals, expansion devices, or controls generally must change too",
      "Only hydrocarbon blends qualify as drop-ins"
    ],
    "answer": 2,
    "explanation": "EPA's position is that there are no drop-in replacements. Retrofitting to a substitute nearly always means changing the lubricant, replacing seals or driers, and re-setting or replacing expansion devices, and the SNAP listing may impose conditions. Marketing terms like 'drop-in' promise a shortcut the chemistry does not deliver."
  },
  {
    "id": "s4-009",
    "section": 4,
    "sectionName": "Refrigerants, Substitutes, and Oils",
    "question": "A refrigerant classified A2L under ASHRAE Standard 34, such as R-32 or R-454B, is:",
    "choices": [
      "Higher toxicity and highly flammable, in the same class as R-290",
      "Lower toxicity and mildly flammable, with a low burning velocity",
      "Lower toxicity and nonflammable",
      "Higher toxicity and nonflammable"
    ],
    "answer": 1,
    "explanation": "The letter grades toxicity (A lower, B higher) and the number flammability (1 none, 2 lower, 3 higher); the L suffix marks a lower-flammability subclass with burning velocity under 10 cm/s. A2L refrigerants like R-32, R-454B, and R-1234yf are mildly flammable — hard to ignite and slow-burning, but flammable nonetheless, which brings handling, charging, and ventilation requirements traditional A1 refrigerants never had."
  },
  {
    "id": "s4-010",
    "section": 4,
    "sectionName": "Refrigerants, Substitutes, and Oils",
    "question": "In the ASHRAE numbering scheme, what does the 400 series (R-407C, R-410A, R-454B) designate?",
    "choices": [
      "Zeotropic blends of two or more refrigerants",
      "Azeotropic blends that behave as one compound",
      "Inorganic refrigerants such as ammonia",
      "Hydrocarbon refrigerants"
    ],
    "answer": 0,
    "explanation": "400-series numbers are zeotropic blends, which evaporate and condense over a temperature glide and can fractionate. Azeotropic blends, which act as a single compound, get 500-series numbers (R-502, R-513A); inorganics like ammonia (R-717) and CO2 (R-744) are the 700 series."
  },

  /* ── Topic 5: Refrigeration Basics (Core) ────────────────────────── */
  {
    "id": "s5-001",
    "section": 5,
    "sectionName": "Refrigeration Basics",
    "question": "In the basic vapor-compression cycle, what order does refrigerant flow through the four major components?",
    "choices": [
      "Compressor, evaporator, expansion device, condenser",
      "Compressor, condenser, expansion device, evaporator",
      "Evaporator, expansion device, condenser, compressor",
      "Condenser, compressor, evaporator, expansion device"
    ],
    "answer": 1,
    "explanation": "The compressor raises the vapor's pressure and temperature; the condenser rejects heat and turns it to high-pressure liquid; the expansion device drops its pressure; and the evaporator absorbs heat as the low-pressure liquid boils back to vapor, which returns to the compressor. Cooling happens in the evaporator, heat rejection in the condenser."
  },
  {
    "id": "s5-002",
    "section": 5,
    "sectionName": "Refrigeration Basics",
    "question": "In which component does the refrigerant absorb heat from the space being cooled?",
    "choices": [
      "The condenser",
      "The compressor",
      "The evaporator",
      "The receiver"
    ],
    "answer": 2,
    "explanation": "In the evaporator, low-pressure liquid refrigerant boils, and the latent heat that boiling requires comes out of the air or product being cooled. The condenser does the opposite job, rejecting that heat plus the heat of compression to the outdoors."
  },
  {
    "id": "s5-003",
    "section": 5,
    "sectionName": "Refrigeration Basics",
    "question": "What state is the refrigerant in as it leaves a properly operating condenser?",
    "choices": [
      "Superheated vapor",
      "Saturated vapor",
      "A half-liquid, half-vapor mixture",
      "Subcooled high-pressure liquid"
    ],
    "answer": 3,
    "explanation": "The condenser desuperheats the hot discharge gas, condenses it to liquid, and then subcools the liquid a few degrees below its condensing temperature. Subcooled liquid at the expansion device is what the metering device is designed for; vapor bubbles there (flash gas) rob capacity."
  },
  {
    "id": "s5-004",
    "section": 5,
    "sectionName": "Refrigeration Basics",
    "question": "What is superheat?",
    "choices": [
      "The temperature of a vapor above its saturation temperature at the same pressure",
      "The temperature of a liquid after it has been cooled below its saturation temperature",
      "The temperature rise across the compressor",
      "Any evaporator temperature above 32 °F"
    ],
    "answer": 0,
    "explanation": "Once all the liquid in the evaporator has boiled off, further heat raises the vapor's temperature above the saturation temperature for its pressure; that margin is superheat. Measured at the evaporator outlet it proves liquid is not reaching the compressor, which is why charging and TXV adjustment lean on it."
  },
  {
    "id": "s5-005",
    "section": 5,
    "sectionName": "Refrigeration Basics",
    "question": "What does a pressure-temperature (P-T) chart tell a technician about a refrigerant?",
    "choices": [
      "The saturation temperature that corresponds to each pressure",
      "The correct compressor oil charge for each size of hermetic system",
      "The maximum safe cylinder fill level",
      "The refrigerant's global warming potential"
    ],
    "answer": 0,
    "explanation": "A P-T chart maps pressure to saturation temperature — the temperature at which the refrigerant boils or condenses at that pressure. With it a gauge reading becomes a coil temperature, superheat and subcooling can be computed, and a cylinder's pressure at a known temperature can be checked to spot contamination with air or the wrong refrigerant."
  },
  {
    "id": "s5-006",
    "section": 5,
    "sectionName": "Refrigeration Basics",
    "question": "A refrigerant cylinder has been sitting in a 75 °F room long enough to stabilize. Its pressure gauge reads noticeably higher than the P-T chart's saturation pressure for 75 °F. What does that suggest?",
    "choices": [
      "The cylinder is overfilled, since more liquid raises the saturation pressure",
      "The cylinder contains noncondensables such as air, or the wrong refrigerant",
      "The refrigerant has partially decomposed into oil",
      "The gauge must be reading in absolute pressure"
    ],
    "answer": 1,
    "explanation": "At a stable known temperature, a cylinder of pure saturated refrigerant must sit exactly at the P-T chart pressure. Pressure above that means something in the cylinder is not condensing at that temperature: air or other noncondensable gas, or a different, higher-pressure refrigerant. This check is the standard field test before charging from a recovered cylinder."
  },
  {
    "id": "s5-007",
    "section": 5,
    "sectionName": "Refrigeration Basics",
    "question": "Why do noncondensable gases like air raise a system's head pressure?",
    "choices": [
      "Air chemically reacts with the refrigerant, producing high-pressure byproducts",
      "Air condenses more slowly than the refrigerant, backing liquid up into the evaporator and flooding it",
      "Air collects in the condenser, taking up condensing surface and adding its own partial pressure",
      "Air displaces the oil, reducing lubrication and raising friction"
    ],
    "answer": 2,
    "explanation": "Air cannot condense at system temperatures, so it accumulates at the top of the condenser, blanketing tube surface and adding its partial pressure on top of the refrigerant's. The result is elevated head pressure, higher compression work, and higher discharge temperatures — and with them, faster oil and refrigerant breakdown."
  },
  {
    "id": "s5-008",
    "section": 5,
    "sectionName": "Refrigeration Basics",
    "question": "Which gas law fact explains why recovering refrigerant into a cold cylinder goes faster?",
    "choices": [
      "A gas's solubility in oil rises with temperature, so a cold cylinder pulls refrigerant out of the appliance's oil much faster",
      "Vapor pressure falls with temperature, so a cold cylinder holds a lower pressure for the refrigerant to flow toward",
      "Cold gases weigh less, leaving more room in the cylinder",
      "Cold metal attracts refrigerant molecules electrostatically"
    ],
    "answer": 1,
    "explanation": "Refrigerant moves from higher pressure to lower pressure. A cylinder's pressure is its refrigerant's saturation pressure at cylinder temperature, so chilling the recovery cylinder (in ice, or by pre-pulling it) lowers its pressure and keeps a useful pressure difference working for you — while heating the appliance being recovered does the same from the other side."
  },
  {
    "id": "s5-009",
    "section": 5,
    "sectionName": "Refrigeration Basics",
    "question": "What is the function of the thermostatic expansion valve (TXV) in a system?",
    "choices": [
      "It meters liquid refrigerant into the evaporator to maintain a set superheat at the evaporator outlet",
      "It regulates the compressor's discharge pressure",
      "It maintains a constant subcooling at the condenser outlet by throttling the liquid line to match the load",
      "It bypasses hot gas around the condenser during low load"
    ],
    "answer": 0,
    "explanation": "A TXV senses the temperature and pressure at the evaporator outlet and throttles liquid feed to hold superheat at its setpoint, keeping the evaporator as full as possible without flooding liquid back to the compressor. It controls superheat — not head pressure, not subcooling."
  },
  {
    "id": "s5-010",
    "section": 5,
    "sectionName": "Refrigeration Basics",
    "question": "Where in a refrigeration system would you expect to measure the highest temperature?",
    "choices": [
      "The evaporator inlet",
      "The compressor discharge line",
      "The liquid line entering the expansion device",
      "The suction line at the compressor inlet"
    ],
    "answer": 1,
    "explanation": "The discharge line carries vapor that has just been compressed, carrying both the heat absorbed in the evaporator and the heat of compression, and runs well above condensing temperature. The liquid line runs near condensing temperature, and the suction line is the coolest line in the system."
  },

  /* ── Topic 6: Recover, Recycle, Reclaim (Core) ───────────────────── */
  {
    "id": "s6-001",
    "section": 6,
    "sectionName": "Recover, Recycle, Reclaim",
    "question": "What does it mean to RECOVER refrigerant?",
    "choices": [
      "To clean refrigerant with oil separation and filter-driers for reuse",
      "To remove refrigerant from a system and store it in an external container",
      "To reprocess refrigerant to new-product purity verified by laboratory analysis",
      "To transfer refrigerant from one operating system directly into another"
    ],
    "answer": 1,
    "explanation": "Recovery is simply getting the refrigerant out of the appliance and into a container in any condition it happens to be in — no cleaning implied. Recycling adds on-site cleanup (oil separation and filter-driers); reclamation is off-site reprocessing to the AHRI 700 purity standard with chemical analysis to prove it."
  },
  {
    "id": "s6-002",
    "section": 6,
    "sectionName": "Recover, Recycle, Reclaim",
    "question": "What distinguishes RECLAIMED refrigerant from recycled refrigerant?",
    "choices": [
      "Reclaimed refrigerant has been reprocessed to the purity of new refrigerant, verified by chemical analysis",
      "Reclaimed refrigerant has simply passed twice through the recovery machine's filter-drier and oil separator",
      "Reclaimed refrigerant is any refrigerant stored more than 12 months",
      "There is no difference; the terms are interchangeable"
    ],
    "answer": 0,
    "explanation": "Reclamation means reprocessing refrigerant — typically by an EPA-certified reclaimer — until it meets the purity specification of AHRI Standard 700, verified by laboratory analysis. Recycling only reduces contaminants with oil separation and filter-driers and carries no purity guarantee, which is why recycled refrigerant's reuse is restricted while reclaimed refrigerant can be sold like new.",
    "manual": "cfr608",
    "ref": "§ 82.152",
    "page": "82.152"
  },
  {
    "id": "s6-003",
    "section": 6,
    "sectionName": "Recover, Recycle, Reclaim",
    "question": "Refrigerant recovered from a system may generally be returned without reclamation to:",
    "choices": [
      "Any customer's equipment, as long as it looks and smells clean",
      "The same owner's equipment, or the same system it came from",
      "Any equipment using the same refrigerant type",
      "No equipment at all; recovered refrigerant must always be reclaimed"
    ],
    "answer": 1,
    "explanation": "Recovered or recycled refrigerant may go back into the system it came from or into another appliance owned by the same person without being reclaimed. Once refrigerant changes ownership, it must be reclaimed to AHRI 700 purity before reuse — the purity guarantee protects the next owner's equipment.",
    "manual": "cfr608",
    "ref": "§ 82.156",
    "page": "82.156"
  },
  {
    "id": "s6-004",
    "section": 6,
    "sectionName": "Recover, Recycle, Reclaim",
    "question": "What are the major contaminants that recovery and reclamation aim to remove from used refrigerant?",
    "choices": [
      "Moisture, acids, oil, particulates, and noncondensable gases",
      "Chlorine, fluorine, and bromine",
      "Dissolved copper plating, solder flux residue, and calcium brine",
      "Carbon monoxide and ozone"
    ],
    "answer": 0,
    "explanation": "Used refrigerant carries moisture, acid formed from refrigerant and oil breakdown, lubricant, solid particulates, other refrigerants, and noncondensables such as air. Moisture and acid are the killers — together they corrode metal and attack motor windings — and noncondensables raise head pressure; reclamation strips all of them to AHRI 700 limits."
  },
  {
    "id": "s6-005",
    "section": 6,
    "sectionName": "Recover, Recycle, Reclaim",
    "question": "Why must different refrigerants never be mixed in one recovery cylinder?",
    "choices": [
      "Mixed refrigerants form an azeotrope that can detonate once cylinder pressure passes the 300 psig service rating",
      "The mixture may be impossible to separate, so no reclaimer will take it except for costly destruction",
      "Mixing instantly converts both refrigerants to acid",
      "EPA allows mixing only in DOT-stamped cylinders"
    ],
    "answer": 1,
    "explanation": "Cross-contaminated refrigerant often cannot be separated economically; reclaimers will reject the cylinder or charge steep fees to destroy the contents. Mixing wastes refrigerant that can never be reused — so a technician keeps a dedicated cylinder per refrigerant and checks recovery equipment for residue before switching types."
  },
  {
    "id": "s6-006",
    "section": 6,
    "sectionName": "Recover, Recycle, Reclaim",
    "question": "After recovering refrigerant with oil-laden vapor from a burned-out compressor, what should be done with the oil removed from the recovery machine's separator?",
    "choices": [
      "Pour it back into the new compressor",
      "Dispose of it as used oil in accordance with local and federal rules",
      "Mix it with fresh mineral oil until the acid is diluted to a safe level",
      "Ship it back to the refrigerant manufacturer"
    ],
    "answer": 1,
    "explanation": "Oil from a burnout is contaminated with acid and holds dissolved refrigerant, which should be outgassed into the recovery cylinder before the oil is drained. The oil is then handled as used oil under applicable disposal rules — never reused in equipment, and never poured out on the ground or down a drain."
  },

  /* ── Topic 7: Recovery Techniques (Core) ─────────────────────────── */
  {
    "id": "s7-001",
    "section": 7,
    "sectionName": "Recovery Techniques",
    "question": "What is the difference between the vapor recovery and liquid recovery methods?",
    "choices": [
      "Vapor recovery works only on flooded systems",
      "Liquid recovery transfers refrigerant as liquid and is much faster for large charges",
      "Liquid recovery requires no recovery machine at all",
      "Vapor recovery pulls the compressor's oil charge out along with the refrigerant vapor"
    ],
    "answer": 1,
    "explanation": "Pulling liquid moves far more refrigerant per minute than boiling it off as vapor, so large charges start with liquid recovery (or a push-pull transfer), finishing with vapor to empty the system. Vapor recovery alone is fine for small charges; it is slower because the recovery machine must condense everything it takes in."
  },
  {
    "id": "s7-002",
    "section": 7,
    "sectionName": "Recovery Techniques",
    "question": "How does the push-pull recovery method work?",
    "choices": [
      "Two recovery machines run in series to double the flow rate",
      "The machine pulls vapor from the cylinder and discharges it into the appliance, pushing liquid into the cylinder",
      "The appliance's own compressor pushes refrigerant into the cylinder",
      "A regulated nitrogen charge pushes the liquid out while a vacuum pump pulls vapor from the recovery cylinder's top port"
    ],
    "answer": 1,
    "explanation": "In push-pull, the machine's suction draws vapor off the top of the recovery cylinder, lowering its pressure, and discharges that vapor into the top of the appliance, raising its pressure — so liquid flows from the appliance to the cylinder through a separate liquid line. It moves big liquid charges quickly; the remaining vapor is then recovered normally. Nitrogen must never be used to push refrigerant into a recovery cylinder."
  },
  {
    "id": "s7-003",
    "section": 7,
    "sectionName": "Recovery Techniques",
    "question": "Why should a technician never use a system-dependent or self-contained recovery process to push refrigerant with shop nitrogen into a recovery cylinder?",
    "choices": [
      "Nitrogen freezes the cylinder valve shut",
      "Nitrogen would contaminate the refrigerant with a noncondensable gas and could overpressurize the cylinder",
      "Nitrogen reacts with the POE oil's ester linkages, hydrolyzing the oil into organic acids that etch the cylinder wall",
      "Nitrogen is too expensive for routine use"
    ],
    "answer": 1,
    "explanation": "Nitrogen mixed into recovered refrigerant is a noncondensable contaminant the reclaimer must strip out, and a cylinder fed by an unregulated high-pressure nitrogen bottle can be driven past its service pressure. Nitrogen belongs in leak checking and brazing purges — vented afterward, which is legal — not in refrigerant transfers."
  },
  {
    "id": "s7-004",
    "section": 7,
    "sectionName": "Recovery Techniques",
    "question": "What practical steps speed up a slow vapor recovery on a warm day?",
    "choices": [
      "Remove the cylinder's pressure relief valve and its Schrader core to eliminate back-pressure at the cylinder inlet",
      "Heat the recovery cylinder with a torch",
      "Chill the recovery cylinder, keep hoses short and large-bore, remove valve cores, and warm the appliance",
      "Add nitrogen to raise the appliance pressure"
    ],
    "answer": 2,
    "explanation": "Recovery speed lives on the pressure difference and the flow path: cooling the cylinder lowers its pressure, warming the appliance raises its pressure, and short, fat hoses with the Schrader cores pulled out cut restriction dramatically. Torches and pulled relief valves trade minutes for catastrophic risk, and nitrogen contaminates the charge."
  },
  {
    "id": "s7-005",
    "section": 7,
    "sectionName": "Recovery Techniques",
    "question": "Refrigerant dissolved in a system's oil ('refrigerant in solution') affects recovery how?",
    "choices": [
      "It has no effect; oil holds no refrigerant",
      "It outgasses slowly as pressure drops, so system pressure can rebound after recovery stops",
      "It makes the oil more slippery, speeding recovery",
      "It causes the recovery machine's condenser to overheat and trip its high-pressure cutout immediately"
    ],
    "answer": 1,
    "explanation": "Oil absorbs a surprising amount of refrigerant, and that refrigerant boils out slowly as system pressure falls — faster if the oil is warm. Stop recovery too early and the pressure creeps back up as the oil outgasses. That is why required evacuation levels must be reached and held, and why warming the crankcase or running short compressor bumps (where the design allows) helps free the last of the charge."
  },
  {
    "id": "s7-006",
    "section": 7,
    "sectionName": "Recovery Techniques",
    "question": "Before recovering from a system with a badly burned-out compressor, a technician should expect the refrigerant to be:",
    "choices": [
      "Cleaner than normal, since the burnout consumed the oil",
      "Acidic and contaminated, requiring the charge to be sent for reclamation",
      "Perfectly reusable in the same system as soon as the repair is completed",
      "Converted mostly to nitrogen gas"
    ],
    "answer": 1,
    "explanation": "A motor burnout cooks oil and refrigerant into acids and sludge. The charge is recovered — venting is still illegal — but treated as contaminated: run through the machine into a dedicated cylinder, sent for reclamation or destruction, and the recovery unit's filter-driers changed so the acid does not ride into the next job."
  },
  {
    "id": "s7-007",
    "section": 7,
    "sectionName": "Recovery Techniques",
    "question": "What routine check protects recovery equipment's accuracy and the operator during every job?",
    "choices": [
      "Monitoring the recovery cylinder's fill by weight on a scale, never by sight or time",
      "Timing the recovery and stopping after 20 minutes",
      "Filling until the cylinder's relief valve just begins to simmer, then backing off ten percent",
      "Watching frost form on the cylinder's shoulder"
    ],
    "answer": 0,
    "explanation": "The only safe measure of a cylinder's contents is weight. Recovery cylinders are filled to a maximum of 80% of capacity, and machines with overfill sensors still deserve a scale under the cylinder as the working check. Waiting for the relief valve to open means the safe limit is far behind you — hydrostatic pressure from an overfull cylinder can burst it."
  },

  /* ── Topic 8: Dehydration and Evacuation (Core) ──────────────────── */
  {
    "id": "s8-001",
    "section": 8,
    "sectionName": "Dehydration and Evacuation",
    "question": "What is the purpose of evacuating a system to a deep vacuum before charging?",
    "choices": [
      "To test the compressor's ability to pull and hold a deep vacuum before start-up",
      "To remove air and boil off moisture so neither contaminates the new charge",
      "To remove residual oil from the piping",
      "To seat the valves before pressure testing"
    ],
    "answer": 1,
    "explanation": "Evacuation removes noncondensables and — by dropping the pressure below water's vapor pressure — boils moisture out of the system. Water at low pressure boils at room temperature, so a deep vacuum literally dries the system. Oil stays put; vacuum does not remove it."
  },
  {
    "id": "s8-002",
    "section": 8,
    "sectionName": "Dehydration and Evacuation",
    "question": "What instrument measures the deep vacuum reached during evacuation?",
    "choices": [
      "A compound manifold gauge reading inches of mercury",
      "An electronic micron gauge",
      "A sling psychrometer",
      "A halide torch"
    ],
    "answer": 1,
    "explanation": "The last inch of mercury spans the entire range that matters for dehydration, so a compound gauge cannot resolve it. A micron gauge reads in microns (thousandths of a millimeter of mercury; 25,400 microns = 1 inch Hg) and shows whether the system has truly reached, say, 500 microns and whether it holds there after isolation — the standing test that separates a dry, tight system from a wet or leaking one."
  },
  {
    "id": "s8-003",
    "section": 8,
    "sectionName": "Dehydration and Evacuation",
    "question": "After evacuation, the pump is isolated and the micron gauge rises steadily without leveling off. What does that indicate?",
    "choices": [
      "Moisture is still boiling off in the system",
      "The system has a leak letting air in",
      "The vacuum pump oil is fresh",
      "The system is fully dehydrated"
    ],
    "answer": 1,
    "explanation": "A continuous, unbounded rise means something is feeding the vacuum from outside: a leak. Moisture produces a rise that stalls near water's vapor pressure for the ambient temperature (a few thousand microns) as the remaining water boils; a tight, dry system rises slightly and levels off. Reading the shape of the decay curve is the point of the standing test."
  },
  {
    "id": "s8-004",
    "section": 8,
    "sectionName": "Dehydration and Evacuation",
    "question": "Which factors most affect how quickly a vacuum pump can dehydrate a system?",
    "choices": [
      "The color and length of the gauge hoses",
      "The brand of refrigerant previously charged in the system and the DOT color code stamped on its cylinder",
      "Ambient temperature, moisture present, pump capacity, and the size and restriction of the connections",
      "The phase of the compressor motor"
    ],
    "answer": 2,
    "explanation": "Warm systems give up moisture faster (more vapor pressure to work against the vacuum), less water means less to boil, a larger pump moves more vapor, and short, wide, core-less connections stop throttling the flow. Cold weather is the enemy: below about 40 °F, moisture may barely move, and gentle heat on the low spots does more than hours of pumping."
  },
  {
    "id": "s8-005",
    "section": 8,
    "sectionName": "Dehydration and Evacuation",
    "question": "Why is vacuum pump oil changed frequently, even mid-job on a wet system?",
    "choices": [
      "Moisture absorbed into the oil raises the pump's attainable vacuum limit, so it cannot pull the system down",
      "Old oil gradually turns acidic and etches the micron gauge's thermistor sensor, making its readings drift upward",
      "The oil evaporates into the system being evacuated",
      "New oil is required by DOT before transport"
    ],
    "answer": 0,
    "explanation": "The pump's ultimate vacuum is limited by the vapor pressure of its own oil; water pulled from the system dissolves into that oil and raises its vapor pressure, so a wet-oiled pump bottoms out thousands of microns high. Fresh, sealed vacuum pump oil — changed whenever it clouds or after evacuating a wet or burned system — restores the pump's depth."
  },

  /* ── Topic 9: Recovery Cylinders and Shipping (Core) ─────────────── */
  {
    "id": "s9-001",
    "section": 9,
    "sectionName": "Recovery Cylinders and Shipping",
    "question": "How full may a refrigerant recovery cylinder safely be filled?",
    "choices": [
      "To 95% of its water capacity by volume",
      "To no more than 80% of its capacity",
      "Until the pressure gauge reads the refrigerant's saturation pressure",
      "Completely full, if it will be emptied within 24 hours"
    ],
    "answer": 1,
    "explanation": "Cylinders are filled to at most 80%, leaving headspace for the liquid to expand as temperature rises. A liquid-full cylinder becomes hydrostatic: pressure climbs violently with each degree, and the cylinder can rupture. The fill is controlled by weight on a scale, backed by the machine's overfill protection."
  },
  {
    "id": "s9-002",
    "section": 9,
    "sectionName": "Recovery Cylinders and Shipping",
    "question": "What is the standard color scheme of a refrigerant recovery cylinder?",
    "choices": [
      "Solid green with a black band",
      "Gray body with a yellow top",
      "White body with a red top",
      "Solid safety orange"
    ],
    "answer": 1,
    "explanation": "Recovery cylinders are gray with yellow shoulders, which distinguishes them at a glance from the single-color cylinders refrigerant is sold in. Only cylinders built and rated for recovery — with the required service pressure and DOT specification for the refrigerant — may be filled; disposable shipping cylinders must never be refilled."
  },
  {
    "id": "s9-003",
    "section": 9,
    "sectionName": "Recovery Cylinders and Shipping",
    "question": "May the white disposable cylinders that virgin refrigerant is sold in be reused for recovery?",
    "choices": [
      "Yes, once, if a vacuum is pulled on them first",
      "Yes, for the same refrigerant type only, after a DOT hydrostatic retest and restamp of the shell",
      "No — refilling disposable cylinders is dangerous and prohibited by DOT regulations",
      "Yes, if the one-way valve is drilled out"
    ],
    "answer": 2,
    "explanation": "Disposables are thin-walled, one-trip containers with a one-way valve, not rated for refilling; DOT regulations prohibit reusing them and cylinders have ruptured when people tried. An 'empty' disposable still holds vapor, which is recovered before the cylinder is marked, its valve opened or punctured, and the shell sent for recycling."
  },
  {
    "id": "s9-004",
    "section": 9,
    "sectionName": "Recovery Cylinders and Shipping",
    "question": "How often must a refillable refrigerant recovery cylinder be retested under DOT rules?",
    "choices": [
      "Every year",
      "Every 5 years",
      "Every 10 years",
      "Never, if it shows no visible damage"
    ],
    "answer": 1,
    "explanation": "DOT-specification refillable cylinders used for refrigerant are requalified — hydrostatically tested or otherwise requalified per their spec — every five years, with the test date stamped on the cylinder. A cylinder out of test date, or one showing dents, gouges, or heavy rust, must not be filled or transported full."
  },
  {
    "id": "s9-005",
    "section": 9,
    "sectionName": "Recovery Cylinders and Shipping",
    "question": "When transporting a recovery cylinder of used refrigerant to a reclaimer, the cylinder should be:",
    "choices": [
      "Labeled with the refrigerant it contains, secured upright, and shipped with the required DOT hazard communication",
      "Laid flat with the valve facing the rear bumper",
      "Left unlabeled so the reclaimer can test the contents fresh",
      "Vented down to atmospheric pressure before loading, because DOT rules forbid transporting any cylinder above 25 psig"
    ],
    "answer": 0,
    "explanation": "Refrigerants ship as class 2.2 nonflammable compressed gases: the cylinder carries its refrigerant identification and DOT markings, valve caps on, secured upright so the relief device stays in the vapor space. Venting for transport is both illegal and pointless, and an unlabeled cylinder is one a reclaimer may refuse."
  },
  {
    "id": "s9-006",
    "section": 9,
    "sectionName": "Recovery Cylinders and Shipping",
    "question": "Why does an overfilled cylinder become dramatically more dangerous as it warms?",
    "choices": [
      "Warm refrigerant becomes chemically unstable",
      "With no vapor space left, thermal expansion of the liquid raises pressure hydrostatically",
      "The paint insulates the steel, concentrating heat at the valve",
      "The oil floats to the top and blocks the relief valve, letting pressure double every 10 degrees"
    ],
    "answer": 1,
    "explanation": "As long as vapor space remains, cylinder pressure follows the refrigerant's saturation curve. Once liquid fills the shell, there is nowhere for expansion to go: pressure climbs hundreds of psi for a few degrees of warming, and the relief valve or the shell gives way. The 80% fill limit exists to keep vapor space at any temperature the cylinder might meet — a truck bed in the sun, for instance."
  },

  /* ── Topic 10: Safety (Core) ─────────────────────────────────────── */
  {
    "id": "s10-001",
    "section": 10,
    "sectionName": "Safety",
    "question": "What is the main hazard of releasing a large amount of refrigerant in a confined equipment room?",
    "choices": [
      "The vapor is heavier than air and displaces oxygen, causing asphyxiation with little warning",
      "The vapor is lighter than air and collects at the ceiling, where it decomposes into carbon monoxide",
      "Refrigerant vapor is acutely poisonous at any concentration",
      "Static discharge from the vapor cloud"
    ],
    "answer": 0,
    "explanation": "Common refrigerant vapors are several times heavier than air, sink, and pool in low, enclosed spaces, pushing out the oxygen. They are mostly odorless, so there is little warning before dizziness and unconsciousness. That is why machinery rooms have refrigerant monitors and ventilation, and why a technician never enters a suspected release without ventilation and, where required, a self-contained breathing apparatus."
  },
  {
    "id": "s10-002",
    "section": 10,
    "sectionName": "Safety",
    "question": "What happens when refrigerant vapor is drawn through an open flame, such as a halide torch or a burning cigarette?",
    "choices": [
      "Nothing; fluorinated refrigerants are thermally stable and pass through a flame chemically unchanged",
      "It decomposes into toxic gases, including hydrochloric and hydrofluoric acids and possibly phosgene",
      "It burns off cleanly into water vapor",
      "It extinguishes the flame harmlessly"
    ],
    "answer": 1,
    "explanation": "At high temperature, halogenated refrigerants break down into hydrogen fluoride, hydrogen chloride, and other toxic products — with chlorinated refrigerants, even phosgene. The same danger arises when brazing on a system that still contains refrigerant, which is one more reason lines are recovered and purged with nitrogen before heat is applied."
  },
  {
    "id": "s10-003",
    "section": 10,
    "sectionName": "Safety",
    "question": "Before cutting or unsweating any sealed refrigeration component, a technician must first:",
    "choices": [
      "Verify with gauges that the system pressure has been recovered to the required level",
      "Chill the component with liquid CO2 until the refrigerant inside freezes into a solid plug",
      "Loosen the component while the compressor runs",
      "Spray the joint with soap solution"
    ],
    "answer": 0,
    "explanation": "Opening a component that still holds pressure turns it into a projectile and sprays refrigerant and oil; liquid refrigerant on skin causes frostbite. Gauges must confirm the recovery took the system to the required level and that pressure is not rebounding before any joint is opened or heat applied."
  },
  {
    "id": "s10-004",
    "section": 10,
    "sectionName": "Safety",
    "question": "Which personal protective equipment applies when transferring liquid refrigerant?",
    "choices": [
      "Butyl-lined gloves and safety glasses or goggles, against frostbite and splash",
      "A leather apron only",
      "Hearing protection only",
      "No PPE is needed for nonflammable refrigerants; class A1 products are rated nonhazardous"
    ],
    "answer": 0,
    "explanation": "Liquid refrigerant flashes to vapor at skin temperature and freezes what it touches; a splash in the eye is an emergency. Gloves rated for refrigerant and eye protection are the baseline for any transfer, on top of whatever the job site adds. Nonflammable does not mean harmless."
  },
  {
    "id": "s10-005",
    "section": 10,
    "sectionName": "Safety",
    "question": "Why is dry nitrogen — never oxygen or compressed air — used to pressure-test a refrigeration system?",
    "choices": [
      "Nitrogen is simply cheaper than compressed air, which must be dried on site at extra cost per cubic foot",
      "Oxygen or air mixed with refrigerant and oil under pressure can explode; nitrogen is inert and dry",
      "Air corrodes the gauges",
      "Nitrogen glows visibly at leak points"
    ],
    "answer": 1,
    "explanation": "Compressed oxygen in contact with oil is an explosion waiting for ignition, and even ordinary air mixed with certain refrigerants under pressure forms combustible mixtures (R-22 among them, at elevated pressures). Dry nitrogen is inert, moisture-free, and cheap insurance — always applied through a regulator with a relief valve, since a full bottle holds over 2,000 psi."
  },
  {
    "id": "s10-006",
    "section": 10,
    "sectionName": "Safety",
    "question": "When pressurizing a system with nitrogen for leak testing, the pressure must never exceed:",
    "choices": [
      "The nitrogen bottle's own pressure",
      "The system's low-side design pressure, doubled to provide the safety margin ASHRAE 15 requires",
      "The equipment's nameplate test pressure — the lowest rated component sets the limit",
      "500 psi on any system"
    ],
    "answer": 2,
    "explanation": "The safe test pressure comes off the nameplate — and it is the weakest-rated part of the system, often the low side, that sets the ceiling. Exceeding it can burst a heat exchanger or rupture a relief device. The nitrogen regulator is set below that figure with a relief valve in the line, because the bottle itself could deliver far more."
  },
  {
    "id": "s10-007",
    "section": 10,
    "sectionName": "Safety",
    "question": "A technician must ventilate or evacuate the work area if a large refrigerant leak occurs indoors. Which device warns of dangerously low oxygen in a machinery room?",
    "choices": [
      "A halide torch mounted at floor level, where its flame color shifts as oxygen falls",
      "An oxygen deprivation sensor or refrigerant monitor required for the room",
      "A micron gauge",
      "A sling psychrometer"
    ],
    "answer": 1,
    "explanation": "Modern mechanical codes require machinery rooms to carry refrigerant detectors or oxygen sensors that alarm and start ventilation before concentrations become dangerous. Personal instruments do the same for the technician entering. A halide torch detects leaks, not livability, and using flame in a vapor-filled room creates toxic decomposition products."
  },
  {
    "id": "s10-008",
    "section": 10,
    "sectionName": "Safety",
    "question": "What additional precautions come with handling A2L refrigerants such as R-32 and R-454B?",
    "choices": [
      "None; A2L refrigerants are handled exactly like A1 refrigerants",
      "Eliminating ignition sources, ventilating the work area, and using equipment rated for flammable refrigerants",
      "Storing cylinders upside down to keep vapor off the valve",
      "Working only at temperatures below freezing, where A2L vapor stays below its lower flammability limit and cannot ignite"
    ],
    "answer": 1,
    "explanation": "A2L refrigerants are mildly flammable: hard to ignite, but a dense vapor cloud near an ignition source can burn. Handling them means ventilation, no open flames or sparking tools in the vapor zone, recovery machines and detectors rated for A2L service, and strict recovery-then-nitrogen-purge before brazing — the habits that were good practice with A1 refrigerants become mandatory."
  },

  /* ── Topic 11: The HFC Phasedown and the AIM Act (Core) ──────────── */
  {
    "id": "s11-001",
    "section": 11,
    "sectionName": "The HFC Phasedown and the AIM Act",
    "question": "Why are HFC refrigerants such as R-410A and R-134a being phased down when they contain no chlorine?",
    "choices": [
      "They deplete ozone through their fluorine content, which breaks apart ozone in the stratosphere exactly as chlorine radicals do",
      "They are potent greenhouse gases, with global warming potentials hundreds to thousands of times that of carbon dioxide",
      "They are all flammable",
      "They decompose into CFCs in the upper atmosphere"
    ],
    "answer": 1,
    "explanation": "HFCs are safe for the ozone layer but trap heat ferociously — R-410A's GWP is about 2,088 and R-134a's about 1,430. The AIM Act of 2020 directs EPA to phase down U.S. HFC production and consumption 85% by 2036, which is the pressure behind the industry's move to R-454B, R-32, R-1234yf, and other low-GWP refrigerants."
  },
  {
    "id": "s11-002",
    "section": 11,
    "sectionName": "The HFC Phasedown and the AIM Act",
    "question": "How does the AIM Act phase down HFCs?",
    "choices": [
      "By banning continued use of existing HFC equipment on a fixed schedule beginning in 2025",
      "By capping U.S. HFC production and import with allowances that shrink on a set schedule",
      "By taxing HFC sales by the pound",
      "By requiring every HFC system to be retrofitted to CO2"
    ],
    "answer": 1,
    "explanation": "Like the Montreal Protocol phaseouts before it, the AIM Act works on supply: EPA issues production and consumption allowances that step down — 90% of baseline in 2022, 60% in 2024, 30% in 2029, reaching 15% from 2036. Existing equipment keeps running; what tightens is the supply of new refrigerant, which makes recovery and reclamation steadily more valuable."
  },
  {
    "id": "s11-003",
    "section": 11,
    "sectionName": "The HFC Phasedown and the AIM Act",
    "question": "What refrigerant limit applies to new residential and light-commercial air conditioners and heat pumps manufactured on or after January 1, 2025?",
    "choices": [
      "The refrigerant must have a global warming potential of 700 or less",
      "The refrigerant must be nonflammable, with an ASHRAE class A1 rating",
      "The refrigerant must be a natural refrigerant such as propane",
      "No limit applies until 2030"
    ],
    "answer": 0,
    "explanation": "EPA's Technology Transitions rule caps the GWP of the refrigerant in newly manufactured residential and light-commercial AC and heat pump systems at 700 from January 1, 2025. R-410A (GWP ~2,088) fails that test; R-454B (~466) and R-32 (~675) pass, and both are A2L mildly flammable — the biggest change in field practice in a generation. Systems manufactured before 2025 may still be sold and installed."
  },
  {
    "id": "s11-004",
    "section": 11,
    "sectionName": "The HFC Phasedown and the AIM Act",
    "question": "Since January 1, 2026, EPA's AIM Act refrigerant-management rule extends leak-repair duties to appliances containing 15 pounds or more of an HFC refrigerant with a GWP above 53. How does that compare to the older Section 608 leak rules?",
    "choices": [
      "It is identical to the old rule in every respect",
      "It lowers the charge threshold from 50 to 15 pounds and reaches HFC appliances, which the ozone-focused rules no longer covered",
      "It repeals the leak repair requirements entirely, replacing them with voluntary annual reporting under EPA's GreenChill partnership",
      "It applies only to CFC appliances built before 1996"
    ],
    "answer": 1,
    "explanation": "The 2024 Emissions Reduction and Reclamation rule (40 CFR Part 84) brought leak repair to HFC-charged equipment starting January 1, 2026 — at 15 pounds and up, versus the 50-pound floor of the ozone-era rule, which since 2020 has applied only to appliances containing ozone-depleting refrigerant. The familiar trigger rates carry over: 30% for industrial process refrigeration, 20% commercial refrigeration, 10% comfort cooling. Residential AC and heat pumps are exempt from the HFC leak-repair subsector.",
    "manual": "aim",
    "ref": "§ 84.106",
    "page": "84.106"
  },
  {
    "id": "s11-005",
    "section": 11,
    "sectionName": "The HFC Phasedown and the AIM Act",
    "question": "What does the AIM Act's reclamation rule require of refrigerant sold as 'reclaimed' from January 1, 2026?",
    "choices": [
      "It must be at least 99% virgin refrigerant, blended with no more than 1% recovered material by weight",
      "It may contain no more than 15% virgin HFC by weight — the rest must be genuinely recovered material",
      "It must be dyed green for identification",
      "It may only be sold to the original owner"
    ],
    "answer": 1,
    "explanation": "To keep 'reclaimed' from meaning 'mostly new refrigerant in a reclaimer's cylinder', the rule caps the virgin HFC content of reclaimed refrigerant at 15% by weight. And from January 1, 2029, servicing supermarket systems, refrigerated transport, and automatic commercial ice makers must use reclaimed refrigerant — recovered refrigerant becomes the supply the industry runs on.",
    "manual": "aim",
    "ref": "§ 84.112",
    "page": "84.112"
  },
  {
    "id": "s11-006",
    "section": 11,
    "sectionName": "The HFC Phasedown and the AIM Act",
    "question": "What is the current status of disposable refrigerant cylinders in the United States?",
    "choices": [
      "They have been banned since January 1, 2023, when the D.C. Circuit upheld EPA's refillable-cylinder and QR-code tracking requirements in full",
      "They remain legal — the 2021 ban was vacated in court — but from 2028 used disposables with a heel must be sent for heel recovery",
      "They may only be used for flammable refrigerants",
      "They must all carry QR tracking codes"
    ],
    "answer": 1,
    "explanation": "EPA's 2021 rule would have required refillable cylinders and QR-code tracking, but the D.C. Circuit vacated those provisions in 2023, so disposables stay on the market. What survives is the heel requirement: from January 1, 2028, a used disposable cylinder still holding residual refrigerant must be sent for heel removal and evacuation before disposal — the vapor left in an 'empty' is real refrigerant, and venting it is illegal.",
    "manual": "aim",
    "ref": "§ 84.116",
    "page": "84.116"
  },

  /* ── Topic 12: Type I Small Appliances and Requirements ──────────── */
  {
    "id": "s12-001",
    "section": 12,
    "sectionName": "Type I: Small Appliances and Requirements",
    "question": "What is a 'small appliance' under the Section 608 rules?",
    "choices": [
      "Any appliance charged with less than 20 pounds of refrigerant, whether sealed at the factory or assembled in the field",
      "An appliance fully manufactured, charged, and hermetically sealed in a factory with 5 pounds or less of refrigerant",
      "Any appliance a technician can carry alone",
      "Any appliance running an exempt refrigerant"
    ],
    "answer": 1,
    "explanation": "All three parts matter: factory-made, factory-charged, hermetically sealed, and holding five pounds or less. Household refrigerators and freezers, window and portable room air conditioners, packaged terminal air conditioners and heat pumps, dehumidifiers, under-counter ice makers, vending machines, and water coolers are the rule's own examples.",
    "manual": "cfr608",
    "ref": "§ 82.152",
    "page": "82.152"
  },
  {
    "id": "s12-002",
    "section": 12,
    "sectionName": "Type I: Small Appliances and Requirements",
    "question": "Which of these is NOT a small appliance, even if its charge is under 5 pounds?",
    "choices": [
      "A residential split-system air conditioner, because it is charged in the field rather than hermetically sealed at the factory",
      "A window air conditioner, because its refrigerant circulates between two separate coils rather than remaining in one sealed circuit",
      "A household freezer",
      "A drinking water cooler"
    ],
    "answer": 0,
    "explanation": "A split system's refrigerant circuit is assembled and charged at installation, so it fails the 'fully manufactured, charged, and hermetically sealed in a factory' test regardless of charge size — its service belongs to Type II. The factory-sealed window unit, freezer, and water cooler are textbook small appliances.",
    "manual": "cfr608",
    "ref": "§ 82.152",
    "page": "82.152"
  },
  {
    "id": "s12-003",
    "section": 12,
    "sectionName": "Type I: Small Appliances and Requirements",
    "question": "Using recovery equipment built after November 15, 1993, how much of a small appliance's charge must be recovered?",
    "choices": [
      "90% when the compressor operates, 80% when it does not — or evacuation to 4 inches Hg vacuum",
      "100% of the nameplate charge in all cases, verified by weighing the recovery cylinder before and after",
      "50% regardless of compressor condition",
      "Whatever the technician judges practical"
    ],
    "answer": 0,
    "explanation": "The small-appliance standard is stated both as a percentage and as a vacuum: recover 90 percent of the charge with the compressor running, 80 percent with a dead compressor — a dead compressor keeps refrigerant dissolved in its oil — or, either way, pull the system down to 4 inches of mercury vacuum. Older pre-1993 equipment is held to 80 percent.",
    "manual": "cfr608",
    "ref": "§ 82.156",
    "page": "82.156"
  },
  {
    "id": "s12-004",
    "section": 12,
    "sectionName": "Type I: Small Appliances and Requirements",
    "question": "What is the difference between self-contained and system-dependent recovery equipment?",
    "choices": [
      "Self-contained equipment has its own means of pulling refrigerant out; system-dependent equipment needs the appliance's own components to move the charge",
      "Self-contained equipment is battery powered so it can run where no outlet exists; system-dependent equipment draws power from the appliance's own line-voltage circuit",
      "System-dependent equipment works only on low-pressure chillers",
      "They are two names for the same machines"
    ],
    "answer": 0,
    "explanation": "A self-contained recovery machine can empty an appliance on its own. System-dependent equipment — the charge-migration bags and pump-out arrangements of Type I work — recruits the appliance's compressor or pressure to do the moving, which is why it is limited to appliances with charges of 15 pounds or less.",
    "manual": "cfr608",
    "ref": "§ 82.152",
    "page": "82.152"
  },
  {
    "id": "s12-005",
    "section": 12,
    "sectionName": "Type I: Small Appliances and Requirements",
    "question": "System-dependent recovery equipment may be used on appliances holding at most:",
    "choices": [
      "5 pounds of refrigerant",
      "15 pounds of refrigerant",
      "50 pounds of refrigerant",
      "200 pounds of refrigerant"
    ],
    "answer": 1,
    "explanation": "The 15-pound line is where system-dependent recovery ends: above it, only self-contained equipment may be used (a permanently attached pump-out unit being the exception). Note the two numbers side by side — a small appliance is 5 pounds or less, but system-dependent equipment is allowed up to 15.",
    "manual": "cfr608",
    "ref": "§ 82.156",
    "page": "82.156"
  },
  {
    "id": "s12-006",
    "section": 12,
    "sectionName": "Type I: Small Appliances and Requirements",
    "question": "Does disposing of a refrigerator at the curb-side pickup or scrap yard stage require Section 608 certification?",
    "choices": [
      "No — disposal of small appliances requires no certification, though the refrigerant must still be recovered first",
      "Yes, Universal certification",
      "Yes, Type III certification",
      "Only if the refrigerator still contains R-12, since CFC recovery at disposal must be done by a certified technician"
    ],
    "answer": 0,
    "explanation": "Certification attaches to maintenance, service, and repair; the rule exempts disposal of small appliances (and MVACs and MVAC-like appliances) from the technician requirement. The refrigerant must still come out before the crusher — the safe-disposal rule's recovery and signed-statement machinery sees to that — but the person doing that recovery step for disposal is not required to hold a card.",
    "manual": "cfr608",
    "ref": "§ 82.161",
    "page": "82.161"
  },

  /* ── Topic 13: Type I Recovery Techniques and Safety ─────────────── */
  {
    "id": "s13-001",
    "section": 13,
    "sectionName": "Type I: Recovery Techniques and Safety",
    "question": "How does a technician get access to the sealed refrigerant circuit of a household refrigerator that has no service ports?",
    "choices": [
      "By installing a piercing access valve on the process stub or tubing",
      "By drilling directly into the dome of the compressor shell above the oil level",
      "By snapping off the capillary tube",
      "By heating a joint until it opens"
    ],
    "answer": 0,
    "explanation": "Hermetic small appliances are entered through a piercing valve clamped onto the process stub — the stub the rule requires small appliances to have. Solderless piercing valves tend to leak over time, so they are for the service call, not for leaving behind: a permanent access fitting is brazed on if ongoing access is needed."
  },
  {
    "id": "s13-002",
    "section": 13,
    "sectionName": "Type I: Recovery Techniques and Safety",
    "question": "Why should a solderless piercing access valve not be left permanently on a small appliance?",
    "choices": [
      "They tend to leak over time",
      "They void the UL listing",
      "They corrode the cabinet",
      "They prevent the compressor from starting"
    ],
    "answer": 0,
    "explanation": "The rubber-gasket seal of a clamp-on piercing valve is a temporary one; left in place it becomes a slow leak that defeats the recovery it enabled. If the appliance needs lasting access, the piercing valve's job ends with the service and a brazed-on valve takes its place."
  },
  {
    "id": "s13-003",
    "section": 13,
    "sectionName": "Type I: Recovery Techniques and Safety",
    "question": "When recovering from a small appliance whose compressor does not run, what helps free the refrigerant trapped in the compressor oil?",
    "choices": [
      "Gently heating and tapping the compressor, and pulling from both the high and low sides of the system",
      "Filling the system with nitrogen first to strip the refrigerant out of the oil by bubbling through it",
      "Inverting the appliance",
      "Packing the compressor in ice"
    ],
    "answer": 0,
    "explanation": "A dead compressor's cold oil holds refrigerant in solution, which is exactly why the recovery standard drops from 90 to 80 percent when the compressor cannot run. Warmth and a few taps knock the dissolved refrigerant out of the oil, and accessing both sides of the system keeps a stuck expansion device from stranding half the charge."
  },
  {
    "id": "s13-004",
    "section": 13,
    "sectionName": "Type I: Recovery Techniques and Safety",
    "question": "Why can't an ordinary vacuum pump serve as recovery equipment?",
    "choices": [
      "A vacuum pump discharges whatever it pumps to the atmosphere — using one on a charged system is venting",
      "Vacuum pumps are too slow",
      "Vacuum pump oil absorbs refrigerant permanently, so the charge can never be recovered back out of it for reclamation",
      "Vacuum pumps cannot reach 4 inches of mercury"
    ],
    "answer": 0,
    "explanation": "A vacuum pump has no place to put refrigerant except out its exhaust. Recovery equipment captures the charge into a cylinder; the vacuum pump's role comes later, evacuating air and moisture from a system that has already been recovered and repaired. Pumping a charge through one into the shop air is a venting violation."
  },
  {
    "id": "s13-005",
    "section": 13,
    "sectionName": "Type I: Recovery Techniques and Safety",
    "question": "In a system-dependent recovery using the appliance's own operating compressor, where does the charge go?",
    "choices": [
      "Into a non-pressurized container or bag connected to the high side, driven by the appliance's compressor",
      "Out through a purge valve to the atmosphere",
      "Into the appliance's own condenser for storage, isolated there by front-seating the king valve until repairs finish",
      "Into the vacuum pump's oil reservoir"
    ],
    "answer": 0,
    "explanation": "System-dependent recovery turns the appliance's compressor into the recovery pump: it discharges the charge into a recovery bag or vessel on the high side while the technician watches pressure fall. It works only while the appliance can run and only on small charges — which is why the method is capped at 15 pounds and the 90/80 percent standard exists."
  },
  {
    "id": "s13-006",
    "section": 13,
    "sectionName": "Type I: Recovery Techniques and Safety",
    "question": "A recovered household freezer's compressor had a burnout. What extra care applies to the recovered refrigerant and equipment?",
    "choices": [
      "Treat the refrigerant as acid-contaminated and keep it in a separate cylinder for reclamation",
      "None; small charges cannot carry acid",
      "The refrigerant may be vented since it is contaminated",
      "The refrigerant can be reused immediately in another freezer once it passes a sight-glass moisture check"
    ],
    "answer": 0,
    "explanation": "Burnout acid does not care how small the system is. The charge still must be recovered — contamination never legalizes venting — but it goes into a dedicated cylinder bound for reclamation or destruction, and the machine's filter-drier is changed so the acid does not season the next recovery."
  },

  /* ── Topic 14: Type II System Types and Evacuation Requirements ──── */
  {
    "id": "s14-001",
    "section": 14,
    "sectionName": "Type II: System Types and Evacuation Requirements",
    "question": "What defines a high-pressure appliance under the current rule?",
    "choices": [
      "One using a refrigerant whose liquid-phase saturation pressure is between 170 and 355 psia at 104 °F — R-22, R-407C, R-410A, and R-502 among them",
      "Any appliance whose high-side gauge reads above 100 psig at any point in the cycle, measured at the compressor discharge service valve with the unit at full load",
      "Any appliance over 50 pounds of charge",
      "One with a discharge line hotter than 200 °F"
    ],
    "answer": 0,
    "explanation": "The categories follow the refrigerant's saturation pressure at 104 °F: high-pressure spans 170–355 psia, very high-pressure sits above 355 psia (or a critical temperature below 104 °F), and low-pressure below 45 psia. The refrigerant, not the gauge reading or charge size, decides which certification and which evacuation levels apply.",
    "manual": "cfr608",
    "ref": "§ 82.152",
    "page": "82.152"
  },
  {
    "id": "s14-002",
    "section": 14,
    "sectionName": "Type II: System Types and Evacuation Requirements",
    "question": "R-13, R-23, and R-508B belong to which appliance category?",
    "choices": [
      "Very high-pressure appliances — refrigerants with saturation pressure above 355 psia at 104 °F or a critical temperature below 104 °F",
      "Medium-pressure appliances — refrigerants whose saturation pressure runs between 200 and 300 psia at 104 °F under the old pre-2016 rule",
      "Low-pressure appliances",
      "Small appliances"
    ],
    "answer": 0,
    "explanation": "These cascade-system and ultra-low-temperature refrigerants are so volatile that they exceed 355 psia at 104 °F or cannot exist as liquid at that temperature at all. Their required evacuation level is 0 inches of vacuum — essentially atmospheric — because pulling deeper buys little with vapor this energetic. They fall under Type II certification.",
    "manual": "cfr608",
    "ref": "§ 82.152",
    "page": "82.152"
  },
  {
    "id": "s14-003",
    "section": 14,
    "sectionName": "Type II: System Types and Evacuation Requirements",
    "question": "The current rule also defines a medium-pressure category. Which refrigerants land there?",
    "choices": [
      "Those between 45 and 170 psia at 104 °F, such as R-12, R-134a, R-124, and R-500",
      "R-22 and R-410A, which the 2016 revision moved down from the high-pressure band",
      "R-11 and R-123",
      "R-23 and R-508B"
    ],
    "answer": 0,
    "explanation": "The 2016 revision split the old high-pressure band: 45–170 psia at 104 °F is now 'medium-pressure', catching R-12, R-134a, R-114, R-124, and R-500. Older study material folds these into high-pressure. Either way they are Type II equipment, with their own rows in the evacuation tables.",
    "manual": "cfr608",
    "ref": "§ 82.152",
    "page": "82.152"
  },
  {
    "id": "s14-004",
    "section": 14,
    "sectionName": "Type II: System Types and Evacuation Requirements",
    "question": "Using current recovery equipment, to what level must a high-pressure appliance with a full charge of less than 200 pounds be evacuated before disposal or a major repair?",
    "choices": [
      "0 inches Hg vacuum — that is, down to atmospheric pressure",
      "10 inches Hg vacuum, using equipment manufactured after 1993",
      "15 inches Hg vacuum",
      "500 microns"
    ],
    "answer": 0,
    "explanation": "The current evacuation table asks 0 inches of vacuum for high-pressure appliances under 200 pounds, 10 inches at 200 pounds and over (with post-1993 equipment), and 15 inches for the largest medium-pressure appliances. Deep-vacuum figures like 500 microns belong to dehydration before charging, not to recovery.",
    "manual": "cfr608",
    "ref": "§ 82.156",
    "page": "82.156"
  },
  {
    "id": "s14-005",
    "section": 14,
    "sectionName": "Type II: System Types and Evacuation Requirements",
    "question": "A technician replaces a pressure control — a repair that is not 'major' and will not leave the system open to the atmosphere. What evacuation is required first?",
    "choices": [
      "Pressure reduced to no higher than 0 psig, rather than the full table vacuum",
      "Evacuation to 10 inches Hg regardless, since all repairs share one table level",
      "None; small parts may be changed under pressure",
      "A 24-hour standing vacuum test"
    ],
    "answer": 0,
    "explanation": "For non-major repairs not followed by an evacuation to the atmosphere, the requirement relaxes to bringing the pressure to 0 psig; for oil changes it is 5 psig. 'Major' means removing the compressor, condenser, evaporator, or an auxiliary heat-exchange coil — or opening more than 4 square inches of flow area for over 15 minutes — and major work gets the full table levels.",
    "manual": "cfr608",
    "ref": "§ 82.156",
    "page": "82.156"
  },
  {
    "id": "s14-006",
    "section": 14,
    "sectionName": "Type II: System Types and Evacuation Requirements",
    "question": "Leaks in a system make the required evacuation level unattainable. What does the rule allow?",
    "choices": [
      "Isolating and evacuating intact sections to the required level, and pulling the leaking portion as low as attainable without substantially contaminating the refrigerant — never above 0 psig",
      "Skipping recovery entirely and venting the remainder",
      "Pressurizing the system with dry nitrogen to 150 psig and blowing the remaining charge out through the recovery machine, since § 82.156 permits nitrogen-assisted clearing of leaking systems",
      "Waiting for the system to leak itself empty"
    ],
    "answer": 0,
    "explanation": "A leaking system pulls air in as the vacuum deepens, contaminating the recovered charge — so the rule permits stopping short: isolate what can be isolated, take the tight sections to the table level, and take the leaky section to the lowest level attainable without substantial contamination, no higher than 0 psig. It is an exception for physics, not an excuse to skip recovery.",
    "manual": "cfr608",
    "ref": "§ 82.156",
    "page": "82.156"
  },
  {
    "id": "s14-007",
    "section": 14,
    "sectionName": "Type II: System Types and Evacuation Requirements",
    "question": "What must be true of every hose set on certified recovery equipment?",
    "choices": [
      "Fitted with low-loss fittings that close automatically or can be closed manually when disconnected",
      "Rated to 10,000 psi burst pressure and hydrostatically retested each year under DOT hose regulations",
      "Made of clear material for flow inspection",
      "No longer than 18 inches"
    ],
    "answer": 0,
    "explanation": "Low-loss fittings trap the refrigerant standing in a hose at disconnect instead of spitting it into the room; they are required on all hoses of certified recovery and recycling equipment, and the little that still escapes through them is the kind of de minimis release the venting prohibition tolerates.",
    "manual": "cfr608",
    "ref": "§ 82.158",
    "page": "82.158"
  },
  {
    "id": "s14-008",
    "section": 14,
    "sectionName": "Type II: System Types and Evacuation Requirements",
    "question": "Who certifies that a model of recovery equipment meets the required performance standards?",
    "choices": [
      "An EPA-approved equipment testing organization, testing to the AHRI 740 standard",
      "The technician, by checking it monthly",
      "The equipment dealer, at the point of sale",
      "OSHA, which field-tests each machine against its 29 CFR refrigerant handling standard"
    ],
    "answer": 0,
    "explanation": "Recovery and recycling equipment is certified by testing organizations EPA has approved, against the AHRI 740-based test appendices (with a UL supplement for flammable-refrigerant machines), and carries a permanent certification label. The old requirement for owners to register their equipment with EPA is gone from the current rule.",
    "manual": "cfr608",
    "ref": "§ 82.158",
    "page": "82.158"
  },

  /* ── Topic 15: Type II Recovery and Service Practices ────────────── */
  {
    "id": "s15-001",
    "section": 15,
    "sectionName": "Type II: Recovery and Service Practices",
    "question": "When recovering from a high-pressure system with a large charge, where should recovery begin?",
    "choices": [
      "From the vapor port only, since certified machines are barred from taking liquid directly",
      "From the liquid line, removing liquid first, then finishing with vapor recovery",
      "From the compressor discharge with the compressor running",
      "From the oil sump"
    ],
    "answer": 1,
    "explanation": "Removing liquid first moves the bulk of the charge many times faster than boiling it across as vapor; the remaining vapor is then pulled to the required evacuation level. Starting vapor-only on a large charge wastes hours, and running the appliance's own compressor to pump refrigerant out risks the compressor once pressure and oil flow fall."
  },
  {
    "id": "s15-002",
    "section": 15,
    "sectionName": "Type II: Recovery and Service Practices",
    "question": "Why should the technician note the appliance's oil level before and after a large recovery?",
    "choices": [
      "Recovery removes some oil with the refrigerant, and the oil taken out must be measured and replaced",
      "The oil level indicates how much refrigerant remains",
      "EPA requires a before-and-after oil log entry for every recovery under the Subpart F recordkeeping rules",
      "Oil level determines the recovery cylinder size"
    ],
    "answer": 0,
    "explanation": "Liquid refrigerant leaving a system carries lubricant with it, and the recovery machine's separator collects it. Measuring what came out and returning the same amount of fresh, correct oil keeps the compressor from starting up short. The oil that comes out is handled as used oil, not reused."
  },
  {
    "id": "s15-003",
    "section": 15,
    "sectionName": "Type II: Recovery and Service Practices",
    "question": "A technician is about to braze a repair on a system opened after recovery. What should flow through the pipe while brazing?",
    "choices": [
      "A gentle flow of dry nitrogen, displacing air so oxides do not form inside the tubing",
      "A trickle of refrigerant vapor to cool the joint",
      "Compressed shop air at 5 psig, keeping the joint cool and blowing debris clear of the braze",
      "Nothing; the pipe should be sealed at both ends"
    ],
    "answer": 0,
    "explanation": "Heating copper in air scales the inside of the tube with black cupric oxide, which flakes off into the refrigerant stream and lodges in expansion devices and driers. A low flow of dry nitrogen during brazing keeps oxygen away. Sealing the pipe instead would build pressure at the joint, and blowing refrigerant through it is both illegal and, in a flame, toxic."
  },
  {
    "id": "s15-004",
    "section": 15,
    "sectionName": "Type II: Recovery and Service Practices",
    "question": "After a compressor replacement on a high-pressure system, what is the correct sequence before returning it to service?",
    "choices": [
      "Charge immediately, then look for leaks by frost patterns",
      "Pressure-test with dry nitrogen, repair any leaks, evacuate to a deep vacuum verified with a micron gauge, then charge by the nameplate or by measured performance",
      "Evacuate to 500 microns first, then pressure-test with nitrogen through the same rig, because leaks show themselves faster against a vacuum than against positive pressure",
      "Run the new compressor dry for an hour to seat the rings"
    ],
    "answer": 1,
    "explanation": "Leak-test first — under nitrogen pressure, with soap solution or a detector — because finding a leak after evacuation means doing the evacuation again. Then pull the deep vacuum to dry the system, prove it holds on the micron gauge, and weigh in the charge. Charging before leak-testing turns any leak into a venting event."
  },
  {
    "id": "s15-005",
    "section": 15,
    "sectionName": "Type II: Recovery and Service Practices",
    "question": "What is the risk of recovering refrigerant from a system whose charge is mostly liquid into a machine set for vapor recovery?",
    "choices": [
      "There is none; recovery machines accept anything",
      "Liquid slugging can damage the recovery machine's compressor, which is built to pump vapor",
      "The liquid bypasses the machine's filter-drier and oil separator, carrying acid into the cylinder",
      "Liquid recovery voids the cylinder's DOT rating"
    ],
    "answer": 1,
    "explanation": "Like any compressor, the one in a recovery machine tolerates vapor, not incompressible liquid. Feeding liquid into a vapor inlet slugs it. Machines rated for liquid take it through a different path or meter it through an expansion device; otherwise the technician recovers liquid by push-pull or throttles the liquid feed while watching the machine."
  },

  /* ── Topic 16: Type II Leak Detection and Repair ─────────────────── */
  {
    "id": "s16-001",
    "section": 16,
    "sectionName": "Type II: Leak Detection and Repair",
    "question": "What is the preferred way to leak-test a system that has already lost its charge?",
    "choices": [
      "Recharge it fully with refrigerant and listen for hissing",
      "Pressurize with dry nitrogen — optionally with a trace of refrigerant for an electronic detector — and search the joints",
      "Pull a vacuum to 500 microns and watch the compound gauge overnight, since a rising needle pinpoints which joint is leaking",
      "Run the compressor and watch for oil spots"
    ],
    "answer": 1,
    "explanation": "Nitrogen supplies cheap, dry, legal test pressure. A small trace charge of refrigerant lets an electronic detector sniff the escaping mixture, and venting that trace mixture after an evacuated-system test is permitted. A vacuum test only proves a leak exists, not where; air rushing in cannot be sniffed, and the pressure difference across a vacuum is limited to one atmosphere."
  },
  {
    "id": "s16-002",
    "section": 16,
    "sectionName": "Type II: Leak Detection and Repair",
    "question": "Where do leaks most often show themselves on an operating high-pressure system?",
    "choices": [
      "As traces of oil at joints, flanges, and fittings, since escaping refrigerant carries lubricant with it",
      "As white frost forming on the condenser face and along the liquid line wherever the refrigerant flashes off",
      "As a rise in suction pressure",
      "As discoloration of the insulation only"
    ],
    "answer": 0,
    "explanation": "Refrigerant leaving a joint takes a fine mist of oil along, so an oil stain is the classic flag that narrows the search before the electronic detector or soap bubbles pin the spot. Frost patterns speak to restriction and charge problems, not necessarily to leaks."
  },
  {
    "id": "s16-003",
    "section": 16,
    "sectionName": "Type II: Leak Detection and Repair",
    "question": "An electronic (heated-diode or infrared) leak detector is most sensitive when the probe is moved:",
    "choices": [
      "Quickly along the top of the pipes and fittings, since warm refrigerant vapor is lighter than air and rises",
      "Slowly along the underside of joints and fittings, since refrigerant vapor is heavier than air and sinks",
      "In circles around the compressor only",
      "Against a strong fan blowing across the coil"
    ],
    "answer": 1,
    "explanation": "Refrigerant vapor sinks, so it pools beneath the leak; the probe travels slowly — an inch or two per second — under joints, valve stems, and flange bolts. Moving air disperses the plume, so fans go off and drafts get blocked during the search. Soap solution then confirms the exact spot before repair."
  },
  {
    "id": "s16-004",
    "section": 16,
    "sectionName": "Type II: Leak Detection and Repair",
    "question": "Under the leak repair rules, the owner of a large commercial refrigeration appliance whose leak rate crosses the trigger threshold must generally:",
    "choices": [
      "Have the leak repaired within 30 days, verify the repair with initial and follow-up tests, or else adopt a plan to retrofit or retire the appliance",
      "Shut the system down within 24 hours and keep it off line until an EPA regional inspector verifies the repair and signs off in writing on a restart",
      "Simply top the system off and note the amount added",
      "Replace the refrigerant with a different type"
    ],
    "answer": 0,
    "explanation": "The leak-repair machinery is the same in both regulatory regimes: crossing the trigger rate starts a 30-day repair clock (industrial process systems get 120 days when a shutdown is required), the repair is proven by an initial verification test and a follow-up test at operating conditions, and an owner who will not repair must file and follow a one-year retrofit or retirement plan. Records of it all are kept and leak inspections continue on schedule.",
    "manual": "cfr608",
    "ref": "§ 82.157",
    "page": "82.157"
  },
  {
    "id": "s16-005",
    "section": 16,
    "sectionName": "Type II: Leak Detection and Repair",
    "question": "How is an appliance's annualized leak rate determined for the leak-repair rules?",
    "choices": [
      "From the amount of refrigerant added at service, expressed as a percentage of the full charge per year",
      "By timing how long the low-pressure cutout takes to trip",
      "By the electronic detector's ppm reading at the worst joint",
      "By comparing suction pressure month over month and converting the drop to pounds of lost charge on a PT chart"
    ],
    "answer": 0,
    "explanation": "Every service addition is a measurement: pounds added over the period, scaled to a yearly rate and divided by the appliance's full charge. Adding 10 lbs to a 100-lb system three months after the last service is a 40% annualized rate. That arithmetic — not a detector reading — is what trips the trigger rates and starts the repair clock, and it is why charge additions must be recorded.",
    "manual": "cfr608",
    "ref": "§ 82.152",
    "page": "82.152"
  },
  {
    "id": "s16-006",
    "section": 16,
    "sectionName": "Type II: Leak Detection and Repair",
    "question": "Which appliances does the ozone-era leak repair rule in Subpart F apply to today?",
    "choices": [
      "Appliances with a full charge of 50 pounds or more containing class I or class II (ozone-depleting) refrigerant",
      "Every appliance with more than 5 pounds of charge, whatever the refrigerant it runs — HFC and HFO blends included",
      "Only supermarket systems",
      "Only appliances built before 1993"
    ],
    "answer": 0,
    "explanation": "Since April 2020, § 82.157 reaches only ODS-charged appliances of 50 pounds and up — an R-22 supermarket rack, say. HFC-charged equipment answers to the AIM Act's leak-repair rule at 40 CFR Part 84 from 2026, with its lower 15-pound floor. A technician working across old and new equipment is working under both regimes at once.",
    "manual": "cfr608",
    "ref": "§ 82.157",
    "page": "82.157"
  },
  {
    "id": "s16-007",
    "section": 16,
    "sectionName": "Type II: Leak Detection and Repair",
    "question": "After a large commercial refrigeration appliance (500+ pounds) exceeds its trigger leak rate, how often must it be inspected for leaks?",
    "choices": [
      "Quarterly, until it stays below the trigger rate for four quarters in a row",
      "Weekly, forever",
      "Once, at the time of repair",
      "Only when refrigerant is next added, at whatever interval that turns out to be"
    ],
    "answer": 0,
    "explanation": "Commercial and industrial process appliances of 500 pounds or more that have tripped the trigger rate get leak inspections every three months until four consecutive quarters come in below the trigger; 50-to-500-pound appliances and comfort cooling equipment are inspected annually. An automatic leak detection system that is audited and calibrated annually can stand in for the inspections.",
    "manual": "cfr608",
    "ref": "§ 82.157",
    "page": "82.157"
  },
  {
    "id": "s16-008",
    "section": 16,
    "sectionName": "Type II: Leak Detection and Repair",
    "question": "An appliance covered by the leak repair rule loses 125% or more of its full charge within a calendar year. What does that oblige the owner to do?",
    "choices": [
      "Report it to EPA by March 1 of the following year, describing the efforts to find and repair the leaks",
      "Nothing further, provided each individual leak was found and repaired inside its own 30-day repair window",
      "Destroy the appliance within 30 days",
      "Switch the appliance to a different refrigerant"
    ],
    "answer": 0,
    "explanation": "Leaking more refrigerant in a year than the system even holds marks a chronically leaking appliance, and the owner must report it to EPA by March 1 of the next year with an account of the leak-chasing done. It is the rule's backstop against topping off a sieve indefinitely while technically repairing each leak found.",
    "manual": "cfr608",
    "ref": "§ 82.157",
    "page": "82.157"
  },

  /* ── Topic 17: Type III Low-Pressure Systems ─────────────────────── */
  {
    "id": "s17-001",
    "section": 17,
    "sectionName": "Type III: Low-Pressure Systems",
    "question": "What kind of equipment is a 'low-pressure appliance', and what refrigerants does it use?",
    "choices": [
      "Centrifugal chillers running refrigerants that boil above room temperature at atmospheric pressure, such as CFC-11, HCFC-123, and now HFO-1233zd",
      "Household refrigerators running R-600a",
      "Supermarket rack systems running R-448A with suction held below atmospheric pressure by the case controllers, which qualifies them as low-pressure",
      "Rooftop units running R-410A"
    ],
    "answer": 0,
    "explanation": "Low-pressure appliances are the big centrifugal chillers whose refrigerants have such low vapor pressure that the low side runs in a vacuum — historically R-11, then R-123, today R-1233zd and R-514A. That vacuum operation reverses the usual failure mode: instead of leaking refrigerant out, an unsealed low-pressure chiller leaks air in."
  },
  {
    "id": "s17-002",
    "section": 17,
    "sectionName": "Type III: Low-Pressure Systems",
    "question": "Because a low-pressure chiller's evaporator operates below atmospheric pressure, leaks tend to:",
    "choices": [
      "Draw air and moisture into the machine rather than let refrigerant escape",
      "Spray liquid refrigerant outward under high pressure",
      "Be impossible, since a vacuum cannot leak",
      "Announce themselves as loud hissing as the vapor escapes under high pressure"
    ],
    "answer": 0,
    "explanation": "With the low side in a vacuum, atmospheric pressure pushes inward: air and its moisture seep into the machine through any imperfect joint. That is why low-pressure chillers carry purge units, why excessive purge run time is the classic sign of a leak, and why leak testing is done by bringing the machine up to a slight positive pressure — carefully."
  },
  {
    "id": "s17-003",
    "section": 17,
    "sectionName": "Type III: Low-Pressure Systems",
    "question": "What does a purge unit on a low-pressure chiller do?",
    "choices": [
      "It collects air and other noncondensables from the top of the condenser and expels them while returning captured refrigerant to the machine",
      "It removes oil from the evaporator",
      "It meters refrigerant in automatically from a float-fed reserve drum whenever the evaporator level sensor reads the operating charge as low",
      "It dries the chilled water loop"
    ],
    "answer": 0,
    "explanation": "Air drawn in through leaks collects at the condenser's high point. The purge unit continuously pulls from there, condenses and returns the refrigerant fraction, and discharges the noncondensables. A high-efficiency purge loses very little refrigerant per pound of air — and a purge that runs constantly is telling the operator the machine has a leak to find."
  },
  {
    "id": "s17-004",
    "section": 17,
    "sectionName": "Type III: Low-Pressure Systems",
    "question": "The rupture disc on a low-pressure chiller typically relieves at what pressure?",
    "choices": [
      "15 psig",
      "150 psig",
      "450 psig",
      "1 psig"
    ],
    "answer": 0,
    "explanation": "Low-pressure vessels are protected by a rupture disc set at 15 psig — these machines are simply not built for high pressure. That figure drives service practice: leak-testing pressure stays modest (10 psig is the customary maximum), and heat used to raise pressure is controlled, because a burst disc dumps the charge."
  },
  {
    "id": "s17-005",
    "section": 17,
    "sectionName": "Type III: Low-Pressure Systems",
    "question": "HCFC-123, common in low-pressure chillers, is classified B1 under ASHRAE 34. What does that require of its machine room?",
    "choices": [
      "Nothing beyond normal ventilation",
      "Refrigerant monitors, alarms, and ventilation sized for its low occupational exposure limit, since B means higher toxicity",
      "Explosion-proof electrical fittings throughout, with the room purged before any switch is thrown, since the B rating marks flammability",
      "An open-flame detector at floor level"
    ],
    "answer": 1,
    "explanation": "The B classification marks higher toxicity: R-123's allowable exposure limit is far lower than an A1 refrigerant's, so its equipment rooms carry refrigerant-specific monitors that alarm and drive mechanical ventilation, and service work may call for respiratory protection. It is nonflammable — the 1 — so explosion-proofing is not the concern; breathing it is."
  },

  /* ── Topic 18: Type III Charging, Recovery, and Evacuation ───────── */
  {
    "id": "s18-001",
    "section": 18,
    "sectionName": "Type III: Charging, Recovery, and Evacuation",
    "question": "Why must charging a low-pressure chiller begin with vapor rather than liquid?",
    "choices": [
      "Introducing cold liquid into a machine in a deep vacuum would drop tube temperatures below freezing and could freeze and rupture the water-filled evaporator tubes",
      "Liquid refrigerant entering against a deep vacuum would flood the purge unit and carry oil into the condenser, which ASHRAE 15 prohibits until the machine reaches 10 psig",
      "Vapor charging is required to lubricate the purge unit",
      "Liquid would dissolve the rupture disc"
    ],
    "answer": 0,
    "explanation": "In a vacuum, liquid refrigerant entering the machine flashes and refrigerates everything around it — including the evaporator tubes full of water. Charging starts with vapor until the saturation pressure corresponds to a temperature safely above freezing (about 36 °F), and only then switches to liquid to complete the charge. Freezing tubes is one of the two classic ways to wreck a chiller; the other is overpressurizing it."
  },
  {
    "id": "s18-002",
    "section": 18,
    "sectionName": "Type III: Charging, Recovery, and Evacuation",
    "question": "During recovery from a low-pressure chiller, why is the water kept circulating through the evaporator and condenser tubes?",
    "choices": [
      "Boiling refrigerant out of the machine chills it; moving water keeps the tubes from freezing and supplies the heat that vaporizes the remaining charge",
      "Circulation stirs the compressor oil into the refrigerant so both can be recovered in one liquid pull, as the AHRI 740 combined-recovery procedure requires",
      "The pumps must run to power the recovery machine",
      "Water flow closes the purge unit's relief valve"
    ],
    "answer": 0,
    "explanation": "Recovering the charge means boiling refrigerant off at ever lower pressure, and the heat for that boiling comes out of the machine and its water circuits. Stagnant water in the tubes can freeze and split them — a catastrophic repair. Running the water pumps keeps heat flowing in and tubes above freezing until recovery reaches its final level."
  },
  {
    "id": "s18-003",
    "section": 18,
    "sectionName": "Type III: Charging, Recovery, and Evacuation",
    "question": "Recovery from a low-pressure chiller removes the liquid first, then the vapor. What complicates the vapor stage compared with high-pressure work?",
    "choices": [
      "The vapor is at very low absolute pressure, so it takes a machine designed for deep vacuum and real time to pull the required final level, with refrigerant still outgassing from the oil the whole while",
      "The vapor is too hot for hoses",
      "Nothing; vapor recovery is instant on low-pressure machines",
      "The vapor must be compressed to 500 psig for storage in DOT-rated cylinders, and low-pressure recovery machines need a second-stage booster compressor certified under AHRI 740 to reach that storage pressure"
    ],
    "answer": 0,
    "explanation": "A low-pressure machine's charge sits near or below atmospheric pressure to begin with, so hauling the last of it out means pumping against a deep vacuum — slow, careful work with equipment built for it. Warm water circulation and patience free the refrigerant dissolved in the large oil charge; stopping early leaves pounds behind to vent through the first opened flange."
  },
  {
    "id": "s18-004",
    "section": 18,
    "sectionName": "Type III: Charging, Recovery, and Evacuation",
    "question": "Opening a low-pressure chiller for a major repair after recovery, the technician breaks the vacuum first. With what?",
    "choices": [
      "Dry nitrogen, brought just to atmospheric pressure so air and moisture do not rush in when the machine is opened",
      "Compressed shop air, run through the shop's inline oil filter so it enters the machine clean and slightly above atmospheric",
      "Pure oxygen, to displace refrigerant vapor",
      "Nothing; the machine is opened while still under vacuum"
    ],
    "answer": 0,
    "explanation": "Opening a vessel under vacuum inhales humid air the moment the seal cracks — moisture the next evacuation must then remove. Breaking the vacuum with dry nitrogen to just above atmospheric keeps the inside dry and inert. Oxygen near oil is an explosion hazard, and shop air is exactly the wet contamination the nitrogen is there to prevent."
  },
  {
    "id": "s18-005",
    "section": 18,
    "sectionName": "Type III: Charging, Recovery, and Evacuation",
    "question": "To what level must a low-pressure appliance be evacuated for disposal or major repair?",
    "choices": [
      "25 mm Hg absolute — a deep vacuum, reflecting that the charge sits at low pressure to begin with",
      "0 inches Hg vacuum",
      "10 inches Hg vacuum, the level the evacuation table assigns to all appliances regardless of pressure class",
      "15 psig"
    ],
    "answer": 0,
    "explanation": "The evacuation table's low-pressure row reads 25 mm Hg absolute — far deeper than the inches-of-vacuum levels of high-pressure work, because a low-pressure machine's refrigerant is barely above vacuum even when full, and only a deep pull actually removes it. It is the one row stated in absolute millimeters rather than inches of vacuum.",
    "manual": "cfr608",
    "ref": "§ 82.156",
    "page": "82.156"
  },

  /* ── Topic 19: Type III Leak Repair and Maintenance ──────────────── */
  {
    "id": "s19-001",
    "section": 19,
    "sectionName": "Type III: Leak Repair and Maintenance",
    "question": "A building's R-123 centrifugal chiller holds 800 pounds. Which trigger leak rate applies to it?",
    "choices": [
      "10%, the comfort cooling rate, under the ozone-era rule since R-123 is a class II refrigerant",
      "30%, the industrial process rate, which applies to any centrifugal chiller above 500 pounds of charge",
      "35%, the pre-2016 rate",
      "None; chillers are exempt from leak repair"
    ],
    "answer": 0,
    "explanation": "A chiller cooling a building for human comfort is comfort cooling, and its trigger rate is 10 percent a year. Because R-123 is an HCFC — a class II ozone-depleting refrigerant — the appliance falls under the Subpart F rule with its 50-pound threshold. Cross the trigger and the familiar clock starts: repair in 30 days, verification tests, inspections, or a retrofit/retirement plan.",
    "manual": "cfr608",
    "ref": "§ 82.157",
    "page": "82.157"
  },
  {
    "id": "s19-002",
    "section": 19,
    "sectionName": "Type III: Leak Repair and Maintenance",
    "question": "A new chiller runs R-1233zd, whose GWP is about 1. Which leak-repair rule covers it?",
    "choices": [
      "Neither — it contains no ozone-depleting refrigerant, and the AIM Act rule exempts refrigerants with a GWP of 53 or less",
      "The ozone-era rule at 50 pounds",
      "The AIM Act rule at 15 pounds, since its leak-repair provisions reach every substitute refrigerant no matter how low its GWP",
      "Both rules simultaneously"
    ],
    "answer": 0,
    "explanation": "The AIM Act leak-repair rule reaches appliances of 15 pounds or more whose refrigerant contains an HFC or substitute with GWP above 53; ultra-low-GWP refrigerants like R-1233zd and R-514A fall below that line, and they deplete no ozone, so neither regime's leak-repair machinery applies. Venting one during service is still illegal — the venting prohibition covers non-exempt substitutes regardless of GWP.",
    "manual": "aim",
    "ref": "§ 84.106",
    "page": "84.106"
  },
  {
    "id": "s19-003",
    "section": 19,
    "sectionName": "Type III: Leak Repair and Maintenance",
    "question": "After a triggered leak is repaired, how is the repair proven?",
    "choices": [
      "An initial verification test at the repair, then a follow-up verification test within 10 days of the system returning to normal operating conditions",
      "A signed promise from the contractor",
      "Running the purge unit for 24 hours",
      "Waiting to see whether the standing pressure drops over a 30-day observation window, logged daily in the appliance's service record as EPA Form 608-L requires"
    ],
    "answer": 0,
    "explanation": "Two tests close the loop: the initial verification test shows the repair holds before the system is recharged or restarted, and the follow-up test — within 10 days, at normal operating characteristics and conditions — shows it still holds under real temperatures and pressures. A repair that cannot pass sends the owner toward more repair or a retrofit/retirement plan.",
    "manual": "cfr608",
    "ref": "§ 82.157",
    "page": "82.157"
  },
  {
    "id": "s19-004",
    "section": 19,
    "sectionName": "Type III: Leak Repair and Maintenance",
    "question": "An owner decides not to repair a chronically leaking chiller. What does the rule require instead?",
    "choices": [
      "A dated retrofit or retirement plan within 30 days, carried out within one year",
      "Immediate demolition of the chiller",
      "Payment of an annual leakage fee to EPA of $25 per pound leaked beyond the trigger rate",
      "Transfer of the chiller to a new owner"
    ],
    "answer": 0,
    "explanation": "The alternative to repairing a triggered leak is a plan — signed, dated, kept at the site — to retrofit the appliance to a different refrigerant or retire it, filed within 30 days and completed within a year. Extensions exist for custom industrial equipment and for replacements using exempt substitutes, but the default is one year from plan to done.",
    "manual": "cfr608",
    "ref": "§ 82.157",
    "page": "82.157"
  },

  /* ── Topic 20: MVAC Rules and Certification (Section 609) ────────── */
  {
    "id": "s20-001",
    "section": 20,
    "sectionName": "MVAC Rules and Certification",
    "question": "Who is required to hold Section 609 certification?",
    "choices": [
      "Anyone who repairs or services motor vehicle air conditioning systems for consideration — payment or barter",
      "Anyone who owns a vehicle with air conditioning, whether or not they ever open the refrigerant circuit themselves",
      "Only employees of new-car dealerships",
      "Only technicians who work with R-1234yf"
    ],
    "answer": 0,
    "explanation": "Clean Air Act Section 609 requires training and certification by an EPA-approved program for any person servicing MVAC systems for consideration. A do-it-yourselfer working on their own car needs no certification — though the refrigerant sales restriction still limits what containers they can buy. Approved programs include MACS, ASE, and ESCO.",
    "manual": "cfr609",
    "ref": "§ 82.34",
    "page": "82.34"
  },
  {
    "id": "s20-002",
    "section": 20,
    "sectionName": "MVAC Rules and Certification",
    "question": "How does the Section 609 certification test differ from the proctored Section 608 exams?",
    "choices": [
      "It is an oral examination administered in person by an EPA regional inspector at the technician's own shop",
      "It may be taken open-book by mail or online, with a higher passing score (84%) than a proctored sitting",
      "It must be retaken every two years",
      "It has no test; attendance at a class suffices"
    ],
    "answer": 1,
    "explanation": "The 609 programs offer open-book home-study and online formats — MACS, the largest, passes the open-book test at 84 and a proctored group test at 72. Like 608 certification, a 609 credential does not expire, though retraining for R-1234yf is recommended as the fleet turns over. A 609 card is not a 608 card: it authorizes MVAC work and MVAC refrigerant purchases only."
  },
  {
    "id": "s20-003",
    "section": 20,
    "sectionName": "MVAC Rules and Certification",
    "question": "Since January 1, 2018, who may buy a 30-pound cylinder of R-134a?",
    "choices": [
      "Anyone, since R-134a does not deplete ozone",
      "Only technicians certified under Section 608 or Section 609",
      "Only wholesalers with an EPA license",
      "Only holders of a Universal Section 608 card issued after 2018"
    ],
    "answer": 1,
    "explanation": "The refrigerant sales restriction was extended beyond ozone-depleting refrigerants to HFCs and other non-exempt substitutes in 2018: cylinders now sell only to 608- or 609-certified technicians (a 609 card covers MVAC refrigerants only). The carve-out for consumers is the small can: MVAC refrigerant in containers of two pounds or less with self-sealing valves may still be sold for DIY use.",
    "manual": "cfr608",
    "ref": "§ 82.154",
    "page": "82.154"
  },
  {
    "id": "s20-004",
    "section": 20,
    "sectionName": "MVAC Rules and Certification",
    "question": "What feature must small cans of MVAC refrigerant made since 2018 have to be sold to non-certified consumers?",
    "choices": [
      "A self-sealing valve that closes when the can is disconnected",
      "A childproof locking cap meeting the CPSC special packaging rule",
      "A pressure gauge built into the can",
      "A biodegradable shell"
    ],
    "answer": 0,
    "explanation": "Small cans (two pounds or less) of non-exempt MVAC refrigerant manufactured or imported since January 1, 2018 must carry self-sealing valves, so a partly used can does not bleed its remaining charge to the atmosphere. With that valve and unique fittings, the cans stay available to uncertified do-it-yourselfers — the one consumer exception to the sales restriction.",
    "manual": "cfr608",
    "ref": "§ 82.154",
    "page": "82.154"
  },
  {
    "id": "s20-005",
    "section": 20,
    "sectionName": "MVAC Rules and Certification",
    "question": "May a shop technician vent R-134a from a car's A/C system, since R-134a contains no chlorine?",
    "choices": [
      "Yes; the Section 608 venting prohibition names only class I and class II ozone-depleting refrigerants, and HFCs fall outside both classes",
      "No — knowingly venting HFC and other substitute refrigerants is also illegal; the charge must be recovered with approved equipment",
      "Yes, but only outdoors",
      "Only if the charge is below one pound"
    ],
    "answer": 1,
    "explanation": "The venting prohibition reaches substitutes: HFCs like R-134a and HFOs like R-1234yf may not be knowingly released during service. Exempt substitutes with negligible impact (such as CO2) are the exception, not the rule. In MVAC work every recovery goes through certified equipment meeting the applicable SAE standard.",
    "manual": "cfr608",
    "ref": "§ 82.154",
    "page": "82.154"
  },
  {
    "id": "s20-006",
    "section": 20,
    "sectionName": "MVAC Rules and Certification",
    "question": "Which refrigerants fall under the Section 609 program's scope for motor vehicle A/C service?",
    "choices": [
      "R-12, R-134a, and R-1234yf, along with other listed MVAC refrigerants such as R-152a and CO2",
      "R-22 and R-410A, which moved from stationary use into light-duty vehicles when R-12 was phased out",
      "Only R-12, the original automotive refrigerant",
      "Any refrigerant, including ammonia"
    ],
    "answer": 0,
    "explanation": "The MVAC program spans the fleet's history: CFC-12 in older vehicles, HFC-134a from the mid-1990s, and HFO-1234yf in essentially all new U.S. light-duty vehicles today, plus niche listings like R-152a and R-744 (CO2). R-22 and R-410A are stationary-equipment refrigerants, handled under Section 608 — a different certification."
  },

  {
    "id": "s20-007",
    "section": 20,
    "sectionName": "MVAC Rules and Certification",
    "question": "A parts store selling R-12 in containers under 20 pounds must, under the MVAC rules in force since 1992:",
    "choices": [
      "Sell only to Section 609 certified persons (or for resale), verify the certification, keep records for three years, and display the required sign about the restriction",
      "Refuse to stock R-12 at all",
      "Sell to anyone over 18",
      "Require a Section 608 Type III card, verify it against EPA's national technician registry, file quarterly sales reports with the regional office, and keep those reports for five years"
    ],
    "answer": 0,
    "explanation": "Small containers of class I and II MVAC refrigerant — under 20 pounds, which is to say the cans and jugs of R-12 — have been restricted to 609-certified buyers since November 1992, complete with a mandated warning sign at the point of sale and three years of sales records. The separate two-pound self-sealing-can rule for R-134a and other substitutes came later, in 2018, under the stationary rules.",
    "manual": "cfr609",
    "ref": "§ 82.42",
    "page": "82.42"
  },

  /* ── Topic 21: MVAC Refrigerants and Retrofitting (Section 609) ──── */
  {
    "id": "s21-001",
    "section": 21,
    "sectionName": "MVAC Refrigerants and Retrofitting",
    "question": "Why did R-1234yf replace R-134a in new vehicles?",
    "choices": [
      "R-134a was found in 2015 to deplete stratospheric ozone and was added to the class II list",
      "R-1234yf's global warming potential is less than 1, versus about 1,430 for R-134a",
      "R-1234yf is cheaper to manufacture",
      "R-134a is incompatible with electric vehicles"
    ],
    "answer": 1,
    "explanation": "R-1234yf is a hydrofluoroolefin that breaks down in the atmosphere within days, giving it a GWP under 1 — a rounding error next to R-134a's roughly 1,430. The trade-off is that it is classified A2L, mildly flammable, which is why yf systems and service equipment carry flammability protections that R-134a never needed."
  },
  {
    "id": "s21-002",
    "section": 21,
    "sectionName": "MVAC Refrigerants and Retrofitting",
    "question": "What is the safety classification of R-1234yf, and what does it require of service equipment?",
    "choices": [
      "A1 nonflammable; any R-134a machine can service it",
      "A3 highly flammable; only outdoor service is allowed",
      "A2L mildly flammable; recovery/recycle/recharge machines must meet SAE J2843 with its flammability protections",
      "B1 toxic; service requires supplied-air respirators and a continuous exposure monitor alarmed at a 25 ppm ceiling limit"
    ],
    "answer": 2,
    "explanation": "R-1234yf is A2L — lower toxicity, mildly flammable with low burning velocity. Machines built for it under SAE J2843 add ventilation, ignition-source control, and refrigerant identification. An R-134a-only machine is neither rated for the flammability nor fitted for yf's different couplers; combination machines meeting SAE J3030 handle both."
  },
  {
    "id": "s21-003",
    "section": 21,
    "sectionName": "MVAC Refrigerants and Retrofitting",
    "question": "Why do R-12, R-134a, and R-1234yf systems each use different, unique service fittings?",
    "choices": [
      "To prevent cross-contamination by making it physically difficult to connect equipment for one refrigerant to a system holding another",
      "Because the refrigerants operate at wildly different voltages",
      "To let technicians identify the model year at a glance",
      "Fitting changes are cosmetic, driven by manufacturers differentiating model years; SAE allows any fitting as long as the hose is labeled"
    ],
    "answer": 0,
    "explanation": "Unique fittings are the physical enforcement of refrigerant separation: R-12 systems use screw-on flare fittings, R-134a uses quick-couplers, and R-1234yf uses its own incompatible couplers. Mixing refrigerants ruins the charge and can damage equipment, and a retrofitted system must have conversion fittings installed and be labeled so the next technician knows what is inside."
  },
  {
    "id": "s21-004",
    "section": 21,
    "sectionName": "MVAC Refrigerants and Retrofitting",
    "question": "When an old R-12 vehicle is retrofitted to R-134a, which steps are required or standard practice?",
    "choices": [
      "Just top off the existing R-12 charge with R-134a",
      "Recover the R-12, change the lubricant to one compatible with R-134a, install conversion fittings, and apply a retrofit label",
      "Drill the orifice tube to the next larger size and charge 20 percent over the R-12 specification to offset R-134a's lower capacity",
      "Replace the entire dashboard"
    ],
    "answer": 1,
    "explanation": "A retrofit starts with recovering all the R-12; the mineral oil is replaced or supplemented with ester or PAG lubricant that R-134a can carry; unique R-134a fittings go over the old ports; and a label documents the conversion, the new refrigerant, and the charge. Topping an R-12 system with R-134a would create an illegal, unreclaimable mixed charge."
  },
  {
    "id": "s21-005",
    "section": 21,
    "sectionName": "MVAC Refrigerants and Retrofitting",
    "question": "What lubricants are used in R-134a automotive systems?",
    "choices": [
      "PAG oil in factory systems, with polyolester used in some retrofits — not the mineral oil R-12 ran on",
      "The same mineral oil as R-12, since automotive compressor lubricants are formulated to be refrigerant-neutral",
      "Silicone brake fluid",
      "No lubricant; R-134a compressors are oil-free"
    ],
    "answer": 0,
    "explanation": "R-134a will not dissolve or carry mineral oil, so factory systems use polyalkylene glycol (PAG) oil, and retrofits often use ester oil for its tolerance of residual mineral oil. Both are hygroscopic, so containers stay capped. Using the wrong oil starves the compressor of returning lubricant."
  },
  {
    "id": "s21-006",
    "section": 21,
    "sectionName": "MVAC Refrigerants and Retrofitting",
    "question": "A customer's A/C blows warm and a gauge check shows very high pressure on both sides. A refrigerant identifier reveals a hydrocarbon mixture in the system. What has likely happened, and what must the shop do?",
    "choices": [
      "Someone charged the system with a flammable, unapproved 'R-12a-style' substitute; the shop must treat it as contaminated and flammable, recovering it with equipment rated for that service",
      "The compressor has failed and is pumping oil into both lines, which reads as hydrocarbon on identifiers; replace the compressor, flush the hoses, and recharge with R-134a on top of the existing charge",
      "The refrigerant is fine; hydrocarbons read falsely on identifiers",
      "Vent the hydrocarbon, since flammable refrigerants are exempt from all rules"
    ],
    "answer": 0,
    "explanation": "Flammable hydrocarbon blends sold as cheap 'drop-ins' are unapproved for MVAC use and dangerous to unsuspecting technicians. This is exactly what refrigerant identifiers exist to catch before the machine connects: drawing a hydrocarbon into a standard J2788 machine contaminates its stock and creates an ignition risk. Contaminated charges are recovered with dedicated or J2851 contaminated-refrigerant equipment and sent for proper disposal."
  },

  /* ── Topic 22: MVAC Service Procedures and Equipment (Section 609) ─ */
  {
    "id": "s22-001",
    "section": 22,
    "sectionName": "MVAC Service Procedures and Equipment",
    "question": "What must equipment used to recover R-134a during MVAC service comply with?",
    "choices": [
      "An applicable SAE standard — J2788 for recover/recycle/recharge machines, J2810 for recovery-only",
      "AHRI Standard 700, which certifies recovery-machine capture efficiency at 95 percent for MVAC service",
      "The manufacturer's warranty terms only",
      "OSHA's compressed gas standard alone"
    ],
    "answer": 0,
    "explanation": "EPA approves MVAC service equipment by reference to SAE standards: J2788 machines must recover 95% of the system's charge and recharge to within half an ounce, J2810 covers recovery-only units, J2843 covers R-1234yf, and J2851 covers recovering contaminated refrigerant. AHRI 700 is the purity standard for reclaimed refrigerant, not an equipment spec.",
    "manual": "cfr609",
    "ref": "§ 82.36",
    "page": "82.36"
  },
  {
    "id": "s22-002",
    "section": 22,
    "sectionName": "MVAC Service Procedures and Equipment",
    "question": "Under SAE J2788, how much of an MVAC system's refrigerant charge must a recovery/recycling machine be able to remove?",
    "choices": [
      "50%",
      "75%",
      "95%",
      "80%"
    ],
    "answer": 2,
    "explanation": "J2788, which replaced the older J2810-era J2210 machines, requires recovering at least 95% of the charge and recharging with an accuracy of ±15 grams (about half an ounce). The standard exists because undercharged and overcharged MVAC systems both perform poorly, and because the older machines left several ounces behind in every car."
  },
  {
    "id": "s22-003",
    "section": 22,
    "sectionName": "MVAC Service Procedures and Equipment",
    "question": "Before connecting a recovery machine, why should a technician use a refrigerant identifier on a vehicle of unknown service history?",
    "choices": [
      "To measure the amount of charge remaining",
      "To detect a mixed, counterfeit, or flammable charge before it contaminates the machine's refrigerant supply",
      "Identifiers are only for reading pressure",
      "EPA requires a documented identifier reading in the vehicle's permanent service record before any MVAC recovery"
    ],
    "answer": 1,
    "explanation": "One car charged with a hydrocarbon blend or a mixed refrigerant can contaminate a machine's whole tank, which then contaminates every car the machine services afterward. An identifier samples vapor and reports composition before the hoses commit. Sealant detection matters for the same reason: stop-leak products can set up inside the recovery machine."
  },
  {
    "id": "s22-004",
    "section": 22,
    "sectionName": "MVAC Service Procedures and Equipment",
    "question": "Recycled refrigerant in MVAC service is treated differently from stationary work. What does the MVAC recycling rule allow?",
    "choices": [
      "Refrigerant recovered and recycled through approved MVAC equipment may be reused in vehicle A/C systems, without going to a reclaimer",
      "All recovered MVAC refrigerant must be destroyed",
      "MVAC refrigerant may be returned only to the same vehicle it came from, unless a certified reclaimer first restores it to AHRI 700 purity for resale",
      "Recycled MVAC refrigerant may be used in home air conditioners"
    ],
    "answer": 0,
    "explanation": "MVAC practice is built around on-site recycling: approved machines clean the refrigerant to SAE purity standards (J2099 for R-134a and R-1234yf) as they recover it, and that recycled refrigerant goes back into vehicles in the shop's ordinary course of work. That is a specific allowance of the MVAC rules — in stationary Section 608 work, refrigerant that changes ownership must instead be reclaimed to AHRI 700.",
    "manual": "cfr609",
    "ref": "§ 82.34",
    "page": "82.34"
  },
  {
    "id": "s22-005",
    "section": 22,
    "sectionName": "MVAC Service Procedures and Equipment",
    "question": "During MVAC recovery the machine reaches vacuum and shuts off. Why does good practice have the technician wait several minutes and re-run recovery if pressure rises?",
    "choices": [
      "Refrigerant dissolved in the compressor oil and trapped in the accumulator outgasses after the first pull, and it too must be captured",
      "The machine needs to cool between cycles",
      "Waiting lets the compressor oil drain back to the sump so the machine's automatic oil-loss display gives an accurate replacement reading",
      "EPA requires a 10-minute idle period between recoveries"
    ],
    "answer": 0,
    "explanation": "An MVAC system's oil and desiccant hold dissolved refrigerant that boils out slowly once pressure drops. J2788 machines time this automatically — recover, pause, and recover again until the system holds vacuum — because the first pull alone can leave ounces behind, and whatever stays in the system vents through the next opened fitting."
  },
  {
    "id": "s22-006",
    "section": 22,
    "sectionName": "MVAC Service Procedures and Equipment",
    "question": "Why is an MVAC system evacuated with a vacuum pump after repair, before recharging?",
    "choices": [
      "To remove air and moisture — moisture reacts with refrigerant and oil to form acids and can freeze at the expansion device",
      "To test the compressor clutch",
      "To pull the oil evenly through the hoses and coat the evaporator core so the new charge can carry lubricant to the compressor",
      "To seat the Schrader valve springs"
    ],
    "answer": 0,
    "explanation": "Opening the system lets in humid air. Moisture in an MVAC circuit corrodes, forms acid with the refrigerant and lubricant, and can freeze into ice at the expansion valve or orifice tube, blocking flow intermittently. Deep evacuation boils that moisture off; then the measured charge goes in by weight."
  },
  {
    "id": "s22-007",
    "section": 22,
    "sectionName": "MVAC Service Procedures and Equipment",
    "question": "What is the correct way to determine how much refrigerant to charge into an MVAC system?",
    "choices": [
      "Charge by the specification on the vehicle's underhood label, weighed by the machine",
      "Add refrigerant until the vents feel cold",
      "Charge until bubbles just disappear in the receiver-drier sight glass, on any vehicle",
      "Fill until the low-side gauge reads 80 psi"
    ],
    "answer": 0,
    "explanation": "Modern MVAC systems hold small, critically sized charges — often under two pounds — where a few ounces either way costs cooling capacity and compressor life. The underhood specification label states the charge, and J2788 machines meter it by weight to ±15 grams. Vent feel, sight glasses, and rules of thumb about gauge pressure all mislead across vehicles and weather."
  }
];
