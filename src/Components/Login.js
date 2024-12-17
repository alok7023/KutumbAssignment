import React, { useState } from "react";
import { loginUser } from "../utils/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(username, otp);
      localStorage.setItem("token", data.token);
      navigate("/quotes");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="loginBackground">
      <div className="Container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputField">
            {/* <label htmlFor="username">Username:</label> */}
            <input
              type="text"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="inputField">
            {/* <label htmlFor="otp">OTP:</label> */}
            <input
              type="text"
              placeholder="otp"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
