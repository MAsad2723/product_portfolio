import { create } from "zustand";

const useMonthlyPro = create((set) => ({
  price: 60000,
  setPrice: (num) => set({ price: num }),
}));

export default useMonthlyPro;
