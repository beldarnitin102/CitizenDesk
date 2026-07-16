import toast from "react-hot-toast";

import { apiConnector } from "../apiConnector";
import { employeeEndpoints } from "../apis";

const { DASHBOARD, GET_COMPLAINTS } = employeeEndpoints;

export const getEmployeeDashboard = async () => {
  try {
    const response = await apiConnector("GET", DASHBOARD);

    return response.data;
  } catch (error) {
    toast.error("Unable to load dashboard");
    throw error;
  }
};

export const getDepartmentComplaints = async () => {
  try {
    const response = await apiConnector("GET", GET_COMPLAINTS);

    return response.data;
  } catch (error) {
    toast.error("Unable to fetch complaints");
    throw error;
  }
};
