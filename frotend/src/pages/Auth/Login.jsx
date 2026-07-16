import AuthLayout from "./components/AuthLayout";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to access your dashboard and manage complaints."
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;