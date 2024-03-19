import { useContext } from "react";
import { NumContext } from "../context";

const useCart = () => {
  const { cardRef } = useContext(NumContext);
  if (!cardRef) {
    throw new Error("请在最外层包裹cardProvider组件");
  }
  return cardRef.current;
};
export default useCart;
