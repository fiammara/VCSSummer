import React from 'react';
import CourseCard from './CourseCard';
import CourseInfo from './CourseInfo';
import { allCourses } from './fakeData';
import '../Components/courseCard.css';

class Course extends React.Component {
    state = { course: allCourses[this.props.match.params.id] };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleSelectedCourse = (id) => {
        this.setState({ course: allCourses[id] });
    }

    render() {
        return (
          <div className="course-container">
            <CourseCard course={this.state.course} hideButtonMore />
            <CourseInfo course={this.state.course} />
          </div>
        );
    }
};

export default Course;
