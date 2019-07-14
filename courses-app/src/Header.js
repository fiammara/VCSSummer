import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
import { slide as MenuSlide } from 'react-burger-menu'

class Header extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div className="header1 sticky-top">
                <Link to="/">LOGO</Link>
                <MenuSlide outerContainerId={"header2"} pageWrapId={"page-wrap"} width={'5%'} height={'5%'} right>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
                </MenuSlide>
            </div>
        );
    }

}

export default Header;