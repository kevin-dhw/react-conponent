// 获取每月天数
export const daysOfMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};
// 当前月第一天星期几
export const firstDayOfMonth = (year: number, month: number): number => {
  console.log(new Date(year, month, 1).getDay(), "1");

  return new Date(year, month, 1).getDay();
};
