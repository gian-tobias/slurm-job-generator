import React from "react";
import cpuModules from "./cpuModules";
import ModuleButton from "./ModuleButton";

export default function ModuleForm(props) {
  const cpuModuleArray = cpuModules.cpuModules;
  // console.log(cpuModuleArray.length);
  // const renderModules = () => {
  //   for (let cpuModule of cpuModuleArray) {
  //     return <ModuleButton module={cpuModule} />;
  //   }
  // };
  const renderModules = cpuModuleArray.map((key, index) => {
    let cpuModule = key;
    return (
      <ModuleButton
        key={index}
        module={cpuModule}
        addModulefiles={props.addModulefiles}
      />
    );
  });
  return (
    <div className={"jobContainer jobForm " + props.hidden}>
      <div className="configTitle">
        <h3>Module Environments</h3>
        <button className="btn viewBtn" onClick={props.changeView}>
          SBATCH Config
        </button>
      </div>
      {renderModules}
    </div>
  );
}
