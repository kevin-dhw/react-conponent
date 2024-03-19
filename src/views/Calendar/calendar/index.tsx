import MonthCanlendar from "./components/monthCanlendar";
import Header from "./components/header";
import dayjs, { Dayjs } from "dayjs";
import cs from "classnames";
import { CSSProperties, ReactNode, useState } from "react";
import LocaleContext from "./localeContext";

export interface CalendarProps {
  value?: Dayjs;
  // curMonth: Dayjs;
  style?: CSSProperties;
  className?: string | string[];
  // 定制日期现实 会完全覆盖日期单元格
  dateRender?: (currentDate: Dayjs) => ReactNode;
  // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
  dateInnerContent?: (currentDate: Dayjs) => ReactNode;
  // 国际化相关
  locale?: string;
  onChange?: (date: Dayjs) => void;
}

const Calendar = (props: CalendarProps) => {
  const { value, style, className, locale, onChange } = props;
  console.log(value, "111");
  const [curValue, setCurValue] = useState<Dayjs>(value!);
  const [curMonth, setCurMonth] = useState<Dayjs>(value!);

  const selectHandler = (date: Dayjs) => {
    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  };

  const preMonthHandler = () => {
    setCurMonth(curMonth.subtract(1, "month"));
  };

  const nextMonthHandler = () => {
    setCurMonth(curMonth.add(1, "month"));
  };

  const todayHandler = () => {
    const date = dayjs(Date.now());
    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  };
  const classNames = cs("calendar", className);
  console.log(classNames, "classNames");
  // className={classNames}
  return (
    <LocaleContext.Provider value={{ locale: locale || navigator.language }}>
      <div style={style}>
        <Header
          curMonth={curMonth}
          preMonthHandler={preMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={todayHandler}
        />
        <MonthCanlendar
          {...props}
          value={curValue}
          curMonth={curMonth}
          selectHandler={selectHandler}
        />
      </div>
    </LocaleContext.Provider>
  );
};
export default Calendar;
