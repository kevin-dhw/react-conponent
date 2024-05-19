import React from "react";
import { MessageProps } from "..";

interface MessageSonProps extends MessageProps {}
export interface MessageSonRef {
  sonMethods: () => void;
}

const InnerMessageSon: React.ForwardRefRenderFunction<
  MessageSonRef,
  MessageSonProps
> = (props, ref) => {
  const { getSonData } = props;
  const sendData = () => {
    getSonData?.({ name: "jack" });
  };
  const sonMethods = () => {
    console.log("sonMethods");
  };
  if ("current" in ref!) {
    ref.current = {
      sonMethods,
    };
  }
  // useImperativeHandle(ref, () => {
  //   return { sonMethods };
  // });
  return (
    <div>
      MessageSon
      <br />
      <button onClick={sendData}>向父发数据</button>
    </div>
  );
};
const MessageSon = React.forwardRef(InnerMessageSon);
export default MessageSon;
