import type { Band, ControlMethod, FlagLevel, Ternary } from "@/data/types";

export const BAND_LABEL: Record<Band, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

export const TERNARY_LABEL: Record<Ternary, string> = {
  yes: "Yes",
  partial: "Partial",
  no: "No",
};

export const CONTROL_LABEL: Record<ControlMethod, string> = {
  will: "Will",
  trustee: "Trustee",
  director: "Director",
  appointor: "Appointor",
  governance: "Governance",
  shareholder: "Shareholder",
  survivorship: "Survivorship",
  mixed: "Mixed",
};

export const LEVEL_LABEL: Record<FlagLevel, string> = {
  go: "Fits the registration path",
  watch: "Take into account",
  stop: "Warning",
};

export const ASSET_LOCK_LABEL = {
  yes: "Yes — purpose lock",
  no: "No asset lock",
  overlay: "Overlay, not a vehicle",
} as const;
