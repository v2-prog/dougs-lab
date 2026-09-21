import type { HouseholdProfile, Structure } from "@/data/types";
import { STRUCTURES } from "@/data/structures";

const BAND = { low: 1, medium: 2, high: 3 } as const;

export const OBJECTIVE_LABEL: Record<HouseholdProfile["objective"], string> = {
  "asset-protection": "Asset protection during life",
  "family-succession": "Family succession",
  "multi-gen": "Multi-generational stewardship",
  community: "Community ownership",
  charitable: "Charitable purpose",
  hybrid: "Hybrid goals",
};

export const LAND_LABEL: Record<HouseholdProfile["landUse"], string> = {
  "owner-occupier": "owner-occupier land",
  investment: "investment land",
  "eco-settlement": "intended eco-settlement land",
  mixed: "mixed owner-occupier, investment and settlement land",
};

export function rankStructures(profile: HouseholdProfile): Structure[] {
  const scored = STRUCTURES.map((s) => ({ s, n: score(s, profile) }));
  scored.sort((a, b) => b.n - a.n || a.s.name.localeCompare(b.s.name));
  return scored.map((x) => x.s);
}

function score(s: Structure, p: HouseholdProfile): number {
  let n = 0;
  switch (p.objective) {
    case "family-succession":
      n += 4 - BAND[s.succession.probateExposure];
      n += 4 - BAND[s.succession.delayRisk];
      n += BAND[s.succession.multiGenContinuity];
      if (["appointor", "trustee", "director", "governance"].includes(s.succession.controlTransfer)) n += 2;
      n += BAND[s.familyFit];
      break;
    case "asset-protection":
      n += s.assetLock === "no" && (s.kind === "family" || s.kind === "enterprise" || s.kind === "super") ? 2 : 0;
      n += BAND[s.familyFit];
      if (s.code === "DT" || s.code === "FIC" || s.code === "PTY" || s.code === "SMSF") n += 3;
      break;
    case "multi-gen":
      n += BAND[s.succession.multiGenContinuity] * 2;
      n += BAND[s.familyFit];
      n += BAND[s.ecoFit];
      break;
    case "community":
      n += BAND[s.ecoFit] * 2;
      if (s.assetLock === "yes") n += 4;
      if (s.kind === "purpose" || s.kind === "first-nations") n += 3;
      break;
    case "charitable":
      if (s.assetLock === "yes") n += 4;
      n += BAND[s.bequestFit] * 2;
      if (s.code === "CT" || s.code === "CLG" || s.code === "CLT") n += 3;
      break;
    case "hybrid":
      n += BAND[s.familyFit] + BAND[s.ecoFit] + BAND[s.bequestFit];
      n += BAND[s.succession.multiGenContinuity];
      break;
  }
  if (p.landUse === "eco-settlement" || p.landUse === "mixed") n += BAND[s.ecoFit];
  if (p.smsf && s.code === "SMSF") n += 2;
  if (p.purposeEntity && (s.kind === "purpose" || s.code === "CLT")) n += 1;
  return n;
}

export function profileSummary(p: HouseholdProfile): {
  headline: string;
  body: string;
  next: { to: string; label: string }[];
  codes: string[];
} {
  const ranked = rankStructures(p);
  const top = ranked.slice(0, 5);
  const size = `${p.size}-person household in ${p.state}`;
  const bits = [
    LAND_LABEL[p.landUse],
    p.purposeEntity ? "a purpose entity already exists" : "no purpose entity on file yet",
    p.smsf ? "an SMSF is in play" : "no SMSF noted",
    p.will ? "a will exists" : "no will noted",
    p.bdbn ? "a BDBN exists" : "no BDBN noted",
  ];

  const headline = `You sit in a ${objectiveNoun(p)} stack.`;
  const body = `${size}, with ${bits.join("; ")}. Primary objective: ${OBJECTIVE_LABEL[p.objective].toLowerCase()}. Typical consolidation to explore — still flags, not advice — starts with ${top.map((s) => s.name).join(", ")}.`;

  const next: { to: string; label: string }[] = [];
  if (p.objective === "family-succession" || p.objective === "multi-gen") {
    next.push({ to: "/succession", label: "Open the succession planner" });
  }
  if (p.landUse === "eco-settlement" || p.landUse === "mixed" || p.objective === "community" || p.objective === "charitable") {
    next.push({ to: "/studio", label: "Open the CLT / charity / co-op studio" });
    next.push({ to: "/village", label: "Open the regenerative village notes" });
  }
  next.push({ to: "/explorer", label: "Browse the structure explorer" });
  next.push({ to: "/compare", label: "Compare six core vehicles" });

  return { headline, body, next, codes: top.map((s) => s.code) };
}

function objectiveNoun(p: HouseholdProfile): string {
  switch (p.objective) {
    case "family-succession":
      return "family succession";
    case "asset-protection":
      return "family protection";
    case "multi-gen":
      return "stewardship";
    case "community":
      return "community land";
    case "charitable":
      return "purpose";
    default:
      return "mixed family and purpose";
  }
}
