import axiosInstance from "./axiosInstance";

export const apiConnector = async ({
  method,
  url,
  bodyData = null,
  headers = {},
  params = {},
}) => {
  try {
    const requestConfig = {
      method,
      url,
      headers,
      params,
    };

    if (bodyData !== null && bodyData !== undefined) {
      requestConfig.data = bodyData;
    }

    const response = await axiosInstance(requestConfig);

    return response;
  } catch (error) {
    throw error;
  }
};