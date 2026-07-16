import toast from "react-hot-toast";

import { apiConnector } from "../apiConnector";
import { adminEndpoints } from "../apis";

const { DASHBOARD, GET_EMPLOYEES, GET_COMPLAINTS } = adminEndpoints;

export const getAdminDashboard = async () => {
  try {
    const response = await apiConnector("GET", DASHBOARD);

    return response.data;
  } catch (error) {
    toast.error("Dashboard Load Failed");
    throw error;
  }
};

export const getEmployees = async () => {
  try {
    const response = await apiConnector("GET", GET_EMPLOYEES);

    return response.data;
  } catch (error) {
    toast.error("Unable to fetch employees");
    throw error;
  }
};

export const getAllComplaints = async () => {
  try {
    const response = await apiConnector("GET", GET_COMPLAINTS);

    return response.data;
  } catch (error) {
    toast.error("Unable to fetch complaints");
    throw error;
  }
};
