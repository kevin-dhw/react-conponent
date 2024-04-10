import { animated, useSprings, useTrail } from "@react-spring/web";
import { useEffect } from "react";
import "./index.scss";

const Spring = () => {
  const [springs, api] = useTrail(3, () => ({
    from: { width: 0 },
    // to: { width: 300 },
    config: {
      duration: 2000,
    },
  }));
  //   useEffect(() => {
  //     api.start({
  //       width: 800,
  //     });
  //   });
  function handleClick() {
    console.log(111);
    api.start({
      width: 800,
    });
  }
  return (
    <div>
      123<button onClick={handleClick}>动画</button>
      <br />
      {springs.map((styles) => {
        return <animated.div style={styles} className="box"></animated.div>;
      })}
    </div>
  );
};
export default Spring;
