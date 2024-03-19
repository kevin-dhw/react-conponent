import React from "react";
export type IconProps = React.PropsWithChildren<{
  num?: number;
}>;

const Icon: React.FC<IconProps> = (props) => {
  console.log(props);
  return (
    <div>
      Icon11111111
      <br />
      {props.children}
      <br />
      {props.num}
    </div>
  );
};
export default Icon;
