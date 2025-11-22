export default function About() {
  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <div className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <h1 className="text-4xl font-bold">About RealEstateHub</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg opacity-90">
          Connecting people with premium properties, trusted developers, and life-changing investments.
        </p>
      </div>

      {/* ABOUT COMPANY */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Who We Are</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            RealEstateHub is a modern real estate platform built to simplify property discovery,
            investment decisions, and communication between buyers & developers.
            We curate premium listings, verified projects, and honest insights to help
            clients find homes and investments that truly match their goals.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-10">
          <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
          <p className="text-gray-600 mt-3">
            To transform real estate buying into a transparent, guided, and seamless experience
            through technology, expert support, and verified listings.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">Our Vision</h3>
          <p className="text-gray-600 mt-3">
            To become India’s most trusted digital real estate platform, connecting buyers,
            agents, and developers through innovation and integrity.
          </p>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white py-16 shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-10 px-6">

          <div>
            <p className="text-4xl font-bold text-blue-600">300+</p>
            <p className="text-gray-600">Verified Listings</p>
          </div>

          <div>
            <p className="text-4xl font-bold text-blue-600">20+</p>
            <p className="text-gray-600">Cities Covered</p>
          </div>

          <div>
            <p className="text-4xl font-bold text-blue-600">1500+</p>
            <p className="text-gray-600">Happy Clients</p>
          </div>

          <div>
            <p className="text-4xl font-bold text-blue-600">50+</p>
            <p className="text-gray-600">Trusted Developers</p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold text-center text-gray-900">Why People Trust Us</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-800">Verified Listings</h3>
            <p className="text-gray-600 mt-2">
              Every listing is checked for legitimacy, pricing, and location accuracy.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-800">Personal Support</h3>
            <p className="text-gray-600 mt-2">
              Expert assistance from inquiry to site visits and final decisions.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-800">Smart Search Experience</h3>
            <p className="text-gray-600 mt-2">
              Find properties by budget, location, lifestyle, or investment goals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <h2 className="text-3xl font-semibold">Ready to find your next home?</h2>
        <p className="mt-2 opacity-90">Let our experts guide you with personalized recommendations.</p>

        <a
          href="/inquiry"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg text-white font-medium text-lg"
        >
          Contact Us
        </a>
      </div>

    </div>
  );
}
