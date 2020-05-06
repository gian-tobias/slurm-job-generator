import React from "react";
import cpuModules from "./cpuModules";
import gpuModules from "./gpuModules";
import ModuleButton from "./ModuleButton";

export default function ModuleForm(props) {
  const cpuModuleArray = cpuModules.cpuModules;
  const gpuModuleArray = gpuModules.gpuModules;
  // console.log(cpuModuleArray.length);
  // const renderModules = () => {
  //   for (let cpuModule of cpuModuleArray) {
  //     return <ModuleButton module={cpuModule} />;
  //   }
  // };
  const renderCpuModules = cpuModuleArray.map((key, index) => {
    let cpuModule = key;
    return (
      <ModuleButton
        key={index}
        module={cpuModule}
        addModulefiles={props.addModulefiles}
        modules={props.modules}
      />
    );
  });

  const renderGpuModules = gpuModuleArray.map((key, index) => {
    let gpuModule = key;
    return (
      <ModuleButton
        key={index}
        module={gpuModule}
        addModulefiles={props.addModulefiles}
        modules={props.modules}
      />
    );
  });

  let cpuBtn = "btn",
    gpuBtn = "btn";
  if (props.isModulesCpu) {
    cpuBtn += " btnActive";
    gpuBtn = "btn";
  } else {
    gpuBtn += " btnActive";
    cpuBtn = "btn";
  }
  return (
    <div className={"jobContainer jobForm " + props.hidden}>
      <div className="configTitle">
        <h3>Module Environments</h3>
        <button className="btn viewBtn" onClick={props.changeView}>
          SBATCH Config
        </button>
      </div>
      <div className="btnGrp">
        <button className={cpuBtn} onClick={props.toggleCpuModules}>
          Show CPU Modules
        </button>
        |&nbsp;
        <button className={gpuBtn} onClick={props.toggleGpuModules}>
          Show GPU Modules
        </button>
      </div>
      <hr />
      {props.isModulesCpu ? renderCpuModules : renderGpuModules}
    </div>
  );
}
