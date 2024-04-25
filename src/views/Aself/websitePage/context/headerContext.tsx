import { createContext } from "react";

interface headerContextType {
  left?: string;
  right?: string;
}
const HeaderContext = createContext<headerContextType>({
  left: "左",
  right: "右",
});

export default HeaderContext;
