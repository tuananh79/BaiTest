import React from "react";
import banner from '../assets/images/main-banner.png';
import imgwh from '../assets/images/introduction-bg.png';
import './banNer.scss';
import './grid.scss';
import arrd from '../assets/images/arrdown.png';
class Banner extends React.Component {
    render() {
        return (
            <>
                <div className="banner grid wide l-12">
                    <img className=" " src={banner} alt="" />
                </div>
                <div className="wh grid wide l-12">
                    <div className="title">
                        <h1>WHAT HAPPENED!</h1>
                        <label>
                            How to create mobile-optimized videos in minutes.
                            Not a designer,<br />every team makes a lot of videos
                            Can be trimmid. Take the first <br />step to your brand's
                            success. How to create <br />mobile-optimized videos in
                            minutes.
                        </label>
                        <img src={arrd} alt="" />
                    </div>

                </div>

            </>
        )
    }
}
export default Banner;