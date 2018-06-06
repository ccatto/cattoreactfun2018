import React, { Component } from 'react';
import ProductTile from './ProductTile.js';
import ProductTile1 from './ProductTile1.js';
import ProductTile3 from './ProductTile3.js';
import ProductTile4 from './ProductTile4.js';

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