import React, { useEffect, useRef, Fragment } from "react";
import classNames from "classnames";
import { useDrag, useDrop } from "react-dnd";
import { useTodoListStore, ListItem } from "../../../../store/todoList";

interface ListProps {
  className?: string | string[];
}

const List: React.FC<ListProps> = (props) => {
  const { className } = props;
  const cs = classNames("h-100 border-2 border-black", className);

  const list = useTodoListStore((state) => state.list);
  return (
    <div className={cs}>
      {list.length
        ? list.map((item) => {
            return (
              <Fragment key={item.id}>
                <Gap />
                <Item data={item} />
              </Fragment>
            );
          })
        : "暂无待办事项"}
      <Gap />
    </div>
  );
};

interface ItemProp {
  data: ListItem;
}
function Item(props: ItemProp) {
  const { data } = props;
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
      <p>{data.content}</p>
    </div>
  );
}

function Gap() {
  const addItem = useTodoListStore((state) => state.addItem);
  const ref = useRef<HTMLDivElement>(null);
  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: "new-item",
      drop() {
        addItem({
          id: Math.random().toString().slice(2, 8),
          status: "todo",
          content: "待办事项",
        });
      },
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
