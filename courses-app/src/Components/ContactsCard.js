import React from 'react';

class ContactsCard extends React.Component {
    constructor(props) {
        super(props);
        this.school = this.props.course.school;
    }

    render() {
        return (
          <div className="card-info-contacts content">
            <div className="card-info-contacts-img">
              <img src={this.school.logo} alt={this.school.name} />
            </div>
            <h3>{this.school.name}</h3>
            <p>Adresas: {this.school.addressStreet}</p>
            <p>Miestas: {this.school.addressCity}</p>
            <p>E-mail: {this.school.contacts.email}</p>
            <p>Telefonas: {this.school.contacts.phone}</p>
            <p>Internetinis puslapis: <a href={this.school.contacts.web}>Web site</a></p>
            <p>Papildoma informacija: {this.school.about}</p>
            <div className="card-info-contacts button">
              <button>Susisiekti</button>
            </div>
          </div>
        );
    }
}

export default ContactsCard; 
