import React, { Component } from 'react';
import '../SimpleStyle.css';
import nortonsecure from '../../Images/nortonsecure.png';

class ShippingSecureLogo extends Component {
  render() {
    return (
      <div>
        This is my ShippingSecureLogo component.
        <img className="square5 borderRadius15px" src={nortonsecure} />
      </div>
    );
  }
}

export default ShippingSecureLogo;