import React from 'react';
import "./App.css";
class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <p>header LOGO</p>
                <div>
                    <button type="submit">Search</button>
                </div>

            </div>
        );
    }

}

export default Header;