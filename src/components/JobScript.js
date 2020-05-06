import React from "react";
import JobLine from "./JobLine";
import ModuleLine from "./ModuleLine";

function JobScript(props) {
  const PREFIX_TABLE = {
    jobName: "--job-name=",
    nodes: "--nodes=",
    ntasks: "--ntasks=",
    ntasksNode: "--ntasks-per-node=",
    partition: "--partition=",
    qos: "--qos=",
    memory: "--mem=",
    output: "--output=",
    error: "--error=",
    email: "--mail-user=",
    emailEvent: "--mail-type=",
    nodelist: "--nodelist=",
    jobArray: "--array=",
    gpu: "--gres=gpu:",
    requeue: "--requeue",
  };

  const { job } = props;
  const keys = Object.keys(job);

  const renderSbatch = keys.map((key, index) => {
    let jobValue = job[key];
    if (key === "isSbatch" || key === "modules") {
      return null;
    } else if (key === "emailEvent" && jobValue.length) {
      return (
        <JobLine
          key={index}
          prefix={PREFIX_TABLE[key]}
          value={jobValue.join(",").toUpperCase()}
        />
      );
    } else if (key === "requeue" && jobValue === true) {
      return <JobLine key={index} prefix={PREFIX_TABLE[key]} />;
    } else if (jobValue.length) {
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
  const renderModule = job.modules.map((value, index) => {
    return <ModuleLine key={index} value={value} />;
  });
  return (
    <div className="jobContainer jobScript">
      <div className="titleBar">
        <p>Slurm Job Template</p>
      </div>
      <div className="helpBar">
        <p>Copy this template to the saliksik cluster</p>
      </div>
      <pre>
        #!/bin/bash
        <br />
        {renderSbatch}
        {/* <JobLine value={props.job.jobName} />
      <JobLine value={props.job.nodes} /> */}
        <br />
        {renderModule}
      </pre>
    </div>
  );
}

export default JobScript;
