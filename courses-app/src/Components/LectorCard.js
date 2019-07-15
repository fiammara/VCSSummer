import React from "react";

class LectorCard extends React.Component {
    constructor(props) {
        super(props);
        this.lector = this.props.course.lector;

    }

    render() {
        return (
            <div className="card-info-lector content">
                <div className="card-info-lector-img">
                    <img src={this.lector.photo} alt="lector" />
                    < p > {this.lector.firstName} {this.lector.lastName}</p>
                </div>
                <p>Skills: {this.lector.skills}</p>
                <p>{this.lector.about}</p>
            </div >
        );
    }
}

export default LectorCard; 