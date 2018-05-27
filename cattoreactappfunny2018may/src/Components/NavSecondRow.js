import React, { Component } from 'react';
import './SimpleStyle.css';
import we from '../Images/we.png';

class NavSecondRow extends Component {
  render() {
    return (
      <div className="nav2ndrow">
        <ul className="listStyleTypeNone ulFlex">
          <li className="width15per displayFlexColumn">
            <span>
              <img className="square60 borderRadius10px" src={we} alt={we} />
            </span>
          </li>
          <li className="width65per displayFlexColumn paddingTopBottom10px">
            <input className="width100 " />
          </li>
          <li className="width10per displayFlexColumn">
            <span>
              <img className="square30" src="https://delivery.yellowcabpizza.com/images/user_icon.png" />
            </span>
            <span className="fontsize8px">Account</span>
          </li>
          <li className="width10per displayFlexColumn">
            <span>
              <img className="square30" src="https://www.iconsdb.com/icons/preview/white/cart-70-xxl.png" />
            </span>
            <span className="fontsize8px">Cart</span>
          </li>
        </ul>

      </div>
    );
  }
}

export default NavSecondRow;