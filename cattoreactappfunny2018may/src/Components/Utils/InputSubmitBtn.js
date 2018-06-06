import React, { Component } from 'react';
import './Utils.css';

class InputSubmitBtn extends Component {
  render() {
    return (
      <div className="inputSubmitButtonWrap">
        <input className="inputFlex10" placeholder="Email Sign Up" />
        <button className="inputButtonSubmit">
          Submit
        </button>
      </div>
    );
  }
}

export default InputSubmitBtn;