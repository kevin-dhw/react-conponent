import Header from "./components/header";
import Content from "./components/content";
// import Bottom from "./components/bottom";
// import Test from "./components/test";

const WebsitePage = () => {
  return (
    <div>
      <Header />
      <Content style={{ marginTop: "20px" }} />
      {/* <Bottom /> */}
      <br />
      {/* <Test /> */}
    </div>
  );
};
export default WebsitePage;
