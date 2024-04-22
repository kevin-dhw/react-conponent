// import AddIcon from "../Icon/learn/icon2/icons/AddIcon";

import Space from "../Space/learn/space2";
import { SpaceProvider } from "../Space/learn/space2/context";

const Test: React.FC = () => {
  return (
    <>
      Spring
      <br />
      {/* <AddIcon /> */}
      <SpaceProvider space={{ size: "mini" }}>
        <Space />
      </SpaceProvider>
    </>
  );
};

export default Test;
