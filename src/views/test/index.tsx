import WebsitePage from "../Aself/websitePage";
import HeaderContext from "../Aself/websitePage/context/headerContext";
import { Headr2Provider } from "../Aself/websitePage/context/header2Context";
import Memo from "../practice/memo";

const Test: React.FC = () => {
  return (
    <>
      {/* Spring
      <br /> */}
      <Headr2Provider
        header2={{ left2: "最外面的left2", right2: "最外面的right2" }}
      >
        <HeaderContext.Provider
          value={{ left: "最外面的left", right: "最外面的right" }}
        >
          <WebsitePage />
        </HeaderContext.Provider>
      </Headr2Provider>
      <br />
      <Memo />
    </>
  );
};

export default Test;
