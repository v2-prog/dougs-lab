import { OFFICIAL_LINKS } from "@/data/links";

export function OfficialLinks({ extra }: { extra?: { label: string; href: string }[] }) {
  const extras = extra ?? [];
  return (
    <section className="mt-12 border-t border-stone-soft pt-8">
      <h2 className="font-display text-xl text-ink">Official forms and registers</h2>
      <p className="mt-2 max-w-prose text-sm text-muted">
        External Australian government pages. Confirm the document still matches current law
        before you lodge anything.
      </p>
      <ul className="mt-4 space-y-3">
        {extras.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-forest underline-offset-2 hover:underline"
            >
              {l.label}
            </a>
          </li>
        ))}
        {OFFICIAL_LINKS.map((l) => (
          <li key={l.href} className="text-sm">
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-forest underline-offset-2 hover:underline"
            >
              {l.label}
            </a>
            <p className="mt-0.5 text-muted">{l.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
