export type CheckItem = {
  id: string;
  title: string;
  body: string;
};

export const CHECKLIST: CheckItem[] = [
  {
    id: "tax-agent",
    title: "Talk to a registered tax agent",
    body: "Take the household profile, the land facts, and any existing deeds. Ask about CGT events, trust integrity (s100A, Div 6AA), company extraction (Div 7A), SMSF SIS issues, and any 2026–28 announced reforms that might apply. This list is not that meeting.",
  },
  {
    id: "solicitor",
    title: "Talk to a solicitor (deed / will / BDBN)",
    body: "Trust deed and appointor cascade, company or charity constitution and asset lock, will and any testamentary trust or life interest, and a super binding death benefit nomination that matches the fund deed. Do not reuse a shop deed blindly.",
  },
  {
    id: "titles",
    title: "Land titles and duty in the relevant State",
    body: "ACT Revenue / Access Canberra, Revenue NSW and NSW LRS, Queensland Revenue Office and Titles Queensland, or the equivalent elsewhere. Ask which dealing you are actually doing, and whether a concession exists — do not assume one.",
  },
  {
    id: "purpose",
    title: "If a purpose entity — constitution, asset lock, responsible persons",
    body: "Objects limited to the purpose, wind-up to another purpose entity, a board that can replace itself, ACNC registration if it is a charity, and no private remainder. DGR is a later, separate endorsement.",
  },
  {
    id: "smsf",
    title: "If an SMSF — deed and trustee rules",
    body: "Corporate trustee, investment strategy, auditor, in-house asset and related-party property flags, and a current BDBN. Super is not a village commons and not a will.",
  },
  {
    id: "no-move",
    title: "Do not move land before advice",
    body: "A transfer is usually a CGT event and often a dutiable transaction. Renaming a trust, “adding the kids to title”, or settling onto a charity that does not yet exist are all dealings. Pause until the holder is real.",
  },
  {
    id: "records",
    title: "Build the file",
    body: "Contracts, duty receipts, cost-base invoices, trust resolutions, lease copies, and a map of who is on title. Future you, and any executor, will need it.",
  },
  {
    id: "review",
    title: "Diary a review",
    body: "Appointor still alive and willing, BDBN still current, responsible persons still eligible, insurance still matches the holder, and any 2026–28 law change re-checked. Continuity fails quietly.",
  },
];
