import React from "react";
import "../../scss/navbar.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const clickHandle = (route) => {
    route === "album"
      ? navigate("/", { state: { location } })
      : navigate(route, { state: { location } });
  };
  return (
    <div className="navbar">
      <p onClick={() => clickHandle("album")}>Albums</p>
      <p onClick={() => clickHandle("posts")}>Posts</p>

      <p onClick={() => clickHandle("todo")}>Todo</p>
      <p onClick={() => clickHandle("users")}>Users</p>
      <p onClick={() => clickHandle("comments")}>Comments</p>
    </div>
  );
}

export default NavBar;
