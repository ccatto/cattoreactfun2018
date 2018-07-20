import React, { Component } from 'react';
import '../SimpleStyle.css';

class ShippingAddress extends Component {
  render() {
    return (
      <div>
        This is my ShippingAddress component.
        <h2>Shipping Address</h2>
        <input/>First Name
        <input/>Last Name
        <input/>Email
        <input/>Add me to mailing list for savings; news and updates
        <input/>Phone number
        <input/>Shipping Address
        Enter Shipping Manually
      </div>
    );
  }
}

export default ShippingAddress;