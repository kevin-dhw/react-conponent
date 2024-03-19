import Icon, { IconProps } from ".";

const CreateIcon = (options: IconProps) => {
  const { num } = options;
  return () => {
    return <Icon>{num}</Icon>;
  };
};
export default CreateIcon;
