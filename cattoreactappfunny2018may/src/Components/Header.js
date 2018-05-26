import React, { Component } from 'react';

import Nav from './Nav.js';

class Header extends Component {
    render() {
      return (
        <div>
            This is my Header component.
            <Nav/>
        </div>
      );
    }
  }
  
  export default Header;