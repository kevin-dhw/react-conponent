import React, { useImperativeHandle } from "react";
import useCrud from "./hooks/useCrud";
export interface MessageProps {
  num?: number;
}
export interface MessageRef {
  changeNum: (number: number) => void;
}
const InnerMessage: React.ForwardRefRenderFunction<MessageRef, MessageProps> = (
  props,
  ref
) => {
  // const { num } = props;
  const { num, changeNum } = useCrud(props.num!);
  if ("current" in ref!) {
    ref.current = {
      changeNum,
    };
  }
  // useImperativeHandle(ref, () => {
  //   return { changeNum };
  // });
  return (
    <div>
      Message {num}
      <br />
      <button
        onClick={() => {
          changeNum(num + 10);
        }}
      >
        修改
      </button>
    </div>
  );
};
const Message = React.forwardRef(InnerMessage);
export default Message;
