import React from "react";
//import InfoProgram from "./Models/Program";
//import InfoLector from "./Models/Lector";
//import InfoCalendar from "./Models/CourseCalendar";
//import InfoCert from "./Models/Cert";
//import InfoReviews from "./Models/Review";
//import InfoContacts from "./Models/Contacts";

const Blog = () => {
    return (
        <div>
            <h3>pasirinkti pagal kategorijas</h3>
            <input type="text" name="fname" placeholder="First name"></input>

            <div class="grid-container">
                <div class="item1">baneris</div>
                <div class="item2">imgPost</div>
                <div class="item3">title</div>
                <div class="item4">Author</div>
                <div class="item5">Data</div>
                <div class="item6">text post</div>
                <div class="item7">Button</div>
            </div>
        </div>
    );
};

export default Blog; 
