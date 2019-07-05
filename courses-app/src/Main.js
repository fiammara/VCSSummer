import React from 'react';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.css";
class Main extends React.Component {

    render() {

        return (
            <div className="main">

                <p>Main</p>
                <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1" />
                 <Button  onClick={this.props.search} variant="success"> DETALI PAIEŠKA</Button> 
                <div>
                
                </div>

            </div>
        );
    }

}

export default Main;
