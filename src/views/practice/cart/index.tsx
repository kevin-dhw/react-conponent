import React from "react";
import useNum from "./hooks/useNum";

export interface CardProps {
  num?: number;
}
export interface CardRef {
  changeNum?: (num: number) => void;
}
const InnerCard: React.ForwardRefRenderFunction<CardRef, CardProps> = (
  props,
  ref
) => {
  const { num, changeNum } = useNum(props.num!);
  const handleChange = () => {
    changeNum(10);
  };
  if ("current" in ref!) {
    ref.current = {
      changeNum,
    };
  }
  // useImperativeHandle(ref, () => {
  //   return {
  //     changeNum,
  //   };
  // });
  return (
    <div>
      Card
      <button onClick={handleChange}>改变num</button>
      <br />
      {num}
    </div>
  );
};
// const Card = React.forwardRef(InnerCard);
const Card = React.forwardRef(InnerCard);
export default Card;
