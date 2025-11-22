// src/pages/admin/Inquiries.jsx
import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaFilter } from "react-icons/fa";

const mockInquiries = [
  {
    id: 1,
    name: "Rohan Sharma",
    email: "rohan@example.com",
    phone: "+91 98765 43210",
    city: "Mumbai",
    propertyType: "Apartment",
    budgetRange: "1Cr-2Cr",
    message: "Looking for a 3BHK near Powai with parking.",
    status: "New",
    channel: "Form",
    createdAt: "2025-11-20 10:15 AM",
  },
  {
    id: 2,
    name: "Priya Desai",
    email: "priya@example.com",
    phone: "+91 99220 11223",
    city: "Pune",
    propertyType: "Villa",
    budgetRange: "2Cr+",
    message: "Villa in Baner / Aundh with garden preferred.",
    status: "In Progress",
    channel: "WhatsApp",
    createdAt: "2025-11-20 03:40 PM",
  },
  {
    id: 3,
    name: "Amit Verma",
    email: "amit@example.com",
    phone: "+91 98111 22334",
    city: "Goa",
    propertyType: "Commercial",
    budgetRange: "50L-1Cr",
    message: "Small commercial space for café near beach.",
    status: "Closed",
    channel: "Call",
    createdAt: "2025-11-21 09:05 AM",
  },
];

export default function Inquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setInquiries(mockInquiries);
  }, []);

  const filtered = inquiries.filter((inq) => {
    const matchesStatus = statusFilter ? inq.status === statusFilter : true;
    const matchesType = typeFilter ? inq.propertyType === typeFilter : true;
    const matchesSearch =
      search.trim() === ""
        ? true
        : (inq.name + inq.city + inq.propertyType + inq.message)
            .toLowerCase()
            .includes(search.toLowerCase());

    return matchesStatus && matchesType && matchesSearch;
  });

  function handleStatusChange(id, newStatus) {
    setInquiries((prev) =>
      prev.map((inq) =>
        inq.id === id ? { ...inq, status: newStatus } : inq
      )
    );
  }

  function renderChannelIcon(channel) {
    if (channel === "WhatsApp") return <FaWhatsapp className="text-green-600" />;
    if (channel === "Call") return <FaPhoneAlt className="text-blue-600" />;
    return <FaEnvelope className="text-gray-600" />;
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Inquiries</h1>
          <p className="text-gray-500 text-sm">
            Manage leads from website, WhatsApp & calls.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-4 flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2 text-gray-600 font-medium">
          <FaFilter />
          <span>Filters</span>
        </div>

        <input
          type="text"
          placeholder="Search by name, city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-3 py-2 flex-1 min-w-[200px] focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-lg px-3 py-2 bg-white min-w-[150px]"
        >
          <option value="">All Status</option>
          <option value="New">New</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border rounded-lg px-3 py-2 bg-white min-w-[150px]"
        >
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Commercial">Commercial</option>
          <option value="Plot">Plot / Land</option>
        </select>
      </div>

      {/* -------- MOBILE CARDS -------- */}
      <div className="md:hidden space-y-5">
        {filtered.map((inq) => (
          <div
            key={inq.id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-100"
          >
            <div className="flex justify-between">
              <h2 className="font-semibold text-gray-900">{inq.name}</h2>
              <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                {inq.propertyType}
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-1">{inq.city}</p>
            <p className="text-blue-700 font-medium mt-2">{inq.budgetRange}</p>

            <p className="text-xs text-gray-600 mt-3">{inq.message}</p>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-2 text-xs p-2 bg-gray-100 rounded-full">
                {renderChannelIcon(inq.channel)}
                {inq.channel}
              </div>

              <select
                value={inq.status}
                onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                className="border px-2 py-1 text-xs rounded-lg"
              >
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* -------- DESKTOP TABLE -------- */}
      <div className="hidden md:block bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">Lead</th>
              <th className="p-3">Requirement</th>
              <th className="p-3">Budget</th>
              <th className="p-3">Channel</th>
              <th className="p-3">Status</th>
              <th className="p-3">Created</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((inq) => (
              <tr key={inq.id} className="border-t hover:bg-gray-50">
                <td className="p-3 align-top">
                  <div className="font-semibold text-gray-900">
                    {inq.name}
                  </div>
                  <div className="text-gray-600 text-xs">{inq.city}</div>
                  <div className="text-gray-500 text-xs mt-1">
                    {inq.phone} · {inq.email}
                  </div>
                </td>

                <td className="p-3 align-top">
                  <div className="font-medium text-gray-800">
                    {inq.propertyType}
                  </div>
                  <div className="text-gray-600 text-xs mt-1">
                    {inq.message}
                  </div>
                </td>

                <td className="p-3 align-top text-blue-700 font-semibold">
                  {inq.budgetRange}
                </td>

                <td className="p-3 align-top">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs">
                    {renderChannelIcon(inq.channel)}
                    <span>{inq.channel}</span>
                  </div>
                </td>

                <td className="p-3 align-top">
                  <select
                    value={inq.status}
                    onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                    className="border rounded-lg px-2 py-1 text-xs bg-white"
                  >
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                  </select>
                </td>

                <td className="p-3 align-top text-gray-500 text-xs">
                  {inq.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
