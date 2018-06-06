import React, { Component } from 'react';
import '../SimpleStyle.css';

class WhiteButton extends Component {
  render() {
    return (
      <button className="buttonWhite">
        <span >Add to Cart</span>
      </button>
    );
  }
}

export default WhiteButton;