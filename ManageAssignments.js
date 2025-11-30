import React, { useState } from "react";
import { getAssignments, saveAssignments } from "../lib/storage";

export default function ManageAssignments(){
  const [list, setList] = useState(getAssignments());

  function del(id){
    const updated = list.filter(x=>x.id !== id);
    saveAssignments(updated);
    setList(updated);
  }

  return (
    <div>
      <div className="h1">Manage Assignments</div>
      <div className="card" style={{marginTop:12}}>
        {list.length === 0 && <p>No assignments</p>}
        {list.map(a=>(
          <div className="list-item" key={a.id}>
            <div>
              <div style={{fontWeight:700}}>{a.title}</div>
              <div style={{color:"var(--muted)"}}>{a.desc}</div>
            </div>
            <div>
              <button className="btn btn-ghost" onClick={()=>del(a.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
