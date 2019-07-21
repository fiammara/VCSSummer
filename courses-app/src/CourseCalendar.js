import React from "react";
import Calendar from 'react-calendar';

class CourseCalendar extends React.Component {
    state = {
      date: new Date(),
    }

    render() {
        return (
          <div className="calendarContainer">
            <Calendar value={this.state.date}/>
          </div>
        );
      }
    }
    
export default CourseCalendar;