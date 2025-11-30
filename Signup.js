import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // important

export default function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");

  const signup = () => {
    if (!username || !password) {
      setError("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u) => u.username === username)) {
      setError("User already exists!");
      return;
    }

    users.push({ username, password, role });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    navigate("/");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">

        <h2 className="brand">Create Account</h2>
        <p className="sub">Sign up to get started</p>

        {error && <div className="err">{error}</div>}

        <input
          className="input-box"
          placeholder="Choose Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="input-box"
          type="password"
          placeholder="Choose Password"
          value={password}
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

        <button className="btn-primary" onClick={signup}>Sign Up</button>

        <button className="btn-secondary" onClick={() => navigate("/")}>
          Already have an account? Login
        </button>

      </div>
    </div>
  );
}
