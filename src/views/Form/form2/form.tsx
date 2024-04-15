import React, { CSSProperties, useState, useRef, FormEvent } from "react";
import classNames from "classnames";
import FormContext from "./formContext";

export interface FormProps extends React.HtmlHTMLAttributes<HTMLFormElement> {
  className?: string;
  style?: CSSProperties;
  onFinish?: (values: Record<string, any>) => void;
  onFinishFaild?: (errors: Record<string, any>) => void;
  initialValues?: Record<string, any>;
  children?: React.ReactNode;
}
const Form = (props: FormProps) => {
  const {
    className,
    style,
    onFinish,
    onFinishFaild,
    initialValues,
    ...others
  } = props;
  const [values, setValues] = useState<Record<string, any>>(
    initialValues || {}
  );
  const validatorMap = useRef(new Map<string, Function>());
  const errors = useRef<Record<string, any>>({});
  const onValueChange = (key: string, value: any) => {
    values[key] = value;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    for (const [key, callbackFunc] of validatorMap.current) {
      errors.current[key] = callbackFunc();
    }

    const errorList = Object.keys(errors.current)
      .map((key) => {
        return errors.current[key];
      })
      .filter(Boolean);

    if (errorList.length) {
      onFinishFaild?.(errors.current);
    } else {
      onFinish?.(values);
    }
  };

  const handleValidateRegister = (name: string, cb: Function) => {
    validatorMap.current.set(name, cb);
  };
  const cs = classNames("ant-form", className);

  return (
    <FormContext.Provider
      value={{
        onValueChange,
        values,
        setValue: (v) => setValues(v),
        validateRegister: handleValidateRegister,
      }}
    >
      <form
        {...others}
        className={cs}
        style={style}
        onSubmit={handleSubmit}
      ></form>
    </FormContext.Provider>
  );
};
export default Form;
