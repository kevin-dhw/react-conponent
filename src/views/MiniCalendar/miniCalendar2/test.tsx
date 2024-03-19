import MiniCalendar from "../miniCalendar2";
import { useRef } from "react";
interface MiniCanlendarRef {
  getDate: () => void;
  setDate: (date: Date) => void;
}
function Test() {
  const MiniCanlendarRef = useRef<MiniCanlendarRef>(null);
  const onChange = (value: Date) => {
    console.log(1223, value);
    MiniCanlendarRef.current?.getDate();
    // MiniCanlendarRef.current?.setDate(new Date(2024, 5, 8));
  };

  return (
    <div>
      test
      <br />
      <MiniCalendar
        ref={MiniCanlendarRef}
        value={new Date()}
        onChange={onChange}
      />
    </div>
  );
}
export default Test;
