import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import LoginForm from "../../components/auth/LoginForm";
import { loginUser } from "../../services/operations/authAPI";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (formData) => {
    setLoading(true);
    try {
      const response = await loginUser(formData.email, formData.password);

      // Defends against structure mismatch: catches response.data.data OR response.data
      const payload = response?.data?.data || response?.data || response;
      const token = payload?.token;
      const user = payload?.user;

      if (!token || !user) {
        throw new Error("Invalid API payload response layout structure.");
      }

      login({ token, user });
      toast.success("Login Successful 🎉");

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
      console.error("Authentication Error Details:", error);
      toast.error(error?.response?.data?.message || error?.message || "Unable to login");
    } finally {
      setLoading(false);
    }
  };

  return <LoginForm onSubmit={handleLogin} loading={loading} />;
}

export default Login;
