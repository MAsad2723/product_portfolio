import { create } from "zustand";

const useYearlyBasicPrice = create((set) => ({
  price: 40000,
  setPrice: (num) => set({ price: num }),
}));

export default useYearlyBasicPrice;
