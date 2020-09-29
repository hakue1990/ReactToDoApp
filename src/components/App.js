import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    tasks: [{ id: 0, text: "zagrać w Wiedźmina 3" }, {}],
  };
  render() {
    return (
      <header>
        <div className="App">
          <form className="to-do-form">
            <input type="text" placeholder="enter text" />
            <button type="submit">Add Task</button>
          </form>
        </div>
      </header>
    );
  }
}

export default App;
