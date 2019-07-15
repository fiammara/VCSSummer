import React from 'react';
import { Link } from 'react-router-dom';

class CourseCardInfoMini extends React.Component {

    renderMiniInfo = () => {
        return (
            <div className="course-info-mini">
                <p>
                    <i className="fas fa-info-circle" />
                    <span className="course-info-mini-content">Lygis:</span>
                </p>
                <p>
                    <i className="fas fa-user-tie" />
                    <span className="course-info-mini-content">Lektorius: </span>
                </p>
                <p>
                    <i className="fas fa-calendar-alt" />
                    <span className="course-info-mini-content">Kalendorius: </span>
                </p>
                <p>
                    <i className="fas fa-certificate" />
                    <span className="course-info-mini-content">Sertifikatas: </span>
                </p>
                <p>
                    <i className="fas fa-comments" />
                    <span className="course-info-mini-content">Atsiliepimai: </span>
                </p>
                <p>
                    <i className="fas fa-list" />
                    <span className="course-info-mini-content">Top skillsai: </span>
                </p>
                <div className="course-info-mini-button">
                    {this.renderMoreInfo()}
                </div>
            </div>
        )
    }

    renderMoreInfo = () => {
        if (this.props.hideButtonMore) {
            return null;
        }
        return (
            <Link to={`/courses/${this.props.course.id}`}>
                <button>Daugiau</button>
            </Link>
        )
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