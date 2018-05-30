import React, { Component } from 'react';
import FooterBottomRow from './FooterBottomRow.js';
import FooterMiddleFourColumn from './FooterMiddleFourColumn.js';

class Footer extends Component {
    render() {
      return (
        <footer>This is my Footer component.
          <FooterMiddleFourColumn/>
          <FooterBottomRow/>
        </footer>
      );
    }
  }
  
  export default Footer;