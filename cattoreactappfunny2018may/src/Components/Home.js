import React, { Component } from 'react';

import ProductsRow from './ProductsRow.js';

class Home extends Component {
    render() {
      return (
        <div>
           <h1>Home1</h1>
           <ProductsRow/>
           <div className="displayFlexColumn">
              <div> some stuff</div>
              <div> other stuff</div>
           </div>
        </div>
      );
    }
  }
  
  export default Home;