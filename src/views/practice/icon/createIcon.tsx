import React from "react";
import Icon, { IconProps } from ".";

interface creatIconOptions extends React.PropsWithChildren<IconProps> {
  content?: React.ReactNode;
}

const createIcon = (options: creatIconOptions) => {
  const { content } = options;
  return () => {
    return (
      <div>
        coreateIcon
        <br />
        <Icon {...options}>{content}</Icon>
      </div>
    );
  };
};
export default createIcon;
