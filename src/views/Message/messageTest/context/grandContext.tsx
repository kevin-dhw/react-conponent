// import { PropsWithChildren, RefObject, createContext, useRef } from "react";
// import MessageGrandSon, { MessageGrandRef } from "../components/grandSon";

// interface MessageGrandType {
//   messageGrandRef?: RefObject<MessageGrandRef>;
// }

// const MessageGrandContext = createContext<MessageGrandType>({});
// const MessageGrandProvider = (props: PropsWithChildren) => {
//   const { children } = props;
//   const messageGrandRef = useRef<MessageGrandRef>(null);
//   return (
//     <MessageGrandContext.Provider value={{ messageGrandRef }}>
//       <MessageGrandSon ref={messageGrandRef}></MessageGrandSon>
//       {children}
//     </MessageGrandContext.Provider>
//   );
// };
// export { MessageGrandContext, MessageGrandProvider };
