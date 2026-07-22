import axiosInstance from "./axiosInstance";

// ====================================
// Generic API Connector
// ====================================

export const apiConnector = async ({
  method,
  url,
  bodyData = null,
  headers = {},
  params = {},
}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: bodyData,
      headers,
      params,
    });

    return response;
  } catch (error) {
    throw error;
  }
};