import React from "react";
import JobLine from "./JobLine";

function JobScript(props) {
  const PREFIX_TABLE = {
    jobName: "--job-name",
    nodes: "--nodes",
    ntasks: "--ntasks",
    ntasksNode: "--ntasks-per-node",
    partition: "--partition",
    qos: "--qos",
    memory: "--mem",
    output: "--output",
    error: "--error",
    email: "--mail-user",
    emailEvent: "--mail-type",
    nodelist: "--nodelist",
    jobArray: "--array",
    gpu: "--gres=gpu:",
    requeue: "--requeue",
  };

  const { job } = props;
  const keys = Object.keys(job);
  const renderScript = keys.map((key, index) => {
    console.log(job[key]);
    let jobValue = job[key];
    if (key === "emailEvent" && jobValue.length) {
      return (
        <JobLine
          key={index}
          prefix={PREFIX_TABLE[key]}
          value={jobValue.join(",").toUpperCase()}
        />
      );
    } else if (jobValue.length) {
      console.log(jobValue.length);
      return (
        <JobLine key={index} prefix={PREFIX_TABLE[key]} value={jobValue} />
      );
    }
    return null;
  });

  // const values = Object.entries(props.job).map((key) => {
  //   if (key[1]) return <JobLine prefix={PREFIX_TABLE[key[0]]} value={key[1]} />;
  //   return null;
  // });

  return (
    <div className="jobContainer jobScript">
      <div className="titleBar">
        <p>gian-thinkpad</p>
      </div>
      <div className="helpBar">
        <p>File</p>
      </div>
      <pre>#!/bin/bash</pre>
      {renderScript}
      {/* <JobLine value={props.job.jobName} />
      <JobLine value={props.job.nodes} /> */}
    </div>
  );
}

export default JobScript;
