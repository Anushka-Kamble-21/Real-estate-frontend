import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaPlus, FaList, FaBars, FaEnvelope } from "react-icons/fa";

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`bg-white shadow-xl h-screen sticky top-0 transition-all duration-300
      ${collapsed ? "w-20" : "w-64"}`}>

      {/* Toggle Button */}
      <button
        className="p-4 text-gray-600 hover:text-black"
        onClick={() => setCollapsed(!collapsed)}
      >
        <FaBars size={22} />
      </button>

      <nav className="mt-6 flex flex-col gap-2">
        <Link
          to="/admin/dashboard"
          className="flex items-center gap-4 px-5 py-3 hover:bg-blue-50 transition"
        >
          <FaHome className="text-blue-600" />
          {!collapsed && <span>Dashboard</span>}
        </Link>

        <Link
          to="/admin/properties"
          className="flex items-center gap-4 px-5 py-3 hover:bg-blue-50 transition"
        >
          <FaList className="text-blue-600" />
          {!collapsed && <span>All Properties</span>}
        </Link>

        <Link
          to="/admin/properties/add"
          className="flex items-center gap-4 px-5 py-3 hover:bg-blue-50 transition"
        >
          <FaPlus className="text-blue-600" />
          {!collapsed && <span>Add Property</span>}
        </Link>

        <Link
          to="/admin/inquiries"
          className="flex items-center gap-4 px-5 py-3 hover:bg-blue-50 transition"
        >
          <FaEnvelope className="text-blue-600" />
          {!collapsed && <span>Inquiries</span>}
        </Link>
      </nav>
    </aside>
  );
}
