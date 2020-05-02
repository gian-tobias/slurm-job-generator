import React from "react";
import JobForm from "./JobForm";
import JobScript from "./JobScript";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handlePartitionClick = this.handlePartitionClick.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }
  handlePartitionClick(event) {
    const { name } = event.target;
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
  }
  render() {
    return (
      <div>
        <h2>Job Settings</h2>
        <div className="jobWrapper">
          <JobForm
            onChange={this.handleChange}
            handlePartitionClick={this.handlePartitionClick}
          />
          <JobScript job={this.state} />
        </div>
      </div>
    );
  }
}

export default Main;
