import React, { useState, useImperativeHandle, useRef, useEffect } from "react";
import { monthNames } from "./data";
import { firstDayOfMonth, daysOfMonth } from "./utils";
import "./index.css";

interface MiniCalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

export interface MiniCalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}
const InternalMiniCalendar: React.ForwardRefRenderFunction<
  MiniCalendarRef,
  MiniCalendarProps
> = (props, ref) => {
  const { value = new Date(), onChange } = props;

  const [date, setDate] = useState(value);

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

  const handlePreMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };
  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
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
        {renderDays()}
      </div>
    </div>
  );
};
const MiniCalendar = React.forwardRef(InternalMiniCalendar);
function Test() {
  const miniCalendarRef = useRef<MiniCalendarRef>();

  const setDate = () => {
    miniCalendarRef.current?.setDate(new Date(2024, 8, 1));
  };
  useEffect(() => {
    miniCalendarRef.current?.getDate();
  });
  return (
    <div>
      test
      <br />
      <button onClick={setDate}>设置日期</button>
      <MiniCalendar
        ref={miniCalendarRef}
        value={new Date("2024-1-4")}
        onChange={(date: Date) => console.log(date.toLocaleString())}
      />
    </div>
  );
}
export default Test;
// export default MiniCalendar;
