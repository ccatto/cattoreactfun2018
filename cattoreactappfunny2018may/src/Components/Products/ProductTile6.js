import React, { Component } from 'react';
import '../SimpleStyle.css';
import Ratings from '../Utils/Ratings.js';
import product1 from '../../Images/product1.jpg';


class ProductTile6 extends Component {
  render() {
    return (
      <ul className="displayFlexColumn alignItemsLeft">
        <li> <img className="square100per borderRadius15px" src={product1} />
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

export default ProductTile6;