import React, { PropsWithChildren, CSSProperties } from "react";

type Position = "top" | "bottom" | "left" | "right";

interface PopoverProps extends PropsWithChildren {
  content?: () => React.ReactNode;
  content2?: React.ReactNode;
  space?: boolean;
  position?: Position;
  style?: CSSProperties;
  handleBtn?: (num: number) => void;
  renderContent?: () => React.ReactNode;
}

const Popover = (props: PopoverProps) => {
  const {
    content,
    content2,
    space,
    position,
    style,
    handleBtn,
    children,
    renderContent,
    ...other
  } = props;
  console.log(other);
  return (
    <div style={style} onClick={() => handleBtn?.(12)}>
      Popover content: {content?.()}
      <br />
      contents: {content2}
      <br />
      position: {position}
      <br />
      space: {space}
      <br />
      renderContent:
      <br />
      {renderContent?.()}
      <br />
      children: {children}
    </div>
  );
};

export default Popover;
