import React, { useState, useImperativeHandle, useEffect } from "react";
import { monthNames } from "./data";
import { renderDays } from "./utils";
import "./index.css";

interface MiniCalendarProps {
  value: Date;
  onChange: (date: Date) => void;
}

interface MiniCanlendarRef {
  getDate: () => void;
  setDate: (date: Date) => void;
}

const InternalMiniCalendar2: React.ForwardRefRenderFunction<
  MiniCanlendarRef,
  MiniCalendarProps
> = (props, ref) => {
  const { value, onChange } = props;

  const [date, setDate] = useState(value);
  //   处理点击前面一个月
  const handlePreMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };
  //   处理点击下一个月
  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };
  // const callBack = () => {};
  //   获取渲染的天数以及具体位置
  const renderDay = renderDays(date, onChange);

  useEffect(() => {}, [date]);

  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return date;
      },
      setDate(date: Date) {
        setDate(date);
      },
    };
  });

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePreMonth}>&lt;</button>
        <div>
          {date.getFullYear()} 年 {monthNames[date.getMonth()]}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        <div className="empty"></div>
        <div className="empty"></div>
        {renderDay}
      </div>
    </div>
  );
};
const MiniCalendar2 = React.forwardRef(InternalMiniCalendar2);
export default MiniCalendar2;
