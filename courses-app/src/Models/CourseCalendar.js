import React from "react";
import CourseCard from "./CourseCard";

class CourseCalendar {
    constructor(courses) {
        this.courses = courses;
    }

    renderNavigation() {
        return (
            <div className="card-info-tabs">
                <div className="card-info-tabs-tab">PROGRAMA</div>
                <div className="card-info-tabs-tab">LEKTORIUS</div>
                <div className="card-info-tabs-tab tab-active">KALENDORIUS</div>
                <div className="card-info-tabs-tab">SERTIFIKATAS</div>
                <div className="card-info-tabs-tab">ATSILIEPIMAI</div>
                <div className="card-info-tabs-tab">KONTAKTAI</div>
            </div>
        );
    }

    render() {
        return (
            <div className="card-info">
                {this.renderNavigation()}
                {this.courses.map(() => this.renderCalendar())}
            </div>
        );
    }

    renderCalendar() {
        return (
            <div className="card-info-calendar content">
                <h2>ARTIMIAUSI KURSAI</h2>
                <div>
                    <i className="far fa-calendar-alt fa-4x"></i>
                </div>
                <div>
                    <p>Data</p>
                    <p>Laikas</p>
                    <p>Papildoma informacija</p>
                </div>
            </div>
        );
    }
}

const calendar = new CourseCalendar(CourseCard.allCourses);
const InfoCalendar = () => calendar.render();

export default InfoCalendar; 