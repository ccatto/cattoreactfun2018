import React, { Component } from 'react';




class buttonCounter extends Component {


  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };


  render() {
    return (
      <button onClick={this.handleClick}>
        Button Text
      </button>
    );
  }
}

export default buttonCounter;