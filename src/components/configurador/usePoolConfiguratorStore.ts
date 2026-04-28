import { create } from "zustand";
import type { CleaningType, PoolShape } from "@/lib/pricing/poolPricing";

type PoolConfiguratorState = {
  shape: PoolShape;
  cleaningType: CleaningType;
  lengthM: number;
  widthM: number;
  depthM: number;
  setShape: (shape: PoolShape) => void;
  setCleaningType: (cleaningType: CleaningType) => void;
  setLengthM: (lengthM: number) => void;
  setWidthM: (widthM: number) => void;
  setDepthM: (depthM: number) => void;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export const usePoolConfiguratorStore = create<PoolConfiguratorState>((set) => ({
  shape: "rectangular",
  cleaningType: "semanal",
  lengthM: 10,
  widthM: 5,
  depthM: 1.8,
  setShape: (shape) => set({ shape }),
  setCleaningType: (cleaningType) => set({ cleaningType }),
  setLengthM: (lengthM) => set({ lengthM: clamp(lengthM, 3, 25) }),
  setWidthM: (widthM) => set({ widthM: clamp(widthM, 2, 15) }),
  setDepthM: (depthM) => set({ depthM: clamp(depthM, 0.8, 4) }),
}));
