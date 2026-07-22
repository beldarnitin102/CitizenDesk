import toast from "react-hot-toast";
import { apiConnector } from "../../api/apiConnector";
// NOTE: Make sure you chose Option 2 from earlier in endpoints.js
// so that LOGIN, REGISTER, and SEND_OTP can be imported directly like this.
import { LOGIN, REGISTER, SEND_OTP } from "../../api/endpoints";

// ======================
// LOGIN
// ======================
export const loginUser = async (email, password) => {
  try {
    const response = await apiConnector({
      method: "POST",
      url: LOGIN,
      bodyData: {
        email,
        password,
      },
    });

    toast.success("Logged in successfully!");
    return response.data; // Return just the data payload from Axios
  } catch (error) {
    // Extract the exact error message from the backend response
    const errorMessage =
      error.response?.data?.message || "Login failed. Please try again.";
    toast.error(errorMessage); // Show the error to the user
    throw error;
  }
};

// ======================
// SEND OTP
// ======================
export const sendOTP = async (email) => {
  try {
    const response = await apiConnector({
      method: "POST",
      url: SEND_OTP,
      bodyData: {
        email,
      },
    });

    toast.success("OTP sent successfully");
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Failed to send OTP.";
    toast.error(errorMessage);
    throw error;
  }
};

// ======================
// REGISTER
// ======================
export const registerUser = async (data) => {
  try {
    const response = await apiConnector({
      method: "POST",
      url: REGISTER,
      bodyData: data,
    });

    toast.success("Registration Successful");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Registration failed.";
    toast.error(errorMessage);
    throw error;
  }
};
