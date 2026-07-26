// Development
export const BASE_URL = "http://localhost:3000/api/v1";

// CHANGED: Export them as individual constants instead of one object
export const SEND_OTP = `${BASE_URL}/auth/send-otp`;
export const REGISTER = `${BASE_URL}/auth/register`;
export const LOGIN = `${BASE_URL}/auth/login`;

// ==============================
// COMPLAINT ENDPOINTS
// ==============================

export const COMPLAINT_ENDPOINTS = {
  CREATE_COMPLAINT: `${BASE_URL}/complaints`,
  GET_MY_COMPLAINTS: `${BASE_URL}/complaints/my`,
  GET_COMPLAINT_DETAILS: (id) => `${BASE_URL}/complaints/${id}`,
  UPDATE_COMPLAINT: (id) => `${BASE_URL}/complaints/${id}`,
  DELETE_COMPLAINT: (id) => `${BASE_URL}/complaints/${id}`,
  GET_CITIZEN_DASHBOARD: `${BASE_URL}/complaints/dashboard`,
};

export const UPDATE_COMPLAINT = (id) => `${BASE_URL}/complaints/${id}`;

export const PROFILE_ENDPOINTS = {
  GET_PROFILE: `${BASE_URL}/profile/me`,
};

export const CHATBOT_ENDPOINTS = {
  CHAT: `${BASE_URL}/chatbot`,
};
// ==============================
// AI CHATBOT
// ==============================

// ==============================
// EMPLOYEE
// ==============================

export const EMPLOYEE_ENDPOINTS = {
  DASHBOARD: `${BASE_URL}/employee/dashboard`,

  GET_COMPLAINTS: `${BASE_URL}/employee/complaints`,

  GET_COMPLAINT_DETAILS: (id) => `${BASE_URL}/employee/complaints/${id}`,

  ASSIGN_COMPLAINT: (id) => `${BASE_URL}/employee/complaints/${id}/assign`,

  UPDATE_STATUS: (id) => `${BASE_URL}/employee/complaints/${id}/status`,

  GET_HISTORY: (id) => `${BASE_URL}/employee/complaints/${id}/history`,
};

export const DEPARTMENT_HEAD_ENDPOINTS = {
  DASHBOARD: "/department-head/dashboard",

  GET_EMPLOYEES: "/department-head/employees",

  GET_EMPLOYEE_DETAILS: (id) => "/department-head/employees/" + id,

  UNASSIGNED_COMPLAINTS: "/department-head/unassigned-complaints",

  ASSIGN_COMPLAINT: "/department-head/assign",

  REASSIGN_COMPLAINT: "/department-head/reassign",

  GET_COMPLAINTS: "/department-head/complaints",

  GET_COMPLAINT_DETAILS: (id) => `/department-head/complaints/${id}`,

  UPDATE_COMPLAINT: (id) => `/department-head/complaints/${id}`,

  ANALYTICS: "/department-head/analytics",
};

// ==============================
// ADMIN
// ==============================

export const ADMIN_ENDPOINTS = {
  DASHBOARD: `${BASE_URL}/admin/dashboard`,

  GET_ALL_COMPLAINTS: `${BASE_URL}/admin/complaints`,

  GET_ALL_EMPLOYEES: `${BASE_URL}/admin/employees`,

  CREATE_EMPLOYEE: `${BASE_URL}/admin/employees`,

  UPDATE_EMPLOYEE: (id) => `${BASE_URL}/admin/employees/${id}`,

  DELETE_EMPLOYEE: (id) => `${BASE_URL}/admin/employees/${id}`,

  CREATE_DEPARTMENT: `${BASE_URL}/admin/departments`,

  UPDATE_DEPARTMENT: (id) => `${BASE_URL}/admin/departments/${id}`,
};
