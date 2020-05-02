import React from "react";

function JobForm(props) {
  return (
    <div className="jobContainer jobForm">
      <p>gian-thinkpad</p>
      <div>
        <label htmlFor="partition">Partition</label>
        <div className="buttonGrp">
          <button name="debug" onClick={props.handlePartitionClick}>
            Debug
          </button>
          <button name="batch" onClick={props.handlePartitionClick}>
            Batch
          </button>
          <button name="serial" onClick={props.handlePartitionClick}>
            Serial
          </button>
          <button name="gpu" onClick={props.handlePartitionClick}>
            GPU
          </button>
        </div>
      </div>
      <div>
        <label htmlFor="jobName">Job name</label>
        <input type="text" name="jobName" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="nodes">Number of nodes</label>
        <input type="text" name="nodes" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="ntasksNode">Processes per node</label>
        <input type="text" name="ntasksNode" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="ntasks">Total Processes (across all nodes)</label>
        <input type="text" name="ntasks" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="memory">RAM per node</label>
        <input type="text" name="memory" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="output">Standard Output File</label>
        <input type="text" name="output" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="error">Standard Error File</label>
        <input type="text" name="error" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="email">Job Alert Email</label>
        <input type="text" name="email" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="emailEvent">
          Email Event (BEGIN, END, REQUEUE, ALL)
        </label>
        <input type="text" name="emailEvent" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="nodelist">Specific Node to Run</label>
        <input type="text" name="nodelist" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="gpu">Number of GPU devices</label>
        <input type="text" name="gpu" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="jobArray">Job Array</label>
        <input type="text" name="jobArray" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="requeue">Requeue</label>
        <input type="text" name="requeue" onChange={props.onChange} />
      </div>
    </div>
  );
}

export default JobForm;
