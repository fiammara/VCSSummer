import React from 'react';
import { Link } from 'react-router-dom';
import CalendarCard from './CalendarCard';
import CertificateCard from './CertificateCard';
import ContactsCard from './ContactsCard';
import LectorCard from './LectorCard';
import ProgramCard from './ProgramCard';
import ReviewCard from './ReviewCard';
import { allCourses } from './fakeData';

class CourseInfo extends React.Component {
    state = { tab: "program" };

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
                <div className="card-info-tabs-tab tab-active" data-tab="program" onClick={this.activateTab}>
                    PROGRAMA
                </div>
                <div className="card-info-tabs-tab" data-tab="lector" onClick={this.activateTab}>
                    LEKTORIUS
                </div>
                <div className="card-info-tabs-tab" data-tab="calendar" onClick={this.activateTab}>
                    KALENDORIUS
                </div>
                <div className="card-info-tabs-tab" data-tab="certificate" onClick={this.activateTab}>
                    SERTIFIKATAS
                </div>
                <div className="card-info-tabs-tab" data-tab="reviews" onClick={this.activateTab}>
                    ATSILIEPIMAI
                </div>
                <div className="card-info-tabs-tab" data-tab="contacts" onClick={this.activateTab}>
                    KONTAKTAI
                </div>
            </div >
        );
    }

    renderTab = () => {
        let tab = "";

        switch (this.state.tab) {
            case "certificate":
                tab = <CertificateCard course={this.props.course} />;
                break;
            case "contacts":
                tab = <ContactsCard course={this.props.course} />;
                break;
            case "calendar":
                tab = <CalendarCard courses={allCourses} handleSelectedCourse={this.handleSelectedCourse} />;
                break;
            case "lector":
                tab = <LectorCard course={this.props.course} />;
                break;
            case "reviews":
                tab = <ReviewCard course={this.props.course} />;
                break;
            default:
                tab = <ProgramCard course={this.props.course} />;
                break;
        }
        return tab;
    }

    renderRegistration() {
        return (
            <div className="course-card-registration">
                <span>REGISTRACIJA </span>
                <Link to='/'>  Random registration link</Link>
            </div>
        );
    }

    render() {
        return (
            <div className="course-info">
                {this.renderNavigation()}
                {this.renderTab()}
                {this.renderRegistration()}
            </div>
        );
    }
};

export default CourseInfo;