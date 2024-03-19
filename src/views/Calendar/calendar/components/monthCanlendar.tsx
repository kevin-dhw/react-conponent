import "../index.scss";
import { Dayjs } from "dayjs";
// import { CSSProperties, ReactNode } from "react";
// import CalendarLocale from "../locale/en-US";
import LocaleContext from "../localeContext";
import allLocales from "../locale";
import { useContext } from "react";
import cs from "classnames";
import { CalendarProps } from "..";

// interface CalendarProps {
//   value: Dayjs;
//   style?: CSSProperties;
//   className?: string | string[];
//   // 定制日期现实 会完全覆盖日期单元格
//   dateRender?: (currentDate: Dayjs) => ReactNode;
//   // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
//   dateInnerContent?: (currentDate: Dayjs) => ReactNode;
//   // 国际化相关
//   locale?: string;
//   onChange?: (date: Dayjs) => void;
// }
interface MonthCanlendarProps extends CalendarProps {
  selectHandler?: (date: Dayjs) => void;
  curMonth: Dayjs;
}

// 拿到当前月份的信息
function getAllDays(date: Dayjs) {
  const startDate = date.startOf("month");
  const day = startDate.day();

  const daysInfo: Array<{ date: Dayjs; currentMonth: boolean }> = new Array(
    6 * 7
  );

  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, "day"),
      currentMonth: false,
    };
  }

  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, "day");
    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() === date.month(),
    };
  }

  return daysInfo;
}
// 准备渲染的数据
function renderDays(
  days: Array<{ date: Dayjs; currentMonth: boolean }>,
  dateRender: MonthCanlendarProps["dateRender"],
  dateInnerContent: MonthCanlendarProps["dateInnerContent"],
  value: Dayjs,
  selectHandler: MonthCanlendarProps["selectHandler"]
) {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      const item = days[i * 7 + j];
      row[j] = (
        <div
          className={
            "calendar-month-body-cell " +
            (item.currentMonth ? "calendar-month-body-cell-current" : "")
          }
          onClick={() => selectHandler?.(item.date)}
        >
          {dateRender ? (
            dateRender(item.date)
          ) : (
            <div className="calendar-month-body-cell-date">
              <div
                className={cs(
                  "calendar-month-body-cell-date-value",
                  value.format("YYYY-MM-DD") === item.date.format("YYYY-MM-DD")
                    ? "calendar-month-body-cell-date-selected"
                    : ""
                )}
              >
                {item.date.date()}
              </div>
              <div className="calendar-month-body-cell-date-content">
                {dateInnerContent?.(item.date)}
              </div>
            </div>
          )}
        </div>
      );
    }
    rows.push(row);
  }

  return rows.map((row, index) => (
    <div className="calendar-month-body-row" key={index}>
      {row}
    </div>
  ));
}

const MonthCanlendar = (props: MonthCanlendarProps) => {
  const { value, curMonth, dateRender, dateInnerContent, selectHandler } =
    props;
  const localeContext = useContext(LocaleContext);
  const CalendarLocale = allLocales[localeContext.locale];
  const weekList = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  // 所有的天
  const allDays = getAllDays(curMonth);
  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weekList.map((week) => (
          <div className="calendar-month-week-list-item" key={week}>
            {CalendarLocale.week[week]}
          </div>
        ))}
      </div>
      <div className="calendar-month-body">
        {renderDays(
          allDays,
          dateRender,
          dateInnerContent,
          value,
          selectHandler
        )}
      </div>
    </div>
  );
};
export default MonthCanlendar;
