import React from "react";
import { getSubmissions } from "../lib/storage";

export default function AllSubmissions(){
  const subs = getSubmissions();

  return (
    <div>
      <div className="h1">All Submissions</div>
      <div className="card" style={{marginTop:12}}>
        {subs.length === 0 && <p>No submissions</p>}
        {subs.map(s => (
          <div className="list-item" key={s.id}>
            <div>
              <div style={{fontWeight:700}}>{s.assignmentTitle}</div>
              <div style={{color:"var(--muted)"}}>{s.title} — {s.student}</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div>{s.status}</div>
              <div style={{color:"var(--muted)"}}>Marks: {s.marks ?? "-"}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
