import React from 'react';
import "./Main.css";

class SearchBar extends React.Component {

    render() {

        return (
            <div className="title1">
                <input className="searchas2" type="text" name="search" />
                <h4 className="detaliP">detali paieska</h4>
            </div>
        );
    }
}
export default SearchBar;
