import Demo from "..";
import { ConfigProvider } from "../context";
function Test() {
  return (
    <>
      test
      <br />
      <ConfigProvider space={{ size: "small" }}>
        <Demo />
      </ConfigProvider>
    </>
  );
}
export default Test;
