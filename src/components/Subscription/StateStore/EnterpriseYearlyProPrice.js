import { create } from "zustand";

const useYearlyProPrice = create((set) => ({
  price: 85000,
  setPrice: (num) => set({ price: num }),
}));

export default useYearlyProPrice;
