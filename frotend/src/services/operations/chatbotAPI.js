import toast from "react-hot-toast";

import { apiConnector } from "../apiConnector";
import { chatbotEndpoints } from "../apis";

const { CHAT } = chatbotEndpoints;

export const sendMessage = async (message) => {
  try {
    const response = await apiConnector("POST", CHAT, {
      message,
    });

    return response.data;
  } catch (error) {
    toast.error("AI Assistant is unavailable");
    throw error;
  }
};
