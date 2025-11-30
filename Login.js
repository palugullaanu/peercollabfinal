import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveSession } from "../lib/auth";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please enter username & password");
      return;
    }
    saveSession({ username, role });
    navigate(role === "admin" ? "/admin" : "/student");
  };

  const demoLogin = () => {
    saveSession({ username: "DemoUser", role: "student" });
    navigate("/student");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="brand">PeerCollab</h1>
        <p className="sub">Premium peer review & collaboration</p>

        {error && <div className="err">{error}</div>}

        <input
          className="input-box"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="input-box"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="input-box"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <button className="btn-primary" onClick={handleLogin}>
          Login
        </button>
        <button
  className="btn-secondary"
  onClick={() => navigate("/signup")}
>
  Don't have an account? Sign Up
</button>

        
      </div>
    </div>
  );
}
