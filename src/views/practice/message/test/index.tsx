import React from "react";
import MessageTest from "..";
// 如果使用了ref放到context  然后hooks里面行不通
function Test() {
  const list = [
    {
      id: 1,
      name: "jack",
      age: 20,
    },
    {
      id: 2,
      name: "john",
      age: 18,
    },
    {
      id: 3,
      name: "lucy",
      age: 22,
    },
  ];
  /**
   * 
   * 
   *  onClick={() => {
          messageRef.current?.add({
            content: "请求成功",
          });
        }}
   */
  // const messageTest = useMessageTest();
  return (
    <>
      <button
        onClick={() => {
          // messageTest.add({
          //   id: 100,
          //   age: 30,
          //   name: "23344",
          // });
        }}
      >
        添加
      </button>
      <MessageTest list={list}></MessageTest>
      <br />
    </>
  );
}
const OutTest = () => {
  return <Test />;
};
export default OutTest;
