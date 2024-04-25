import { useEffect, useState, useRef } from "react";
import { WatermarkProps } from ".";
import { merge } from "lodash-es";

export type WatermarkOptions = Omit<
  WatermarkProps,
  "className" | "style" | "children"
>;
const defaultOptions = {
  rotate: -20,
  zIndex: 1,
  width: 100,
  gap: [100, 100],
  fontStyle: {
    fontSize: "16px",
    color: "rgba(0, 0, 0, 0.15)",
    fontFamily: "sans-serif",
    fontWeight: "normal",
  },
  getContainer: () => document.body,
};
export function isNumber(obj: any): obj is number {
  return (
    Object.prototype.toString.call(obj) === "[object Number]" && obj === obj
  );
}
const toNumber = (value?: string | number, defaultValue?: number) => {
  if (value === undefined) {
    return defaultValue;
  }
  if (isNumber(value)) {
    return value;
  }
  const numberVal = parseFloat(value);
  return isNumber(numberVal) ? numberVal : defaultValue;
};

const getMergedOptions = (o: Partial<WatermarkOptions>) => {
  const options = o || {};
  const mergedOptions = {
    ...options,
    rotate: options.rotate || defaultOptions.rotate,
    zIndex: options.zIndex || defaultOptions.zIndex,
    fontStyle: { ...defaultOptions.fontStyle, ...options.fontStyle },
    width: toNumber(
      options.width,
      options.image ? defaultOptions.width : undefined
    ),
    height: toNumber(options.height, undefined)!,
    getContainer: options.getContainer!,
    gap: [
      toNumber(options.gap?.[0], defaultOptions.gap[0]),
      toNumber(options.gap?.[1] || options.gap?.[0], defaultOptions.gap[1]),
    ],
    // 处理完后必须有值
  } as Required<WatermarkOptions>;

  const mergedOffsetX = toNumber(mergedOptions.offset?.[0], 0)!;
  const mergedOffsetY = toNumber(
    mergedOptions.offset?.[1] || mergedOptions.offset?.[0],
    0
  )!;
  mergedOptions.offset = [mergedOffsetX, mergedOffsetY];

  return mergedOptions;
};

function useWatermark(params: WatermarkOptions) {
  const [options, setOptions] = useState(params || {});

  const mergeOptions = getMergedOptions(options);
  const waterMarkDiv = useRef<HTMLDivElement>();
  const container = mergeOptions.getContainer!();
  const { zIndex, gap } = mergeOptions;

  function drawWatermark() {
    if (!container) return;
  }

  useEffect(() => {
    drawWatermark();
  }, [options.getContainer]);

  return {
    generateWatermark: (newOptions: Partial<WatermarkOptions>) => {
      setOptions(merge({}, options, newOptions));
    },
    destory: () => {},
  };
}
export default useWatermark;
