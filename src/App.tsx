import { HashRouter, Routes, Route } from "react-router-dom";
import Test from "./views/test";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
