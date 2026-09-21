import type { Flag } from "./types";

export type VillageSection = {
  id: string;
  title: string;
  lead: string;
  flags: Flag[];
};

export const VILLAGE: VillageSection[] = [
  {
    id: "stack",
    title: "A village is a stack, not a single vehicle",
    lead: "Land, enterprise and household wealth almost never fit in one deed. Trying is how fake CLTs get written.",
    flags: [
      {
        level: "go",
        title: "Three layers, three remainders",
        blurb:
          "Commons land in a locked purpose entity. Working enterprises in a co-op or Pty Ltd. Family investments in a discretionary trust, FIC or SMSF.",
        detail:
          "Regenerative settlement is an economic design, then a legal design. The dirt that must stay affordable or ecological sits in a CLT / charity / locked co-op. The bakery, produce box or building crew sits in a member enterprise. Household super and shares sit in family structures. Wages, ground rent and (sometimes) donations are the pipes between them. Each pipe is a tax and duty flag.",
      },
      {
        level: "stop",
        title: "One trust cannot be the village",
        blurb: "A family discretionary trust that also “holds the commons” is neither locked nor a clean family office.",
        detail:
          "If the trustee can appoint capital to the settlor's children, later residents do not have a commons. If the trustee cannot, the family does not have a remainder. Pick which job this parcel of land is doing. Put the other job on other assets.",
      },
    ],
  },
  {
    id: "commons",
    title: "Commons, use rights and speculation",
    lead: "The economic question is who captures land-value growth. The legal question is who is on title.",
    flags: [
      {
        level: "go",
        title: "Ground lease as the household economy",
        blurb: "Residents pay for use. Improvements may be theirs on a formula. The land remainder stays on purpose.",
        detail:
          "A bankable, inheritable (on stated terms) ground lease is what a household actually lives with. Formula resale of improvements is a policy choice with CGT flags for the resident. Silent market rent reviews can destroy affordability. Write the economics in the lease; do not leave them in a vision document.",
      },
      {
        level: "watch",
        title: "Rates, land tax and water still arrive",
        blurb: "A regenerative story does not suspend the revenue office.",
        detail:
          "Who is the rated occupier, who is the land-tax holder, and whether a charity exemption actually applies are State questions. Do not assume a CLT pays nothing. Do not assume a resident on a ground lease pays nothing. Ask the revenue office pathway in the State of the land (ACT, NSW, QLD or other).",
      },
      {
        level: "watch",
        title: "Planning, bushfire, water and biodiversity overlays",
        blurb: "Settlement yield is a planning fact before it is a structure fact.",
        detail:
          "Dwelling entitlements, bushfire attack level, flood, native vegetation, and any conservation covenant change what can be built and what the land is worth. Structure choice cannot invent a second dwelling. Confirm planning before a constitution is printed.",
      },
    ],
  },
  {
    id: "enterprise",
    title: "Village enterprise and member pay",
    lead: "Circular flows (produce, compost, energy, care) are design. They are not a tax dodge.",
    flags: [
      {
        level: "go",
        title: "Co-op for member economic participation",
        blurb: "If people will actually work and share surplus as members, a co-operative is often the honest enterprise layer.",
        detail:
          "Distributing versus non-distributing rules change tax character. A co-op is not automatically a charity and not automatically an asset lock. Many clean designs put the land in a CLG charity and the enterprise in a co-op that leases from it.",
      },
      {
        level: "watch",
        title: "Volunteers, members and employees are different",
        blurb: "Food, lodging and “hours for rent” can be wages in disguise.",
        detail:
          "If an adult is working for the village, ask whether they are a volunteer, a member, a tenant doing a lease duty, or an employee. PAYG, super and workers compensation follow the last of those. Barter of lodging for labour has a market-value flag. Write the role before anyone moves on site.",
      },
      {
        level: "stop",
        title: "Do not park housing in an SMSF",
        blurb: "Related-party residential use collides with SIS. Super is not a village commons.",
        detail:
          "Business real property exceptions are narrow. An SMSF is a retirement vehicle with a sole-purpose test. It can sit in the family layer of the stack. It is the wrong holder for eco-settlement houses.",
      },
    ],
  },
  {
    id: "join",
    title: "First Nations, neighbours and the edge of the site",
    lead: "A regenerative village still sits on Country. Adjacent models are not a merger.",
    flags: [
      {
        level: "go",
        title: "Join by lease, licence or ILUA — never by blending deeds",
        blurb: "A settler CLT does not absorb a PBC, LALC or CATSI corporation.",
        detail:
          "If native title or land-rights process applies, the rights-holding body is the holder of that interest. This notebook is not Native Title advice. Specialist counsel, and the relevant statutory process, come before any ground-breaking story.",
      },
      {
        level: "watch",
        title: "Neighbourhood infrastructure is still someone else's asset",
        blurb: "Shared energy, water and roads need an owner, an insurer and a repair rule.",
        detail:
          "A body corporate, a co-op, a charity, or a council asset — pick one. Informal “we'll all chip in” fails at the first pump replacement and at the first injury. Put infrastructure in the layer that can insure it.",
      },
    ],
  },
];
