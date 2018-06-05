import React, { Component } from 'react';
import ProductsRow from './Products/ProductsRow.js';
import Tax from './Tax.js';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Tax below</h1>
        <Tax />

        <br />
        <hr />

        <h1>Welcome to NB</h1>
        <ProductsRow />
      </div>
    );
  }
}

export default Home;