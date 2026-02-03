import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./pages/login.jsx";
import ScanStatus from "./pages/scanStatus.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/scan-status" element={<ScanStatus/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
