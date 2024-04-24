import React, { PropsWithChildren } from "react";

export interface IconProps extends PropsWithChildren {
  num?: number;
}

const Icon: React.FC<IconProps> = (props) => {
  const { num, children } = props;
  return (
    <div>
      icon
      <br />
      {num}
      <br />
      {children}
    </div>
  );
};
export default Icon;
