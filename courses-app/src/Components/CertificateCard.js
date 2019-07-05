import React from 'react';
import faker from 'faker';

class Certificate extends React.Component {
    constructor(props) {
        super(props);
        this.img = faker.image.avatar;
        this.src = "";
    }

    render() {
        return (
            <div className="card-info-cert content">
                <div className="card-info-cert-img">
                    {/* <img src={this.img} alt="Certificate " /> */}
                    <i className="fas fa-certificate fa-8x"></i>
                </div>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href={this.src}>Link</a>
            </div>
        );
    }
}

export default Certificate; 