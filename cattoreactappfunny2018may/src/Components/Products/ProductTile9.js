import React, { Component } from 'react';
import '../SimpleStyle.css';
import Ratings from '../Utils/Ratings.js';
import product from '../../Images/product5.png';
import WhiteButton from '../Utils/WhiteButton.js';


class ProductTile9 extends Component {
  render() {
    return (
      <ul className="displayFlexColumn  backgroundColorGrayLight colorGrayDark borderRadius15px minHeight320px">
        <li className="margin5px">
          <img className="square150px borderRadius15px" src={product} alt={"product"} />
        </li>
        <li className="marginLeft5px">
          <Ratings />
        </li>
        <li className="minHeight80px fontsize12px alignItemsLeft textAlignLeft marginLeft5px">
        Calphalon Premier™ Space Saving Stainless Steel
        <br />
        10-Piece Cookware Set
        </li>
        <li className="minHeight45px">
        </li>
        <li className="textAlignLeft width100">
          <ul className="flexRowNoWrapAlignLeft width100" >
            <li className="width35per marginLeft5px fontsize12px" >
              $469.99
              </li>
            <li className="width65per textAlignRight marginRight5px ">
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

export default ProductTile9;