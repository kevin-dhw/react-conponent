import { useContext } from "react";
import { NumContext } from "../context";

const useMessage = () => {
  const { messageRef } = useContext(NumContext);
  if (!messageRef) {
    throw new Error("请在最外面添加numProvider组件");
  }
  return messageRef.current!;
};
export default useMessage;
