import React from 'react';
import { Link } from 'react-router-dom';

class CourseCardInfoMini extends React.Component {

    renderMiniInfo = () => {
        return (
            <div className="course-info-mini">
                <p>Lygis: <span className="course-info-mini-content">Beginnner</span></p>
                <p>Lektorius: <span className="course-info-mini-content">Beginnner</span></p>
                <p>Kalendorius: <span className="course-info-mini-content">Beginnner</span></p>
                <p>Sertifikatas: <span className="course-info-mini-content">Beginnner</span></p>
                <p>Atsiliepimai: <span className="course-info-mini-content">Beginnner</span></p>
                <p>Top skillsai: <span className="course-info-mini-content">Beginnner</span></p>
                <Link to={`/courses/${this.props.course.id}`}>
                    <button>Daugiau</button>
                </Link>
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