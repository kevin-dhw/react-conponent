import { memo, useState } from "react";

function Aaa() {
  const [, setNum] = useState(1);
}

const Memo = () => {
  return (
    <div>
      memo
      <br />
    </div>
  );
};
export default Memo;
