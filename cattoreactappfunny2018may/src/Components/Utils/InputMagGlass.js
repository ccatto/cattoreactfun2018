import React, { Component } from 'react';
import '../SimpleStyle.css';
import magnifyingGlass from '../../Images/magnifyingGlass.png';

var buttonImage = {
  backgroundImage: `url(${magnifyingGlass})`
}

class InputMagGlass extends Component {
  render() {
    return (
      <div className="inputIconWrap">
        <input className="inputFlex10" />
        <button style={ buttonImage } className="buttonMag ">
          <img className="square25" src={magnifyingGlass}/>
        </button>
      </div>
    );
  }
}

export default InputMagGlass;