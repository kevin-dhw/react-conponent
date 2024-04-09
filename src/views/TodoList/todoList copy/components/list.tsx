import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { useDrag, useDrop } from "react-dnd";

interface ListProps {
  className?: string | string[];
}

const List: React.FC<ListProps> = (props) => {
  const { className } = props;
  const cs = classNames("h-100 border-2 border-black", className);
  return (
    <div className={cs}>
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
      <Gap />
      <Item />
    </div>
  );
};

function Item() {
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
    "h-100 border-2 border-black bg-blue-300 mb-10 p-10",
    "flex justify-start items-start",
    "text-xl tracking-wide",
    dragging ? "border-dashed bg-white" : ""
  );
  return (
    <div className={cs} ref={ref}>
      <input type="checkbox" className="w-40 h-40 mr-10"></input>
      <p>待办事项</p>
    </div>
  );
}

function Gap() {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: "new-item",
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

  const cs = classNames("h-10", isOver ? "bg-red-300" : "");
  return <div ref={ref} className={cs}></div>;
}

export default List;
