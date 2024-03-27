import React, { useImperativeHandle } from "react";
import useCart from "./hooks/useCard";
export interface CartProps {
  num?: number;
}
export interface CartRef {
  changeNum: (num: CartProps["num"]) => void;
}
const InnerCart: React.ForwardRefRenderFunction<CartRef, CartProps> = (
  props,
  ref
) => {
  const { number, changeNum } = useCart(props.num);

  const handleChange = () => {
    changeNum(10);
  };
  useImperativeHandle(ref, () => {
    return { changeNum };
  });
  return (
    <div>
      Cart {number}
      <br />
      <button onClick={handleChange}>改变</button>
    </div>
  );
};
const Cart = React.forwardRef(InnerCart);
export default Cart;
