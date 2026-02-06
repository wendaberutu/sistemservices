
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { useState } from "react";

const VerifyPage = () => {
  const [reviewItems] = useState([
    { id: 1, service: "Service A", technician: "John Doe", date: "2024-02-01", status: "Pending Review" },
    { id: 2, service: "Service B", technician: "Jane Smith", date: "2024-02-02", status: "Pending Review" },
    { id: 3, service: "Service C", technician: "Bob Johnson", date: "2024-02-03", status: "Approved" }
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
                    <p className="text-sm opacity-90">Menunggu Review</p>
                    <p className="text-3xl font-bold">2</p>
                  </div>
                  <span className="text-4xl">📋</span>
                </div>
              </div>
              <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Sedang Direview</p>
                    <p className="text-3xl font-bold">1</p>
                  </div>
                  <span className="text-4xl">👀</span>
                </div>
              </div>
              <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Disetujui</p>
                    <p className="text-3xl font-bold">24</p>
                  </div>
                  <span className="text-4xl">✅</span>
                </div>
              </div>
              <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Ditolak</p>
                    <p className="text-3xl font-bold">3</p>
                  </div>
                  <span className="text-4xl">❌</span>
                </div>
              </div>
            </div>

            {/* Review List */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Daftar Review Servis</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b-2">
                      <th className="text-left p-4 font-semibold">No</th>
                      <th className="text-left p-4 font-semibold">Layanan</th>
                      <th className="text-left p-4 font-semibold">Teknisi</th>
                      <th className="text-left p-4 font-semibold">Tanggal</th>
                      <th className="text-left p-4 font-semibold">Status</th>
                      <th className="text-left p-4 font-semibold">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviewItems.map((item, idx) => (
                      <tr key={item.id} className="border-b hover:bg-gray-50">
                        <td className="p-4">{idx + 1}</td>
                        <td className="p-4 font-semibold">{item.service}</td>
                        <td className="p-4">{item.technician}</td>
                        <td className="p-4">{item.date}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            item.status === "Approved" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="p-4 flex gap-2">
                          {item.status === "Pending Review" && (
                            <>
                              <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm">
                                Setujui
                              </button>
                              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
                                Tolak
                              </button>
                            </>
                          )}
                          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                            Detail
                          </button>
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

export default VerifyPage;
