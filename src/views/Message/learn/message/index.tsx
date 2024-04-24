import React, { useImperativeHandle } from "react";
import useCrud from "./hooks/useCrud";

export interface ItemType {
  id: number;
  name: string;
  age: number;
}
export interface ListProps {
  list?: ItemType[];
}
export interface MessageRef {
  add: (item: ItemType) => void;
  del: (id: number) => void;
}

const InnerMessage: React.ForwardRefRenderFunction<MessageRef, ListProps> = (
  props,
  ref
) => {
  const { list, add, del } = useCrud(props.list!);
  const handleAdd = () => {
    const id = list.length + 1;
    add({
      id,
      age: 40,
      name: "name",
    });
  };
  const handleDel = (id: number) => {
    del(id);
  };
  useImperativeHandle(ref, () => {
    return { add, del };
  });
  return (
    <>
      <button onClick={handleAdd}>添加</button>
      <br />
      {list?.map((item, index) => {
        return (
          <div key={index}>
            {item.name}: {item.age}
            <button onClick={() => handleDel(item.id)}>删除</button>
          </div>
        );
      })}
    </>
  );
};
const Message = React.forwardRef(InnerMessage);
export default Message;
