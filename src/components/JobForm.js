import React from "react";

function JobForm(props) {
  return (
    <div className="jobContainer jobForm">
      <p>gian-thinkpad</p>
      <div>
        <label htmlFor="jobName">Job name</label>
        <input type="text" name="jobName" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="nodes">Number of nodes</label>
        <input type="text" name="nodes" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="ntasks">Processes per node</label>
        <input type="text" name="ntasks" onChange={props.onChange} />
      </div>
    </div>
  );
}

export default JobForm;
