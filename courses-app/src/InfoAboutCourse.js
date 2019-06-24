import React from "react";
import InfoProgram from "./Models/Program";
import InfoLector from "./Models/Lector";
import InfoCalendar from "./Models/CourseCalendar";
// import InfoCert from "./Models/Cert";
// import InfoReviews from "./Models/Review";
// import InfoContacts from "./Models/Contacts";

const InfoAboutCourse = () => {
    return (
        <div id="mainContainer">
            <InfoProgram />
            <InfoLector />
            <InfoCalendar />
            {/* <InfoCert />
            <InfoReviews />
            <InfoContacts /> */}
        </div>
    );
};

export default InfoAboutCourse; 