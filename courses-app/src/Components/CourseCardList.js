import React from 'react';
import CourseCard from './CourseCard';

class CourseCardList extends React.Component {

    state = { selectedCourse: {} };

    onArrowClick = (course) => {
        this.setState({ selectedCourse: course });
    }

    renderList = () => this.props.courses.map((course) => {
        return <CourseCard course={course} id={course.id} key={course.id} onArrowClick={this.onArrowClick} />
    });

    render() {
        return <div>{this.renderList()}</div>;
    }
}

export default CourseCardList;