import React, { Component } from 'react';
import redstar from '../../Images/RedStar1.png';
import '../SimpleStyle.css';

class Ratings extends Component {
  render() {
    return (

      <ul className="flexRowNoWrap height10px">
        <li className="width10px marginTopMinus8px ">
          <img className="square5 " src={redstar} alt={"Red Star"} />
        </li>
        <li className="width10px marginTopMinus8px">
          <img className="square5 " src={redstar} alt={"Red Star"} />
        </li>
        <li className="width10px marginTopMinus8px">
          <img className="square5 " src={redstar} alt={"Red Star"} />
        </li>
        <li className="width10px marginTopMinus8px">
          <img className="square5 " src={redstar} alt={"Red Star"} />
        </li>
        <li className="width10px marginTopMinus8px">
          <img className="square5 " src={redstar} alt={"Red Star"} />
        </li>
        <li className="width15px fontsize8px">
          242
        </li>

      </ul>

    );
  }
}

export default Ratings;