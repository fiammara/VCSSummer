import React from "react";

class CalendarCard extends React.Component {
    constructor(props) {
        super(props);
        this.courses = props.courses;
    }

    renderCalendar(el) {
        return (
            <div className="card-info-calendar-item">
                <div>
                    <i className="far fa-calendar-alt fa-4x"></i>
                </div>
                <div>
                    <p>{el.date}</p>
                    <p>{el.duration} d.</p>
                    <p>{el.title}</p>
                </div>
            </div>

        );
    }

    render() {
        return (
            <div className="card-info-calendar">
                <h3>ARTIMIAUSI KURSAI</h3>
                {this.courses.map((el) => this.renderCalendar(el))}
            </div>
        );
    }
}

export default CalendarCard; 