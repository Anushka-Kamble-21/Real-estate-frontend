import { Link } from "react-router-dom";

export default function PropertyCard({ id, title, price, location, image, type, status }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition border border-gray-100">

      {/* Image */}
      <Link to={`/property/${id}`}>
        <img src={image} className="h-48 w-full object-cover" />
      </Link>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-1 text-sm">{location}</p>

        {/* Type + Status Badges */}
        <div className="flex gap-2 mt-3">
          {type && (
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
              {type}
            </span>
          )}

          {status && (
            <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
              {status}
            </span>
          )}
        </div>

        <p className="text-blue-700 font-bold mt-4">₹ {price}</p>

        <Link to={`/property/${id}`}>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
