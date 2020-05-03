import React from "react";
import JobForm from "./JobForm";
import JobScript from "./JobScript";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partition: "",
      qos: "",
      jobName: "",
      email: "",
      emailEvent: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePartitionClick = this.handlePartitionClick.bind(this);
    this.handleGigClick = this.handleGigClick.bind(this);
    this.handleEmailClick = this.handleEmailClick.bind(this);
    this.handleEmailAllClick = this.handleEmailAllClick.bind(this);
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
    const { name } = event.target;
    const stateEmail = this.state.emailEvent;
    let emailEvent;

    if (name === "all" && !stateEmail.includes(name)) {
      // if selection is "all" and "all" does not exist
      emailEvent = stateEmail.slice(stateEmail.length).concat(name);
    } else if (name === "all") {
      // selection is all and it exists
      emailEvent = stateEmail.slice(stateEmail.length);
    } else if (stateEmail.includes("all")) {
      // array contains all
      emailEvent = stateEmail.slice();
    } else if (stateEmail.includes(name)) {
      // selection already exists
      emailEvent = stateEmail.slice().filter((email) => email !== name);
    } else {
      // selection doesn't exist
      emailEvent = stateEmail.slice().concat(name);
    }
    this.setState({ emailEvent: emailEvent });
    // const emailEvent =
    //   stateEmail.includes("all") && name !== "all"
    //     ? stateEmail.slice(stateEmail.length)
    //     : stateEmail.slice();
    // console.log("email event", emailEvent);
    // if (emailEvent.includes(name)) {
    //   let emailArray = emailEvent.filter((email) => email !== name);
    //   console.log("emailArray", emailArray);
    //   return this.setState({ emailEvent: emailArray });
    // }
    // this.setState({ emailEvent: emailEvent.concat(name) });
  }
  handleEmailAllClick(event) {
    const { name } = event.target;
    const emailEvent = this.state.emailEvent.slice(
      this.state.emailEvent.length
    );
    this.setState({ emailEvent: emailEvent.concat([name]) });
  }
  render() {
    return (
      <div>
        <h2>Job Settings</h2>
        <div className="jobWrapper">
          <JobForm
            onChange={this.handleChange}
            handlePartitionClick={this.handlePartitionClick}
            handleGigClick={this.handleGigClick}
            handleEmailClick={this.handleEmailClick}
            handleEmailAllClick={this.handleEmailAllClick}
          />
          <JobScript job={this.state} />
        </div>
      </div>
    );
  }
}

export default Main;
