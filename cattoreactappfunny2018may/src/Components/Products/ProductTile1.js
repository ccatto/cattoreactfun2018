import React, { Component } from 'react';
import '../SimpleStyle.css';
import Ratings from '../Utils/Ratings.js';
import product1 from '../../Images/product1.jpg';
import WhiteButton from '../Utils/WhiteButton.js';


class ProductTile1 extends Component {
  render() {
    return (
      <ul className="displayFlexColumn  backgroundColorGrayLight colorGrayDark borderRadius15px minHeight320px">
        <li className="margin5px">
          <img className="square100per borderRadius15px" src={product1} />
        </li>
        <li className="marginLeft5px">
          <Ratings />
        </li>
        <li className="minHeight80px fontsize12px alignItemsLeft textAlignLeft marginLeft5px">
          Rawlings 13'' GG Elite Series
        <br />
           First Base Mitt 2018
        </li>
        <li className="minHeight45px">
        </li>
        <li className="textAlignLeft width100">
          <ul className="flexRowNoWrapAlignLeft width100" >
            <li className="width30per marginLeft5px fontsize12px" >
              $299.99
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

export default ProductTile1;