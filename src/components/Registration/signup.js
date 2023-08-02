// src/Login.js
import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignupAction } from "../../redux/action/task";
import { useSelector } from "react-redux";
const Signup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [groupName, setGroupName] = useState("");
  const [groupId, setGroupId] = useState("");
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState({ name: "", id: "" });
  const { loading } = useSelector((state) => state.user);
  const optionsArray = [
    { name: "React JS Ticket", id: 1 },
    { name: "Node JS Task", id: 2 },
    { name: "MERN Stack", id: 3 },
  ];
  console.log("sssssssssssssss", selectedOption);
  const handleRegistration = async (e) => {
    e.preventDefault();
    if (!userName) {
      return alert("name must be required");
    }
    if (!password) {
      return alert("passoword must be required");
    }
    if (!selectedOption?.name) {
      return alert("Group name must be required");
    }
    dispatch(SignupAction(userName, password, selectedOption));
  };

  const handleOptionChange = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    const selectedOptionData = optionsArray.find(
      (option) => option.id === selectedId
    );

    if (selectedOptionData) {
      setSelectedOption(selectedOptionData);
    } else {
      setSelectedOption({ name: "", id: "" });
    }
  };
  return (
    <>
      <div id="div1" className="notes">
        Please be patient and wait for 2 minutes if this is your first time using this website. The API may take some time to respond on the signup or login page.
      </div>
      <br />
      <br />
      <div className="login-container">
        <h2>Signup</h2>
        <form onSubmit={handleRegistration}>
          <input
            type="text"
            placeholder="Please enter user name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <div className="custom-select">
            <select value={selectedOption.id} onChange={handleOptionChange}>
              <option value="">Select an option</option>
              {optionsArray.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!loading ? (
            <button type="submit">Signup</button>
          ) : (
            <button
              type="submit"
              style={{ backgroundColor: "white", color: "black" }}
            >
              Loading ....
            </button>
          )}

          <p style={{ margin: "auto", fontSize: "12px" }}>
            {" "}
            if you have already account please <Link to="/">Login</Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
