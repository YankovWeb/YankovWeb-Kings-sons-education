import React from "react";
import {Navigate} from "react-router-dom";
import {useUserAuth} from "../context/AuthContext";
import {Outlet} from "react-router-dom";
const ProtectedRoute = ({children}) => {
  const {user} = useUserAuth();

  if (!user) <Navigate to="/" />;

  return <Outlet />;
};

export default ProtectedRoute;
