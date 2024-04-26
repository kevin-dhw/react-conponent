import { Checkbox } from "antd";
import { useState } from "react";

interface itemType {
  title: string;
  checked: boolean;
  key: number;
}

const Bottom = () => {
  const [list, setList] = useState<itemType[]>([
    { title: "电费", checked: false, key: 0 },
    { title: "银行", checked: true, key: 1 },
    { title: "在办", checked: false, key: 2 },
  ]);
  const handleChange = (checked: boolean, i: number) => {
    setList((list) => {
      list[i].checked = !checked;
      return list;
    });
    console.log(list);
  };
  return (
    <div className=" h-80 w-48 bg-slate-50 ml-16 rounded-md p-2">
      <div className=" flex">
        <div className=" inline-block w-5 h-1 bg-green-300 mt-1 mr-2"></div>
        <div>订阅内容</div>
      </div>
      <div className=" my-3 flex justify-between">
        <span>全部</span>
        <span>
          <Checkbox />
        </span>
      </div>
      {list.map((item, index) => {
        return (
          <div key={index} className=" my-3 flex justify-between">
            <span>{item.title}</span>
            <span>
              <Checkbox
                checked={item.checked}
                onChange={() => handleChange(item.checked, index)}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default Bottom;
