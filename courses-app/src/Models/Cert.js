import React from "react";
import CourseCards from "./Models/CourseCard";

class InfoAboutCourse {
    constructor(course) {
        this.course = 'course';
    }

    renderNavigation() {
        return (
            <div className="card-info-tabs">
                <div className="card-info-tabs-tab tab-active">PROGRAMA</div>
                <div className="card-info-tabs-tab">LEKTORIUS</div>
                <div className="card-info-tabs-tab">KALENDORIUS</div>
                <div className="card-info-tabs-tab">SERTIFIKATAS</div>
                <div className="card-info-tabs-tab">ATSILIEPIMAI</div>
                <div className="card-info-tabs-tab">KONTAKTAI</div>
            </div>
        );
    }

    renderInfo() {
        return (
            <div className="card-info">
                {this.renderNavigation()}
                <div className="card-info-program">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button>Skaityti daugiau</button>
                </div>
            </div>
        );
    }

    renderLector() {
        return (<div className="card-info-lector">
            <div className="card-info-lector-img">
                {/* <img src="" alt="lector image" /> */}
                <i className="fas fa-user-graduate fa-8x"></i>
            </div>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>);
    }

    renderCalendar() {
        return (<div className="course-info-calendar">

        </div>);
    }

    renderCertificate() {
        return (<div className="course-info-certificate">

        </div>);
    }

    renderReviewsTotal() {
        return (<div className="course-info-reviews">

        </div>);
    }

    renderReviews() {
        return (<div className="course-info-reviews">

        </div>);
    }

    renderContact() {
        return (<div className="course-info-contacts">

        </div>);
    }
}

const information = new InfoAboutCourse(CourseCards.allCourses[0]);
const info = () => {
    return (
        information.renderInfo(),
        information.renderLector()
    );
}

export default info; 
