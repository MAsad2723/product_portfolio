import { create } from "zustand";

const useYearlyBasic = create((set) => ({
  price: 40000,
  setPrice: (num) => set({ price: num }),
}));

export default useYearlyBasic;
