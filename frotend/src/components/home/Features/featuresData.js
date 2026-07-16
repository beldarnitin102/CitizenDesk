import {
  FiCpu,
  FiImage,
  FiMapPin,
  FiGlobe,
  FiUsers,
  FiMessageSquare,
} from "react-icons/fi";

const featuresData = [
  {
    id: 1,
    icon: FiCpu,
    title: "AI Complaint Analysis",
    description:
      "Automatically identifies complaint category, priority and responsible department using Artificial Intelligence.",
    color: "#0F4C81",
    bg: "#EAF3FB",
  },

  {
    id: 2,
    icon: FiImage,
    title: "Photo & Video Upload",
    description:
      "Citizens can attach images and videos to provide better evidence for faster issue resolution.",
    color: "#2BAE66",
    bg: "#EAFBF2",
  },

  {
    id: 3,
    icon: FiGlobe,
    title: "Multilingual Support",
    description:
      "Supports English, Hindi and Marathi with automatic language understanding.",
    color: "#8B5CF6",
    bg: "#F2ECFF",
  },

  {
    id: 4,
    icon: FiMapPin,
    title: "Live Complaint Tracking",
    description:
      "Track every complaint from submission until it is successfully resolved.",
    color: "#F4A940",
    bg: "#FFF7E8",
  },

  {
    id: 5,
    icon: FiUsers,
    title: "Smart Department Routing",
    description:
      "AI forwards complaints directly to the correct government department without manual intervention.",
    color: "#123B6A",
    bg: "#EEF5FB",
  },

  {
    id: 6,
    icon: FiMessageSquare,
    title: "AI Assistant",
    description:
      "Ask questions about your complaints and receive instant responses through the integrated chatbot.",
    color: "#EF4444",
    bg: "#FDECEC",
  },
];

export default featuresData;