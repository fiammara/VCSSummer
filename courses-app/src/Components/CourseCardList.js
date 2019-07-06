import React from 'react';
import CourseCard from './CourseCard';

class CourseCardList extends React.Component {

    state = { selectedCourse: {} };

    onArrowClick = (course) => {
        this.setState({ selectedCourse: course });
        console.log(course);
    }

    renderList = () => this.props.courses.map((course) => {
        return <CourseCard course={course} key={course.id} onArrowClick={this.onArrowClick} />
    });

    render() {
        return <div>{this.renderList()}</div>;
    }
}

export default CourseCardList;