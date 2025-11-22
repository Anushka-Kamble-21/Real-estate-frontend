// src/assets/data/projects.js

import proj1 from "../project1.jpg";
import proj1_1 from "../project1_1.jpg";
import proj1_2 from "../project1_2.jpg";
import proj2 from "../project2.jpg";
import proj2_1 from "../project2_1.jpg";
import proj2_2 from "../project2_2.jpeg";
import proj3 from "../project3.jpg";
import proj3_1 from "../project3_1.jpg";
import proj3_2 from "../project3_2.webp";

export const projects = [
  {
    id: 1,
    title: "Oceanview Residency",
    developer: "Lodha Developers",
    location: "Mumbai, Maharashtra",
    type: "Residential",
    status: "Ongoing",
    priceRange: "₹ 80L - 2.5Cr",
    image: proj1,
    images: [proj1, proj1_1, proj1_2],   
    amenities: ["Swimming Pool", "Club House", "Gym", "Security", "Garden"],
    brochure: "/brochures/oceanview.pdf"
  },
  {
    id: 2,
    title: "Skyline Tech Park",
    developer: "DLF Builders",
    location: "Bengaluru, Karnataka",
    type: "Commercial",
    status: "Upcoming",
    priceRange: "₹ 1.2Cr - 4Cr",
    image: proj2,
    images: [proj2, proj2_1, proj2_2],   
    amenities: ["Swimming Pool", "Club House", "Gym", "Security", "Garden"],
    brochure: "/brochures/oceanview.pdf"
  },
  {
    id: 3,
    title: "Green Valley Villas",
    developer: "Prestige Group",
    location: "Goa, India",
    type: "Residential",
    status: "Completed",
    priceRange: "₹ 1.5Cr - 5Cr",
    image: proj3,
    images: [proj3, proj3_1, proj3_2],   
    amenities: ["Swimming Pool", "Club House", "Gym", "Security", "Garden"],
    brochure: "/brochures/oceanview.pdf"
  },
];
