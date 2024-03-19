// import { useRef } from "react";
// import Message, { MessageRef } from "../practice/message2";
import useMessage from "../hooks/useMessage";
import { NumProvider } from "../context";

function Test() {
  const message = useMessage();
  return (
    <>
      test
      <br />
      <button
        onClick={() => {
          message.update?.(100);
        }}
      >
        更新
      </button>
      <br />
    </>
  );
}
const OutTest = () => {
  return (
    <NumProvider>
      <Test />
    </NumProvider>
  );
};
export default OutTest;
