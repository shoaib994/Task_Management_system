// Header.js
import React from "react";
import "./Header.css"; // Import the Header.css file for styling

const Header = () => {
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <header>
      <h1>Task Management System</h1>
      <nav>
        <ul>
          <li>
            <button style={{ float: "right" }} onClick={() => Logout()}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <br />
      <br />
    </header>
  );
};

export default Header;
