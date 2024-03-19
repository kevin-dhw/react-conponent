import { PropsWithChildren, RefObject, createContext, useRef } from "react";
import Message, { MessageRef } from ".";

interface MessageContextType {
  messageRef?: RefObject<MessageRef>;
}
const messageContext = createContext<MessageContextType>({});
const MessageProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const messageRef = useRef<MessageRef>(null);
  return (
    <messageContext.Provider value={{ messageRef }}>
      <Message ref={messageRef}></Message>
      {children}
    </messageContext.Provider>
  );
};
export { messageContext, MessageProvider };
