import { Dayjs } from "dayjs";
import React, { CSSProperties, useState } from "react";
import cn from "classnames";
import MonthCalendar from "./components/monthCalendar";
import Header from "./components/header";
import "./index.scss";

export interface CalendarProps {
  value: Dayjs;
  style?: CSSProperties;
  className?: string | string[];
  dateRender?: (currentDate: Dayjs) => React.ReactNode;
  dateInnerRender?: (currentDate: Dayjs) => React.ReactNode;
  locale?: string;
  onChange?: (date: Dayjs) => void;
}

function Calendar(props: CalendarProps) {
  const { value, style, className, onChange } = props;
  const [curValue, setCurValue] = useState<Dayjs>(value);
  const [curMonth, setCurMonth] = useState<Dayjs>(value);

  const cs = cn("calendar", className);
  console.log(cs, value);
  const selectHandler = (date: Dayjs) => {
    setCurValue(date);
    onChange?.(date);
  };
  const preMonthHandler = () => {
    setCurMonth(curMonth.subtract(1, "month"));
  };
  const nextMonthHandler = () => {
    setCurMonth(curMonth.add(1, "month"));
  };
  return (
    <div style={style}>
      calendar2
      <br />
      <Header
        curMonth={curMonth}
        preMonthHandler={preMonthHandler}
        nextMonthHandler={nextMonthHandler}
      />
      <MonthCalendar
        {...props}
        value={curValue}
        selectHandler={selectHandler}
      />
    </div>
  );
}
export default Calendar;
