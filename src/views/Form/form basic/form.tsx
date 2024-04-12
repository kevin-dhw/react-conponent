import React, {
  CSSProperties,
  HTMLAttributes,
  useState,
  useRef,
  FormEvent,
} from "react";
import classNames from "classnames";
import FormContext from "./formContext";

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  className?: string;
  style?: CSSProperties;
  onFinish?: (value: Record<string, any>) => void;
  onFinishFailed?: (errors: Record<string, any>) => void;
  initialValue?: Record<string, any>;
  children?: React.ReactNode;
}

const Form = (props: FormProps) => {
  const {
    className,
    style,
    children,
    onFinish,
    onFinishFailed,
    initialValue,
    ...others
  } = props;
  const [values, setValue] = useState<Record<string, any>>(initialValue || {});
  const validatorMap = useRef(new Map<string, Function>());
  const errors = useRef<Record<string, any>>({});

  const onValueChange = (key: string, value: any) => {
    values[key] = value;
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    for (const [key, callbackFunc] of validatorMap.current) {
      if (typeof callbackFunc === "function") {
        errors.current[key] = callbackFunc();
      }
    }

    const errorList = Object.keys(errors.current)
      .map((key) => {
        return errors.current[key];
      })
      .filter(Boolean);

    if (errorList.length) {
      onFinishFailed?.(errors.current);
    } else {
      onFinish?.(values);
    }
  };

  const handleValidateRegister = (name: string, cb: Function) => {
    validatorMap.current.set(name, cb);
  };

  const cs = classNames("ant-form", className);

  return (
    <div>
      <FormContext.Provider
        value={{
          onValueChange,
          values,
          setValue: (v: any) => setValue(v),
          validateRegister: handleValidateRegister,
        }}
      >
        <form {...others} style={style} onSubmit={handleSubmit}></form>
      </FormContext.Provider>
    </div>
  );
};
export default Form;
