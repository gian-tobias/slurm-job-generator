import React from "react";
import JobLine from "./JobLine";

function JobScript(props) {
  return (
    <div className="jobContainer jobScript">
      <div className="titleBar">
        <p>gian-thinkpad</p>
      </div>
      <div className="helpBar">
        <p>File</p>
      </div>
      <JobLine value={props.jobName} />
    </div>
  );
}

export default JobScript;
