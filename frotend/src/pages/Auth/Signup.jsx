import AuthLayout from "./components/AuthLayout";
import SignupForm from "./components/SignupForm";

const Signup = () => {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Register as a citizen to submit and track complaints."
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;