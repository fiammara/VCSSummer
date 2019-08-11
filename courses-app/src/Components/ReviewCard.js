import React from 'react';
import ReviewItem from './ReviewItem';

class ReviewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { reviews: this.props.course.reviews };
        this.course = this.props.course;
    }

    calculateAverage = () => {
        let sum = 0;
        this.course.reviews.forEach(element => {
            sum += element.rating;
        });
        return (sum / this.course.reviews.length).toFixed(1);
    }

    renderStars = (rating) => {
        let finalRating = [];
        for (let i = 0; i < 5; i += 1) {
            if (i < rating) {
                finalRating.push(<i className="fas fa-star" />);
            } else {
                finalRating.push(<i className="far fa-star" />);
            }
        }
        return finalRating;
    }

    countTotal = (rating) => {
        const length = this.course.reviews.length;
        return {
            total: this.course.reviews.filter(review => review.rating === rating).length,
            get percentage() { return `${Math.round(this.total / length * 100)}%` }
        };
    }

    onAverageClick = () => {
        this.setState({ reviews: this.course.reviews });
    }

    onTotalRatingsClick = (event) => {
        const rating = parseInt(event.target.getAttribute('data-total'));
        let reviews = this.course.reviews.filter(review => review.rating === rating);
        this.setState({ reviews });
    }

    renderReviewTotals = () => [5, 4, 3, 2, 1].map(el => {
        return (
          <p>
            {this.renderStars(el)}
            <span
                    className="card-info-review-totals_total"
                    data-total={el}
                    onClick={this.onTotalRatingsClick}>
                    ({this.countTotal(el).total})
            </span>
            <span className="card-info-review-totals_percentage">
              {this.countTotal(el).percentage}
            </span>
          </p>
        );
    });

    renderReviews = () => this.state.reviews.map(review => {
        return <ReviewItem review={review} key={review.id} renderStars={this.renderStars} />;
    });

    renderForm() {
        return (
          <form>
            <label>Palikti atsiliepimą</label>
            <div>{this.renderStars(0)}</div>
            <textarea />
            <p>Vartotojo vardas:</p>
            <input label="username" type="text" />
            <p>Data</p>
            <input label="username" type="text" />
            <div className="card-info-review-form button">
              <button type="submit">Pateikti</button>
            </div>
          </form>
        );
    }

    render() {
        return (
          <div className="card-info-reviews content">
            <div className="card-info-reviews-top">
              <p>
                <span className="card-info-reviews-average" onClick={this.onAverageClick}>
                  {this.calculateAverage()}
                </span> 
                Bendras reitingas
              </p>
              <div className="card-info-reviews-totals">
                {this.renderReviewTotals()}
              </div>
            </div>
            <div className="card-info-reviews-bottom">
              {this.renderReviews()}
            </div>
            <div className="card-info-review-form">
              {this.renderForm()}
            </div>
          </div>
        );
    }
}

export default ReviewCard; 
