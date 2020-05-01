import React from "react";
import JobForm from "./JobForm";
import JobScript from "./JobScript";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div>
        <h2>Job Settings</h2>
        <div className="jobWrapper">
          <JobForm onChange={this.handleChange} />
          <JobScript job={this.state} />
        </div>
      </div>
    );
  }
}

export default Main;
