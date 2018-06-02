import React, { Component } from 'react';
import './SimpleStyle.css';

class FooterBottomRow extends Component {
  render() {
    return (
      <div className="minHeight20px backgroundColorBlack colorWhite displayFlexColumn">
        <ul className="listStyleTypeNone ulFlex fontsize8px ">
          <li className=" some width60per displayFlexColumn alignItemsLeft paddingLeft15px">
            {(new Date().getFullYear())} Brand Name
          </li>
          <li className="width10per displayFlexColumn alignItemsCenter">
            <a href="./tersofuse">Term of Use</a>
          </li>
          <li className="width15per displayFlexColumn alignItemsCenter">
          <a href="./copywright">&copy; Copywright & Trademark</a>
          </li>
          <li className="width10per displayFlexColumn alignItemsCenter">
          <a href="./privacypolicy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterBottomRow;