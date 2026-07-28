import { HERO_ENDPOINTS } from "../../api/endpoints";
import { apiConnector } from "../../api/apiConnector";

// ======================================
// Hero Statistics
// ======================================

export const getHeroStatistics = async () => {
  try {
    const response = await apiConnector({
      method: "GET",

      url: HERO_ENDPOINTS.GET_STATISTICS,
    });

    return response.data.data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

// ======================================
// Hero Departments
// ======================================

export const getHeroDepartments = async () => {
  try {
    const response = await apiConnector({
      method: "GET",

      url: HERO_ENDPOINTS.GET_DEPARTMENTS,
    });

    return response.data.data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};
