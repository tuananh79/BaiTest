import React from "react";
import './haIssue.scss';
import arrow from '../assets/images/news-img-01.png';
import './grid.scss';
import i1 from '../assets/images/nike.jpg'
import i2 from '../assets/images/news-img-03.png'
import i3 from '../assets/images/news-img-04.png'
import i4 from '../assets/images/news-img-05.png'
import ba from '../assets/images/news-object-02.png'
import nam from '../assets/images/news-object-03_2.png'
import coin from '../assets/images/news-object-03.png'
import hot from '../assets/images/news-object-04.png'
import lol from '../assets/images/news-object-05.png'
import arrd from '../assets/images/arrdown.png';
class HaIssue extends React.Component {
    render() {
        return (
            <>
                <div className="HaIssue grid wide l-12">
                    <div className="title">
                        <h1>HAPPENED'S ISSUE</h1>
                        <label>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                            다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요.
                            비디오를 단 몇 분 만에 제작해보세요.</label>
                        <button type="button">SEE MORE</button>
                        <img src={arrd} alt="" />
                    </div>
                    <div className="brand wide row  no-gutters l-12 ">
                        <div className="brd l-2 ">
                            <h1>WHPN ISSUE</h1>
                            <img src={arrow} alt="" />
                            <div className="coin">
                                <img className="c" src={coin} alt="" />
                            </div>
                        </div>

                        <div className="brd1  l-2 ">
                            <h1>B BRAND</h1>
                            <img className="me" src={i1} alt="" />
                            <div className="hot">
                                <img className="h" src={hot} alt="" />
                            </div>
                        </div>
                        <div className="brd1 l-2 ">
                            <h1>C BRAND</h1>
                            <img className="me" src={i2} alt="" />
                        </div>
                        <div className="brd1 cl l-2 " >
                            <h1>D BRAND</h1>
                            <img className="me" src={i3} alt="" />
                        </div>
                        <div className="brd1 l-2 ">
                            <h1>E BRAND</h1>
                            <img className="me" src={i4} alt="" />
                            <div className="lol">
                                <img className="l" src={lol} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="iconB">
                        <div className="xucxac col">
                            <img className="o5" src={nam} alt="" />
                            <img className="o3" src={ba} alt="" />

                        </div>

                    </div>


                </div>
            </>
        )
    }
}
export default HaIssue;