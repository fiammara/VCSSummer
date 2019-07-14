import React from 'react';

class CertificateCard extends React.Component {
    constructor(props) {
        super(props);
        this.cert = this.props.course.certificates[0];
    }

    render() {
        return (
            <div className="card-info-cert content">
                <div className="card-info-cert-img">
                    <img src={this.cert.logo} alt="Certificate " />
                    <h2>{this.cert.title}</h2>
                </div>
                <p>{this.cert.about}</p>
                <a href={this.cert.link}>Link</a>
            </div>
        );
    }
}

export default CertificateCard; 