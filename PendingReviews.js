import React, { useState } from "react";
import { getSubmissions, saveSubmissions } from "../lib/storage";
import ReviewModal from "../components/ReviewModal";

export default function PendingReviews(){
  const [subs, setSubs] = useState(getSubmissions().filter(s=>s.status==="Pending"));
  const [editing, setEditing] = useState(null);

  function open(s){ setEditing(s); }
  function close(){ setEditing(null); }

  function saveReview({marks, remarks}){
    const all = getSubmissions().map(x=>{
      if(x.id === editing.id) return {...x, marks, remarks, status:"Reviewed"};
      return x;
    });
    saveSubmissions(all);
    setSubs(all.filter(s=>s.status==="Pending"));
    setEditing(null);
  }

  return (
    <div>
      <div className="h1">Pending Reviews</div>
      <div className="card" style={{marginTop:12}}>
        {subs.length === 0 && <p>No pending submissions</p>}
        {subs.map(s => (
          <div className="list-item" key={s.id}>
            <div>
              <div style={{fontWeight:700}}>{s.assignmentTitle}</div>
              <div style={{color:"var(--muted)"}}>{s.title} — {s.student}</div>
            </div>
            <div>
              <button className="btn btn-primary" onClick={()=>open(s)}>Review</button>
            </div>
          </div>
        ))}
      </div>

      <ReviewModal open={!!editing} submission={editing} onClose={close} onSave={saveReview} />
    </div>
  );
}
