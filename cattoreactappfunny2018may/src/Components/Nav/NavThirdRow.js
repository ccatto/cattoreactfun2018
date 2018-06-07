import React, { Component } from 'react';
import '../SimpleStyle.css';

class NavThirdRow extends Component {
  render() {
    return (
      <div className="nav3rdrow displayFlexRow">
        <ul className="listStyleTypeNone displayFlexRow width100">
          <li className="width15per">
            <a className="noUnderlineOnlyOnHover" href='/live'>Live</a>
          </li>
          <li className="borderLeftBlueDark">
            <a className="noUnderlineOnlyOnHover" href='/learn'>Learn</a>
          </li>
          <li className="borderLeftBlueDark">
            <a className="noUnderlineOnlyOnHover" href='/work'>Work</a>
          </li>
          <li className="borderLeftBlueDark">
            <a className="noUnderlineOnlyOnHover" href='/play'>Play</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavThirdRow;