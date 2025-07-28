import { create } from "zustand";

const usePackageType = create((set) => ({
  activePackage: "basic",
  setActivePackage: (str) => set({ activePackage: str }),
}));

export default usePackageType;
