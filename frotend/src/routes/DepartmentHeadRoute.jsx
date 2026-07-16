import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DepartmentHeadRoute = ({
  children,
}) => {
  const { isAuthenticated, role } =
    useAuth();

  if (!isAuthenticated)
    return <Navigate to="/login" />;

  if (role !== "DEPARTMENT_HEAD")
    return <Navigate to="/" />;

  return children;
};

export default DepartmentHeadRoute;