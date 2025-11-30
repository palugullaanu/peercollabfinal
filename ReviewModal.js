import React from "react";

export default function ReviewModal({ open, submission, onClose, onSave }) {
  const [marks, setMarks] = React.useState("");
  const [remarks, setRemarks] = React.useState("");

  React.useEffect(() => {
    if (submission) {
      setMarks(submission.marks ?? "");
      setRemarks(submission.remarks ?? "");
    }
  }, [submission]);

  if (!open) return null;
  return (
    <div className="modal-bg">
      <div className="modal-card">
        <h3>Review — {submission?.assignmentTitle}</h3>

        <label>Marks</label>
        <input value={marks} onChange={(e) => setMarks(e.target.value)} />

        <label style={{ marginTop:12 }}>Remarks</label>
        <textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} />

        <div style={{ display:"flex", gap:10, marginTop:12 }}>
          <button className="btn btn-primary" onClick={() => onSave({ marks, remarks })}>Save</button>
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
