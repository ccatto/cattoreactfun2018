import React, { Component } from 'react';
import './SimpleStyle.css';

class NavSecondRow extends Component {
  render() {
    return (
      <div>
        <h3>2nd row Nav</h3>
        <ul className="listStyleTypeNone ulFlex">
         <li className="width15per">Logo
              </li>
          <li className="width65per">
            <input className="width100" />
          </li>
          <li className="width10per">Account
                  </li>
          <li className="width10per"> Cart
                    </li>
        </ul>

      </div>
    );
  }
}

export default NavSecondRow;