import {
  animated,
  useChain,
  useSprings,
  useSpringRef,
  useTrail,
} from "@react-spring/web";
// import { useEffect } from "react";
import "./index.scss";

const Spring = () => {
  const api1 = useSpringRef();
  const [springs] = useTrail(
    3,
    () => ({
      ref: api1,
      from: { width: 0 },
      to: { width: 300 },
      config: {
        duration: 1000,
      },
    }),
    []
  );
  const api2 = useSpringRef();
  const [spring2] = useSprings(3, () => ({
    ref: api2,
    from: { height: 100 },
    to: { height: 50 },
    config: {
      duration: 1000,
    },
  }));
  //               第一个动画0开始  第二个动画500开始
  useChain([api1, api2], [0, 1], 500);
  return (
    <div>
      {springs.map((style1, index) => (
        <animated.div
          key={index}
          style={{ ...style1, ...spring2[index] }}
          className="box"
        ></animated.div>
      ))}
    </div>
  );
};
export default Spring;
