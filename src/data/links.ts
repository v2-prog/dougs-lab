export type OfficialLink = { label: string; href: string; note: string };

export const OFFICIAL_LINKS: OfficialLink[] = [
  {
    label: "ASIC — companies, registers, lodgements",
    href: "https://asic.gov.au",
    note: "Company, co-operative (some states) and financial-services registers.",
  },
  {
    label: "ASIC — registering a company",
    href: "https://asic.gov.au/for-business/registering-a-company/",
    note: "Pty Ltd and company limited by guarantee start here, then a constitution.",
  },
  {
    label: "ATO — home",
    href: "https://www.ato.gov.au",
    note: "Income tax, CGT, GST, super and not-for-profit endorsement.",
  },
  {
    label: "ATO — trusts",
    href: "https://www.ato.gov.au/businesses-and-organisations/trusts",
    note: "Trust net income, resolutions, and trustee obligations.",
  },
  {
    label: "ATO — section 100A reimbursement agreements",
    href: "https://www.ato.gov.au/law/view/document?DocID=TXR/TR20224/NAT/ATO/00001",
    note: "Read TR 2022/4 with your tax agent before unpaid-present-entitlement patterns.",
  },
  {
    label: "ATO — trust income of minors (Div 6AA)",
    href: "https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/income/trust-distributions-to-minors",
    note: "Excepted income vs excepted person — do not assume a child’s rate applies.",
  },
  {
    label: "ATO — capital gains tax",
    href: "https://www.ato.gov.au/individuals-and-families/investments-and-assets/capital-gains-tax",
    note: "Events, cost base, market-value substitution, main-residence notes.",
  },
  {
    label: "ATO — self-managed super funds",
    href: "https://www.ato.gov.au/super-funds/self-managed-super-funds",
    note: "SIS covenants, in-house assets, business real property, BDBNs.",
  },
  {
    label: "ATO — deductible gift recipients",
    href: "https://www.ato.gov.au/businesses-and-organisations/not-for-profit-organisations/getting-started/in-detail/types-of-dgrs",
    note: "DGR is an endorsement, not a brand. Do not promise it.",
  },
  {
    label: "ACNC — charities",
    href: "https://www.acnc.gov.au",
    note: "Charity registration, governance standards, responsible persons.",
  },
  {
    label: "ACNC — start a charity",
    href: "https://www.acnc.gov.au/for-charities/start-charity",
    note: "Objects, charity subtype, and what “not-for-profit” actually requires.",
  },
  {
    label: "ORIC — Aboriginal and Torres Strait Islander corporations",
    href: "https://www.oric.gov.au",
    note: "CATSI corporations, rule books, PBC guidance. Not Native Title advice.",
  },
  {
    label: "NNTT — Indigenous Land Use Agreements",
    href: "https://www.nativetitle.org.au",
    note: "ILUA and native title process information. Confirm with specialist counsel.",
  },
  {
    label: "NSW Fair Trading — co-operatives",
    href: "https://www.fairtrading.nsw.gov.au/associations-and-co-operatives/co-operatives",
    note: "Co-operatives National Law as applied in participating jurisdictions.",
  },
  {
    label: "NSW Fair Trading — incorporated associations",
    href: "https://www.fairtrading.nsw.gov.au/associations-and-co-operatives/incorporated-associations",
    note: "State association rules; other States have parallel registrars.",
  },
  {
    label: "Revenue NSW — duties",
    href: "https://www.revenue.nsw.gov.au",
    note: "Transfer duty, surcharge, and concessional pathways for NSW land.",
  },
  {
    label: "ACT Revenue Office",
    href: "https://www.revenue.act.gov.au",
    note: "Conveyance duty and related ACT land taxes.",
  },
  {
    label: "Queensland Revenue Office",
    href: "https://qro.qld.gov.au",
    note: "Transfer duty, land tax and related QLD flags.",
  },
  {
    label: "NSW Land Registry Services",
    href: "https://www.nswlrs.com.au",
    note: "Title, dealings, and covenant registration in NSW.",
  },
  {
    label: "Access Canberra — land titles",
    href: "https://www.accesscanberra.act.gov.au",
    note: "ACT titles, duty, and related lodgement.",
  },
  {
    label: "Titles Queensland",
    href: "https://www.titlesqld.com.au",
    note: "QLD land titles and dealings.",
  },
  {
    label: "NSW Biodiversity Conservation Trust — conservation agreements",
    href: "https://www.bct.nsw.gov.au",
    note: "One State example of a conservation-agreement overlay. Other States differ.",
  },
  {
    label: "Australian Business Register",
    href: "https://abr.business.gov.au",
    note: "ABN, GST, charity and DGR status as recorded — always re-check.",
  },
];

export const LINK_GROUPS: { title: string; codes: string[] }[] = [];
