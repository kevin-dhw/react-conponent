import React from "react";
import useComponentsTab from "../../store/componentsTab";
import classNames from "classnames";
import Calendar from "./component/calendar";
import Icon from "./component/icon";
import Space from "./component/space";
import Watermark from "./component/watermark";
import Message from "./component/message";
import OnBoarding from "./component/onBoarding";
import TodoList from "./component/todoList";

const Test: React.FC = () => {
  const { tabs, changeTab } = useComponentsTab();
  const curTab = tabs.find((item) => item.isSelected)?.lable;

  return (
    <>
      <div className=" flex h-screen">
        <div className=" w-[150px] pt-[20px] mx-[10px] bg-white">
          {tabs.map((item, index) => {
            return (
              <div
                onClick={() => {
                  changeTab(index);
                }}
                key={index}
                className={classNames(
                  " p-[10px] flex rounded-sm mb-[10px]",
                  item.isSelected && " bg-blue-200 text-white"
                )}
              >
                <div className=" m-auto ">{item.lable}</div>
              </div>
            );
          })}
        </div>
        <div className=" w-2 bg-slate-400"></div>
        <div className=" mt-[30px] ml-[10px] flex-1">
          {curTab === "calendar" && <Calendar />}
          {curTab === "icon" && <Icon />}
          {curTab === "space" && <Space />}
          {curTab === "watermark" && <Watermark />}
          {curTab === "message" && <Message />}
          {curTab === "onBoarding" && <OnBoarding />}
          {curTab === "todoList" && <TodoList />}
        </div>
        <div className=" mt-[10px] mr-[10px]">Kevin Du components</div>
      </div>
    </>
  );
};

export default Test;
