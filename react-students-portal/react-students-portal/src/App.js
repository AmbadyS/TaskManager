import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import Task from "./components/task.component";


class App extends Component {
  render() {
    return (
      
      <div> <Switch>
         <Route exact path={["/", "/task"]} component={Task} />

          </Switch></div>
    );
  }
}

export default App;