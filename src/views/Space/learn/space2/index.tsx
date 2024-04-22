import { useContext } from "react";
import { SpaceType } from "./context";

const Space = () => {
  const { space } = useContext(SpaceType);
  return (
    <>
      Space
      <br />
      {space?.size}
    </>
  );
};
export default Space;
