import { createFileRoute, Link } from "@tanstack/react-router";
import { FlagCard, FlagLegend } from "@/components/flag-card";
import { OfficialLinks } from "@/components/official-links";
import { PageHeader } from "@/components/page-header";
import { SuccessionPanel } from "@/components/succession-panel";
import { getStructure } from "@/data/structures";
import { DISCLAIMER, SUCCESSION_DISCLAIMER } from "@/data/types";
import { ASSET_LOCK_LABEL, BAND_LABEL } from "@/lib/labels";

export const Route = createFileRoute("/explorer_/$code")({
  component: StructureDetail,
});

function StructureDetail() {
  const { code } = Route.useParams();
  const s = getStructure(code);
  if (!s) {
    return (
      <article>
        <PageHeader title="Unknown structure" lead="That code is not in the nineteen." />
        <Link to="/explorer" className="text-forest underline-offset-2 hover:underline">
          Back to explorer
        </Link>
      </article>
    );
  }
  return (
    <article>
      <p className="mb-4 text-sm">
        <Link to="/explorer" className="text-forest underline-offset-2 hover:underline">
          ← Structure explorer
        </Link>
      </p>
      <PageHeader kicker={`4 · ${s.code}`} title={s.name} lead={s.short} />
      <FlagLegend />

      <dl className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-stone bg-card p-4">
          <dt className="font-mono text-[0.68rem] tracking-wide text-subtle uppercase">Asset lock</dt>
          <dd className="mt-1 text-sm">{ASSET_LOCK_LABEL[s.assetLock]}</dd>
        </div>
        <div className="rounded-xl border border-stone bg-card p-4">
          <dt className="font-mono text-[0.68rem] tracking-wide text-subtle uppercase">Who controls it</dt>
          <dd className="mt-1 text-sm">{s.whoControls}</dd>
        </div>
        <div className="rounded-xl border border-stone bg-card p-4">
          <dt className="font-mono text-[0.68rem] tracking-wide text-subtle uppercase">Family investment fit</dt>
          <dd className="mt-1 text-sm">{BAND_LABEL[s.familyFit]}</dd>
        </div>
        <div className="rounded-xl border border-stone bg-card p-4">
          <dt className="font-mono text-[0.68rem] tracking-wide text-subtle uppercase">Eco-settlement fit</dt>
          <dd className="mt-1 text-sm">{BAND_LABEL[s.ecoFit]}</dd>
        </div>
      </dl>

      <section className="mt-8">
        <h2 className="font-display text-xl">What it is</h2>
        <p className="mt-2 max-w-prose text-sm leading-relaxed">{s.what}</p>
      </section>
      <section className="mt-6">
        <h2 className="font-display text-xl">Who it is for</h2>
        <p className="mt-2 max-w-prose text-sm leading-relaxed">{s.whoFor}</p>
      </section>
      <section className="mt-6">
        <h2 className="font-display text-xl">When it is the wrong tool</h2>
        <p className="mt-2 max-w-prose text-sm leading-relaxed">{s.wrongTool}</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="font-display text-xl">Typical tax character</h2>
        {s.taxFlags.map((f) => (
          <FlagCard key={f.title} flag={f} />
        ))}
      </section>
      <section className="mt-8 space-y-3">
        <h2 className="font-display text-xl">Duty and CGT tripwires</h2>
        {s.dutyCgtFlags.map((f) => (
          <FlagCard key={f.title} flag={f} />
        ))}
      </section>

      <div className="mt-8">
        <SuccessionPanel succession={s.succession} />
      </div>

      <p className="mt-8 max-w-prose text-sm leading-relaxed text-muted">
        {SUCCESSION_DISCLAIMER} {DISCLAIMER}
      </p>
      <OfficialLinks extra={s.links} />
    </article>
  );
}
