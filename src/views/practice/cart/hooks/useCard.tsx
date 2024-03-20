import { CartProps } from "..";
import { useState } from "react";

const useCart = (num: CartProps["num"]) => {
  const [number, setNum] = useState(num);
  return {
    number,
    changeNum: (num: CartProps["num"]) => {
      setNum((num as number) * 10);
    },
  };
};
export default useCart;
