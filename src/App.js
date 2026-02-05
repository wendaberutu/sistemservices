import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
