// src/pages/Inquiry.jsx
import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Inquiry() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    propertyType: "",
    budgetRange: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      // 🔗 When backend is ready, update this URL
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        propertyType: "",
        budgetRange: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Reach out for property inquiries, pricing, site visits, or investment guidance.
            Our team will connect with you at the earliest.
          </p>
        </div>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Contact Channels */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <FaWhatsapp className="text-green-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                <p className="text-gray-600 text-sm">
                  Chat directly with our support team.
                </p>
                <a
                  href="https://wa.me/9112345670"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-green-600 font-medium hover:underline"
                >
                  Start WhatsApp Chat →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <FaPhoneAlt className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-600 text-sm">
                  Speak with a real estate advisor for guided assistance.
                </p>
                <a
                  href="tel:+919999999999"
                  className="text-sm text-blue-600 font-medium hover:underline"
                >
                  Call Now →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-900 flex items-center justify-center">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
                <p className="text-gray-600 text-sm">
                  Share your detailed requirements and we’ll curate options for you.
                </p>
                <a
                  href="mailto:info@realestatehub.com"
                  className="text-sm text-gray-900 font-medium hover:underline"
                >
                  info@realestatehub.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4">Send an Inquiry</h2>
            <p className="text-gray-600 text-sm mb-6">
              Fill in your details and our team will contact you with the best matching properties.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="border rounded-lg px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  className="border rounded-lg px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="border rounded-lg px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="border rounded-lg px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="propertyType"
                  value={form.propertyType}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-2.5 w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Plot">Plot / Land</option>
                </select>

                <select
                  name="budgetRange"
                  value={form.budgetRange}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-2.5 w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Budget Range</option>
                  <option value="Below-50L">Below ₹50L</option>
                  <option value="50L-1Cr">₹50L - ₹1Cr</option>
                  <option value="1Cr-2Cr">₹1Cr - ₹2Cr</option>
                  <option value="2Cr+">₹2Cr+</option>
                </select>
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your requirement (location preference, BHK, purpose, etc.)"
                className="border rounded-lg px-4 py-2.5 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {status === "success" && (
                <p className="text-sm text-green-600">
                  ✅ Inquiry submitted successfully. Our team will contact you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600">
                  ⚠ Something went wrong. Please try again after some time.
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
