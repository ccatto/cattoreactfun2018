import React, { Component } from 'react';
import './SimpleStyle.css';

class NavThirdRow extends Component {
  render() {
    return (
      <div className="nav3rdrow displayFlexRow">
        <ul className="listStyleTypeNone displayFlexRow width100">
          <li className="width15per">
            <a href='/'>Live</a>
          </li>
          <li>
            <a href='/todolist'>Learn</a>
          </li>
          <li>
            <a href='/'>Work</a>
          </li>
          <li>
            <a href='/todolist'>Play</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavThirdRow;