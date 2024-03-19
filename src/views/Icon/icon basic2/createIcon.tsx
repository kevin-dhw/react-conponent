import Icon, { IconProps } from ".";
import React from "react";
interface createOptions {
  content?: React.ReactNode;
  iconProps?: IconProps;
}
const createIcon = (options: createOptions) => {
  const { content, iconProps } = options;
  return () => {
    return (
      <>
        <Icon {...iconProps}>{content}</Icon>
      </>
    );
  };
};
export default createIcon;
