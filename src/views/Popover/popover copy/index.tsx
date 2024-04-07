import {
  useInteractions,
  useFloating,
  useHover,
  offset,
  arrow,
  flip,
  FloatingArrow,
} from "@floating-ui/react";
import { useState, useRef } from "react";
import "./index.scss";

const Popover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    // placement 来控制具体显示的位置
    placement: "right",
    middleware: [
      // 处理理原本元素过近的问题
      offset(10),
      //  对箭头的处理
      arrow({
        element: arrowRef,
      }),
      // top在上面的边界处理
      flip(),
    ],
  });
  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  return (
    <div>
      Popover
      <br />
      <button
        className="button"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        hello
      </button>
      {isOpen && (
        <div
          className="popover-floating"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          测试
          <FloatingArrow
            ref={arrowRef}
            context={context}
            fill="#fff"
            stroke="#000"
            strokeWidth={1}
          ></FloatingArrow>
        </div>
      )}
    </div>
  );
};
export default Popover;
