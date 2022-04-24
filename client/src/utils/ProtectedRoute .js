import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, loading, children }) => {
  console.log(user, loading);
  if (loading) {
    return <div>Loading...</div>;
  } else if (!user.email) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default ProtectedRoute;
