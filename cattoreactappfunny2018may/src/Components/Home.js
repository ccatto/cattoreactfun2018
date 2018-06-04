import React, { Component } from 'react';
import ProductsRow from './Products/ProductsRow.js';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to NB</h1>
        <ProductsRow />
      </div>
    );
  }
}

export default Home;