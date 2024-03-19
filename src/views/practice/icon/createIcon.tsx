import { PropsWithChildren } from "react";
import Icon, { IconProps } from ".";

interface CreateOptions extends PropsWithChildren<IconProps> {
  content?: any;
  num?: 100;
}

const CreateIcon = (options: CreateOptions) => {
  return () => {
    return <Icon {...options}>{options.content}</Icon>;
  };
};
export default CreateIcon;
