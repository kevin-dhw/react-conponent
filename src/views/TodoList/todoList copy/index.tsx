import React from "react";
// import classNames from "classnames";
import List from "./components/list";
import GarbageBin from "./components/garbageBin";
import NewItem from "./components/newItem";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = (props) => {
  console.log(props);
  return (
    <div
      className={`
    " w-1000 h-600 m-auto mt-100 p-10 
    border-2 border-black 
    flex justify-between items-start"
    `}
    >
      <div className=" flex-2 h-full mr-10  overflow-auto">
        <List />
      </div>
      <div className=" flex-1 h-full ">
        <NewItem />
        <GarbageBin />
      </div>
    </div>
  );
};

export default TodoList;
