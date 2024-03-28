import React, { PropsWithChildren } from "react";

interface SpaceContextTYpe {
  space?: {
    size?: string;
  };
}
const SpaceContext = React.createContext<SpaceContextTYpe>({
  space: {
    size: "small",
  },
});
interface SpaceContextProvider extends PropsWithChildren<SpaceContextTYpe> {}
const SpaceProvider = (props: SpaceContextProvider) => {
  const { space, children } = props;
  return (
    <SpaceContext.Provider value={{ space }}>{children}</SpaceContext.Provider>
  );
};
export { SpaceContext, SpaceProvider };
