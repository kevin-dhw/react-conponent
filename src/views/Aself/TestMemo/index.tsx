import { useState, useMemo, useCallback } from "react";
import TestsMemoSon from "./components/son";

const TestsMemo = () => {
  const [num, setNum] = useState(0);
  const [value, setValue] = useState(100);
  const changeNum = () => {
    setNum((num) => num + 1);
    console.log(111);
  };
  const changeValue = () => {
    setValue((value) => value + 1);
    console.log(111, value);
  };
  const num2 = useMemo(() => {
    return num * 10 + 2;
  }, [num]);

  const SonCallback = useCallback(
    function SonFuction() {
      return value * 30 + 5;
    },
    [value]
  );
  return (
    <div>
      <button onClick={changeNum}>改变num</button>
      <button onClick={changeValue}>改变value</button>
      <br />
      <TestsMemoSon num={num2} value={value} SonFuction={SonCallback} />
      <br />
    </div>
  );
};
export default TestsMemo;
