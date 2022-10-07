import React, { useEffect } from "react";
import Login from "../../UI/Login";
import { useNavigate, useLocation } from "react-router";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children: Children }) {
  const isLogin = true;

  const location = useLocation();


  return isLogin ? (
    Children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} />
  );
}

export default ProtectedRoute;
