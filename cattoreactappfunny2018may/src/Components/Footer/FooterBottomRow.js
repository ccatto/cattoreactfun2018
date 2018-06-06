import React, { Component } from 'react';
import '../SimpleStyle.css';

class FooterBottomRow extends Component {
  render() {
    return (

      <ul className="flexRow3ColGutters blueBackground">
        <li></li>
        <li>
          <div className="minHeight20px blueBackground colorWhite displayFlexColumn marginTopBottom4px">
            <ul className="listStyleTypeNone ulFlex fontsize8px ">
              <li className="width60per displayFlexColumn alignItemsLeft paddingLeft15px colorGrayLight ">
                {(new Date().getFullYear())} Brand Name
              </li>
              <li className="width10per displayFlexColumn alignItemsCenter">
                <a className="colorGrayLight noUnderlineOnlyOnHover" href="./tersofuse">Term of Use</a>
              </li>
              <li className="width15per displayFlexColumn alignItemsCenter">
                <a className="colorGrayLight noUnderlineOnlyOnHover" href="./copywright">&copy; Copywright & Trademark</a>
              </li>
              <li className="width10per displayFlexColumn alignItemsCenter">
                <a className="colorGrayLight noUnderlineOnlyOnHover" href="./privacypolicy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </li>
        <li></li>
      </ul>
    );
  }
}

export default FooterBottomRow;