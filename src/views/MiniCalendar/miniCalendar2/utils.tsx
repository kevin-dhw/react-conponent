// 获取每月天数
export const daysOfMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};
// 当前月第一天星期几
export const firstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};
// 获取渲染的天数，以及具体的位置
export const renderDays = (date: Date, onChange: Function) => {
  const days = [];
  const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
  const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());
  console.log(daysCount, firstDay, "123");

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="empty"></div>);
  }
  for (let i = 1; i <= daysCount; i++) {
    const clickHandler = onChange?.bind(
      null,
      new Date(date.getFullYear(), date.getMonth(), i)
    );
    if (i === date.getDate()) {
      days.push(
        <div key={i} className="day selected" onClick={clickHandler}>
          {i}
        </div>
      );
    } else {
      days.push(
        <div key={i} className="day" onClick={clickHandler}>
          {i}
        </div>
      );
    }
  }
  return days;
};
