import React, { Component } from 'react';
import '../SimpleStyle.css';
import Ratings from '../Utils/Ratings.js';
import product4 from '../../Images/product4.jpg';
import WhiteButton from '../Utils/WhiteButton.js';


class ProductTile3 extends Component {
  render() {
    return (
      <ul className="displayFlexColumn  backgroundColorGrayLight colorGrayDark borderRadius15px minHeight320px">
        <li className="margin5px">
          <img className="square100per borderRadius15px" src={product4} />
        </li>
        <li className="marginLeft5px">
          <Ratings />
        </li>
        <li className="fontsize12px alignItemsLeft textAlignLeft marginLeft5px">
          Crock-Pot 6 Qt 8-in-1 Multi-Use Express 
        </li>
        <li className="fontsize12px alignItemsLeft textAlignLeft marginLeft5px">
          Crock Programmable Slow Cooker
        </li>
        <li className="minHeight45px">
        </li>
        <li className="textAlignLeft width100">
          <ul className="flexRowNoWrapAlignLeft width100" >
            <li className="width30per marginLeft5px fontsize12px" >
              $69.92
              </li>
            <li className="width70per textAlignRight marginRight5px ">
              <WhiteButton />
            </li>
          </ul>
        </li>
        <li className="minHeight10px">
        </li>
      </ul>
    );
  }
}

export default ProductTile3;