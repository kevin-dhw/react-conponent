import React, { CSSProperties } from "react";
import classNames from "classnames";

export interface CardProps {
  rightContent?: React.ReactNode;
  leftTopTitle?: string;
  leftBottomTitle?: string;
  style?: CSSProperties;
  className?: string | string[];
}

const Card: React.FC<CardProps> = (props) => {
  const { rightContent, leftBottomTitle, leftTopTitle, style, className } =
    props;
  return (
    <div className=" bg-slate-50 h-44 w-64 rounded-md m-3">
      <div className=" flex justify-between p-4 box-border">
        <div>
          <div className=" font-bold">上</div>
          <div className=" text-sm">下</div>
        </div>
        <div>右</div>
      </div>
    </div>
  );
};
export default Card;
