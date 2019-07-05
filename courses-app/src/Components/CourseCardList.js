import React from 'react';
import CourseCard from './CourseCard';

const CourseCardList = ({ courses }) => {
    console.log(courses);
    const renderedList = courses.map((course) => {
        return <CourseCard course={course} key={course.id} />
    });
    return <div>{renderedList}</div>
}

export default CourseCardList;