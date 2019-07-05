import React from 'react';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.css";
class Main extends React.Component {

    render() {

        return (
            <div className="main">

                <div class="divas">
	                <div class="textBlock">
		                <div class="tekstas">
			                <h2>Lorem ipsum dolor sit<br> amet, consetetur <br>sadipscing elitr, sed diam nonumy eirmod tempor?</h2>
		                </div>
                        <input class="searchas" type="text" placeholder="Search.." name="search">
                       <Button  onClick={this.props.search} variant="success"> DETALI PAIEŠKA</Button> 
	</div>
</div>
           
            </div>

        );
    }

}

export default Main;
