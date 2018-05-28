import React, { Component } from 'react';
import './SimpleStyle.css';

class NavTop extends Component {
  render() {
    return (
      <div className="backgroundColorBlack">
        <ul className="listStyleTypeNone ulFlex">
          <li className="width65per displayFlexColumn alignItemsLeft fontsize8px ">
            <span className="paddingLeft5px">
              Free shipping on orders more than 99¢
            </span>
          </li>
          <li className="width10per fontsize8px displayFlexColumn alignItemsLeft">
            <span className="displayFlexRow">
              <img className="square15" src="https://www.iconsdb.com/icons/preview/white/headset-xxl.png" />
              <span className="paddingLeft5px">Track Order </span>
            </span>
          </li>
          <li className="width10per fontsize8px">
            <span className="displayFlexRow">
              <img className="square15" src="https://www.iconsdb.com/icons/preview/white/headset-xxl.png" />
              <span className="paddingLeft5px"> Support </span>
            </span>
          </li>
          <li className="width10per fontsize8px">
            <span className="displayFlexRow">
              <img className="square15" src="https://cdn3.iconfinder.com/data/icons/flags-circle/100/USA_-128.png" />
              <span className="paddingLeft5px">English (US)
                </span>
            </span>
          </li>
          <li className="width5per backgroundColorBlack displayFlexColumn alignItemsLeft">
          </li>
        </ul>
      </div>
    );
  }
}

export default NavTop;