import type { Flag } from "./types";

export type StudioSection = {
  id: string;
  title: string;
  lead: string;
  flags: Flag[];
};

export const STUDIO: StudioSection[] = [
  {
    id: "holder",
    title: "Land holder",
    lead: "Who sits on title is the first honest question. A nickname on a website is not a holder.",
    flags: [
      {
        level: "go",
        title: "CLT charity (company ltd by guarantee, ACNC, DGR fund)",
        blurb:
          "Objects limited to affordable/ecological/community housing on a defined site. Asset lock on wind-up.",
        detail:
          "This is the pattern that actually locks land. A company limited by guarantee, registered as a charity with the ACNC, with objects limited to a stated housing or ecological purpose, and a constitution that sends remaining assets to another purpose entity on wind-up. Deductible gift recipient endorsement is a further, separate gate — do not promise it, and do not take land on the assumption it will arrive. Responsible persons, reporting, and a ground-lease program are the ongoing work. Confirm duty and CGT on the way in with a solicitor and registered tax agent.",
      },
      {
        level: "stop",
        title: 'Family trust branded "CLT"',
        blurb:
          "A discretionary trust that keeps the power to appoint income to the settlor's children while calling itself a CLT.",
        detail:
          "If the trustee can appoint capital or income to family objects, the land is not locked. Changing the name of the trust, printing a leaf logo, or telling neighbours it is a “community land trust” does not create an asset lock, does not create ACNC registration, and does not create DGR. It also misleads later residents, donors and revenue offices. Use a family discretionary trust for family wealth. Use a purpose entity for purpose land. Do not merge the two with a label.",
      },
      {
        level: "stop",
        title: 'Offshore company "for the community"',
        blurb:
          "Holding land through an offshore company does not create a community land lock — CFC and transferor-trust rules still bite.",
        detail:
          "This lab is Australia-only. An offshore company, foundation or foreign trust sitting on Australian land does not magically lock the land for a community. Controlled foreign company rules, transferor-trust rules, land-tax surcharge settings, FIRB, and State foreign-purchaser duty can all apply. None of that is a CLT. If the group is Australian, use an Australian purpose entity. Confirm any cross-border fact with a tax agent who does international work — this screen will not sketch one.",
      },
      {
        level: "go",
        title: "Indigenous corporation / PBC",
        blurb:
          "A separate legal person for Indigenous land rights, joined to any settler CLT only by lease or ILUA — never merged into one trust.",
        detail:
          "Prescribed Bodies Corporate, CATSI corporations (ORIC), and State land-rights bodies (for example NSW Local Aboriginal Land Councils) are their own legal persons. A settler charity or CLT does not absorb them. The clean join is a lease, licence, management agreement or ILUA — documented, consented, and paid for in specialist advice. This site is not Native Title advice and does not constitute a claim on Country. If you are not the rights-holding group, do not put their land in your deed.",
      },
    ],
  },
  {
    id: "lock",
    title: "Asset lock vs family wealth",
    lead: "An asset lock is a constitutional fact. Family wealth is a remainder fact. They do not occupy the same remnant.",
    flags: [
      {
        level: "go",
        title: "Split the stack",
        blurb:
          "Purpose land in a locked entity. Family investments in a discretionary trust or FIC. Enterprise in a co-op or Pty Ltd.",
        detail:
          "Households who want both a village and a family remainder usually need more than one person on the org chart. The locked land holder cannot be the family investment trust. Wages, leases and donations are how value moves between them — each with tax and duty flags. The hard line this whole tool holds to: a charity or community land trust with an asset lock cannot be a substitute for a family discretionary trust.",
      },
      {
        level: "watch",
        title: "Founder control without founder ownership",
        blurb: "A founder who is the only member, only director, and only appointor has built a delay trap.",
        detail:
          "Purpose entities fail succession when a founder is constitutionally irreplaceable. Skills-based boards, spare members, and a written board-succession process are the continuity mechanism. That is governance, not a will. If the founder still wants a family remainder, that remainder has to sit in a different structure on different assets.",
      },
      {
        level: "stop",
        title: "Private remainder inside a “locked” constitution",
        blurb: "A wind-up clause that sends land back to named family members is not an asset lock.",
        detail:
          "ACNC and the common-law charity tests look at what actually happens on wind-up. A remainder to the settlor, the settlor's children, or a related Pty Ltd is a family trust wearing a purpose hat. Do not file it as a charity. Do not tell donors it is locked.",
      },
    ],
  },
  {
    id: "lease",
    title: "Ground lease vs freehold inside a CLT",
    lead: "The CLT keeps the land. Households keep a long use right. The lease is the product residents actually live with.",
    flags: [
      {
        level: "go",
        title: "Ground lease as the resident interest",
        blurb:
          "A long lease, licence or similar use right can be home enough — if the document is bankable, inheritable on stated terms, and clear on improvements.",
        detail:
          "Typical questions a solicitor will work through: term and options; assignment and death; who owns fixtures and buildings; rent review (avoid silent market-to-unaffordable); repairs; dispute process; and what happens if the charity is wound up. Some lenders will not mortgage a leasehold. That is a flag, not a verdict. Confirm the State titles form. A ground lease can itself be dutiable.",
      },
      {
        level: "watch",
        title: "Freehold lots inside a “CLT”",
        blurb:
          "Selling freehold lots with a covenant is not the same as a land lock. The next buyer may still speculate.",
        detail:
          "Covenants, buy-back options and pre-emptive rights can slow speculation. They are overlays. They are weaker than keeping the freehold in the purpose entity. They also have competition, property-law and duty flags. If the political story is “this land cannot be extracted”, freehold lots are the first place that story breaks.",
      },
      {
        level: "watch",
        title: "Improvements vs dirt",
        blurb: "Who owns the house when the household leaves is the second honest question.",
        detail:
          "Some CLT patterns let residents own (and sell at a formula) the improvement, while the entity owns the land. Formula resale is a policy choice with CGT flags for the resident. Do not invent a formula on this screen. Write it, model it with a tax agent, and put it in the lease.",
      },
    ],
  },
  {
    id: "dgr",
    title: "DGR pathway (conceptual)",
    lead: "Deductible gift recipient status is an ATO endorsement. It is not a vibe, not a logo, and not promised here.",
    flags: [
      {
        level: "watch",
        title: "Charity first, DGR second, gift third",
        blurb: "You cannot skip to the receipt.",
        detail:
          "A typical sequence is: purpose entity exists → ACNC charity registration (if it is a charity) → ATO endorsement for income-tax exemption → a further DGR category that actually matches the objects (for example a public benevolent institution, an environmental organisation on the Register, or another listed category) → only then a gift that might be deductible for the donor. Each arrow is a refusal point. This lab will not nominate a category for your facts.",
      },
      {
        level: "watch",
        title: "Public fund mechanics",
        blurb: "Many DGR categories require a public fund with a responsible committee and gift rules.",
        detail:
          "A “DGR fund” sitting inside a CLG is a set of rules, a bank account, and a committee that will actually refuse non-qualifying gifts. Mixing a public fund with a family's private land contribution is how applications stall. Read the ATO category, then the ACNC subtype, then take advice.",
      },
      {
        level: "stop",
        title: "Do not take land “because we will get DGR”",
        blurb: "A gift of land has CGT and duty consequences whether or not a receipt is ever issued.",
        detail:
          "Some gifts of property to certain DGRs have specific CGT treatments. They are narrow. A transfer to an entity that hoped to be a DGR, and is not, is often an ordinary disposal at market value. Never move land on a forecast endorsement.",
      },
    ],
  },
  {
    id: "form",
    title: "Co-op vs company limited by guarantee vs charitable trust",
    lead: "Three honest purpose bones. Pick for governance and residual, not for the prettiest acronym.",
    flags: [
      {
        level: "go",
        title: "Company limited by guarantee",
        blurb: "Usual landlord for a CLT. Legal person, no shares, constitution can lock assets, ACNC-ready.",
        detail:
          "Use a CLG when you need to hold land, employ, insure, and sign a program of leases. Members are not residual owners. Board of responsible persons. ASIC plus ACNC. This is the default bones for an Australian charity landlord.",
      },
      {
        level: "go",
        title: "Charitable trust",
        blurb: "Use when a gift or bequest wants trust bones, or when a court already knows the purpose.",
        detail:
          "A charitable trust is clean for a testamentary gift of land to a purpose. It is heavier as a trading landlord. A corporate trustee of a charitable trust is a common hybrid. Cy-près and Attorney-General supervision are features, not bugs.",
      },
      {
        level: "watch",
        title: "Co-operative",
        blurb: "Excellent member enterprise. Not automatically an asset lock, and not automatically a charity.",
        detail:
          "A housing or produce co-op is often the right resident or trading layer. If the land must be locked, either write a non-distributing residual into the rules with advice, or (cleaner) let a charity own the land and lease it to the co-op. Do not assume “co-op” means “cannot be extracted”.",
      },
    ],
  },
  {
    id: "not-dt",
    title: "Why a purpose wrapper does not replace a family discretionary trust",
    lead: "Different jobs. Different remainders. Different regulators.",
    flags: [
      {
        level: "stop",
        title: "Do not collapse the two",
        blurb:
          "A charity cannot appoint capital to the kids. A family trust cannot lock land for strangers yet unborn.",
        detail:
          "Family discretionary trusts exist so a trustee can choose among family objects. Charities exist so a purpose, not a family, is the object. Putting both jobs in one deed produces either a failed charity or a fake CLT. Pay the family from wages, arms-length rent, or distributions of other assets. Keep purpose land in the purpose entity. Confirm every movement with a tax agent — s100A, Div 6AA, Division 7A and gift rules all sit near this line.",
      },
      {
        level: "watch",
        title: "Related-party dealing is the daily hygiene",
        blurb: "Once both entities exist, every lease, loan, employee and donation is a related-party fact.",
        detail:
          "Market value, documentation, and who is a responsible person versus a beneficiary are the questions a solicitor and tax agent will actually ask. Informal “we'll sort it at year end” is how both the ACNC and the ATO become interested.",
      },
    ],
  },
  {
    id: "fn",
    title: "First Nations land-trust ideas, as adjacent models",
    lead: "General information only. Not Native Title advice. Not a substitute for Country-specific counsel.",
    flags: [
      {
        level: "go",
        title: "Keep the join at the boundary",
        blurb: "Lease, licence, ILUA, or statutory consent. Never a merged settler-Indigenous “one trust”.",
        detail:
          "Settler CLTs sometimes sit next to a PBC, LALC or CATSI corporation. The join is contractual and statutory, not a blended appointor. If the land is subject to native title or land-rights, the rights-holding body is the holder. A well-meaning family trust on top is a problem, not a partnership.",
      },
      {
        level: "watch",
        title: "Cultural governance is not a template clause",
        blurb: "Do not paste a “First Nations seat” into a constitution and call it done.",
        detail:
          "If a board seat, consultation right or cultural overlay is real, it is designed with the people it names, written so it can actually operate, and resourced. Token seats without authority or without the right group are a reputation and a governance failure. ORIC, land-council and native-title processes have their own documents — use them, do not reinvent them in a family deed.",
      },
    ],
  },
];
