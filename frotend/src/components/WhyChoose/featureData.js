import {
  FiCpu,
  FiGlobe,
  FiClock,
  FiShield,
  FiMapPin,
  FiBarChart2,
} from "react-icons/fi";

const featureData = [
  {
    id: 1,
    icon: FiCpu,
    title: "AI Complaint Analysis",
    description:
      "Artificial Intelligence automatically detects complaint category, priority, and the responsible department.",
    color: "#0F4C81",
  },
  {
    id: 2,
    icon: FiGlobe,
    title: "Multilingual Support",
    description:
      "Citizens can submit complaints in Marathi, Hindi, or English and receive responses in the same language.",
    color: "#2BAE66",
  },
  {
    id: 3,
    icon: FiClock,
    title: "Real-Time Tracking",
    description:
      "Track every stage of your complaint from submission to resolution with live status updates.",
    color: "#8B5CF6",
  },
  {
    id: 4,
    icon: FiShield,
    title: "Secure Authentication",
    description:
      "Email OTP verification and role-based authentication keep citizen data safe and secure.",
    color: "#EF4444",
  },
  {
    id: 5,
    icon: FiMapPin,
    title: "Location Intelligence",
    description:
      "Complaints are automatically mapped to villages, talukas, and departments for faster action.",
    color: "#F4A940",
  },
  {
    id: 6,
    icon: FiBarChart2,
    title: "Analytics Dashboard",
    description:
      "Administrators can monitor complaint trends, department performance, and pending cases.",
    color: "#06B6D4",
  },
];

export default featureData;