// import Echarts from "../Aself/echarts";
import Message, { MessageRef } from "../Message/messageTest";
import React, { useContext } from "react";
import {
  MessageGrandContext,
  MessageGrandProvider,
} from "../Message/messageTest/context/grandContext";

const Test: React.FC = () => {
  const messageRef = React.useRef<MessageRef>(null);
  const messageGrandContext = useContext(MessageGrandContext);
  const handleClick = () => {
    console.log(messageRef.current?.update?.());
  };
  const handleGrandSon = () => {
    console.log(1112);
    messageGrandContext.messageGrandRef?.current?.getGrandData?.();
  };
  const obj = {
    num: 10,
    str: "string",
  };
  return (
    <>
      <button onClick={handleClick}>handleClick</button>
      <button onClick={handleGrandSon}>孙 测试</button>
      {/* <Echarts /> */}

      <Message ref={messageRef} {...obj} />
    </>
  );
};
const OutTest = () => {
  return (
    <MessageGrandProvider>
      <Test />
    </MessageGrandProvider>
  );
};
export default OutTest;
