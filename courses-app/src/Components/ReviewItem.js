import React from 'react';

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
        this.review = this.props.review;
    }

    render() {
        return (
            <div className="card-info-reviews-card">
                <p>{this.props.renderStars(this.review.rating)}</p>
                <p>{this.review.review}</p>
                <div>
                    <div className="card-info-reviews-user">
                        <p>{this.review.user}</p>
                        <p>{this.review.date}</p>
                    </div>
                    <div className="card-info-reviews-buttons">
                        <i className="far fa-thumbs-up"></i>
                        <i className="far fa-thumbs-down"></i>
                        <button>Pranešti</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default ReviewItem; 
