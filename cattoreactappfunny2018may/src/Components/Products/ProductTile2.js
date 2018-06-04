import React, { Component } from 'react';
import '../SimpleStyle.css';
import Ratings from '../Utils/Ratings.js';
import product1 from '../../Images/product1.jpg';
import product2 from '../../Images/product2.jpg';

class ProductTile2 extends Component {
  render() {
    return (
        <ul className="displayFlexColumn alignItemsLeft minHeight320px">
        <li> 
          <img className="square100per borderRadius15px" src={product1} />
        </li>
        <li>
          <Ratings />
        </li>
        <li>Proudct Name badsf
          </li>
        <li>Proudct Description
          </li>
      </ul>
    );
  }
}

export default ProductTile2;