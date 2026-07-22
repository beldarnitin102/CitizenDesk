import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import LoginForm from "../../components/auth/LoginForm";

import { loginUser } from "../../services/operations/authAPI";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] =
    useState(false);

  // ===========================
  // Login Handler
  // ===========================

  const handleLogin = async (
    formData
  ) => {
    setLoading(true);

    try {
      const response =
        await loginUser(
          formData.email,
          formData.password
        );

      const {
        token,
        user,
      } = response.data.data;

      login({
        token,
        user,
      });

      toast.success(
        "Login Successful 🎉"
      );

      // =======================
      // Role Based Redirect
      // =======================

      switch (user.role) {
        case "ADMIN":
          navigate("/admin");
          break;

        case "EMPLOYEE":
        case "DEPARTMENT_HEAD":
          navigate("/employee");
          break;

        case "CITIZEN":
        default:
          navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
          "Unable to login"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginForm
      onSubmit={handleLogin}
      loading={loading}
    />
  );
}

export default Login;