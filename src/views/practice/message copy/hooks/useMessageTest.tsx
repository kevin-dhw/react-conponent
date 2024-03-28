import { useContext } from "react";
import { MessageContext } from "../configProvider";
// import { MessageRef } from "..";

const useMessage = () => {
  const { messageRef } = useContext(MessageContext);
  if (!messageRef) {
    throw new Error("最外层请包裹 MessageProvider");
  }
  return messageRef.current;
};
export default useMessage;
