import React, { Component } from 'react';
import OrderSummary from './OrderSummary';
import CartProductDetail from './CartProductDetail';
import '../SimpleStyle.css';
import './Cart.css';

class Cart extends Component {
  render() {
    return (
      <div className="cart ">
        <ul className="flexRow3ColGutters cart">
          <li></li>
          <li>
            <h2 className="textAlignLeft">Shopping Basket (2)</h2>
            <ul className="flexRow2ColThirdsStackable">
              <li className="backgroundColorGrayDark">
                <CartProductDetail/>
                <br/>
                <CartProductDetail/>
              </li>
              <li className="backgroundColorGrayDark" >
              </li>
              <li className="backgroundColorGrayDark" >
                <OrderSummary/>
              </li>
            </ul>
          </li>
          <li></li>
        </ul>
        <br/>
      </div>
    );
  }
}

export default Cart;