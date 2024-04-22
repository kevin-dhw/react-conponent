import Card from "./components/card";

const Echarts = () => {
  const obj = {
    rightContent: "右",
    leftBottomTitle: "下",
    leftTopTitle: "上",
  };
  return (
    <>
      Echarts
      <br />
      <Card {...obj} className="bg-slate-50" />
    </>
  );
};
export default Echarts;
