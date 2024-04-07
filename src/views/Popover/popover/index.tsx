import {
  useInteractions,
  useFloating,
  useHover,
  useClick,
  offset,
  arrow,
  flip,
  FloatingArrow,
} from "@floating-ui/react";
import {
  useState,
  useRef,
  CSSProperties,
  PropsWithChildren,
  ReactNode,
} from "react";
import "./index.scss";

type Alignment = "start" | "end";
type Side = "top" | "right" | "bottom" | "left";
type AlignedPlacement = `${Side}-${Alignment}`;

interface PopoverProps extends PropsWithChildren {
  content: ReactNode;
  trigger?: "hover" | "click";
  placement?: Side | Alignment;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
}

const Popover = (props: PopoverProps) => {
  const {
    open,
    onOpenChange,
    content,
    children,
    trigger = "hover",
    placement = "bottom",
    className,
    style,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      setIsOpen(open);
      onOpenChange?.(open);
    },
    // placement 来控制具体显示的位置
    placement: placement,
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
  const interaction =
    trigger === "hover" ? useHover(context) : useClick(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    interaction,
  ]);
  return (
    <div>
      Popover
      <br />
      <span
        className={className}
        style={style}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {children}
      </span>
      {isOpen && (
        <div
          className="popover-floating"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {content}
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
