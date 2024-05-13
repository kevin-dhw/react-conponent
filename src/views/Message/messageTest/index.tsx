import MessageSon from "./components/son";
import React, { ForwardRefRenderFunction, useImperativeHandle } from "react";

export interface MessageProps {
  num?: number;
  str?: string;
}
export interface MessageRef {
  update?: () => number;
}

const InnerMessage: ForwardRefRenderFunction<MessageRef, MessageProps> = (
  props,
  ref
) => {
  const { num, str } = props;

  useImperativeHandle(ref, () => {
    return {
      update() {
        return 100;
      },
    };
  });
  return (
    <div>
      messageRef
      <MessageSon {...props} sonNun={100} />
      {num} {str}
    </div>
  );
};
const Message = React.forwardRef(InnerMessage);
export default Message;
