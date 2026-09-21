export type FlagLevel = "go" | "watch" | "stop";

export type Flag = {
  level: FlagLevel;
  title: string;
  blurb: string;
  detail: string;
};

export type Ternary = "yes" | "partial" | "no";
export type Band = "low" | "medium" | "high";

export type ControlMethod =
  | "will"
  | "trustee"
  | "director"
  | "appointor"
  | "governance"
  | "shareholder"
  | "survivorship"
  | "mixed";

export type Succession = {
  passesThroughEstate: Ternary;
  probateExposure: Band;
  controlTransfer: ControlMethod;
  delayRisk: Band;
  estateChallenge: Band;
  multiGenContinuity: Band;
  complexity: Band;
  summary: string;
  passesNote: string;
  probateNote: string;
  controlNote: string;
  delayNote: string;
  challengeNote: string;
  continuityNote: string;
  costNote: string;
};

export type StructureKind =
  | "family"
  | "enterprise"
  | "super"
  | "purpose"
  | "land-overlay"
  | "first-nations";

export type Structure = {
  code: string;
  name: string;
  kind: StructureKind;
  short: string;
  what: string;
  whoFor: string;
  assetLock: "yes" | "no" | "overlay";
  whoControls: string;
  taxFlags: Flag[];
  dutyCgtFlags: Flag[];
  wrongTool: string;
  succession: Succession;
  familyFit: Band;
  ecoFit: Band;
  bequestFit: Band;
  links: { label: string; href: string }[];
};

export type Objective =
  | "asset-protection"
  | "family-succession"
  | "multi-gen"
  | "community"
  | "charitable"
  | "hybrid";

export type LandUse = "owner-occupier" | "investment" | "eco-settlement" | "mixed";
export type AusState = "ACT" | "NSW" | "QLD" | "other";

export type HouseholdProfile = {
  size: number;
  landUse: LandUse;
  purposeEntity: boolean;
  smsf: boolean;
  will: boolean;
  bdbn: boolean;
  state: AusState;
  objective: Objective;
};

export const DISCLAIMER =
  "General information only. Confirm with a registered tax agent and solicitor. Rules include 2026–28 announced reforms that may change.";

export const SUCCESSION_DISCLAIMER =
  "No structure can guarantee that disputes, challenges, delays, or court involvement will never occur. Succession outcomes depend on trust deeds, constitutions, governance documents, estate planning, taxation considerations, and applicable Australian laws. Doug's Lab is educational only and does not provide legal, tax, financial, or estate-planning advice.";
