import React from "react";

class Lector {
    constructor(firstName, lastName, img = "") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.img = img;
    }

    renderNavigation() {
        return (
            <div className="card-info-tabs">
                <div className="card-info-tabs-tab">PROGRAMA</div>
                <div className="card-info-tabs-tab tab-active">LEKTORIUS</div>
                <div className="card-info-tabs-tab">KALENDORIUS</div>
                <div className="card-info-tabs-tab">SERTIFIKATAS</div>
                <div className="card-info-tabs-tab">ATSILIEPIMAI</div>
                <div className="card-info-tabs-tab">KONTAKTAI</div>
            </div>
        );
    }

    renderLector() {
        return (
            <div className="card-info">
                {this.renderNavigation()}
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
            </div>
        );
    }
}

const lector = new Lector("John", "Doe");
const InfoLector = () => lector.renderLector();

export default InfoLector; 