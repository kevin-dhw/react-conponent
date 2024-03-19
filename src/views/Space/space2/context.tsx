import React, { PropsWithChildren } from "react";

interface SpaceContextTYpe {
  space?: {
    size?: number;
  };
}
const SpaceContext = React.createContext<SpaceContextTYpe>({
  space: {
    size: 10,
  },
});

interface SpaceContextProviderProps
  extends PropsWithChildren<SpaceContextTYpe> {}
function SpaceContextProvider(props: SpaceContextProviderProps) {
  const { space, children } = props;
  return (
    <SpaceContext.Provider value={{ space }}>{children}</SpaceContext.Provider>
  );
}

export { SpaceContext, SpaceContextProvider };
