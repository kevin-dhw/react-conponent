import React, { useRef } from "react";
import Message from "../practice/message copy";
import { MessageRef } from "../practice/message copy";
import useMessage from "../practice/message copy/hooks/useMessageTest";
import { MessageProvider } from "../practice/message copy/configProvider";

function Test() {
  const message = useMessage();
  let count = 1;
  const messageRef = useRef<MessageRef>(null);
  const handleChange = () => {
    messageRef.current?.changeNum(count++);
  };
  const handleChange2 = () => {
    message?.changeNum(count++);
  };
  return (
    <>
      test
      {/* <br />
      <button>更新</button> */}
      <button onClick={handleChange}>修改1111</button>
      <button onClick={handleChange2}>修改2222</button>
      <br />
      <Message ref={messageRef} num={10}></Message>
      <br />
    </>
  );
}
const Test2 = () => (
  <MessageProvider>
    <Test></Test>
  </MessageProvider>
);
export default Test2;
