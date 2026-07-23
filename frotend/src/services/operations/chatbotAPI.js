import { apiConnector } from "../../api/apiConnector";
import { CHATBOT_ENDPOINTS } from "../../api/endpoints";

const { CHAT } = CHATBOT_ENDPOINTS;

// FIXED: Added token parameter to pass validation headers criteria
export async function askAI(message, token) {
  try {
    const response = await apiConnector({
      method: "POST",
      url: CHAT,
      bodyData: {
        message,
      },
      headers: {
        Authorization: `Bearer ${token}`, // FIXED: Sent the authorization token
      },
    });

    return response.data;
  } catch (error) {
    console.error("CHATBOT ERROR LOG:", error);
    throw error;
  }
}
