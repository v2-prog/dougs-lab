import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { FlagCard, FlagLegend } from "@/components/flag-card";
import { OfficialLinks } from "@/components/official-links";
import { PageHeader } from "@/components/page-header";
import { SCENARIOS } from "@/data/scenarios";
import type { AusState, Flag } from "@/data/types";
import { DISCLAIMER } from "@/data/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/workshop")({ component: WorkshopPage });

function WorkshopPage() {
  const hash = useRouterState({ select: (s) => s.location.hash.replace(/^#/, "") });
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <article>
      <PageHeader
        kicker="5 · Scenario workshop"
        title="Guided sketches, still not calculations"
        lead="Each scenario lists questions a solicitor and tax agent will ask, plus CGT-event and duty watch-fors in plain English. No dollar rates."
      />
      <FlagLegend />

      <div className="mt-8 space-y-14">
        {SCENARIOS.map((sc) => (
          <section key={sc.id} id={sc.id} className="scroll-mt-24">
            <h2 className="font-display text-2xl">{sc.title}</h2>
            <p className="mt-2 max-w-prose text-sm text-muted">{sc.lead}</p>
            <h3 className="mt-5 font-mono text-[0.68rem] tracking-wide text-subtle uppercase">
              Questions they will ask
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
              {sc.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <div className="mt-4 space-y-3">
              {sc.flags.map((f) => (
                <FlagCard key={f.title} flag={f} />
              ))}
            </div>
          </section>
        ))}

        <CgtSketch />
      </div>

      <p className="mt-10 text-sm text-muted">{DISCLAIMER}</p>
      <OfficialLinks />
    </article>
  );
}

type Deal = "sell" | "gift" | "covenant" | "hold";
type Dwelling = "main" | "investment" | "settlement" | "unsure";
type Party = "arm" | "related" | "charity";

function CgtSketch() {
  const [deal, setDeal] = useState<Deal>("sell");
  const [dwelling, setDwelling] = useState<Dwelling>("unsure");
  const [party, setParty] = useState<Party>("arm");
  const [state, setState] = useState<AusState>("ACT");

  const flags = useMemo(() => sketchFlags(deal, dwelling, party, state), [deal, dwelling, party, state]);

  return (
    <section id="cgt" className="scroll-mt-24">
      <h2 className="font-display text-2xl">Sell / gift / covenant CGT sketch</h2>
      <p className="mt-2 max-w-prose text-sm text-muted">
        Live flags, not a tax calculation. Change the facts. Nothing here is a number.
      </p>

      <div className="mt-5 grid gap-4">
        <Field label="What are you sketching?">
          <Pills
            value={deal}
            onChange={setDeal}
            opts={[
              ["sell", "Sell now"],
              ["gift", "Gift during life"],
              ["covenant", "Covenant / agreement"],
              ["hold", "Hold"],
            ]}
          />
        </Field>
        <Field label="What is the land to you?">
          <Pills
            value={dwelling}
            onChange={setDwelling}
            opts={[
              ["main", "Main residence"],
              ["investment", "Investment"],
              ["settlement", "Eco-settlement"],
              ["unsure", "Unsure"],
            ]}
          />
        </Field>
        <Field label="Who is on the other side?">
          <Pills
            value={party}
            onChange={setParty}
            opts={[
              ["arm", "Arm's length buyer"],
              ["related", "Related party"],
              ["charity", "Charity / CLT / DGR"],
            ]}
          />
        </Field>
        <Field label="State of land">
          <Pills
            value={state}
            onChange={setState}
            opts={[
              ["ACT", "ACT"],
              ["NSW", "NSW"],
              ["QLD", "QLD"],
              ["other", "Other"],
            ]}
          />
        </Field>
      </div>

      <div className="mt-5 space-y-3">
        {flags.map((f) => (
          <FlagCard key={f.title} flag={f} defaultOpen />
        ))}
      </div>
    </section>
  );
}

function sketchFlags(deal: Deal, dwelling: Dwelling, party: Party, state: AusState): Flag[] {
  const out: Flag[] = [];
  const st =
    state === "ACT"
      ? "ACT Revenue Office and Access Canberra titles"
      : state === "NSW"
        ? "Revenue NSW and NSW LRS"
        : state === "QLD"
          ? "Queensland Revenue Office and Titles Queensland"
          : "the revenue office and titles office of that State or Territory";

  if (deal === "hold") {
    out.push({
      level: "go",
      title: "Holding is not an event by itself",
      blurb: "No disposal is sketched. Cost-base records still need to exist.",
      detail: `Keep the file. A later sale, gift, covenant or structure change in ${state} will still be an event. Confirm current law, including 2026–28 announced reforms, before you treat “do nothing” as a plan.`,
    });
  }

  if (deal === "sell") {
    out.push({
      level: "watch",
      title: "CGT event A1 is the usual sale flag",
      blurb: "Proceeds minus cost base, then any discount or exemption — calculated by a tax agent, not this page.",
      detail: `A contract of sale generally starts the event. ${st} will see the transfer for duty on the buyer’s side. Do not invent a duty table here.`,
    });
  }

  if (deal === "gift") {
    out.push({
      level: "watch",
      title: "A gift is usually still a disposal",
      blurb: "Market-value substitution generally applies if the parties are not at arm’s length — including a price of zero.",
      detail: `Duty on a gift of land is still often duty in ${state}. A testamentary gift is a different pathway (see the gift-vs-will scenario above).`,
    });
  }

  if (deal === "covenant") {
    out.push({
      level: "watch",
      title: "A conservation agreement is an overlay, not a vehicle",
      blurb: "It can change value, finance and later CGT. It does not replace a holder.",
      detail:
        "Some covenants with eligible bodies have specific income-tax and CGT treatments. Many do not. Match the actual State scheme (for example NSW BCT, QLD nature refuge) with the ATO page that actually names it.",
    });
  }

  if (dwelling === "main" && (deal === "sell" || deal === "gift")) {
    out.push({
      level: "watch",
      title: "Main-residence notes may apply — they are not automatic",
      blurb: "Absence, rental history, and whether the land is actually your home all matter.",
      detail:
        "Eco-settlement land and a future village are not a main residence just because you hope to live there. Flag only.",
    });
  }

  if (dwelling === "settlement") {
    out.push({
      level: "watch",
      title: "Settlement land is not a home exemption by nickname",
      blurb: "Treat it as investment or purpose land until a tax agent says otherwise.",
      detail: "If the destination is a CLT or charity, use the “move land into a CLT” scenario. Do not skip to a deduction.",
    });
  }

  if (party === "related" && deal !== "hold") {
    out.push({
      level: "stop",
      title: "Related-party pricing",
      blurb: "Market-value substitution, possible land-tax and duty integrity rules, and a paper trail.",
      detail:
        "Adding a child to title, transferring to a family trust, or selling to a related company is not a rename. Ask both the tax agent and the solicitor before a transfer is booked.",
    });
  }

  if (party === "charity" && deal !== "hold") {
    out.push({
      level: "watch",
      title: "Charity / DGR is a separate gate",
      blurb: "A gift concession only exists if the recipient is actually the right kind of DGR today.",
      detail:
        "Do not move land because an entity “will apply later”. Build the holder, confirm endorsement, then deal. Duty concessions, if any, are a State question via " +
        st +
        ".",
    });
  }

  if (deal !== "hold") {
    out.push({
      level: "go",
      title: `Next document hop — ${state}`,
      blurb: `Take this sketch to a registered tax agent and a solicitor, then ${st}.`,
      detail: DISCLAIMER,
    });
  }

  return out;
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[0.68rem] tracking-wide text-subtle uppercase">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Pills<T extends string>({
  value,
  onChange,
  opts,
}: {
  value: T;
  onChange: (v: T) => void;
  opts: [T, string][];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {opts.map(([v, label]) => (
        <button
          key={v}
          type="button"
          onClick={() => onChange(v)}
          className={cn(
            "min-h-10 rounded-full border px-3 text-sm",
            value === v ? "border-forest/40 bg-sage" : "border-stone bg-card",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
