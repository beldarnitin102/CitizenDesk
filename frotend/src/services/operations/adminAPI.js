import { ADMIN_ENDPOINTS } from "../../api/endpoints";
import { apiConnector } from "../../api/apiConnector";

// =============================
// Dashboard
// =============================

export const getAdminDashboard = async (token) => {
  try {
    const response = await apiConnector({
      method: "GET",

      url: ADMIN_ENDPOINTS.DASHBOARD,

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

// =============================
// Complaints
// =============================

export const getAllComplaints = async (token) => {
  try {
    const response = await apiConnector({
      method: "GET",

      url: ADMIN_ENDPOINTS.GET_COMPLAINTS,

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

// =============================
// Employees
// =============================

export const getAllEmployees = async (token) => {
  try {
    const response = await apiConnector({
      method: "GET",

      url: ADMIN_ENDPOINTS.GET_EMPLOYEES,

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

// =============================
// Departments
// =============================

export const getAllDepartments = async (token) => {
  try {
    const response = await apiConnector({
      method: "GET",

      url: ADMIN_ENDPOINTS.GET_DEPARTMENTS,

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


export const getComplaintDetails = async (id, token) => {
  try {
    const response = await apiConnector({
      method: "GET",
      url: ADMIN_ENDPOINTS.GET_COMPLAINT_DETAILS(id),
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

export const createDepartment = async (data, token) => {
  try {
    const response = await apiConnector({
      method: "POST",
      url: ADMIN_ENDPOINTS.CREATE_DEPARTMENT,
      bodyData: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const updateDepartment = async (
  id,
  data,
  token
) => {
  try {
    const response = await apiConnector({
      method: "PATCH",
      url: ADMIN_ENDPOINTS.UPDATE_DEPARTMENT(id),
      bodyData: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const createEmployee = async (
  data,
  token
) => {
  try {
    const response = await apiConnector({
      method: "POST",
      url: ADMIN_ENDPOINTS.CREATE_EMPLOYEE,
      bodyData: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const createDepartmentHead = async (
  data,
  token
) => {
  try {
    const response = await apiConnector({
      method: "POST",
      url: ADMIN_ENDPOINTS.CREATE_DEPARTMENT_HEAD,
      bodyData: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const updateEmployee = async (
  id,
  data,
  token
) => {
  try {
    const response = await apiConnector({
      method: "PATCH",
      url: ADMIN_ENDPOINTS.UPDATE_EMPLOYEE(id),
      bodyData: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEmployee = async (
  id,
  token
) => {
  try {
    const response = await apiConnector({
      method: "DELETE",
      url: ADMIN_ENDPOINTS.DELETE_EMPLOYEE(id),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    throw error;
  }
};