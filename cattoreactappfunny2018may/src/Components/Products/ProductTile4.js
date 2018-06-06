import React, { Component } from 'react';
import '../SimpleStyle.css';
import Ratings from '../Utils/Ratings.js';
import product3 from '../../Images/product3.jpg';
import WhiteButton from '../Utils/WhiteButton.js';


class ProductTile4 extends Component {
  render() {
    return (
      <ul className="displayFlexColumn  backgroundColorGrayLight colorGrayDark borderRadius15px minHeight320px">
        <li className="margin5px">
          <img className="square100per borderRadius15px" src={product3} alt={"product"} />
        </li>
        <li className="marginLeft5px">
          <Ratings />
        </li>
        <li className="minHeight80px fontsize12px alignItemsLeft textAlignLeft marginLeft5px">
          Oster® Blend-N-Go® My Blend® Blender
        <br />
          Black, BLSTPB-BBL
        </li>
        <li className="minHeight45px">
        </li>
        <li className="textAlignLeft width100">
          <ul className="flexRowNoWrapAlignLeft width100" >
            <li className="width30per marginLeft5px fontsize12px" >
              $19.01
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

export default ProductTile4;