import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { FlagLegend } from "@/components/flag-card";
import { OfficialLinks } from "@/components/official-links";
import { STRUCTURES } from "@/data/structures";
import type { StructureKind } from "@/data/types";
import { ASSET_LOCK_LABEL } from "@/lib/labels";
import { useProfileStore } from "@/lib/profile-store";
import { rankStructures } from "@/lib/profile-route";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/explorer")({ component: ExplorerPage });

const KINDS: { id: "all" | StructureKind; label: string }[] = [
  { id: "all", label: "All 19" },
  { id: "family", label: "Family" },
  { id: "enterprise", label: "Enterprise" },
  { id: "super", label: "Super" },
  { id: "purpose", label: "Purpose" },
  { id: "land-overlay", label: "Land overlay" },
  { id: "first-nations", label: "First Nations" },
];

function ExplorerPage() {
  const [q, setQ] = useState("");
  const [kind, setKind] = useState<(typeof KINDS)[number]["id"]>("all");
  const profile = useProfileStore((s) => s.profile);
  const saved = useProfileStore((s) => s.saved);

  const list = useMemo(() => {
    const base = saved ? rankStructures(profile) : STRUCTURES;
    return base.filter((s) => {
      if (kind !== "all" && s.kind !== kind) return false;
      if (!q.trim()) return true;
      const hay = `${s.code} ${s.name} ${s.short} ${s.what}`.toLowerCase();
      return hay.includes(q.trim().toLowerCase());
    });
  }, [kind, q, profile, saved]);

  return (
    <article>
      <PageHeader
        kicker="4 · Structure explorer"
        title="Nineteen Australian structures"
        lead="A browsable library. Each card: what it is, who it is for, asset-lock, control, tax character flags, duty and CGT tripwires, when it is the wrong tool, and succession & continuity. Australia only."
      />
      <FlagLegend />

      <div className="mt-6 flex flex-col gap-3">
        <label className="text-sm">
          <span className="sr-only">Search structures</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name or code"
            className="h-11 w-full rounded-xl border border-stone bg-card px-3 text-sm outline-none focus:border-forest"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {KINDS.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => setKind(k.id)}
              className={cn(
                "min-h-10 rounded-full border px-3 text-sm",
                kind === k.id ? "border-forest/40 bg-sage" : "border-stone bg-card",
              )}
            >
              {k.label}
            </button>
          ))}
        </div>
      </div>

      <ol className="mt-6 space-y-3">
        {list.map((s) => (
          <li key={s.code}>
            <Link
              to="/explorer/$code"
              params={{ code: s.code }}
              className="block rounded-xl border border-stone bg-card p-4 text-ink no-underline transition-colors hover:border-forest/40 hover:bg-sage"
            >
              <p className="font-mono text-xs text-subtle">
                {s.code} · {ASSET_LOCK_LABEL[s.assetLock]}
              </p>
              <h2 className="mt-1 font-display text-xl">{s.name}</h2>
              <p className="mt-1 text-sm text-muted">{s.short}</p>
            </Link>
          </li>
        ))}
      </ol>
      {list.length === 0 ? <p className="mt-6 text-sm text-muted">No structures match that filter.</p> : null}
      <OfficialLinks />
    </article>
  );
}
