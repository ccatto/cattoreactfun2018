import React, { Component } from 'react';
import ProductsRow from './Products/ProductsRow.js';
import InputMagGlass from './Utils/InputMagGlass.js';

class Home extends Component {
  render() {
    return (
      <div>
      <br/>
        <InputMagGlass/>
        <h1>Welcome to NB</h1>
        <ProductsRow />
      </div>
    );
  }
}

export default Home;