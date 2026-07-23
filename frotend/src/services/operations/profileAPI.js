import { PROFILE_ENDPOINTS } from "../../api/endpoints";
import { apiConnector } from "../../api/apiConnector";

const { GET_PROFILE } = PROFILE_ENDPOINTS;

export async function getProfile() {
  try {
    const response = await apiConnector(
      "GET",
      GET_PROFILE
    );

    return response.data;
  } catch (error) {
    console.error("GET PROFILE ERROR :", error);
    throw error;
  }
}