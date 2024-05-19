import { PropsWithChildren, RefObject, createContext, useRef } from "react";
import MessageSon, { MessageSonRef } from "../components/son";

interface MessageSonRefProps {
  messageSonRef?: RefObject<MessageSonRef>;
}

const MessageSonContext = createContext<MessageSonRefProps>({});

function MessageSonProvider(props: PropsWithChildren) {
  const messageSonRef = useRef<MessageSonRef>(null);
  const { children } = props;
  return (
    <MessageSonContext.Provider value={{ messageSonRef }}>
      <MessageSon ref={messageSonRef}></MessageSon>
      {children}
    </MessageSonContext.Provider>
  );
}
export { MessageSonContext, MessageSonProvider };
