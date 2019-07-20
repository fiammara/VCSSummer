import React from 'react';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.css";
import "./Main.css";
import CourseCardList from './Components/CourseCardList';
import { allCourses } from './Components/fakeData';

 class Main extends React.Component {

    render() {

        return (
            
            <div className="main">
               
                <div className="divas">
                    <div className="textBlock">
                        <div className="tekstas">
                            <h2>Lorem ipsum dolor sit<span> amet, consetetur </span>sadipscing elitr, sed diam nonumy eirmod tempor?</h2>

                            <input className="searchas" type="text" placeholder="Search.." name="search" />
                            <Button className="btn1" href="/Filter" variant="primary"> Ieškoti</Button>
                            
                        </div>
                    </div>
                    <div className="postai">
                        <CourseCardList courses={allCourses} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
