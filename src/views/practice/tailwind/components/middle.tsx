const Middle = () => {
  const list = [
    {
      text: "1",
      key: 1,
    },
    {
      text: "2",
      key: 2,
    },
    {
      text: "3",
      key: 3,
    },
    {
      text: "4",
      key: 4,
    },
  ];
  return (
    <div className=" bg-pink-500 p-5 relative">
      {/* <div className=" text-white bg-red-500 inline-block px-5 py-2 rounded-lg">
        测试
      </div>
      <div className=" absolute right-0 top-0">11</div>
      <br /> */}
      <div className=" flex justify-between">
        {list.map((item) => {
          return (
            <div
              className=" bg-slate-400 p-5 mx-2 hover:bg-green-500"
              key={item.key}
            >
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Middle;
