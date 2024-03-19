import React from "react";
import classNames from "classnames";
import "./index.scss";
import { SpaceContext } from "./context";

export type SizeType = "small" | "middle" | "large" | number | undefined;
interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  size?: SizeType | [SizeType, SizeType];
  direction?: "horizontal" | "vertical";
  align?: "start" | "end" | "center" | "baseline";
  split?: React.ReactNode;
  wrap?: boolean;
}

const Space2: React.FC<SpaceProps> = (props) => {
  const { space } = React.useContext(SpaceContext);
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

  const childNodes = React.Children.toArray(children);
  const nodes = childNodes.map((child: any, i: number) => {
    const key = (child && child.key) || `space-item-${i}`;
    return (
      <>
        <div className="space-item" key={key}>
          {child}
        </div>
        {i < childNodes.length && split && (
          <span className={`${className}-split`} style={style}>
            {split}
          </span>
        )}
      </>
    );
  });

  const mergeAlign =
    direction === "horizontal" && align === undefined ? "center" : align;
  const cn = classNames(
    "space",
    `space-${direction}`,
    {
      [`space-align-${mergeAlign}`]: mergeAlign,
    },
    className
  );

  const spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
  };
  function getNumberSize(size: SizeType) {
    return typeof size === "string" ? spaceSize[size] : size || 0;
  }
  const otherStyles: React.CSSProperties = {};
  const [horizontalSize, verticalSize] = React.useMemo(
    () =>
      ((Array.isArray(size) ? size : [size, size]) as [SizeType, SizeType]).map(
        (item) => getNumberSize(item)
      ),
    [size]
  );
  otherStyles.columnGap = horizontalSize;
  otherStyles.rowGap = verticalSize;

  if (wrap) {
    otherStyles.flexWrap = "wrap";
  }

  return (
    <div className={cn} style={{ ...style, ...otherStyles }} {...otherProps}>
      <br />
      {/* space2 */}
      {nodes}
      {space?.size}
    </div>
  );
};
export default Space2;
