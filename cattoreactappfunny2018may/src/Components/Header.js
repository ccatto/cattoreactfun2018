import React, { Component } from 'react';

import Nav from './Nav.js';

class Header extends Component {
    render() {
      return (
        <div>
            <header>
            This is my Header component.
            <Nav/>
            </header>
        </div>
      );
    }
  }
  
  export default Header;