import MessageSon from "./components/son";
import React from "react";
import useMessageSon from "./hooks/useMessageSon";
import { MessageSonProvider } from "./context/sonContext";
export interface MessageProps {
  getSonData?: (sonData: Record<string, any>) => void;
}

const Message: React.FC = () => {
  const message = useMessageSon();
  const getSonData = (sonData: Record<string, any>) => {
    console.log(sonData);
  };
  const handleRef = () => {
    message.sonMethods();
  };
  return (
    <div>
      messageRef
      <MessageSon getSonData={getSonData} />
      <br />
      <button onClick={handleRef}>content里面的ref</button>
    </div>
  );
};
const OutMessage = () => {
  return (
    <MessageSonProvider>
      <Message />
    </MessageSonProvider>
  );
};
export default OutMessage;
