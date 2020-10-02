import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import AddTask from "./AddTask";

library.add(faTrash);

class App extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <AddTask />
      </React.Fragment>
    );
  }
}

export default App;
