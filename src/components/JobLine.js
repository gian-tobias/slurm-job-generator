import React from "react";

function JobLine(props) {
  return (
    <p>
      {props.prefix}={props.value}
    </p>
  );
}

export default JobLine;
