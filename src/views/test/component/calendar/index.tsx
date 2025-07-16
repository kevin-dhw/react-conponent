import dayjs from "dayjs";
import CalendarComponent from "./Calendar";
import { useState } from "react";

const Calendar: React.FC = () => {
  const [value, setValue] = useState(dayjs(dayjs().format("YYYY-MM-DD")));

  return (
    <div className="App">
      <CalendarComponent
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      ></CalendarComponent>
    </div>
  );
};
export default Calendar;
