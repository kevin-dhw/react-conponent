import React from "react";
export type IconProps = React.PropsWithChildren<{
  num?: number;
}>;

const Icon: React.FC<IconProps> = (props) => {
  const { children } = props;
  return (
    <div>
      Icon
      <br />
      {children}
    </div>
  );
};
export default Icon;
