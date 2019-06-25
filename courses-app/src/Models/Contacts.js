import React from "react";

class Contacts {
    constructor(
        logo = "",
        name = "Some awesome school",
        address = "Somwhere in Vilnius",
        city = "Vilnius",
        email = "awesome@cool.com",
        phone = "118",
        web = "",
        info = "Some additional info"
    ) {
        this.logo = logo;
        this.name = name;
        this.address = address;
        this.city = city;
        this.email = email;
        this.phone = phone;
        this.web = web;
        this.info = info;
    }

    renderNavigation() {
        return (
            <div className="card-info-tabs">
                <div className="card-info-tabs-tab">PROGRAMA</div>
                <div className="card-info-tabs-tab">LEKTORIUS</div>
                <div className="card-info-tabs-tab">KALENDORIUS</div>
                <div className="card-info-tabs-tab">SERTIFIKATAS</div>
                <div className="card-info-tabs-tab">ATSILIEPIMAI</div>
                <div className="card-info-tabs-tab tab-active">KONTAKTAI</div>
            </div>
        );
    }

    render() {
        return (
            <div className="card-info">
                {this.renderNavigation()}
                <div className="card-info-contacts content">
                    <div className="card-info-contacts-img">
                        <i className="fas fa-school fa-8x"></i>
                    </div>
                    <h2>{this.name}</h2>
                    <p>Adresas: {this.address}</p>
                    <p>Miestas: {this.city}</p>
                    <p>E-mail: {this.email}</p>
                    <p>Telefonas: {this.phone}</p>
                    <p>Internetinis puslapis: <a href={this.web}>Web site</a></p>
                    <p>Papildoma informacija: {this.info}</p>
                </div>
            </div>
        );
    }
}

const contacts = new Contacts();
const InfoContacts = () => contacts.render();

export default InfoContacts; 