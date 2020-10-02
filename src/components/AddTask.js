import React, { Component } from "react";

class AddTask extends Component {
  state = {
    tasks: [],
    currentTask: {
      text: "",
      id: "",
    },
  };
  handleInput = (e) => {
    this.setState({
      currentTask: {
        text: e.target.value,
        id: Date.now(),
      },
    });
  };
  render() {
    return (
      <React.Fragment>
        <label htmlFor="addTask">
          <input type="text" id="addTask" onChange={this.handleInput} />
          <button>Add Task</button>
        </label>
      </React.Fragment>
    );
  }
}

export default AddTask;
