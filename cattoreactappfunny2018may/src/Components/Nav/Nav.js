import React, { Component } from 'react';
import NavTop from './NavTop.js';
import NavSecondRow from './NavSecondRow.js';
import NavThirdRow from './NavThirdRow.js';
import RainbowRow from '../Utils/RainbowRow.js';
import '../SimpleStyle.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavTop />
        <NavSecondRow />
        <NavThirdRow />
        <RainbowRow/>
      </nav>
    );
  }
}

export default Nav;