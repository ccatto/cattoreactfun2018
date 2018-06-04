import React, { Component } from 'react';

  
onClick = () => {
  console.log("inside onClick for nButton");
};


class nInput extends Component {
  render() {
    return (
      <input onClick={this.onClick}>
             
      </input>
    );
  }
}

export default nInput;