import React from "react";
import Icon, { IconProps } from ".";

interface CreateOptions extends IconProps {
  content?: React.ReactNode;
}

const CreateIcon = (props: CreateOptions) => {
  const { content } = props;
  return () => {
    return <Icon {...props}>{content}</Icon>;
  };
};
export default CreateIcon;
