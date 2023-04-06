import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  // const [user, loading] = useAuthState(auth);
  const user = { name: "Ripon", email: "abc@gamil.com", role: "admin" };
  const location = useLocation();
  // if (loading) {
  //   return <p>loading ...</p>;
  // }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
