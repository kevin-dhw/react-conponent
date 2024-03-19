import { create } from "zustand";

type Store = {
  count: number;
  inc: (num: number) => void;
};
/*
set是用来修改数据的方法
set参数是函数 一般需要基于老数据的时候使用

不使用老数据直接一个对象
inc: (num) => set({ count: num }),
*/
const useCountStore = create<Store>()((set) => ({
  count: 1,
  // inc: (num) => set((state) => ({ count: state.count + num })),
  // 2
  inc: (num) => set({ count: num }),
}));

export default useCountStore;
