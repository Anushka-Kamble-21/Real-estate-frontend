import { useState } from "react";
import { projects } from "../assets/data/projects";
import { Link } from "react-router-dom";

export default function Projects() {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    status: "",
  });

  const filteredProjects = projects.filter((p) => {
    return (
      (filters.location ? p.location.includes(filters.location) : true) &&
      (filters.type ? p.type === filters.type : true) &&
      (filters.status ? p.status === filters.status : true)
    );
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center">Our Projects</h1>
      <p className="text-gray-600 text-center mt-2">
        Browse premium residential & commercial projects.
      </p>

      {/* FILTERS */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <select
          className="border px-4 py-2 rounded-lg"
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        >
          <option value="">All Locations</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Goa">Goa</option>
        </select>

        <select
          className="border px-4 py-2 rounded-lg"
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">All Types</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </select>

        <select
          className="border px-4 py-2 rounded-lg"
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="">All Status</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {filteredProjects.map((p) => (
          <div key={p.id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
            
            <img src={p.image} className="h-48 w-full object-cover" />

            <div className="p-5">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{p.developer}</p>

              <p className="text-gray-600 mt-2">{p.location}</p>

              <div className="flex gap-2 mt-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                  {p.type}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
                  {p.status}
                </span>
              </div>

              <p className="text-blue-700 font-bold mt-4">{p.priceRange}</p>

              {/* View Details */}
              <Link to={`/projects/${p.id}`}>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
