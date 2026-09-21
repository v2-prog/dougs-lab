import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { OfficialLinks } from "@/components/official-links";
import { DISCLAIMER } from "@/data/types";

export const Route = createFileRoute("/")({ component: Home });

const CARDS = [
  {
    n: "1",
    to: "/explorer",
    title: "Hold investments for the family",
    blurb: "Private stack: trusts, companies, SMSF, bonds.",
  },
  {
    n: "2",
    to: "/workshop",
    hash: "pay-family",
    title: "Pay family members fairly",
    blurb: "Wages vs distributions, Div 6AA, s100A.",
  },
  {
    n: "3",
    to: "/studio",
    title: "Buy or hold land for an eco-settlement or CLT",
    blurb: "Asset lock, duty, ground leases.",
  },
  {
    n: "4",
    to: "/workshop",
    hash: "gift-will",
    title: "Gift or bequest to a purpose entity",
    blurb: "CGT now vs testamentary, DGR deduction.",
  },
  {
    n: "5",
    to: "/compare",
    title: "Compare trust vs company vs co-op vs charity vs SMSF",
    blurb: "Nineteen Australian structures in the explorer; six in the matrix.",
  },
  {
    n: "6",
    to: "/workshop",
    hash: "cgt",
    title: "Run a sell / gift / covenant CGT sketch",
    blurb: "Live flags, not a tax calculation.",
  },
] as const;

function Home() {
  return (
    <article>
      <PageHeader
        kicker="Doug's Structure AU"
        title="What are you trying to work out?"
        lead="Pick the closest fit. Every screen after this stays Australia-only — no LLCs, no FEIE, no Augusta rule, just the local structures that actually apply."
      />

      <ol className="grid gap-3 sm:grid-cols-2">
        {CARDS.map((c) => (
          <li key={c.n}>
            <Link
              to={c.to}
              hash={"hash" in c ? c.hash : undefined}
              className="flex h-full flex-col rounded-xl border border-stone bg-card p-4 text-ink no-underline transition-colors hover:border-forest/40 hover:bg-sage"
            >
              <span className="font-mono text-xs text-subtle">{c.n}</span>
              <span className="mt-2 font-display text-lg leading-snug">{c.title}</span>
              <span className="mt-2 text-sm text-muted">{c.blurb}</span>
            </Link>
          </li>
        ))}
      </ol>

      <p className="mt-6 text-sm">
        <Link to="/profile" className="text-forest underline-offset-2 hover:underline">
          Start with a household profile instead.
        </Link>
      </p>

      <p className="mt-8 max-w-prose text-sm leading-relaxed text-muted">
        The hard line this whole tool holds to: a charity or community land trust with an asset
        lock cannot be a substitute for a family discretionary trust. {DISCLAIMER}
      </p>

      <OfficialLinks />
    </article>
  );
}
