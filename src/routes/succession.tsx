import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { OfficialLinks } from "@/components/official-links";
import { SuccessionPanel } from "@/components/succession-panel";
import { SUCCESSION_DISCLAIMER } from "@/data/types";
import { useProfileStore } from "@/lib/profile-store";
import { OBJECTIVE_LABEL, rankStructures } from "@/lib/profile-route";
import { BAND_LABEL, CONTROL_LABEL, TERNARY_LABEL } from "@/lib/labels";

export const Route = createFileRoute("/succession")({ component: SuccessionPage });

function SuccessionPage() {
  const profile = useProfileStore((s) => s.profile);
  const saved = useProfileStore((s) => s.saved);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  const ranked = rankStructures(hydrated ? profile : { ...profile, objective: "family-succession" });
  const focus = hydrated && saved && profile.objective === "family-succession";

  return (
    <article>
      <PageHeader
        kicker="3 · Succession planner"
        title="Direct transfer of control at death"
        lead="Minimal probate exposure, administrative delay, or estate challenge risk, while maintaining continuity of management and purpose. Assessment only — no structure can guarantee a quiet death."
      />

      <section className="rounded-xl border border-stone bg-card p-4">
        <h2 className="font-display text-xl">Succession objective</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Direct transfer of control at death with reduced probate exposure, administrative delay,
          or estate challenge risk, while keeping management and purpose continuous.
        </p>
        {hydrated && saved ? (
          <p className="mt-3 text-sm">
            Your profile objective is <strong>{OBJECTIVE_LABEL[profile.objective]}</strong>
            {focus
              ? ". Structures below are ordered for clearer control pathways, reduced probate dependence, and longer stewardship."
              : ". Set the profile to Family succession if you want this ordering to prefer continuity over during-life protection."}{" "}
            <Link to="/profile" className="text-forest underline-offset-2 hover:underline">
              Edit profile
            </Link>
          </p>
        ) : (
          <p className="mt-3 text-sm">
            <Link to="/profile" className="text-forest underline-offset-2 hover:underline">
              Save a household profile
            </Link>{" "}
            to reorder this list.
          </p>
        )}
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl">Assessment criteria</h2>
        <p className="mt-2 text-sm text-muted">
          Every structure card in the explorer carries the same seven questions. Tap a row on a
          card to read the note.
        </p>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed">
          <li>
            <strong>Passes through estate?</strong> Do assets form part of the deceased estate, or
            can control move outside it?
          </li>
          <li>
            <strong>Probate exposure.</strong> Is a grant typically required before successors can
            act?
          </li>
          <li>
            <strong>Control transfer.</strong> Will, trustee, director, appointor, shareholder, or
            governance.
          </li>
          <li>
            <strong>Delay risk.</strong> Can the next generation act immediately?
          </li>
          <li>
            <strong>Estate challenge.</strong> How much does the plan rely on a will that a court
            might rewrite?
          </li>
          <li>
            <strong>Complexity and cost.</strong> Implementation, ongoing administration, legal
            complexity of succession.
          </li>
          <li>
            <strong>Multi-generational continuity.</strong> Land, enterprise, family stewardship, or
            community purpose across generations.
          </li>
        </ul>
      </section>

      <ol className="mt-8 space-y-4">
        {ranked.map((s) => (
          <li key={s.code} className="rounded-xl border border-stone bg-card p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl">
                <span className="mr-2 font-mono text-sm text-subtle">{s.code}</span>
                {s.name}
              </h3>
              <Link
                to="/explorer/$code"
                params={{ code: s.code }}
                className="text-sm text-forest underline-offset-2 hover:underline"
              >
                Full card
              </Link>
            </div>
            <p className="mt-1 text-sm text-muted">{s.succession.summary}</p>
            <p className="mt-3 font-mono text-[0.68rem] tracking-wide text-subtle uppercase">
              Estate {TERNARY_LABEL[s.succession.passesThroughEstate]} · Probate{" "}
              {BAND_LABEL[s.succession.probateExposure]} · {CONTROL_LABEL[s.succession.controlTransfer]} ·
              Delay {BAND_LABEL[s.succession.delayRisk]} · Challenge{" "}
              {BAND_LABEL[s.succession.estateChallenge]} · Continuity{" "}
              {BAND_LABEL[s.succession.multiGenContinuity]}
            </p>
            <div className="mt-4">
              <SuccessionPanel succession={s.succession} />
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-8 max-w-prose text-sm leading-relaxed text-muted">{SUCCESSION_DISCLAIMER}</p>
      <OfficialLinks />
    </article>
  );
}
