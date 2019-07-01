import React from "react";
import CourseCard from "./CourseCard";

class CourseCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.courses = props.courses;
    }

    renderCalendar() {
        return (
            <div className="card-info-calendar-tab">
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

    render() {
        return (
            <div className="card-info-calendar content">
                {this.courses.map(() => this.renderCalendar())}
            </div>
        );
    }
}

export default CourseCalendar; 