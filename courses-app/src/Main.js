import React from 'react';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.css";
import "./Main.css";
class Main extends React.Component {

    render() {

        return (
            <div className="main">
                <div className="divas">
                    <div className="textBlock">
                        <div className="tekstas">
                            <h2>Lorem ipsum dolor sit<span> amet, consetetur </span>sadipscing elitr, sed diam nonumy eirmod tempor?</h2>

                            <input className="searchas" type="text" placeholder="Search.." name="search" />
                            <Button onClick={this.props.search} variant="primary"> Detali paieška</Button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;
