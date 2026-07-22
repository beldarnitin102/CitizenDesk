import { apiConnector } from "../../api/apiConnector";
import { AUTH_ENDPOINTS } from "../../api/endpoints";

const {
  SEND_OTP,
  REGISTER,
  LOGIN,
} = AUTH_ENDPOINTS;


// ==========================================
// SEND OTP
// ==========================================

export const sendOTP = async (email) => {
  return await apiConnector({
    method: "POST",
    url: SEND_OTP,
    bodyData: {
      email,
    },
  });
};


// ==========================================
// REGISTER
// ==========================================

export const registerUser = async (userData) => {
  return await apiConnector({
    method: "POST",
    url: REGISTER,
    bodyData: userData,
  });
};


// ==========================================
// LOGIN
// ==========================================

export const loginUser = async (email, password) => {
  return await apiConnector({
    method: "POST",
    url: LOGIN,
    bodyData: {
      email,
      password,
    },
  });
};