import React, { useContext } from "react";
import Header from "./components/header";
import { CalendarContext } from "./context";

interface CalendarProps {
  handleTest?: (num: number) => void;
  render?: () => React.ReactNode;
}
const Calendar: React.FC<CalendarProps> = (props) => {
  const { handleTest, render } = props;
  const { date } = useContext(CalendarContext);
  return (
    <div>
      <Header />
      <br />
      calender
      <br />
      <button
        onClick={() => {
          handleTest?.(100);
        }}
      >
        测试外面传进来的方法
      </button>
      {render?.()}
      <br />
      context提供的数据: {date}
    </div>
  );
};
export default Calendar;
