import React, { Component } from 'react';
import '../SimpleStyle.css';
import quantityFake from '../../Images/quantityFake.png';

class CartProductDetail extends Component {
  render() {
    return (
      <div className="backgroundColorGrayLight colorGrayDark">
        <ul className="flexRow5Col textAlignLeft">
          <li></li>
          <li>
            <img className="square60" src="https://www.foodsaver.com/dw/image/v2/AAMB_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9ce752ea/images/highres/FSGSBF0544-P00-1.jpg?sw=400&sh=400&sm=fit" />
          </li>
          <li></li>
          <li className="textAlignLeft">
            <ul className="flexCol">
              <li>
                FoodSaver® GameSaver® 8" x 20'
            </li>
              <li>Long Vacuum-Seal Rolls, 6 Pack
            </li>
              <li> <b> SKU:</b> FSGSBF0544-P00
              </li>
            </ul>
          </li>
          <li></li>
          <li className="textAlignLeft">
            Unit Price
          </li>
          <li></li>
          <li><img className="height25px width40px" src={quantityFake} />
          </li>
          <li></li>
          <li className="textAlignRight">
            Total
          </li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default CartProductDetail;