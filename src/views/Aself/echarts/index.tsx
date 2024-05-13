// import classNames from "classnames";
import Card from "./components/card";

const Echarts = () => {
  const obj = {
    rightContent: "右",
    leftBottomTitle: "下",
    leftTopTitle: "上",
    className: " h-44 w-64 bg-slate-50",
  };
  const a: number = 10;
  // const b: number = 2;

  const getMsg = (num: number) => {
    console.log(num, "获取到的子元素数据");
  };
  return (
    <>
      Echarts
      <br />
      {a === 0 ? (
        <>a===0的时候</>
      ) : a === 1 ? (
        <>a====1的时候</>
      ) : a === 2 ? (
        <>a===2的时候</>
      ) : (
        <>a=其他未知值的时候的时候</>
      )}
      <Card {...obj} sendData={getMsg} />
    </>
  );
};
export default Echarts;
