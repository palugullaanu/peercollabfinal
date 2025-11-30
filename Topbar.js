import React from "react";
import { useNavigate } from "react-router-dom";
import { getSession, clearSession } from "../lib/auth";

export default function Topbar() {
  const navigate = useNavigate();
  const user = getSession();

  function logout() {
    clearSession();
    navigate("/");
  }

  return (
    <div className="topbar">
      <div className="app-title">PeerCollab</div>

      <div className="top-actions">
        <div className="user-mini">
          <div className="name">{user?.username || "Guest"}</div>
          <div className="role">{user?.role}</div>
        </div>

        <button className="btn btn-ghost" onClick={() => navigate("/profile")}>Profile</button>
        <button className="btn btn-primary" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
