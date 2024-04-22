import React, { PropsWithChildren } from "react";

export interface IconProps extends PropsWithChildren {
  num?: number;
}

const Icon: React.FC<IconProps> = (props) => {
  const { num, children } = props;
  return (
    <>
      Icon
      <br />
      {children}
      <br />
      {num}
    </>
  );
};
export default Icon;
