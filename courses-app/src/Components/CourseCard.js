import React from 'react';
import '../App_sena_versija.css';

class CourseCard extends React.Component {
    renderRating(rating) {
        let finalRating = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                finalRating.push(<i className="fas fa-star"></i>);
            } else {
                finalRating.push(<i className="far fa-star"></i>);
            }
        }
        return finalRating;
    }

    render() {
        return (
            <div className="course-card">
                <i className="far fa-bookmark fa-2x course-card-bookmark"></i>
                <div className="course-card-top">
                    <div className="course-card-logo">
                        <img className="logo-image" src={this.props.course.logo} alt="courses logo" />
                    </div>
                    <div className="course-card-title">{this.props.course.title}</div>
                </div>
                <div className="course-card-bottom">
                    <div className="course-card-bottom-left">
                        <span className="course-card-place">
                            <i className="fas fa-map-marker-alt"></i>
                            {this.props.course.location}
                        </span>
                        <span className="course-card-duration">
                            <i className="fas fa-history"></i>
                            {this.props.course.duration} d.
                            </span>
                        <span className="course-card-date">
                            <i className="far fa-calendar-alt"></i>
                            {this.props.course.date}
                        </span>
                    </div>
                    <div className="course-card-bottom-right">
                        <div className="course-card-rating">
                            {this.renderRating(this.props.course.countRating())}
                            <span className="course-card-rating-total">{this.props.course.reviews.length}</span>
                        </div>
                        <h2 className="course-card-price">&euro; {this.props.course.price} </h2>
                    </div>
                </div>
                <div className="course-card-arrow-more">
                    <i className="fas fa-arrow-down fa-2x"></i>
                </div>
            </div>
        )
    }
}

export default CourseCard;

