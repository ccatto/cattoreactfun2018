import React, { Component } from 'react';

class FooterMiddleFourColumn extends Component {
  render() {
    return (
      <div className="paddingBottom10px colorGrayLight fontsize8px backgroundColorGrayDark ">
        <ul className="flexRow4ColStackable alignItemsLeft ">
          <li>
          </li>
          <li className="displayFlexColumn alignItemsLeft">
            <p><b className="bold fontsize10px">About Us</b></p>
            <ul className="displayFlexColumn alignItemsLeft marginTopBottom4px">
              <li>Corporate Information</li>
              <li>Careers</li>
              <li>Terms of Use</li>
              <li>CA Privacy Rights</li>
              <li>CA Supply Chain Act</li>
              <li>Privacy & Security</li>
              <li>Site map</li>
            </ul>
          </li>
          <li >
          </li>
          <li className="displayFlexColumn alignItemsLeft" >
            <p><b className="bold fontsize10px">Customer Services</b></p>
            <ul className="displayFlexColumn alignItemsLeft marginTopBottom4px">
              <li>Account</li>
              <li>Order Status</li>
              <li>Shipping</li>
              <li>Return Policy</li>
              <li>Product Registration</li>
              <li>Product Recalls</li>
              <li>Store Locator</li>
            </ul>
          </li>
          <li >
          </li>
          <li className="displayFlexColumn alignItemsLeft" >
            <p><b className="bold fontsize10px">Contact Us</b></p>
            <ul className="displayFlexColumn alignItemsLeft marginTopBottom4px">
              <li>We're available by phone & chat</li>
              <li>Mon. - Fri. 9am - 9pm ET</li>
              <li>Call 1.888.646.1246</li>
              <li>Live Chat</li>
              <li>FAQ</li>
              <li>Email</li>
              <li>Feedback</li>
            </ul>
          </li>
          <li >
          </li>
          <li className="displayFlexColumn alignItemsLeft" >
            <p><b className="bold fontsize10px">Popular Categories</b></p>
            <ul className="displayFlexColumn alignItemsLeft marginTopBottom4px">
              <li>Baby</li>
              <li>Writing</li>
              <li>Home</li>
              <li>Commercial</li>
              <li>Food</li>
              <li>Outdoor</li>
              <li>Sports</li>
            </ul>
          </li>
          <li>
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterMiddleFourColumn;