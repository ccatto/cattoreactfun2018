import React, { Component } from 'react';
import '../SimpleStyle.css';
import './Cart.css';

class CartPromoCode extends Component {
    render() {
        return (
            <ul className="flexRowNoWrap">
                <li className="width5per"></li>
                <li className="colorBlue fontsize10px">
                    + Apply Promo Code
                </li>
            </ul> 
        );
    }
}

export default CartPromoCode;