import { createFileRoute } from "@tanstack/react-router";
import { FlagCard, FlagLegend } from "@/components/flag-card";
import { OfficialLinks } from "@/components/official-links";
import { PageHeader } from "@/components/page-header";
import { STUDIO } from "@/data/studio";
import { DISCLAIMER } from "@/data/types";

export const Route = createFileRoute("/studio")({ component: StudioPage });

function StudioPage() {
  return (
    <article>
      <PageHeader
        kicker="6 · CLT / charity / co-op studio"
        title="Purpose land, without the nickname"
        lead="Asset lock versus family wealth. Ground lease versus freehold. DGR as a conceptual pathway — never promised. Co-op versus company limited by guarantee versus charitable trust. Why a purpose wrapper does not replace a family discretionary trust. First Nations land-trust ideas as adjacent models, clearly labelled as general information."
      />
      <FlagLegend />

      <div className="mt-8 space-y-12">
        {STUDIO.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
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

      <p className="mt-10 max-w-prose text-sm leading-relaxed text-muted">
        The hard line this whole tool holds to: a charity or community land trust with an asset lock
        cannot be a substitute for a family discretionary trust. {DISCLAIMER}
      </p>
      <OfficialLinks />
    </article>
  );
}
