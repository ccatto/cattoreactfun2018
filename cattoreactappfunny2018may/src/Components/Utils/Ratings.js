import React, { Component } from 'react';
import redstar from '../../Images/redstar.png';
import '../SimpleStyle.css';

class Ratings extends Component {
  render() {
    return (
      <div>
        <ul className="listStyleTypeNone ulFlex">
          <li>
            <img className="square5 borderRadius15px" src={redstar} />
          </li>
          <li>
            <img className="square5 borderRadius15px" src={redstar} />
          </li>
          <li>
            <img className="square5 borderRadius15px" src={redstar} />
          </li>
          <li>
            <img className="square5 borderRadius15px" src={redstar} />
          </li>
          <li>
            <img className="square5 borderRadius15px" src={redstar} />
          </li>
          <li className="fontsize8px">
            242
          </li>
        </ul>
      </div>
    );
  }
}

export default Ratings;