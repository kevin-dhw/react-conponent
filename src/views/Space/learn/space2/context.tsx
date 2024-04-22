import { PropsWithChildren, createContext } from "react";

interface SpaceContextType {
  space?: {
    size?: string;
  };
}
const SpaceType = createContext<SpaceContextType>({
  space: {
    size: "small",
  },
});
interface SpaceProviderType extends PropsWithChildren<SpaceContextType> {}

function SpaceProvider(props: SpaceProviderType) {
  const { space, children } = props;
  return <SpaceType.Provider value={{ space }}>{children}</SpaceType.Provider>;
}
export { SpaceType, SpaceProvider };
