// src/Login.js
import React, { useState } from "react";
import "./Login.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/task";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login(userName, password));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="user name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p style={{ margin: "auto", fontSize: "12px" }}>
          {" "}
          if you don't have account please <Link to="/register">
            Signup
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
