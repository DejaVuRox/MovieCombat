import React, {Component} from "react";
import "./App.scss";

import { Route } from "react-router-dom";

import Header from "./components/header/Header";
import Container from "./components/Container/Container";

class App extends Component {
  render() {
  return (
    <div className="App">
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={Container} />
    </div>
  );
  }
}

export default App;
