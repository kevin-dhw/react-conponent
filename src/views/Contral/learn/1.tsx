import { useEffect, useState, useRef } from "react";

// 闭包陷阱 useRef解决
const Contral = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };
  const ref = useRef(updateCount);
  ref.current = updateCount;

  useEffect(() => {
    const timer = setInterval(() => {
      ref.current();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });
  return (
    <>
      Contral
      <br />
      <div>{count}</div>
      {/* 非受控组件，只能用户控制，代码控制不了 */}
    </>
  );
};
export default Contral;
