
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { useState } from "react";

const TechnicianPage = () => {
  const [jobs] = useState([
    { id: 1, name: "Service A", status: "In Progress", date: "2024-02-01" },
    { id: 2, name: "Service B", status: "Pending", date: "2024-02-02" }
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
                    <p className="text-sm opacity-90">Pekerjaan Ditugaskan</p>
                    <p className="text-3xl font-bold">2</p>
                  </div>
                  <span className="text-4xl">📋</span>
                </div>
              </div>
              <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Sedang Dikerjakan</p>
                    <p className="text-3xl font-bold">1</p>
                  </div>
                  <span className="text-4xl">⚙️</span>
                </div>
              </div>
              <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Selesai Bulan Ini</p>
                    <p className="text-3xl font-bold">8</p>
                  </div>
                  <span className="text-4xl">✅</span>
                </div>
              </div>
              <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Rating Performa</p>
                    <p className="text-3xl font-bold">4.8</p>
                  </div>
                  <span className="text-4xl">⭐</span>
                </div>
              </div>
            </div>

            {/* Pekerjaan Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Pekerjaan Saya</h3>
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div key={job.id} className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-gray-50 p-4 rounded border border-blue-200">
                    <div>
                      <p className="font-semibold text-lg">{job.name}</p>
                      <p className="text-sm text-gray-600">{job.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${job.status === "In Progress" ? "bg-orange-100 text-orange-800" : "bg-yellow-100 text-yellow-800"}`}>
                        {job.status}
                      </span>
                      <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianPage;
