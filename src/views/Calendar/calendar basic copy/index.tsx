import { CSSProperties, ReactNode } from "react";
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
  const { style, className } = props;
  const classNames = cs("calendar", className);
  console.log(classNames);
  return (
    <div style={style}>
      <Header />
      <MonthCalendar {...props} />
    </div>
  );
}
export default Calendar2;
