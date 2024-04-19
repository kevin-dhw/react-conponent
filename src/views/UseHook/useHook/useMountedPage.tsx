import { useEffect, useState } from "react";
import { useMountedState } from "react-use";

const UseMountedPage = () => {
  const isMonted = useMountedState();
  const [, setNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNum(1);
    }, 1000);
  });
  return (
    <div>
      useMountedPage
      <br />
      {isMonted() ? "monted" : "pending"}
    </div>
  );
};
export default UseMountedPage;
