import { useParams } from "react-router-dom";
import { properties } from "../assets/data/properties";
import { FaWhatsapp, FaMapMarkerAlt, FaBed, FaShower, FaRulerCombined, FaPhone } from "react-icons/fa";
import { useState } from "react";

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));

  const [activeImage, setActiveImage] = useState(property.images[0]);

  return (
    <div className="bg-gray-50 pb-20">
      
      {/* Page Container */}
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        
        {/* Layout: Left Gallery + Right Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">

          {/* Image Gallery */}
          <div>
            <img
              src={activeImage}
              className="w-full max-h-[450px] object-contain bg-black rounded-xl shadow-md"
            />

            <div className="flex gap-3 overflow-x-auto mt-3 pb-2">
              {property.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImage(img)}
                  className={`h-20 w-28 object-cover rounded-lg cursor-pointer border transition ${
                    activeImage === img
                      ? "border-blue-600 shadow-sm"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Info */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {property.title}
            </h1>

            <p className="text-gray-600 flex items-center gap-2 mt-1">
              <FaMapMarkerAlt className="text-red-500" /> {property.location}
            </p>

            <p className="text-blue-700 font-bold text-3xl mt-3">
              ₹ {property.price.toLocaleString("en-IN")}
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href={`https://wa.me/9112345670?text=Hello,%20I%20am%20interested%20in%20${property.title}`}
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm"
              >
                <FaWhatsapp size={18} /> WhatsApp
              </a>

              <a
                href="tel:+919999999999"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm"
              >
                <FaPhone size={16} /> Call
              </a>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
          <h2 className="text-xl font-semibold mb-4">Property Highlights</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-gray-700">
            <p className="flex items-center gap-2"><FaBed className="text-blue-500" /> {property.details.bedrooms} Bedrooms</p>
            <p className="flex items-center gap-2"><FaShower className="text-blue-500" /> {property.details.bathrooms} Bathrooms</p>
            <p className="flex items-center gap-2"><FaRulerCombined className="text-blue-500" /> {property.details.area}</p>
            <p>Parking: {property.details.parking}</p>
            <p>Furnishing: {property.details.furnishing}</p>
            <p>Status: {property.details.status}</p>
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-10">
          <h2 className="text-xl font-semibold mb-4">Amenities</h2>
          <div className="flex flex-wrap gap-3">
            {property.amenities.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm shadow-sm border"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
