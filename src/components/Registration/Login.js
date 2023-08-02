// src/Login.js
import React, { useState } from "react";
import "./Login.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/task";
import { useSelector } from "react-redux";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const {loading}=useSelector(state=>state.user)
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login(userName, password));
  };

  return (<>
<div id="div1" className="notes">
Please be patient and wait for 2 minutes if this is your first time using this website. The API may take some time to respond on the signup or login page. </div>
   <br/><br/>
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
        {!loading?<button type="submit">Login</button>:
        <button type="submit" style={{backgroundColor:'white',color:'black'}}>Loading ....</button>
        }
        <p style={{ margin: "auto", fontSize: "12px" }}>
          {" "}
          if you don't have account please <Link to="/register">
            Signup
          </Link>{" "}
        </p>
      </form>
    </div>
    </>
  );
};

export default Login;
