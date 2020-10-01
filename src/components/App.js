import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends React.Component {
  state = {};

  render() {
    return <h1>change all concept</h1>;
  }
}

export default App;
