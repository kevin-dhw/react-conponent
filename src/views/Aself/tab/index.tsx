import { useState } from "react";
import classNames from "classnames";

interface TabTYpe {
  name: string;
  key: number;
}

const Tabs = () => {
  const [tabs] = useState<TabTYpe[]>([
    {
      name: "tab1",
      key: 1,
    },
    {
      name: "tab2",
      key: 2,
    },
    {
      name: "tab3",
      key: 3,
    },
    {
      name: "tab4",
      key: 4,
    },
  ]);
  const [num, setNum] = useState(0);

  const handleClick = (index: number) => {
    console.log(index);
    setNum(index);
  };
  return (
    <>
      <div className=" flex justify-between w-600 mt-5">
        {tabs.map((item, index) => {
          // className={cs}
          return (
            <div
              onClick={() => handleClick(index)}
              className={classNames(
                " rounded-none h-12 w-16 flex",
                num === index ? "bg-red-700" : ""
              )}
              key={index}
            >
              <span className=" m-auto"> {item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      {<div>tab{num}</div>}
    </>
  );
};
export default Tabs;
