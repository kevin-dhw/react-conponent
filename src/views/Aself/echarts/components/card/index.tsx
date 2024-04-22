import React, { CSSProperties } from "react";
import classNames from "classnames";

export interface CardProps {
  rightContent?: string;
  leftTopTitle?: string;
  leftBottomTitle?: string;
  style?: CSSProperties;
  className?: string | string[];
  renderContent?: () => React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  const {
    rightContent,
    leftBottomTitle,
    leftTopTitle,
    style,
    className,
    renderContent,
  } = props;
  const cs = classNames("h-44 w-64 rounded-md m-3", className);
  return (
    <div className={cs} style={style}>
      <div className=" flex justify-between p-4 box-border">
        <div>
          <div className=" font-bold">{leftTopTitle}</div>
          <div className=" text-sm">{leftBottomTitle}</div>
        </div>
        <div>{rightContent}</div>
      </div>
      <div>{renderContent && renderContent()}</div>
    </div>
  );
};
export default Card;
