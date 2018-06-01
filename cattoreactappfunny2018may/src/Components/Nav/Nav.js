import React, { Component } from 'react';
import NavTop from './NavTop.js';
import NavSecondRow from './NavSecondRow.js';
import NavThirdRow from './NavThirdRow.js';
import '../SimpleStyle.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavTop />
        <NavSecondRow />
        <NavThirdRow />
      </nav>
    );
  }
}

export default Nav;