import React from "react";
import './happeNed.scss';
import window from '../assets/images/video.png';
import h from '../assets/images/video-object-05.png';
import dr from '../assets/images/video-object-04.png'
import h2 from '../assets/images/video-object-03.png'
import e from '../assets/images/video-object-01.png'
import p from '../assets/images/video-object-08.png'
import b from '../assets/images/video-object-09.png'
import heart from '../assets/images/video-object-06.png'
import w from '../assets/images/video-object-07.png'
import arrd from '../assets/images/arrdown.png';
class Happened extends React.Component {
    render() {
        return (
            <>
                <div className="happened grid wide">
                    <div className="title col l-12">
                        <h1>WHAT HAPPENED</h1>
                        <label>How to create mobile-optimized videos in minutes. Not a designer,
                            every team makes a lot of videos Can be trimmed.
                            Take the first </label>
                        <button type="button">SEE MORE</button>
                        <img src={arrd} alt="" />
                    </div>
                    <div className="window">
                        <img src={window} alt="" />
                    </div>
                    <div className="photo">
                        <img className="h" src={h} alt=""></img>
                        <img className="drink" src={dr} alt="" />

                    </div>
                    <div className="eh">
                        <img className="h2" src={h2} alt="" />
                        <img className="e" src={e} alt="" />
                    </div>
                    <div className="pink-b">

                        <img className="pink" src={p} alt="" />
                        <img className="black" src={b} alt="" />
                    </div>
                    <div className="heart-w ">
                        <img className="w" src={w} alt="" />
                        <img className="heart" src={heart} alt="" />

                    </div>
                </div>
            </>
        )
    }
}
export default Happened;