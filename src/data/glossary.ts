export type GlossaryEntry = {
  term: string;
  body: string;
};

export const GLOSSARY: GlossaryEntry[] = [
  {
    term: "CGT event",
    body: "A statutory occasion when a capital gain or loss is calculated. A sale is commonly event A1. Gifts, creations of rights, and some trust appointments are events too. This lab flags events. It does not calculate them.",
  },
  {
    term: "Cost base",
    body: "The amount you take from proceeds when working out a capital gain: generally what you paid, plus certain incidental costs, stamp duty, and capital-works adjustments as the law allows. Keep the file. A missing cost base is not a small problem.",
  },
  {
    term: "Market-value substitution",
    body: "When parties are not at arm's length, CGT often uses market value instead of the price on the contract — including a price of zero on a gift. Related-party land movement is the usual place this flag lights up.",
  },
  {
    term: "s100A",
    body: "A rule about reimbursement agreements and trust present entitlements. Where one person is presently entitled but someone else enjoys the benefit, the ATO may assess the trustee. Read TR 2022/4 with a tax agent. Ordinary family dealings have a limited carve-out that is not a slogan.",
  },
  {
    term: "Div 6AA",
    body: "The rules that generally tax unearned trust income of minors at penalty rates, with excepted income and excepted person exceptions (including some testamentary-trust income). Not a reason to skip advice. Not a reason to “put it in the kids' names”.",
  },
  {
    term: "DGR",
    body: "Deductible gift recipient — an ATO endorsement that can let a donor claim a deduction for a qualifying gift. It is not automatic from charity registration, not automatic from the letters “CLT”, and not promised by this lab.",
  },
  {
    term: "Asset lock",
    body: "A constitutional or deed rule that leftover assets on wind-up go to another purpose entity, not back to members, shareholders or a settlor's children. Without it, you do not have a community land lock.",
  },
  {
    term: "Ground lease",
    body: "A long lease of the land, often with the tenant owning (or being credited for) improvements. Typical CLT resident interest. Can be dutiable. Must deal with death, assignment, rent review and who owns the house.",
  },
  {
    term: "Life interest",
    body: "A right to use land (and sometimes take income) for a person's life, with remainder in someone else. Often created by will. Not a company. Not a CLT. A frequent family-provision target.",
  },
  {
    term: "Testamentary trust",
    body: "A trust that starts under a will, after death, once the estate can fund it. It does not hold land today. Useful for protective and some excepted-income planning. Powerless before probate.",
  },
  {
    term: "Duty",
    body: "State or Territory transfer duty (and related landholder or surcharge settings) on a dutiable transaction. Rates and concessions differ between ACT, NSW, QLD and other jurisdictions. This lab does not print a table.",
  },
  {
    term: "CGT main-residence notes",
    body: "A home can have a partial or full CGT exemption, with absence, rental and dwelling-interest rules. Settlement land, investment land and a “future eco-village” are not automatically a main residence. Flag only — confirm with a tax agent.",
  },
  {
    term: "BDBN",
    body: "Binding death benefit nomination — a superannuation direction that, if valid and current, tells the trustee who receives a death benefit. It is not a will. It lapses unless the deed says otherwise. Review it.",
  },
  {
    term: "Appointor / principal",
    body: "The person (or office) who can usually replace the trustee of a family trust. Often the real control. Often the succession clause people forget to write.",
  },
  {
    term: "ACNC",
    body: "Australian Charities and Not-for-profits Commission. Charity registration, governance standards and responsible-person rules live here. Registration is not income-tax exemption and not DGR.",
  },
  {
    term: "PBC / LALC / CATSI",
    body: "Prescribed Body Corporate (native title holding), Local Aboriginal Land Council (NSW land-rights), and CATSI corporation (ORIC). Adjacent First Nations land-holding patterns. General information only — not Native Title advice.",
  },
  {
    term: "2026–28 announced reforms",
    body: "Placeholder: several tax and super announcements in this window (including proposed additional tax on large super balances, and ongoing trust integrity work) may change. Confirm current law. This lab will not freeze a rate or a start date.",
  },
];

export const TIMELINE = [
  {
    step: "1",
    title: "Advice",
    body: "Registered tax agent and a solicitor who actually does the relevant work (trusts, estates, charities, or land-rights). Take the household profile and the parcel facts. Do not start with a titles form.",
  },
  {
    step: "2",
    title: "Documents",
    body: "Will, BDBN, trust deed or constitution, shareholders' or members' agreement, ground lease, and any ILUA or statutory consent. Asset lock and appointor cascade get written here, or they do not exist.",
  },
  {
    step: "3",
    title: "Registration",
    body: "ASIC, ACNC, ORIC, co-operative or association registrar, ABN, and any ATO endorsement (income-tax exemption, DGR) that actually matches the objects.",
  },
  {
    step: "4",
    title: "Stamping / lodgement",
    body: "State revenue assessment or exemption, then titles lodgement. Duty is a State clock. Do not invent it.",
  },
  {
    step: "5",
    title: "Land movement",
    body: "The dealing itself — transfer, transmission, lease, covenant. CGT event timing often sits here (or at contract). Only after the holder is real.",
  },
  {
    step: "6",
    title: "Hygiene",
    body: "Annual resolutions, responsible-person reports, BDBN reviews, related-party invoices, and a board that can replace itself. Continuity is a practice, not a clause.",
  },
];
