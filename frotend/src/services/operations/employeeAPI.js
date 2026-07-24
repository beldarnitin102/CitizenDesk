import { EMPLOYEE_ENDPOINTS } from "../../api/endpoints";
import { apiConnector } from "../../api/apiConnector";

const { DASHBOARD } = EMPLOYEE_ENDPOINTS;

// ==========================
// Employee Dashboard
// ==========================

export const getEmployeeDashboard = async (token) => {
  try {
    const response = await apiConnector({
      method: "GET",
      url: EMPLOYEE_ENDPOINTS.DASHBOARD,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDepartmentComplaints = async (token) => {
  try {
    const response = await apiConnector({
      method: "GET",
      url: EMPLOYEE_ENDPOINTS.GET_COMPLAINTS,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// ==========================
// Get Complaint Details
// ==========================

export const getEmployeeComplaintDetails = async (id,token) => {
  try {
    const response = await apiConnector({
      method: "GET",
      url : EMPLOYEE_ENDPOINTS.GET_COMPLAINT_DETAILS(id),
      headers: {
        Authorization: `Bearer ${token}`,
      },
   } );

    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// ===============================
// Complaint History
// ===============================

export const getComplaintHistory = async (id,token) => {
  try {
    const response = await apiConnector({
      method: "GET",
      url : EMPLOYEE_ENDPOINTS.GET_HISTORY(id),
      headers: {
        Authorization: `Bearer ${token}`,
      },

   } );

    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// ==========================
// Assign Complaint
// ==========================

export const assignComplaint = async (id,token) => {
  try {
    const response = await apiConnector({
      method : "PATCH",
      url : EMPLOYEE_ENDPOINTS.ASSIGN_COMPLAINT(id),
      headers: {
        Authorization: `Bearer ${token}`,
      },
   } );

    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// ==========================
// Update Complaint Status
// ==========================

export const updateComplaintStatus = async (id, data,token) => {
  try {
    const response = await apiConnector({
      method: "PATCH",
      url: EMPLOYEE_ENDPOINTS.UPDATE_STATUS(id),
      bodyData: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
