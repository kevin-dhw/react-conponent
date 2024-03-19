import { useContext } from "react";
import { ConfigContext } from "./contsxt";
import { MessageRef } from ".";

export function useMessage(): MessageRef {
  const { messageRef } = useContext(ConfigContext);
  if (!messageRef) {
    throw new Error("请在最外面添加ConfigProvider 组件");
  }
  return messageRef.current!;
}
