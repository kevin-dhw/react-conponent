import { PropsWithChildren, RefObject, createContext, useRef } from "react";
import MessageTest, { MessageTestRef } from ".";

interface ConfigProviderProps {
  messageTestRef?: RefObject<MessageTestRef>;
}
const ConfigTestContext = createContext<ConfigProviderProps>({});
function ConfigTestProvider(props: PropsWithChildren) {
  const { children } = props;
  const messageTestRef = useRef<MessageTestRef>(null);
  return (
    <ConfigTestContext.Provider value={{ messageTestRef }}>
      <MessageTest ref={messageTestRef}></MessageTest>
      {children}
    </ConfigTestContext.Provider>
  );
}
export { ConfigTestProvider, ConfigTestContext };
