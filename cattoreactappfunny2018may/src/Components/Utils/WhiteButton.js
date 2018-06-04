import React, { Component } from 'react';
import zredstar from '../../Images/redstar.png';
import redstar from '../../Images/RedStar1.png';
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