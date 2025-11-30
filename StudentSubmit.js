import React, { useState } from "react";
import { getAssignments, saveSubmission } from "../lib/storage";

export default function StudentSubmit() {
  const assignments = getAssignments();

  const [assignment, setAssignment] = useState("");
  const [title, setTitle] = useState("");
  const [report, setReport] = useState("");
  const [file, setFile] = useState(null);

  const submit = () => {
    if (!assignment || !title) {
      alert("Please fill all fields");
      return;
    }

    saveSubmission({
      assignment,
      title,
      report,
      fileName: file ? file.name : "",
      status: "Pending",
      marks: null,
    });

    alert("Submission successful!");

    setAssignment("");
    setTitle("");
    setReport("");
    setFile(null);
  };

  return (
    <div className="page-wrapper">
      <h2 className="page-title">Submit Assignment</h2>

      <div className="card">
        
        {/* Choose assignment */}
        <label className="label">Choose Assignment</label>
        <select
          className="input"
          value={assignment}
          onChange={(e) => setAssignment(e.target.value)}
        >
          <option value="">Select</option>
          {assignments.map((a) => (
            <option key={a.id} value={a.title}>
              {a.title}
            </option>
          ))}
        </select>

        {/* Submission Title */}
        <label className="label">Submission Title</label>
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Report Text */}
        <label className="label">Report Submission</label>
        <textarea
          className="textarea"
          value={report}
          onChange={(e) => setReport(e.target.value)}
        ></textarea>

        {/* File Upload */}
        <label className="label">Upload File</label>
        <input
          type="file"
          className="input"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button className="btn-primary submit-btn" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
}
