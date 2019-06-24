import React from "react";

class Certificate {
    constructor(img = "", src = "") {
        this.img = img;
        this.src = src;
    }

    renderNavigation() {
        return (
            <div className="card-info-tabs">
                <div className="card-info-tabs-tab">PROGRAMA</div>
                <div className="card-info-tabs-tab">LEKTORIUS</div>
                <div className="card-info-tabs-tab">KALENDORIUS</div>
                <div className="card-info-tabs-tab tab-active">SERTIFIKATAS</div>
                <div className="card-info-tabs-tab">ATSILIEPIMAI</div>
                <div className="card-info-tabs-tab">KONTAKTAI</div>
            </div>
        );
    }

    render() {
        return (
            <div className="card-info">
                {this.renderNavigation()}
                <div className="card-info-cert content">
                    <div className="card-info-cert-img">
                        {/* <img src={this.img} alt="lector image" /> */}
                        <i className="fas fa-certificate fa-8x"></i>
                    </div>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href={this.src}>Link</a>
                </div>
            </div>
        );
    }
}

const cert = new Certificate();
const InfoCert = () => cert.render();

export default InfoCert; 