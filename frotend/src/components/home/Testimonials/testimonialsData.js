import {
  FiCheckCircle,
  FiMapPin,
} from "react-icons/fi";

const testimonialsData = [
  {
    id: 1,
    name: "Rahul Patil",
    district: "Jalgaon",
    complaintId: "JAL-2025-1023",
    image: "https://i.pravatar.cc/150?img=11",
    review:
      "The AI automatically routed my road repair complaint to the Public Works Department. The issue was resolved within three days, and I received updates throughout the process.",
    rating: 5,
    icon: FiCheckCircle,
  },

  {
    id: 2,
    name: "Sneha Kulkarni",
    district: "Bhusawal",
    complaintId: "JAL-2025-1041",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "I uploaded a photo of a water leakage problem. The system detected the department automatically, and the pipeline was repaired quickly.",
    rating: 5,
    icon: FiCheckCircle,
  },

  {
    id: 3,
    name: "Amit Sharma",
    district: "Chalisgaon",
    complaintId: "JAL-2025-1095",
    image: "https://i.pravatar.cc/150?img=45",
    review:
      "Real-time complaint tracking made the entire process transparent. Every status update was visible from submission to resolution.",
    rating: 5,
    icon: FiCheckCircle,
  },
];

export default testimonialsData;