import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home.js';
import ToDoList from './ToDoList.js'
import Account from './Account/Account.js'
import Cart from './Checkout/Cart.js'

class ReactRouting extends Component {
  render() {
    return (
      <Router>
        <switch>
          <Route exact path='/' component={Home} />
          <Route path='/account' component={Account} />
          <Route path='/cart' component={Cart} />
          <Route path='/todolist' component={ToDoList} />
        </switch>
      </Router>
    );
  }
}

export default ReactRouting;