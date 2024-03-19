import React, { PropsWithChildren } from "react";
import { SizeType } from ".";

export interface ConfigContextType2 {
  space?: {
    size?: SizeType;
  };
}
export const ConfigContextType2 = React.createContext<ConfigContextType2>({});

interface ConfigProviderProps extends PropsWithChildren<ConfigContextType2> {}
export function ConfigProvider(props: ConfigProviderProps) {
  const { space, children } = props;

  return (
    <ConfigContextType2.Provider value={{ space }}>
      {children}
    </ConfigContextType2.Provider>
  );
}
