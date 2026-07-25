import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRoles }) {
  const { user, token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  // If this component is used as a route element wrapper (to protect nested routes),
  // React Router will render nested routes via <Outlet />. If `children` were passed
  // directly (as in manual wrapping), render them.
  return children ? children : <Outlet />;
}

export default ProtectedRoute;