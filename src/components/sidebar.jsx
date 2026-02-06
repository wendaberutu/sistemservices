
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800 text-white w-64 p-6 min-h-screen shadow-lg">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span className="bg-blue-500 p-2 rounded">📋</span>
        Menu
      </h2>
      <nav className="space-y-3">
        <Link
          to="#"
          className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          <span className="text-xl">📋</span>
          <span>Daftar Layanan</span>
        </Link>

        <Link
          to="#"
          className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          <span className="text-xl">✓</span>
          <span>Tugas</span>
        </Link>

        <Link
          to="#"
          className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          <span className="text-xl">📦</span>
          <span>Stok Barang</span>
        </Link>
      </nav>

      <hr className="my-6 border-blue-700" />

      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-red-600 transition font-semibold text-left"
      >
        <span className="text-xl">🚪</span>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
