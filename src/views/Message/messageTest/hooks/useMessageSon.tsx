import { useContext } from "react";
import { MessageSonContext } from "../context/sonContext";

function useMessageSon() {
  const { messageSonRef } = useContext(MessageSonContext);
  if (!messageSonRef) {
    throw new Error("请在最外层嵌套MessageSonProvider组件");
  }
  return messageSonRef.current!;
}
export default useMessageSon;
