import { PropsWithChildren, RefObject, createContext, useRef } from "react";
import { MessageProvider, MessageRef } from ".";

interface ConfigProviderProps {
  messageRef?: RefObject<MessageRef>;
}
const ConfigContext = createContext<ConfigProviderProps>({});
function COnfigProvider(props: PropsWithChildren) {
  const { children } = props;
  const messageRef = useRef<MessageRef>(null);
  return (
    <ConfigContext.Provider value={{ messageRef }}>
      <MessageProvider ref={messageRef}></MessageProvider>
      {children}
    </ConfigContext.Provider>
  );
}
export { COnfigProvider, ConfigContext };
