import React, { Component } from 'react';
import NavTop from './NavTop.js';
import NavSecondRow from './NavSecondRow.js';
import NavThirdRow from './NavThirdRow.js';
import './SimpleStyle.css';

class Nav extends Component {
  render() {
    return (
      <nav>
       <ul className="listStyleTypeNone colorWhite">
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/todolist'>todolist</a>
          </li>
        </ul>
        This is my Nav component.
            <NavTop />
        <NavSecondRow />
        <NavThirdRow />
      </nav>
    );
  }
}

export default Nav;