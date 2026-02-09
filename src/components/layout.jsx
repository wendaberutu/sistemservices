import { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-800 text-white">
      {/* SIDEBAR */}
      <Sidebar isOpen={sidebarOpen} />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        <Navbar onToggleSidebar={() => setSidebarOpen(v => !v)} />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
