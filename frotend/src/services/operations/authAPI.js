import toast from "react-hot-toast";

import { apiConnector } from "../apiConnector";

import { authEndpoints } from "../apis";

const { SEND_OTP, REGISTER, LOGIN } = authEndpoints;

export const sendOTP = async (email) => {
  const toastId = toast.loading("Sending OTP...");

  try {
    const response = await apiConnector("POST", SEND_OTP, { email });

    toast.success(response.data.message);

    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Unable to send OTP");

    throw error;
  } finally {
    toast.dismiss(toastId);
  }
};

export const register = async (formData) => {
  const toastId = toast.loading("Creating Account...");

  try {
    const response = await apiConnector("POST", REGISTER, formData);

    toast.success(response.data.message);

    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Registration Failed");

    throw error;
  } finally {
    toast.dismiss(toastId);
  }
};

export const login = async (email, password) => {
  const toastId = toast.loading("Logging in...");

  try {
    const response = await apiConnector("POST", LOGIN, {
      email,
      password,
    });

    localStorage.setItem("token", response.data.token);

    toast.success("Welcome Back");

    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Login Failed");

    throw error;
  } finally {
    toast.dismiss(toastId);
  }
};
