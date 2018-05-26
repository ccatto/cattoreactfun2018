import React, { Component } from 'react';
import NavTop from './NavTop.js';
import NavSecondRow from './NavSecondRow.js';
import NavThirdRow from './NavThirdRow.js';

class Nav extends Component {
    render() {
      return (
        <nav>
            This is my Nav component.
            <NavTop/>
            <NavSecondRow/>
            <NavThirdRow/>
        </nav>
      );
    }
  }
  
  export default Nav;