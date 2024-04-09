import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { useDrag } from "react-dnd";

interface NewItemProps {
  className?: string | string[];
}

const NewItem: React.FC<NewItemProps> = (props) => {
  const { className } = props;
  const ref = useRef<HTMLDivElement>(null);

  const [{ dragging }, drag] = useDrag({
    type: "new-item",
    item: {},
    collect(monitor) {
      return {
        dragging: monitor.isDragging(),
      };
    },
  });

  useEffect(() => {
    drag(ref);
  }, []);

  const cs = classNames(
    "h-200 border-2 border-black",
    "leading-100 text-center text-2xl",
    "bg-green-300",
    "cursor-move select-none",
    dragging ? "border-dashed bg-white" : "",
    className
  );

  return (
    <div ref={ref} className={cs}>
      新的待办事项
    </div>
  );
};

export default NewItem;
