import { create } from "zustand";

const useMonthlyBasic = create((set) => ({
  price: 35000,
  setPrice: (num) => set({ price: num }),
}));

export default useMonthlyBasic;
