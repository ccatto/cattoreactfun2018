import React, { Component } from 'react';
import CartPromoCode from './CartPromoCode.js';
import '../SimpleStyle.css';
import './Cart.css';
import buttonCounter from '../Utils/buttonCounter.js';

class OrderSummary extends Component {
  render() {
    return (
      <div className="orderSummary colorGrayDark">
        <ul className="flexRow2Col70perLeft colorGrayDark">
          <li><b>Order Summary</b></li>
          <li><b>3 Items</b></li>
          <li><hr /></li> <li><hr /></li>
          <li>
            Subtotal
          </li>
          <li>$5.01
          </li>
          <li>
            Shipping
          </li>
          <li>
            FREE
          </li>
          <li>
            Estimated Tax
          </li>
          <li>
            $0.06
          </li>
          <li>
            Savings
          </li>
          <li>
            (-$0.01)
          </li>
          <li><b>Total</b>
          </li>
          <li><b>$8.88</b>
          </li>
        </ul>
        <ul className="flexRowNoWrap marginTop10px">
          <li className="width5per">
          </li>
          <li className="width90per minHeight45px">
            <button className="buttonBlue">
              <ul className="flexRowNoWrap minHeight45px">
                <li className="minWidth25per minHeight45px">
                </li>
                <li className="width70per minHeight45px textAlignLeft">
                  <ul className="flexRowNoWrap minHeight45px">
                    <li className="width10per minHeight45px justifyContentFlexEnd">
                      <img className="square25" src="https://www.intel.com/content/dam/www/public/us/en/images/distributor/distributor-icon-lock-white-rwd.png.rendition.intel.web.256.192.png" />
                    </li>
                    <li className="width70per minHeight45px">
                      <span className="colorGrayLight">Continue to Shipping</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </button>
          </li>
        </ul>
        <hr className="width90per marginTop10px" />
        <CartPromoCode />
        <hr className="width90per" />
        <img src="http://in-focusvision.com/clients/20993/images/1_Payment_Methods.png" className="width50per paddingBottom10px paddingTop10px" />
      </div>
    );
  }
}

export default OrderSummary;