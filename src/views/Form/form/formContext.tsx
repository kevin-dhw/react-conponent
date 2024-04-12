import { createContext } from "react";

export interface FormContextProps {
  values?: Record<string, any>;
  setValue?: (values: Record<string, any>) => void;
  onValueChange?: (key: string, value: any) => void;
  validateRegister?: (name: string, cb: Function) => void;
}

export default createContext<FormContextProps>({});
