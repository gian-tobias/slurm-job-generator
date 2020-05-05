import React from "react";

export default function ModuleButton(props) {
  return (
    <button name={props.module} className="btn" onClick={props.addModulefiles}>
      {props.module}
    </button>
  );
}
