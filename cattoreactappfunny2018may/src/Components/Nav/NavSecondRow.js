import React, { Component } from 'react';
import '../SimpleStyle.css';
import we from '../../Images/we.png';
import cart from '../../Images/cart.png';
import account from '../../Images/account.png';
import InputMagGlass from '../Utils/InputMagGlass.js';

class NavSecondRow extends Component {
  render() {
    return (
      <div className="nav2ndrow">
        <ul className="listStyleTypeNone ulFlex">
          <li className="width15per displayFlexColumn alignItemsCenter">
            <a href='/' className="width15per displayFlexColumn alignItemsCenter">
              <img className="square60 borderRadius15px" src={we} alt={we} />
            </a>
          </li>
          <li className="width65per displayFlexColumn paddingTopBottom10px">
            <InputMagGlass />
          </li>
          <li className="width10per displayFlexColumn">
            <a href='/account'>
              <img className="square30" src={account} alt={"Account Mug"} />
            </a>
            <span className="fontsize8px">Account</span>
          </li>
          <li className="width10per displayFlexColumn">
            <a href='/cart'>
              <img className="square30" src={cart} alt={"Catt"} />
            </a>
            <span className="fontsize8px">Cart</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavSecondRow;