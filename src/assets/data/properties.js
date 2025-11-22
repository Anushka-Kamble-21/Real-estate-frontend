import villa1 from "../villa1.jpg";
import villa1_1 from "../villa1_1.jpg";
import villa1_2 from "../villa1_2.jpg";

import villa2 from "../villa2.jpg";
import villa2_1 from "../villa2_1.jpg";
import villa2_2 from "../villa2_2.jpg";

import apartment1 from "../apartment1.jpg";
import apartment1_1 from "../apartment1_1.jpg";
import apartment1_2 from "../apartment1_2.jpg";

import commercial1 from "../commercial1.jpg";
import commercial1_1 from "../commercial1_1.jpg";
import commercial1_2 from "../commercial1_2.jpg";

export const properties = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment",
    price: 9500000,
    type: "Apartment",
    budget: "50L-1Cr",
    location: "Mumbai, Maharashtra",
    images: [apartment1, apartment1_1, apartment1_2],

    details: {
      bedrooms: 3,
      bathrooms: 2,
      area: "1450 sq.ft",
      furnishing: "Semi-Furnished",
      parking: "Yes",
      status: "Ready to Move",
      facing: "East"
    },

    amenities: [
      "Swimming Pool",
      "Gym",
      "Club House",
      "CCTV Security",
      "Power Backup",
      "Kids Play Area",
      "Garden",
      "Rainwater Harvesting"
    ]
  },

  {
    id: 2,
    title: "Modern Villa with Pool",
    price: 27500000,
    type: "Villa",
    budget: "1Cr+",
    location: "Pune, Maharashtra",
    images: [villa2, villa2_1, villa2_2],

    details: {
      bedrooms: 5,
      bathrooms: 4,
      area: "4200 sq.ft",
      furnishing: "Fully Furnished",
      parking: "4 Cars",
      status: "Under Construction",
      facing: "North-East"
    },

    amenities: [
      "Private Pool",
      "Home Theatre",
      "Smart Security System",
      "Solar Power",
      "Private Garden",
      "Luxury Modular Kitchen",
      "Servant Room",
      "Jacuzzi"
    ]
  },

  {
    id: 3,
    title: "Corporate Office Space",
    price: 12000000,
    type: "Commercial",
    budget: "1Cr+",
    location: "Bengaluru, Karnataka",
    images: [commercial1, commercial1_1, commercial1_2],

    details: {
      area: "3500 sq.ft",
      furnishing: "Fully Furnished",
      parking: "20 Cars",
      status: "Lease Available",
      floors: "5th Floor",
      facing: "West"
    },

    amenities: [
      "Lift",
      "Fire Safety System",
      "Conference Room",
      "Reception Area",
      "Power Backup",
      "High-Speed Internet",
      "CCTV Surveillance",
      "Reserved Parking"
    ]
  },

  {
    id: 4,
    title: "Beachfront Holiday House",
    price: 45000000,
    type: "Villa",
    budget: "1Cr+",
    location: "Goa, India",
    images: [villa1, villa1_1, villa1_2],

    details: {
      bedrooms: 4,
      bathrooms: 3,
      area: "3800 sq.ft",
      furnishing: "Fully Furnished",
      parking: "2 Cars",
      status: "Ready to Move",
      view: "Sea View"
    },

    amenities: [
      "Private Beach Access",
      "Infinity Pool",
      "Luxury Interiors",
      "Deck Area",
      "Smart Home System",
      "24/7 Security",
      "Outdoor Barbecue",
      "Tourist Rental Permission"
    ]
  },
];

