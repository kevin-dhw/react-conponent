import { useRef } from "react";
import Message, { MessageRef } from "../Message/learn/message/index";

const Test: React.FC = () => {
  const messageRef = useRef<MessageRef>(null);
  const list = [
    { id: 1, name: "jack", age: 18 },
    { id: 2, name: "rose", age: 28 },
    { id: 3, name: "john", age: 20 },
    { id: 4, name: "simon", age: 25 },
  ];
  return (
    <>
      Spring
      <br />
      <Message list={list} />
    </>
  );
};

export default Test;
