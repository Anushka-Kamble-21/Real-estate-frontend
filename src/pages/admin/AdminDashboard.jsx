import {
  FaSearch,
  FaPlus,
  FaClipboardList,
  FaBuilding,
  FaUsers,
  FaChartLine,
  FaBell,
  FaMapMarkerAlt,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { properties } from "../../assets/data/properties"; // demo data
import { inquiries } from "../../assets/data/inquiries"; // create mock for now

export default function AdminDashboard() {

  const recentProperties = properties.slice(0, 3);
  const recentInquiries = (inquiries || []).slice(0, 4);

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Monitor your listings, leads & performance.
          </p>
        </div>

        <Link
          to="/admin/properties/add"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-full shadow-md hover:from-blue-700 hover:to-blue-800 transition text-sm font-semibold"
        >
          <FaPlus /> Add Property
        </Link>
      </div>

      {/* 🔍 SEARCH BAR */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl shadow-md border border-gray-100">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search properties, inquiries..."
          className="w-full outline-none bg-transparent text-sm"
        />
      </div>

      {/* 📊 STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { icon: <FaHome />, label: "Total Properties", value: 24, color: "blue" },
          { icon: <FaUsers />, label: "New Leads", value: 12, color: "green" },
          { icon: <FaChartLine />, label: "Monthly Visits", value: "3,540", color: "purple" },
          { icon: <FaBell />, label: "Pending Inquiries", value: 5, color: "red" },
        ].map((stat, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl p-6 flex items-center gap-5 border border-gray-100">
            <span className={`p-3 rounded-full text-xl bg-${stat.color}-100 text-${stat.color}-700`}>
              {stat.icon}
            </span>
            <div>
              <p className="text-gray-600">{stat.label}</p>
              <h2 className="text-3xl font-bold text-gray-900">{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* 🏠 RECENT PROPERTIES */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Properties</h2>
          <Link
            to="/admin/properties"
            className="text-blue-600 font-medium text-sm hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="space-y-4">
          {recentProperties.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between gap-4 py-3 border-b last:border-none"
            >
              <div className="flex items-center gap-4">
                <img src={p.images[0]} className="h-14 w-20 object-cover rounded-lg shadow" />

                <div>
                  <p className="font-medium text-gray-900">{p.title}</p>
                  <p className="flex items-center gap-1 text-gray-500 text-sm">
                    <FaMapMarkerAlt className="text-red-500" /> {p.location}
                  </p>
                </div>
              </div>

              <p className="text-blue-700 font-semibold">
                ₹ {p.price.toLocaleString("en-IN")}
              </p>

              <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 flex items-center gap-1">
                <FaHome size={10} /> {p.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 📩 RECENT INQUIRIES */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Inquiries</h2>
          <Link
            to="/admin/inquiries"
            className="text-blue-600 font-medium text-sm hover:underline"
          >
            View All
          </Link>
        </div>

        <ul className="divide-y">
          {recentInquiries.map((q, index) => (
            <li key={index} className="flex justify-between items-center py-3 text-gray-700">
              <span>
                ❯ {q.name} — <span className="font-medium">{q.property}</span>
              </span>

              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                Pending
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ⚡ QUICK ACTIONS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ActionCard to="/admin/properties" icon={<FaClipboardList />} text="View Properties" />
        <ActionCard to="/admin/properties/add" icon={<FaPlus />} text="Add New Property" />
        <ActionCard to="/admin/inquiries" icon={<FaUsers />} text="View Inquiries" />
        <ActionCard to="/admin/projects" icon={<FaBuilding />} text="Manage Projects" />
      </div>
    </div>
  );
}

function ActionCard({ to, icon, text }) {
  return (
    <Link
      to={to}
      className="p-5 rounded-xl bg-white border shadow-sm hover:shadow-md transition flex flex-col items-center gap-3 text-gray-700"
    >
      <div className="text-blue-600 text-2xl">{icon}</div>
      <span className="font-medium text-sm">{text}</span>
    </Link>
  );
}
