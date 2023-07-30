// src/App.js
import React, { useEffect } from "react";
import TaskForm from "./components/Task/TaskForm";
import TaskList from "./components/Task/TaskList";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Registration/Login";
import Signup from "./components/Registration/signup";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import DynamicRoutes from "./config/DynamicRoutes";
const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, error, message, loading } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [message, user, dispatch, error]);
  return (
    <div className="app">
      <DynamicRoutes />
     
      <ToastContainer />
    </div>
  );
};

export default App;
