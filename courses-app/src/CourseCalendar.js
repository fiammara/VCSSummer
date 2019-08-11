import React from 'react';
import Calendar from 'react-calendar';
import ACourseList from './ACourseList';

class CourseCalendar extends React.Component {
    state = {
      date: new Date(),
    }

    render() {
      const { date } = this.state;
        return (
          <div className="calendarContainer">
            <Calendar value={date} />
            <ACourseList />
          </div>
        );
      }
    }
    
export default CourseCalendar;
