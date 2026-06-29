import {
  FiEdit3,
  FiCpu,
  FiSend,
  FiActivity,
  FiCheckCircle,
} from "react-icons/fi";

const processData = [
  {
    id: 1,
    icon: FiEdit3,
    title: "Submit Complaint",
    description:
      "Citizens submit complaints with text, images or videos in Marathi, Hindi or English.",
    color: "#0F4C81",
  },
  {
    id: 2,
    icon: FiCpu,
    title: "AI Analysis",
    description:
      "Artificial Intelligence analyzes the complaint, detects priority, category and department automatically.",
    color: "#8B5CF6",
  },
  {
    id: 3,
    icon: FiSend,
    title: "Department Assignment",
    description:
      "The complaint is instantly forwarded to the responsible department and employee.",
    color: "#2BAE66",
  },
  {
    id: 4,
    icon: FiActivity,
    title: "Track Progress",
    description:
      "Citizens receive live updates while officers update the complaint status.",
    color: "#F4A940",
  },
  {
    id: 5,
    icon: FiCheckCircle,
    title: "Issue Resolved",
    description:
      "After verification the complaint is marked resolved and citizens receive a final notification.",
    color: "#10B981",
  },
];

export default processData;