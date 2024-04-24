const Header = () => {
  return (
    <>
      <div className=" flex justify-between mx-8 my-5">
        <div className=" mr-100">DTable</div>
        <div className=" flex flex-1">
          <div className=" mx-100">
            <div className=" border-l-2">
              <span className=" ml-3 cursor-pointer hover:text-green-500 hover:h1:block">
                首页
              </span>
              <h1 className=" hidden">h1显示</h1>
            </div>
          </div>
          <div className=" mr-100  cursor-pointer hover:text-green-500">
            模块广场
          </div>
          <div className=" mr-100  cursor-pointer hover:text-green-500">
            帮助中心
          </div>
        </div>
        <div>进入工作空间</div>
      </div>
    </>
  );
};
export default Header;
