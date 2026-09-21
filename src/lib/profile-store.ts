import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { HouseholdProfile } from "@/data/types";

export const DEFAULT_PROFILE: HouseholdProfile = {
  size: 2,
  landUse: "owner-occupier",
  purposeEntity: false,
  smsf: false,
  will: false,
  bdbn: false,
  state: "ACT",
  objective: "hybrid",
};

type ProfileState = {
  profile: HouseholdProfile;
  saved: boolean;
  setProfile: (patch: Partial<HouseholdProfile>) => void;
  replace: (profile: HouseholdProfile) => void;
  reset: () => void;
};

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profile: DEFAULT_PROFILE,
      saved: false,
      setProfile: (patch) =>
        set((s) => ({ profile: { ...s.profile, ...patch }, saved: true })),
      replace: (profile) => set({ profile, saved: true }),
      reset: () => set({ profile: DEFAULT_PROFILE, saved: false }),
    }),
    { name: "dougs-lab-household" },
  ),
);
