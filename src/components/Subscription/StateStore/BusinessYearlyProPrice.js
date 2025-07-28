import { create } from "zustand";

const useYearlyProPrice = create((set) => ({
  price: 70000,
  setPrice: (num) => set({ price: num }),
}));

export default useYearlyProPrice;
