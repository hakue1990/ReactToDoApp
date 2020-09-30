import React from "react";
import ListItems from "./ListItems";
import "./App.css";

class App extends React.Component {
  state = {
    tasks: [],
    currentTask: {
      text: "",
      key: "",
    },
  };
  handleInput = (e) => {
    this.setState({
      currentTask: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };
  addItem = (e) => {
    e.preventDefault();
    const newTask = this.state.currentTask;
    if (newTask !== "") {
      const items = [...this.state.tasks, newTask];
      this.setState({
        tasks: items,
        currentTask: {
          text: "",
          key: "",
        },
      });
    }
  };
  render() {
    return (
      <header>
        <div className="App">
          <form className="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="enter text"
              value={this.state.currentTask.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add Task</button>
            <ListItems items={this.state.tasks} />
          </form>
        </div>
      </header>
    );
  }
}

export default App;
