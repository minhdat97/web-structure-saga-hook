import React, { Component } from "react";
import { Router } from "react-router-dom";
import "./App.css";
import Routes from "./routes/index";
import history from "./history";
import { getDataStore } from "./utils/store";

class App extends Component {
  render() {
    const dataStore = getDataStore("session", "login");
    if (dataStore === null) {
      history.push("/login");
    }
    return (
      <Router history={history}>
        <Routes />
      </Router>
    );
  }
}

export default App;
