import { create } from "zustand";

const useYearlyBasic = create((set) => ({
  price: 45000,
  setPrice: (num) => set({ price: num }),
}));

export default useYearlyBasic;
