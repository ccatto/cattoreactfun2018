import React, { Component } from 'react';
import '../SimpleStyle.css';
import './Cart.css';
import NSelectDDL from '../Utils/NSelectDDL.js';

class CartProductDetail1 extends Component {
  render() {
    return (
      <div className="backgroundColorGrayLight colorGrayDark">
        <ul className="flexRow5Col textAlignLeft">
          <li></li>
          <li className="marginTop5px">
            <img className="square60" src="https://www.crock-pot.com/on/demandware.static/-/Sites-master-catalog/default/dw3f6d07a0/images/highres/SCCPPC600-V1-23.jpg" alt={"Product"} />
          </li>
          <li></li>
          <li className="textAlignLeft">
            <div className="flexRowNoWrapAlignLeft fontsize12px marginTop5px">Crock-Pot® 6.0-Quart Express</div>
            <div className="flexRowNoWrapAlignLeft fontsize12px "> Crock Multi-Cooker</div>
            <div className="flexRowNoWrapAlignLeft fontsize12px "></div>
            <div className="flexRowNoWrapAlignLeft fontsize10px marginTop5px"><b> SKU: </b>SCCPPC600-V1</div>
          </li>
          <li></li>
          <li className="textAlignLeft fontsize12px marginTop5px">
            <div className="flexRowNoWrapAlignLeft">
              Unit Price
            </div>
            <div className="flexRowNoWrapAlignLeft marginTop5px fontsize18px">
              $99.99
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
              $99.99
            </div>
            <div className="fontsize10px marginTop10px" >
              <img className="square10 garbageMargin" src="https://cdn0.iconfinder.com/data/icons/business-and-office-3-1/24/102-512.png" alt={"2018 Garbage Can"} />
              Remove
            </div>
          </li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default CartProductDetail1;