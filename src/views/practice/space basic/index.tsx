import { useContext } from "react";
import { SpaceContext } from "./context";

const Space = () => {
  const { space } = useContext(SpaceContext);
  return (
    <div>
      Space {space?.size}
      <br />
    </div>
  );
};
export default Space;
