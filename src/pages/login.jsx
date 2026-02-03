import { useState } from "react";

export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950">
      <div className="w-[360px] rounded-2xl bg-slate-900/60 backdrop-blur-xl shadow-2xl px-7 py-8 text-slate-100">
        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center text-lg">
          ⚙️
        </div>

        <h2 className="text-center text-lg font-semibold">
          Sistem Servis Keltronik
        </h2>
        <p className="text-center text-xs text-slate-400 mt-1 mb-6">
          Silahkan login untuk melanjutkan
        </p>

        <div className="space-y-4">
          <div className="flex items-center bg-slate-950/60 rounded-xl px-3 py-2">
            <span className="mr-2 text-slate-400">👤</span>
            <input
              className="bg-transparent outline-none text-sm w-full placeholder-slate-500"
              placeholder="Masukkan username"
            />
          </div>

          <div className="flex items-center bg-slate-950/60 rounded-xl px-3 py-2">
            <span className="mr-2 text-slate-400">🔒</span>
            <input
              type={show ? "text" : "password"}
              className="bg-transparent outline-none text-sm w-full placeholder-slate-500"
              placeholder="Masukkan password"
            />
            <button
              onClick={() => setShow(!show)}
              className="text-slate-400 hover:text-slate-200 text-sm"
            >
              👁
            </button>
          </div>
        </div>

        <button className="w-full mt-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 font-semibold hover:opacity-90">
          Login
        </button>

        <p className="text-center text-xs text-slate-400 my-4">
          Pelanggan
        </p>

        <button className="w-full py-2 rounded-xl border border-slate-600 hover:bg-slate-800/40">
          📷 Scan QR / Cek Status
        </button>
      </div>
    </div>
  );
}
