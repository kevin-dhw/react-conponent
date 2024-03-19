import React from "react";
// import cs from "classnames";
import "./index.scss";

type BaseIconProps = React.PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
  size?: string | string[];
  spin?: boolean;
  viewBox?: string;
}>;

export type IconProps = BaseIconProps &
  Omit<React.SVGAttributes<SVGElement>, keyof BaseIconProps>;

export const getSize = (size: IconProps["size"]) => {
  if (Array.isArray(size) && size.length === 2) {
    return size as string[];
  }
  const width = (size as string) || "1em";
  const height = (size as string) || "1em";
  return [width, height];
};

const Icon: React.FC<BaseIconProps> = (props) => {
  console.log(props);
  return (
    <>
      <svg></svg>
    </>
  );
};
export default Icon;
