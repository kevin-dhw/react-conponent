import { useContext } from "react";
import { ConfigTestContext } from "../configProvider";
import { MessageTestRef } from "..";

function useMessageTest(): MessageTestRef {
  const { messageTestRef } = useContext(ConfigTestContext);
  if (!messageTestRef) {
    throw new Error("请在最外层添加configProvider组件");
  }
  return messageTestRef.current!;
}
export default useMessageTest;
