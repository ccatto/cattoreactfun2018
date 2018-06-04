import React, { Component } from 'react';
import Nav from './Nav/Nav.js';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <Nav />
        </header>
      </div>
    );
  }
}

export default Header;