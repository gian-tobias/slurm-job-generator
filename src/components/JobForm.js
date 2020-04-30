import React from "react";

function JobForm(props) {
  return (
    <div className="jobContainer jobForm">
      <p>gian-thinkpad</p>
      <label htmlFor="jobName">Job Name:</label>
      <input type="text" name="jobName" onChange={props.onChange} />
    </div>
  );
}

export default JobForm;
