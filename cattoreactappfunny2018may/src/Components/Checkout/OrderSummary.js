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
          <li className="fontsize22px"><b>Order Summary</b></li>
          <li>3 Items</li>
          <li><hr /></li> <li><hr /></li>
          <li className="marginTop5px">
            Subtotal
          </li>
          <li className="marginTop5px">$5.01
          </li>
          <li className="marginTop5px">
            Shipping
          </li>
          <li className="marginTop5px">
            FREE
          </li>
          <li className="marginTop5px">
            Estimated Tax
          </li>
          <li className="marginTop5px">
            $0.06
          </li>
          <li className="marginTop5px">
            Savings
          </li>
          <li className="marginTop5px">
            (-$0.01)
          </li>
          <li className="marginTop15px fontsize22px"><b>Total</b>
          </li>
          <li className="marginTop15px fontsize22px"><b>$8.88</b>
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
        <hr className="width90per marginTop15px" />
        <CartPromoCode />
        <hr className="width90per" />
        <img src="http://in-focusvision.com/clients/20993/images/1_Payment_Methods.png" className="width60per paddingBottom10px paddingTop10px" />
      </div>
    );
  }
}

export default OrderSummary;