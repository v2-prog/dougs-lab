import { createFileRoute } from "@tanstack/react-router";
import { FlagCard, FlagLegend } from "@/components/flag-card";
import { OfficialLinks } from "@/components/official-links";
import { PageHeader } from "@/components/page-header";
import { VILLAGE } from "@/data/village";
import { DISCLAIMER } from "@/data/types";

export const Route = createFileRoute("/village")({ component: VillagePage });

function VillagePage() {
  return (
    <article>
      <PageHeader
        kicker="7 · Economic regenerative village"
        title="Land, enterprise and household wealth as one settlement"
        lead="Circular towns, member pay, commons and ground leases — as flags for Australian structures, not as a prospectus. A village is a stack. It is not a single deed."
      />
      <FlagLegend />

      <div className="mt-8 space-y-12">
        {VILLAGE.map((section) => (
          <section key={section.id}>
            <h2 className="font-display text-2xl">{section.title}</h2>
            <p className="mt-2 max-w-prose text-sm text-muted">{section.lead}</p>
            <div className="mt-4 space-y-3">
              {section.flags.map((f) => (
                <FlagCard key={f.title} flag={f} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-10 max-w-prose text-sm text-muted">{DISCLAIMER}</p>
      <OfficialLinks />
    </article>
  );
}
