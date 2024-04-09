import classNames from "classnames";
import { FC, useEffect, useRef } from "react";
import { useDrop } from "react-dnd";

interface GarbaseProps {
  className?: string | string[];
}

const GarbageBin: FC<GarbaseProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: "list-item",
      drop(item) {},
      collect(monitor) {
        return {
          isOver: monitor.isOver(),
        };
      },
    };
  });

  useEffect(() => {
    drop(ref);
  }, []);

  const cs = classNames(
    "h-200 border-2 border-black",
    "bg-orange-300",
    "leading-200 text-center text-2xl",
    "cursor-move select-none",
    isOver ? "bg-yellow-400 border-dashed" : "",
    props.className
  );

  return (
    <div ref={ref} className={cs}>
      垃圾箱
    </div>
  );
};

export default GarbageBin;
