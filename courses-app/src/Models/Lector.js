import React from "react";

class Lector extends React.Component {
    constructor(props) {
        super(props);
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.img = props.img ? props.img : "";
    }

    render() {
        return (
            <div className="card-info-lector content">
                <div className="card-info-lector-img">
                    {/* <img src={this.img} alt="lector image" /> */}
                    <i className="fas fa-user-graduate fa-8x"></i>
                    <p>{this.firstName} {this.lastName}</p>
                </div>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        );
    }
}

const lector = new Lector("John", "Doe");
const InfoLector = () => lector.render();

export default InfoLector; 