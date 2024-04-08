import avater from "../image/avater.jpg";

const Header = () => {
  return (
    <div className=" flex items-center">
      <div>
        <img src={avater} className="w-7 h-7 rounded-lg mt-2 ml-2 mb-1.5" />
      </div>
      <div className=" flex flex-1">
        <div className=" ml-2">小米官网</div>
        <div className=" mr-2">小米商城</div>
        <div className=" mr-2">小米汽车</div>
        <div className=" mr-2">小爱开发平台</div>
        <div className=" mr-2">有品</div>
      </div>
      <div className=" flex">
        <div className=" mr-2">登录</div>
        <div className=" mr-2">注册</div>
      </div>
    </div>
  );
};

export default Header;
