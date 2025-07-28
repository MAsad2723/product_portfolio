import { create } from "zustand";

const useMonthlyBasicPrice = create((set) => ({
  price: 38000,
  setPrice: (num) => set({ price: num }),
}));

export default useMonthlyBasicPrice;
