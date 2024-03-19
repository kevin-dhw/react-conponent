import React from "react";
import cs from "classnames";
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
  const { style, size = "1em", className, spin, children, ...rest } = props;
  const classNames = cs("icon", { "icon-spin": spin }, className);
  const [width, height] = getSize(size);
  return (
    <>
      <svg
        width={width}
        height={height}
        className={classNames}
        style={style}
        {...rest}
      >
        {children}
      </svg>
    </>
  );
};
export default Icon;
