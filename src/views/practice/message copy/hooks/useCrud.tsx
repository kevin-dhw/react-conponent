import React from "react";

const useCrud = (defaultValue: number) => {
  const [num, setNum] = React.useState(defaultValue);

  return {
    num,
    changeNum: (number: number) => {
      setNum(number * 10);
    },
  };
};
export default useCrud;
