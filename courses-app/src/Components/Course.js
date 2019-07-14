import React from 'react';
import CourseCard from './CourseCard';
import CalendarCard from './CalendarCard';
import CertificateCard from './CertificateCard';
import ContactsCard from './ContactsCard';
import LectorCard from './LectorCard';
import ProgramCard from './ProgramCard';
import ReviewCard from './ReviewCard';
import { allCourses } from './fakeData';

class Course extends React.Component {
    state = { tab: "program", course: allCourses[this.props.match.params.id] };

    activateTab = event => {
        const activeCard = event.currentTarget.parentNode.parentNode.parentNode;
        const tab = event.currentTarget.getAttribute('data-tab');
        activeCard.querySelector('.tab-active').classList.remove('tab-active');
        event.currentTarget.classList.add('tab-active');
        this.setState({ tab });
    }

    renderNavigation() {
        return (
            <div className="card-info-tabs">
                <div className="card-info-tabs-tab tab-active" data-tab="program" onClick={this.activateTab}><i className="fas fa-info-circle fa-2x" /></div>
                <div className="card-info-tabs-tab" data-tab="lector" onClick={this.activateTab}><i className="fas fa-user-tie fa-2x" /></div>
                <div className="card-info-tabs-tab" data-tab="calendar" onClick={this.activateTab}><i className="fas fa-calendar-alt fa-2x" /></div>
                <div className="card-info-tabs-tab" data-tab="certificate" onClick={this.activateTab}><i className="fas fa-certificate fa-2x" /></div>
                <div className="card-info-tabs-tab" data-tab="reviews" onClick={this.activateTab}><i className="fas fa-comments fa-2x" /></div>
                <div className="card-info-tabs-tab" data-tab="contacts" onClick={this.activateTab}><i className="fas fa-envelope fa-2x" /></div>
            </div >
        );
    }

    renderTab = () => {
        let tab = "";

        switch (this.state.tab) {
            case "certificate":
                tab = <CertificateCard course={this.state.course} />;
                break;
            case "contacts":
                tab = <ContactsCard course={this.state.course} />;
                break;
            case "calendar":
                tab = <CalendarCard courses={allCourses} />;
                break;
            case "lector":
                tab = <LectorCard course={this.state.course} />;
                break;
            case "reviews":
                tab = <ReviewCard course={this.state.course} />;
                break;
            default:
                tab = <ProgramCard course={this.state.course} />;
                break;
        }
        return tab;
    }

    render() {
        console.log(this.props);
        return (
            <div className="course-info">
                <CourseCard course={this.state.course} />
                {this.renderNavigation()}
                {this.renderTab()}
            </div>
        );
    }
};

export default Course;