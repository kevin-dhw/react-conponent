import { useContext } from "react";
import { CartContext } from "../context";

function useNum() {
  const { cartRef } = useContext(CartContext);
  if (!cartRef) {
    throw new Error("11");
  }
  return cartRef.current;
}
export default useNum;
