import React from "react";
import CourseCard from "./CourseCard";
//import { Z_RLE } from "zlib";

class Review {
    constructor(course, review, user, date, rating) {
        this.course = course;
        this.review = review;
        this.user = user;
        this.date = date;
        this.rating = rating
    }
}

const allReviews = [
    new Review(CourseCard.allCourses[0], 'Very nice!', 'Someone', '2019.06.10', 5),
    new Review(CourseCard.allCourses[1], 'Meh', 'Haxor', '2019.06.12', 2)
];

const calculateAverage = () => {
    let sum = 0;
    allReviews.forEach(element => {
        sum += element.rating;
    });
    return sum / allReviews.length;
}

const countStars = (rating) => {
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

const render = (allReviews) => {
    return (
        <div className="card-info-reviews content">
            <div className="card-info-reviews-top">
                <p><span>{calculateAverage()}</span> Bendras reitingas</p>
            </div>
            <div className="card-info-reviews-bottom">
                {allReviews.map(el => {
                    return (
                        <div className="card-info-reviews-card">
                            <p>{countStars(el.rating)}</p>
                            <p>{el.review}</p>
                            <div>
                                <div className="card-info-reviews-user">
                                    <p>{el.user}</p>
                                    <p>{el.date}</p>
                                </div>
                                <div className="card-info-reviews-buttons">
                                    <i className="far fa-thumbs-up fa-2x"></i>
                                    <i className="far fa-thumbs-down fa-2x"></i>
                                    <button>Pranešti</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const InfoReviews = () => render(allReviews);

export default InfoReviews; 
