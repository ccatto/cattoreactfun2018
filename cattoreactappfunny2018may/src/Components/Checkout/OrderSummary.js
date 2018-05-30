import React, { Component } from 'react';
import '../SimpleStyle.css';

class OrderSummary extends Component {
  render() {
    return (
      <div>
        <h3>Order Summary</h3>
        <span>Edit Cart</span>
        <div>product row</div>
        <div>
          <ul>
            <li>Subtotal  0.99
                  </li>
            <li>Shipping 00
                    </li>
            <li>Sales Tax
                      </li>
            <li>Savings $0.00
                      </li>
          </ul>
        </div>
        <div><b>Total  $0.99 </b></div>
      </div>
    );
  }
}

export default OrderSummary;