import { create } from "zustand";

const useSubscriptionType = create((set) => ({
  activeSubscription: "monthly",
  setActiveSubscription: (str) => set({ activeSubscription: str }),
}));

export default useSubscriptionType;
