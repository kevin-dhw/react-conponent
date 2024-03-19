import Space from "..";
import { SpaceProvider } from "../context";

function Test() {
  return (
    <>
      test
      {/* <br />
      <button>更新</button> */}
      <br />
      <SpaceProvider space={{ size: "big" }}>
        <Space />
      </SpaceProvider>
    </>
  );
}

export default Test;
