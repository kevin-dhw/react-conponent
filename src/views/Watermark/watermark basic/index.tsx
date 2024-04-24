import React, {
  useRef,
  PropsWithChildren,
  CSSProperties,
  useCallback,
  useEffect,
} from "react";
import useWatermark from "./useWatermark";

export interface WatermarkProps extends PropsWithChildren {
  style?: CSSProperties;
  className?: string;
  zIndex?: string | number;
  width?: number;
  height?: number;
  rotate?: number;
  image?: string;
  content?: string | string[];
  fontStyle: {
    color?: string;
    fontFamily?: string;
    fontSize?: number | string;
    fontWeight?: number | string;
  };
  gap?: [number, number];
  offset?: [number, number];
  getContainer?: () => HTMLElement;
}

const Watermark: React.FC<WatermarkProps> = (props) => {
  const {
    className,
    style,
    zIndex,
    width,
    height,
    rotate,
    image,
    content,
    fontStyle,
    gap,
    offset,
  } = props;
  const containerRef = useRef<HTMLDivElement>(null);
//  useCallback 避免每次都变
  const getContainer = useCallback(() => {
    return props.getContainer ? props.getContainer() : containerRef.current!;
  }, [containerRef.current, props.getContainer]);

  /*
  const { generateWatermark } = useWatermark({
        zIndex,
        width,
        height,
        rotate,
        image,
        content,
        fontStyle,
        gap,
        offset,
        getContainer,
    });
  //  参数改变  再次调用
    useEffect(() => {
        generateWatermark({
            zIndex,
            width,
            height,
            rotate,
            image,
            content,
            fontStyle,
            gap,
            offset,
            getContainer,
        });
    }, [
        zIndex,
        width,
        height,
        rotate,
        image,
        content,
        JSON.stringify(props.fontStyle),
        JSON.stringify(props.gap),
        JSON.stringify(props.offset),
        getContainer,
    ]);

  */

  return props.children ? (
    <div ref={containerRef} className={className} style={style}>
      Watermark
      <br />
      {props.children}
    </div>
  ) : null;
};
export default Watermark;
