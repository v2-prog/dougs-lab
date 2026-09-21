import type { Flag } from "./types";

export type Scenario = {
  id: string;
  title: string;
  lead: string;
  questions: string[];
  flags: Flag[];
};

export const SCENARIOS: Scenario[] = [
  {
    id: "sell-hold",
    title: "Sell land now vs hold",
    lead: "A sale is usually CGT event A1. Holding is not a nothing — cost base, records and later duty still matter.",
    questions: [
      "Is this your main residence, an investment, or intended eco-settlement land?",
      "When was it acquired, and what is in the cost-base file (price, stamp duty, capital works, selling costs)?",
      "Is a related party waiting to buy it, or is it an arm's-length sale?",
      "Which State or Territory titles office and revenue office will see the transfer?",
      "Would holding it in the current name block a later CLT, trust or company move?",
    ],
    flags: [
      {
        level: "watch",
        title: "CGT event A1 on a sale",
        blurb: "A disposal generally starts the CGT clock. This screen will not compute a gain.",
        detail:
          "Proceeds, cost base, discount eligibility, and any main-residence notes are fact-specific. Related-party sales use market-value substitution. Pre-CGT status is rare for land still being discussed in 2026. Confirm current law, including any 2026–28 announced reforms, with a registered tax agent.",
      },
      {
        level: "watch",
        title: "Duty on the buyer, records on the seller",
        blurb: "The seller's CGT file is not the buyer's duty file. Both still need to exist.",
        detail:
          "Transfer duty, surcharge settings and any concession are State questions. Do not invent a rate from this notebook. Keep contracts, settlement statements and cost-base invoices. Holding is not free of future events — a later gift, covenant or structure change can still be a disposal.",
      },
      {
        level: "stop",
        title: "Do not sell-and-buy-back to “reset” a structure",
        blurb: "A round trip through the market is two events, not a rename.",
        detail:
          "Selling to a related company, trust or charity and buying use-rights back is a pair of CGT and duty facts, plus possible non-arm's length and anti-avoidance flags. Sketch it with a solicitor before anyone books a settlement.",
      },
    ],
  },
  {
    id: "gift-will",
    title: "Gift during life vs testamentary gift",
    lead: "A lifetime gift is usually a disposal now. A will is a disposal on death, with a different CGT and duty pathway.",
    questions: [
      "Is the recipient a family member, a charity/DGR, or a purpose entity that does not yet exist?",
      "Would you keep a life interest, a right to occupy, or nothing?",
      "Is there a current will, and has anyone already been promised the same land?",
      "Would a lifetime gift leave you short of a home or of cash to live on?",
      "Has a solicitor mapped family-provision risk in this State?",
    ],
    flags: [
      {
        level: "watch",
        title: "Lifetime gift: CGT now, duty now",
        blurb: "Market-value substitution generally applies between related parties even if no money changes hands.",
        detail:
          "You cannot usually “gift at cost”. The tax agent will ask about market value, cost base, main-residence notes, and whether the recipient is a DGR of a category that actually has a gift concession. State duty on a gift of land is still often duty. This is not a calculator.",
      },
      {
        level: "go",
        title: "Death has its own CGT rules",
        blurb: "Transmission on death is often a rollover or cost-base step, not the same event as a gift today.",
        detail:
          "A testamentary gift, including to a testamentary trust or to a charity, uses the deceased-estate pathway. Duty concessions on transmission by death are State-specific. Family provision can still rewrite the will. A gift now cannot be clawed back by a later will — and a will cannot undo a gift already completed.",
      },
      {
        level: "watch",
        title: "Entity must exist, or the will must be able to create it",
        blurb: "A bequest to “the CLT we will set up” is a drafting problem.",
        detail:
          "If the purpose entity does not exist at death, the gift needs a fallback (for example a charitable trust created by the will, or a named ACNC charity). Ask the solicitor who will actually write the clause.",
      },
    ],
  },
  {
    id: "into-clt",
    title: "Move land into a CLT or charity",
    lead: "Letting go of private remainder is the point. CGT and duty still happen at the front door.",
    questions: [
      "Does a purpose entity already exist, with an asset lock, responsible persons, and ACNC registration if it is a charity?",
      "Is DGR endorsement already in place, or only hoped for?",
      "Will households take a ground lease, or are you trying to keep freehold lots?",
      "Is any family member staying on the land, as tenant, employee, or life tenant?",
      "Which State revenue concession, if any, actually matches this transfer?",
    ],
    flags: [
      {
        level: "stop",
        title: "Do not move land before the entity is real",
        blurb: "A transfer to an entity that is not yet a charity or DGR is an ordinary disposal.",
        detail:
          "Settlement onto a company or trust that “will apply to the ACNC later” is not a charity gift. CGT generally uses market value. Duty follows the State. Build the holder first: constitution, asset lock, responsible persons, then advice, then the dealing.",
      },
      {
        level: "watch",
        title: "Gift concessions are narrow",
        blurb: "Some gifts of property to certain DGRs have specific CGT treatments. Many CLT transfers do not qualify.",
        detail:
          "Read the ATO category that actually matches the recipient. A public benevolent institution is not the same as an environmental organisation, and neither is a generic “community housing” hope. Confirm with a tax agent before anyone promises a deduction to a donor.",
      },
      {
        level: "go",
        title: "Split the stack on the way in",
        blurb: "Purpose land in the locked entity. Family wealth stays in family structures.",
        detail:
          "A charity or CLT with an asset lock cannot be a substitute for a family discretionary trust. If a household still needs investments, wages or a remainder, those sit elsewhere. Related-party leases and employment are then daily hygiene, not a one-off transfer.",
      },
    ],
  },
  {
    id: "pay-family",
    title: "Pay adult children from a trust vs wages from a company",
    lead: "Distributions, wages and “help on the land” are different legal facts. Minors are a further flag.",
    questions: [
      "Is the person doing real work, on real hours, that a stranger could be hired to do?",
      "Is the payer a trustee, a company, a sole trader, or “the family”?",
      "Are they under 18, and is the amount excepted income or ordinary trust income?",
      "Is there a present entitlement, a resolution, and an actual payment or UPE?",
      "Would a wages path require PAYG, super and workers compensation in this State?",
    ],
    flags: [
      {
        level: "stop",
        title: "Div 6AA — unearned trust income of minors",
        blurb: "Do not design a “pay the kids from the trust” plan around penalty rates you have not read.",
        detail:
          "Excepted income and excepted person rules are technical. A testamentary trust is a different fact from a living family trust. This notebook will not sketch a minor-distribution strategy. Ask a tax agent before any resolution names a child.",
      },
      {
        level: "watch",
        title: "s100A and present entitlement",
        blurb: "Someone else enjoying the money while a beneficiary is “presently entitled” is a reimbursement-agreement flag.",
        detail:
          "TR 2022/4 is the starting reading. Ordinary family dealings have a carve-out that is not a blank cheque. Unpaid present entitlements, circular distributions and “Mum is entitled but Dad spends it” are how this flag lights up. Document what actually happened.",
      },
      {
        level: "go",
        title: "Wages for real work",
        blurb: "A company or trustee can employ an adult child. The work, the rate and the payroll have to be real.",
        detail:
          "PAYG, superannuation guarantee, and State workers-compensation follow the employer. Division 7A is a further flag if a private company is paying a shareholder or associate in another form. Wages are not a distribution and not a gift. Keep timesheets and a role description that would survive an audit.",
      },
    ],
  },
  {
    id: "debt-recycle",
    title: "Debt recycle / offset vs structure change",
    lead: "Recycling debt against an investment is not a new entity. Changing entity is not a refinance.",
    questions: [
      "Is the current loan on a home, an investment, or mixed-use land?",
      "Would you sell an asset, gift it, or only redraw and re-borrow?",
      "Is the proposed investment inside super, a trust, a company, or personal names?",
      "Would a structure change require a transfer of the land itself?",
      "Have you asked a tax agent about interest deductibility on the actual tracing of funds?",
    ],
    flags: [
      {
        level: "watch",
        title: "Interest deductibility follows the use of funds",
        blurb: "A redraw used to live on is not the same as a redraw used to buy an income asset.",
        detail:
          "Debt recycling, offset accounts and split loans are tracing problems. This screen will not tell you a dollar is deductible. Keep a paper trail from drawdown to investment. Mixed-use land (home plus settlement plus hobby farm) is where tracing breaks.",
      },
      {
        level: "stop",
        title: "Do not move land to “make the interest deductible”",
        blurb: "A transfer into a trust or company is a CGT and duty event. It is not a refinance.",
        detail:
          "People collapse two projects: (1) tidy the loan, (2) change the holder. They are different. Changing the holder so a trust can gear the land is a disposal of the land, plus a new loan, plus trustee and land-tax flags. Get both advisers in the room before a titles form is booked.",
      },
      {
        level: "watch",
        title: "SMSF borrowing is its own statute",
        blurb: "A limited-recourse borrowing arrangement is not a household offset account.",
        detail:
          "SIS, holding-trust title, and in-house asset rules apply. Related-party lending into an SMSF is a specialist flag. Do not recycle a home loan into super as a casual step.",
      },
    ],
  },
];
