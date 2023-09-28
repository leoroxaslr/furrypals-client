import { Navigate } from "react-router-dom";
import { UserAuth } from "../components/auth/AuthContext.jsx";

export const PrivateRoute = ({ children }) => {
  const { currentUser } = UserAuth();

  if (!currentUser) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
};
