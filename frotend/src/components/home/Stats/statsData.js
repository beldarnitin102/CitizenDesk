import {
  FiFileText,
  FiCheckCircle,
  FiUsers,
  FiCpu,
} from "react-icons/fi";

const statsData = [
  {
    id: 1,
    icon: FiFileText,
    number: "25K+",
    title: "Complaints Submitted",
    description:
      "Citizens have successfully reported thousands of public issues.",
    color: "#0F4C81",
    bg: "#EDF5FC",
  },

  {
    id: 2,
    icon: FiCheckCircle,
    number: "18K+",
    title: "Complaints Resolved",
    description:
      "Government departments resolved complaints with complete transparency.",
    color: "#2BAE66",
    bg: "#ECFCF3",
  },

  {
    id: 3,
    icon: FiUsers,
    number: "15+",
    title: "Government Departments",
    description:
      "Integrated departments handling complaints through one platform.",
    color: "#8B5CF6",
    bg: "#F4EEFF",
  },

  {
    id: 4,
    icon: FiCpu,
    number: "98%",
    title: "AI Classification Accuracy",
    description:
      "Artificial Intelligence automatically categorizes complaints accurately.",
    color: "#F4A940",
    bg: "#FFF8EB",
  },
];

export default statsData;