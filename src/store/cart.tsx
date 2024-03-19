import { create } from "zustand";

interface StoreType {
  num: number;
  fn: (num: number) => void;
}
const useCartStore = create<StoreType>((set) => ({
  num: 10,
  fn: (num) => set((state) => ({ num: state.num + num })),
}));
export default useCartStore;
