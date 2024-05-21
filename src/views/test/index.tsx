import React from "react";
import Canlendar from "../Calendar/calendar basic copy";
import dayjs from "dayjs";

const Test: React.FC = () => {
  console.log(dayjs("2024-11-1"));
  console.log(dayjs("2024-11-1").daysInMonth());
  console.log(dayjs("2024-11-1").startOf("month").format("YYYY-MM-DD"));
  console.log(dayjs("2024-11-1").endOf("month").format("YYYY-MM-DD"));
  const value = dayjs("2024-11-1");
  return (
    <>
      <Canlendar value={value} />
      <br />
    </>
  );
};

export default Test;
