import { PropsWithChildren, RefObject, createContext, useRef } from "react";
import Message, { MessageRef } from ".";

interface MessageContextType {
  messageRef?: RefObject<MessageRef>;
}
const MessageContext = createContext<MessageContextType>({});
const MessageProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const messageRef = useRef<MessageRef>(null);
  return (
    <MessageContext.Provider value={{ messageRef }}>
      <Message ref={messageRef}></Message>
      {children}
    </MessageContext.Provider>
  );
};
export { MessageContext, MessageProvider };
