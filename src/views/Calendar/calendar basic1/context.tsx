import { createContext } from "react";

export interface LocaleContextType {
  locale: string;
}

const localeContext = createContext<LocaleContextType>({
  locale: "123",
});
export default localeContext;
