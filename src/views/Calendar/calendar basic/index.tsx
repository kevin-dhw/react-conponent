import dayjs, { Dayjs } from "dayjs";
import MonthCalendar from "./components/monthCalendar";
import Header from "./components/header";
import "./index.scss";

export interface CalendarProps {
  value: Dayjs;
}
function Calendar2(props: CalendarProps) {
  // console.log(dayjs("2023-11-1").daysInMonth());
  // console.log(dayjs("2023-11-1").startOf("month").format("YYYY-MM-DD"));
  console.log(dayjs("2023-11-1").endOf("month").format("YYYY-MM-DD"));

  return (
    <div>
      calendar2
      <br />
      <Header />
      <MonthCalendar {...props} />
    </div>
  );
}
export default Calendar2;
