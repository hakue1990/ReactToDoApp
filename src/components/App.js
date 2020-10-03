import React from "react";
import "./App.css";
import "./ListItems";

import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends React.Component {
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
  addItem = () => {
    const tasks = [...this.state.tasks];
    tasks.push(this.state.currentTask);
    tasks.reverse();
    if (this.state.currentTask.text !== "") {
      this.setState({
        currentTask: {
          text: "",
          id: "",
        },
        tasks,
      });
    }
  };
  deleteItem = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  };
  render() {
    return (
      <div className="box">
        <h1>TODO APP</h1>
        <div className="addTaskBox">
          <input
            value={this.state.currentTask.text}
            type="text"
            placeholder="add task"
            onChange={this.handleInput}
          />
          <button onClick={this.addItem}>Add Task</button>
        </div>
        <ListItems
          tasks={this.state.tasks}
          key={this.state.currentTask.id}
          delete={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
