import { Link } from "react-router-dom";
import { properties } from "../../assets/data/properties";
import {
  FaSearch,
  FaFilter,
  FaEdit,
  FaTrash,
  FaMapMarkerAlt,
  FaHome,
} from "react-icons/fa";

export default function Properties() {
  return (
    <div className="space-y-10">

      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            Manage Properties
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Review, edit and manage all active property listings.
          </p>
        </div>

        <Link
          to="/admin/properties/add"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-full shadow-md hover:from-blue-700 hover:to-blue-800 transition text-sm font-semibold"
        >
          <span className="text-lg">+</span> Add Property
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-md rounded-xl p-5 space-y-4">

        {/* Top row: search */}
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2 flex-1 min-w-[220px] px-3 py-2 border rounded-lg bg-gray-50">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search by title, location..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
            <FaFilter />
            <span>Filters</span>
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-3">

          <select className="px-3 py-2 border rounded-full bg-gray-50 text-sm">
            <option value="">Status</option>
            <option value="available">Available</option>
            <option value="sold">Sold</option>
          </select>

          <select className="px-3 py-2 border rounded-full bg-gray-50 text-sm">
            <option value="">Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Commercial">Commercial</option>
          </select>

          <select className="px-3 py-2 border rounded-full bg-gray-50 text-sm">
            <option value="">Location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Goa">Goa</option>
            <option value="Bengaluru">Bengaluru</option>
          </select>

          <select className="px-3 py-2 border rounded-full bg-gray-50 text-sm">
            <option value="">Budget</option>
            <option value="Below-50L">Below ₹50L</option>
            <option value="50L-1Cr">₹50L - ₹1Cr</option>
            <option value="1Cr+">₹1Cr+</option>
          </select>

          <select className="px-3 py-2 border rounded-full bg-gray-50 text-sm">
            <option value="">Sort by</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>

        </div>
      </div>

      {/* ---------- MOBILE VIEW: CARDS ---------- */}
      <div className="space-y-4 md:hidden">
        {properties.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
          >
            <img
              src={p.images[0]}
              alt={p.title}
              className="h-44 w-full object-cover"
            />

            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-semibold text-gray-900">
                  {p.title}
                </h2>
                <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">
                  <FaHome size={10} />
                  {p.type}
                </span>
              </div>

              <p className="flex items-center gap-2 text-gray-600 text-sm">
                <FaMapMarkerAlt className="text-red-500" />
                {p.location}
              </p>

              <p className="text-blue-700 font-bold text-lg">
                ₹ {p.price.toLocaleString("en-IN")}
              </p>

              <div className="flex justify-between items-center pt-2">
                <Link
                  to={`/property/${p.id}`}
                  className="text-sm text-gray-700 hover:text-blue-700 font-medium underline underline-offset-4"
                >
                  View on Website
                </Link>

                <div className="flex gap-2">
                  <button className="inline-flex items-center gap-1 bg-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm hover:bg-yellow-600 transition">
                    <FaEdit size={12} />
                    Edit
                  </button>
                  <button className="inline-flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm hover:bg-red-700 transition">
                    <FaTrash size={12} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- DESKTOP VIEW: TABLE ---------- */}
      <div className="hidden md:block bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 border-b">
            <tr className="text-gray-700 text-xs font-semibold uppercase tracking-wide">
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Location</th>
              <th className="p-4">Price</th>
              <th className="p-4">Type</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {properties.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4">
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="h-16 w-24 rounded-md object-cover shadow-sm"
                  />
                </td>

                <td className="p-4">
                  <div className="font-medium text-gray-900">{p.title}</div>
                  <Link
                    to={`/property/${p.id}`}
                    className="text-xs text-blue-600 hover:underline"
                  >
                    View on website
                  </Link>
                </td>

                <td className="p-4 text-gray-600 text-sm flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  {p.location}
                </td>

                <td className="p-4 font-semibold text-blue-700">
                  ₹ {p.price.toLocaleString("en-IN")}
                </td>

                <td className="p-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                    <FaHome size={10} />
                    {p.type}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-end gap-2">
                    <button className="inline-flex items-center gap-1 bg-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm hover:bg-yellow-600 transition">
                      <FaEdit size={12} />
                      Edit
                    </button>
                    <button className="inline-flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm hover:bg-red-700 transition">
                      <FaTrash size={12} />
                      Delete
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
