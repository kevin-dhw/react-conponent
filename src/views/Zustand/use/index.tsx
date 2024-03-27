import { useStore } from "zustand";
import { useCardStore } from "../../../store";

const TestZustand = () => {
  const { num, fn, fun } = useStore(useCardStore);
  const handleChange = () => {
    fn(100);
  };
  const handleChange2 = () => {
    fun(100);
  };
  return (
    <div>
      TestZustand {num}
      <br />
      <button onClick={handleChange}>修改</button>
      <button onClick={handleChange2}>修改2</button>
    </div>
  );
};
export default TestZustand;
