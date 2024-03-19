import { useContext } from "react";
import { ConfigContext } from "./configProvider";
import { MessageRef } from ".";

function useMessage(): MessageRef {
  const { messageRef } = useContext(ConfigContext);
  if (!messageRef) {
    throw new Error("请在最外层添加 configProvider组件");
  }
  return messageRef.current!;
}

export { useMessage };
