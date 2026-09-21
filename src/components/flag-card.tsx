import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Flag, FlagLevel } from "@/data/types";

const DOT: Record<FlagLevel, string> = {
  go: "bg-go",
  watch: "bg-watch",
  stop: "bg-stop",
};

export function FlagDot({ level, className }: { level: FlagLevel; className?: string }) {
  return (
    <span
      className={cn("mt-1.5 size-2 shrink-0 rounded-full", DOT[level], className)}
      aria-hidden
    />
  );
}

export function FlagCard({ flag, defaultOpen = false }: { flag: Flag; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={() => setOpen((v) => !v)}
      className={cn(
        "w-full rounded-xl border px-4 py-3.5 text-left transition-colors duration-200",
        flag.level === "go" && "border-forest/35 bg-sage",
        flag.level === "watch" && "border-stone bg-card",
        flag.level === "stop" && "border-stone bg-card",
        open && flag.level === "watch" && "bg-watch-wash",
        open && flag.level === "stop" && "bg-stop-wash",
      )}
    >
      <div className="flex gap-3">
        <FlagDot level={flag.level} />
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-[1.05rem] leading-snug text-ink">{flag.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{flag.blurb}</p>
          {open ? (
            <p className="mt-3 text-sm leading-relaxed text-ink">{flag.detail}</p>
          ) : (
            <p className="mt-2 font-mono text-[0.68rem] tracking-wide text-subtle uppercase">
              Tap to expand
            </p>
          )}
        </div>
      </div>
    </button>
  );
}

export function FlagLegend() {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.68rem] tracking-wide text-muted uppercase">
      <li className="flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-go" /> Relies on registration
      </li>
      <li className="flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-watch" /> Take into account
      </li>
      <li className="flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-stop" /> Warning
      </li>
    </ul>
  );
}
