import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { OfficialLinks } from "@/components/official-links";
import { PageHeader } from "@/components/page-header";
import { CHECKLIST } from "@/data/checklist";
import { DISCLAIMER } from "@/data/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/checklist")({ component: ChecklistPage });

const KEY = "dougs-lab-checklist";

function ChecklistPage() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setDone(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore */
    }
  }, []);

  function toggle(id: string) {
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }

  return (
    <article>
      <PageHeader
        kicker="9 · Action checklist"
        title="Practical next steps, not a paid service"
        lead="Talk to people who can sign their names. Tick items in this browser if it helps you keep order. Ticking is not lodgement."
      />

      <ul className="space-y-3">
        {CHECKLIST.map((item, i) => {
          const on = Boolean(done[item.id]);
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className={cn(
                  "flex w-full gap-3 rounded-xl border p-4 text-left",
                  on ? "border-forest/35 bg-sage" : "border-stone bg-card",
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border",
                    on ? "border-forest bg-forest text-forest-ink" : "border-stone bg-card",
                  )}
                  aria-hidden
                >
                  {on ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6.2 4.6 9 10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  ) : null}
                </span>
                <span>
                  <span className="block font-display text-lg">
                    <span className="mr-2 font-mono text-sm text-subtle">{i + 1}</span>
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{item.body}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <p className="mt-8 max-w-prose text-sm text-muted">{DISCLAIMER}</p>
      <OfficialLinks />
    </article>
  );
}
