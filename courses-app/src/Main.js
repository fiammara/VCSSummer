import React from 'react';

class Main extends React.Component {

    render() {

        return (
            <div className="main">

                <p>Main</p>
                <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1" />
                 <button onClick={this.props.search} > DETALI PAIEŠKA</button> 
                <div>
                
                </div>

            </div>
        );
    }

}

export default Main;
