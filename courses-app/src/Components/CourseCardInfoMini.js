import React from 'react';

class CourseCardInfoMini extends React.Component {

    state = { showMoreInfo: false }

    onButtonClick = event => {
        if (this.state.showMoreInfo) {
            console.log('clicked');
            this.setState({ showMoreInfo: false })
        } else {
            console.log('aga');
            this.setState({ showMoreInfo: true })
        }
    }

    renderMiniInfo = () => {
        return (
            <div className="course-info-mini">
                <p>Lygis: <span className="course-info-mini-content">Beginnner</span></p>
                <p>Lektorius: <span className="course-info-mini-content">Beginnner</span></p>
                <p>Kalendorius: <span className="course-info-mini-content">Beginnner</span></p>
                <p>Sertifikatas: <span className="course-info-mini-content">Beginnner</span></p>
                <p>Atsiliepimai: <span className="course-info-mini-content">Beginnner</span></p>
                <p>Top skillsai: <span className="course-info-mini-content">Beginnner</span></p>
                <button onClick={() => this.onButtonClick()}>{this.state.showMoreInfo ? 'Mažiau' : 'Daugiau'}</button>
            </div>
        )
    }

    renderMoreInfo = () => {

    }


    render() {
        return (
            <div className="course-info-mini">
                {this.renderMiniInfo()}
            </div>
        );
    }
}

export default CourseCardInfoMini;