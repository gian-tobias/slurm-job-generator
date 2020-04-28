import React from "react";
import JobForm from "./JobForm";
import JobScript from "./JobScript";

function Main() {
  return (
    <div>
      <h2>Job Settings</h2>
      <div className="jobWrapper">
        <JobForm />
        <JobScript />
      </div>
    </div>
  );
}

export default Main;
