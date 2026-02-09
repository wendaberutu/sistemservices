import Layout from "../../components/layout";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Servis Masuk",
      subtitle: "Hari ini",
      value: 0,
      bg: "bg-cyan-500",
      icon: "👥",
    },
    {
      title: "Proses Pengerjaan",
      value: 11,
      bg: "bg-yellow-500",
      icon: "⚙️",
    },
    {
      title: "Servis Bisa Diambil",
      value: 0,
      bg: "bg-green-600",
      icon: "🔖",
    },
    {
      title: "Servis Diambil",
      subtitle: "Hari ini",
      value: 0,
      bg: "bg-red-500",
      icon: "↗️",
    },
  ];

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Dashboard Admin</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow
            flex items-center gap-4 p-4"
          >
            {/* ICON */}
            <div
              className={`w-14 h-14 rounded-lg flex items-center justify-center
              text-white text-2xl ${s.bg}`}
            >
              {s.icon}
            </div>

            {/* TEXT */}
            <div className="flex-1">
              <div className="text-sm text-slate-500">
                {s.title}{" "}
                {s.subtitle && (
                  <span className="font-semibold text-slate-700">
                    {s.subtitle}
                  </span>
                )}
              </div>

              <div className="text-2xl font-bold text-slate-800">
                {s.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
