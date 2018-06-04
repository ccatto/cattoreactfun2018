import React, { Component } from 'react';
import './Utils.css';

class NSelectDDL extends Component {
  render() {
    return (
      <div className="dropdown marginTop5px" >
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>
    );
  }
}

export default NSelectDDL;