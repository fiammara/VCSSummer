import React from 'react';
import CourseCardInfo from './CourseCardInfo';
import '../Components/courseCard.css';

class CourseCard extends React.Component {
    constructor(props) {
        super(props);
        this.course = this.props.course;
        this.state = { arrowPressed: false };
    }


    onArrowClick = () => {
        this.state.arrowPressed === false ? this.setState({ arrowPressed: true }) : this.setState({ arrowPressed: false });
    }

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

    renderCourseCardInfo = () => this.state.arrowPressed === true ? <CourseCardInfo course={this.course} /> : '';

    renderArrowButton = () => this.state.arrowPressed === true ? 'fas fa-arrow-up fa-2x' : 'fas fa-arrow-down fa-2x';

    render() {
        return (
            <div className="course-card" data-id={this.props.id}>
                <i className="far fa-bookmark fa-2x course-card-bookmark"></i>
                <div className="course-card-top">
                    <div className="course-card-logo">
                        <img className="logo-image" src={this.course.logo} alt="courses logo" />
                    </div>
                    <div className="course-card-title">{this.course.title}</div>
                </div>
                <div className="course-card-bottom">
                    <div className="course-card-bottom-left">
                        <span className="course-card-place">
                            <i className="fas fa-map-marker-alt"></i>
                            {this.course.location}
                        </span>
                        <span className="course-card-duration">
                            <i className="fas fa-history"></i>
                            {this.course.duration} d.
                            </span>
                        <span className="course-card-date">
                            <i className="far fa-calendar-alt"></i>
                            {this.course.date}
                        </span>
                    </div>
                    <div className="course-card-bottom-right">
                        <div className="course-card-rating">
                            {this.renderRating(this.course.countRating())}
                            <span className="course-card-rating-total">{this.course.reviews.length}</span>
                        </div>
                        <h2 className="course-card-price">&euro; {this.course.price} </h2>
                    </div>
                </div>
                <div className="course-card-arrow-more">
                    <i className={this.renderArrowButton()} onClick={() => this.onArrowClick()}></i>
                </div>
                {this.renderCourseCardInfo()}
            </div>
        )
    }
}

export default CourseCard;

