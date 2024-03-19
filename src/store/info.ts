import { create } from "zustand";
interface IInfo {
  name?: string;
  age?: number;
}
interface IStore {
  info: IInfo;
  setInfo: (info: IInfo) => void;
}
const useInfoStore = create<IStore>()((set) => ({
  info: { name: "jack", age: 18 },
  setInfo: (info) => set((state) => ({ info: (state.info = info) })),
}));
export default useInfoStore;
