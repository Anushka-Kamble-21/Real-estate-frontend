import { FaWhatsapp } from "react-icons/fa";
import { FaHome, FaHandshake, FaMapMarkedAlt, FaHeadset } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/hero.jpg')]">

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-black/25"></div>

        {/* Content */}
        <div className="relative text-center px-4 max-w-4xl">

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
            Discover Premium Real Estate Opportunities
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-200 font-light drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
            Buy, Sell & Explore Residential and Commercial Properties at the Best Prices.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

            <a 
              href="/listings"
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              Explore Properties
            </a>

            <a 
              href="https://wa.me/9112345670" 
              target="_blank" 
              className="px-8 py-3 rounded-full bg-green-500 text-white font-semibold text-lg shadow-lg hover:bg-green-600 transition flex items-center gap-2 transform hover:scale-105"
            >
              <FaWhatsapp size={24} />
              Contact Us
            </a>

          </div>
        </div>
      </section>


      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-center text-4xl font-bold text-gray-800">
          Why Choose Us?
        </h2>

        <p className="text-center text-gray-600 mt-2 text-lg">
          Trusted real estate services backed by experience & expertise.
        </p>

        <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">

          {/* Feature 1 */}
          <div className="text-center p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
            <FaHome className="text-blue-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Premium Properties</h3>
            <p className="text-gray-600">
              Curated listings of verified residential and commercial properties.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
            <FaHandshake className="text-blue-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Verified Deals</h3>
            <p className="text-gray-600">
              Transparency and trust with secure and legal property transactions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
            <FaMapMarkedAlt className="text-blue-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
            <p className="text-gray-600">
              Properties located in top real estate hubs with great ROI potential.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
            <FaHeadset className="text-blue-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Dedicated customer support throughout your property journey.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
