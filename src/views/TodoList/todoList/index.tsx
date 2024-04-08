import React from "react";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = (props) => {
  console.log(props);
  return (
    <div className=" bg-purple-600">
      todoList
      <br />
    </div>
  );
};

export default TodoList;
