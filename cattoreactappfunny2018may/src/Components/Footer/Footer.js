import React, { Component } from 'react';
import FooterBottomRow from './FooterBottomRow.js';
import FooterMiddleFourColumn from './FooterMiddleFourColumn.js';
import FooterTop from './/FooterTop.js';
import FooterBottomRowGutter from './/FooterBottomRowGutter.js';


class Footer extends Component {
  render() {
    return (
      <footer>
        <FooterTop />
        <FooterMiddleFourColumn />
        <FooterBottomRow />
        <FooterBottomRowGutter />
      </footer>
    );
  }
}

export default Footer;