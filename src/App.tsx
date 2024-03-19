import { HashRouter, Routes, Route } from "react-router-dom";
import Calendar from "./views/Calendar/calendar";
import MiniCalendar from "./views/MiniCalendar/miniCalendar";
import MiniCalendar2 from "./views/MiniCalendar/miniCalendar2";
import Test from "./views/test";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/miniCalendar" element={<MiniCalendar />} />
        <Route path="/miniCalendar2" element={<MiniCalendar2 />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
