import { createFileRoute, Link } from "@tanstack/react-router";
import { OfficialLinks } from "@/components/official-links";
import { PageHeader } from "@/components/page-header";
import { COMPARE_CODES, getStructure } from "@/data/structures";
import { SUCCESSION_DISCLAIMER } from "@/data/types";
import { ASSET_LOCK_LABEL, BAND_LABEL, CONTROL_LABEL, TERNARY_LABEL } from "@/lib/labels";

export const Route = createFileRoute("/compare")({ component: ComparePage });

const COLS = COMPARE_CODES.map((code) => {
  const s = getStructure(code);
  if (!s) throw new Error(`Missing compare structure ${code}`);
  return s;
});

function ComparePage() {
  return (
    <article>
      <PageHeader
        kicker="8 · Compare"
        title="Six core vehicles, one matrix"
        lead="Control, asset lock, tax flow-through versus company tax, CGT on entry/exit, duty on land in, suitability, and succession & continuity. Scroll sideways on a small screen. Tap a code for the full card."
      />

      <div className="-mx-4 overflow-x-auto px-4 sm:-mx-8 sm:px-8">
        <table className="min-w-[64rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-stone">
              <th className="sticky left-0 z-10 bg-paper py-3 pr-3 font-mono text-[0.68rem] tracking-wide text-subtle uppercase">
                Criterion
              </th>
              {COLS.map((s) => (
                <th key={s.code} className="min-w-[9.5rem] px-2 py-3 align-bottom">
                  <Link
                    to="/explorer/$code"
                    params={{ code: s.code }}
                    className="font-display text-base text-ink no-underline hover:text-forest"
                  >
                    <span className="block font-mono text-[0.65rem] text-subtle">{s.code}</span>
                    {s.name}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label} className="border-b border-stone-soft">
                <th className="sticky left-0 bg-paper py-3 pr-3 align-top font-medium">{row.label}</th>
                {COLS.map((s) => (
                  <td key={s.code} className="px-2 py-3 align-top text-muted">
                    {row.cell(s)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 max-w-prose text-sm leading-relaxed text-muted">{SUCCESSION_DISCLAIMER}</p>
      <OfficialLinks />
    </article>
  );
}

type S = (typeof COLS)[number];

const ROWS: { label: string; cell: (s: S) => string }[] = [
  { label: "Control", cell: (s) => s.whoControls },
  { label: "Asset lock", cell: (s) => ASSET_LOCK_LABEL[s.assetLock] },
  {
    label: "Tax flow-through vs company tax",
    cell: (s) => {
      if (s.code === "PTY") return "Company tax, then franking / Div 7A on extraction.";
      if (s.code === "SMSF") return "Super regime (earnings, contributions, pensions) — not a family trust.";
      if (s.code === "CLT" || s.code === "CT") return "Charity tax character follows endorsement, not the nickname.";
      if (s.code === "COP") return "Co-op / mutuality / member distributions — not automatically a charity.";
      return "Generally flow-through to presently entitled beneficiaries, with s100A and streaming flags.";
    },
  },
  {
    label: "CGT event on entry / exit",
    cell: (s) => {
      if (s.code === "SMSF") return "In-specie contribution is a member CGT event; benefits have their own rules.";
      if (s.code === "CLT" || s.code === "CT") return "Moving private land in is a gift or sale, not a relabel.";
      if (s.code === "PTY") return "Land in, shares out, land out — each can be an event, plus landholder duty.";
      return "Land in is commonly a transfer. Later appointments or unit sales can be further events.";
    },
  },
  {
    label: "Duty on land in",
    cell: () => "Usually a dutiable dealing unless a State concession actually applies. Confirm the revenue office.",
  },
  { label: "Suitability — eco-settlement", cell: (s) => BAND_LABEL[s.ecoFit] },
  { label: "Suitability — family investment", cell: (s) => BAND_LABEL[s.familyFit] },
  { label: "Suitability — bequest", cell: (s) => BAND_LABEL[s.bequestFit] },
  { label: "Succession & continuity", cell: (s) => s.succession.summary },
  { label: "Passes through estate?", cell: (s) => TERNARY_LABEL[s.succession.passesThroughEstate] },
  { label: "Probate exposure", cell: (s) => BAND_LABEL[s.succession.probateExposure] },
  { label: "Control transfer method", cell: (s) => CONTROL_LABEL[s.succession.controlTransfer] },
  { label: "Delay risk", cell: (s) => BAND_LABEL[s.succession.delayRisk] },
  { label: "Estate challenge exposure", cell: (s) => BAND_LABEL[s.succession.estateChallenge] },
  { label: "Multi-generational continuity", cell: (s) => BAND_LABEL[s.succession.multiGenContinuity] },
];
