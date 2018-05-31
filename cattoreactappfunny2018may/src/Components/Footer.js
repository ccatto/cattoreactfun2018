import React, { Component } from 'react';
import FooterBottomRow from './FooterBottomRow.js';
import FooterMiddleFourColumn from './FooterMiddleFourColumn.js';
import FooterTop from './FooterTop.js';

class Footer extends Component {
    render() {
      return (
        <footer>
          <FooterTop/>
          <FooterMiddleFourColumn/>
          <FooterBottomRow/>
        </footer>
      );
    }
  }
  
  export default Footer;