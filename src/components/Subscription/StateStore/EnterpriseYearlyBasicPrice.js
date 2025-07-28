import { create } from "zustand";

const useYearlyBasicPrice = create((set) => ({
  price: 45000,
  setPrice: (num) => set({ price: num }),
}));

export default useYearlyBasicPrice;
