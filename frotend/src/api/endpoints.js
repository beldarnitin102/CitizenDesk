// ==============================
// BASE URL
// ==============================

// Development
export const BASE_URL = "http://localhost:3000/api/v1";

// Production
// export const BASE_URL = "https://your-domain.com/api/v1";


// ==============================
// AUTH ENDPOINTS
// ==============================

export const AUTH_ENDPOINTS = {
  SEND_OTP: `${BASE_URL}/auth/send-otp`,
  REGISTER: `${BASE_URL}/auth/register`,
  LOGIN: `${BASE_URL}/auth/login`,
};


// ==============================
// COMPLAINT ENDPOINTS
// ==============================

export const COMPLAINT_ENDPOINTS = {
  CREATE_COMPLAINT: `${BASE_URL}/complaints`,
  GET_MY_COMPLAINTS: `${BASE_URL}/complaints/my`,
  GET_COMPLAINT_DETAILS: (id) =>
    `${BASE_URL}/complaints/${id}`,
  UPDATE_COMPLAINT: (id) =>
    `${BASE_URL}/complaints/${id}`,
  DELETE_COMPLAINT: (id) =>
    `${BASE_URL}/complaints/${id}`,
};


// ==============================
// AI CHATBOT
// ==============================

export const CHATBOT_ENDPOINTS = {
  CHAT: `${BASE_URL}/chatbot`,
};


// ==============================
// EMPLOYEE
// ==============================

export const EMPLOYEE_ENDPOINTS = {
  GET_COMPLAINTS: `${BASE_URL}/employee/complaints`,

  GET_COMPLAINT_DETAILS: (id) =>
    `${BASE_URL}/employee/complaints/${id}`,

  ASSIGN_COMPLAINT: (id) =>
    `${BASE_URL}/employee/complaints/${id}/assign`,

  UPDATE_STATUS: (id) =>
    `${BASE_URL}/employee/complaints/${id}/status`,

  GET_HISTORY: (id) =>
    `${BASE_URL}/employee/complaints/${id}/history`,
};


// ==============================
// ADMIN
// ==============================

export const ADMIN_ENDPOINTS = {
  DASHBOARD: `${BASE_URL}/admin/dashboard`,

  GET_ALL_COMPLAINTS: `${BASE_URL}/admin/complaints`,

  GET_ALL_EMPLOYEES: `${BASE_URL}/admin/employees`,

  CREATE_EMPLOYEE: `${BASE_URL}/admin/employees`,

  UPDATE_EMPLOYEE: (id) =>
    `${BASE_URL}/admin/employees/${id}`,

  DELETE_EMPLOYEE: (id) =>
    `${BASE_URL}/admin/employees/${id}`,

  CREATE_DEPARTMENT: `${BASE_URL}/admin/departments`,

  UPDATE_DEPARTMENT: (id) =>
    `${BASE_URL}/admin/departments/${id}`,
};