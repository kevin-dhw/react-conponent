import Icon, { IconProps } from ".";
import React from "react";

interface CreateProps extends IconProps {
  content?: React.ReactNode;
}

const CreateIcon = (props: CreateProps) => {
  return () => {
    return <Icon {...props}>{props.content}</Icon>;
  };
};
export default CreateIcon;
