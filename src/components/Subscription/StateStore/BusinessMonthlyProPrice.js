import { create } from "zustand";

const useMonthlyProPrice = create((set) => ({
  price: 55000,
  setPrice: (num) => set({ price: num }),
}));

export default useMonthlyProPrice;
