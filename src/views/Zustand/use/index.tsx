import { useStore } from "zustand";
import { useCartStore } from "../../../store";

const TestZustand = () => {
  const { num, fn } = useStore(useCartStore);
  const handleChange = () => {
    fn(200);
  };
  useCartStore.subscribe((state) => {
    console.log(state, "1");
    console.log(useCartStore.getState(), "2");
  });
  return (
    <div>
      TestZustand {num}
      <br />
      <button onClick={handleChange}>修改</button>
    </div>
  );
};
export default TestZustand;
