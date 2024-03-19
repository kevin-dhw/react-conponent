import { PropsWithChildren, RefObject, createContext, useRef } from "react";
import Card, { CardRef } from ".";

interface NumContextType {
  cardRef?: RefObject<CardRef>;
}
const NumContext = createContext<NumContextType>({});
const NumProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const cardRef = useRef<CardRef>(null);
  return (
    <NumContext.Provider value={{ cardRef }}>
      <Card ref={cardRef}></Card>
      {children}
    </NumContext.Provider>
  );
};
export { NumContext, NumProvider };
