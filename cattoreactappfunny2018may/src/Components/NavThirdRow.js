import React, { Component } from 'react';
import './SimpleStyle.css';

class NavThirdRow extends Component {
  render() {
    return (
      <div>
        <ul className="listStyleTypeNone colorWhite">
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/todolist'>todolist</a>
          </li>
        </ul>
        NavThirdRow 3rd
        </div>
    );
  }
}

export default NavThirdRow;