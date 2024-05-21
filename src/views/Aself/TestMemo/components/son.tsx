import React, { memo } from "react";

interface TestsMemoSonProps {
  num: number;
  value: number;
  SonFuction: () => void;
}

const TestsMemoSon: React.FC<TestsMemoSonProps> = (props) => {
  const { num, value, SonFuction } = props;
  console.log("render");
  return (
    <>
      TestsMemoSon
      <br />
      num: {num} value: {value}
      <button
        onClick={() => {
          console.log(SonFuction());
        }}
      >
        子接收的方法
      </button>
    </>
  );
};
export default memo(TestsMemoSon);
// export default TestsMemoSon;
