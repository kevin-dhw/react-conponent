import React from "react";
import classNames from "classnames";
import "./index.scss";
import { ConfigContext } from "./context";

export type SizeType = "small" | "middle" | "large" | number | undefined;
export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  size?: SizeType | [SizeType, SizeType];
  direction?: "horizontal" | "vertical";
  align?: "start" | "end" | "center" | "baseline";
  split?: React.ReactNode;
  wrap?: boolean;
}
const Space: React.FC<SpaceProps> = (props) => {
  const { space } = React.useContext(ConfigContext);
  const {
    className,
    style,
    children,
    size = space?.size || "small",
    direction = "horizontal",
    align,
    split,
    wrap = false,
    ...otherProps
  } = props;

  const mergedAlign =
    direction === "horizontal" && align === undefined ? "center" : align;
  // 疑问
  const cn = classNames(
    "space",
    `space-${direction}`,
    {
      [`space-align-${mergedAlign}`]: mergedAlign,
    },
    className
  );
  console.log(cn, mergedAlign, split, "cn");

  const spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
  };
  function getNumberSize(size: SizeType) {
    return typeof size === "string" ? spaceSize[size] : size || 0;
  }

  const childNodes = React.Children.toArray(children);
  const nodes = childNodes.map((child: any, i) => {
    const key = (child && child.key) || `space-item-${i}`;
    return (
      <div>
        <div className="space-item" key={key}>
          {child}
        </div>
        {i < childNodes.length && split && (
          <span style={style} className={`${className}-split`}>
            {split}
          </span>
        )}
      </div>
    );
  });
  console.log(nodes, size, "123");

  const otherStyles: React.CSSProperties = {};
  const [horizontalSize, verticalSize] = React.useMemo(
    () =>
      ((Array.isArray(size) ? size : [size, size]) as [SizeType, SizeType]).map(
        (item) => getNumberSize(item)
      ),
    [size]
  );
  console.log(horizontalSize, verticalSize, "123");

  otherStyles.columnGap = horizontalSize;
  otherStyles.rowGap = verticalSize;
  if (wrap) {
    otherStyles.flexWrap = "wrap";
  }

  return (
    <div className={cn} style={{ ...style, ...otherStyles }} {...otherProps}>
      {nodes}
    </div>
  );
};
export default Space;
