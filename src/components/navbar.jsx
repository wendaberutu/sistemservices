
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center">
        <div className="bg-blue-500 p-2 rounded-full mr-3">
          <span className="text-white text-lg">⚙️</span>
        </div>
        <h1 className="text-xl font-bold">Sistem Servis Waleta</h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-full">
          <span className="text-sm">👤</span>
          <p className="text-sm">{user?.name || "User"}</p>
        </div>
        <button
          title="Settings"
          className="hover:bg-blue-700 p-2 rounded-full transition"
        >
          ⚙️
        </button>
        <div className="relative">
          <button className="hover:bg-blue-700 p-2 rounded-full transition relative">
            🔔
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </button>
        </div>
        <button
          onClick={handleLogout}
          title="Logout"
          className="hover:bg-red-600 p-2 rounded-full transition"
        >
          🚪
        </button>
      </div>
    </div>
  );
};

export default Navbar;
