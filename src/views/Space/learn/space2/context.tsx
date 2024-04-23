import { createContext, PropsWithChildren } from "react";

interface SpaceContextType {
  space?: {
    size?: string;
  };
}
const SpaceContext = createContext<SpaceContextType>({
  space: {
    size: "small1234",
  },
});
interface SpaceProviderType extends PropsWithChildren<SpaceContextType> {}

function SpaceProvider(props: SpaceProviderType) {
  const { space, children } = props;
  return (
    <SpaceContext.Provider value={{ space }}>{children}</SpaceContext.Provider>
  );
}
export { SpaceContext, SpaceProvider };
