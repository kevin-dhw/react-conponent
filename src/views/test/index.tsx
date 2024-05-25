import React from "react";
import Canlendar from "../Calendar/calendar basic copy";
import dayjs from "dayjs";

const Test: React.FC = () => {
  const value = dayjs("2024-11-1");

  return (
    <>
      <Canlendar
        value={value}
        onChange={(value) => {
          console.log(value, "onchange");
        }}
        dateInnerContent={(value) => {
          return (
            <div>
              <p style={{ backgroundColor: "yellowgreen", height: "50px" }}>
                {value.format("YYYY/MM/DD")}
              </p>
            </div>
          );
        }}
      />
      <br />
    </>
  );
};

export default Test;
