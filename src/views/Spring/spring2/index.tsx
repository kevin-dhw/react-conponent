import {
  animated,
  useSpringRef,
  useTrail,
  useChain,
  useSprings,
} from "@react-spring/web";
// import { useEffect } from "react";
import "./index.scss";

const Spring2 = () => {
  const ref1 = useSpringRef();
  const [spring1] = useTrail(
    3,
    () => ({
      ref: ref1,
      from: { width: 0 },
      to: { width: 300 },
      config: {
        duration: 1000,
      },
    }),
    []
  );

  const ref2 = useSpringRef();
  const [spring2] = useSprings(
    3,
    () => ({
      ref: ref2,
      from: { height: 100 },
      to: { height: 50 },
    }),
    []
  );

  useChain([ref1, ref2], [0, 1], 500);
  return (
    <>
      {spring1.map((styles1, index) => (
        <animated.div
          style={{ ...styles1, ...spring2[index] }}
          className="box"
        ></animated.div>
      ))}
    </>
  );
};
export default Spring2;
