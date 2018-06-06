import React, { Component } from 'react';
import '../SimpleStyle.css';

class NButtonOrderSummary extends Component {
    render() {
        return (
            <button className="buttonBlue width90per marginTop10px">
                <img className="square25 verticalAlignMiddle" src="https://www.intel.com/content/dam/www/public/us/en/images/distributor/distributor-icon-lock-white-rwd.png.rendition.intel.web.256.192.png" alt={"Pad Lock not Master hehe"} />
                Continue to Shopping
            </button>
        );
    }
}

export default NButtonOrderSummary;