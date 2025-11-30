import React from "react";
import { getAssignments, getSubmissions } from "../lib/storage";

export default function AdminDashboard(){
  const a = getAssignments();
  const subs = getSubmissions();
  const pending = subs.filter(s=>s.status==="Pending").length;

  return (
    <div>
      <div className="h1">Admin Dashboard</div>

      <div className="stats" style={{marginTop:12}}>
        <div className="stat card">
          <div className="label">Assignments</div>
          <div className="value">{a.length}</div>
        </div>
        <div className="stat card">
          <div className="label">Submissions</div>
          <div className="value">{subs.length}</div>
        </div>
        <div className="stat card">
          <div className="label">Pending Reviews</div>
          <div className="value">{pending}</div>
        </div>
      </div>

      <div className="card" style={{marginTop:18}}>
        <h3>Recent Submissions</h3>
        {subs.length === 0 && <p>No submissions yet</p>}
        {subs.map(s => (
          <div className="list-item" key={s.id}>
            <div>
              <div style={{fontWeight:700}}>{s.assignmentTitle}</div>
              <div style={{color:"var(--muted)"}}>{s.title} — {s.student}</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{fontWeight:700}}>{s.status}</div>
              <div style={{color:"var(--muted)"}}>Marks: {s.marks ?? "-"}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
