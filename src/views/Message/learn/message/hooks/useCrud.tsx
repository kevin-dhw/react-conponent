import { useState } from "react";
import { ItemType } from "..";

function useCrud(defaultList: ItemType[]) {
  const [list, setList] = useState<ItemType[]>([...defaultList]);
  return {
    list,
    add: (item: ItemType) => {
      setList([...list, item]);
    },
    del: (id: number) => {
      setList((list) => {
        const newList = list.filter((item) => item.id != id);
        return newList;
      });
    },
    update: () => {
      console.log("更新");
    },
  };
}
export default useCrud;
