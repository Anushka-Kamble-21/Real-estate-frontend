import { useState } from "react";

export default function AddProperty() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    type: "",
    budget: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    images: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, images: [...e.target.files] });
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">
          Add New Property
        </h1>
        <p className="text-gray-600 text-sm mt-2">
          Enter property details to create a new listing.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl">

        <form className="space-y-10">

          {/* Section 1 - Basic Details */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Basic Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Property Title</label>
                <input
                  name="title"
                  type="text"
                  placeholder="e.g. Modern 3BHK Apartment"
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Location</label>
                <input
                  name="location"
                  type="text"
                  placeholder="e.g. Mumbai, Maharashtra"
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>
          </div>

          {/* Section 2 - Category & Pricing */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Category & Pricing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Property Type</label>
                <select
                  name="type"
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Plot">Plot / Land</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Budget Range</label>
                <select
                  name="budget"
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Range</option>
                  <option value="Below-50L">Below ₹50L</option>
                  <option value="50L-1Cr">₹50L - ₹1Cr</option>
                  <option value="1Cr-2Cr">₹1Cr - ₹2Cr</option>
                  <option value="2Cr+">₹2Cr+</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Listing Price</label>
                <input
                  name="price"
                  type="number"
                  placeholder="₹ Price"
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>
          </div>

          {/* Section 3 - Property Specifications */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Property Specifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Bedrooms</label>
                <input
                  name="bedrooms"
                  type="number"
                  placeholder="e.g. 3"
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Bathrooms</label>
                <input
                  name="bathrooms"
                  type="number"
                  placeholder="e.g. 2"
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Area</label>
                <input
                  name="area"
                  type="text"
                  placeholder="e.g. 1800 sq.ft"
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>
          </div>

          {/* Section 4 - Media Upload */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Upload Property Images
            </h2>

            <input
              type="file"
              multiple
              onChange={handleImageUpload}
              className="border p-4 bg-gray-50 rounded-lg cursor-pointer"
            />

            {/* Preview */}
            {formData.images.length > 0 && (
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-4">
                {Array.from(formData.images).map((img, i) => (
                  <div
                    key={i}
                    className="h-24 w-full bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-600"
                  >
                    {img.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Save Property
          </button>

        </form>
      </div>
    </div>
  );
}
