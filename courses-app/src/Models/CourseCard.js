import React from "react";



const randomDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

class Course {
    constructor(title = "Some awesome course", description = randomDesc, date = "2016.06.10", price = 700) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.price = `\u20ac` + price;
        this.rating = this.countCourseRating(4);
        this.totalRatings = 75;
        this.logo = <i className="fab fa-reddit fa-5x"></i>;
    }

    countCourseRating(rating) {
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

    createDiv() {
        return (
            <div className="course-card">
                <i className="far fa-bookmark fa-2x course-card-bookmark"></i>
                <div className="course-card-top">
                    <div className="course-card-logo">
                        {/* <img src="" alt="courses logo" /> */}
                        {this.logo}
                    </div>
                    <div className="course-card-title">{this.title}</div>
                </div>
                <div className="course-card-bottom">
                    <div className="course-card-bottom-left">
                        <span className="course-card-place">
                            <i className="fas fa-map-marker-alt"></i>
                            Vilnius
                        </span>
                        <span className="course-card-duration">
                            <i className="fas fa-history"></i>
                            50 d.
                        </span>
                        <span className="course-card-date">
                            <i className="far fa-calendar-alt"></i>
                            {this.date}
                        </span>
                    </div>
                    <div className="course-card-bottom-right">
                        <div className="course-card-rating">
                            {this.rating}
                            <span className="course-card-rating-total">{this.totalRatings}</span>
                        </div>
                        <h2 className="course-card-price">{this.price} </h2>
                    </div>
                </div>
                <i class="fas fa-arrow-down fa-2x course-card-arrow-more"></i>
            </div>
        );
    }
}

const allCourses = [
    new Course(),
    new Course("Last one")
]

const CourseCards = () => {
    return allCourses.map(el => el.createDiv());
}


export default { CourseCards, allCourses };

