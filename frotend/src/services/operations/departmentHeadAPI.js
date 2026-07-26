import { DEPARTMENT_HEAD_ENDPOINTS } from "../../api/endpoints";
import { apiConnector } from "../../api/apiConnector";

// ======================================
// Department Head Dashboard
// ======================================

export const getDepartmentDashboard = async (token) => {
  try {
    const response = await apiConnector({
      method: "GET",
      url: DEPARTMENT_HEAD_ENDPOINTS.DASHBOARD,
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

// ======================================
// Department Employees
// ======================================

export const getDepartmentEmployees = async (token) => {
  try {
    const response = await apiConnector({
      method: "GET",

      url: DEPARTMENT_HEAD_ENDPOINTS.GET_EMPLOYEES,

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

// ========================================
// Employee Details
// ========================================

export const getEmployeeDetails = async (id, token) => {
  try {
    const response = await apiConnector({
      method: "GET",

      url: DEPARTMENT_HEAD_ENDPOINTS.GET_EMPLOYEE_DETAILS(id),

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

// =====================================
// Unassigned Complaints
// =====================================

export const getUnassignedComplaints = async (token) => {
  try {
    const response = await apiConnector({
      method: "GET",

      url: DEPARTMENT_HEAD_ENDPOINTS.UNASSIGNED_COMPLAINTS,

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

// =====================================
// Assign Complaint
// =====================================

export const assignComplaint = async (data, token) => {
  try {
    const response = await apiConnector({
      method: "PATCH",

      url: DEPARTMENT_HEAD_ENDPOINTS.ASSIGN_COMPLAINT,

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

// =====================================
// Reassign Complaint
// =====================================

export const reassignComplaint = async (data, token) => {
  try {
    const response = await apiConnector({
      method: "PATCH",

      url: DEPARTMENT_HEAD_ENDPOINTS.REASSIGN_COMPLAINT,

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

// ======================================
// Department Complaints
// ======================================

export const getDepartmentComplaints = async (token, params = {}) => {
  try {
    const response = await apiConnector({
      method: "GET",

      url: DEPARTMENT_HEAD_ENDPOINTS.GET_COMPLAINTS,

      headers: {
        Authorization: `Bearer ${token}`,
      },

      params,
    });

    return response.data.data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

// ======================================
// Complaint Details
// ======================================

export const getDepartmentComplaintDetails = async (id, token) => {
  try {
    const response = await apiConnector({
      method: "GET",

      url: DEPARTMENT_HEAD_ENDPOINTS.GET_COMPLAINT_DETAILS(id),

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

// ======================================
// Update Complaint
// ======================================

export const updateComplaint = async (
  id,

  data,

  token,
) => {
  try {
    const response = await apiConnector({
      method: "PATCH",

      url: DEPARTMENT_HEAD_ENDPOINTS.UPDATE_COMPLAINT(id),

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

// ======================================
// Analytics
// ======================================

export const getAnalytics = async (token) => {
  try {
    const response = await apiConnector({
      method: "GET",

      url: DEPARTMENT_HEAD_ENDPOINTS.ANALYTICS,

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
