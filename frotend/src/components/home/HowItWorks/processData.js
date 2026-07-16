import {
  FiEdit3,
  FiCpu,
  FiSend,
  FiActivity,
  FiCheckCircle,
} from "react-icons/fi";

const processData = [
  {
    id: "01",
    title: "Submit Complaint",
    description:
      "Citizens submit complaints with images, videos and location details using a simple multilingual form.",
    icon: FiEdit3,
    color: "#0F4C81",
    bg: "#EDF5FC",
  },

  {
    id: "02",
    title: "AI Analysis",
    description:
      "Artificial Intelligence analyzes the complaint, detects language, category, priority and department.",
    icon: FiCpu,
    color: "#8B5CF6",
    bg: "#F5F0FF",
  },

  {
    id: "03",
    title: "Department Assignment",
    description:
      "The complaint is automatically routed to the correct department and assigned to an available officer.",
    icon: FiSend,
    color: "#2BAE66",
    bg: "#ECFCF3",
  },

  {
    id: "04",
    title: "Track Progress",
    description:
      "Citizens receive live status updates while officers update every stage of complaint resolution.",
    icon: FiActivity,
    color: "#F4A940",
    bg: "#FFF8EA",
  },

  {
    id: "05",
    title: "Issue Resolved",
    description:
      "After verification the complaint is marked resolved and the citizen receives confirmation.",
    icon: FiCheckCircle,
    color: "#10B981",
    bg: "#ECFFF5",
  },
];

export default processData;