import React from "react";
import Logo from '../assets/images/logo.png';
import './heaDer.scss';
import '../resources/fontawesome/css/all.css';
class Header extends React.Component {
    render() {
        return (
            <>
                <div className="main grid wide l-12">
                    <div className="nav">
                        {/* nav PC */}
                        <a href="#"><img src={Logo} alt="" /></a>
                        <nav className="nav__pc">

                            <ul className="nav__list">
                                <li>
                                    <a href="#" className="nav__link">INTRODUCTION</a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">SOLUTION</a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">RATE PLAN</a>
                                </li>
                                <li>
                                    <a className="nav__link">|</a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">LOGIN</a>
                                </li>
                                <li>
                                    <a href="#" className="nav__link">APPLY FOR FREE USE</a>
                                </li>


                            </ul>
                            <a href="#" className="a"><i class="fas fa-bars"></i></a>

                        </nav>
                        <label for="nav-mobinput" className="nav__bars-button">
                            <i class="fas fa-bars"></i>
                        </label>


                        <input type="checkbox" class="nav__input" name="" id="nav-mobinput" />

                        <label for="nav-mobinput" className="nav__overlay">

                        </label>
                        <nav className="nav__mob">
                            <label for="nav-mobinput" className="nav__mob-close">
                                <i class="fas fa-times"></i>
                            </label>

                            <ul className="nav__moblist">
                                <li>
                                    <a href="#" className="nav__moblink">INTRODUCTION</a>
                                </li>
                                <li>
                                    <a href="#" className="nav__moblink">SOLUTION</a>
                                </li>
                                <li>
                                    <a href="#" className="nav__moblink">RATE PLAN</a>
                                </li>
                                <li>
                                    <a className="nav__moblink">|</a>
                                </li>
                                <li>
                                    <a href="#" className="nav__moblink">LOGIN</a>
                                </li>
                                <li>
                                    <a href="#" className="nav__moblink">APPLY FOR FREE USE</a>
                                </li>

                            </ul>

                        </nav>
                    </div>
                </div>
            </>
        )
    }
}
export default Header;