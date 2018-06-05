import React, { Component } from 'react';
import product1 from '../../Images/product1.jpg';
import product2 from '../../Images/product2.jpg';
import product3 from '../../Images/product3.jpg';
import product4 from '../../Images/product4.jpg';
import redstar from '../../Images/redstar.png';
import Ratings from '../Utils/Ratings.js';
import ProductTile from './ProductTile.js';
import ProductTile1 from './ProductTile1.js';
import ProductTile9 from './ProductTile9.js';
import ProductTile3 from './ProductTile3.js';
import ProductTile4 from './ProductTile4.js';
import ProductTile2 from './ProductTile2.js';

import '../SimpleStyle.css';

class ProductsRow extends Component {
  render() {
    return (
      <div className="marginBottom20px">
        <h3>Top Selling Products</h3>
        <ul className="listStyleTypeNone ulFlex ">
          <li className="width4per">
          </li>
          <li className="width20per  ">
            <ProductTile />
          </li>
          <li className="width4per">
          </li>
          <li className="width20per">
            <ProductTile1 />
          </li>
          <li className="width4per">
          </li>
          <li className="width20per">
            <ProductTile3 />
          </li>
          <li className="width4per">
          </li>
          <li className="width20per">
            <ProductTile4 />
          </li>
          <li className="width4per">
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductsRow;