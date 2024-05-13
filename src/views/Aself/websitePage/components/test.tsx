const Test = () => {
  const navs = [
    {
      lable: "Home",
      path: "/",
    },
    {
      lable: "News",
      path: "/info",
    },
    {
      lable: "tags",
      path: "/tag",
    },
  ];
  const goWrite = () => {
    console.log("222");
  };
  return (
    <>
      <div className="h-[60px] bg-pink-300 flex items-center justify-center">
        <div className="text-[30px] font-bold mr-[60px] basis-1/3">Blog-C</div>
        <section className="flex">
          {navs?.map((item) => (
            <div className="mx-6" key={item?.lable}>
              {item.lable}
            </div>
          ))}
        </section>
        <section>
          <div onClick={goWrite}>write article</div>
        </section>
      </div>
    </>
  );
};
export default Test;
