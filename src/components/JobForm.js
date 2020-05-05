import React from "react";

function JobForm(props) {
  return (
    <div className={"jobContainer jobForm " + props.hidden}>
      <div>
        <div className="configTitle">
          <h3>SBATCH Configuration</h3>
          <button className="btn viewBtn" onClick={props.changeView}>
            Load Modules
          </button>
        </div>

        <label htmlFor="partition" className="inputLabel">
          Partition
        </label>
        <div className="buttonGrp">
          <button
            name="debug"
            className="btn"
            onClick={props.handlePartitionClick}
          >
            Debug
          </button>
          <button
            name="batch"
            className="btn"
            onClick={props.handlePartitionClick}
          >
            Batch
          </button>
          <button
            name="serial"
            className="btn"
            onClick={props.handlePartitionClick}
          >
            Serial
          </button>
          <button
            name="gpu"
            className="btn"
            onClick={props.handlePartitionClick}
          >
            GPU
          </button>
        </div>
      </div>
      <div>
        <label htmlFor="jobName" className="inputLabel">
          Job name
        </label>
        <input type="text" name="jobName" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="email" className="inputLabel">
          Job Alert Email
        </label>
        <input type="text" name="email" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="emailEvent" className="inputLabel">
          Email Event
        </label>
        <div className="buttonGrp">
          <button name="begin" className="btn" onClick={props.handleEmailClick}>
            Begin
          </button>
          <button name="end" className="btn" onClick={props.handleEmailClick}>
            End
          </button>
          <button
            name="requeue"
            className="btn"
            onClick={props.handleEmailClick}
          >
            Requeue
          </button>
          <button name="fail" className="btn" onClick={props.handleEmailClick}>
            Fail
          </button>
          <button name="all" className="btn" onClick={props.handleEmailClick}>
            All
          </button>
        </div>
      </div>
      <div>
        <label htmlFor="requeue">Requeue</label>
        <button
          name="requeue"
          className="checkbox"
          onClick={props.handleCheckClick}
        >
          {props.check}
        </button>
      </div>
      <div>
        <label htmlFor="nodes" className="inputLabel">
          Number of nodes
        </label>
        <input type="text" name="nodes" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="ntasksNode" className="inputLabel">
          Processes per node
        </label>
        <input type="text" name="ntasksNode" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="ntasks" className="inputLabel">
          Total Processes (across all nodes)
        </label>
        <input type="text" name="ntasks" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="memory" className="inputLabel">
          RAM per node (default: MB)
        </label>
        <div className="memBtn">
          <input type="text" name="memory" onChange={props.onChange} />
          <button className="btn" onClick={props.handleGigClick}>
            GB
          </button>
        </div>
      </div>
      <div>
        <label htmlFor="output" className="inputLabel">
          Standard Output File
        </label>
        <input type="text" name="output" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="error" className="inputLabel">
          Standard Error File
        </label>
        <input type="text" name="error" onChange={props.onChange} />
      </div>

      <div>
        <label htmlFor="nodelist" className="inputLabel">
          Specific Node to Run
        </label>
        <input type="text" name="nodelist" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="gpu" className="inputLabel">
          Number of GPU devices
        </label>
        <input type="text" name="gpu" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="jobArray" className="inputLabel">
          Job Array
        </label>
        <input type="text" name="jobArray" onChange={props.onChange} />
      </div>
    </div>
  );
}

export default JobForm;
