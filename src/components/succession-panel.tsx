import { useState } from "react";
import type { Succession } from "@/data/types";
import { BAND_LABEL, CONTROL_LABEL, TERNARY_LABEL } from "@/lib/labels";
import { cn } from "@/lib/utils";

function Row({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      className="w-full border-b border-stone-soft py-3 text-left last:border-b-0"
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-[0.68rem] tracking-wide text-subtle uppercase">{label}</span>
        <span className="font-medium text-ink">{value}</span>
      </div>
      {open ? <p className="mt-2 text-sm leading-relaxed text-muted">{note}</p> : null}
    </button>
  );
}

export function SuccessionPanel({ succession }: { succession: Succession }) {
  return (
    <section className="rounded-xl border border-stone bg-card px-4 py-4">
      <h3 className="font-display text-lg text-ink">Succession & continuity</h3>
      <p className="mt-1 text-sm text-muted">{succession.summary}</p>
      <div className={cn("mt-2")}>
        <Row
          label="Passes through estate?"
          value={TERNARY_LABEL[succession.passesThroughEstate]}
          note={succession.passesNote}
        />
        <Row
          label="Probate exposure"
          value={BAND_LABEL[succession.probateExposure]}
          note={succession.probateNote}
        />
        <Row
          label="Control transfer"
          value={CONTROL_LABEL[succession.controlTransfer]}
          note={succession.controlNote}
        />
        <Row
          label="Delay risk"
          value={BAND_LABEL[succession.delayRisk]}
          note={succession.delayNote}
        />
        <Row
          label="Estate challenge"
          value={BAND_LABEL[succession.estateChallenge]}
          note={succession.challengeNote}
        />
        <Row
          label="Multi-generational continuity"
          value={BAND_LABEL[succession.multiGenContinuity]}
          note={succession.continuityNote}
        />
        <Row
          label="Complexity & cost"
          value={BAND_LABEL[succession.complexity]}
          note={succession.costNote}
        />
      </div>
    </section>
  );
}
