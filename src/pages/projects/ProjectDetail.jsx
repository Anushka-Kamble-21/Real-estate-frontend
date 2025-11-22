import { useParams } from "react-router-dom";
import { projects } from "../../assets/data/projects";
import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useState } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  const [activeImage, setActiveImage] = useState(project.images[0]);

  return (
    <div className="bg-gray-50 pb-20">

      {/* Page Container */}
      <div className="max-w-6xl mx-auto px-4 lg:px-0">

        {/* Layout: Gallery & Right Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">

          {/* IMAGE GALLERY */}
          <div className="w-full">
            <img
              src={activeImage}
              className="w-full max-h-[450px] object-contain bg-black rounded-xl shadow-lg"
            />

            <div className="flex gap-3 overflow-x-auto mt-3 pb-2">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImage(img)}
                  className={`h-20 w-28 object-cover rounded-lg cursor-pointer border transition ${
                    activeImage === img
                      ? "border-blue-600 shadow-md"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE INFORMATION */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {project.title}
            </h1>

            <p className="text-gray-600 flex items-center gap-2 mt-2">
              <FaMapMarkerAlt className="text-red-500" /> {project.location}
            </p>

            <p className="text-blue-700 font-bold text-3xl mt-4">
              {project.priceRange}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 mt-6">
              <a
                href={`https://wa.me/9112345670?text=Hello,%20I%20am%20interested%20in%20${project.title}`}
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-md"
              >
                <FaWhatsapp size={18} /> WhatsApp
              </a>

              <a
                href="tel:+919999999999"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-md"
              >
                <FaPhone size={16} /> Call
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT HIGHLIGHTS */}
        <div className="bg-white rounded-xl shadow-lg p-10 mt-14">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Project Highlights</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 text-gray-700">

            <div className="flex items-center gap-3">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">📍</div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold">{project.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">🏢</div>
              <div>
                <p className="text-sm text-gray-500">Developer</p>
                <p className="font-semibold">{project.developer}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg">⚒️</div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-semibold">{project.status}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-red-100 text-red-600 p-2 rounded-lg">🏗️</div>
              <div>
                <p className="text-sm text-gray-500">Total Units</p>
                <p className="font-semibold">{project.units}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-green-100 text-green-600 p-2 rounded-lg">📅</div>
              <div>
                <p className="text-sm text-gray-500">Possession</p>
                <p className="font-semibold">{project.possession}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg">📐</div>
              <div>
                <p className="text-sm text-gray-500">Area</p>
                <p className="font-semibold">{project.area}</p>
              </div>
            </div>

          </div>
        </div>

        {/* AMENITIES */}
        <div className="bg-white rounded-xl shadow-lg p-10 mt-12">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Amenities</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {project.amenities.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <span className="text-lg"></span>
                <span className="text-sm font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
