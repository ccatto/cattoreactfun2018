import React, { Component } from 'react';
import '../SimpleStyle.css';

class FooterSocial extends Component {
  render() {
    return (
      <ul className="flexRowNoWrap justifyContentFlexEnd" >
        <li className="width10px"></li>
        <li className="width30px">
          <a href="https://www.youtube.com/newellbrands" target="_blank">
            <img className="square30" src="https://siteassets.pagecloud.com/dogtv/images/white-youtube-logo-png-ID-d568aaea-aaf9-4f4b-c206-a7dec7b85acb.png" />
          </a>
        </li>
        <li className="width10px"></li>
        <li className="width30px ">
          <a href="https://www.instagram.com/newellbrands/" target="_blank">
            <img className="square25" src="https://readypublication.com/wp-content/uploads/instagram.png" />
          </a>
        </li>
        <li className="width10px"></li>
        <li className="width30px">
          <a href="https://www.facebook.com/newellbrands/" target="_blank">
            <img className="square30" src="http://www.lef-learn-french.com/Resources/Pictures/facebook%20transparent%20white%20circle.png" />
          </a>
        </li>
        <li className="width10px"></li>
        <li className="width30px">
          <a href="https://www.linkedin.com/in/catto/" target="_blank">
            <img className="square30" src="https://www.tartan-builders.com/wp-content/uploads/2016/03/linkedin-transparent-300x300.png" />
          </a>
        </li>
        <li className="width10px"></li>
        <li className="width30px">
          <a href="https://twitter.com/newell_brands?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
            <img className="square30" src="https://55935.thankyou4caring.org/image/twitter_logo_cutout.png" />
          </a>
        </li>
        <li className="width10px"></li>
        <li className="width30px">
          <a href="http://www.snapchat.com/add/Newell_Brands" target="_blank">
            <img className="square30" src="http://cyreneq.com/wp-content/uploads/2016/10/snapchat_icon_by_jmk_prime-dae9d2s-3-1024x1024.png" />
          </a>
        </li>
        <li className="width10px"></li>
        <li className="width30px">
          <a href="https://www.pinterest.com/pin/834925218391481727/" target="_blank">
            <img className="square30" src="http://www.rivistadesignarchitettura.com/j/images/pinterest_logo.png" />
          </a>
        </li>
        <li className="width10px"></li>
      </ul>
    );
  }
}

export default FooterSocial;
