import React from "react";
import JobForm from "./JobForm";
import JobScript from "./JobScript";
import ModuleForm from "./ModuleForm";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partition: "",
      qos: "",
      jobName: "",
      email: "",
      emailEvent: [],
      isSbatch: true,
      modules: [],
      isModulesCpu: true,
    };
    this.check = "\u00a0";
    this.sbatchHide = "";
    this.moduleHide = "hidden";
    this.handleChange = this.handleChange.bind(this);
    this.handlePartitionClick = this.handlePartitionClick.bind(this);
    this.handleGigClick = this.handleGigClick.bind(this);
    this.handleEmailClick = this.handleEmailClick.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.addModulefiles = this.addModulefiles.bind(this);
    this.changeView = this.changeView.bind(this);
    this.toggleCpuModules = this.toggleCpuModules.bind(this);
    this.toggleGpuModules = this.toggleGpuModules.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }
  handleClickActive(event) {
    let buttons = this.inputEl.current.children;
    for (let button of buttons) {
      button.className = "btn";
    }
    event.target.className += " btnActive";
  }
  handleGigClick(event) {
    let memory = this.state.memory.slice();
    let btnCss = "btn";
    if (!memory) {
      return null;
    } else if (memory.includes("G")) {
      memory = memory.slice(0, -1);
    } else {
      memory = memory + "G";
      btnCss += " btnActive";
    }
    event.target.className = btnCss;
    this.setState({ memory: memory });
  }
  handlePartitionClick(event) {
    const { name, parentElement } = event.target;
    const buttons = parentElement.children;
    for (let button of buttons) {
      button.className = "btn";
    }
    if (this.state.partition && this.state.partition === name) {
      return this.setState({ partition: "", qos: "" });
    }
    event.target.className += " btnActive";
    let qos;
    switch (name) {
      case "debug":
        qos = "240c-1h_debug";
        break;
      case "batch":
        qos = "240c-1h_batch";
        break;
      case "gpu":
        qos = "12c-1h_2gpu";
        break;
      case "serial":
        qos = "84c-1d_serial";
        break;
      default:
        break;
    }
    this.setState({ partition: name, qos: qos });
    //this.handleClickActive(event);
  }
  handleEmailClick(event) {
    const { name, parentElement } = event.target;
    const stateEmail = this.state.emailEvent;
    let emailEvent;

    // CSS
    const buttons = parentElement.children;

    if (name === "all" && !stateEmail.includes(name)) {
      // if selection is "all" and "all" does not exist
      emailEvent = stateEmail.slice(stateEmail.length).concat(name);
      for (let button of buttons) {
        button.className = "btn btnActive";
      }
    } else if (name === "all") {
      // selection is all and it exists
      emailEvent = stateEmail.slice(stateEmail.length);
      for (let button of buttons) {
        button.className = "btn";
      }
    } else if (stateEmail.includes("all")) {
      // array contains all
      emailEvent = stateEmail.slice();
    } else if (stateEmail.includes(name)) {
      // selection already exists
      emailEvent = stateEmail.slice().filter((email) => email !== name);
      event.target.className = "btn";
    } else {
      // selection doesn't exist
      emailEvent = stateEmail.slice().concat(name);
      event.target.className = "btn btnActive";
    }
    this.setState({ emailEvent: emailEvent });
  }
  handleCheckClick(event) {
    if (!this.state.requeue) {
      this.setState({ requeue: true });
      event.target.className = "checkbox btnActive";
      this.check = "\u2713";
    } else {
      event.target.className = "checkbox";
      this.setState({ requeue: false });
      this.check = "\u00a0";
    }
  }

  addModulefiles(event) {
    const { name } = event.target;
    let modules = this.state.modules.slice();
    if (modules.includes(name)) {
      modules = modules.filter((module) => module !== name);
      // event.target.className = "btn";
      this.setState({ modules: modules });
    } else {
      // event.target.className = "btn btnActive";
      this.setState({ modules: modules.concat(name) });
    }
  }

  changeView() {
    let isSbatch = this.state.isSbatch;
    this.setState({ isSbatch: !isSbatch });
    if (!isSbatch) {
      this.moduleHide = "hidden";
      this.sbatchHide = "";
    } else {
      this.moduleHide = "";
      this.sbatchHide = "hidden";
    }
  }

  toggleCpuModules() {
    this.setState({ isModulesCpu: true });
  }

  toggleGpuModules() {
    this.setState({ isModulesCpu: false });
  }

  render() {
    return (
      <div>
        <h2>Job Settings</h2>
        <div className="jobWrapper">
          {/* {this.state.isSbatch ? (
            <JobForm
              onChange={this.handleChange}
              handlePartitionClick={this.handlePartitionClick}
              handleGigClick={this.handleGigClick}
              handleEmailClick={this.handleEmailClick}
              handleEmailAllClick={this.handleEmailAllClick}
              handleCheckClick={this.handleCheckClick}
              check={this.check}
              changeView={this.changeView}
              hidden="hidden"
            />
          ) : (
            <ModuleForm
              changeView={this.changeView}
              addModulefiles={this.addModulefiles}
            />
          )} */}
          <JobForm
            onChange={this.handleChange}
            handlePartitionClick={this.handlePartitionClick}
            handleGigClick={this.handleGigClick}
            handleEmailClick={this.handleEmailClick}
            handleEmailAllClick={this.handleEmailAllClick}
            handleCheckClick={this.handleCheckClick}
            check={this.check}
            changeView={this.changeView}
            hidden={this.sbatchHide}
          />
          <ModuleForm
            changeView={this.changeView}
            addModulefiles={this.addModulefiles}
            hidden={this.moduleHide}
            modules={this.state.modules}
            isModulesCpu={this.state.isModulesCpu}
            toggleCpuModules={this.toggleCpuModules}
            toggleGpuModules={this.toggleGpuModules}
          />
          <JobScript className="hidden" job={this.state} />
        </div>
      </div>
    );
  }
}

export default Main;
