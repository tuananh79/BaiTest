import React from "react";
import './brandS.scss';
import './grid.scss';
import window from '../assets/images/window.png'
import o2 from '../assets/images/object-02.png';
import o3 from '../assets/images/object-03.png';
import o6 from '../assets/images/object-06.png';
import o7 from '../assets/images/object-07.png';
import o4 from '../assets/images/object-04.png';
import o5 from '../assets/images/object-05.png';
import arrd from '../assets/images/arrdown.png';
class BrandS extends React.Component {
    render() {
        return (
            <>
                <div className="brands grid wide">

                    <div className="title ">
                        <h1>BRAND STORY</h1>
                        <label>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요.
                            디자이너가 아니더라도,  모든 팀에서
                            다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을
                            내딛어보세요.
                            비디오를 단 몇 분 만에 제작해보세요.</label>
                        <img src={arrd} alt="" />

                    </div>
                    <div className="window row">
                        <img src={window} alt="" />
                        <div className="titl col l-4 l-o-3">
                            <h1>What Happened’s Brand story</h1>
                            <label>청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                                봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                                긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                                인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                                아름답고 고행을 끝에 설산에서 황금시대를 이상을
                                운다. </label>
                            <button type="button">SEE MORE</button>
                            <img src={arrd} alt="" />

                        </div>

                    </div>
                    <div className="photobackgr">
                        <div className="plan">
                            <img className="o2" src={o2} alt="" />
                            <img className="o3" src={o3} alt="" />
                        </div>

                        <div className="book">
                            <img className="o6" src={o6} alt="" />
                            <img className="o7" src={o7} alt="" />
                        </div>
                        <div className="calendar">
                            <img className="o4" src={o4} alt="" />
                            <img className="o5" src={o5} alt="" />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default BrandS;