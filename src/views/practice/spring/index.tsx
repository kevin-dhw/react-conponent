import { animated, useTrail } from "@react-spring/web";
import { useEffect } from "react";
import "./index.scss";

const Spring = () => {
  const [springs, api] = useTrail(3, () => {
    return {
      from: {
        width: 0,
        height: 0,
      },
      to: {
        width: 200,
        height: 200,
      },
      config: {
        duration: 1000,
      },
    };
  });
  useEffect(() => {
    api.start({
      width: 200,
      height: 200,
    });
  });
  return (
    <div>
      <br />
      {springs.map((styles) => {
        return (
          <animated.div className="box" style={{ ...styles }}></animated.div>
        );
      })}
    </div>
  );
};
export default Spring;
