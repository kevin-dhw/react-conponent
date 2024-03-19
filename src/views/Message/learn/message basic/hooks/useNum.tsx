import { useState } from "react";

const useNum = (number: number) => {
  const [num, setNum] = useState<number>(number);
  return {
    num,
    update: (num: number) => {
      setNum(num * 100);
    },
  };
};

export default useNum;
