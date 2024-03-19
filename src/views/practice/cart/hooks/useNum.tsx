import { useState } from "react";

const useNum = (props: number) => {
  const [num, setNum] = useState(props);

  return {
    num,
    changeNum: (num: number) => {
      setNum(num * 10);
      console.log(num);
    },
  };
};
export default useNum;
