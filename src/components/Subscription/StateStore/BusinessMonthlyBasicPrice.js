import { create } from "zustand";

const useMonthlyBasicPrice = create((set) => ({
  price: 35000,
  setPrice: (num) => set({ price: num }),
}));

export default useMonthlyBasicPrice;
