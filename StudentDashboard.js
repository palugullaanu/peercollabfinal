import React from "react";
import { getAssignments, getSubmissions } from "../lib/storage";
import { getSession } from "../lib/auth";

export default function StudentDashboard(){
  const user = getSession();
  const assignments = getAssignments();
  const submissions = getSubmissions().filter(s => s.student === user.username);

  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div>
          <div className="h1">Student Dashboard</div>
          <div className="kv">Welcome, {user?.username}</div>
        </div>
      </div>

      <div className="stats" style={{marginTop:18}}>
        <div className="stat card">
          <div className="label">Total Assignments</div>
          <div className="value">{assignments.length}</div>
        </div>
        <div className="stat card">
          <div className="label">Submitted</div>
          <div className="value">{submissions.length}</div>
        </div>
        <div className="stat card">
          <div className="label">Pending</div>
          <div className="value">{Math.max(0, assignments.length - submissions.length)}</div>
        </div>
      </div>

      <div className="card" style={{marginTop:18}}>
        <h3>Your Submissions</h3>
        {submissions.length === 0 ? <p>No submissions yet</p> :
          submissions.map(s => (
            <div className="list-item" key={s.id}>
              <div>
                <div style={{fontWeight:700}}>{s.assignmentTitle}</div>
                <div style={{color:"var(--muted)"}}>{s.title}</div>
              </div>
              <div style={{textAlign:"right"}}>
                <div style={{fontWeight:700}}>{s.status}</div>
                <div style={{color:"var(--muted)"}}>Marks: {s.marks ?? "-"}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
