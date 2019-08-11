import React from 'react';
import faker from 'faker';
import CourseCard from './CourseCard';

class CourseCardList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            courses: [
                {
                    id: 0,
                    title: faker.commerce.productName(),
                    logo: faker.image.image(),
                    location: faker.address.city(),
                    duration: '1',
                    date: '2019-12-01',
                    price: faker.random.number({ min: 99, max: 999 }),
                    rating: 5
                },
                {
                    id: 1,
                    title: faker.commerce.productName(),
                    logo: faker.image.image(),
                    location: faker.address.city(),
                    duration: '12',
                    date: '2019-12-01',
                    price: faker.random.number({ min: 99, max: 999 }),
                    rating: 4
                },
                {
                    id: 2,
                    title: faker.commerce.productName(),
                    logo: faker.image.image(),
                    location: faker.address.city(),
                    duration: '20',
                    date: '2019-12-01',
                    price: faker.random.number({ min: 99, max: 999 }),
                    rating: 3
                },
                {
                    id: 3,
                    title: faker.commerce.productName(),
                    logo: faker.image.image(),
                    location: faker.address.city(),
                    duration: '30',
                    date: '2019-12-01',
                    price: faker.random.number({ min: 99, max: 999 }),
                    rating: 5
                },

            ]
        };
    }

    state = { selectedCourse: {} };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onArrowClick = (course) => {
        this.setState({ selectedCourse: course });
    }

    renderList = () => this.state.courses.map((course) => {
        return <CourseCard course={course} id={course.id} key={course.id} onArrowClick={this.onArrowClick} />
    });

    render() {
        return <div className="course-container">{this.renderList()}</div>;
    }
}

export default CourseCardList;
