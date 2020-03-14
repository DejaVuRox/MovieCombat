import React from "react";
import "./App.scss";

import { Route } from "react-router-dom";

import Header from "./components/header/Header";
import Container from "./components/Container/Container";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={Container} />
    </div>
  );
}

export default App;
