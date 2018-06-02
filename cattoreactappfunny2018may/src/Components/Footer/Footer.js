import React, { Component } from 'react';
import FooterBottomRow from './FooterBottomRow.js';
import FooterMiddleFourColumn from './FooterMiddleFourColumn.js';
import FooterTop from './/FooterTop.js';
import FooterBottomRowGutter from './/FooterBottomRowGutter.js';
import RainbowRow from '../Utils/RainbowRow.js';


class Footer extends Component {
  render() {
    return (
      <footer>
        <RainbowRow/>
        <FooterTop />
        <FooterMiddleFourColumn />
        <FooterBottomRow />
        <FooterBottomRowGutter />
      </footer>
    );
  }
}

export default Footer;