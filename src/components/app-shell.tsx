import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { APP_DOMAIN, APP_FULL, APP_NAME, APP_SUB, NAV } from "@/data/nav";
import { DISCLAIMER } from "@/data/types";
import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="6" fill="currentColor" className="text-sage" />
      <path d="M7 24.5h18" stroke="#2F5D4F" strokeWidth="1.4" strokeLinecap="round" />
      <path
        fill="#2F5D4F"
        d="M16.2 22.8c.2-4.8 3.6-7.4 6.3-10.2-4.4.4-8.2 3.2-9.1 8.6-1.6-2.8-2.2-5.6-1.4-8.6-2.8 3.4-2.4 7.4 4.2 10.2Z"
      />
    </svg>
  );
}

function navActive(path: string, to: string) {
  if (to === "/") return path === "/";
  return path === to || path.startsWith(`${to}/`);
}

export function AppShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const current = NAV.find((i) => navActive(path, i.to)) ?? NAV[0];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-card focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <header className="no-print sticky top-0 z-30 border-b border-stone-soft bg-paper/95 backdrop-blur-sm lg:hidden">
        <div className="flex items-center gap-3 px-3 py-2.5">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-xl border border-stone-soft bg-card text-ink"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <div className="min-w-0">
            <p className="truncate font-display text-lg leading-tight">
              <span className="mr-2 font-mono text-sm text-subtle">{current.n}</span>
              {current.label}
            </p>
          </div>
        </div>
      </header>

      {open ? (
        <div className="no-print fixed inset-0 z-20 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/25"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute inset-y-0 left-0 w-[min(20rem,88vw)] overflow-y-auto border-r border-stone-soft bg-paper px-4 pb-24 pt-20">
            <Brand />
            <NavList path={path} />
          </nav>
        </div>
      ) : null}

      <div className="lg:grid lg:grid-cols-[17.5rem_minmax(0,1fr)]">
        <aside className="no-print hidden min-h-dvh border-r border-stone-soft bg-paper px-5 py-6 lg:sticky lg:top-0 lg:block lg:self-start lg:overflow-y-auto lg:h-dvh">
          <Brand />
          <NavList path={path} />
        </aside>

        <div className="flex min-h-dvh min-w-0 flex-col">
          <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-8 lg:max-w-5xl lg:py-10">
            {children}
          </main>
          <footer className="no-print mx-auto w-full max-w-3xl px-4 pb-24 sm:px-8 lg:max-w-5xl">
            <p className="border-t border-stone-soft py-6 text-xs leading-relaxed text-subtle">
              {APP_FULL} · {APP_SUB} · {APP_DOMAIN}. Australia only. Not a product store, not a US
              credits company, not legal, tax or financial advice.
            </p>
          </footer>
        </div>
      </div>

      <div className="no-print fixed inset-x-0 bottom-0 z-30 border-t border-stone-soft bg-paper/95 px-4 py-2.5 text-center text-[0.72rem] leading-snug text-muted backdrop-blur-sm">
        {DISCLAIMER}
      </div>
    </div>
  );
}

function Brand() {
  return (
    <Link to="/" className="mb-6 flex items-start gap-3 text-ink no-underline">
      <LogoMark className="mt-0.5 size-9 shrink-0 text-sage" />
      <span>
        <span className="block font-display text-xl leading-tight">{APP_NAME}</span>
        <span className="mt-0.5 block text-xs leading-snug text-muted">{APP_SUB}</span>
        <span className="mt-1 block font-mono text-[0.65rem] tracking-wide text-subtle uppercase">
          {APP_DOMAIN}
        </span>
      </span>
    </Link>
  );
}

function NavList({ path }: { path: string }) {
  return (
    <ul className="mt-4 space-y-0.5">
      {NAV.map((item) => {
        const active = navActive(path, item.to);
        return (
          <li key={item.to}>
            <Link
              to={item.to}
              className={cn(
                "flex items-baseline gap-3 rounded-lg px-2 py-2 text-[0.95rem] no-underline transition-colors",
                active ? "bg-sage text-ink" : "text-ink hover:bg-paper-2",
              )}
            >
              <span className="w-5 shrink-0 font-mono text-xs text-subtle">{item.n}</span>
              <span className="leading-snug">{item.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
