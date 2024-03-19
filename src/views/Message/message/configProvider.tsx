import { PropsWithChildren, RefObject, createContext, useRef } from "react";
import { MessageRef, MessageProvider } from ".";

interface ConfigProviderProps {
  messageRef?: RefObject<MessageRef>;
}
const ConfigContext = createContext<ConfigProviderProps>({});
function ConfigProvider(props: PropsWithChildren) {
  const { children } = props;
  const messageRef = useRef<MessageRef>(null);
  return (
    <ConfigContext.Provider value={{ messageRef }}>
      <MessageProvider ref={messageRef}></MessageProvider>
      {children}
    </ConfigContext.Provider>
  );
}
export { ConfigContext, ConfigProvider };
