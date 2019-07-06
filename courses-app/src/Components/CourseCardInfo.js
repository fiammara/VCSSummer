import React from 'react';
import CalendarCard from './CalendarCard';
import CertificateCard from './CertificateCard';
import ContactsCard from './ContactsCard';
import LectorCard from './LectorCard';
import ProgramCard from './ProgramCard';
import { infoReviews } from './ReviewCard';
import { allCourses } from './fakeData';

class CourseCardInfo extends React.Component {

    state = { tab: "program" };

    activateTab = event => {
        const tab = event.currentTarget.getAttribute('data-tab');
        document.querySelector('.tab-active').classList.remove('tab-active');
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
                tab = <CertificateCard />;
                break;
            case "contacts":
                tab = <ContactsCard />;
                break;
            case "calendar":
                tab = <CalendarCard courses={allCourses} />;
                break;
            case "lector":
                tab = <LectorCard />;
                break;
            case "reviews":
                tab = <infoReviews />;
                break;
            default:
                tab = <ProgramCard />;
                break;
        }

        return (
            <div>
                {this.renderNavigation()}
                {tab}
            </div>
        );
    }

    render() {
        return (
            <div className="course-info">
                <div className="course-info-program">{this.renderTab()}</div>
            </div>
        );
    }
};

export default CourseCardInfo;