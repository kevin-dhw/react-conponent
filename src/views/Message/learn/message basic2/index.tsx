import React from "react";
import useNum from "./hooks/useNum";

interface MessageProps {
  num?: number;
}
export interface MessageRef {
  update?: (num: number) => void;
}

const InnerMessage: React.ForwardRefRenderFunction<MessageRef, MessageProps> = (
  props,
  ref
) => {
  const { num, update } = useNum(props.num!);
  if ("current" in ref!) {
    ref.current = {
      update,
    };
  }
  // useImperativeHandle(ref, () => {
  //   return { update };
  // });
  return (
    <div>
      Message {num}
      <br />
    </div>
  );
};
const Message = React.forwardRef(InnerMessage);
export default Message;
