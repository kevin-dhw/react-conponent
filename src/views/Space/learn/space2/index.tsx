import { useContext } from "react";
import { SpaceContext } from "./context";

const Space = () => {
  const { space } = useContext(SpaceContext);
  return (
    <>
      Space
      <br />
      {space?.size}
    </>
  );
};
export default Space;
