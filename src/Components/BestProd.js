import React from "react";
import './bestProd.scss';
import './grid.scss';
import bi1 from '../assets/images/best-image-01.png';
import bi2 from '../assets/images/best-image-02.png';
import bi3 from '../assets/images/best-image-03.png';
import pr1 from '../assets/images/producticon-01.png';
import pr2 from '../assets/images/producticon-02.png';
import pr3 from '../assets/images/producticon-03.png';
import iGo from '../assets/images/go-icon.png';
import arrd from '../assets/images/arrdown.png';

class BestProd extends React.Component {
    render() {
        return (
            <>
                <div className="grid wide bestprod ">
                    <div className="content col l-12">
                        <div className="title col">
                            <h1>BEST PRODUCT</h1>
                            <label>
                                How to create mobile-optimized videos in minutes.
                                Not a designer, every team makes a lot of videos
                                Can be trimmid. Take the first
                            </label>
                            <img src={arrd} alt="" />
                        </div>
                        <div className="photo row no-gutters">
                            <div className="imgs col l-4">
                                <img src={bi1} alt="" />
                                <div className="icon">
                                    <img src={pr1} alt="" />
                                </div>
                                <div className="sug">
                                    <p>How to create mobile-optimized</p>
                                    <img src={iGo} alt="" />
                                </div>
                            </div>
                            <div className="imgs col l-4">
                                <img src={bi2} alt="" />
                                <div className="icon">
                                    <img src={pr2} alt="" />
                                </div>
                                <div className="sug">
                                    <p>How to create mobile-optimized</p>
                                    <img src={iGo} alt="" />
                                </div>
                            </div>
                            <div className="imgs col l-4">
                                <img src={bi3} alt="" />
                                <div className="icon">
                                    <img src={pr3} alt="" />
                                </div>
                                <div className="sug">
                                    <p>How to create mobile-optimized</p>
                                    <img src={iGo} alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </>
        )
    }
}
export default BestProd;