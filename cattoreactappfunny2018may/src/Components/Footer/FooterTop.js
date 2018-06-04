import React, { Component } from 'react';
import FooterEmailSubscription from './FooterEmailSubscription.js';
import FooterSocial from './FooterSocial';
import '../SimpleStyle.css';

class FooterTop extends Component {
  render() {
    return (
      <ul className="footerTop flexRow3ColGutters">
        <li></li>
        <li>
          <ul className="flexRowWrap height80px ">
            <li className="width49per textAlignLeft height60px">
              <FooterEmailSubscription />
            </li>
            <li className="width2per">
            </li>
            <li className="width49per textAlignRight height60px">
              <FooterSocial />
            </li>
            <li></li>
          </ul>
        </li>
        <li></li>
      </ul>
    );
  }
}

export default FooterTop;