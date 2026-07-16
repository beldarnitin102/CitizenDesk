import {
  FiTruck,
  FiDroplet,
  FiZap,
  FiHome,
  FiTrash2,
  FiShield,
} from "react-icons/fi";

const departmentsData = [
  {
    id: 1,
    icon: FiTruck,
    title: "Public Works",
    description:
      "Road repairs, bridges, potholes and public infrastructure maintenance.",
    complaints: "Road Damage • Bridges • Footpaths",
    color: "#0F4C81",
    bg: "#EDF5FC",
  },

  {
    id: 2,
    icon: FiDroplet,
    title: "Water Department",
    description:
      "Water leakage, pipeline maintenance and drinking water supply.",
    complaints: "Water Leak • Pipeline • Supply",
    color: "#2BAE66",
    bg: "#ECFCF3",
  },

  {
    id: 3,
    icon: FiZap,
    title: "Electricity Board",
    description:
      "Streetlights, transformers, electrical faults and power supply issues.",
    complaints: "Street Lights • Power Cut",
    color: "#F4A940",
    bg: "#FFF8EA",
  },

  {
    id: 4,
    icon: FiTrash2,
    title: "Sanitation",
    description:
      "Garbage collection, drainage blockage and public cleanliness.",
    complaints: "Garbage • Drainage • Waste",
    color: "#8B5CF6",
    bg: "#F5F0FF",
  },

  {
    id: 5,
    icon: FiHome,
    title: "Municipal Corporation",
    description:
      "Public property maintenance and civic administration services.",
    complaints: "Public Property • Buildings",
    color: "#EF4444",
    bg: "#FDECEC",
  },

  {
    id: 6,
    icon: FiShield,
    title: "Public Safety",
    description:
      "Safety hazards, damaged barriers and emergency civic reporting.",
    complaints: "Safety • Emergency • Hazards",
    color: "#123B6A",
    bg: "#EEF4FB",
  },
];

export default departmentsData;