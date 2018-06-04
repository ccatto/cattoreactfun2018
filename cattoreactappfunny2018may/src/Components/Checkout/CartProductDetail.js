import React, { Component } from 'react';
import '../SimpleStyle.css';
import './Cart.css';
import quantityFake from '../../Images/quantityFake.png';
import NSelectDDL from '../Utils/NSelectDDL.js';
import buttonCounter from '../Utils/buttonCounter.js';


class CartProductDetail extends Component {
  render() {
    return (
      <div className="backgroundColorGrayLight colorGrayDark">
        <ul className="flexRow5Col textAlignLeft">
          <li></li>
          <li className="marginTop5px">
            <img className="square60" src="https://www.foodsaver.com/dw/image/v2/AAMB_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9ce752ea/images/highres/FSGSBF0544-P00-1.jpg?sw=400&sh=400&sm=fit" />
          </li>
          <li></li>
          <li className="textAlignLeft">
            <div className="flexRowNoWrapAlignLeft fontsize12px marginTop5px">FoodSaver® GameSaver® 8" x 20'</div>
            <div className="flexRowNoWrapAlignLeft fontsize12px ">Long Vacuum-Seal Rolls, 6 Pack</div>
            <div className="flexRowNoWrapAlignLeft fontsize12px "></div>
            <div className="flexRowNoWrapAlignLeft fontsize10px marginTop5px"><b> SKU: </b>FSGSBF0544-P00</div>
          </li>
          <li></li>
          <li className="textAlignLeft fontsize12px marginTop5px">
            <div className="flexRowNoWrapAlignLeft">
              Unit Price
            </div>
            <div className="flexRowNoWrapAlignLeft marginTop5px fontsize18px">
              $49.99
            </div>
          </li>
          <li></li>
          <li>
            <NSelectDDL />
          </li>
          <li></li>
          <li className="textAlignRight fontsize12px marginTop5px marginBottom5px">
            <div>
              Total
            </div>
            <div className="fontsize18px marginTop5px" >
              $49.99
            </div>
            <div className="fontsize10px marginTop10px" >
              <img className="square10 garbageMargin" src="https://cdn0.iconfinder.com/data/icons/business-and-office-3-1/24/102-512.png" />
              Remove  
            </div>
          </li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default CartProductDetail;