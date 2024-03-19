import { PropsWithChildren } from "react";
import { createContext } from "react";

interface SpaceContextType {
  space?: {
    size?: string;
  };
}
const SpaceContext = createContext<SpaceContextType>({
  space: {
    size: "small",
  },
});
interface SpaceProviderType extends PropsWithChildren<SpaceContextType> {}
const SpaceProvider = (props: SpaceProviderType) => {
  const { space, children } = props;
  return (
    <SpaceContext.Provider value={{ space }}>{children}</SpaceContext.Provider>
  );
};
export { SpaceContext, SpaceProvider };
