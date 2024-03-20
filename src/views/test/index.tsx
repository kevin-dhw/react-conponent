import Cart from "../practice/cart";
import { useRef } from "react";
import { CartRef } from "../practice/cart";

function Test() {
  const cartRef = useRef<CartRef>(null);

  const handleRef = () => {
    cartRef.current?.changeNum?.(1000);
  };
  return (
    <>
      test
      {/* <br />
      <button>更新</button> */}
      <button>修改</button>
      <br />
      <Cart ref={cartRef} num={10} />
      <br />
      <button onClick={handleRef}>获取</button>
    </>
  );
}

export default Test;
