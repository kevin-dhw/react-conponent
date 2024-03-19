import { useRef } from "react";
import IconAdd from "../icons/iconAdd";
import IconEmail from "../icons/iconEmail";

function App() {
  const ref = useRef<SVGSVGElement>(null);
  return (
    <div>
      <div style={{ padding: "50px" }}>
        <IconAdd size="40px" ref={ref}></IconAdd>
        <IconEmail spin></IconEmail>
        <IconEmail style={{ color: "blue", fontSize: "50px" }}></IconEmail>
      </div>
    </div>
  );
}

export default App;
