import { useContext } from "react";
import { SpaceContext } from "./context";

const Space = () => {
  const { space } = useContext(SpaceContext);
  return (
    <div>
      Space
      <br />
      context里面的数据: {space?.size}
    </div>
  );
};
export default Space;
