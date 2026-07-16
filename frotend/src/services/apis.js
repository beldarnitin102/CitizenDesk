const BASE_URL = "http://localhost:3000/api/v1";

export const authEndpoints = {
  SEND_OTP: `${BASE_URL}/auth/send-otp`,
  REGISTER: `${BASE_URL}/auth/register`,
  LOGIN: `${BASE_URL}/auth/login`,
};

export const complaintEndpoints = {
  CREATE_COMPLAINT: `${BASE_URL}/complaints`,
  GET_MY_COMPLAINTS: `${BASE_URL}/complaints/my`,
  GET_COMPLAINT_DETAILS: (id) =>
    `${BASE_URL}/complaints/${id}`,
  UPDATE_COMPLAINT: (id) =>
    `${BASE_URL}/complaints/${id}`,
  DELETE_COMPLAINT: (id) =>
    `${BASE_URL}/complaints/${id}`,
};

export const employeeEndpoints = {
  DASHBOARD: `${BASE_URL}/employee/dashboard`,
  GET_COMPLAINTS: `${BASE_URL}/employee/complaints`,
};

export const adminEndpoints = {
  DASHBOARD: `${BASE_URL}/admin/dashboard`,
  GET_EMPLOYEES: `${BASE_URL}/admin/employees`,
  GET_COMPLAINTS: `${BASE_URL}/admin/complaints`,
};

export const chatbotEndpoints = {
  CHAT: `${BASE_URL}/chatbot`,
};