import React, { Component } from 'react';

  
onClick = () => {
  console.log("inside onClick for nButton");
};


class nButton extends Component {
  render() {
    return (
      <button onClick={this.onClick}>
        Button Text       
      </button>
    );
  }
}

export default nButton;