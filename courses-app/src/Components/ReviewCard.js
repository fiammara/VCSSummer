import React from 'react';

class ReviewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { reviews: this.props.course.reviews };
        this.course = this.props.course;
    }

    calculateAverage = () => {
        let sum = 0;
        this.state.reviews.forEach(element => {
            sum += element.rating;
        });
        return (sum / this.state.reviews.length).toFixed(1);
    }

    countStars = (rating) => {
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

    renderReviews = () => this.state.reviews.map(review => {
        return (
            <div className="card-info-reviews-card">
                <p>{this.countStars(review.rating)}</p>
                <p>{review.review}</p>
                <div>
                    <div className="card-info-reviews-user">
                        <p>{review.user}</p>
                        <p>{review.date}</p>
                    </div>
                    <div className="card-info-reviews-buttons">
                        <i className="far fa-thumbs-up fa-2x"></i>
                        <i className="far fa-thumbs-down fa-2x"></i>
                        <button>Pranešti</button>
                    </div>
                </div>
            </div>
        );
    });


    render = () => {
        return (
            <div className="card-info-reviews content">
                <div className="card-info-reviews-top">
                    <p><span>{this.calculateAverage()}</span> Bendras reitingas</p>
                </div>
                <div className="card-info-reviews-bottom">
                    {this.renderReviews()}
                </div>
            </div>
        );
    }
}

export default ReviewCard; 
