import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home.js';
import ToDoList from './GeneralSections/ToDoList.js'
import Account from './Account/Account.js'
import Cart from './Checkout/Cart.js'

class ReactRouting extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/account' component={Account} />
          <Route path='/cart' component={Cart} />
          <Route path='/todolist' component={ToDoList} />
        </div>
      </Router>
    );
  }
}

export default ReactRouting;