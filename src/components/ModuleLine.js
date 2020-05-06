import React from "react";

function ModuleLine(props) {
  // return <React.Fragment>module load {props.value}</React.Fragment>;
  return (
    <React.Fragment>
      module load {props.value}
      <br />
    </React.Fragment>
  );
}

export default ModuleLine;
