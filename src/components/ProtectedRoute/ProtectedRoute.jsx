// act as guard for protected routes - if not logged in, redirect to home page
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
