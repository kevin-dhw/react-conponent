import { PropsWithChildren, RefObject, createContext, useRef } from "react";
import Message, { MessageRef } from ".";

interface NumContextType {
  messageRef?: RefObject<MessageRef>;
}
const NumContext = createContext<NumContextType>({});
const NumProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const messageRef = useRef<MessageRef>(null);
  return (
    <NumContext.Provider value={{ messageRef }}>
      <Message ref={messageRef}></Message>
      {children}
    </NumContext.Provider>
  );
};
export { NumContext, NumProvider };
