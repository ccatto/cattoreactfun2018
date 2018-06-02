import React, { Component } from 'react';
import '../SimpleStyle.css';

class RainbowRow extends Component {
  render() {
    return (
      <ul className="flexRowNoWrap backgroundColorGrayDark">
        <li className="minWidth05per">
        </li>
        <li className="minWidth11per backgroundColorBlueRegular minWidth10per minHeight15px">
        </li>
        <li className="minWidth11per backgroundColorBlue minHeight15px minWidth10per minHeight15px">
        </li>
        <li className="minWidth11per backgroundColorPurple minHeight15px minWidth10per minHeight15px">
        </li>
        <li className="minWidth11per backgroundColorPaleVioletRed minHeight15px minWidth10per minHeight15px">
        </li>
        <li className="minWidth11per backgroundColorRed minWidth10per minHeight15px">
        </li>
        <li className="minWidth11per backgroundColorOrange minWidth10per minHeight15px">
        </li>
        <li className="minWidth11per backgroundColorGreen minWidth10per minHeight15px">
        </li>
        <li className="minWidth11per backgroundColorLimeGreen minWidth10per minHeight15px">
        </li>
        <li className="minWidth11per backgroundColorBlue minWidth10per minHeight15px">
        </li>
        <li className="minWidth05per">
        </li>
      </ul>
    );
  }
}

export default RainbowRow;