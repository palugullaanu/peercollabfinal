import React, { useState } from "react";
import { getAssignments, saveAssignments } from "../lib/storage";


export default function CreateAssignment(){
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [msg,setMsg] = useState("");

  function create(){
    if(!title || !desc){ setMsg("Please fill fields"); return; }
    const list = getAssignments();
    list.push({ id: Date.now().toString(), title, desc });
    saveAssignments(list);
    setMsg("Created");
    setTitle(""); setDesc("");
  }

  return (
    <div>
      <div className="h1">Create Assignment</div>
      <div className="card" style={{maxWidth:720, marginTop:12}}>
        <label>Title</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} />
        <label style={{marginTop:8}}>Description</label>
        <textarea value={desc} onChange={e=>setDesc(e.target.value)} />
        <div style={{marginTop:12}}>
          <button className="btn btn-primary" onClick={create}>Create</button>
          {msg && <span style={{marginLeft:12,color:"green"}}>{msg}</span>}
        </div>
      </div>
    </div>
  );
}
