import { createContext } from "react";

interface CalendarContextType {
  date: string;
}
const CalendarContext = createContext<CalendarContextType>({
  date: "2024/3/15",
});
export { CalendarContext };
