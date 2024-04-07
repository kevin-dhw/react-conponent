// import { useState } from "react";
import Popover from "..";

function Test() {
  const popoverCotent = () => {
    return <div>测试contrent</div>;
  };
  function handleBtn(num: number) {
    console.log(num);
  }
  const popoverCotent2 = <div>测试contrent</div>;
  return (
    <>
      test
      {/* <br />
      <button>更新</button> */}
      <Popover
        handleBtn={handleBtn}
        content={popoverCotent}
        content2={popoverCotent2}
        position="bottom"
        renderContent={() => {
          return <>renderContent函数内容</>;
        }}
      >
        <div>children里面的内容</div>
      </Popover>
      <br />
    </>
  );
}

export default Test;
