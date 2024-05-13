import React, { useImperativeHandle } from "react";
import { MessageSonProps } from "./son";

interface MessageGrandProps extends MessageSonProps {
  grandNum?: number;
}
export interface MessageGrandRef {
  getGrandData?: () => Record<string, any>;
}

const InnerMessageGrandSon: React.ForwardRefRenderFunction<
  MessageGrandRef,
  MessageGrandProps
> = (props, ref) => {
  const { grandNum } = props;

  // useImperativeHandle(ref, () => {
  //   return {
  //     getGrandData() {
  //       return props;
  //     },
  //   };
  // });
  if ("current" in ref!) {
    console.log(ref, "123");
    ref.current = {
      getGrandData() {
        return props;
      },
    };
  }

  return (
    <div>
      MessageGrandSon
      <br />
      {grandNum}
    </div>
  );
};
const MessageGrandSon = React.forwardRef(InnerMessageGrandSon);
export default MessageGrandSon;
