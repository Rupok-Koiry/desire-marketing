import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, loading, children }) => {
  if (loading) {
    return <div>Loading...</div>;
  } else if (!user.email) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default ProtectedRoute;
