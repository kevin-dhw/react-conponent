import { CSSProperties, ReactNode, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import MonthCalendar from "./components/monthCalendar";
import Header from "./components/header";
import cs from "classnames";
import "./index.scss";

export interface CalendarProps {
  value: Dayjs;
  style?: CSSProperties;
  className?: string | string[];
  // 定制日期显示，会完全覆盖日期单元格
  dateRender?: (currentDate: Dayjs) => ReactNode;
  // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
  dateInnerContent?: (currentDate: Dayjs) => ReactNode;
  // 国际化相关
  locale?: string;
  onChange?: (date: Dayjs) => void;
}

function Calendar2(props: CalendarProps) {
  const { style, className, value, onChange } = props;
  const [curValue, setCurValue] = useState<Dayjs>(value);
  const [curMonth, setCurMonth] = useState<Dayjs>(value);

  const classNames = cs("calendar", className);
  console.log(classNames, "123");

  function selectHandler(date: Dayjs) {
    setCurValue(date);
    onChange?.(date);
  }

  function preMonthHandler() {
    setCurMonth(curMonth.subtract(1, "month"));
  }
  function nextMonthHandler() {
    setCurMonth(curMonth.add(1, "month"));
  }
  function todayHandler() {
    const date = dayjs(Date.now());
    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  }

  return (
    <div style={style}>
      <Header
        todayHandler={todayHandler}
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
export default Calendar2;
