import React, { Component } from 'react';
import Home from './Home.js';
import Cart from './Cart.js';
import ReactRouting from './ReactRouting.js';

class Main extends Component {
    render() {
      return (
        <main>
          <h6>This is my Main component.</h6>
          <ReactRouting/>
        </main>
      );
    }
  }
  
  export default Main;