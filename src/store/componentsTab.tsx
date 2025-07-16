import { create } from "zustand";

export interface TabItem {
  lable: string;
  isSelected: boolean;
}

export interface State {
  tabs: TabItem[];
}
export interface Action {
  changeTab: (idx: number) => void;
}

const useComponentsTab = create<State & Action>((set) => ({
  tabs: [
    {
      lable: "calendar",
      isSelected: true,
    },
    {
      lable: "icon",
      isSelected: false,
    },
    {
      lable: "space",
      isSelected: false,
    },
    {
      lable: "watermark",
      isSelected: false,
    },
    {
      lable: "onBoarding",
      isSelected: false,
    },
    {
      lable: "todoList",
      isSelected: false,
    },
  ],
  changeTab: (idx: number) =>
    set((state) => {
      state.tabs.forEach((item, index) => {
        if (index === idx) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }
      });
      return { tabs: state.tabs };
    }),
}));

export default useComponentsTab;
