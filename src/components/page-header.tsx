export function PageHeader({
  kicker,
  title,
  lead,
}: {
  kicker?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="mb-8">
      {kicker ? (
        <p className="font-mono text-[0.68rem] tracking-[0.14em] text-forest uppercase">{kicker}</p>
      ) : null}
      <h1 className="mt-1 font-display text-[1.85rem] leading-tight text-ink sm:text-4xl">{title}</h1>
      {lead ? <p className="mt-3 max-w-prose text-[0.98rem] leading-relaxed text-muted">{lead}</p> : null}
    </header>
  );
}
