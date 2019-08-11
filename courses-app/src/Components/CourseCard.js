import React from 'react';
import CourseCardInfoMini from './CourseCardInfoMini';
import '../Components/courseCard.css';

class CourseCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { arrowPressed: false, course: this.props.course };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.course !== this.props.course) {
            this.setState({ course: this.props.course });
            window.scrollTo(0, 0);
        }
    }

    onArrowClick = () => {
        this.state.arrowPressed === false ? this.setState({ arrowPressed: true }) : this.setState({ arrowPressed: false });
    }

    renderRating(rating) {
        let finalRating = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                finalRating.push(<i className="fas fa-star" />);
            } else {
                finalRating.push(<i className="far fa-star" />);
            }
        }
        return finalRating;
    }

    renderCourseCardInfo = () => {
        if (this.props.hideButtonMore || this.state.arrowPressed) {
            return <CourseCardInfoMini course={this.state.course} hideButtonMore={this.props.hideButtonMore} />;
        }
        return null;
    }

    renderArrowButton = () => {
        if (!this.props.hideButtonMore) {
            let className;
            if (this.state.arrowPressed === true) {
                className = 'course-card-arrow pointing-top';
            } else {
                className = 'course-card-arrow pointing-bottom';
            }
            return (
              <div className="course-card-arrow-more">
                <div className={className} onClick={() => this.onArrowClick()} />
              </div>
            );
        } else {
            return null;
        }
    }
    
    render() {
        return (
          <div className="course-card" data-id={this.props.id}>
            <i className="far fa-bookmark course-card-bookmark" />
            <div className="course-card-top">
              <div className="course-card-logo">
                <img className="logo-image" src={this.props.course.logo} alt="courses logo" />
              </div>
              <div className="course-card-title">{this.props.course.title}</div>
            </div>
            <div className="course-card-bottom">
              <div className="course-card-bottom-left">
                <span className="course-card-place">
                  <i className="fas fa-map-marker-alt" />
                  {this.props.course.location}
                </span>
                <span className="course-card-duration">
                  <i className="fas fa-history" />
                  {this.props.course.duration} 
                  d.
                </span>
                <span className="course-card-date">
                  <i className="far fa-calendar-alt" />
                  {this.props.course.date}
                </span>
              </div>
              <div className="course-card-bottom-right">
                <div className="course-card-rating">
                  {this.renderRating(this.props.course.rating)} 
                  { /*  <span className="course-card-rating-total">{this.state.course.reviews.length}</span> */}
                </div>
                <h2 className="course-card-price">
                  &euro; 
                  {this.props.course.price} 
                </h2>
              </div>
            </div>
            {this.renderArrowButton()}
            {this.renderCourseCardInfo()}
          </div>
        );
    }
}

export default CourseCard;
