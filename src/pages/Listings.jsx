import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../assets/data/properties";

export default function Listings() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  const filtered = properties.filter((item) => {
    return (
      (search === "" || item.location.toLowerCase().includes(search.toLowerCase())) &&
      (type === "" || item.type === type) &&
      (budget === "" || item.budget === budget)
    );
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center">Explore Properties</h1>
      <p className="text-gray-600 text-center mt-2">
        Find verified real estate listings in top locations.
      </p>

      {/* FILTER BAR (Updated Styling) */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">

        {/* Search Location */}
        <input
          type="text"
          placeholder="Search Location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full sm:w-56 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        {/* Type Filter */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full sm:w-56 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Commercial">Commercial</option>
          <option value="Land/Plot">Land/Plot</option>
        </select>

        {/* Budget Filter */}
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full sm:w-56 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">All Budgets</option>
          <option value="Below-50L">Below ₹50L</option>
          <option value="50L-1Cr">₹50L - ₹1Cr</option>
          <option value="1Cr+">₹1Cr+</option>
        </select>

      </div>


      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <PropertyCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price.toLocaleString("en-IN")}
              location={item.location}
              image={item.images[0]}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 text-xl col-span-full mt-20">
            No matching properties found.
          </p>
        )}
      </div>
    </section>
  );
}
