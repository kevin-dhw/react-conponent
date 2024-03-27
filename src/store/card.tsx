import { create } from "zustand";

interface IStore {
  num: number;
  fn: (num: number) => void;
  fun: (num2: number) => void;
}
const useCardStore = create<IStore>((set) => ({
  num: 10,
  fn: (num) => set({ num }),
  fun: (num2) =>
    set((state) => ({
      num: state.num + num2,
    })),
}));
export default useCardStore;
