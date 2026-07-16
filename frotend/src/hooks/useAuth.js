import { useSelector } from "react-redux";

const useAuth = () => {
  const { token, user, role, isAuthenticated } =
    useSelector((state) => state.auth);

  return {
    token,
    user,
    role,
    isAuthenticated,
  };
};

export default useAuth;