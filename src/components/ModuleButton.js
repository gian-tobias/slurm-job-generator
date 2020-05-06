import React from "react";

export default function ModuleButton(props) {
  let buttonClass = "btn";
  if (props.modules.includes(props.module)) {
    buttonClass += " btnActive";
  }
  return (
    <button
      name={props.module}
      className={buttonClass}
      onClick={props.addModulefiles}
    >
      {props.module}
    </button>
  );
}
