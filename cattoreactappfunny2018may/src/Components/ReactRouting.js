import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home.js';
import ToDoList from './ToDoList.js'


class ReactRouting extends Component {
  render() {
    return (
      <div>
        <h1>
          ReactRouting
          </h1>
        <Router>
          <switch>
          <Route exact path='/' component={Home} />
          <Route path='/todolist' component={ToDoList} />
          </switch>
        </Router>

      </div>
    );
  }
}

export default ReactRouting;