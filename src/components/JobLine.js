import React from "react";

function JobLine(props) {
  return (
    <pre>
      #SBATCH {props.prefix}
      {props.value}
    </pre>
  );
}

export default JobLine;
