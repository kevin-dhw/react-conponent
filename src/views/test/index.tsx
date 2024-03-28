import { useState } from "react";
import Sapce from "../practice/space basic";
import { SpaceProvider } from "../practice/space basic/context";

function Test() {
  const [size, setSize] = useState("init");
  const changeSize = () => {
    setSize("big");
  };
  return (
    <>
      test
      {/* <br />
      <button>更新</button> */}
      <button onClick={changeSize}>改变size</button>
      <br />
      <SpaceProvider space={{ size }}>
        <Sapce />
      </SpaceProvider>
      <br />
    </>
  );
}

export default Test;
