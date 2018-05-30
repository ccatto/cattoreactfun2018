import React, { Component } from 'react';
import product1 from '../Images/product1.jpg';
import redstar from '../Images/redstar.png';
import Ratings from './Utils/Ratings.js';
import './SimpleStyle.css';

class ProductsRow extends Component {
  render() {
    return (
      <div>
        <h3>4 Products in 4 columns</h3>
        <ul className="listStyleTypeNone ulFlex">
          <li className="width4per">
          </li>
          <li className="width20per ">
            <ul className="displayFlexColumn alignItemsLeft">
              <li> <img className="square60 borderRadius15px" src={product1} />
              </li>
              <li>
                <Ratings />
              </li>
              <li>Proudct Name
                </li>
              <li>Proudct Description
                </li>
            </ul>
          </li>
          <li className="width4per">
          </li>
          <li className="width20per">
            <ul className="displayFlexColumn alignItemsLeft">
              <li><img className="square60 borderRadius15px" src={product1} />
              </li>
              <li>
                <Ratings />
              </li>
              <li>Proudct Name
                </li>
              <li>Proudct Description
                </li>
            </ul>
          </li>
          <li className="width4per">
          </li>
          <li className="width20per">
            <ul className="displayFlexColumn alignItemsLeft">
              <li><img className="square60 borderRadius15px" src={product1} />
              </li>
              <li>
                <Ratings />
              </li>
              <li>Proudct Name
                </li>
              <li>Proudct Description
                </li>
            </ul>
          </li>
          <li className="width4per">
          </li>
          <li className="width20per">
            <ul className="displayFlexColumn alignItemsLeft">
              <li><img className="square60 borderRadius15px" src={product1} />
              </li>
              <li>
                <Ratings />
              </li>
              <li>Proudct Name
                </li>
              <li>Proudct Description
                </li>
                <li>$0.99  <button/>
                </li> 
            </ul>
          </li>
          <li className="width4per">
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductsRow;