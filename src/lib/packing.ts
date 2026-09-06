import { create } from "zustand";
import { persist } from "zustand/middleware";

type PackState = {
  checked: string[];
  toggle: (item: string) => void;
  reset: () => void;
  has: (item: string) => boolean;
};

export const usePacking = create<PackState>()(
  persist(
    (set, get) => ({
      checked: [],
      toggle: (item) =>
        set((s) => ({
          checked: s.checked.includes(item)
            ? s.checked.filter((x) => x !== item)
            : [...s.checked, item],
        })),
      reset: () => set({ checked: [] }),
      has: (item) => get().checked.includes(item),
    }),
    { name: "istanbul-atlas-pack" },
  ),
);
