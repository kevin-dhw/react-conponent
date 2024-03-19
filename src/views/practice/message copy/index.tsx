import React, { useState } from "react";
import useCrud from "./hooks/useCrud";

export interface ItemType {
  id: number;
  name: string;
  age: number;
}
export interface ListProps {
  list?: ItemType[];
}
export interface MessageTestRef {
  add: (item: ItemType) => void;
  del: (id: number) => void;
}
const InnerMessageTest: React.ForwardRefRenderFunction<
  MessageTestRef,
  ListProps
> = (props, ref) => {
  const { list, add, del } = useCrud(props.list!);
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleAdd = () => {
    const id = list.length + 1;
    add({
      id,
      age: 30,
      name: value,
    });
  };
  const handleDel = (id: number) => {
    del(id);
  };
  if ("current" in ref!) {
    ref.current = {
      add,
      del,
    };
  }
  // useImperativeHandle(ref, () => {
  //   return {
  //     add,
  //     del,
  //   };
  // });
  return (
    <div>
      MessageTest
      <br />
      <input onChange={(e) => handleChange(e)}></input>
      <button onClick={handleAdd}>添加</button>
      <br />
      {list.map((item) => {
        return (
          <div key={item.id}>
            {item.name}
            <button onClick={() => handleDel(item.id)}>删除</button>
          </div>
        );
      })}
    </div>
  );
};
const MessageTest = React.forwardRef(InnerMessageTest);
export default MessageTest;
