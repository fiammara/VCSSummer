import React from "react";
import Calendar from 'react-calendar';
import ACourseList from "./ACourseList";
class CourseCalendar extends React.Component {
    state = {
      date: new Date(),
    }

    render() {
        return (
          <div className="calendarContainer">
            <Calendar value={this.state.date}/>
           < ACourseList/>
          </div>
        );
      }
    }
    
export default CourseCalendar;