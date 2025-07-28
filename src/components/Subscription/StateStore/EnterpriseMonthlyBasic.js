import { create } from "zustand";

const useMonthlyBasic = create((set) => ({
  price: 38000,
  setPrice: (num) => set({ price: num }),
}));

export default useMonthlyBasic;
