import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { useState } from "react";

const AdminPage = () => {
  const [serviceOrders] = useState([
    { id: 1, name: "Service A", status: "Pending", date: "2024-02-01" }
  ]);

  const [stocks] = useState([
    { name: "LCD Laptop 14 Inch", category: "Elektronik", stock: "5 unit", status: "Menipis" },
    { name: "Baterai ASUS ROG", category: "Elektronik", stock: "3 unit", status: "Menipis" },
    { name: "Carbon Brush Makita", category: "Suku Cadang", stock: "20 unit", status: "Aman" },
    { name: "Kabel Power Universal", category: "Aksesori", stock: "50 unit", status: "Aman" }
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto">
            {/* Statistics Cards */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Servis Masuk</p>
                    <p className="text-3xl font-bold">0</p>
                  </div>
                  <span className="text-4xl">👥</span>
                </div>
              </div>
              <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Proses Pengerjaan</p>
                    <p className="text-3xl font-bold">11</p>
                  </div>
                  <span className="text-4xl">⚙️</span>
                </div>
              </div>
              <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Servis Bisa Diambil</p>
                    <p className="text-3xl font-bold">0</p>
                  </div>
                  <span className="text-4xl">📁</span>
                </div>
              </div>
              <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Servis Diambil Hari ini</p>
                    <p className="text-3xl font-bold text-base">-</p>
                  </div>
                  <span className="text-4xl">📝</span>
                </div>
              </div>
            </div>

            {/* Daftar Layanan Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Daftar Layanan</h3>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
                  <span>➕</span> Tambah Layanan
                </button>
              </div>
              {serviceOrders.length > 0 ? (
                <div className="space-y-3">
                  {serviceOrders.map((order, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-gray-50 p-4 rounded border border-gray-200">
                      <div>
                        <p className="font-semibold">{order.name}</p>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Hapus</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Belum ada layanan</p>
              )}
            </div>

            {/* Stok Barang Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Stok Barang</h3>
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition flex items-center gap-2">
                  <span>➕</span> Tambah Barang
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b-2">
                      <th className="text-left p-4 font-semibold">Nama Barang</th>
                      <th className="text-left p-4 font-semibold">Kategori</th>
                      <th className="text-left p-4 font-semibold">Stok</th>
                      <th className="text-left p-4 font-semibold">Status</th>
                      <th className="text-left p-4 font-semibold">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stocks.map((stock, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="p-4">{stock.name}</td>
                        <td className="p-4">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{stock.category}</span>
                        </td>
                        <td className="p-4">{stock.stock}</td>
                        <td className="p-4">
                          <span className={`flex items-center gap-1 ${stock.status === "Menipis" ? "text-orange-500" : "text-green-500"}`}>
                            {stock.status === "Menipis" ? "⚠️" : "✅"} {stock.status}
                          </span>
                        </td>
                        <td className="p-4 flex gap-2">
                          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">Edit</button>
                          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">Hapus</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
