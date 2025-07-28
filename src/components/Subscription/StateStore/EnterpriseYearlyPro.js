import { create } from "zustand";

const useYearlyPro = create((set) => ({
  price: 85000,
  setPrice: (num) => set({ price: num }),
}));

export default useYearlyPro;
