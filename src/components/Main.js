import React from "react";
import JobForm from "./JobForm";
import JobScript from "./JobScript";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobName: "Job name state",
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ jobName: event.target.value });
  }
  render() {
    return (
      <div>
        <h2>Job Settings</h2>
        <div className="jobWrapper">
          <JobForm jobName={this.state.jobName} onChange={this.handleChange} />
          <JobScript jobName={this.state.jobName} />
        </div>
      </div>
    );
  }
}

export default Main;
