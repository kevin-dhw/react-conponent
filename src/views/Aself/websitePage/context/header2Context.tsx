import { createContext, PropsWithChildren } from "react";

interface heder2ContextType {
  header2?: {
    left2?: string;
    right2?: string;
  };
}
const Header2Context = createContext<heder2ContextType>({
  header2: {
    left2: "右2",
    right2: "右2",
  },
});
interface Header2ProviderType extends PropsWithChildren<heder2ContextType> {}

function Headr2Provider(props: Header2ProviderType) {
  const { header2, children } = props;
  return (
    <Header2Context.Provider value={{ header2 }}>
      {children}
    </Header2Context.Provider>
  );
}
export { Header2Context, Headr2Provider };
