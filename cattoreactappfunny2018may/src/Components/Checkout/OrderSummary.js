import React, { Component } from 'react';
import '../SimpleStyle.css';
import './Cart.css';

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
        <hr className="width90per" />
        <div>
          # Apply Promo Cod
      </div>
        <hr className="width90per" />
        <div>
          <button></button>
        </div>
        <img src="http://in-focusvision.com/clients/20993/images/1_Payment_Methods.png" className="width50per paddingBottom10px paddingTop10px" />
      </div>
    );
  }
}

export default OrderSummary;