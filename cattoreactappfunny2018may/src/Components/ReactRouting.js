import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home.js';
import ToDoList from './GeneralSections/ToDoList.js'
import Account from './Account/Account.js'
import Cart from './Checkout/Cart.js'
import Live from './GeneralSections/Live.js';
import Learn from './GeneralSections/Learn.js';
import Work from './GeneralSections/Work.js';
import Play from './GeneralSections/Play.js';

class ReactRouting extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/account' component={Account} />
          <Route path='/cart' component={Cart} />
          <Route path='/todolist' component={ToDoList} />
          <Route path='/live' component={Live} />
          <Route path='/learn' component={Learn} />
          <Route path='/work' component={Work} />
          <Route path='/play' component={Play} />
        </div>
      </Router>
    );
  }
}

export default ReactRouting;