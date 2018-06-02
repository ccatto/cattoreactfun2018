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
          <li><b>Total</b></li>
          <li><b>$8.88</b></li>
        </ul>
        <br />
        <br />
        <h1>
          buttonCounter
        </h1>
        <br />
        <br />
        <ul className="flexRowNoWrap">
          <li className="width5per">
          </li>
          <li className="width90per minHeight45px">
            <ul className="flexRowNoWrap minHeight45px">
              <li className="width100 minHeight45px">


                <ul className="flexRowNoWrap minHeight45px">
                  <li className="width30per minHeight45px">
                    <img className="square25" src="https://www.intel.com/content/dam/www/public/us/en/images/distributor/distributor-icon-lock-white-rwd.png.rendition.intel.web.256.192.png" />
                  </li>
                  <li className="width70per minHeight45px">
                    <span>Continue to Shipping</span>
                  </li>
                </ul>


              </li>
            </ul>
          </li>
        </ul>
        <hr className="width90per" />
        <CartPromoCode />
        <hr className="width90per" />
        <div>
          <ul className="flexRowNoWrap">
            <li className="width30px">
              <img className="square25" src="https://www.intel.com/content/dam/www/public/us/en/images/distributor/distributor-icon-lock-white-rwd.png.rendition.intel.web.256.192.png" />
            </li>
            <li> <span>Continue to Shipping</span>
            </li>
          </ul>
          <br />
          <br />
          <button className="width90per buttonBlue ">
            <div className="backgroundColorBlack width45px flexCenter ">
              text</div>
          </button>
          <br />
          <br />
          <button className="buttonContainer width90per buttonBlue">
            <ul className="flexRowNoWrap">

              <li className="width30px">
                <img className="square25" src="https://www.intel.com/content/dam/www/public/us/en/images/distributor/distributor-icon-lock-white-rwd.png.rendition.intel.web.256.192.png" />
              </li>
              <li> <span>Continue to Shipping</span>
              </li>
            </ul>

          </button>

        </div>
        <img src="http://in-focusvision.com/clients/20993/images/1_Payment_Methods.png" className="width50per paddingBottom10px paddingTop10px" />
      </div>
    );
  }
}

export default OrderSummary;