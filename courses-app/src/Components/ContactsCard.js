import React from "react";

class ContactsCard extends React.Component {
    constructor(props) {
        super(props);
        this.logo = "";
        this.name = "Some awesome school";
        this.address = "Somwhere in Vilnius";
        this.city = "Vilnius";
        this.email = "awesome@cool.com";
        this.phone = "118";
        this.web = "";
        this.info = "Some additional info";
    }

    render() {
        return (
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
        );
    }
}

export default ContactsCard; 