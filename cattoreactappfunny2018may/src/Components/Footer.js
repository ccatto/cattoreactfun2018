import React, { Component } from 'react';
import FooterBottomRow from './FooterBottomRow.js';

class Footer extends Component {
    render() {
      return (
        <footer>This is my Footer component.
          <FooterBottomRow/>
        </footer>
      );
    }
  }
  
  export default Footer;