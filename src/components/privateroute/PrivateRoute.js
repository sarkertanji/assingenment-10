import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./private.css";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, Isloadind } = useAuth();
  if (Isloadind) {
    return <h1 id="loading">loading...</h1>;
  }
  return user?.email ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
