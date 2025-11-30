import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getSession } from "../lib/auth";

export default function Sidebar() {
  const session = getSession();
  const loc = useLocation();

  const isActive = (p) => (loc.pathname === p ? "active" : "");

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo">PC</div>
        <div>
          <div className="brand-title">PeerCollab</div>
          <div className="brand-sub">Peer review system</div>
        </div>
      </div>

      <nav className="nav">
        {session?.role === "student" && (
          <>
            <Link className={isActive("/student")} to="/student">Dashboard</Link>
            <Link className={isActive("/student/submit")} to="/student/submit">Submit Assignment</Link>
            <Link className={isActive("/student/status")} to="/student/status">Submission Status</Link>
            <Link className={isActive("/student/upcoming")} to="/student/upcoming">All Assignment</Link>
            <Link className={isActive("/profile")} to="/profile">Profile</Link>
          </>
        )}

        {session?.role === "admin" && (
          <>
            <Link className={isActive("/admin")} to="/admin">Admin Dashboard</Link>
            <Link className={isActive("/admin/create")} to="/admin/create">Create Assignment</Link>
            <Link className={isActive("/admin/submissions")} to="/admin/submissions">All Submissions</Link>
            <Link className={isActive("/admin/pending")} to="/admin/pending">Pending Reviews</Link>
            <Link className={isActive("/admin/manage")} to="/admin/manage">Manage Assignments</Link>
            <Link className={isActive("/profile")} to="/profile">Profile</Link>
          </>
        )}
      </nav>

      <div className="sidebar-footer">© PeerCollab</div>
    </aside>
  );
}
