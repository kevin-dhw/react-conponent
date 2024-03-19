import React, { useImperativeHandle } from "react";
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

  useImperativeHandle(ref, () => {
    return { update };
  });
  return (
    <div>
      Message {num}
      <br />
    </div>
  );
};
const Message = React.forwardRef(InnerMessage);
export default Message;
