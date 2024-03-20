import React from "react";
export type IconProps = React.PropsWithChildren<{
  num?: number;
  str?: string;
}>;

const Icon = (props: IconProps) => {
  const { num } = props;
  console.log(props.str, "props");

  return (
    <div>
      Icon
      <br />
      {props.children}
      <br />
      {num}
    </div>
  );
};
export default Icon;
