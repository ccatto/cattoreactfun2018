import React, { Component } from 'react';
import '../SimpleStyle.css';

class NavThirdRow extends Component {
  render() {
    return (
      <div className="nav3rdrow displayFlexRow">
        <ul className="listStyleTypeNone displayFlexRow width100">
          <li className="width15per">
            <a className="noUnderlineOnlyOnHover" href='/'>Live</a>
          </li>
          <li className="borderLeft">
            <a className="noUnderlineOnlyOnHover" href='/todolist'>Learn</a>
          </li>
          <li className="borderLeft">
            <a className="noUnderlineOnlyOnHover" href='/'>Work</a>
          </li>
          <li className="borderLeft">
            <a className="noUnderlineOnlyOnHover" href='/todolist'>Play</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavThirdRow;