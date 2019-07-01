import React from 'react';
import InfoProgram from './Program';
import InfoLector from './Lector';
import CourseCalendar from './CourseCalendar';
import InfoReviews from './Review';
import InfoContacts from './Contacts';
import CourseCard from "./CourseCard";
import Certificate from './Cert';

class CourseInfoCard extends React.Component {

    state = { tab: "program" };

    activateTab = event => {
        const tab = event.currentTarget.textContent;
        event.currentTarget.classList.add('tab-active');
        this.setState({ tab })
    }

    renderNavigation() {
        return (
            <div className="card-info-tabs">
                <div className="card-info-tabs-tab" onClick={this.activateTab}>PROGRAMA</div>
                <div className="card-info-tabs-tab" onClick={this.activateTab}>LEKTORIUS</div>
                <div className="card-info-tabs-tab" onClick={this.activateTab}>KALENDORIUS</div>
                <div className="card-info-tabs-tab" onClick={this.activateTab}>SERTIFIKATAS</div>
                <div className="card-info-tabs-tab" onClick={this.activateTab}>ATSILIEPIMAI</div>
                <div className="card-info-tabs-tab" onClick={this.activateTab}>KONTAKTAI</div>
            </div>
        );
    }

    renderTab = () => {
        let tab = "";

        switch (this.state.tab) {
            case "SERTIFIKATAS":
                tab = <Certificate />;
                break;
            case "KONTAKTAI":
                tab = <InfoContacts />;
                break;
            case "KALENDORIUS":
                tab = <CourseCalendar courses={CourseCard.allCourses} />;
                break;
            case "LEKTORIUS":
                tab = <InfoLector />;
                break;
            case "ATSILIEPIMAI":
                tab = <InfoReviews />;
                break;
            default:
                tab = <InfoProgram />;
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

export default CourseInfoCard;