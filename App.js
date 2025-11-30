import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";

import StudentDashboard from "./pages/StudentDashboard";
import StudentSubmit from "./pages/StudentSubmit";
import Profile from "./pages/Profile";

import AdminDashboard from "./pages/AdminDashboard";
import CreateAssignment from "./pages/CreateAssignment";
import AllSubmissions from "./pages/AllSubmissions";
import PendingReviews from "./pages/PendingReviews";
import ManageAssignments from "./pages/ManageAssignments";

export default function App() {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* PROTECTED LAYOUT ROUTES */}
      <Route path="/" element={<Layout />}>

        {/* STUDENT ROUTES */}
        <Route path="student" element={<StudentDashboard />} />
        <Route path="student/submit" element={<StudentSubmit />} />
        <Route path="student/profile" element={<Profile />} />

        {/* ADMIN ROUTES */}
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/create" element={<CreateAssignment />} />
        <Route path="admin/submissions" element={<AllSubmissions />} />
        <Route path="admin/pending" element={<PendingReviews />} />
        <Route path="admin/manage" element={<ManageAssignments />} />

      </Route>

      {/* CATCH ALL → go to login */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}
