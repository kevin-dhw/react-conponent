import { ChangeEvent, useState, useEffect } from "react";

const UnContral = () => {
  const [value, setValue] = useState("11");
  const [value2, setValue2] = useState("aa");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const onChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue2(e.target.value.toUpperCase());
  };
  useEffect(() => {
    console.log(111, value);
  }, [value]);
  return (
    <>
      Contral
      <br />
      {/* 受控组件，代码可以控制，但是不推荐 */}
      <input value={value} onChange={onChange} />
      {/* 比如 把字母改为大写  需要受控组件 */}
      <input value={value2} onChange={onChange2} />
    </>
  );
};
export default UnContral;
