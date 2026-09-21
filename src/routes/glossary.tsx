import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { OfficialLinks } from "@/components/official-links";
import { PageHeader } from "@/components/page-header";
import { GLOSSARY, TIMELINE } from "@/data/glossary";
import { DISCLAIMER } from "@/data/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/glossary")({ component: GlossaryPage });

function GlossaryPage() {
  return (
    <article>
      <PageHeader
        kicker="10 · Glossary & timeline"
        title="Short definitions, then the usual order of work"
        lead="No dates presented as legal deadlines. Confirm current law, including 2026–28 announced reforms that may change."
      />

      <div className="space-y-3">
        {GLOSSARY.map((g) => (
          <Term key={g.term} term={g.term} body={g.body} />
        ))}
      </div>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Typical order</h2>
        <p className="mt-2 text-sm text-muted">Advice → documents → registration → stamping/lodgement → land movement → hygiene.</p>
        <ol className="mt-6 space-y-4">
          {TIMELINE.map((t) => (
            <li key={t.step} className="rounded-xl border border-stone bg-card p-4">
              <p className="font-mono text-xs text-subtle">{t.step}</p>
              <h3 className="mt-1 font-display text-xl">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-8 text-sm text-muted">{DISCLAIMER}</p>
      <OfficialLinks />
    </article>
  );
}

function Term({ term, body }: { term: string; body: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={() => setOpen((v) => !v)}
      className={cn(
        "w-full rounded-xl border px-4 py-3.5 text-left",
        open ? "border-forest/35 bg-sage" : "border-stone bg-card",
      )}
    >
      <h3 className="font-display text-lg">{term}</h3>
      <p className={cn("mt-1 text-sm leading-relaxed text-muted", !open && "line-clamp-2")}>{body}</p>
      <p className="mt-2 font-mono text-[0.68rem] tracking-wide text-subtle uppercase">
        {open ? "Tap to close" : "Tap to expand"}
      </p>
    </button>
  );
}
