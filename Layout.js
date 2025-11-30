import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { getSession } from "../lib/auth";

export default function Layout() {
  const session = getSession();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!session) navigate("/");
  }, [session, navigate]);

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main">
        <Topbar />
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
