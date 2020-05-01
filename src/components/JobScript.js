import React from "react";
import JobLine from "./JobLine";

function JobScript(props) {
  const PREFIX_TABLE = {
    jobName: "--job-name",
    nodes: "--node",
    ntasks: "--ntasks-per-node",
  };
  console.log(props.job);
  const values = Object.entries(props.job).map((key) => {
    if (key[1]) return <JobLine prefix={PREFIX_TABLE[key[0]]} value={key[1]} />;
    return null;
  });
  console.log(values);
  return (
    <div className="jobContainer jobScript">
      <div className="titleBar">
        <p>gian-thinkpad</p>
      </div>
      <div className="helpBar">
        <p>File</p>
      </div>
      <p>#!/bin/bash</p>
      {values}
      {/* <JobLine value={props.job.jobName} />
      <JobLine value={props.job.nodes} /> */}
    </div>
  );
}

export default JobScript;
