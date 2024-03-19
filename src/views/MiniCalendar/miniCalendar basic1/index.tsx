import React, { useState, useImperativeHandle } from "react";
import "./index.scss";
import { monthNames } from "./data";
import { daysOfMonth, firstDayOfMonth } from "./utils";

interface CalendarProps {
  value: Date;
  onChange?: (date: Date) => void;
}
export interface CalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}

const InterMiniCalendar: React.ForwardRefRenderFunction<
  CalendarRef,
  CalendarProps
> = (props, ref) => {
  const { value, onChange } = props;
  const [date, setData] = useState(value);
  const handlePreMonth = () => {
    setData(new Date(date.getFullYear(), date.getMonth() - 1));
  };
  const handleNextMonth = () => {
    setData(new Date(date.getFullYear(), date.getMonth() + 1));
  };
  const renderDays = () => {
    const days = [];
    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }
    for (let i = 1; i <= daysCount; i++) {
      const clickHandler = onChange?.bind(
        null,
        new Date(date.getFullYear(), date.getMonth(), i)
      );
      if (i === date.getDate()) {
        days.push(
          <div key={i} className="day selected" onClick={clickHandler}>
            {i}
          </div>
        );
      } else {
        days.push(
          <div key={i} className="day" onClick={clickHandler}>
            {i}
          </div>
        );
      }
    }
    return days;
  };
  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return date;
      },
      setDate(date: Date) {
        setData(date);
      },
    };
  });
  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePreMonth}>&lt;</button>
        <div>
          {date.getFullYear()} 年 {monthNames[date.getMonth()]} 月
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
        {renderDays()}
      </div>
    </div>
  );
};
const MiniCalendar = React.forwardRef(InterMiniCalendar);
export default MiniCalendar;
