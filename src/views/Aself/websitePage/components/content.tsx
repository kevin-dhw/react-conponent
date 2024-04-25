import React, { CSSProperties, useState } from "react";
import classNames from "classnames";

export interface ContextProps {
  style?: CSSProperties;
}
const list = [
  {
    value: "0",
    id: 0,
  },
  {
    value: "1",
    id: 1,
  },
  {
    value: "2",
    id: 2,
  },
  {
    value: "3",
    id: 3,
  },
];
const items = [
  { title: "春节值班表", date: "2024-4-25", count: "10" },
  { title: "春节值班表", date: "2024-4-25", count: "10" },
  { title: "春节值班表", date: "2024-4-25", count: "10" },
  { title: "春节值班表", date: "2024-4-25", count: "10" },
  { title: "春节值班表", date: "2024-4-25", count: "10" },
];

const Content: React.FC<ContextProps> = (props) => {
  const { style } = props;
  const [num, setNum] = useState(0);
  // const cs = ;

  const handleChange = (e: any, index: number) => {
    console.log(e);
    setNum((num) => {
      num = index;
      return num;
    });
  };

  return (
    <div style={style} className=" flex">
      <div className=" w-20% border-r-2 mr-2">
        {list.map((item, index) => {
          return (
            <div
              className={classNames(
                " rounded-md my-2",
                num === index ? "bg-slate-100" : ""
              )}
              key={index}
              onClick={(e) => handleChange(e, index)}
            >
              <span className=" inline-block ml-4">{item.value}</span>
            </div>
          );
        })}
      </div>
      <div className=" flex flex-wrap ml-6">
        {items.map((item, index) => {
          return (
            <div
              className={classNames(
                " w-48 h-36 rounded-lg border-2 flex flex-col justify-between",
                " mr-16",
                index > 3 ? "mt-3" : ""
              )}
            >
              <div>图片</div>
              <div>
                <div className=" text-gray-400 ml-2">{item.title}</div>
                <div className=" flex justify-between m-2">
                  <div>{item.date}</div>
                  <div>{item.count}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Content;
