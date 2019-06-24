import React from "react";

class Program {
    constructor() {

    }

    renderNavigation() {
        return (
            <div className="card-info-tabs">
                <div className="card-info-tabs-tab tab-active">PROGRAMA</div>
                <div className="card-info-tabs-tab">LEKTORIUS</div>
                <div className="card-info-tabs-tab">KALENDORIUS</div>
                <div className="card-info-tabs-tab">SERTIFIKATAS</div>
                <div className="card-info-tabs-tab">ATSILIEPIMAI</div>
                <div className="card-info-tabs-tab">KONTAKTAI</div>
            </div>
        );
    }

    renderProgram() {
        return (
            <div className="card-info">
                {this.renderNavigation()}
                <div className="card-info-program content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button>Skaityti daugiau</button>
                </div>
            </div>
        );
    }
}

const program = new Program();
const InfoProgram = () => program.renderProgram();


export default InfoProgram; 
