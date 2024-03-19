import { useContext } from "react";
import { messageContext } from "../context";

const useMessage = () => {
  const { messageRef } = useContext(messageContext);
  if (!messageRef) {
    throw new Error("请在最外层包裹messageProvider组件");
  }
  return messageRef.current;
};
export default useMessage;
