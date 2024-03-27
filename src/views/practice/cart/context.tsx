import { PropsWithChildren, RefObject, createContext, useRef } from "react";
import Cart, { CartRef } from ".";

interface CartContextType {
  cartRef?: RefObject<CartRef>;
}
const CartContext = createContext<CartContextType>({});

function CardProvider(props: PropsWithChildren) {
  const { children } = props;
  const cartRef = useRef<CartRef>(null);
  return (
    <CartContext.Provider value={{ cartRef }}>
      <Cart ref={cartRef}></Cart>
      {children}
    </CartContext.Provider>
  );
}
export { CartContext, CardProvider };
