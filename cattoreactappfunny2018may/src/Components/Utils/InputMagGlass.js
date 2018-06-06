import React, { Component } from 'react';
import magnifyingGlass from '../../Images/magnifyingGlass.png';
import './Utils.css';

class InputMagGlass extends Component {
  render() {
    return (
      <div className="inputIconWrap">
        <input className="inputFlex10" />
        <button className="buttonMag ">
          <img className="square25" src={magnifyingGlass} alt={"mag glass"} />
        </button>
      </div>
    );
  }
}

export default InputMagGlass;