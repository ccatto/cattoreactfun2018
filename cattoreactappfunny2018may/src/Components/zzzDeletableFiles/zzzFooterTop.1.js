import React, { Component } from 'react';
import './SimpleStyle.css';

class FooterTop extends Component {
  render() {
    return (
        <ul className="backgroundColorBlue colorGrayLight footerTop flexRow3ColGutters">
          <li></li>
          <li>
            <ul className="flexRow4NoWrap">
              <li className="width50per textAlignLeft">
                Search
              </li>
              <li className="width50per textAlignRight">
                <ul className="flexRow4NoWrap justifyContentFlexEnd" >
                  <li className="width30px ">
                    <img className="square25" src="https://readypublication.com/wp-content/uploads/instagram.png" />
                  </li>
                  <li className="width10px"></li>
                  <li className="width30px">
                    <img className="square25" src="http://www.lef-learn-french.com/Resources/Pictures/facebook%20transparent%20white%20circle.png" />
                  </li>
                  <li className="width10px"></li>
                  <li className="width30px">
                    <img className="square25" src="https://55935.thankyou4caring.org/image/twitter_logo_cutout.png" />
                  </li>
                  <li className="width10px"></li>
                  <li className="width30px">
                    <img className="square25" src="http://www.rivistadesignarchitettura.com/j/images/pinterest_logo.png" />
                  </li>
                  <li className="width10px"></li>
                </ul>
              </li>
            </ul>
          </li>
          <li></li>
        </ul>
    );
  }
}

export default FooterTop;