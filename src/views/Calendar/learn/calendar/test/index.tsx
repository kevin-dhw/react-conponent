import Calendar from "..";
import { CalendarContext } from "../context";

function Test() {
  const handleTest = (num: number) => {
    console.log(num, "1111");
  };
  return (
    <>
      test
      {/* <br />
      <button>更新</button> */}
      <CalendarContext.Provider value={{ date: "2025/3/16" }}>
        <Calendar
          handleTest={handleTest}
          render={() => {
            return <div>111</div>;
          }}
        />
      </CalendarContext.Provider>
      <br />
    </>
  );
}

export default Test;
