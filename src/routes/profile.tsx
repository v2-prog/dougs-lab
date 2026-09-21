import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { OfficialLinks } from "@/components/official-links";
import type { AusState, HouseholdProfile, LandUse, Objective } from "@/data/types";
import { DISCLAIMER } from "@/data/types";
import { DEFAULT_PROFILE, useProfileStore } from "@/lib/profile-store";
import { LAND_LABEL, OBJECTIVE_LABEL, profileSummary } from "@/lib/profile-route";
import { STRUCTURES } from "@/data/structures";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/profile")({ component: ProfilePage });

function ProfilePage() {
  const stored = useProfileStore((s) => s.profile);
  const saved = useProfileStore((s) => s.saved);
  const replace = useProfileStore((s) => s.replace);
  const reset = useProfileStore((s) => s.reset);
  const [draft, setDraft] = useState<HouseholdProfile>(stored);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setDraft(useProfileStore.getState().profile);
    setHydrated(true);
  }, []);

  const summary = hydrated && saved ? profileSummary(draft) : null;

  function patch<K extends keyof HouseholdProfile>(key: K, value: HouseholdProfile[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
  }

  return (
    <article>
      <PageHeader
        kicker="2 · Household profile"
        title="A short structured form. No account."
        lead="Answers stay in this browser. They route the explorer and succession planner. They are not a client file."
      />

      <form
        className="space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          replace(draft);
        }}
      >
        <fieldset>
          <legend className="font-display text-lg">Household size</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <Choice key={n} active={draft.size === n} onClick={() => patch("size", n)}>
                {n === 8 ? "8+" : String(n)}
              </Choice>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-display text-lg">Land in view</legend>
          <div className="mt-3 grid gap-2">
            {(Object.keys(LAND_LABEL) as LandUse[]).map((k) => (
              <Choice key={k} active={draft.landUse === k} onClick={() => patch("landUse", k)} block>
                {LAND_LABEL[k].replace(/^./, (c) => c.toUpperCase())}
              </Choice>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-display text-lg">Primary objective</legend>
          <p className="mt-1 text-sm text-muted">
            If family succession is selected, later screens prefer structures with clearer control
            pathways and less dependence on probate.
          </p>
          <div className="mt-3 grid gap-2">
            {(Object.keys(OBJECTIVE_LABEL) as Objective[]).map((k) => (
              <Choice key={k} active={draft.objective === k} onClick={() => patch("objective", k)} block>
                {OBJECTIVE_LABEL[k]}
              </Choice>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-display text-lg">Already in play</legend>
          <div className="mt-3 grid gap-2">
            <Choice
              active={draft.purposeEntity}
              onClick={() => patch("purposeEntity", !draft.purposeEntity)}
              block
            >
              A purpose entity already exists
            </Choice>
            <Choice active={draft.smsf} onClick={() => patch("smsf", !draft.smsf)} block>
              An SMSF is in play
            </Choice>
            <Choice active={draft.will} onClick={() => patch("will", !draft.will)} block>
              A will exists
            </Choice>
            <Choice active={draft.bdbn} onClick={() => patch("bdbn", !draft.bdbn)} block>
              A binding death benefit nomination exists
            </Choice>
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-display text-lg">State of land</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {(["ACT", "NSW", "QLD", "other"] as AusState[]).map((s) => (
              <Choice key={s} active={draft.state === s} onClick={() => patch("state", s)}>
                {s === "other" ? "Other" : s}
              </Choice>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-xl bg-forest px-4 py-2.5 text-sm font-medium text-forest-ink"
          >
            Save in this browser
          </button>
          <button
            type="button"
            className="rounded-xl border border-stone bg-card px-4 py-2.5 text-sm"
            onClick={() => {
              reset();
              setDraft(DEFAULT_PROFILE);
            }}
          >
            Clear
          </button>
        </div>
      </form>

      {summary ? (
        <section className="mt-10 rounded-xl border border-forest/30 bg-sage p-5">
          <h2 className="font-display text-2xl">{summary.headline}</h2>
          <p className="mt-3 text-sm leading-relaxed">{summary.body}</p>
          <p className="mt-3 font-mono text-[0.68rem] tracking-wide text-subtle uppercase">
            You are in this consolidation of structures
          </p>
          <ul className="mt-3 space-y-2">
            {summary.codes.map((code) => {
              const s = STRUCTURES.find((x) => x.code === code);
              if (!s) return null;
              return (
                <li key={code}>
                  <Link
                    to="/explorer/$code"
                    params={{ code: s.code }}
                    className="text-forest underline-offset-2 hover:underline"
                  >
                    <span className="font-mono text-xs">{s.code}</span> · {s.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            {summary.next.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-xl border border-forest/30 bg-card px-3 py-2 text-sm text-ink no-underline"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <p className="mt-8 text-sm text-muted">Save to see a plain-language consolidation. {DISCLAIMER}</p>
      )}

      <OfficialLinks />
    </article>
  );
}

function Choice({
  active,
  onClick,
  children,
  block,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
  block?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-11 rounded-xl border px-3 py-2 text-left text-sm",
        block && "w-full",
        active ? "border-forest/40 bg-sage text-ink" : "border-stone bg-card text-ink",
      )}
    >
      {children}
    </button>
  );
}
