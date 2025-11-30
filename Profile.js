import React, { useState } from "react";
import { getSession, saveSession } from "../lib/auth";

export default function Profile(){
  const s = getSession() || {};
  const [name,setName] = useState(s.username || "");
  const [msg,setMsg] = useState("");

  function save(){
    const u = {...s, username:name};
    saveSession(u);
    setMsg("Saved");
  }

  return (
    <div>
      <div className="h1">Profile</div>
      <div className="card" style={{maxWidth:520, marginTop:12}}>
        <label>Username</label>
        <input value={name} onChange={e=>setName(e.target.value)} />
        <label style={{marginTop:10}}>Role</label>
        <input value={s.role} disabled />
        <div style={{marginTop:12}}>
          <button className="btn btn-primary" onClick={save}>Save</button>
          {msg && <span style={{marginLeft:12,color:"green"}}>{msg}</span>}
        </div>
      </div>
    </div>
  );
}
