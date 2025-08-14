import dayjs from "dayjs";
import CalendarComponent from "./Calendar";
import { useState } from "react";
import calendarImg from "./calendar.jpg";

const Calendar: React.FC = () => {
  const [value, setValue] = useState(dayjs(dayjs().format("YYYY-MM-DD")));

  return (
    <div className=" mb-[100px]">
      <CalendarComponent
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      ></CalendarComponent>
      <div className=" mt-[20px]">
        <div className=" text-[20px] mb-[10px]">example how to use it</div>
        <img src={calendarImg} className=" w-[500px] h-[200px]"></img>
        {/* <div className=" text-[16px] my-[10px] ">
          what I have learned from this component
        </div> */}
      </div>
    </div>
  );
};
export default Calendar;
