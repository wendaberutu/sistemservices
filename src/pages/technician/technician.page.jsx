import Layout from "../../components/layout";

export default function TechnicianDashboard() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Dashboard Teknisi</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-700 rounded">Servis Masuk</div>
        <div className="p-4 bg-yellow-600 rounded">Proses Pengerjaan</div>
        <div className="p-4 bg-green-700 rounded">Servis Bisa Diambil</div>
      </div>
    </Layout>
  );
}
