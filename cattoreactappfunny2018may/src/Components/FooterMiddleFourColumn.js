import React, { Component } from 'react';


class FooterMiddleFourColumn extends Component {
  render() {
    return (
      <div>
        <ul className="listStyleTypeNone ulFlex">
          <li className="width4per">
          </li>
          <li className="width20per ">
            <ul className="displayFlexColumn alignItemsLeft">
              <li>col 1 item1
                </li>
              <li>col 1 item2
                </li>
            </ul>
          </li>
          <li className="width4per">
          </li>
          <li className="width20per">
            <ul className="displayFlexColumn alignItemsLeft">
              <li>2nd col item1
                </li>
              <li>2nd col 1 item2
                </li>
            </ul>
          </li>
          <li className="width4per">
          </li>
          <li className="width20per">
            <ul className="displayFlexColumn alignItemsLeft">
              <li>3rd 1
                </li>
              <li>3rd 2
                </li>
              <li>#3
                </li>
            </ul>
          </li>
          <li className="width4per">
          </li>
          <li className="width20per">
            <ul className="displayFlexColumn alignItemsLeft">
              <li>4th 1
                </li>
              <li>4th 2
                </li>
              <li>#3
                </li>
            </ul>
          </li>
          <li className="width4per">
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterMiddleFourColumn;