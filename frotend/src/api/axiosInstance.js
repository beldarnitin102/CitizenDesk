import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: true,

  timeout: 15000,
});

export default axiosInstance;