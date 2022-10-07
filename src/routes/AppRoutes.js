import React from "react";
import AuthProvider from "../utils/useContext/AuthProvider";
import { Routes, Route } from "react-router-dom";
import Album from "../UI/Album";
import Users from "../UI/Users";
import ProtectedRoute from "../utils/ProtectedRoute/ProtectedRoute";
import NavBar from "../UI/components/NavBar";
import Posts from "../UI/Posts";
import Login from "../UI/Login";
import Todo from "../UI/Todo";
import Comments from "../UI/Comments";
import {useLocation} from "react-router-dom"

function AppRoutes() {
    const myLocation= useLocation()
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Album myLocation={myLocation} />} />
        <Route path="/posts" element={<Posts myLocation={myLocation} />} />
        <Route path="/login" element={<Login myLocation={myLocation} />} />
        <Route path="/todo" element={<Todo myLocation={myLocation} />} />
        <Route
          path="/comments"
          element={
            <ProtectedRoute>
              <Comments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default AppRoutes;
