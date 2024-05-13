import React from "react";
import MessageGrandSon from "./grandSon";
import { MessageProps } from "..";

export interface MessageSonProps extends MessageProps {
  sonNun?: number;
}

const MessageSon: React.FC<MessageSonProps> = (props) => {
  const { sonNun } = props;
  return (
    <div>
      MessageSon
      <MessageGrandSon {...props} grandNum={1000} />
      {sonNun}
    </div>
  );
};
export default MessageSon;
