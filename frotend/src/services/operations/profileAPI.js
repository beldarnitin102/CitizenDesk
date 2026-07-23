import { PROFILE_ENDPOINTS } from "../../api/endpoints";
import { apiConnector } from "../../api/apiConnector";

const { GET_PROFILE } = PROFILE_ENDPOINTS;

export const getProfile = async (token) => {
  try {
    const response = await apiConnector({
      method: "GET",
      url: GET_PROFILE, // <-- FIXED: Changed from PROFILE_ENDPOINTS.GET_PROFILE to your clean variable
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Profile API network error trace:", error);
    throw error;
  }
};
