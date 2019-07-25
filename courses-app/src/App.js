import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Filter from "./Filter";
import Blog from "./Blog";
import Duk from "./Duk";
import Course from "./Components/Course";
import AuthPage from "./AuthPage";
import Personal from "./Personal";
import Signup from "./Signup";
import CourseCalendar from "./CourseCalendar";
import CourseCardList from './Components/CourseCardList';
import { allCourses } from './Components/fakeData';
import "./App.css";
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

    render() {

        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route exact path="/courses" render={() => {
                        return <CourseCardList courses={allCourses} />
                    }}>
                    </Route>
                    <Route exact path="/courses/:id" component={Course}></Route>
                    <Route exact path="/filter" component={Filter}></Route>
                    <Route exact path="/duk" component={Duk}></Route>
                    <Route exact path="/blog" component={Blog}></Route>
                    <Route exact path="/personal" component={Personal}></Route>
                    <Route exact path="/signup" component={Signup}></Route> */}
                    <Route exact path="/auth" component={AuthPage}></Route>
                    <Route exact path="/calendar" component={CourseCalendar}></Route>

                </Switch>

                <Footer />
            </div>)
    }

}

export default App;