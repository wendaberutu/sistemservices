
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AdminPage from "./pages/admin/admin.page"; 
import TechnicianPage from "./pages/technician.page"
import VerifyPage from "./pages/veryfy.page";
import Login from "./pages/login";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/technician" 
            element={
              <ProtectedRoute>
                <TechnicianPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/verify" 
            element={
              <ProtectedRoute>
                <VerifyPage />
              </ProtectedRoute>
            } 
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
