import React from "react";

function JobLine(props) {
  return (
    <React.Fragment>
      #SBATCH {props.prefix}
      {props.value}
      <br />
    </React.Fragment>
  );
}

export default JobLine;
